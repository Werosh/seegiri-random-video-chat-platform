import Image from "next/image";
import { CheckCircle2, Shield } from "lucide-react";
import { LANDING_IMAGES, LANDING_SECTION_IDS } from "./constants";

const promises = [
  "Verified User Profiles",
  "Real-time Safety Moderation",
  "End-to-End Encrypted Feeds",
] as const;

export function LandingSafety() {
  return (
    <section
      id={LANDING_SECTION_IDS.safety}
      className="py-sg-xl overflow-hidden sm:py-24 lg:py-28"
    >
      <div className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl">
        <div className="glass-card rounded-sg-xl grid grid-cols-1 overflow-hidden md:grid-cols-2">
          <div className="p-sg-lg md:p-sg-xl flex flex-col justify-center">
            <div className="mb-sg-md gap-sg-base text-sg-secondary inline-flex items-center">
              <Shield className="size-5" strokeWidth={1.75} aria-hidden />
              <span className="font-body text-sm font-semibold tracking-wide">
                Our Community Promise
              </span>
            </div>
            <h2 className="font-headline mb-sg-md text-sg-on-surface text-3xl font-bold tracking-tight md:text-4xl md:leading-tight md:tracking-tight">
              Built on respect and security.
            </h2>
            <p className="font-body mb-sg-lg text-sg-on-surface-variant text-lg leading-relaxed">
              Seegiri isn&apos;t just an app; it&apos;s a sanctuary. We&apos;ve crafted
              a respectful environment with AI-powered moderation and user-first privacy
              controls to ensure every conversation remains safe, charming, and
              authentic.
            </p>
            <ul className="space-y-sg-sm">
              {promises.map((item) => (
                <li
                  key={item}
                  className="gap-sg-sm text-sg-on-surface flex items-center"
                >
                  <CheckCircle2
                    className="text-sg-primary size-5 shrink-0"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="font-body text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avoid `md:h-auto` with `fill`: absolute children do not expand auto height on desktop. */}
          <div className="relative h-96 w-full overflow-hidden md:h-[28rem] lg:h-[32rem]">
            <Image
              src={LANDING_IMAGES.safety.src}
              alt={LANDING_IMAGES.safety.alt}
              fill
              unoptimized
              referrerPolicy="no-referrer"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[var(--landing-bg)]/85 to-transparent md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
