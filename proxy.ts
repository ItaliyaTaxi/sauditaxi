import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

/**
 * 1. Protects the admin CRM. Unauthenticated visitors to /admin/* are
 *    redirected to the login page; unauthenticated calls to /api/admin/* get
 *    a 401. /admin/login and the login API stay public.
 * 2. Stamps every request with an `x-pathname` header so the root layout
 *    (a Server Component, which otherwise has no way to read the current
 *    path) can tell whether it's rendering an /ar/* page and set
 *    `<html lang dir>` accordingly with zero client-side flash.
 *
 * Uses the `proxy` file convention (Next.js 16+), which defaults to the Node.js
 * runtime — required here because `@/lib/auth` (jose) is not bundled for Edge.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Next.js's own dynamic-route param decoding throws an uncaught
  // "failed to decode param" error (HTTP 500) for a malformed percent-encoded
  // path segment — this happens inside the framework's routing internals,
  // after middleware but before any page component runs, so it can't be
  // caught with a try/catch in application code. Catching it here, before
  // the request ever reaches route matching, turns it into a clean 404
  // instead. Well-formed URLs (including all real Arabic paths) are
  // completely unaffected — decodeURIComponent only throws on genuinely
  // malformed sequences (e.g. a truncated %XX).
  try {
    decodeURIComponent(pathname);
  } catch {
    return new NextResponse(null, { status: 404 });
  }

  const headers = new Headers(request.headers);
  headers.set("x-pathname", pathname);
  const passThrough = () => NextResponse.next({ request: { headers } });

  // Only /admin and /api/admin need the auth check below; everything else
  // (including /ar/*) just gets the pathname header and continues.
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) {
    return passThrough();
  }

  // Public auth endpoints
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return passThrough();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);

  if (session) return passThrough();

  if (pathname.startsWith("/api/admin")) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|apple-icon\\.png|icon\\.svg|images/|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest).*)",
  ],
};
