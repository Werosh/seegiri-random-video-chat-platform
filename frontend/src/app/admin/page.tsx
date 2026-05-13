import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Admin",
  description: "Seegiri administration — Firebase-backed tooling will land in Phase 7.",
  path: "/admin",
  robots: { index: false, follow: false },
});

export default function AdminPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber-300/80 uppercase">
          Admin shell
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Operations console (scaffold)
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          This route is noindex by default. Authentication, auditing, and moderation
          workflows will be layered in once Firebase Admin is fully integrated.
        </p>
      </header>
    </section>
  );
}
