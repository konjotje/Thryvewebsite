import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, totalScore, breakdown, type, weakestPillar, recommendation } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // IMPORTANT: Resend Test Mode limitation
    // BOTH 'to' addresses must be your verified test email.
    const TEST_EMAIL = "luchijdra1@gmail.com";
    const FROM_EMAIL = "The Thryve Method <onboarding@resend.dev>";

    // Email 1: To the Client (sent to test email)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TEST_EMAIL],
      subject: "Jouw Thryve Performance Rapport & Score",
      html: `
        <div style="font-family: sans-serif; background-color: #071307; color: #e5e7eb; padding: 40px; border-radius: 8px;">
          <h1 style="color: #ffffff; text-align: center;">Jouw Performance Rapport</h1>
          <p style="font-size: 18px; text-align: center;">Beste ${firstName}, bedankt voor het doen van de Peak Performance Test.</p>
          
          <div style="background-color: #0c1f0c; border: 1px solid #10b981; padding: 20px; border-radius: 12px; margin: 30px 0; text-align: center;">
            <h2 style="color: #10b981; margin-top: 0;">Totale Score: ${totalScore}/100</h2>
            <p style="font-size: 20px; font-weight: bold; color: #ffffff;">Jouw Type: ${type}</p>
          </div>
          <div style="margin-bottom: 30px;">
            <p>Op basis van je antwoorden zien we dat <strong>${weakestPillar}</strong> op dit moment je grootste groeikans is.</p>
            <div style="background-color: #1a2e1a; padding: 15px; border-radius: 8px; font-style: italic;">
              "${recommendation}"
            </div>
          </div>
        </div>
      `,
    });

    // Email 2: To the Coach (sent to test email)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TEST_EMAIL],
      subject: `Nieuwe Lead Performance Test: ${firstName} ${lastName} - Score: ${totalScore}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nieuwe Test Resultaat</h2>
          <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email voor contact:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone}</p>
          <hr>
          <h3>Resultaten</h3>
          <p><strong>Totale Score:</strong> ${totalScore}/100</p>
          <p><strong>Type:</strong> ${type}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending report:", error);
    res.status(500).json({ error: "Failed to send report" });
  }
}
