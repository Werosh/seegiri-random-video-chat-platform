import { Languages, Users } from "lucide-react";

const footerLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Support", href: "#" },
  { label: "Community Guidelines", href: "#" },
] as const;

export function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="gap-sg-md px-sg-margin-mobile py-sg-xl md:px-sg-margin-desktop flex w-full flex-col items-center justify-between border-t border-white/10 md:flex-row">
      <div className="flex flex-col items-center md:items-start">
        <div className="font-headline mb-sg-xs text-sg-secondary text-2xl leading-snug font-semibold">
          Seegiri
        </div>
        <p className="font-body text-sg-on-surface-variant text-base leading-relaxed opacity-80">
          © {year} Seegiri. Crafted for meaningful connections.
        </p>
      </div>

      <div className="gap-sg-md flex flex-wrap justify-center">
        {footerLinks.map((link) => (
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
    </footer>
  );
}
