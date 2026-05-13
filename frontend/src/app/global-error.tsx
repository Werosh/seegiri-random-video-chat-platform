"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-950 text-zinc-50 antialiased">
        <div className="mx-auto flex min-h-dvh w-full max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.28em] text-amber-300/80 uppercase">
              Seegiri
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
              A critical error occurred
            </h1>
            <p className="text-sm leading-relaxed text-zinc-400">{error.message}</p>
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-amber-500/90 to-orange-500/80 px-6 text-sm font-semibold text-zinc-950"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
