import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { LANDING_SECTION_IDS } from "./constants";

export function LandingHeader() {
  return (
    <header className="px-sg-margin-mobile md:px-sg-margin-desktop fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-[color-mix(in_srgb,var(--landing-bg)_82%,transparent)] shadow-sm backdrop-blur-xl">
      <div className="font-headline text-sg-secondary text-2xl font-bold md:text-4xl md:leading-tight md:tracking-tight">
        Seegiri
      </div>
      <nav className="gap-sg-lg hidden items-center md:flex">
        <a
          className="border-sg-primary font-body text-sg-primary hover:text-sg-primary border-b-2 pb-1 text-sm font-semibold tracking-wide transition-colors duration-300"
          href={`#${LANDING_SECTION_IDS.howItWorks}`}
        >
          How it Works
        </a>
        <a
          className="font-body text-sg-on-surface-variant hover:text-sg-primary text-sm font-semibold tracking-wide transition-colors duration-300"
          href={`#${LANDING_SECTION_IDS.safety}`}
        >
          Safety
        </a>
        <a
          className="font-body text-sg-on-surface-variant hover:text-sg-primary text-sm font-semibold tracking-wide transition-colors duration-300"
          href={`#${LANDING_SECTION_IDS.features}`}
        >
          Features
        </a>
      </nav>
      <Link
        href={ROUTES.chat}
        className="bg-sg-primary-container px-sg-md py-sg-base font-body text-sg-on-primary-container rounded-full text-sm font-semibold tracking-wide shadow-lg transition-transform duration-300 hover:shadow-xl active:scale-95"
      >
        Start Talking
      </Link>
    </header>
  );
}
