"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
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
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "hello@solutionplus.io",
      replyTo: email,
      subject: `New Contact Request: ${subject || "No Subject"} - from ${name}`,
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
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject || "N/A"}</p>
        <h4>Message:</h4>
        <p>${safeMessage || "N/A"}</p>
        <hr/>
        <p><strong>Marketing Emails:</strong> ${marketing ? "Yes" : "No"}</p>
        <p><strong>News & Updates:</strong> ${news ? "Yes" : "No"}</p>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else if (process.env.NODE_ENV !== "production") {
      console.warn("SMTP credentials not provided in .env. Skipping actual email send.");
    }

    return { success: true, message: "Your message has been sent successfully.", error: "" };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error submitting contact form:", error);
    }
    return { success: false, error: "Failed to send message. Please try again later.", message: "" };
  }
}
