import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function LandingCta() {
  return (
    <section className="py-sg-xl relative sm:py-24 lg:py-28">
      <div className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl">
        <div className="glass-card rounded-sg-xl p-sg-lg md:p-sg-xl relative overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
            <div className="sunset-gradient absolute top-0 left-1/2 h-full w-full -translate-x-1/2 blur-[120px]" />
          </div>

          <div className="relative z-10">
            <h2 className="font-headline mb-sg-md text-sg-on-surface text-[36px] leading-tight font-bold tracking-tight md:text-[56px]">
              Ready for your first <br />
              <span className="text-sg-secondary">sunset conversation?</span>
            </h2>
            <p className="font-body mb-sg-lg text-sg-on-surface-variant mx-auto max-w-xl text-lg leading-relaxed">
              Join thousands of others who prefer real chemistry over endless swiping.
              Your next great talk is just a click away.
            </p>
            <Link
              href={ROUTES.chat}
              className="sunset-gradient button-glow px-sg-xl py-sg-md font-body text-sg-on-primary-fixed inline-flex rounded-full text-xl font-semibold tracking-wide transition-all active:scale-95"
            >
              Start Talking Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
