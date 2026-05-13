import { Be_Vietnam_Pro, JetBrains_Mono, Quicksand } from "next/font/google";
import type { ReactNode } from "react";
import { AppProviders } from "@/components/providers/app-providers";
import { buildPageMetadata } from "@/config/seo";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = buildPageMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${quicksand.variable} ${beVietnam.variable} ${jetbrainsMono.variable} min-h-full antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
