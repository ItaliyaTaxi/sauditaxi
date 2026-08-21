import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { hotelTransfers } from "@/lib/hotel-transfers";
import { arPages } from "@/data/translations/ar";

/**
 * 1. Protects the admin CRM. Unauthenticated visitors to /admin/* are
 *    redirected to the login page; unauthenticated calls to /api/admin/* get
 *    a 401. /admin/login and the login API stay public.
 * 2. Stamps every request with an `x-pathname` header so the root layout
 *    (a Server Component, which otherwise has no way to read the current
 *    path) can tell whether it's rendering an /ar/* page and set
 *    `<html lang dir>` accordingly with zero client-side flash.
 * 3. 301-redirects the 174 individual hotel-transfer pages
 *    (/{city}/{airport-slug}-to-{hotel-slug} and the reverse) to their city
 *    hub's hotel table (/cities/{city}#hotels). These pages measured 83%
 *    boilerplate and a mean unique-word-count of 0.075 across all 174 pages
 *    (see HOTEL_TRANSFER_SIMILARITY.md) — the hub table now carries the same
 *    real facts (name, district, stars, distance, duration) without 174
 *    near-duplicate pages. Point-transfer pages under the same /{city}/{route}
 *    prefix (attractions, ports, railways, services — 61 hand-written pages)
 *    are NOT in this list and stay fully indexable. The 41 Arabic
 *    equivalents (data/translations/ar.ts, type: "hotel-transfer") get the
 *    same treatment, redirecting to their Arabic city-hub (type: "city-hub").
 *
 * Uses the `proxy` file convention (Next.js 16+), which defaults to the Node.js
 * runtime — required here because `@/lib/auth` (jose) is not bundled for Edge.
 */
const hotelTransferRedirects = new Map(
  hotelTransfers.map((t) => [t.path, `/cities/${t.citySlug}#hotels`])
);

// Arabic side: the 41 `type: "hotel-transfer"` entries in data/translations/ar.ts
// 301-redirect to their city's `type: "city-hub"` counterpart (also in
// arPages), keyed by the same citySlug derived from each entry's own enPath
// (English hotel-transfer path, e.g. "/jeddah/...") — never a separate,
// hand-maintained list, so this can't drift from the data.
const arCityHubSlugByCity = new Map(
  arPages
    .filter((p) => p.type === "city-hub")
    .map((p) => [p.enPath.replace("/cities/", ""), p.slug])
);
const arHotelTransferRedirects = new Map<string, string>();
for (const p of arPages) {
  if (p.type !== "hotel-transfer") continue;
  const citySlug = p.enPath.split("/")[1];
  const hubSlug = arCityHubSlugByCity.get(citySlug);
  if (hubSlug) arHotelTransferRedirects.set(`/ar/${p.slug}`, `/ar/${hubSlug}#hotels`);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // request.nextUrl.pathname is percent-encoded here (confirmed empirically —
  // an Arabic pathname arrives as "%D9%86%D9%82%D9%84-..." at this layer, not
  // as the decoded string), unlike the page component's `params`, which Next
  // decodes later during route matching. Both redirect maps below are keyed
  // by decoded strings (hotelTransfers' ASCII .path values are unaffected
  // either way; arHotelTransferRedirects' Arabic keys are not), so decode
  // once, up front, for both the redirect lookup and the malformed-URL guard
  // that already lived here.
  let decodedPathname: string;
  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch {
    // Next.js's own dynamic-route param decoding throws an uncaught
    // "failed to decode param" error (HTTP 500) for a malformed percent-encoded
    // path segment — this happens inside the framework's routing internals,
    // after middleware but before any page component runs, so it can't be
    // caught with a try/catch in application code. Catching it here, before
    // the request ever reaches route matching, turns it into a clean 404
    // instead. Well-formed URLs (including all real Arabic paths) decode
    // cleanly; decodeURIComponent only throws on genuinely malformed
    // sequences (e.g. a truncated %XX).
    return new NextResponse(null, { status: 404 });
  }

  const hubRedirect =
    hotelTransferRedirects.get(decodedPathname) ?? arHotelTransferRedirects.get(decodedPathname);
  if (hubRedirect) {
    return NextResponse.redirect(new URL(hubRedirect, request.url), 301);
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
