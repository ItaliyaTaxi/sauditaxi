# Pre-Redesign Audit — Phase 1 Report

**Status: Phase 1 complete. Nothing has been deleted. Phase 2 (cleanup) has
not started and will not start without your explicit go-ahead.**

This is the top-level report. Companion documents:
`REDESIGN_URL_INVENTORY.csv` / `.json` (row-level URL data),
`URL_STRUCTURE_MAP.md` (how the routing actually works),
`ADMIN_PRESERVATION_MANIFEST.md`, `FORM_PRESERVATION_MANIFEST.md`,
`DO_NOT_DELETE.md` (the consolidated protect-list), and
`REQUIRES_REVIEW.md` (2 items I won't resolve on my own judgment).

---

## 1. Total URLs

- **693** live URLs in production `sitemap.xml` (fetched and verified against
  `https://saudiprivatetransfers.com/sitemap.xml` at audit time).
- **740** total rows in the full inventory once non-indexed but real/functional
  URLs are added: admin pages, API endpoints, token-based public pages,
  system files, and redirect sources (see §2 for the extra 47).

## 2. Breakdown by page type

| Type | Count | Indexable | In sitemap.xml |
|---|---:|:---:|:---:|
| Arabic pages (`/ar/*`) | 232 | yes | yes |
| Commercial route pages (`/routes/{slug}`) | 194 | yes | yes |
| Blog posts (`/blog/{slug}`) | 97 | yes | yes |
| Point-transfer pages (`/{city}/{route}`) | 61 | yes | yes |
| Distance/informational pages (`/distance/{slug}`) | 50 | yes | yes |
| City taxi-service pages (`/taxi-service/{city}`) | 19 | yes | yes |
| API endpoints | 14 | n/a | no |
| Airport transfer pages (`/airport-transfer/{airport}`) | 13 | yes | yes |
| Service pillar pages | 8 | yes | yes |
| Static pages (about/contact/get-quote/etc.) | 6 | yes | yes |
| System files (sitemap.xml, robots.txt, manifest, icons) | 6 | n/a | n/a |
| Border transfer pages (`/border-transfers/{border}`) | 5 | yes | yes |
| City-hub pages (`/cities/{city}`) | 5 | yes | yes |
| Homepage (`/`) | 1 | yes | yes |
| Arabic homepage (`/ar`) | 1 | yes | yes |
| Blog listing (`/blog`) | 1 | yes | yes |
| HTML sitemap (`/sitemap`) | 1 | yes | **no — discovered gap, see §7** |
| Admin pages (static) | 8 | no | no |
| Admin pages (dynamic, per-record) | 3 patterns | no | no |
| Public token pages (`/invoice/{token}`, `/quote/{token}`) | 2 patterns | no | no |
| Config-level redirect sources | 9 | no | no |
| Hotel-transfer redirect sources (proxy.ts) | 174 + 41 (ar) | no | no |
| In-app Arabic alias redirects | 2 | no | no |

## 3. Dynamic vs. static

- **Dynamic** (generated from a data source — a `.ts` file's array, or a
  live DB query): ~666 of the 693 sitemap URLs. Only the ~18 truly static
  pages (homepage, about, contact, get-quote, terms, privacy, services hub,
  8 service pillars, blog listing, Arabic homepage) have one file per URL.
- Data sources, in order of URL volume: `data/translations/ar.ts` (232),
  `data/routes.ts` + `makkah-routes.ts` + `dammam-routes.ts` (194), Supabase
  `public.blogs` (97, the only DB-driven public content — count changes over
  time as posts are published), 12 city-specific point-transfer files (61),
  three separate distance-page data files (50), `data/cities.ts` (19),
  `data/airports.ts` (13), `data/borders.ts` (5), `hotelCities()` subset (5).

## 4. URL patterns and architecture notes

Full detail in `URL_STRUCTURE_MAP.md`. Headlines:

- **The `/distance/{slug}` prefix serves three completely different page
  designs** from three separate data files, checked in sequence by one route
  file. A slug alone doesn't tell you which template renders it.
- **The `/routes/{slug}` prefix mostly uses one fixed template**, but a
  `Route` object can opt into a `richLayout` or `customLayout` field that
  changes its composition — still one URL, one route file, per-object
  variation.
- **`/{city}/{route}` is shared by two unrelated concepts**: 61 real,
  hand-written point-transfer pages, and 174 (+41 Arabic) hotel-transfer
  paths that no longer render at all — `proxy.ts` 301-redirects every one of
  them to a city hub's hotel table before the page ever runs.
- **Redirects live in three different places**: `proxy.ts` (hotel-transfer
  redirects + admin auth gate), `next.config.ts` `redirects()` (index
  cleanup, www→apex, 5 renamed blog slugs), and inline in
  `app/ar/[...slug]/page.tsx` (2 Arabic aliases — config-level redirects
  didn't reliably match non-ASCII patterns in testing).
- **Canonical/hreflang is centralized** in `lib/seo.ts`'s `buildMetadata()`,
  fed by `getArPathForEnPath()` (`data/translations/ar.ts`), so every Arabic
  page is required to declare its English counterpart (`enPath` is a
  non-optional field) — there's no way for an Arabic page to exist without a
  matching hreflang link.

## 5. Admin system — what was found

11 page routes (8 static shapes + 3 dynamic-per-record patterns), 11 API
route handlers, JWT session auth (`jose`, 7-day cookie) enforced centrally in
`proxy.ts`, two parallel credential paths (DB-backed via Postgres
`SECURITY DEFINER` functions as primary, env-var fallback as bootstrap). Full
detail and exact file list in `ADMIN_PRESERVATION_MANIFEST.md`.

## 6. Form/quote system — what was found

One shared `QuoteForm` component rendered contextually across dozens of
pages (not a single dedicated form page — `/get-quote` is one entry point
among many), submitting to one endpoint (`POST /api/leads`), validated with
`zod`, persisted to Supabase, triggering two non-blocking notification
emails via Resend. No CAPTCHA; a simple in-memory per-IP rate limit is the
only abuse control. Full detail in `FORM_PRESERVATION_MANIFEST.md`.

## 7. Database tables (admin + form)

From `supabase/schema.sql` (schema preserved in full, already
version-controlled). Row counts as of this audit (fetched via the
service-role key; **no row content was extracted or written anywhere** — see
`REQUIRES_REVIEW.md` §2 for why):

| Table | Rows | Used by |
|---|---:|---|
| `leads` | 38 | form (write) + admin (read/manage) |
| `email_logs` | 12 | admin (audit trail, FK → leads) |
| `admins` | 1 | admin auth |
| `blogs` | 97 (all published) | public `/blog/*` URLs — see `REQUIRES_REVIEW.md` §1 |
| `invoices` | 1 | admin |
| `quotations` | 4 | admin |

## 8. Files being preserved

Full list in `DO_NOT_DELETE.md`, organized as:
- **A — URL architecture**: every route file, every data file whose `slug`/
  `path`/`enPath`/`href` fields drive routing, `proxy.ts`, `next.config.ts`,
  the SEO/canonical/hreflang helpers.
- **B — Admin**: all admin pages/API routes, `lib/auth.ts`, `lib/session.ts`,
  `lib/admins.ts`, `lib/leads.ts`, `lib/invoices.ts`, `lib/quotations.ts`,
  `lib/email.ts`, `lib/supabase.ts`, the DB schema.
- **C — Form**: `QuoteForm.tsx`, `app/api/leads/route.ts`, `lib/leadSchema.ts`,
  plus the B items it shares (leads/email/supabase).
- **D — Shared infrastructure**: only what A/B/C actually import — the
  toolchain, i18n plumbing, `lib/blogs.ts`, `lib/hero.ts`, `lib/format.ts`,
  `lib/city-hub-facts.ts`, `data/hotels.ts`, `SchemaScript`.

## 9. Files/components proposed for eventual deletion (Phase 2 candidates)

Everything in `components/` and `data/` **not** named in `DO_NOT_DELETE.md`,
specifically:

- **`components/sections/`** (34 files) — the bulk of the site's
  presentational building blocks (heroes, CTA sections, FAQ display, vehicle
  cards, route/city grids, etc.). These render content at existing URLs
  today; a redesign replaces them while the *route files* keep resolving
  the same URLs against the same data lookups.
- **`components/templates/`**, **`components/layout/`**, **`components/icons/`**,
  **`components/ui/`** — presentational/UI-kit layer, freely redesignable.
- **`components/journey/`, `components/distance-v2/`, `components/routes/`** —
  the three "rich" visual designs for distance/route pages. These *do*
  currently render real, preserved URLs, so they can't simply be deleted
  without replacing what renders those 15+5+~10 pages — but their specific
  visual design is disposable per the brief; treat as "redesign," not
  "delete-and-leave-blank."
- **`data/service-content/*.ts`, `data/city-guides.ts`, `data/airport-guides.ts`,
  `data/border-guides.ts`** — verified during this audit to be
  **optional, gracefully-degrading content** merged onto the base data
  objects (e.g. `data/cities.ts` does `...cityGuides[c.slug]`, and consuming
  components use `content?.field ?? fallback`). Confirmed safe to remove
  without breaking any URL — the base files (`cities.ts`/`airports.ts`/
  `borders.ts`/`services.ts`) hold the URL-critical fields directly and
  don't depend on the guide files to render.
- **`data/testimonials.ts`, `data/faqs.ts`, `data/vehicles.ts`** — sitewide
  content (testimonials, generic FAQs, vehicle-option copy), not URL-bearing.
- **Old blog content** (`public.blogs` rows) — see `REQUIRES_REVIEW.md` §1;
  NOT simply "delete," because the slugs are the URLs.

Not touched or assessed in this pass (out of scope — pure visual assets):
`public/images/**`, `app/globals.css`'s specific color/typography values,
Tailwind config.

## 10. Risks identified

- **The `/distance/{slug}` and `/routes/{slug}` multi-template patterns**
  (§4) mean a careless Phase-2 rewrite of either route file could
  accidentally drop support for one of the 2-3 branches, silently 404ing a
  whole cluster of URLs (5-50 pages depending on the branch) rather than
  failing loudly. Any redesign of these two route files should explicitly
  re-verify all three/two branches still resolve.
- **The hotel-transfer redirect surface (174+41 URLs)** is easy to lose
  track of because it renders nothing — there's no page to "see" when
  checking the site manually. A redesign that touches `[city]/[route]/page.tsx`
  or `proxy.ts` without checking `HOTEL_TRANSFER_SIMILARITY.md`/this audit
  could silently turn 215 redirects into 404s.
- **Blog content/URL tension** — see `REQUIRES_REVIEW.md` §1.
- **Public repository** — this repo is public on GitHub, and an external
  process has been observed auto-committing/pushing during this session.
  Any future work in this project (including Phase 2) should keep secrets
  out of every file, not just `.env`.
- **DB backup performed as counts-only**, not a full data export, for the
  same public-repo reason — see `REQUIRES_REVIEW.md` §2 for the manual
  export commands to run yourself, outside this repo.
- **`/sitemap` (the HTML sitemap page) isn't in `sitemap.xml`** — a
  pre-existing gap, unrelated to this audit, discovered while cross-checking
  URL counts. Documented, not fixed.

## 11. Backup — what exists and where

1. **Git tag** `pre-redesign-backup-2026-09-04`, pointing at the commit that
   was `HEAD` at the start of this audit (before any of these audit files
   were added) — created locally and **pushed to `origin`**. Restorable at
   any time with `git checkout pre-redesign-backup-2026-09-04`, or to
   inspect without checking out: `git show pre-redesign-backup-2026-09-04:path/to/file`.
2. **Source-archive zip**, built with `git archive` from that same tag (so
   it's byte-identical to the tag's tracked-file contents — no `.env`, no
   `node_modules`, no `.next`, confirmed by inspection):
   `d:\Mine Projects\sauditaxi-pre-redesign-backup-2026-09-04.zip` (~10 MB,
   560 files) — **stored one directory above the project root, outside git,
   as a second independent copy.**
3. **Database**: schema is backed up via `supabase/schema.sql` (already in
   git). Row *data* was deliberately **not** exported into this repo — see
   §10 and `REQUIRES_REVIEW.md` §2 for why, and the exact commands to do it
   yourself somewhere private.

## 12. What requires your approval before Phase 2

See `REQUIRES_REVIEW.md` in full. Summary:
1. What should actually happen to the 97 blog posts (keep as-is / keep slugs
   but rewrite content / retire some with explicit redirects) — this is a
   real conflict in the brief, not something I'll resolve by guessing.
2. Whether you want a full database data export done, and if so, where to
   store it (not in this repo).

---

## Phase 1 summary (as requested)

- **URLs found:** 693 live (740 including non-indexed admin/API/redirect
  surface).
- **Inventory location:** `REDESIGN_URL_INVENTORY.csv` / `.json` (project
  root).
- **What will be preserved:** everything in `DO_NOT_DELETE.md` — all
  route files and URL-bearing data fields, the entire admin system, the
  entire form/lead system, and the shared infrastructure those three depend
  on.
- **What will be deleted (pending your go-ahead on Phase 2):** presentational
  components (`components/sections/`, `templates/`, `layout/`, `ui/`,
  `icons/`), the optional "guide"/"content" data files confirmed
  non-load-bearing (§9), and old sitewide content (testimonials/FAQs/vehicle
  copy) — all replaceable without touching a single URL.
- **Risks/uncertainties:** the two items in `REQUIRES_REVIEW.md`, plus the
  structural risks in §10 above to keep in mind *during* Phase 2 regardless
  of how those two items are resolved.

Phase 2 has not started. Tell me how you want the two `REQUIRES_REVIEW.md`
items handled, and whether to proceed.
