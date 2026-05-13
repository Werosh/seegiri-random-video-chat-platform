import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: `/${string}`;
  robots?: Metadata["robots"];
};

export function buildPageMetadata(input: BuildMetadataInput = {}): Metadata {
  const path = input.path ?? "/";
  const pageTitle = input.title;
  const title = pageTitle
    ? `${pageTitle} · ${siteConfig.name}`
    : `${siteConfig.name} · Serendipitous video chat`;
  const description = input.description ?? siteConfig.description;
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: siteConfig.url,
    title,
    description,
    alternates: { canonical },
    applicationName: siteConfig.name,
    robots: input.robots ?? { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitter.handle,
    },
  };
}
