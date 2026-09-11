# Saudi Arabia Travel — SEO Topic Cluster Plan (8 Content Blocks)

Net-new blog ideas to close the real gaps found in `docs/seo-audit-2026.md`, beyond
the 97 existing posts. Every topic includes a primary/secondary keyword, search
intent, target audience, URL slug, internal-linking suggestions, and priority — deduped
against the full published inventory (queried live from Supabase, not from memory) to
avoid keyword cannibalization with existing posts or commercial pages.

**Status:** 5 of 50 published (Batch 1: 3 EN-only; Batch 2: 2 EN+AR, 2026-09-11). See
§"Execution log" at the bottom, updated after every batch.

Methodology matches `italytaxi`'s proven pipeline
(`docs/seo-audit-2026.md` → `seo-content-gap-50.md` → `seo-topic-clusters-plan.md`),
adapted to this site's real architecture (see §Stage 4 below for the concrete
differences — no `translation_of` column exists here, and the reciprocal-linking
mechanism is a keyword array, not a data-driven field, per `docs/seo-audit-2026.md` §2).

## How to use this plan
- **Priority** = suggested publishing order (High = strong intent + zero existing
  overlap + a live commercial page ready to receive the link).
- **Intent** = Informational / Commercial / Transactional.
- Full row detail (SEO title, secondary keywords, FAQ schema questions) lives in
  `docs/seo-content-gap-50.md` — this file is the block-level index + status tracker.
- Before writing **any** topic below, re-run the Stage 5 checklist (§ below) — this
  plan can drift out of sync with what's actually live.

## Blocks
1. Airport Arrival Guides — 10 topics
2. Route Cost & Comparison Guides — 10 topics
3. First-Time City Guides — 5 topics
4. Arrival & Meet-and-Greet Guides — 5 topics
5. Point-Transfer Supporting Content — 5 topics
6. Service & Booking Comparison Guides — 5 topics
7. Cross-Border Route Guides — 5 topics
8. Seasonal & Practical Guides — 5 topics

---

## 1. Airport Arrival Guides
**Status: 4/10 published.** The single biggest gap on the site — 10 of 13 airports
have a live `/airport-transfer/{slug}` commercial page and zero supporting blog
content. Highest priority block.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 1 | Madinah Airport driver-pickup guide | `madinah-airport-driver-pickup-guide` | High | **Published 2026-09-11** |
| 2 | Abha Airport arrival guide | `abha-airport-arrival-guide` | High | **Published 2026-09-11 (EN+AR)** |
| 3 | Taif Regional Airport arrival guide | `taif-regional-airport-arrival-guide` | High | **Published 2026-09-11 (EN+AR)** |
| 4 | AlUla Airport arrival guide | `alula-airport-arrival-guide` | High | **Published 2026-09-11** |
| 5 | Yanbu Airport arrival guide | `yanbu-airport-arrival-guide` | Medium | Not started |
| 6 | Tabuk Regional Airport arrival guide | `tabuk-regional-airport-arrival-guide` | Medium | Not started |
| 7 | Jazan Airport arrival guide | `jazan-airport-arrival-guide` | Medium | Not started |
| 8 | Hail Regional Airport arrival guide | `hail-regional-airport-arrival-guide` | Low | Not started |
| 9 | Red Sea International Airport arrival guide | `red-sea-international-airport-arrival-guide` | Medium | Not started |
| 10 | NEOM Bay Airport arrival guide | `neom-bay-airport-arrival-guide` | Low | Not started |

