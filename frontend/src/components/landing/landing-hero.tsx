import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { LANDING_IMAGES, LANDING_SECTION_IDS } from "./constants";

export function LandingHero() {
  return (
    <section className="hero-glow relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="bg-sg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-sg-secondary/10 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-[120px]" />
      </div>

      <div className="px-sg-margin-mobile md:px-sg-margin-desktop relative z-10 mx-auto max-w-6xl text-center">
        <h1 className="font-headline mb-sg-md mx-auto max-w-4xl text-[44px] leading-tight font-bold tracking-tight md:text-[72px]">
          Human connection, bathed in a{" "}
          <span className="text-sg-secondary">sunset glow.</span>
        </h1>
        <p className="font-body mb-sg-lg text-sg-on-surface-variant mx-auto max-w-2xl text-lg md:text-xl md:leading-relaxed">
          Experience the warmth of meaningful conversation. Seegiri brings back the
          charm of meeting new people in a space designed for chill, intimate vibes.
        </p>

        <div className="gap-sg-md flex flex-col items-center justify-center md:flex-row">
          <Link
            href={ROUTES.chat}
            className="sunset-gradient button-glow px-sg-xl py-sg-md font-body text-sg-on-primary-fixed rounded-full text-lg font-semibold tracking-wide transition-all duration-300 active:scale-95"
          >
            Start Talking
          </Link>
          <a
            href={`#${LANDING_SECTION_IDS.howItWorks}`}
            className="border-sg-outline-variant px-sg-xl py-sg-md font-body text-sg-on-surface hover:bg-sg-surface-variant rounded-full border text-lg font-semibold tracking-wide transition-all active:scale-95"
          >
            Learn More
          </a>
        </div>

        <div className="mt-sg-xl relative mx-auto max-w-5xl px-4">
          <div className="glass-card rounded-sg-xl p-4 shadow-2xl">
            {/* `fill` requires explicit dimensions: aspect box on the same element as `relative`. */}
            <div className="rounded-sg-lg relative aspect-video min-h-[200px] w-full overflow-hidden md:aspect-[21/9] md:min-h-[280px]">
              <Image
                src={LANDING_IMAGES.hero.src}
                alt={LANDING_IMAGES.hero.alt}
                fill
                unoptimized
                referrerPolicy="no-referrer"
                className="object-cover brightness-90 grayscale-[0.2]"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="rounded-sg-lg from-sg-background/40 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
