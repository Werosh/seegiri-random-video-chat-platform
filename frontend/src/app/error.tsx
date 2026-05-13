"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toUserFacingMessage } from "@/lib/errors";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber-300/80 uppercase">
          Something went wrong
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
          We couldn&apos;t render this view
        </h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          {toUserFacingMessage(error)}
        </p>
      </div>
      <Button type="button" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
