import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Validazione campi ────────────────────────────────────────────────────────

function validate({ name, email, subject, message }) {
  const errors = {};

  if (!name || name.trim().length < 3)
    errors.name = "Il nome deve contenere almeno 3 caratteri.";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Inserisci un indirizzo email valido.";

  if (!subject || subject.trim().length < 2)
    errors.subject = "L'oggetto è obbligatorio.";

  if (!message || message.trim().length < 10)
    errors.message = "Il messaggio deve contenere almeno 10 caratteri.";

  return errors;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  // Validazione
  const errors = validate({ name, email, subject, message });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // Configurazione SMTP (legge da variabili d'ambiente — vedi .env.local)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true per porta 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipientEmail = process.env.CONTACT_TO_EMAIL;
  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  if (!recipientEmail) {
    console.error("[contact] CONTACT_TO_EMAIL non configurato.");
    return NextResponse.json(
      { error: "Server misconfiguration: missing recipient." },
      { status: 500 }
    );
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${senderEmail}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `[Portfolio] ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <table style="font-family:sans-serif;font-size:15px;color:#333">
          <tr><td><strong>Nome:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Oggetto:</strong></td><td>${subject}</td></tr>
        </table>
        <hr/>
        <p style="white-space:pre-line">${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Errore SMTP:", err);
    return NextResponse.json(
      { error: "Errore nell'invio dell'email. Riprova più tardi." },
      { status: 500 }
    );
  }
}
