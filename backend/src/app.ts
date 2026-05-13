import express, { type Express } from "express";
import { API_PREFIX } from "./constants/index.js";
import type { Env } from "./config/env.js";
import type { Logger } from "./utils/logger.js";
import { registerBodyParsing } from "./middlewares/body-parser.js";
import { registerCors } from "./middlewares/cors.js";
import { registerRequestLogging } from "./middlewares/request-logger.js";
import { registerSecurityHeaders } from "./middlewares/security-headers.js";
import { registerRoutes } from "./routes/index.js";

export function createApp(env: Env, logger: Logger): Express {
  const app = express();

  registerSecurityHeaders(app);
  registerCors(app, env);
  registerBodyParsing(app);
  registerRequestLogging(app, env, logger);
  registerRoutes(app, API_PREFIX);

  return app;
}
