import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "The form could not be read." }, { status: 400 });
  }

  if (payload.company) {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !subject || message.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Add your name, a valid email, a subject, and a message of at least 10 characters." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || name.length > 80 || email.length > 120 || subject.length > 140 || message.length > 5000) {
    return NextResponse.json({ ok: false, message: "Check the form fields and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message:
          "Email delivery is not configured. Add RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL, or publish an address in src/data/site.ts for the email-app fallback.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "The email service rejected the message. Check the Resend sender and API key.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, message: "Message sent. Thank you." });
}
