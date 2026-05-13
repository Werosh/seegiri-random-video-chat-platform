import { Spinner } from "@/components/ui/spinner";

export function PageLoader({ label }: { label: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center"
    >
      <Spinner className="size-6 border-2" />
      <p className="text-sm text-zinc-400">{label}</p>
    </div>
  );
}
