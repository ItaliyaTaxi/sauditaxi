# Content Inventory & Cannibalization Audit — saudiprivatetransfers.com (2026)

> Stage 1 of the content-cluster pipeline (methodology matches `italytaxi`'s
> `docs/seo-audit-2026.md` / `seo-content-gap-50.md` / `seo-topic-clusters-plan.md`).
> Every number below is queried directly from the live Supabase `blogs` table and the
> live `sitemap.xml` on 2026-09-11 — nothing here is estimated or carried over from memory.

---

## 1. Page inventory (grounded in the actual codebase + live sitemap)

**842 total production URLs** (460 English + 382 Arabic), confirmed live against
`https://saudiprivatetransfers.com/sitemap.xml` today.

| Type | Count | Data source | Notes |
|---|---:|---|---|
| Homepage | 1 | `app/(main)/page.tsx` | |
| Service pillar pages | 9 | `data/services.ts` | incl. `/services` hub |
| City taxi-service hubs | 19 | `data/cities.ts` | one per city, nav-linked |
| City hotel-transfer hubs | 5 | `hotelCities()` (`lib/hotel-transfers.ts`) | Jeddah/Riyadh/Makkah/Madinah/Dammam only |
| Airport hubs | 13 | `data/airports.ts` | |
| Commercial route pages | 194 | `data/routes.ts` | domestic + GCC + border |
| Border crossing pages | 5 | `data/borders.ts` | |
| Point-transfer pages (hotel/attraction/port/railway/service, per-city) | 61 | `data/point-transfer-v2/*.ts` | Jeddah 28, Makkah 10, Dammam 14, Madinah 5, Riyadh 3, AlUla 1 |
| Distance/journey informational pages | 50 | 3 internal designs sharing `/distance/{slug}` | |
| Blog posts | **97** | Supabase `public.blogs` (all `status = published`) | + `/blog` listing = 98 |
| Arabic pages | 382 | `data/translations/ar.ts` | full parity on routes (194/194), point-transfer (61/61), city hubs (24/24), distance (50/50); partial on airports (4/13) and blog (34/97) |

Static/admin/token pages (`/about`, `/get-quote`, `/admin/*`, `/invoice/{token}`, etc.)
exist but are out of scope for a content-cluster plan — they're not commercial
landing pages a blog post should target.

### Internal-linking patterns already in use (do not invent a new one)
1. **Primary nav** (`components/layout/Header.tsx`) — every page, dropdown to all 19
   city hubs and all 13 airport hubs. Strongest link equity on the site.
2. **Footer** (`components/layout/Footer.tsx`) — services, airports, cities, a handful
   of sample distance pages, border hub, blog listing.
3. **`relatedLinks` blocks** — the `PointTransferV2Block` union (61 pages) and route
   view components (`relatedRoutes`, `hubLinks` props) carry structured, data-driven
   related-link lists. This is the equivalent of italytaxi's `relatedLinks` prop
   pattern — **reuse it, don't hardcode ad-hoc `<a>` tags** when adding to these page
   types.
4. **Blog → commercial, one-way, keyword-matched** — `components/blog/BlogSidebar.tsx`
   and `components/blog/BlogInlineCta.tsx` both run the post's **slug** through a
   hardcoded `topicServiceLinks` / `topicLinks` array (keywords: `umrah`/`miqat`/`ihram`,
   `jeddah-airport`, `dammam`/`bahrain`/`khobar`/`riyadh`, `hajj`/`ziyarat`,
   `madinah`/`medina`/`madina`) and falls back to 4 generic service links if nothing
   matches. **This is the existing data-driven pattern for blog→commercial linking —
   Stage 4 extends these arrays for new content instead of hardcoding markup.**
5. **Commercial → blog, reciprocal** — `components/sections/LatestGuides.tsx` renders
   a rotating pick of recent posts on city/route/service pages via `pageKey`-seeded
   selection. This is topic-blind (doesn't target a *specific* supporting post to a
   *specific* commercial page) — see Finding C2 below.
6. **Bilingual linking** — **no `translation_of` column exists** on the `blogs` table
   (verified: `SELECT * FROM blogs LIMIT 1` schema has no such field). The equivalent
   mechanism is `data/translations/ar.ts`: each Arabic entry declares a mandatory
   `enPath` field pointing back to its English URL, and `getArPathForEnPath()` /
   `getEnPathForArPath()` (`data/translations/ar.ts`) resolve the mapping live for
   hreflang and the language switcher. **For blog posts specifically, an Arabic
   counterpart is a separate `type: "blog"` entry in `ar.ts` with its own `enPath` —
   there is no automatic pairing.** Only 34 of 97 posts (35%) have one today.

---

## 2. Cannibalization check — blog vs. commercial pages

Cross-referenced all 97 blog titles/slugs against the 194 commercial route slugs, 61
point-transfer slugs, and 5 border slugs. **The commercial page is always the intended
canonical target for its exact route/place head term** — per the existing internal
convention already documented in this repo (`data/distance-pages.ts`'s own comments
draw this same line between "informational" and "commercial" intent for the
`/distance` vs `/routes` split).

