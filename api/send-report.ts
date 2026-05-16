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

    // CONFIGURATIE VOOR TEST MODUS
    const TEST_EMAIL = "luchijdra1@gmail.com";
    const FROM_EMAIL = "The Thryve Method <onboarding@resend.dev>";

    // Gedeelde CSS stijlen voor een consistente high-end look in beide e-mails
    const emailStyles = `
      <style>
        body { font-family: 'Quicksand', -apple-system, sans-serif; color: #e5e7eb; background-color: #071307; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4 { font-family: 'Space Grotesk', -apple-system, sans-serif; font-weight: 700; color: #ffffff; text-transform: uppercase; margin: 0; letter-spacing: -0.01em; }
        .email-container { max-width: 600px; margin: 0 auto; background-color: #071307; padding: 30px 20px; }
        .main-card { background-color: #0c1f0c; border: 1px solid rgba(16, 185, 129, 0.15); border-radius: 24px; padding: 40px 35px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
        .logo-wrapper { text-align: center; margin-bottom: 35px; }
        .thryve-logo { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 28px; letter-spacing: 0.15em; color: #ffffff; text-transform: uppercase; }
        
        /* Lead Info Card (Exclusief voor de Coach) */
        .lead-info-box { background: rgba(16, 185, 129, 0.1); border: 1px dashed #10b981; padding: 25px; border-radius: 16px; margin-bottom: 30px; }
        .lead-title { color: #10b981; font-size: 14px; margin-bottom: 12px; letter-spacing: 0.05em; }
        .lead-metric { font-size: 14px; margin-bottom: 6px; color: #e5e7eb; }
        
        .score-badge-box { background: linear-gradient(135deg, #091a09 0%, #051005 100%); border: 1px solid #10b981; padding: 30px 20px; border-radius: 20px; margin: 35px 0; text-align: center; }
        .score-number { font-size: 48px; color: #10b981; font-family: 'Space Grotesk', sans-serif; font-weight: 700; margin-bottom: 5px; line-height: 1; }
        .type-label { font-size: 16px; font-weight: 600; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; opacity: 0.9; }
        .pillar-list { list-style: none; padding: 0; margin: 25px 0; }
        .pillar-item { margin-bottom: 20px; }
        .pillar-meta { display: flex; justify-content: space-between; font-weight: 600; font-size: 14px; margin-bottom: 6px; color: #ffffff; }
        .track-bar { background-color: #112611; height: 8px; border-radius: 10px; width: 100%; overflow: hidden; }
        .fill-bar { background-color: #10b981; height: 100%; border-radius: 10px; }
        .recommendation-card { background-color: rgba(16, 185, 129, 0.06); border-left: 4px solid #10b981; padding: 25px; border-radius: 4px 16px 16px 4px; margin: 35px 0; }
        .coach-section { text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); margin-top: 40px; padding-top: 40px; }
        .coach-avatar { width: 140px; height: 140px; border-radius: 50%; object-fit: cover; border: 3px solid #10b981; margin-bottom: 20px; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2); }
        .cta-button { background-color: #10b981; color: #ffffff !important; padding: 18px 36px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 15px; display: inline-block; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 15px; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3); font-family: 'Space Grotesk', sans-serif; }
        .footer-text { text-align: center; font-size: 11px; color: #526652; margin-top: 40px; letter-spacing: 0.02em; text-transform: uppercase; }
      </style>
    `;

    // Genereer de HTML-structuur voor de scorebalken (herbruikbaar voor beide e-mails)
    const pillarBarsHtml = Object.entries(breakdown).map(([pillar, score]) => {
      const s = score as number;
      const pct = Math.round((s / 20) * 100);
      return `
        <li class="pillar-item">
          <div class="pillar-meta">
            <span>${pillar}</span>
            <span style="color: #10b981;">${pct}%</span>
          </div>
          <div class="track-bar">
            <div class="fill-bar" style="width: ${pct}%;"></div>
          </div>
        </li>
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
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
          ${emailStyles}
        </head>
        <body>
          <div class="email-container">
            <div class="main-card">
              <div class="logo-wrapper">
                <span class="thryve-logo">THRYVE</span>
              </div>
              
              <h1 style="font-size: 26px; text-align: center; line-height: 1.2; margin-bottom: 10px;">Jouw Performance Rapport</h1>
              <p style="font-size: 15px; text-align: center; color: #a3b8a3; margin: 0; font-weight: 500;">Beste ${firstName}, we hebben je data geanalyseerd. Dit is jouw operating system blauwdruk:</p>
              
              <div class="score-badge-box">
                <div class="score-number">${totalScore}<span style="font-size: 24px; color: rgba(255,255,255,0.4);">/100</span></div>
                <div class="type-label">Systeem Profiel: ${type}</div>
              </div>

              <h3 style="font-size: 16px; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 8px; margin-bottom: 20px; letter-spacing: 0.05em;">Gedetailleerde Pijler Score</h3>
              <ul class="pillar-list">
                ${pillarBarsHtml}
              </ul>

              <div class="recommendation-card">
                <h4 style="color: #10b981; font-size: 14px; margin-bottom: 8px; letter-spacing: 0.05em;">Directe Groeikans: ${weakestPillar}</h4>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e5e7eb; font-style: italic;">
                  "${recommendation}"
                </p>
              </div>

              <div class="coach-section">
                <img src="https://thethryvemethod.com/images/about.webp" alt="Iven van Stekelenburg" class="coach-avatar">
                <h3 style="font-size: 18px; margin-bottom: 4px;">Laten we jouw systeem opschalen</h3>
                <p style="font-size: 14px; color: #a3b8a3; line-height: 1.5; max-width: 400px; margin: 0 auto 25px auto;">
                  Als ondernemer is je lichaam de belangrijkste asset van je bedrijf. Laten we tijdens een gratis strategiesessie jouw knelpunten omzetten in een onbreekbaar peak-performance ritme.
                </p>
                <a href="https://cal.com/thryvemethod/45min" class="cta-button">Plan je strategiesessie</a>
              </div>

              <p class="email-container footer-text" style="padding: 0; margin-top: 30px;">
                © ${new Date().getFullYear()} The Thryve Method. Built for high performers.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // ==========================================
    // EMAIL 2: NAAR DE COACH (Inclusief Lead Info)
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
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
          ${emailStyles}
        </head>
        <body>
          <div class="email-container">
            <div class="main-card">
              <div class="logo-wrapper">
                <span class="thryve-logo">THRYVE SYSTEM</span>
              </div>
              
              <div class="lead-info-box">
                <h4 class="lead-title">📋 Contactgegevens Lead</h4>
                <div class="lead-metric"><strong>Naam:</strong> ${firstName} ${lastName}</div>
                <div class="lead-metric"><strong>E-mail:</strong> ${email}</div>
                <div class="lead-metric"><strong>Telefoon:</strong> ${phone}</div>
              </div>

              <h1 style="font-size: 24px; text-align: center; line-height: 1.2; margin-bottom: 5px;">Verzonden Rapport Kopie</h1>
              <p style="font-size: 14px; text-align: center; color: #a3b8a3; margin: 0;">Hieronder zie je exact het rapport dat naar ${firstName} is verzonden:</p>
              
              <div class="score-badge-box">
                <div class="score-number">${totalScore}<span style="font-size: 24px; color: rgba(255,255,255,0.4);">/100</span></div>
                <div class="type-label">Systeem Profiel: ${type}</div>
              </div>

              <h3 style="font-size: 16px; border-bottom: 1px solid rgba(16, 185, 129, 0.2); padding-bottom: 8px; margin-bottom: 20px; letter-spacing: 0.05em;">Gedetailleerde Pijler Score</h3>
              <ul class="pillar-list">
                ${pillarBarsHtml}
              </ul>

              <div class="recommendation-card">
                <h4 style="color: #10b981; font-size: 14px; margin-bottom: 8px; letter-spacing: 0.05em;">Grootste Knelpunt: ${weakestPillar}</h4>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e5e7eb; font-style: italic;">
                  "${recommendation}"
                </p>
              </div>

              <p class="email-container footer-text" style="padding: 0; margin-top: 30px;">
                © ${new Date().getFullYear()} The Thryve Method HQ. Directe lead opvolging vereist.
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