"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useAppShellStore } from "@/store/use-app-shell-store";

export function AppProviders({ children }: { children: ReactNode }) {
  const setHydrated = useAppShellStore((state) => state.setHydrated);

  useEffect(() => {
    setHydrated(true);
  }, [setHydrated]);

  return children;
}
