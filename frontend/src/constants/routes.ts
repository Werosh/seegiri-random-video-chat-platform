export const ROUTES = {
  home: "/",
  chat: "/chat",
  admin: "/admin",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
