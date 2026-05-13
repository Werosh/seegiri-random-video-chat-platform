import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";
import type { Logger } from "../utils/logger.js";

export type SocketIOServer = Server;

export function attachSocketServer(
  httpServer: HttpServer,
  allowedOrigins: string[],
  logger: Logger,
): SocketIOServer {
  const io = new Server(httpServer, {
    cors: {
      origin: allowedOrigins,
      methods: ["GET", "POST"],
      credentials: true,
    },
    transports: ["websocket", "polling"],
  });

  io.engine.on("connection_error", (error: unknown) => {
    const message = error instanceof Error ? error.message : "Unknown error";
    logger.warn("Socket.IO connection error", { message });
  });

  io.on("connection", (socket) => {
    logger.debug("Socket connected", { id: socket.id });

    socket.on("disconnect", (reason) => {
      logger.debug("Socket disconnected", { id: socket.id, reason });
    });
  });

  return io;
}
