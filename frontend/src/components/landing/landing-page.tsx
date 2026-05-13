"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  CheckCircle2,
  Compass,
  Globe,
  Heart,
  Languages,
  MessageCircle,
  MessagesSquare,
  Shield,
  Shuffle,
  Users,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";

const SECTION_IDS = {
  howItWorks: "how-it-works",
  safety: "safety",
  features: "features",
} as const;

const IMAGES = {
  hero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4PCCFbOCwKYnM8ueSO861t9E1oqBwDNggGKkrcpbQhR9TDNy-mMKCc0xGSb4cFnyXfSm2uatoWau-95JjY57s9i6goqD66LYx9Kla7nfuuppD_zHZJNu__c4qngTwLcTpCBbjO26t1yBSWtz83fQ_jrVA-GfWH6gDMcDXpB-Xl8LOjs7FiHndKoe1eu1GencmDIlvOviGbVu-XFyZ7k5sfARTI5HXPyQMyQKwuNyt053Eph-KshXuF0t_uAL3FoJAafHo1IM-BTc",
    alt: "A warm and intimate scene of two people having a friendly video conversation on high-end laptops. The room is softly lit by amber sunset light filtering through a window, creating long shadows and a golden atmosphere.",
  },
  safety: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9-NA325KPfkkguLCB64IRtYZBmFStTkJFDz_m4x240JFWKvH46lpV93oje-E028_niC3BvbpmJUrXmmW8Sty2xhRR3H2xVyFJ21ZRB6nF4-ibBwEskyNqlgoGfAAnxNjRUHMlQLnIS0Gji7S_yiq6Deqrg0lITc1IrsRzSJFO8ciS-t33_-MV5HS3ghe42EnyUwkDkOA4p4MNxi_T9tbLHsoK5t8u6bd-fOrP4XaAcbIXyWEoWBTL43vDv3lu6VcWIRKGHbRKLp8",
    alt: "A group of diverse friends laughing together in a warm, dusk-lit outdoor setting. The focus is on genuine connection, trust, and emotional safety.",
  },
} as const;

const STEPS = [
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

const PROMISES = [
  "Verified User Profiles",
  "Real-time Safety Moderation",
  "End-to-End Encrypted Feeds",
] as const;

const FOOTER_LINKS = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Support", href: "#" },
  { label: "Community Guidelines", href: "#" },
] as const;

const easeSoft = [0.22, 1, 0.36, 1] as const;

