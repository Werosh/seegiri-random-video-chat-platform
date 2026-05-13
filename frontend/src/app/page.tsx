import type { Metadata } from "next";
import { LandingPage } from "@/components/landing";
import { buildPageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium Human Connection",
  path: "/",
  description: siteConfig.description,
});

export default function HomePage() {
  return <LandingPage />;
}
