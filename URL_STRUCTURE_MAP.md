# URL Structure Map — Saudi Private Transfers

Generated as part of the Phase 1 pre-redesign audit. Companion to
`REDESIGN_URL_INVENTORY.csv` / `.json` (the row-level data) and
`DO_NOT_DELETE.md` (what must survive the redesign).

Framework: Next.js 16 App Router. Route folders under `app/(main)/` are
English, `app/ar/` is Arabic. `(main)` is a route group (doesn't appear in
the URL) that shares one layout with the header/footer.

Total live URLs at time of audit (from the production `sitemap.xml`): **693**.
Total URLs in the full inventory, including non-indexed admin/API/redirect
surface: **740** (see `PRE_REDESIGN_AUDIT.md` for the full breakdown).

---

## 1. English content clusters

| URL pattern | Route file | Data source | Count | Notes |
|---|---|---|---|---|
| `/` | `app/(main)/page.tsx` | — | 1 | Homepage |
| `/about`, `/contact`, `/get-quote`, `/terms-and-conditions`, `/privacy-policy`, `/services` | `app/(main)/{slug}/page.tsx` | — | 6 | Static pages, one folder each |
| `/airport-transfers`, `/city-transfers`, `/intercity-transfers`, `/border-transfers`, `/umrah-taxi-service`, `/hajj-transport-service`, `/ziyarat-taxi-service`, `/services/hotel-transfers` | `app/(main)/{slug}/page.tsx` | `data/services.ts` (`href` field) + `data/service-content/*.ts` (copy) | 8 | Service pillar pages |
| `/taxi-service/{city}` | `app/(main)/taxi-service/[city]/page.tsx` | `data/cities.ts` | 19 | |
| `/airport-transfer/{airport}` | `app/(main)/airport-transfer/[airport]/page.tsx` | `data/airports.ts` | 13 | |
| `/border-transfers/{border}` | `app/(main)/border-transfers/[border]/page.tsx` | `data/borders.ts` | 5 | |
| `/cities/{city}` | `app/(main)/cities/[city]/page.tsx` | `lib/hotel-transfers.ts` → `hotelCities()` (subset of `data/cities.ts`) | 5 | "City hub" — airport-transfer facts + full hotel table. Distinct from `/taxi-service/{city}`. |
| `/routes/{slug}` | `app/(main)/routes/[slug]/page.tsx` | `data/routes.ts` (`baseRoutes`) + `data/makkah-routes.ts` + `data/dammam-routes.ts`, merged via `export const routes = [...baseRoutes, ...makkahRoutes, ...dammamRoutes]` | 194 | Commercial/transactional intercity + cross-border transfer pages. A small subset (see `richLayout`/`customLayout` fields on `Route`) uses a richer visual composition — same URL, same route file, no separate template. |
| `/distance/{slug}` | `app/(main)/distance/[slug]/page.tsx` | Three separate data sources sharing one URL prefix and one route file (checked in this order): `data/distance-guide-v2.ts` → `data/journey-pages.ts` → `data/distance-pages.ts` | 50 | Informational (non-transactional) distance/travel-time guides. **Three distinct visual designs coexist under the same `/distance/{slug}` prefix** — see "Distance page family" below. |
| `/{city}/{route}` | `app/(main)/[city]/[route]/page.tsx` | `lib/point-transfers.ts` (aggregates `data/{jeddah,makkah,madinah,dammam,riyadh,alula}/*.ts`) | 61 | Attraction/port/railway/service "point transfer" pages. **Same URL shape as the (now-redirected) hotel-transfer pages** — see the collision note below. |
| `/blog` | `app/(main)/blog/page.tsx` | Supabase `public.blogs` (live query) | 1 | Listing + `?category=`/`?q=` filters — **no separate category/tag URLs exist** |
| `/blog/{slug}` | `app/(main)/blog/[slug]/page.tsx` | Supabase `public.blogs`, `status = 'published'` | 97 (as of this audit; changes over time — CMS-authored) | |
| `/sitemap` | `app/(main)/sitemap/page.tsx` | Sweeps most data files listed above | 1 | Human-readable HTML sitemap. **Not currently listed in `app/sitemap.ts`'s own output** — a real, indexable page missing from `sitemap.xml`. Documented as a discovered gap, not fixed. |

## 2. Arabic content

| URL pattern | Route file | Data source | Count |
|---|---|---|---|
| `/ar` | `app/ar/page.tsx` | — | 1 |
| `/ar/{arabic-slug}` | `app/ar/[...slug]/page.tsx` (catch-all) | `data/translations/ar.ts` → `arPages: ArPage[]` | 273 total entries, of which 41 (`type: "hotel-transfer"`) 301-redirect rather than render — 232 render as real pages |

Every `ArPage` carries an `enPath` field pointing at its English counterpart,
which drives hreflang, the canonical `alternates.languages` block, and the
language switcher (`getArPathForEnPath()` / `getEnPathForArPath()` in the same
file). Arabic is **not** a mirrored folder tree — it's a single flat array
matched against one catch-all route, differentiated internally by an
`ArPageType` discriminator (`about`, `contact`, `service`, `airport`, `city`,
`route`, `hotel-transfer`, `blog`, `attraction`, `city-hub`, `distance`,
`journey`, `distanceV2`). Not every English URL has an Arabic counterpart yet
— translation coverage is partial and additive (232 of 693 English-equivalent
pages, i.e. roughly a third).