## 2. Route Cost & Comparison Guides
**Status: 1/10 published.** Major domestic routes with a live `/routes/{slug}` page
and zero blog support — led by Jeddah↔Riyadh, the highest-volume domestic route with
no guide at all today.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 11 | Jeddah to Riyadh transfer guide | `jeddah-to-riyadh-transfer-guide` | High | **Published 2026-09-11** |
| 12 | Riyadh to Abha transfer guide | `riyadh-to-abha-transfer-guide` | High | Not started |
| 13 | Riyadh to Hail transfer guide | `riyadh-to-hail-transfer-guide` | Medium | Not started |
| 14 | Riyadh to Qassim (Buraidah) transfer guide | `riyadh-to-qassim-transfer-guide` | Medium | Not started |
| 15 | Jeddah to Madinah transfer guide | `jeddah-to-madinah-transfer-guide` | High | Not started |
| 16 | Riyadh to Khobar transfer guide | `riyadh-to-khobar-transfer-guide` | Medium | Not started |
| 17 | Jeddah to Yanbu transfer guide | `jeddah-to-yanbu-transfer-guide` | Medium | Not started |
| 18 | Dammam to Hofuf (Al-Ahsa) transfer guide | `dammam-to-hofuf-transfer-guide` | Low | Not started |
| 19 | Jeddah to Abha transfer guide | `jeddah-to-abha-transfer-guide` | Medium | Not started |
| 20 | Madinah to Tabuk transfer guide | `madinah-to-tabuk-transfer-guide` | Low | Not started |

## 3. First-Time City Guides
**Status: 0/5 published.** Makkah and Madinah already have this angle; Riyadh, Jeddah,
AlUla, Dammam, and Taif don't, despite live commercial hubs.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 21 | First time in Riyadh guide | `first-time-in-riyadh-guide` | High | Not started |
| 22 | First time in Jeddah guide | `first-time-in-jeddah-guide` | High | Not started |
| 23 | First time in AlUla guide | `first-time-in-alula-guide` | Medium | Not started |
| 24 | First time in Dammam guide | `first-time-in-dammam-guide` | Medium | Not started |
| 25 | First time in Taif guide | `first-time-in-taif-guide` | Low | Not started |

## 4. Arrival & Meet-and-Greet Guides
**Status: 0/5 published.** The general version exists (`saudi-airport-pickup-guide`,
`what-happens-if-flight-to-saudi-arabia-delayed`) — these make it airport-specific,
which converts harder.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 26 | Jeddah Airport driver meeting point | `jeddah-airport-driver-meeting-point` | High | Not started |
| 27 | Riyadh Airport driver meeting point | `riyadh-airport-driver-meeting-point` | High | Not started |
| 28 | Meet-and-greet airport service explained | `meet-and-greet-airport-service-saudi-arabia` | Medium | Not started |
| 29 | Late-night/early-morning airport transfers | `late-night-airport-transfers-saudi-arabia` | Medium | Not started |
| 30 | Jeddah Airport layover transfer guide | `jeddah-airport-layover-transfer-guide` | Low | Not started |

## 5. Point-Transfer Supporting Content
**Status: 0/5 published.** Live commercial point-transfer pages (Hegra, Al-Balad,
Corniche, Jabal Thawr/Noor, Jeddah Islamic Port) with no supporting blog funnel.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 31 | Visiting Hegra from AlUla | `visiting-hegra-alula-guide` | Medium | Not started |
| 32 | Al-Balad Jeddah visitor guide | `al-balad-jeddah-visitor-guide` | Medium | Not started |
| 33 | Jeddah Corniche visitor guide | `jeddah-corniche-visitor-guide` | Medium | Not started |
| 34 | Jabal Thawr & Jabal al-Noor Ziyarat guide | `jabal-thawr-jabal-noor-ziyarat-guide` | Low | Not started |
| 35 | Jeddah Islamic Port passenger guide | `jeddah-islamic-port-passenger-guide` | Low | Not started |