### Confirmed same-topic pairs (blog title ≈ commercial page's head term)

| Blog post | Commercial page it overlaps | Currently reciprocally linked? |
|---|---|---|
| `makkah-to-madinah-private-taxi-guide` | `/routes/makkah-to-madinah` | ✅ Yes — slug contains "madinah", sidebar's `madinah/medina/madina` topic group includes a direct `Makkah → Madinah Route` link |
| `riyadh-to-dammam-taxi-guide` | `/routes/riyadh-to-dammam` | ✅ Yes — sidebar's `dammam/bahrain/khobar` topic group includes `Dammam → Riyadh Transfer` |
| `jeddah-airport-to-makkah-taxi-service-guide` | `/routes/jeddah-to-makkah` | ✅ Yes — `jeddah-airport` topic group links `Jeddah → Makkah Transfer` directly |
| `dammam-to-bahrain-travel-guide` | `/routes/dammam-to-bahrain`, `/border-transfers/bahrain-causeway` | ✅ Yes — same topic group |
| `king-fahd-causeway-guide` | `/border-transfers/bahrain-causeway` | ⚠️ Partial — links to border-adjacent routes, not the causeway hub page by exact URL |
| `hajj-transport-guide-makkah-mina-arafat` | `/makkah/makkah-to-mina`, `/makkah/makkah-to-arafat` | ❌ **No** — `hajj/ziyarat` topic group links Ziyarat/Hajj/Umrah *service* pages, never the specific Mina/Arafat point-transfer pages it's actually describing |
| `riyadh-to-alula-road-trip-guide` | `/routes/riyadh-to-alula` | ❌ **No** — slug matches only the `dammam/bahrain/khobar/riyadh` group, which surfaces Eastern-Province links (Dammam↔Bahrain, Khobar↔Riyadh) with zero relevance to AlUla |
| `jeddah-to-taif-taxi-guide` | `/routes/jeddah-to-taif` | ❌ **No** — no topic group matches "jeddah-to-taif" or "taif" at all; falls through to the 4 generic default links |
| `madinah-to-yanbu-transfer-guide` | `/routes/madinah-to-yanbu` | ⚠️ Partial — `madinah` group matches and links *a* Madinah route, but not specifically Madinah→Yanbu |
| `diriyah-taxi-transfer-guide` | `/riyadh/riyadh-to-diriyah-transfers` | ❌ **No** — `riyadh` alone routes to the Eastern-Province group, never the Diriyah point-transfer page |

**Verdict: no true keyword-cannibalization risk found** — none of these blog posts
target the exact same primary keyword as their commercial counterpart with intent to
rank *instead of* it (all are framed as guides/explainers, not booking pages, and none
carries transactional schema competing with the route page's `Service` schema). But
**5 of 10 checked pairs have a broken or missing reciprocal link** — the blog exists,
the commercial page exists, but the topic-keyword arrays in `BlogSidebar.tsx` /
`BlogInlineCta.tsx` are too coarse (city-name-only) to connect them. This is a real,
fixable finding, not a cannibalization risk — **Stage 4 fixes this going forward by
adding an exact-slug rule to the topic array for every new post**, and it's worth a
small separate pass to backfill the 5 broken pairs found above (flagged, not actioned,
per the "report only, no topic ships without the check" instruction — this audit does
not modify code).

### C2 — Reverse linking gap (commercial → blog)
`LatestGuides` (used on city/route/service pages) picks posts by category rotation,
not by topical relevance to the specific page it's rendered on. A reader on
`/routes/riyadh-to-alula` sees a randomly-rotated set of "latest guides," which may or
may not include `riyadh-to-alula-road-trip-guide`. This is the same asymmetry
italytaxi's audit flagged as O6 ("reverse links... are sparse"). Not fixed here
(inspection only) — noted as a Stage 4 discipline item for new content.

---

## 3. What's already strong (do not treat as a gap)

- **Umrah/Hajj/pilgrim practical content**: 26 of 97 posts (27%) — miqat, duas, rituals,
  step-by-step Umrah, elderly/solo/family pilgrim angles, Nusuk app, visa rules. Deep,
  mature coverage.
- **GCC/border-crossing practical content**: 9 dedicated posts (King Fahd Causeway,
  documents, GCC residents, family/business framings) — the Bahrain corridor
  specifically is thoroughly covered.
- **General Saudi tourist-orientation content**: SIM cards, currency, dress code, cash,
  scams, checklist, entry requirements, Uber/Careem comparison, driving — the
  "first-time tourist FAQ" layer is comprehensively built.
- **Riyadh/Jeddah airport arrival content**: both of the two highest-volume airports
  already have multiple dedicated posts.

---

## 4. Next steps
- Stage 2 gap analysis: `docs/seo-content-gap-50.md`
- Stage 3 standing cluster plan: `docs/seo-topic-clusters-plan.md`
