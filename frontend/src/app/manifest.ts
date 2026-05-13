import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seegiri",
    short_name: "Seegiri",
    description:
      "Seegiri is a modern platform for thoughtful, serendipitous video conversations.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
  };
}
