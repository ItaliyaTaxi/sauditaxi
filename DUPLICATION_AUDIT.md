# Content Duplication Audit — saudiprivatetransfers.com

Diagnostic only. Read-only: no source file was changed, deleted, or refactored to produce this report. Repo state: HEAD `54ed92b` (2026-08-21), working tree clean. Report generated 2026-08-21 against a fresh local production build (`npm run build && npm run start`, 0 build errors) crawled at `http://localhost:3000`.

Large tables are in `duplication-audit/*.csv`. Full verbatim page text and full template source are in `duplication-audit/sample_pages_full.md` and `duplication-audit/templates_full.md` (kept out of this file to stay under the 600-line budget).

---

## SECTION 1 — PAGE INVENTORY

Counts below come from the live `/sitemap.xml` (803 `<loc>` entries today) and, for the baseline, from the data files present at commit `6e5e044` (2026-06-22 — the last commit before 1 July 2026; nothing was committed between 22 June and 2 July) plus a Supabase query on `blogs.published_at < 2026-07-01`.

| Page type | Template file | Today | 1 Jul 2026 (reconstructed) |
|---|---|--:|--:|
| Route pages (`/routes/{slug}`) | `app/(main)/routes/[slug]/page.tsx` | 194 | 14 |
| Hotel airport-transfer pages (`/{city}/{route}`) | `app/(main)/[city]/[route]/page.tsx` | 175 | 0 |
| Point-transfer pages (`/{city}/{route}`, attractions/port/rail/service) | `app/(main)/[city]/[route]/page.tsx` (fallback) | 61 | 0 |
| City-hub pages (`/cities/{city}`) | `app/(main)/cities/[city]/page.tsx` | 5 | 0 |
| City taxi-service pages (`/taxi-service/{city}`) | not read this audit (static-content type) | 19 | 19 |
| Airport-transfer overview pages (`/airport-transfer/{airport}`) | not read this audit | 13 | 11 |
| Border-transfer pages (`/border-transfers/{border}`) | not read this audit | 5 | 5 |
| Blog posts (`/blog/{slug}`) | `app/(main)/blog/[slug]/page.tsx` | 97 | 46 |
| Static / service pages (incl. home) | individual files | 15 | 16 |
| **English tree total** | | **584** | **111** |
| Arabic native pages (`/ar/{slug}` incl. `/ar` home) | `app/ar/[...slug]/page.tsx` | 219 | 0 |
| **Site total** | | **803** | **111** |

Arabic breakdown by underlying type (`data/translations/ar.ts`, 218 non-home entries): route 108, hotel-transfer 41, blog 34, attraction 16, service 8, city 5, airport 4, contact 1, about 1.

**Net change since 1 July 2026: +692 pages.** The two largest contributors are pages that did not exist at all at baseline: the entire `/ar` Arabic tree (+219) and the hotel/point-transfer system under `/{city}/{route}` (+236). Route pages grew from 14 to 194 (+180). Blog posts grew from 46 to 97 (+51). See Section 6 for the week-by-week breakdown and the specific commits.

