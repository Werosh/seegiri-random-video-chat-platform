import { createLogger } from "../utils/logger.js";
import type { Env } from "./env.js";

export function createConfigLogger(env: Env) {
  return createLogger(env.LOG_LEVEL);
}
