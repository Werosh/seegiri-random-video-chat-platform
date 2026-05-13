import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Chat",
  description:
    "Seegiri chat experience — realtime video and messaging will arrive in Phases 3–6.",
  path: "/chat",
});

export default function ChatPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber-300/80 uppercase">
          Chat shell
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Realtime surface (scaffold)
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          This route exists to anchor navigation, metadata, and layout contracts. The
          actual matchmaking, media, and controls ship in later phases.
        </p>
      </header>
    </section>
  );
}
