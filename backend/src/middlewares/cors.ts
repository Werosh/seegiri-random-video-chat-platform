import cors from "cors";
import type { Express } from "express";
import type { Env } from "../config/env.js";

export function registerCors(app: Express, env: Env): void {
  app.use(
    cors({
      origin: env.SEEGIRI_PUBLIC_ORIGINS,
      credentials: true,
    }),
  );
}