Notes on the baseline reconstruction: `data/dammam-routes.ts`, `data/makkah-routes.ts`, `data/translations/ar.ts`, `lib/hotel-transfers.ts`, `lib/point-transfers.ts`, `data/hotels.ts`, and every `app/(main)/cities`, `app/(main)/[city]/[route]`, and `app/ar` file did not exist in the repository at commit `6e5e044` (`git ls-tree -r --name-only 6e5e044` confirms). The baseline sitemap.ts (read via `git show 6e5e044:app/sitemap.ts`) also listed `/intercity-transfers` twice — once as a static path, once via `data/services.ts` — a literal duplicate `<url>` entry that a later commit removed (comment still in today's `app/sitemap.ts`: "already emitted once via servicePaths below"). One further raw discrepancy, unrelated to duplication: `data/services.ts` today has 8 `href` entries but only 7 appear in the live sitemap — `/services/hotel-transfers` is present in the source data but absent from `sitemap.xml`.

---

## SECTION 2 — HOW THE PAGES ARE GENERATED

| Page type | Mechanism | Data source | Rows | Fields that vary per page |
|---|---|---|--:|---|
| Route pages | (b) template + data | `data/routes.ts` (151) + `data/dammam-routes.ts` (35) + `data/makkah-routes.ts` (8), merged | 194 | `from`, `to`, `distance`, `duration`, `intro`, `about`, `notes[]`, `relatedCitySlugs[]`, optional `sections[]` (140/194 = 72.2% have it), `faqs[]` (194/194 = 100% have custom FAQs — the in-file `routeFaqs()` fallback generator is currently unused dead code) |
| Hotel airport-transfer pages | (b) template + generated data | `data/hotels.ts` (87 rows) × 2 directions via `lib/hotel-transfers.ts:buildTransfersForHotel()` | ~175 | `hotel.name/area/nearby/blurb/stars/distanceKm/durationMin`, `direction`; **intro/about/one FAQ text is chosen from 5 fixed "angle" templates** (`hotelVariation()`: pilgrim / airport / luxury / location / family — see below) |
| Point-transfer pages | (a) individually hand-written data objects | 12 files under `data/{jeddah,makkah,dammam,madinah,riyadh,alula}/*.ts` | 61 | Fully bespoke per record: `intro`, `sections[]`, `faqs[]`, `highlights[]` |
| City-hub pages | (b) template + data | `data/cities.ts` (19 rows; only 5 have hotels, gated by `hotelsForCity().length > 0`) | 5 | `city.name`, `airport`, hotel count, `hubFaqs` (custom or fallback) |
| Blog posts | (c) template + hand-authored DB rows | Supabase `blogs` table | 97 | `title`, `slug`, `content` (pre-written HTML per row), `excerpt`, `author` (100% = "Saudi Private Transfers"), `category`, `tags[]`, `faqs[]`, `reading_time` |
| Arabic pages (`/ar/*`) | (b) template + data | `data/translations/ar.ts` `arPages[]` | 218 | `h1`, `intro`, `sections[]`/`contentHtml`, `faqs[]`, `breadcrumbs[]` per entry |
| City taxi-service / airport-transfer / border-transfer / static | not analyzed this audit | `data/cities.ts`, `data/airports.ts`, `data/borders.ts`, `data/services.ts` | 19 / 13 / 5 / 8 | not measured |

**Hotel-transfer "angle" system** (`lib/hotel-transfers.ts`, full file in `duplication-audit/templates_full.md`): every one of the 175 hotel-transfer pages gets its `intro`/`about` paragraph and one FAQ from one of 5 hand-written sentence templates selected by `hotelVariation()`: Makkah/Madinah hotels always get "pilgrim"; hotels ≤12 km from their airport get "airport"; remaining 5-star hotels alternate "luxury"/"location" by a stable hash of the hotel's own slug; everything else gets "family". The template's own code comment states the reason: "134+ hotel-transfer pages share the same page template, so without some deliberate variation they'd read as near-duplicate content to Google."

**Route page template** (`app/(main)/routes/[slug]/page.tsx`, 339 lines, full source in `duplication-audit/templates_full.md`): `pickupPoints` (6 items) and `dropoffPoints` (6 items) are hardcoded array constants at the top of the file (lines 24–39) — not sourced from any per-route field, identical on all 194 pages, verified verbatim in Section 3/4 below.

**`LatestGuides` component** (`components/sections/LatestGuides.tsx`, rendered on route/city-hub/hotel-transfer pages): blog picks rotate on a **weekly time bucket shared by every page** (`seed = category:weekBucket`, no per-page/per-slug input), so within a given week every page using this component shows the identical 3 featured posts. Confirmed byte-identical across all 3 Section 4 sample pages, fetched the same day.

---

## SECTION 3 — SIMILARITY MEASUREMENT

**Method used, exactly:** for each corpus (route pages, blog posts, city-hub pages), fetched rendered HTML from a local production server, isolated `<main>…</main>` (the site's single content region — `<header>`, both `<nav>` elements, and `<footer>` are siblings outside `<main>`, confirmed by reading `components/layout/{Header,Footer,SiteShell}.tsx`), stripped `<script>`/`<style>`/`<svg>`, and — for blog posts only, which render a real `<aside>` sidebar (`components/blog/BlogSidebar.tsx`) inside `<main>` — stripped `<aside>…</aside>`. Route and city-hub templates contain no `<aside>`. Remaining tags stripped, HTML entities decoded, then lowercased/whitespace-collapsed/punctuation-stripped per the brief. **Full pairwise comparison was computed for every corpus — no sampling was used** (194 routes → 18,721 pairs; 97 blogs → 4,656 pairs; 5 city-hubs → 10 pairs; all computed exactly, not estimated).

### Route pages (194 pages, 18,721 pairs)

| Metric | Value |
|---|--:|
| Mean pairwise similarity | 29.96% |
| Median pairwise similarity | 28.13% |
| 90th-percentile pairwise similarity | 40.43% |

Bucket distribution (count of page **pairs**):

| Bucket | Pairs |
|---|--:|
| <30% | 11,170 |
| 30–50% | 7,304 |
| 50–70% | 246 |
| 70–90% | 1 |
| >90% | 0 |

- **Boilerplate ratio** (mean % of a page's body text found verbatim, as a whole normalized block, on ≥10 other route pages): **55.4%**. Top verbatim blocks found on all 194/194 pages include: "Get a Quote Contact Us", "Fixed price agreed before you travel — no meter, no surge, no toll surprises.", "Door-to-door pickup and drop-off, available 24/7.", the full 6-item Pickup-locations list, the full 6-item Drop-off-locations list, the "Booking details required" paragraph, the entire booking-form field list, and the entire "Choose Your Vehicle" 6-vehicle catalogue. Full method + per-page ratios: `duplication-audit/per_page_metrics_routes.csv`.
- **Unique word count** (distinct vocabulary words on a page that appear on no other route page): min 0, 25th pct 0, median 1, 75th pct 3, max 52, mean 2.81.

Full pairwise list: `duplication-audit/pairwise_similarity_routes.csv` (18,721 rows).

### Blog posts (97 pages, 4,656 pairs)

| Metric | Value |
|---|--:|
| Mean pairwise similarity | 2.88% |
| Median pairwise similarity | 2.64% |
| 90th-percentile pairwise similarity | 3.92% |

Bucket distribution: <30% = 4,656 pairs; 30–50% / 50–70% / 70–90% / >90% = 0.

- **Boilerplate ratio**: **8.3%** mean.
- **Unique word count**: min 0, 25th pct 11, median 21, 75th pct 36, max 97, mean 25.61.

Full pairwise list: `duplication-audit/pairwise_similarity_blogs.csv` (4,656 rows).

### City-hub pages (5 pages, 10 pairs)

| Metric | Value |
|---|--:|
| Mean pairwise similarity | 19.05% |
| Median pairwise similarity | 18.64% |
| 90th-percentile pairwise similarity | 24.70% |

Bucket distribution: <30% = 10 pairs (all of them); 30–50% / 50–70% / 70–90% / >90% = 0.

- **Boilerplate ratio**: **0%, mathematically** — the corpus has only 5 pages, so no block can appear on "10 or more other pages" (max possible is 4). This is a direct artifact of n=5, not a claim that the pages share no repeated text — city-hub pages do reuse the same `VehicleOptions`/`HowItWorks`/`FAQSection` component chrome as every other page type on the site (not measured against the route/blog corpora here).
- **Unique word count**: min 32, 25th pct 52, median 63, 75th pct 98, max 115, mean 72.

Full pairwise list: `duplication-audit/pairwise_similarity_cityhub.csv` (10 rows).

---

## SECTION 4 — SIDE-BY-SIDE SAMPLE

Full verbatim text of 3 route pages selected to sit at the corpus median (not the extremes): `/routes/makkah-to-madinah`, `/routes/jeddah-to-makkah`, `/routes/riyadh-to-jeddah` — pairwise similarities 28.98% / 28.98% / 26.24% against a corpus median of 28.13%. Word counts 1,403 / 1,528 / 1,454 against a corpus median of 1,371.5.

**Full text of all three pages, complete and untruncated, plus a line-by-line breakdown of what differs and what's byte-identical, is in `duplication-audit/sample_pages_full.md`** (kept out of this file — inlining ~430 lines of page text here would blow the 600-line budget for this report).

---

## SECTION 5 — DIFFERENTIATING CONTENT

Measured across all 194 route pages, from `data/routes.ts` / `data/dammam-routes.ts` / `data/makkah-routes.ts` (the `Route` type definition) and the rendered template.

| Content type | % of route pages | Unique-per-page or shared default? |
|---|--:|---|
| Specific price/fare figure | 0% | N/A — no `price` field exists in the `Route` type at all. Every page instead shows the identical sentence "Fixed price agreed before you travel — no meter, no surge, no toll surprises." |
| Specific journey duration/distance | 100% | Unique per page. `distance` and `duration` are non-optional fields; 0/194 are empty. |
| Named pickup/dropoff logistics for that specific location | 0% | Shared default. `pickupPoints`/`dropoffPoints` are hardcoded constants in the template (`app/(main)/routes/[slug]/page.tsx` lines 24–39), not a data field — identical 6+6 item lists on all 194 pages, verified verbatim in Section 4. |
| Original photographs (not stock, not reused site-wide) | 0% | N/A — the `Route` type has no photo/gallery field. An optional `heroImage` override exists but 0/194 routes set it; all 194 fall back to `routeHero(from, to)`, a themed stock image shared across many routes. |
| Customer reviews/testimonials specific to that route | 0% | N/A — `app/(main)/routes/[slug]/page.tsx` does not render `data/testimonials.ts` or any review content. |
| Author byline, business credential, or license number | 0% | N/A — no author/byline field exists anywhere in the `Route` type or template. (For comparison: all 97 blog posts do render an `AuthorBox`, but `author` = "Saudi Private Transfers" — the brand name, not a person — on 97/97 posts, confirmed via Supabase query.) |
| Fact that could only have been written by someone who drove the route | Not independently verifiable from the codebase | 140/194 (72.2%) routes have a populated `sections` field and 194/194 have populated `notes`/`about` fields containing route-specific prose (e.g. "private cars can't enter the pedestrian zone directly around the mosque" for Makkah; "the Al Hada mountain road" for Makkah–Taif). Whether this reflects first-hand driving knowledge cannot be determined by reading the repository — reported as raw field-presence only. Verbatim examples are visible in Section 4. |

---

## SECTION 6 — PROVENANCE

**AI/LLM generation:** No AI/LLM API integration was found anywhere in the repository. `package.json` dependencies contain no OpenAI/Anthropic/generative-AI package. `.env` contains exactly 3 keys: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `BING_API_KEY` (Bing is used for URL-submission, per `docs/` script names, not content generation). A repo-wide case-insensitive search for `openai|anthropic|claude|gpt|llm|generative` across `docs/*.py` returned one incidental match (the substring inside an unrelated hotel-brand list) and no genuine hit.

**Bulk/spreadsheet production: yes**, for one identified batch. `docs/migrations/seed_tier1_blogs.sql` (418 lines, added in commit `9404a3c`, 2026-08-08) is a single hand-assembled SQL file containing 6 complete blog posts (full HTML `content`, meta fields, FAQs) as literal `INSERT INTO public.blogs (...) VALUES (...)` rows, pasted directly into the Supabase SQL editor — not entered through any CMS UI, one row per post. This is the only bulk-insert artifact found in `docs/`; no other seed/spreadsheet file for routes, hotel-transfers, or Arabic pages was found (those were added as TypeScript data-file commits — see the commit list below — not as SQL/CSV seeds).

**Publication velocity, 1 June 2026 – 21 Aug 2026** (data-file page additions = commits touching `data/routes.ts`, `dammam-routes.ts`, `makkah-routes.ts`, `translations/ar.ts`, `hotels.ts`, or the 12 point-transfer data files, counted by added `slug:` lines — an approximation, not a guaranteed net-new count; blog posts = exact `published_at` from Supabase):

| Week starting | Data-file pages added (approx.) | Blog posts published | Total |
|---|--:|--:|--:|
| 2026-06-01 | 14 | 10 | 24 |
| 2026-06-08 | 0 | 20 | 20 |
| 2026-06-15 | 0 | 10 | 10 |
| 2026-06-22 | 1 | 6 | 7 |
| 2026-06-29 | 21 | 9 | 30 |
| 2026-07-06 | 107 | 10 | 117 |
| 2026-07-13 | 24 | 0 | 24 |
| 2026-07-20 | 81 | 10 | 91 |
| 2026-07-27 | 135 | 10 | 145 |
| 2026-08-03 | 19 | 8 | 27 |
| 2026-08-10 | 80 | 4 | 84 |
| 2026-08-17 | 82 | 0 | 82 |

**Commits that added more than 10 pages at once** (by the same added-`slug:`-lines method; `git log --format="%h|%ad|%s"`, oldest first):

```
0b6342c|2026-06-01|+14|feat: complete initial implementation of Saudi Taxi booking platform
17fa190|2026-07-02|+21|v1.0.2
687ac4a|2026-07-06|+21|v1.0.3
10790f7|2026-07-09|+37|v1.0.1
f1e328d|2026-07-09|+49|v1.0.4
b27e203|2026-07-16|+24|makkah pages
cb6fd08|2026-07-20|+64|dammam pages
1c10b1e|2026-07-23|+17|arabic pages
a94d6f0|2026-07-27|+78|new pages
9bb77b7|2026-07-30|+44|new pages
1993d86|2026-08-03|+13|blogs
9404a3c|2026-08-08|+6 (below 10, kept for the SQL-seed cross-reference above)
d0b82e7|2026-08-16|+76|v1.0.1
24a666b|2026-08-18|+14|new pages
89fd3af|2026-08-19|+64|new routes
```

---

## SECTION 7 — WORD COUNT

Visible body word count across all 194 route pages (same extraction as Section 3):

| Stat | Words |
|---|--:|
| Min | 954 |
| 25th percentile | 1,060 |
| Median | 1,372 |
| 75th percentile | 1,767 |
| Max | 3,005 |
| Pages under 300 words | 0 |

Per-page word counts: `duplication-audit/per_page_metrics_routes.csv`.

(For reference, not requested but computed alongside: blog posts — min 1,110, median 2,508, max 4,422, 0 under 300 words. City-hub pages — min 2,116, median 2,446, max 4,196, 0 under 300 words.)

---

*Again: read and measure only. Nothing was changed.*
