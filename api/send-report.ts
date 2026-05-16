import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, totalScore, breakdown, type } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // CONFIGURATIE VOOR TEST EN VERZENDEN
    const TEST_EMAIL = "luchijdra1@gmail.com";
    const FROM_EMAIL = "The Thryve Method <onboarding@resend.dev>";
    
    // Directe, live link van de coach (Imgur) die nu overal laadt
    const COACH_IMAGE_URL = "https://i.imgur.com/Nz2Hev1.jpg";

    // Gedeelde stijlen: Helvetica voor tekst, Space Grotesk voor titels. Geen zwarte buitenachtergrond.
    const emailStyles = `
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e5e7eb; background-color: #0c1f0c; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4 { font-family: 'Space Grotesk', -apple-system, sans-serif; font-weight: 700; color: #ffffff; text-transform: uppercase; margin: 0; letter-spacing: -0.02em; }
        p, span, td, li { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        .email-container { max-width: 600px; margin: 0 auto; padding: 20px 0; }
        .main-card { background-color: #0c1f0c; border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 24px; padding: 45px 35px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); }
        .logo-wrapper { text-align: center; margin-bottom: 35px; }
        .thryve-logo { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 30px; letter-spacing: 0.15em; color: #10b981; text-transform: uppercase; }
        
        .lead-info-box { background: rgba(16, 185, 129, 0.08); border: 1px dashed #10b981; padding: 25px; border-radius: 16px; margin-bottom: 35px; }
        .lead-title { color: #10b981; font-size: 14px; margin-bottom: 12px; letter-spacing: 0.05em; font-family: 'Space Grotesk', sans-serif; font-weight: 700; }
        .lead-metric { font-size: 14px; margin-bottom: 6px; color: #e5e7eb; }
        
        .score-badge-box { background: linear-gradient(135deg, #091a09 0%, #051005 100%); border: 1px solid #10b981; padding: 35px 20px; border-radius: 20px; margin: 35px 0; text-align: center; box-shadow: 0 0 30px rgba(16, 185, 129, 0.15); }
        .score-number { font-size: 56px; color: #10b981; font-family: 'Space Grotesk', sans-serif; font-weight: 700; margin-bottom: 5px; line-height: 1; }
        .type-label { font-size: 15px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.08em; margin: 0; font-family: 'Space Grotesk', sans-serif; }
        
        .pillar-table { width: 100%; border-collapse: collapse; margin: 25px 0; }
        .pillar-row { margin-bottom: 22px; }
        .pillar-name { font-weight: 500; font-size: 15px; color: #ffffff; text-align: left; padding-bottom: 6px; }
        .pillar-score { font-weight: 700; font-size: 15px; color: #10b981; text-align: right; padding-bottom: 6px; }
        .track-bar { background-color: #112611; height: 10px; border-radius: 10px; width: 100%; overflow: hidden; }
        .fill-bar { background-color: #10b981; height: 100%; border-radius: 10px; }
        
        .coach-section { text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.08); margin-top: 40px; padding-top: 45px; }
        .coach-avatar { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #10b981; margin-bottom: 22px; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3); display: inline-block; }
        .cta-button { background-color: #10b981; color: #ffffff !important; padding: 18px 40px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 15px; box-shadow: 0 12px 24px rgba(16, 185, 129, 0.3); font-family: 'Space Grotesk', sans-serif; }
        .footer-text { text-align: center; font-size: 10px; color: #4b5f4b; margin-top: 40px; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 600; font-family: 'Space Grotesk', sans-serif; }
      </style>
    `;

    // Waterdichte tabel layout voor de pijlerbalken (geen flexbox problemen meer)
    const pillarBarsHtml = Object.entries(breakdown).map(([pillar, score]) => {
      const s = score as number;
      const pct = Math.round((s / 20) * 100);
      
      // Zorg voor nette Schrijfwijze (alleen eerste letter hoofdletter)
      const formattedPillar = pillar.charAt(0).toUpperCase() + pillar.slice(1).toLowerCase();

      return `
        <tr>
          <td style="padding-bottom: 20px;">
            <table width="100%" style="border-collapse: collapse;">
              <tr>
                <td class="pillar-name">${formattedPillar}</td>
                <td class="pillar-score">${pct}%</td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="track-bar">
                    <div class="fill-bar" style="width: ${pct}%;"></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `;
    }).join('');

    // ==========================================
    // EMAIL 1: NAAR DE KLANT
    // ==========================================
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TEST_EMAIL], // In productie: [email]
      subject: `⚡ Jouw Thryve Performance Rapport is klaar, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
          ${emailStyles}
        </head>
        <body>
          <div class="email-container">
            <div class="main-card">
              <div class="logo-wrapper">
                <span class="thryve-logo">THRYVE</span>
              </div>
              
              <h1 style="font-size: 28px; text-align: center; line-height: 1.1; margin-bottom: 12px;">Jouw Performance Rapport</h1>
              <p style="font-size: 15px; text-align: center; color: #a3b8a3; margin: 0; line-height: 1.5; font-weight: 500;">Beste ${firstName}, we hebben je data geanalyseerd. Dit is jouw operating system blauwdruk:</p>
              
              <div class="score-badge-box">
                <div class="score-number">${totalScore}<span style="font-size: 26px; color: rgba(255,255,255,0.35);">/100</span></div>
                <div class="type-label">Systeem Profiel: ${type}</div>
              </div>

              <h3 style="font-size: 15px; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 10px; margin-bottom: 25px; letter-spacing: 0.05em; color: #10b981;">Gedetailleerde Pijler Status</h3>
              <table class="pillar-table">
                ${pillarBarsHtml}
              </table>

              <div class="coach-section">
                <img src="${COACH_IMAGE_URL}" alt="Iven van Stekelenburg" class="coach-avatar">
                <h3 style="font-size: 20px; margin-bottom: 6px; letter-spacing: -0.01em;">Laten we jouw systeem optimaliseren</h3>
                <p style="font-size: 14px; color: #a3b8a3; line-height: 1.6; max-width: 420px; margin: 0 auto 25px auto; font-weight: 500;">
                  Als ondernemer is je brein en energie de motor van je business. Laten we tijdens een gratis strategiesessie jouw knelpunten omzetten in een onbreekbaar peak-performance ritme.
                </p>
                <a href="https://cal.com/thryvemethod/45min" class="cta-button">Plan je strategiesessie</a>
              </div>

              <p class="footer-text">
                © ${new Date().getFullYear()} The Thryve Method. Built for high performers.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // ==========================================
    // EMAIL 2: NAAR DE COACH
    // ==========================================
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TEST_EMAIL], // In productie: ["info@thethryvemethod.com"]
      subject: `🔥 Nieuwe Lead Performance Test: ${firstName} ${lastName} (${totalScore}/100)`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
          ${emailStyles}
        </head>
        <body>
          <div class="email-container">
            <div class="main-card">
              <div class="logo-wrapper">
                <span class="thryve-logo">THRYVE SYSTEM</span>
              </div>
              
              <div class="lead-info-box">
                <h4 class="lead-title">📋 Contactgegevens Ondernemer</h4>
                <div class="lead-metric"><strong>Naam:</strong> ${firstName} ${lastName}</div>
                <div class="lead-metric"><strong>E-mail:</strong> ${email}</div>
                <div class="lead-metric"><strong>Telefoon:</strong> ${phone}</div>
              </div>

              <h1 style="font-size: 22px; text-align: center; line-height: 1.2; margin-bottom: 5px;">Gegenereerd Rapport Overzicht</h1>
              <p style="font-size: 14px; text-align: center; color: #a3b8a3; margin: 0; padding-bottom: 15px; font-weight: 500;">Dit is de exacte blauwdruk die naar de lead is verzonden:</p>
              
              <div class="score-badge-box">
                <div class="score-number">${totalScore}<span style="font-size: 26px; color: rgba(255,255,255,0.35);">/100</span></div>
                <div class="type-label">Systeem Profiel: ${type}</div>
              </div>

              <h3 style="font-size: 15px; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 10px; margin-bottom: 25px; letter-spacing: 0.05em; color: #10b981;">Pijler Verdeling</h3>
              <table class="pillar-table">
                ${pillarBarsHtml}
              </table>

              <div class="coach-section">
                <img src="${COACH_IMAGE_URL}" alt="Iven van Stekelenburg" class="coach-avatar">
              </div>

              <p class="footer-text">
                © ${new Date().getFullYear()} The Thryve Method HQ. Directe opvolging vereist.
              </p>
            </div>
          </div>
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