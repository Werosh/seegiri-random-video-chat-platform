export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/70 py-10 text-sm text-zinc-500 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-zinc-400">© {new Date().getFullYear()} Seegiri</p>
        <p className="max-w-xl text-xs leading-relaxed text-zinc-500">
          Engineering foundation only — product surfaces ship in later phases.
        </p>
      </div>
    </footer>
  );
}
