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
        <!DOCTYPE html>
        <html>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Quicksand', sans-serif; color: #e5e7eb; background-color: #071307; }
            h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #ffffff; }
            .thryve-logo { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 32px; letter-spacing: 0.1em; color: #10b981; }
            .cta-button { background-color: #10b981; color: #ffffff; padding: 16px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; font-family: 'Quicksand', sans-serif; }
          </style>
        </head>
        <body style="background-color: #071307; padding: 40px;">
          <div style="font-family: 'Quicksand', sans-serif; background-color: #0c1f0c; padding: 40px; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <span class="thryve-logo">THRYVE</span>
            </div>
            <h1 style="text-align: center;">Jouw Performance Rapport</h1>
            <p style="font-size: 18px; text-align: center;">Beste ${firstName}, bedankt voor het doen van de Peak Performance Test.</p>
            
            <div style="background-color: #071307; border: 1px solid #10b981; padding: 20px; border-radius: 12px; margin: 30px 0; text-align: center;">
              <h2 style="color: #10b981; margin-top: 0;">Totale Score: ${totalScore}/100</h2>
              <p style="font-size: 20px; font-weight: bold;">Jouw Type: ${type}</p>
            </div>

            <div style="margin-bottom: 30px;">
              <h3 style="border-bottom: 1px solid #10b981; padding-bottom: 10px;">Jouw Prestaties</h3>
              <ul style="list-style: none; padding: 0;">
                ${Object.entries(breakdown).map(([pillar, score]) => {
                  const s = score as number;
                  const pct = Math.round((s / 20) * 100);
                  return `
                  <li style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 5px;">
                      <span>${pillar}</span>
                      <span>${pct}%</span>
                    </div>
                    <div style="background-color: #1a2e1a; height: 10px; border-radius: 5px;">
                      <div style="background-color: #10b981; height: 100%; width: ${pct}%; border-radius: 5px;"></div>
                    </div>
                  </li>
                `}).join('')}
              </ul>
            </div>

            <div style="text-align: center; margin-top: 40px; margin-bottom: 30px;">
              <img src="https://thethryvemethod.com/images/hero.webp" alt="Iven van Stekelenburg" style="width: 250px; border-radius: 12px; margin-bottom: 20px;">
              <p style="font-size: 16px; margin-bottom: 25px;">Wil je deze resultaten dieper analyseren en een plan maken om jouw peak performance te bereiken? Laten we samen zitten.</p>
              <a href="https://cal.com/thryvemethod/45min" class="cta-button">Plan je gratis Strategiegesprek</a>
            </div>

            <p style="text-align: center; font-size: 12px; color: #888; margin-top: 50px;">
              © ${new Date().getFullYear()} The Thryve Method. Alle rechten voorbehouden.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // Email 2: To the Coach (sent to test email, branded same as client)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TEST_EMAIL],
      subject: `Nieuwe Lead Performance Test: ${firstName} ${lastName} - Score: ${totalScore}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: 'Quicksand', sans-serif; background-color: #071307; color: #ffffff; padding: 20px;">
          <h2 style="font-family: 'Space Grotesk', sans-serif; color: #10b981;">Nieuwe Lead: ${firstName} ${lastName}</h2>
          <p><strong>Email voor contact:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone}</p>
          <hr style="border: 0; border-top: 1px solid #336633; margin: 20px 0;">
          <h3>Resultaten</h3>
          <p><strong>Totale Score:</strong> ${totalScore}/100</p>
          <p><strong>Type:</strong> ${type}</p>
          <h4>Pijler scores:</h4>
          <ul>
            ${Object.entries(breakdown).map(([pillar, score]) => `<li>${pillar}: ${Math.round(((score as number) / 20) * 100)}%</li>`).join('')}
          </ul>
        </body>
        </html>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending report:", error);
    res.status(500).json({ error: "Failed to send report" });
  }
}
