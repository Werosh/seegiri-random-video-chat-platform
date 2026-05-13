import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function SiteHeader() {
  return (
    <header className="border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.home}
          className="text-sm font-semibold tracking-tight text-zinc-50"
        >
          Seegiri
        </Link>
        <div className="text-xs text-zinc-500">Phase 1 foundation</div>
      </div>
    </header>
  );
}
