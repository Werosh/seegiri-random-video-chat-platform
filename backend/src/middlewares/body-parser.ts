import express from "express";
import type { Express } from "express";

export function registerBodyParsing(app: Express): void {
  app.use(express.json({ limit: "256kb" }));
}
