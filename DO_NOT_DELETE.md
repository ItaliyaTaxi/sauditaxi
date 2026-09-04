# DO NOT DELETE — Saudi Private Transfers Pre-Redesign

Everything listed here is required for one of three things: **(A)** reproducing
the existing public URL structure, **(B)** the admin/CRM system, or **(C)** the
public quote/lead form. **(D)** lists the shared infrastructure only those
three areas depend on. Nothing outside these four lists should be assumed
protected merely because it currently exists — see `PRE_REDESIGN_AUDIT.md` §
"Proposed for deletion" for what that leaves.

## A. URL-architecture assets

### Route files (the URL shape itself)
```
app/(main)/page.tsx
app/(main)/about/page.tsx
app/(main)/contact/page.tsx
app/(main)/get-quote/page.tsx
app/(main)/terms-and-conditions/page.tsx
app/(main)/privacy-policy/page.tsx
app/(main)/services/page.tsx
app/(main)/services/hotel-transfers/page.tsx
app/(main)/airport-transfers/page.tsx
app/(main)/city-transfers/page.tsx
app/(main)/intercity-transfers/page.tsx
app/(main)/border-transfers/page.tsx
app/(main)/border-transfers/[border]/page.tsx
app/(main)/umrah-taxi-service/page.tsx
app/(main)/hajj-transport-service/page.tsx
app/(main)/ziyarat-taxi-service/page.tsx
app/(main)/taxi-service/[city]/page.tsx
app/(main)/airport-transfer/[airport]/page.tsx
app/(main)/cities/[city]/page.tsx
app/(main)/routes/[slug]/page.tsx
app/(main)/distance/[slug]/page.tsx
app/(main)/[city]/[route]/page.tsx
app/(main)/blog/page.tsx
app/(main)/blog/[slug]/page.tsx
app/(main)/sitemap/page.tsx
app/(main)/invoice/[token]/page.tsx
app/(main)/quote/[token]/page.tsx
app/(main)/layout.tsx
app/ar/page.tsx
app/ar/[...slug]/page.tsx
app/ar/layout.tsx
app/layout.tsx
app/sitemap.ts
app/robots.ts
app/manifest.ts
next.config.ts          — hosts redirects()
proxy.ts                — hosts the hotel-transfer 301 redirects + admin gate
```

### Data files that generate URLs / slugs (content inside is disposable per-field, but the slug + routing fields are not)
```
data/cities.ts
data/airports.ts
data/borders.ts
data/services.ts
data/routes.ts
data/makkah-routes.ts
data/dammam-routes.ts
data/distance-pages.ts
data/journey-pages.ts
data/distance-guide-v2.ts
data/translations/ar.ts        — slug, enPath, type fields specifically
lib/hotel-transfers.ts          — generates the 174+41 redirect-source URLs
lib/point-transfers.ts          — aggregates the 61 point-transfer slugs
data/jeddah/attractions.ts, data/jeddah/port-railway.ts, data/jeddah/services.ts
data/makkah/attractions.ts, data/makkah/services.ts, data/makkah/railway.ts
data/dammam/attractions.ts, data/dammam/port.ts
data/madinah/attractions.ts, data/madinah/railway.ts
data/riyadh/points.ts
data/alula/points.ts
```
Specifically: the `slug`, `path`, `enPath`, `citySlug`, `href` fields on every
object in the files above. Marketing copy / prose fields on those same
objects are **not** protected (see § D of `PRE_REDESIGN_AUDIT.md`) — only the
URL-bearing fields.

### Redirect definitions
```
next.config.ts → redirects()          — /index*, www→apex, 5 blog-slug renames
proxy.ts → hotelTransferRedirects / arHotelTransferRedirects
app/ar/[...slug]/page.tsx → LEGACY_AR_ALIASES
```

### SEO/canonical infrastructure
```
lib/seo.ts       — buildMetadata(), canonical + hreflang
lib/schema.ts     — structured data (breadcrumb/service/FAQ schema)
lib/site.ts       — absoluteUrl(), siteConfig
```

## B. Admin-related assets

See `ADMIN_PRESERVATION_MANIFEST.md` for the full annotated list. Summary:
```
app/(main)/admin/**                              (all page.tsx + layout.tsx files)
app/api/admin/**                                 (all route.ts files)
lib/auth.ts, lib/session.ts, lib/admins.ts
lib/leads.ts, lib/invoices.ts, lib/quotations.ts
lib/email.ts
lib/supabase.ts
supabase/schema.sql                              (admins, leads, email_logs, invoices, quotations tables + verify_admin/upsert_admin functions)
proxy.ts                                         (the /admin, /api/admin auth-gate logic specifically)
```
Env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `AUTH_SECRET`,
`ADMIN_EMAIL`/`ADMIN_LOGIN_EMAIL`, `ADMIN_PASSWORD`, `RESEND_API_KEY`, `FROM_EMAIL`.

## C. Form-related assets

See `FORM_PRESERVATION_MANIFEST.md` for the full annotated list. Summary:
```
components/QuoteForm.tsx
app/api/leads/route.ts
lib/leadSchema.ts
lib/leads.ts                                     (shared with B — do not duplicate)
lib/email.ts                                     (shared with B — do not duplicate)
lib/supabase.ts                                  (shared with B — do not duplicate)
supabase/schema.sql                              (leads, email_logs tables — shared with B)
app/(main)/get-quote/page.tsx
```
Env vars: same Supabase/email vars as B, plus none unique to the form.

## D. Required shared infrastructure (only because A, B, or C depend on it)

```
lib/supabase.ts        — DB client, used by A (blog content), B, C
lib/i18n.ts             — getDictionary()/localeFromPathname(), used by every Arabic route + the form's placeholder text
lib/utils.ts            — cn() and similar, used broadly enough that most components import it
lib/hero.ts              — image path resolution referenced by many route files' generateMetadata/render (URLs still resolve without it, but pages currently import it — check call sites before removing)
lib/format.ts            — date/currency formatting, used by admin invoice/quotation views (B)
lib/blogs.ts             — listPublishedBlogs()/getBlogBySlug(), required for A (blog URLs) and the sitemap
lib/city-hub-facts.ts    — required by A (/cities/{city} rendering)
data/hotels.ts            — required by A (city-hub hotel tables) and by lib/hotel-transfers.ts (redirect-source generation)
components/seo/SchemaScript.tsx  — required by A (every page's structured data)
tsconfig.json, package.json, package-lock.json    — build toolchain
```

Nothing else in `components/` or `data/` is inherently protected — most
existing UI components (cards, sections, page-specific layout pieces) exist
only to render content that itself is *not* protected (see
`PRE_REDESIGN_AUDIT.md`), so they can be rebuilt freely as long as the route
files above keep resolving the same URLs with the same fundamental
data → page mapping.
