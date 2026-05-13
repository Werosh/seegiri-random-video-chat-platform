import admin from "firebase-admin";
import type { Logger } from "../utils/logger.js";
import type { Env } from "./env.js";

let initialized = false;

/**
 * Firebase Admin is optional in Phase 1.
 * Full credential wiring lands in Phase 7 (admin + moderation).
 */
export function initFirebaseAdmin(env: Env, logger: Logger): void {
  if (initialized) return;

  const projectId = env.FIREBASE_PROJECT_ID;
  const clientEmail = env.FIREBASE_CLIENT_EMAIL;
  const privateKeyRaw = env.FIREBASE_PRIVATE_KEY;

  if (!projectId) {
    logger.info("Firebase Admin skipped (FIREBASE_PROJECT_ID not set).");
    return;
  }

  if (!clientEmail || !privateKeyRaw) {
    logger.warn(
      "Firebase Admin not initialized: set FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY.",
    );
    return;
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  initialized = true;
  logger.info("Firebase Admin initialized.");
}

export function getFirebaseAdmin(): typeof admin | null {
  if (!initialized) return null;
  return admin;
}
