/**
 * Email sender using Resend
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface DigestEmail {
  to: string;
  subject: string;
  html: string;
}

export async function sendDigest(email: DigestEmail): Promise<boolean> {
  try {
    await resend.emails.send({
      from: "Daily Digest <digest@yourdomain.com>",
      to: email.to,
      subject: email.subject,
      html: email.html,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
