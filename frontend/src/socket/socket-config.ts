import { clientEnv } from "@/lib/env";

export function getSocketBaseUrl(): string | undefined {
  return clientEnv.NEXT_PUBLIC_SOCKET_URL;
}
