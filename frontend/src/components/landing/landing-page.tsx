import { LandingCta } from "./landing-cta";
import { LandingFeatures } from "./landing-features";
import { LandingFooter } from "./landing-footer";
import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { LandingHowItWorks } from "./landing-how-it-works";
import { LandingSafety } from "./landing-safety";

export function LandingPage() {
  return (
    <div className="landing bg-sg-background text-sg-on-surface selection:bg-sg-secondary/30 min-h-dvh">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingHowItWorks />
        <LandingSafety />
        <LandingFeatures />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  );
}
