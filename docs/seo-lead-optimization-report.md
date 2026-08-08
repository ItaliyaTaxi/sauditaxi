# SEO & Lead Optimization Report — SaudiPrivateTransfers.com

*Completed: 2026-08-08 | Scope: Phases 1–8*

---

## Executive Summary

The site was receiving search impressions (7,600+ during the Search Console reporting period) but producing almost zero leads. This report documents the root causes identified and the concrete changes implemented to address them.

---

## Section 1 — Verified Google Search Console Facts

> Data sourced from the exported `Queries.csv` and `Pages.csv` files only. No estimates or assumptions.

| Metric | Value |
|---|---|
| Reporting period total impressions | 7,600+ |
| Total clicks | ~15 |
| Overall CTR | <0.2% |
| Highest-impression query group | Airport transfers (Jeddah, Madinah, Riyadh) |
| Best-positioned pages | `/routes/jeddah-to-makkah`, `/airport-transfer/jeddah-airport` |
| Lowest CTR vs impressions | Most pages 0% CTR despite 20–60 impressions |

**Top query clusters by impression volume (from Queries.csv):**

| Cluster | Impressions share | Avg position |
|---|---|---|
| Airport transfers | Highest | 25–55 |
| Umrah/Miqat taxi | High | 30–65 |
| City-to-city routes | Medium | 40–80 |
| Border transfers (Bahrain, Qatar) | Medium | 35–70 |
| Ziyarat/Hajj | Lower | 45–90 |

**Key observation:** The site is being crawled and indexed. Impressions are growing week-over-week. The problem is not crawlability — it is **low CTR** (titles not matching query intent) and **no lead conversion mechanism** once users land.

---

## Section 2 — Verified Codebase Facts

| Finding | Source |
|---|---|
| Site uses Next.js 16.2.6 (App Router) | `package.json` |
| All route/airport pages are statically generated (SSG) | Build output |
| Blog posts are stored in Supabase, fetched at runtime | `lib/blogs.ts` |
| Lead form submits to `/api/leads` → Supabase `leads` table | `app/api/leads/route.ts` |
| Email notifications via Resend | `lib/email.ts` |
| WhatsApp CTAs were untracked (no click logging) | `components/StickyWhatsApp.tsx` before this work |
| No attribution fields existed in the `leads` table | `lib/leads.ts` before this work |
| Blog inline CTAs showed same 4 generic links regardless of topic | `components/blog/BlogInlineCta.tsx` before this work |
| 544 pages generated across routes, airports, cities, borders, Arabic | Build output |

**Verified route distances/durations (from `data/routes.ts`):**

| Route | Distance | Duration |
|---|---|---|
| Jeddah → Makkah | 85 km | ~1h 15min |
| Dammam → Bahrain | 70 km | ~1h 15min + border |
| Dammam → Riyadh | 400 km | ~3h 45min |
| Doha → Al Khobar | ~380 km | ~5h + border |
| Khobar → Riyadh | ~405 km | ~4h |
| Riyadh → Jubail | ~480 km | ~4h 45min |

**Verified vehicle types (from `data/vehicles.ts`):** Economy (1–3 pax), Comfort (1–3 pax), Business (1–3 pax), SUV (1–5 pax), Van (1–9 pax), Minibus (10–18 pax).

---

## Section 3 — Changes Implemented

### 3.1 SEO Metadata (Phase 3)
Updated `title` and `metaDescription` on the 8 highest-impression commercial pages to better match search intent from `Queries.csv`. No prices, distances, or claims invented — only reformatted existing verified data into more intent-specific copy.

Files: `data/routes.ts`, `data/airports.ts`, `data/services.ts`

### 3.2 Internal Linking (Phase 4)
Made `BlogInlineCta` and `BlogSidebar` slug-aware. Blog posts about Umrah, Jeddah Airport, Dammam/Bahrain, Hajj, and Madinah now link directly to the matching commercial money pages instead of a generic list.

Files: `components/blog/BlogInlineCta.tsx`, `components/blog/BlogSidebar.tsx`, `app/(main)/blog/[slug]/page.tsx`

### 3.3 Multi-Touch Lead Attribution (Phase 5)
Extended the lead capture pipeline to record:
- **First-touch data** (stored in `localStorage` on first page view): landing page, referrer, UTM source/medium/campaign
- **Current-session data** (at form submission time): current URL, referrer, UTMs, gclid

This allows answering: *"Did this lead come from Google Search or a WhatsApp share? Which page did they land on first?"*

Files: `lib/leadSchema.ts`, `lib/leads.ts`, `components/QuoteForm.tsx`, `lib/email.ts`

**Supabase migration required:** `docs/migrations/add_attribution_columns.sql`

### 3.4 WhatsApp Click Tracking (Phase 6)
Created `/api/whatsapp-click` endpoint and updated the sticky WhatsApp button to log click source attribution via `sendBeacon`. WhatsApp navigation is never blocked.

Files: `app/api/whatsapp-click/route.ts`, `components/StickyWhatsApp.tsx`

**Supabase migration required:** `whatsapp_clicks` table in `docs/migrations/add_attribution_columns.sql`

---

## Section 4 — SEO Hypotheses (Not Yet Verified)

> These are informed hypotheses based on the data pattern. They require 4–8 weeks of post-deployment Search Console monitoring to confirm or refute.

| Hypothesis | Rationale | Likely impact |
|---|---|---|
| Updated title tags will increase CTR on airport pages | Titles now match query intent more closely | Medium |
| Context-aware blog CTAs will increase lead form submissions | Readers of Umrah/airport guides are commercial-intent visitors | Medium–High |
| Multi-touch attribution will reveal the true lead source | Currently all leads show null UTM data | Attribution clarity only |
| WhatsApp clicks will outperform form submissions | WhatsApp has lower friction for Saudi/GCC users | Confirms existing assumption |
| Impressions will continue growing week-over-week | Site is 8–10 weeks old; crawl frequency is increasing | Likely |

---

## Section 5 — Future Opportunities (Not Yet Implemented)

> These were excluded from this sprint to avoid mass content creation and scope creep. Prioritize after reviewing 4-week post-implementation data.

| Opportunity | Priority | Notes |
|---|---|---|
| Improve page titles for position 20–50 queries | High | Check Search Console after 4 weeks; test 1–2 at a time |
| Add booking CTA to individual route page hero sections | High | QuoteForm is present but positioned below the fold |
| Arabic translation for top 3 commercial pages | Medium | Arabic impressions present in GSC; `/ar/` routes partially set up |
| Add structured data (FAQPage) to route pages | Medium | Route pages already have JSON-LD; add FAQ schema for common questions |
| Google Ads remarketing pixel | Medium | GCLID capture is now in place |
| Blog posts updating Supabase body with inline commercial links | Low | Content team task, not a code change |
| Dammam → Bahrain dedicated landing page improvements | Low | Already ranking; improve above-the-fold CTA visibility |

---

## Section 6 — Action Required Before Deployment

| Action | Owner | File |
|---|---|---|
| Run Supabase migration SQL | Developer | `docs/migrations/add_attribution_columns.sql` |
| Verify `whatsapp_clicks` table RLS policy | Developer | Supabase dashboard |
| Monitor Search Console CTR for updated pages | SEO | After 2–4 weeks |
| Check lead records include attribution fields | Developer | Supabase `leads` table |

---

*This report contains only verified data from Search Console exports, codebase inspection, and build output. No invented prices, claims, or business information has been introduced.*
