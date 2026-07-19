import type { Request, Response } from 'express';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, email, phone, totalScore, breakdown, type, pdfBase64, language } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Load Logo image as Base64 for inline email embedding
    const logoPath = path.join(process.cwd(), 'public', 'images', 'logoTTM.png');
    let logoBase64 = '';
    try {
      if (fs.existsSync(logoPath)) {
        logoBase64 = fs.readFileSync(logoPath, { encoding: 'base64' });
      }
    } catch (err) {
      console.error("Failed to read logo image:", err);
    }

    // CONFIGURATIE VOOR VERZENDEN (onboarding@resend.dev blijft actief)
    const COACH_TEST_EMAIL = "info@thethryvemethod.com";
    const FROM_EMAIL = "The Thryve Method <info@thethryvemethod.com>";
    
    // Directe, live link van de coach (Imgur)
    const COACH_IMAGE_URL = "https://i.imgur.com/Nz2Hev1.jpg";

    const isEnglish = language === 'ENG';

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

    // Waterdichte tabel layout voor de pijlerbalken
    const pillarBarsHtml = Object.entries(breakdown || {}).map(([pillar, score]) => {
      const s = score as number;
      const pct = Math.round((s / 20) * 100);
      
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
    // EMAIL 1: DYNAMISCH NAAR DE KLANT
    // ==========================================
    
    const clientAttachments: any[] = pdfBase64 ? [{
      filename: 'The_Thryve_Method_Audit.pdf',
      content: pdfBase64
    }] : [];

    if (logoBase64) {
      clientAttachments.push({
        filename: 'logoTTM.png',
        content: logoBase64,
        id: 'logo_ttm'
      });
    }

    const subjectLine = isEnglish 
      ? `⚡ Your The Thryve Method Performance Report is ready, ${firstName}!`
      : `⚡ Jouw The Thryve Method Performance Rapport is klaar, ${firstName}!`;

    const titleText = isEnglish ? "Your Performance Audit is Ready" : "Jouw Performance Audit is Klaar";
    const introText = isEnglish
      ? `Dear ${firstName}, we have analyzed your system. Your personal Blueprint is attached as a PDF.`
      : `Beste ${firstName}, we hebben je systeem geanalyseerd. Je persoonlijke Blueprint zit als PDF in de bijlage.`;
    const costTitle = isEnglish ? "What Is This Costing You?" : "Wat Kost Dit Jou?";
    const costText = isEnglish
      ? "Leaking energy and focus means you are working hard for a system that is not optimized. Check your blueprint and discover where your greatest growth potential lies. This is not a discipline problem, this is a system problem."
      : "Energie en focus lekken betekent dat je hard werkt voor een systeem dat niet is geoptimaliseerd. Bekijk je blueprint en ontdek waar jouw grootste groeipotentie ligt. Dit is geen discipline-probleem, dit is een systeem-probleem.";
    const actionTitle = isEnglish ? "Ready For Action?" : "Klaar Voor Actie?";
    const actionText = isEnglish
      ? "Schedule a free introductory call to discover how we can close your gaps together through Peak Performance architecture."
      : "Plan een gratis kennismakingsgesprek om te ontdekken hoe we samen jouw valkuilen kunnen dichten via Peak Performance architecture.";
    const ctaText = isEnglish ? "Schedule a Performance Call" : "Plan een Performance Call";

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email], // Gestuurd naar het e-mailadres dat is ingevuld in de quiz
      subject: subjectLine,
      attachments: clientAttachments,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
          ${emailStyles}
        </head>
        <body style="background-color: #0c1f0c; color: #e5e7eb; margin: 0; padding: 0;">
          <div style="background-color: #0c1f0c; min-height: 100vh; padding: 20px 0;">
            <div class="email-container">
              <div class="main-card">
                <div class="logo-wrapper">
                  ${logoBase64 ? `
                    <img src="cid:logo_ttm" alt="THE THRYVE METHOD" style="height: 60px; margin: 0 auto; display: block;" />
                  ` : `
                    <span class="thryve-logo">THE THRYVE METHOD</span>
                  `}
                </div>
                
                <h1 style="font-size: 28px; text-align: center; line-height: 1.1; margin-bottom: 12px; color: #ffffff;">${titleText}</h1>
                <p style="font-size: 15px; text-align: center; color: #a3b8a3; margin: 0 0 20px 0; line-height: 1.5; font-weight: 500;">
                  ${introText}
                </p>

                <div class="coach-section" style="border-top: none; margin-top: 10px; padding-top: 10px;">
                  <h3 style="font-size: 20px; margin-bottom: 10px; letter-spacing: -0.01em; color: #ffffff;">${costTitle}</h3>
                  <p style="font-size: 14px; color: #e5e7eb; line-height: 1.6; max-width: 420px; margin: 0 auto 25px auto;">
                    ${costText}
                  </p>
                  
                  <h3 style="font-size: 20px; margin-bottom: 6px; letter-spacing: -0.01em; margin-top: 30px; color: #ffffff;">${actionTitle}</h3>
                  <p style="font-size: 14px; color: #a3b8a3; line-height: 1.6; max-width: 420px; margin: 0 auto 25px auto; font-weight: 500;">
                    ${actionText}
                  </p>
                  <a href="https://cal.com/thethryvemethod/30min" class="cta-button">${ctaText}</a>
                </div>

                <p class="footer-text">
                  © ${new Date().getFullYear()} The Thryve Method. Built for high performers.
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // ==========================================
    // EMAIL 2: NAAR DE COACH (TESTADRES)
    // ==========================================
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [COACH_TEST_EMAIL], // Blijft naar jouw e-mail gaan voor controle
      subject: `🔥 Nieuwe Lead Performance Test: ${firstName} (${totalScore}/100)`,
      attachments: clientAttachments,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
          ${emailStyles}
        </head>
        <body style="background-color: #0c1f0c; color: #e5e7eb; margin: 0; padding: 0;">
          <div style="background-color: #0c1f0c; min-height: 100vh; padding: 20px 0;">
            <div class="email-container">
              <div class="main-card">
                <div class="logo-wrapper">
                  ${logoBase64 ? `
                    <img src="cid:logo_ttm" alt="THE THRYVE METHOD" style="height: 60px; margin: 0 auto; display: block;" />
                  ` : `
                    <span class="thryve-logo">THE THRYVE METHOD</span>
                  `}
                </div>
                
                <div class="lead-info-box">
                  <h4 class="lead-title">📋 Contactgegevens Nieuwe Lead</h4>
                  <div class="lead-metric"><strong>Naam:</strong> ${firstName}</div>
                  <div class="lead-metric"><strong>E-mail:</strong> ${email}</div>
                  <div class="lead-metric"><strong>Telefoon:</strong> ${phone || 'Niet ingevuld'}</div>
                  <div class="lead-metric"><strong>Score:</strong> ${totalScore}/100</div>
                  <div class="lead-metric"><strong>Archetype:</strong> ${type}</div>
                </div>

                <p style="font-size: 14px; text-align: center; color: #a3b8a3; margin: 0; padding-bottom: 15px; font-weight: 500;">De gegenereerde PDF Blueprint vind je in de bijlage van deze e-mail.</p>

                <p class="footer-text">
                  © ${new Date().getFullYear()} The Thryve Method HQ. Directe opvolging vereist.
                </p>
              </div>
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