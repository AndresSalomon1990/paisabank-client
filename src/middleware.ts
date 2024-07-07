// External deps
import type { NextRequest } from "next/server";

// Internal deps
import { ROUTES } from "@/lib/constants";

const PUBLIC_ROUTES = Object.values(ROUTES)
  .map((route) => {
    if (route.public) return route.path;

    return null;
  })
  .filter((route) => route !== null) as string[];

const PRIVATE_ROUTES = Object.values(ROUTES)
  .map((route) => {
    if (!route.public) return route.path;

    return null;
  })
  .filter((route) => route !== null) as string[];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token && !PRIVATE_ROUTES.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL(ROUTES.HOME.path, request.url));
  }

  if (!token && !PUBLIC_ROUTES.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL(ROUTES.LOGIN.path, request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
