"use server";

import { z } from "zod";
import { env } from "@/lib/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(data: FormData) {
  const emailDataSchema = z.object({
    email: z.string().email().min(1),
    message: z.string().min(1).max(500),
  });

  try {
    const emailData = emailDataSchema.parse(Object.fromEntries(data));

    await resend.emails.send({
      from: "Contact from <onboarding@resend.dev>",
      to: "pipecalgaro@gmail.com",
      subject: "Contact from Portfolio",
      replyTo: emailData.email,
      html: `<p>${emailData.message}</p><br/><p>From: ${emailData.email}</p>`,
    });

    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
}
