import type { Express } from "express";
import { Router } from "express";

export function registerRoutes(app: Express, apiPrefix: string): void {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok", service: "seegiri-api" });
  });

  app.use(apiPrefix, router);
}