## 6. Service & Booking Comparison Guides
**Status: 0/5 published.** Commercial/comparison angles supporting the service pillar
pages and named point-transfer services (hourly chauffeur, VIP, group).

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 36 | Jeddah vs Madinah airport for Umrah | `jeddah-vs-madinah-airport-for-umrah` | Medium | Not started |
| 37 | VIP/executive transfers in Riyadh | `vip-executive-transfers-riyadh-guide` | Medium | Not started |
| 38 | Hourly chauffeur hire in Saudi Arabia | `hourly-chauffeur-hire-saudi-arabia-guide` | Medium | Not started |
| 39 | Private transfer vs ride-hailing for Umrah groups | `private-transfer-vs-ride-hailing-umrah-groups` | Medium | Not started |
| 40 | Group & family transfers across Saudi Arabia | `group-family-transfers-saudi-arabia-guide` | Medium | Not started |

## 7. Cross-Border Route Guides
**Status: 0/5 published.** The Bahrain corridor is already well covered; Kuwait,
Qatar, and UAE crossings from non-Dammam origins are thin.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 41 | Dammam to Jubail transfer guide | `dammam-to-jubail-transfer-guide` | Low | Not started |
| 42 | Riyadh to Kuwait City transfer guide | `riyadh-to-kuwait-city-transfer-guide` | Medium | Not started |
| 43 | Dammam to Qatar border crossing guide | `dammam-to-qatar-border-crossing-guide` | Medium | Not started |
| 44 | Riyadh to UAE border crossing guide | `riyadh-to-uae-border-crossing-guide` | Medium | Not started |
| 45 | Khobar to Bahrain transfer guide | `khobar-to-bahrain-transfer-guide` | Medium | Not started |

## 8. Seasonal & Practical Guides
**Status: 0/5 published.** Rounds out seasonal timing questions not yet covered by
the existing Ramadan/Riyadh Season/Jeddah Season posts.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 46 | Best time to visit AlUla | `best-time-to-visit-alula` | Medium | Not started |
| 47 | Best time to visit Abha/Asir | `best-time-to-visit-abha-asir` | Low | Not started |
| 48 | Traveling to Saudi Arabia during Hajj as a non-pilgrim | `traveling-saudi-arabia-during-hajj-non-pilgrim` | Low | Not started |
| 49 | Riyadh Season vs Jeddah Season | `riyadh-season-vs-jeddah-season` | Medium | Not started |
| 50 | Ramadan travel outside Makkah | `ramadan-travel-saudi-arabia-outside-makkah` | Low | Not started |

---

## Stage 4 — Internal linking rules (apply to every single piece, no exceptions)

1. **Up-link, always.** Every post links to ≥1 commercial/conversion page for its
   topic (the exact airport/route/point-transfer/service page — never a vague city
   hub when a more specific page exists). That commercial page stays the canonical
   target for the head keyword; the post supports it with descriptive, non-exact-match
   anchor text, never competes with it.
2. **Side-link within the cluster.** 3-5 related links at the end: the commercial
   page, 1-2 sibling posts from the same block above, and a relevant hub page
   (`/taxi-service/{city}` or `/services/{pillar}`).
3. **Reciprocal, not one-way.** This site's data-driven reciprocal mechanism is the
   `topicServiceLinks` array in `components/blog/BlogSidebar.tsx` and the
   `topicLinks` array in `components/blog/BlogInlineCta.tsx` — **add an exact-slug
   entry keyed to the new post's own slug** (not a broad city-name group; see
   `docs/seo-audit-2026.md` §2 for why the coarse groups miss 5 of 10 existing pairs).
   For point-transfer/route/city pages that carry a `relatedLinks`/`hubLinks`-style
   field (the `PointTransferV2Block` union, `RouteJourneyView`'s `relatedRoutes`/
   `hubLinks` props), add the new post there too — use the existing field, never
   hardcode ad-hoc markup into the page component.
