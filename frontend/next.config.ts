import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  turbopack: {
    // When a parent directory also contains a lockfile, pin Turbopack to this app.
    root: process.cwd(),
  },
};

export default nextConfig;
