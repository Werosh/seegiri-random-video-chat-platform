import http from "node:http";
import { createApp } from "./app.js";
import { initFirebaseAdmin } from "./config/firebase-admin.js";
import { env } from "./config/env.js";
import { createConfigLogger } from "./config/logger.js";
import { attachSocketServer } from "./socket/socket-server.js";

const logger = createConfigLogger(env);
const app = createApp(env, logger);
const httpServer = http.createServer(app);

initFirebaseAdmin(env, logger);
attachSocketServer(httpServer, env.SEEGIRI_PUBLIC_ORIGINS, logger);

httpServer.listen(env.PORT, () => {
  logger.info(`Seegiri API listening on port ${env.PORT}`, {
    nodeEnv: env.NODE_ENV,
  });
});
