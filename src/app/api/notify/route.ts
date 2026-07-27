import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function logLocally(email: string) {
  // Best-effort local fallback so signups are visible during development.
  // On Vercel's serverless filesystem this is ephemeral/read-only and will
  // silently no-op — the Resend notification below is the real delivery path.
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "waitlist.log"),
      `${new Date().toISOString()}\t${email}\n`
    );
  } catch {
    // ignore - not fatal
  }
}

async function sendNotificationEmail(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  if (!apiKey || !to) return { sent: false };

  const from =
    process.env.NOTIFY_EMAIL_FROM || "Mushoffee Waitlist <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: "New Mushoffee waitlist signup",
      text: `${email} just joined the restock waitlist at ${new Date().toLocaleString(
        "en-AU"
      )}.`,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend error (${res.status}): ${body}`);
  }

  return { sent: true };
}

export async function POST(request: Request) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  await logLocally(email);

  try {
    await sendNotificationEmail(email);
  } catch (err) {
    console.error("Failed to send notification email", err);
    return NextResponse.json(
      { error: "We couldn't save your email right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
