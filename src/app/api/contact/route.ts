import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let name: string | undefined;
  let email: string | undefined;
  let message: string | undefined;

  try {
    const body = await request.json();
    name = typeof body?.name === "string" ? body.name.trim() : undefined;
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : undefined;
    message = typeof body?.message === "string" ? body.message.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!name || !email || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;

  if (!apiKey || !to) {
    console.warn("Contact form received but RESEND_API_KEY/NOTIFY_EMAIL_TO not configured", {
      name,
      email,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  const from =
    process.env.NOTIFY_EMAIL_FROM || "Mushoffee Contact Form <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`Resend error (${res.status}): ${body}`);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
