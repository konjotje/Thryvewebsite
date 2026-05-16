import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for performance report
  app.post("/api/send-report", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, totalScore, breakdown, type, weakestPillar, recommendation } = req.body;

      if (!firstName || !email) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Email 1: To the Client
      const clientEmail = await resend.emails.send({
        from: "The Thryve Method <rapport@thethryvemethod.com>",
        to: [email],
        subject: "Jouw Thryve Performance Rapport & Score",
        html: `
          <div style="font-family: sans-serif; background-color: #071307; color: #e5e7eb; padding: 40px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://thethryvemethod.com/images/thryvemethodlogo.svg" alt="The Thryve Method" style="width: 200px;">
            </div>
            <h1 style="color: #ffffff; text-align: center;">Jouw Performance Rapport</h1>
            <p style="font-size: 18px; text-align: center;">Beste ${firstName}, bedankt voor het doen van de Peak Performance Test.</p>
            
            <div style="background-color: #0c1f0c; border: 1px solid #10b981; padding: 20px; border-radius: 12px; margin: 30px 0; text-align: center;">
              <h2 style="color: #10b981; margin-top: 0;">Totale Score: ${totalScore}/100</h2>
              <p style="font-size: 20px; font-weight: bold; color: #ffffff;">Jouw Type: ${type}</p>
            </div>

            <div style="margin-bottom: 30px;">
              <h3 style="color: #ffffff; border-bottom: 1px solid #10b981; padding-bottom: 10px;">Analyse van jouw Performance</h3>
              <p>Op basis van je antwoorden zien we dat <strong>${weakestPillar}</strong> op dit moment je grootste groeikans is.</p>
              <div style="background-color: #1a2e1a; padding: 15px; border-radius: 8px; font-style: italic;">
                "${recommendation}"
              </div>
            </div>

            <div style="text-align: center; margin-top: 40px;">
              <p style="font-size: 16px; margin-bottom: 25px;">Wil je deze resultaten dieper analyseren en een plan maken om jouw peak performance te bereiken?</p>
              <a href="https://cal.com/thryvemethod/45min" style="background-color: #10b981; color: #ffffff; padding: 16px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Plan je gratis Strategiegesprek</a>
            </div>

            <p style="text-align: center; font-size: 12px; color: #888; margin-top: 50px;">
              © ${new Date().getFullYear()} The Thryve Method. Alle rechten voorbehouden.
            </p>
          </div>
        `,
      });

      // Email 2: To the Coach
      const coachEmail = await resend.emails.send({
        from: "Thryve System <system@thethryvemethod.com>",
        to: ["info@thethryvemethod.com"],
        subject: `Nieuwe Lead Performance Test: ${firstName} ${lastName} - Score: ${totalScore}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>Nieuwe Test Resultaat</h2>
            <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefoon:</strong> ${phone}</p>
            <hr>
            <h3>Resultaten</h3>
            <p><strong>Totale Score:</strong> ${totalScore}/100</p>
            <p><strong>Type:</strong> ${type}</p>
            <h4>Pijler scores:</h4>
            <ul>
              ${Object.entries(breakdown).map(([pillar, score]) => `<li>${pillar}: ${score}</li>`).join('')}
            </ul>
          </div>
        `,
      });

      res.status(200).json({ success: true, clientEmail, coachEmail });
    } catch (error) {
      console.error("Error sending report:", error);
      res.status(500).json({ error: "Failed to send report" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
