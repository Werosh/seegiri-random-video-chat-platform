import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function HomePage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
      <div className="max-w-2xl space-y-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber-300/80 uppercase">
          Seegiri
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-zinc-50 sm:text-5xl lg:text-6xl">
          A calm, cinematic home for spontaneous video conversations.
        </h1>
        <p className="text-lg leading-relaxed text-pretty text-zinc-400 sm:text-xl">
          Phase 1 establishes architecture, security posture, SEO primitives, and
          realtime-ready boundaries — without shipping product flows ahead of the
          roadmap.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href={ROUTES.chat} className={buttonClasses({ size: "lg" })}>
            Open chat shell
          </Link>
          <Link
            href={ROUTES.admin}
            className={buttonClasses({ variant: "secondary", size: "lg" })}
          >
            Admin shell
          </Link>
        </div>
      </div>

      <aside className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.85)] backdrop-blur-sm">
        <p className="text-sm font-medium text-zinc-200">Foundation checklist</p>
        <ul className="mt-4 space-y-3 text-sm text-zinc-400">
          <li>Strict typing, modular packages, and environment validation.</li>
          <li>HTTP + Socket.IO servers ready for incremental feature work.</li>
          <li>SEO metadata, robots, sitemap, and web app manifest wiring.</li>
        </ul>
      </aside>
    </section>
  );
}
