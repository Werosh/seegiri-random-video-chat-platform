import { clientEnv } from "@/lib/env";

function resolveSiteUrl(): URL {
  const candidate = clientEnv.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  try {
    return new URL(candidate);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const siteConfig = {
  name: "Seegiri",
  description:
    "Seegiri is a modern, privacy-conscious platform for serendipitous video conversations.",
  url: resolveSiteUrl(),
  locale: "en_US",
  twitter: {
    handle: "@seegiri",
  },
} as const;

export type SiteConfig = typeof siteConfig;
