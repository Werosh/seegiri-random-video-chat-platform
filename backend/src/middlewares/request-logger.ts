import morgan from "morgan";
import type { Express } from "express";
import type { Env } from "../config/env.js";
import type { Logger } from "../utils/logger.js";

export function registerRequestLogging(app: Express, env: Env, logger: Logger): void {
  if (env.NODE_ENV === "production") {
    app.use(
      morgan("combined", {
        stream: {
          write: (message: string) => logger.info(message.trimEnd()),
        },
      }),
    );
    return;
  }

  app.use(morgan("dev"));
}
