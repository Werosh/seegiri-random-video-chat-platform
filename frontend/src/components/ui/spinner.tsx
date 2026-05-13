import { cn } from "@/lib/cn";

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-5 animate-spin rounded-full border-2 border-white/15 border-t-amber-400/80",
        className,
      )}
    />
  );
}
