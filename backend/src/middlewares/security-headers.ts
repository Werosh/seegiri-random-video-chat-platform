import helmet from "helmet";
import type { Express } from "express";

export function registerSecurityHeaders(app: Express): void {
  app.disable("x-powered-by");
  app.use(helmet());
}