## 3. The "distance page family" — one URL prefix, three designs

This is the single most important thing to understand before touching
anything under `/distance/`. Three fully independent data sources and view
components share the `/distance/{slug}` URL prefix; `app/(main)/distance/[slug]/page.tsx`
checks them in this specific order and renders the first match:

1. **`data/distance-guide-v2.ts`** → `DistanceGuideV2View` (`components/distance-v2/`) — "Road Distance Guide V2," editorial/research-guide design. 5 pages.
2. **`data/journey-pages.ts`** → `JourneyPageView` (`components/journey/`) — "rich journey" design (dark hero, vertical timeline). 15 pages.
3. **`data/distance-pages.ts`** → the route file's own inline JSX — the original template (quick-answer box, prose sections, transport-option cards). 30 pages.

(30 + 15 + 5 = 50, matching the live sitemap count exactly — verified with no duplicate slugs across the three files.)

The Arabic side mirrors this with `ArPageType` values `"distance"` (original
template), `"journey"`, and `"distanceV2"` — same three-way branch, inside
`app/ar/[...slug]/page.tsx`.

**Redesign implication:** a slug lookup alone doesn't tell you which template
renders a given `/distance/{slug}` URL — you have to check all three data
files (or their Arabic equivalents) to find where a given entry lives.

## 4. The commercial-route "richLayout" pattern

Similarly, `/routes/{slug}` pages all share one route file, but a `Route` can
carry an optional `richLayout` (fixed component composition, data-only
extension) or `customLayout` (fully custom, ordered block composition — see
`components/routes/RouteBlocks.tsx`) field. Routes without either field render
the original fixed template. This means **the visual design of a `/routes/`
page is also not fully determined by its URL** — it depends on which optional
fields that route's data object happens to set.

## 5. The `/{city}/{route}` URL collision (point-transfers vs. hotel-transfers)

Two different concepts historically shared the `/{city}/{route}` two-segment
shape:

- **Point transfers** (attractions, port, railway, city-specific services) —
  61 real, hand-written, fully indexable pages. `generateStaticParams()` in
  `app/(main)/[city]/[route]/page.tsx` only prerenders these.
- **Hotel transfers** (`{airport-slug}-to-{hotel-slug}` and the reverse,
  programmatically generated — 2 per hotel with a nearest airport) — these
  URLs are **not** prerendered as pages anymore. `proxy.ts` 301-redirects all
  174 of them (+ 41 Arabic equivalents) to their city hub's hotel table
  (`/cities/{city}#hotels`) before the request ever reaches the page
  component. `dynamicParams = false` means any hotel-transfer path that
  somehow bypassed the proxy would 404, not render.

If the redesign changes this route file, it must preserve **both** behaviors:
render the 61 point-transfer pages, and keep 301-redirecting the 174+41
hotel-transfer paths — don't let them start 404ing (loses backlink/SEO
equity) or start rendering unintended content.

## 6. Redirects — three separate mechanisms

Do not assume redirects live in one place. There are three:

1. **`proxy.ts`** (Next.js "proxy" convention, the middleware file) — the 174+41
   hotel-transfer → city-hub redirects above, plus admin-auth gating (see
   `ADMIN_PRESERVATION_MANIFEST.md`) and an `x-pathname` header stamp the root
   layout uses to set `<html lang dir>` for `/ar/*` without a client flash.
2. **`next.config.ts` → `redirects()`** — `/index`, `/index.html`, `/index.php`
   → `/`; `www.saudiprivatetransfers.com/*` → apex; 5 renamed blog-post slugs.
3. **In-app** (`app/ar/[...slug]/page.tsx` → `LEGACY_AR_ALIASES`) — 2 Arabic
   slug aliases. Config-level `redirects()` didn't reliably match non-ASCII
   `source` patterns in testing, so these are resolved inside the page
   component instead, ahead of the normal `arPages` lookup.

All three must be preserved (or deliberately, visibly migrated — never
silently dropped) in any redesign, or previously-indexed/linked URLs will
start 404ing.

## 7. Canonical / hreflang architecture

`lib/seo.ts`'s `buildMetadata()` is the single place canonical URLs and
`alternates.languages` (hreflang) get set, called from every page's
`generateMetadata()`. English pages pass their own path plus, when
`getArPathForEnPath()` finds a match, the Arabic alternate. Arabic pages
(`app/ar/[...slug]/page.tsx`) always pass both — `enPath` is a required field
on every `ArPage`, so an Arabic page can never exist without declaring its
English counterpart. `app/sitemap.ts` cross-links the same way, emitting
`alternates.languages` on every English `<url>` entry that has a live Arabic
counterpart.

## 8. Known duplicate / conflicting patterns found during this audit

- `/cities/{city}` (5, city-hub) vs `/taxi-service/{city}` (19, cities) —
  both are "city" pages but serve different purposes (hotel-transfer hub vs.
  general local-taxi landing page) and are not duplicates of each other, just
  easy to confuse by name. Documented, not changed.
- `/distance/{slug}` — three template families under one prefix (§3 above).
- The `/{city}/{route}` collision (§5 above) between point-transfers and
  (now-redirected) hotel-transfers.
- `/sitemap` missing from `sitemap.xml` (§1 above).

None of these were changed as part of this task, per the explicit instruction
not to modify URLs during preservation/cleanup.