4. **Bilingual.** This site has **no `translation_of` column** — the equivalent is
   `data/translations/ar.ts`: an Arabic blog post is a separate `type: "blog"` entry
   with a mandatory `enPath` field pointing back to the English slug, resolved live by
   `getArPathForEnPath()`/`getEnPathForArPath()`. Only 34 of 97 existing posts (35%)
   have an Arabic counterpart. For new English posts: **do not create an Arabic
   version in the same batch** unless explicitly asked — ship English first, translate
   in a later, separate batch once the English post has proven itself, matching the
   Stage 5 "small batches" discipline. When an Arabic version *is* written, link it to
   the Arabic commercial page **only** after confirming that page exists via
   `getArPathForEnPath()` — never guess a `/ar/{slug}` pattern. If no Arabic
   commercial page exists yet, link to the nearest Arabic hub page instead
   (`/ar/تنقلات-{city}` / `/ar/تاكسي-{city}`).

## Stage 5 — Execution discipline (before writing anything)

1. **Query the live `blogs` table** (`SELECT slug, title FROM blogs`), not this file
   alone — this plan can drift. Re-run the query in `docs/seo-audit-2026.md` §1's
   method before every batch.
2. **Diff** the fresh query against the slugs in this plan to confirm the topic is
   still genuinely missing.
3. **Read the nearest neighboring post** (not just its title) before writing — if two
   topics answer the same question, don't write both; strengthen one.
4. **Fact-check every specific claim** (distances, drive times, prices, procedures)
   against a live source before publishing — this site already has real
   `distanceKm`/`durationMin` values in `data/hotels.ts` and real drive-time strings in
   `data/routes.ts`/`data/airports.ts`; reuse those numbers instead of estimating, and
   flag anything not already verified in the codebase for a live check before
   publishing rather than inventing it.
5. **Publish in batches of 1-3.** Never bulk-dump the remaining 47 topics at once.
6. **Submit new URLs to Bing after every batch** using the existing, already-proven
   tool: `scripts/submit-bing-urls.mjs` (or the same inline pattern used in this
   session), logged to `docs/bing-submitted-urls.json` exactly like every prior batch
   this year.

---

## Execution log
*(updated after every batch — most recent first)*

- **2026-09-11 — Batch 2 published (2 posts, English + Arabic).**
  `abha-airport-arrival-guide` and `taif-regional-airport-arrival-guide` — both in
  Supabase `blogs` as `published`, verified live (HTTP 200). Arabic counterparts
  written as natural adaptations (not machine translation) in
  `data/translations/ar.ts` (`دليل-مطار-أبها-الدولي`, `دليل-مطار-الطائف-الإقليمي`),
  each with a mandatory `enPath` back to its English slug so hreflang resolves
  automatically. Added exact-slug reciprocal links to both `BlogSidebar.tsx` and
  `BlogInlineCta.tsx`. Checked all 5 posts published this session (this batch + batch
  1) for exact-sentence duplication — zero found. Committed `eeb56ec`, pushed;
  submitted to Bing (English + Arabic URLs).
- **2026-09-11 — Batch 1 published (3 posts).** `madinah-airport-driver-pickup-guide`,
  `alula-airport-arrival-guide`, `jeddah-to-riyadh-transfer-guide` — all in Supabase
  `blogs` as `published`, all verified live (HTTP 200) at their `/blog/{slug}` URLs.
  Added exact-slug reciprocal-link entries to `BlogSidebar.tsx`/`BlogInlineCta.tsx` for
  all 3 (committed `22560b1`, deployed via the existing Vercel/GitHub pipeline).
  Submitted to Bing (`docs/bing-submitted-urls.json`, batch 11). Block statuses updated
  above (#1, #4, #11 → Published).
  - **Known gap surfaced, not fixed in this batch:** `/airport-transfer/{airport}`
    pages have **no** commercial→blog linking mechanism at all (no `LatestGuides`,
    no `relatedLinks`-equivalent field) — confirmed by code search, applies to all 13
    airport pages, not specific to this batch. `/routes/{slug}` pages do have
    `LatestGuides` (topic-blind rotation), so `jeddah-to-riyadh-transfer-guide` has a
    *chance* of surfacing there over time but no guaranteed placement. Flagging for a
    future, separate task rather than hand-patching the airport template mid-batch.
