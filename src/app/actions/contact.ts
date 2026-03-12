"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";
import { escapeHtml } from "@/lib/sanitize";

const MAX_NAME = 200;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 500;
const MAX_MESSAGE = 5000;

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  if (realIp) return realIp;
  return "unknown";
}

function createTransporter() {
  const region = process.env.AWS_SES_REGION || "us-east-1";
  const hasAwsCreds =
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY;

  if (hasAwsCreds) {
    const sesClient = new SESv2Client({
      region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
    return nodemailer.createTransport({
      SES: { sesClient, SendEmailCommand },
    });
  }

  return null;
}

export async function submitContactForm(prevState: unknown, formData: FormData) {
  try {
    const ip = await getClientIp();
    const { allowed, retryAfter } = checkRateLimit(`contact:${ip}`, RATE_LIMITS.contact);
    if (!allowed) {
      return {
        success: false,
        error: `Too many requests. Please try again in ${retryAfter ?? 60} seconds.`,
        message: "",
      };
    }

    const name = String(formData.get("name") ?? "").trim().slice(0, MAX_NAME);
    const email = String(formData.get("email") ?? "").trim().slice(0, MAX_EMAIL);
    const subject = String(formData.get("subject") ?? "").trim().slice(0, MAX_SUBJECT);
    const message = String(formData.get("message") ?? "").trim().slice(0, MAX_MESSAGE);
    const marketing = formData.get("marketing") === "on";
    const news = formData.get("news") === "on";
    const locale = String(formData.get("locale") ?? "en");
    const isDe = locale === "de";

    if (!name || !email) {
      return { success: false, error: "Name and email are required", message: "" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address.", message: "" };
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const from = process.env.CONTACT_EMAIL_FROM || "noreply@solutionplus.io";
    const to = process.env.CONTACT_EMAIL_TO ? process.env.CONTACT_EMAIL_TO.split(',') : ["sales@solutionplus.io"];

    // Ensure we have a valid reply-to address
    const replyTo = to.length > 0 ? to[0] : "sales@solutionplus.io";

    // Debugging environment variables in development
    if (process.env.NODE_ENV !== "production") {
      console.log("Contact form submission targeting:", to);
    }

    const mailOptions = {
      from,
      to,
      replyTo: email,
      subject: `[Contact Form] New Request: ${subject || "No Subject"} - from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "N/A"}

Message:
${message || "N/A"}

Preferences:
Marketing Emails: ${marketing ? "Yes" : "No"}
News & Updates: ${news ? "Yes" : "No"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h3 style="color: #ff7043; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #126dfb;">${safeEmail}</a></p>
          <p><strong>Subject:</strong> ${safeSubject || "N/A"}</p>
          
          <div style="margin-top: 20px;">
            <h4 style="margin-bottom: 5px; color: #333;">Message:</h4>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #ff7043; color: #555;">
              <p style="margin: 0; line-height: 1.5; white-space: pre-wrap;">${safeMessage || "N/A"}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px; font-size: 13px; color: #777;">
            <p style="margin: 5px 0;"><strong>Marketing Emails:</strong> ${marketing ? "Yes" : "No"}</p>
            <p style="margin: 5px 0;"><strong>News & Updates:</strong> ${news ? "Yes" : "No"}</p>
          </div>
        </div>
      `,
    };

    const ackSubject = isDe
      ? "Vielen Dank für Ihre Kontaktaufnahme"
      : "Thank you for contacting us";

    const ackText = isDe
      ? `Hallo ${name},\n\nvielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und unser Team wird sich in Kürze bei Ihnen melden.\n\nMit freundlichen Grüßen,\nIhr SolutionPlus Team`
      : `Hi ${name},\n\nThank you for reaching out! We have received your message and our team will get back to you shortly.\n\nBest regards,\nThe SolutionPlus Team`;

    const ackHtml = isDe
      ? `<p>Hallo ${safeName},</p><p>vielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und unser Team wird sich in Kürze bei Ihnen melden.</p><p>Mit freundlichen Grüßen,<br/>Ihr SolutionPlus Team</p>`
      : `<p>Hi ${safeName},</p><p>Thank you for reaching out! We have received your message and our team will get back to you shortly.</p><p>Best regards,<br/>The SolutionPlus Team</p>`;

    const ackMailOptions = {
      from,
      to: email,
      replyTo: replyTo,
      subject: ackSubject,
      text: ackText,
      html: ackHtml,
    };

    const transporter = createTransporter();
    if (transporter) {
      try {
        console.log("Sending contact notification to:", to);
        const notifyResult = await transporter.sendMail(mailOptions);
        console.log("Notification send result:", notifyResult.messageId);
      } catch (err) {
        console.error("Failed to send notification email to sales:", err);
        // If the notification fails, don't send the acknowledgment
        throw err;
      }

      try {
        console.log("Sending acknowledgment to:", email);
        const ackResult = await transporter.sendMail(ackMailOptions);
        console.log("Acknowledgment send result:", ackResult.messageId);
      } catch (err) {
        console.error("Failed to send acknowledgment email to user:", err);
      }
    } else if (process.env.NODE_ENV !== "production") {
      console.warn(
        "AWS SES credentials (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY) not set. Skipping email send."
      );
    }

    return { success: true, message: "Your message has been sent successfully.", error: "" };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error submitting contact form:", error);
    }
    return { success: false, error: "Failed to send message. Please try again later.", message: "" };
  }
}
