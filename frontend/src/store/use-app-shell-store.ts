import { create } from "zustand";

type AppShellState = {
  /**
   * Reserved for future global UI chrome (navigation drawers, modals, etc.).
   * Intentionally minimal in Phase 1 to avoid speculative state.
   */
  hydrated: boolean;
  setHydrated: (hydrated: boolean) => void;
};

export const useAppShellStore = create<AppShellState>((set) => ({
  hydrated: false,
  setHydrated: (hydrated) => set({ hydrated }),
}));
