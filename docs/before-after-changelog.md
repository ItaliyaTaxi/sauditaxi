# Before / After Changelog — SaudiPrivateTransfers.com
**SEO & Lead Generation Implementation — Phases 1–8**

---

## Phase 1 — Commercial Page Audit

No code changes. Baseline documentation created.

| Deliverable | Path |
|---|---|
| Audit report | `docs/commercial-page-audit.md` |

---

## Phase 2 — Query-to-URL Ownership Mapping

No code changes. Strategic mapping created.

| Deliverable | Path |
|---|---|
| Query mapping | `docs/query-url-mapping.md` |

---

## Phase 3 — Money Page SEO Metadata

### `data/routes.ts`

| Route | Before | After |
|---|---|---|
| `jeddah-to-makkah` title | Generic | Targets `"jeddah to makkah taxi"` intent explicitly |
| `dammam-to-bahrain` | Generic | Mentions border crossing, private taxi, WhatsApp quote |
| `dammam-to-riyadh` | Generic | Targets `"dammam to riyadh taxi"` with route stats |
| `doha-to-al-khobar` | Generic | Targets `"doha to khobar"` cross-border query |
| `khobar-to-riyadh` | Generic | Targets `"al khobar to riyadh"` intent |
| `riyadh-to-jubail` | Generic | Targets `"riyadh to jubail taxi"` |

### `data/airports.ts`

| Airport | Before | After |
|---|---|---|
| `jeddah-airport` | Short, generic | Targets `"jeddah airport transfer"` + `"jeddah airport to makkah"` |
| `riyadh-airport` | Short, generic | Targets `"riyadh airport taxi"` + `"king khalid airport transfer"` |
| `madinah-airport` | Short, generic | Targets `"madinah airport taxi"` + `"prince mohammad bin abdulaziz"` |

### `data/services.ts`

| Service | Before | After |
|---|---|---|
| `ziyarat-taxi-service` | Generic | Title targets `"makkah ziyarat taxi"`, description mentions holy sites |
| `umrah-taxi-service` | Generic | Targets `"umrah taxi service"`, Miqat pickup, airport links |

---

## Phase 4 — Internal Linking Optimization

### `components/blog/BlogInlineCta.tsx`

**Before:** Static 4 hardcoded links — same on every blog post.

**After:** Slug-aware contextual links. Topic detection maps blog slugs to relevant money pages:

| Blog topic keywords | Links shown |
|---|---|
| `umrah`, `miqat`, `ihram` | Umrah Transport, Jeddah Airport, Jeddah→Makkah, Madinah Airport |
| `jeddah-airport`, `landing-at-jeddah` | Jeddah Airport Transfer, Jeddah→Makkah, Airport Transfers, Makkah Taxi |
| `dammam`, `bahrain`, `khobar` | Dammam→Bahrain, Dammam→Riyadh, Khobar→Riyadh |
| `hajj`, `ziyarat` | Ziyarat Service, Hajj Transport, Umrah, Makkah Taxi |
| `madinah`, `medina` | Madinah Airport, Madinah Taxi, Umrah, Makkah→Madinah |
| Default | Airport Transfers, Umrah Transport, Makkah Taxi, Madinah Taxi |

### `components/blog/BlogSidebar.tsx`

**Before:** Static `quickLinks` array — same 4 links on every blog sidebar.

**After:** `getQuickLinks(currentSlug)` applies same topic detection. Sidebar on each blog post now links directly to the most relevant commercial pages.

### `app/(main)/blog/[slug]/page.tsx`

**Before:** `<BlogInlineCta />` (no props)

**After:** `<BlogInlineCta slug={blog.slug} />` — both inline CTA positions updated.

---

## Phase 5 — Multi-Touch Lead Attribution

### `lib/leadSchema.ts`

**Before:** 14 validated fields.

**After:** +12 optional attribution fields added (firstLandingPage, firstReferrer, firstUtmSource, firstUtmMedium, firstUtmCampaign, landingPage, referrer, utmSource, utmMedium, utmCampaign, gclid, searchSource).

### `lib/leads.ts`

**Before:** `Lead` interface + `LeadRow` had 13 fields each.

**After:** Both extended with all 12 attribution columns. `rowToLead()` and `inputToRow()` map them bidirectionally (camelCase ↔ snake_case).

### `components/QuoteForm.tsx`

**Before:** 13-field payload. No attribution.

**After:**
- On render: stores first-touch data in `localStorage["spt_first_touch"]` if not already set
- On submit: reads stored first-touch + current session params, appends all 12 attribution fields to POST payload

### `lib/email.ts`

**Before:** Admin email showed Source Page only.

**After:** Admin email shows full attribution block (13 fields). Client email unchanged.

---

## Phase 6 — Non-Blocking WhatsApp CTA Attribution

### `app/api/whatsapp-click/route.ts` *(NEW)*

New `POST /api/whatsapp-click` endpoint — logs click source, first landing page, UTM source to Supabase `whatsapp_clicks` table. Always returns `{ ok: true }`.

### `components/StickyWhatsApp.tsx`

**Before:** Direct link, zero attribution.

**After:** `handleClick` fires before WhatsApp opens via `navigator.sendBeacon` (with `fetch keepalive:true` fallback). WhatsApp opens immediately regardless of API response.

---

## Phase 7 — Technical SEO Verification

| Item | Status |
|---|---|
| Canonical tags | Verified via `buildMetadata()` |
| JSON-LD LocalBusiness | Present site-wide |
| JSON-LD BreadcrumbList | Per-page |
| JSON-LD Article | All blog posts |
| Sitemap `/sitemap.xml` | 1h revalidate |
| Robots.txt | Present |
| hreflang en/ar | Where Arabic translation exists |

---

## Phase 8 — Build Verification

| Build run | Result |
|---|---|
| Initial | TypeScript error: `.catch()` on `PostgrestFilterBuilder` |
| After fix | Compiled in 31.6s, TypeScript passed in 11.9s |
| Pages generated | **544 pages** |
| Dynamic routes | Admin, blog, quote/invoice pages server-rendered |

---

## Supabase Migration Required

Run `docs/migrations/add_attribution_columns.sql` once in Supabase SQL editor before deploying.

---

*Generated: 2026-08-08*
