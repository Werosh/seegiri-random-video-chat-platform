import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns whether the component is running in a browser environment.
 * Implemented with `useSyncExternalStore` to avoid cascading renders from effects.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
