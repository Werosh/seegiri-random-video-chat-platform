import { clientEnv } from "@/lib/env";
import { HttpError, isHttpError } from "./http-error";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type HttpClientConfig = {
  baseUrl?: string;
  defaultHeaders?: HeadersInit;
};

function resolveBaseUrl(): string {
  return clientEnv.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";
}

function buildUrl(baseUrl: string, path: string): string {
  const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const route = path.startsWith("/") ? path : `/${path}`;
  return `${base}${route}`;
}

export function createHttpClient(config: HttpClientConfig = {}) {
  const baseUrl = config.baseUrl ?? resolveBaseUrl();

  async function request<T>(
    path: string,
    init: RequestInit & { method?: HttpMethod } = {},
  ): Promise<T> {
    const url = buildUrl(baseUrl, path);

    const headers = new Headers(config.defaultHeaders);
    const incoming = new Headers(init.headers);
    incoming.forEach((value, key) => headers.set(key, value));

    if (!headers.has("Accept")) {
      headers.set("Accept", "application/json");
    }

    const response = await fetch(url, {
      ...init,
      headers,
      cache: init.cache ?? "no-store",
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");

      throw new HttpError({
        message: `Request failed with status ${response.status}`,
        status: response.status,
        url,
        body,
      });
    }

    if (response.status === 204) {
      return undefined as T;
    }

    const responseContentType = response.headers.get("content-type") ?? "";
    if (responseContentType.includes("application/json")) {
      return (await response.json()) as T;
    }

    return (await response.text()) as T;
  }

  return { request, isHttpError };
}

export const httpClient = createHttpClient();

export { HttpError, isHttpError } from "./http-error";
