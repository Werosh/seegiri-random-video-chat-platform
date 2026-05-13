import type { FirebaseApp } from "firebase/app";
import { getFirebasePublicConfig } from "./public-config";

/**
 * Lazily initializes Firebase in the browser when configuration is present.
 * This keeps the client bundle lean until Firebase is actually required (Phase 7+).
 */
export async function initFirebaseApp(): Promise<FirebaseApp | null> {
  const config = getFirebasePublicConfig();
  if (!config) return null;

  const { initializeApp, getApps, getApp } = await import("firebase/app");

  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp(config);
}
