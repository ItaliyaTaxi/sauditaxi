#!/usr/bin/env node
/**
 * Regression check for the six Arabic pages that returned HTTP 500 in
 * production between 15–21 Aug 2026 (root cause: /ar/[...slug]/page.tsx's
 * resolve() double-decoded an already-decoded dynamic segment, and several
 * breadcrumbs linked to Arabic slugs that had never been created as real
 * pages). Run after any change touching app/ar/[...slug]/page.tsx,
 * proxy.ts, next.config.ts's redirects, or data/translations/ar.ts.
 *
 * Usage:
 *   node scripts/check-ar-500-regression.mjs                # checks production
 *   BASE_URL=http://localhost:3000 node scripts/check-ar-500-regression.mjs
 */

const BASE_URL = process.env.BASE_URL ?? "https://saudiprivatetransfers.com";

// Each of these must resolve (directly, or via redirect) to HTTP 200 — never
// 500, and never a bare 404 for the two that are legitimate aliases.
const URLS = [
  "تاكسي-المدينة",
  "تاكسي-الرياض",
  "تاكسي-مكة",
  "تاكسي-العلا",
  "تاكسي-عمرة", // aliases to نقل-العمرة
  "النقل-الحدودي", // aliases to النقل-عبر-الحدود
];

async function check(slug) {
  const url = `${BASE_URL}/ar/${encodeURIComponent(slug)}`;
  // Follow redirects manually (max 3 hops) rather than fetch's built-in
  // redirect:"follow" — that mode has been unreliable in local testing with
  // non-ASCII Location headers even though the raw HTTP response is a single,
  // correctly percent-encoded Location value (verified with curl -L).
  let current = url;
  let hops = 0;
  let res;
  do {
    res = await fetch(current, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) break;
      current = new URL(loc, current).toString();
      hops++;
    } else {
      break;
    }
  } while (hops < 3);

  const ok = res.status === 200;
  console.log(`${ok ? "PASS" : "FAIL"}  /ar/${slug}  ->  ${res.status}${current !== url ? `  (via ${current.replace(BASE_URL, "")})` : ""}`);
  return ok;
}

// Sequential, not Promise.all — avoids a libuv handle-closing crash on
// Windows when several concurrent fetches complete right before exit.
const results = [];
for (const slug of URLS) {
  results.push(await check(slug));
}
const allPass = results.every(Boolean);
console.log(allPass ? "\nAll six Arabic pages OK." : "\nREGRESSION: one or more Arabic pages are broken again.");
process.exitCode = allPass ? 0 : 1;