export function LandingPage() {
  const year = new Date().getFullYear();
  const reduceMotion = useReducedMotion();
  const pointerLatest = useRef({ x: 50, y: 42 });
  const [pointerPct, setPointerPct] = useState({ x: 50, y: 42 });
  const pointerRafRef = useRef(0);

  useEffect(() => {
    if (reduceMotion || typeof window === "undefined") return;

    const onMove = (e: MouseEvent) => {
      pointerLatest.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
      if (pointerRafRef.current !== 0) return;
      pointerRafRef.current = window.requestAnimationFrame(() => {
        pointerRafRef.current = 0;
        setPointerPct({ ...pointerLatest.current });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (pointerRafRef.current !== 0) {
        cancelAnimationFrame(pointerRafRef.current);
      }
    };
  }, [reduceMotion]);

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.44, ease: easeSoft },
      };

  const fadeUpDelayed = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.44, ease: easeSoft, delay: 0.07 },
      };

  const inViewOnce = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22, margin: "0px 0px -72px 0px" },
        transition: { duration: 0.48, ease: easeSoft },
      };

  const headerMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.38, ease: easeSoft },
      };

  return (
    <div
      className="landing text-sg-on-surface selection:bg-sg-secondary/30"
      style={
        {
          "--landing-p-x": `${pointerPct.x}%`,
          "--landing-p-y": `${pointerPct.y}%`,
        } as CSSProperties
      }
    >
      <div className="landing-atmosphere" aria-hidden>
        <div className="landing-atmosphere__wash" />
        <div className="landing-atmosphere__cursor" />
        <div className="landing-atmosphere__grain" />
      </div>

      <motion.header
        className="px-sg-margin-mobile md:px-sg-margin-desktop fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/15 bg-[color-mix(in_srgb,var(--landing-bg)_82%,transparent)] shadow-sm backdrop-blur-xl"
        {...headerMotion}
      >
        <div className="font-headline text-sg-secondary text-2xl font-bold md:text-4xl md:leading-tight md:tracking-tight">
          Seegiri
        </div>
        <nav className="gap-sg-lg hidden items-center md:flex">
          <a
            className="border-sg-primary font-body text-sg-primary hover:text-sg-primary border-b-2 pb-1 text-sm font-semibold tracking-wide transition-colors duration-300"
            href={`#${SECTION_IDS.howItWorks}`}
          >
            How it Works
          </a>
          <a
            className="font-body text-sg-on-surface-variant hover:text-sg-primary text-sm font-semibold tracking-wide transition-colors duration-300"
            href={`#${SECTION_IDS.safety}`}
          >
            Safety
          </a>
          <a
            className="font-body text-sg-on-surface-variant hover:text-sg-primary text-sm font-semibold tracking-wide transition-colors duration-300"
            href={`#${SECTION_IDS.features}`}
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
      </motion.header>

      <main className="relative z-10">
        <section className="border-sg-outline/20 relative flex min-h-dvh flex-col justify-center border-b pt-24 pb-28 sm:pb-32 md:pt-28 md:pb-36">
          <div className="px-sg-margin-mobile md:px-sg-margin-desktop relative mx-auto w-full max-w-6xl xl:max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-x-16">
              <motion.div
                className="lg:border-sg-secondary/60 flex flex-col items-center text-center lg:items-start lg:border-l-2 lg:pl-10 lg:text-left"
                {...fadeUp}
              >
                <h1 className="font-headline text-sg-on-surface mb-sg-md max-w-[18ch] text-[clamp(2.5rem,5.5vw,3.75rem)] leading-[1.05] font-bold tracking-tight sm:max-w-xl lg:max-w-none">
                  Talk to someone new.
                </h1>

                <p className="font-body text-sg-on-surface-variant mb-sg-sm max-w-md text-lg leading-relaxed md:text-xl">
                  Casual video chat when you want company, not a sales pitch.
                </p>

                <p className="font-body text-sg-on-surface mb-sg-lg max-w-md text-base leading-relaxed">
                  Seegiri costs nothing to use—no subscription, no tiers, no checkout
                  screen hiding behind a &apos;start&apos; button.
                </p>

                <div className="gap-sg-md mb-sg-lg flex w-full max-w-md flex-col sm:flex-row sm:justify-center lg:max-w-none lg:justify-start">
                  <Link
                    href={ROUTES.chat}
                    className="bg-sg-secondary font-body px-sg-xl py-sg-md hover:bg-sg-secondary/92 inline-flex items-center justify-center rounded-xl text-lg font-semibold tracking-wide text-white transition-colors active:scale-[0.98]"
                  >
                    Start a chat
                  </Link>
                  <a
                    href={`#${SECTION_IDS.howItWorks}`}
                    className="font-body text-sg-on-surface px-sg-xl py-sg-md inline-flex items-center justify-center rounded-xl border border-white/20 text-lg font-semibold tracking-wide transition-colors hover:border-white/35 hover:bg-white/5"
                  >
                    How it works
                  </a>
                </div>

                <dl className="font-body text-sg-on-surface-variant grid max-w-md gap-y-2 text-left text-sm leading-snug sm:grid-cols-2 sm:gap-x-8 lg:max-w-lg">
                  <div>
                    <dt className="text-sg-on-surface font-medium">Free</dt>
                    <dd>Jump in without paying.</dd>
                  </div>
                  <div>
                    <dt className="text-sg-on-surface font-medium">Straightforward</dt>
                    <dd>No gamified upsells.</dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-end"
                {...fadeUpDelayed}
              >
                <figure className="relative w-full max-w-md lg:max-w-lg">
                  <div className="overflow-hidden rounded-2xl border border-white/12 bg-black/25 shadow-lg">
                    <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
                      <Image
                        src={IMAGES.hero.src}
                        alt={IMAGES.hero.alt}
                        fill
                        unoptimized
                        referrerPolicy="no-referrer"
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 480px"
                        priority
                      />
                    </div>
                  </div>
                  <figcaption className="font-body text-sg-on-surface-variant mt-3 text-center text-sm leading-snug lg:text-right">
                    Real faces, real time—same room energy, different postcode.
                  </figcaption>
                </figure>
              </motion.div>
            </div>
          </div>
        </section>

        <section id={SECTION_IDS.howItWorks} className="py-sg-xl sm:py-24 lg:py-28">
          <motion.div
            className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl"
            {...inViewOnce}
          >
            <div className="mb-sg-xl text-center">
              <h2 className="font-headline mb-sg-sm text-sg-on-surface text-3xl font-bold tracking-tight md:text-4xl md:leading-tight md:tracking-tight">
                Three Steps to Serenity
              </h2>
              <p className="font-body text-sg-on-surface-variant mx-auto max-w-xl text-base leading-relaxed">
                Your journey to a meaningful conversation is simple and intentional.
              </p>
            </div>

            <div className="gap-sg-lg grid grid-cols-1 md:grid-cols-3">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="glass-card group rounded-sg-xl p-sg-lg flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`mb-sg-md flex h-20 w-20 items-center justify-center rounded-full transition-colors ${step.iconBg}`}
                    >
                      <Icon
                        className={`size-10 ${step.iconClass}`}
                        strokeWidth={1.75}
                      />
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
          </motion.div>
        </section>

        <section
          id={SECTION_IDS.safety}
          className="py-sg-xl overflow-hidden sm:py-24 lg:py-28"
        >
          <motion.div
            className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl"
            {...inViewOnce}
          >
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
                  Seegiri isn&apos;t just an app; it&apos;s a sanctuary. We&apos;ve
                  crafted a respectful environment with AI-powered moderation and
                  user-first privacy controls to ensure every conversation remains safe,
                  charming, and authentic.
                </p>
                <ul className="space-y-sg-sm">
                  {PROMISES.map((item) => (
                    <li
                      key={item}
                      className="gap-sg-sm text-sg-on-surface flex items-center"
                    >
                      <CheckCircle2
                        className="text-sg-primary size-5 shrink-0"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span className="font-body text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-96 w-full overflow-hidden md:h-[28rem] lg:h-[32rem]">
                <Image
                  src={IMAGES.safety.src}
                  alt={IMAGES.safety.alt}
                  fill
                  unoptimized
                  referrerPolicy="no-referrer"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[var(--landing-bg)]/85 to-transparent md:block" />
              </div>
            </div>
          </motion.div>
        </section>

        <section id={SECTION_IDS.features} className="py-sg-xl sm:py-24 lg:py-28">
          <motion.div
            className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl"
            {...inViewOnce}
          >
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
                    Our algorithm matches you based on moods and interests, ensuring
                    every random encounter feels like it was meant to be.
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
                  Switch seamlessly between high-def video and cozy text chat during
                  your sessions.
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
          </motion.div>
        </section>

        <section className="py-sg-xl relative sm:py-24 lg:py-28">
          <motion.div
            className="px-sg-margin-mobile md:px-sg-margin-desktop mx-auto w-full max-w-6xl"
            {...inViewOnce}
          >
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
                  Join thousands of others who prefer real chemistry over endless
                  swiping. Your next great talk is just a click away.
                </p>
                <Link
                  href={ROUTES.chat}
                  className="sunset-gradient button-glow px-sg-xl py-sg-md font-body text-sg-on-primary-fixed inline-flex rounded-full text-xl font-semibold tracking-wide transition-all active:scale-95"
                >
                  Start Talking Now
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className="gap-sg-md px-sg-margin-mobile py-sg-xl md:px-sg-margin-desktop relative z-10 flex w-full flex-col items-center justify-between border-t border-white/10 md:flex-row"
        {...inViewOnce}
      >
        <div className="flex flex-col items-center md:items-start">
          <div className="font-headline mb-sg-xs text-sg-secondary text-2xl leading-snug font-semibold">
            Seegiri
          </div>
          <p className="font-body text-sg-on-surface-variant text-base leading-relaxed opacity-80">
            © {year} Seegiri. Crafted for meaningful connections.
          </p>
        </div>

        <div className="gap-sg-md flex flex-wrap justify-center">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sg-on-surface-variant hover:text-sg-secondary text-base leading-relaxed opacity-80 transition-colors hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="gap-sg-md text-sg-tertiary-fixed flex">
          <Languages
            className="hover:text-sg-secondary size-6 cursor-pointer transition-colors"
            strokeWidth={1.5}
            aria-label="Language"
          />
          <Users
            className="hover:text-sg-secondary size-6 cursor-pointer transition-colors"
            strokeWidth={1.5}
            aria-label="Community"
          />
        </div>
      </motion.footer>
    </div>
  );
}
