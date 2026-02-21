"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const marketing = formData.get("marketing") === "on";
    const news = formData.get("news") === "on";

    if (!name || !email) {
      return { success: false, error: "Name and email are required", message: "" };
    }

    // Configure Nodemailer with environment variables
    // Users can set these in their .env.local file:
    // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
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
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <h4>Message:</h4>
        <p>${message ? message.replace(/\n/g, '<br>') : "N/A"}</p>
        <hr/>
        <p><strong>Marketing Emails:</strong> ${marketing ? "Yes" : "No"}</p>
        <p><strong>News & Updates:</strong> ${news ? "Yes" : "No"}</p>
      `,
    };

    // If SMTP_USER is configured, attempt to send email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP credentials not provided in .env. Skipping actual email send. Payload:", mailOptions);
    }

    return { success: true, message: "Your message has been sent successfully.", error: "" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to send message. Please try again later.", message: "" };
  }
}
