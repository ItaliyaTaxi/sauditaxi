# Saudi Arabia Travel — SEO Topic Cluster Plan (8 Content Blocks)

Net-new blog ideas to close the real gaps found in `docs/seo-audit-2026.md`, beyond
the 97 existing posts. Every topic includes a primary/secondary keyword, search
intent, target audience, URL slug, internal-linking suggestions, and priority — deduped
against the full published inventory (queried live from Supabase, not from memory) to
avoid keyword cannibalization with existing posts or commercial pages.

**Status:** 10 of 50 published (Batch 1: 3 EN-only; Batch 2: 2 EN+AR; Batch 3: 3 EN+AR;
Batch 4: 2 EN+AR, 2026-09-14). See §"Execution log" at the bottom, updated after every
batch.

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
**Status: 6/10 published.** The single biggest gap on the site — 10 of 13 airports
have a live `/airport-transfer/{slug}` commercial page and zero supporting blog
content. Highest priority block.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 1 | Madinah Airport driver-pickup guide | `madinah-airport-driver-pickup-guide` | High | **Published 2026-09-11** |
| 2 | Abha Airport arrival guide | `abha-airport-arrival-guide` | High | **Published 2026-09-11 (EN+AR)** |
| 3 | Taif Regional Airport arrival guide | `taif-regional-airport-arrival-guide` | High | **Published 2026-09-11 (EN+AR)** |
| 4 | AlUla Airport arrival guide | `alula-airport-arrival-guide` | High | **Published 2026-09-11** |
| 5 | Yanbu Airport arrival guide | `yanbu-airport-arrival-guide` | Medium | **Published 2026-09-13 (EN+AR)** |
| 6 | Tabuk Regional Airport arrival guide | `tabuk-regional-airport-arrival-guide` | Medium | **Published 2026-09-14 (EN+AR)** |
| 7 | Jazan Airport arrival guide | `jazan-airport-arrival-guide` | Medium | Not started |
| 8 | Hail Regional Airport arrival guide | `hail-regional-airport-arrival-guide` | Low | Not started |
| 9 | Red Sea International Airport arrival guide | `red-sea-international-airport-arrival-guide` | Medium | **Reconsider** — its commercial page (`data/airport-guides.ts`) already carries dense, specific guide content (named resorts, jetty transfers, FAQs); a blog post would largely restate it. See execution log 2026-09-14. |
| 10 | NEOM Bay Airport arrival guide | `neom-bay-airport-arrival-guide` | Low | Not started |

## 2. Route Cost & Comparison Guides
**Status: 2/10 published.** Major domestic routes with a live `/routes/{slug}` page
and zero blog support — led by Jeddah↔Riyadh, the highest-volume domestic route with
no guide at all today.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 11 | Jeddah to Riyadh transfer guide | `jeddah-to-riyadh-transfer-guide` | High | **Published 2026-09-11** |
| 12 | Riyadh to Abha transfer guide | `riyadh-to-abha-transfer-guide` | High | **Published 2026-09-13 (EN+AR)** |
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
**Status: 1/5 published.** The general version exists (`saudi-airport-pickup-guide`,
`what-happens-if-flight-to-saudi-arabia-delayed`) — these make it airport-specific,
which converts harder.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 26 | Jeddah Airport driver meeting point | `jeddah-airport-driver-meeting-point` | High | Not started |
| 27 | Riyadh Airport driver meeting point | `riyadh-airport-driver-meeting-point` | High | Not started |
| 28 | Meet-and-greet airport service explained | `meet-and-greet-airport-service-saudi-arabia` | Medium | **Published 2026-09-13 (EN+AR)** |
| 29 | Late-night/early-morning airport transfers | `late-night-airport-transfers-saudi-arabia` | Medium | Not started |
| 30 | Jeddah Airport layover transfer guide | `jeddah-airport-layover-transfer-guide` | Low | Not started |

## 5. Point-Transfer Supporting Content
**Status: 1/5 published.** Live commercial point-transfer pages (Hegra, Al-Balad,
Corniche, Jabal Thawr/Noor, Jeddah Islamic Port) with no supporting blog funnel.

| # | Topic | Slug | Priority | Status |
|---|---|---|---|---|
| 31 | Visiting Hegra from AlUla | `visiting-hegra-alula-guide` | Medium | **Rejected** — `alula-airport-arrival-guide` already covers "Getting to Hegra, the Resorts & Old Town" in its own dedicated section; a separate post would be a near-duplicate. See execution log 2026-09-14. |
| 32 | Al-Balad Jeddah visitor guide | `al-balad-jeddah-visitor-guide` | Medium | Not started |
| 33 | Jeddah Corniche visitor guide | `jeddah-corniche-visitor-guide` | Medium | Not started |
| 34 | Jabal Thawr & Jabal al-Noor Ziyarat guide | `jabal-thawr-jabal-noor-ziyarat-guide` | Low | Not started |
| 35 | Jeddah Islamic Port passenger guide | `jeddah-islamic-port-passenger-guide` | Low | **Published 2026-09-14 (EN+AR)** |

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

