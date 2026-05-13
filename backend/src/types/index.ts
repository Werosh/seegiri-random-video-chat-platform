import type { Server as HttpServer } from "node:http";
import type { Socket } from "socket.io";

/**
 * Socket event names will be centralized in Phase 3.
 * This module only defines transport-level types for the foundation layer.
 */
export type SocketServerDeps = {
  httpServer: HttpServer;
  allowedOrigins: string[];
};

export type AuthenticatedSocket = Socket;
