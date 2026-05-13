import { Compass, Heart, MessagesSquare } from "lucide-react";
import { LANDING_SECTION_IDS } from "./constants";

const steps = [
  {
    title: "Connect",
    description:
      "Step into our digital lounge where like-minded souls gather for the sunset.",
    icon: Heart,
    iconBg: "bg-sg-primary/20 group-hover:bg-sg-primary/30",
    iconClass: "text-sg-primary",
  },
  {
    title: "Talk",
    description:
      "Engage in high-definition video calls designed to feel like a living room chat.",
    icon: MessagesSquare,
    iconBg: "bg-sg-secondary/20 group-hover:bg-sg-secondary/30",
    iconClass: "text-sg-secondary",
  },
  {
    title: "Discover",
    description:
      "Find deep connections that transcend the screen and brighten your world.",
    icon: Compass,
    iconBg: "bg-sg-tertiary-container/20 group-hover:bg-sg-tertiary-container/30",
    iconClass: "text-sg-tertiary-container",
  },
] as const;

export function LandingHowItWorks() {
  return (
    <section
      id={LANDING_SECTION_IDS.howItWorks}
      className="bg-sg-surface-container-lowest py-sg-xl"
    >
      <div className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto max-w-6xl">
        <div className="mb-sg-xl text-center">
          <h2 className="font-headline mb-sg-sm text-sg-on-surface text-3xl font-bold tracking-tight md:text-4xl md:leading-tight md:tracking-tight">
            Three Steps to Serenity
          </h2>
          <p className="font-body text-sg-on-surface-variant mx-auto max-w-xl text-base leading-relaxed">
            Your journey to a meaningful conversation is simple and intentional.
          </p>
        </div>

        <div className="gap-sg-lg grid grid-cols-1 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="glass-card group rounded-sg-xl p-sg-lg flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
              >
                <div
                  className={`mb-sg-md flex h-20 w-20 items-center justify-center rounded-full transition-colors ${step.iconBg}`}
                >
                  <Icon className={`size-10 ${step.iconClass}`} strokeWidth={1.75} />
                </div>
                <h3 className="font-headline mb-sg-sm text-sg-on-surface text-2xl leading-snug font-semibold">
                  {step.title}
                </h3>
                <p className="font-body text-sg-on-surface-variant text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