- **2026-09-14 — Batch 4 published (2 posts, English + Arabic), under an explicit
  recovery-period brief.** The site is recovering from a redesign/indexing slowdown
  (sitemap healthy, all URLs 200, hreflang sound, but indexed-page growth hasn't
  recovered since ~5 September), so this batch prioritized topical authority and
  commercial-page support over volume. Full audit before topic selection (Phase 1-16
  of the brief) surfaced two corrections to this plan, applied above:
  - **`red-sea-international-airport-arrival-guide` (#9) reconsidered, not published.**
    Word-count/depth comparison across all 13 `data/airport-guides.ts` entries showed
    Red Sea's on-page content (515 words) is already dense and specific — named
    resorts, marine jetty transfers, dedicated FAQs — unlike Tabuk/Jazan (~750 words,
    comparably thin to the airports that already justified a post). A blog post there
    would mostly restate the commercial page rather than add anything.
  - **`visiting-hegra-alula-guide` (#31) rejected outright.** `alula-airport-arrival-guide`
    already has a dedicated "Getting to Hegra, the Resorts & Old Town" section — a
    separate Hegra post would be a near-duplicate.
  Published instead: `tabuk-regional-airport-arrival-guide` (#6 — continues the single
  largest cluster gap, using the exact format proven 5 times already, with real
  verified distances: Tabuk→NEOM 180 km/~2 hr, Tabuk→AlUla 330 km/~3.5 hr, both pulled
  from live `data/routes.ts` entries) and `jeddah-islamic-port-passenger-guide` (#35 —
  the site's first sea-arrival content, chosen over Al-Balad/Corniche for having a
  concrete traveler question and 4 live supporting commercial pages rather than risking
  a generic tourism-listicle angle; verified distances from
  `data/point-transfer-v2/jeddah.ts`: port↔airport ~40 km/40-55 min, port↔hotels
  10-25 km/20-40 min). Unlike prior batches, both posts include genuine in-content
  contextual links (4-6 each) directly in the article body, not just sidebar/CTA
  links — matching the original 97-post convention that batches 1-3 had drifted from.
  Both EN posts in Supabase as `published`, verified live (HTTP 200); both AR
  counterparts added to `data/translations/ar.ts` (`دليل-مطار-تبوك`,
  `دليل-ميناء-جدة-الإسلامي`), verified live post-deploy with bidirectional hreflang
  confirmed both directions. Added exact-slug reciprocal links to `BlogSidebar.tsx`/
  `BlogInlineCta.tsx`. Backlinks added from 3 existing pieces: `alula-airport-arrival-guide`
  → Tabuk post, `what-to-do-after-landing-at-jeddah-airport` and
  `jeddah-airport-to-makkah-taxi-service-guide` → Jeddah Port post, plus a forward-link
  from the Tabuk commercial page's own on-page content (`data/airport-guides.ts`).
  Site-wide duplicate-sentence check (all 107 published posts) found zero duplicates
  involving either new post — the ~234 duplicates found elsewhere are pre-existing
  boilerplate CTAs among the original 97 posts, unrelated to this batch, flagged but
  out of scope. Committed `22e688b`, pushed; submitted to Bing (English + Arabic URLs,
  batch 14). Block statuses updated above (#6, #35 → Published; #9, #31 annotated).
- **2026-09-13 — Batch 3 published (3 posts, English + Arabic).**
  `yanbu-airport-arrival-guide` (#5), `riyadh-to-abha-transfer-guide` (#12), and
  `meet-and-greet-airport-service-saudi-arabia` (#28) — all in Supabase `blogs` as
  `published`, verified live (HTTP 200) at their `/blog/{slug}` URLs. Arabic
  counterparts written as natural adaptations in `data/translations/ar.ts`
  (`دليل-مطار-ينبع`, `الرياض-الى-أبها-دليل-النقل`, `خدمة-الاستقبال-في-مطارات-السعودية`),
  each with a mandatory `enPath` back to its English slug. Topics deliberately chosen
  from 3 different blocks (Tier 1 airport-arrival, Tier 2 route-comparison, Tier 4
  meet-and-greet) rather than 3 narrow variants of the same subtopic, per the
  re-confirmed "2 most-recently-added topics" check (Abha + Taif, both 2026-09-11,
  both excluded from this batch). Added exact-slug reciprocal links to both
  `BlogSidebar.tsx` and `BlogInlineCta.tsx` for all 3 new posts. Also backfilled
  reciprocal back-links **into 5 existing posts** so linking runs both directions:
  `abha-airport-arrival-guide`, `alula-airport-arrival-guide`,
  `madinah-airport-driver-pickup-guide`, `taif-regional-airport-arrival-guide` (English
  content updated via Supabase; Arabic counterparts updated in `ar.ts` where one
  exists — Abha and Taif only, since AlUla and the original Madinah pickup guide are
  EN-only), and `madinah-to-yanbu-transfer-guide` (a pre-existing original-97 post,
  English + Arabic both updated to link forward to the new Yanbu Airport guide).
  Checked all 8 posts published this session (batches 1–3) for exact-sentence
  duplication — zero found. Committed `8c180df`, pushed; submitted to Bing (English +
  Arabic URLs). Block statuses updated above (#5, #12, #28 → Published).
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
