import { Globe, MessageCircle, Shuffle } from "lucide-react";
import { LANDING_SECTION_IDS } from "./constants";

export function LandingFeatures() {
  return (
    <section id={LANDING_SECTION_IDS.features} className="py-sg-xl sm:py-24 lg:py-28">
      <div className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl">
        <div className="mb-sg-xl text-center">
          <h2 className="font-headline mb-sg-sm text-sg-on-surface text-3xl font-bold tracking-tight md:text-4xl md:leading-tight md:tracking-tight">
            Premium Features
          </h2>
          <p className="font-body text-sg-on-surface-variant mx-auto max-w-xl text-base leading-relaxed">
            Elevate your interactions with tools designed for meaningful discovery.
          </p>
        </div>

        <div className="gap-sg-gutter grid grid-cols-1 md:grid-cols-12">
          <div className="glass-card group rounded-sg-xl p-sg-lg relative col-span-1 min-h-[220px] overflow-hidden md:col-span-8 md:min-h-[260px] lg:min-h-[280px]">
            <div className="relative z-10 flex h-full flex-col">
              <Shuffle
                className="mb-sg-base text-sg-secondary size-9"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="font-headline mb-sg-sm text-sg-on-surface text-3xl leading-snug font-semibold">
                Serendipity Engine
              </h3>
              <p className="font-body text-sg-on-surface-variant max-w-sm text-base leading-relaxed">
                Our algorithm matches you based on moods and interests, ensuring every
                random encounter feels like it was meant to be.
              </p>
              <div className="mt-auto">
                <span className="font-body text-sg-primary cursor-pointer text-sm font-semibold tracking-wide group-hover:underline">
                  Explore logic →
                </span>
              </div>
            </div>
            <div className="bg-sg-primary/5 pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full blur-3xl" />
          </div>

          <div className="glass-card rounded-sg-xl p-sg-lg col-span-1 flex min-h-[220px] flex-col justify-center border border-white/10 text-center md:col-span-4 md:min-h-[260px] lg:min-h-[280px]">
            <Globe
              className="mb-sg-md text-sg-primary mx-auto size-12"
              strokeWidth={1.25}
              aria-hidden
            />
            <h3 className="font-headline mb-sg-sm text-sg-on-surface text-2xl leading-snug font-semibold">
              Global Reach
            </h3>
            <p className="font-body text-sg-on-surface-variant text-base leading-relaxed">
              Connect across borders without the noise.
            </p>
          </div>

          <div className="glass-card rounded-sg-xl p-sg-lg col-span-1 flex min-h-[220px] flex-col md:col-span-4 md:min-h-[260px] lg:min-h-[280px]">
            <MessageCircle
              className="mb-sg-base text-sg-tertiary size-9"
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 className="font-headline mb-sg-sm text-sg-on-surface text-2xl leading-snug font-semibold">
              Fluid Expression
            </h3>
            <p className="font-body text-sg-on-surface-variant text-base leading-relaxed">
              Switch seamlessly between high-def video and cozy text chat during your
              sessions.
            </p>
          </div>

          <div className="glass-card rounded-sg-xl p-sg-lg relative col-span-1 flex min-h-[220px] items-end overflow-hidden md:col-span-8 md:min-h-[260px] lg:min-h-[280px]">
            <div className="relative z-10 flex w-full items-end justify-between">
              <div className="max-w-md">
                <h3 className="font-headline mb-sg-sm text-sg-on-surface text-3xl leading-snug font-semibold">
                  Mood Lighting
                </h3>
                <p className="font-body text-sg-on-surface-variant text-base leading-relaxed">
                  Customize your video feed with sunset-inspired filters that make
                  everyone look their best.
                </p>
              </div>
              <div className="gap-sg-sm hidden md:flex">
                <div className="bg-sg-secondary shadow-sg-secondary/30 h-12 w-12 rounded-full shadow-lg" />
                <div className="bg-sg-primary shadow-sg-primary/30 h-12 w-12 rounded-full shadow-lg" />
                <div className="bg-sg-tertiary-container shadow-sg-tertiary-container/30 h-12 w-12 rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
