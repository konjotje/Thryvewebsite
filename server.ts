import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import resendHandler from "./api/send-report.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse large JSON (since base64 PDF can be a few MBs)
  app.use(express.json({ limit: '10mb' }));

  // API Routes
  app.post("/api/send-report", resendHandler);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
