import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;

const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

let transporterPromise: Promise<any> | null = null;

async function getTransporter() {
  if (missingEnvVars.length) {
    return null;
  }

  if (!transporterPromise) {
    transporterPromise = import('nodemailer').then(({ default: nodemailer }) =>
      nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }),
    );
  }

  return transporterPromise;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = await getTransporter();

    if (!transporter) {
      console.error('SMTP settings are missing:', missingEnvVars);
      return NextResponse.json(
        {
          error:
            'Mail service is not configured. Please try again later or reach out directly at the provided email address.',
        },
        { status: 500 },
      );
    }

  await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again later.' },
      { status: 500 },
    );
  }
}
