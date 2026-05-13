import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { buttonClasses } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <MainLayout>
      <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-300/80 uppercase">
            404
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            This page is not available
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400">
            The route you requested does not exist yet, or it may have moved as the
            product evolves between phases.
          </p>
        </div>
        <Link href={ROUTES.home} className={buttonClasses({ size: "lg" })}>
          Back to home
        </Link>
      </section>
    </MainLayout>
  );
}
