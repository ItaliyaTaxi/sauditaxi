# Canonical & Redirect Audit (SaudiPrivateTransfers.com)

## 1. GSC Facts (Reported by Search Console)

Search Console reported two indexing categories:

### Category A: Alternative page with proper canonical tag
Google identified 10 URLs with canonical tags pointing to alternative primary pages:
1. `https://saudiprivatetransfers.com/index`
2. `https://saudiprivatetransfers.com/blog?category=Umrah%20Transport`
3. `https://saudiprivatetransfers.com/blog?category=Saudi%20Travel%20Guides`
4. `https://saudiprivatetransfers.com/blog?category=Travel%20Guides`
5. `https://saudiprivatetransfers.com/blog?category=Saudi%20Arabia%20Tourism`
6. `https://saudiprivatetransfers.com/blog?category=Transportation%20for%20Pilgrims`
7. `https://saudiprivatetransfers.com/blog?category=Saudi%20Airport%20Guides`
8. `https://saudiprivatetransfers.com/blog?category=Islamic%20Historical%20Sites`
9. `https://saudiprivatetransfers.com/blog?category=Pilgrim%20Travel%20Tips`
10. `https://saudiprivatetransfers.com/blog?category=Madinah%20Travel%20Information`

### Category B: Page with redirect
Google identified 3 non-preferred homepage variants:
1. `http://saudiprivatetransfers.com/`
2. `https://www.saudiprivatetransfers.com/`
3. `http://www.saudiprivatetransfers.com/`

---

## 2. Codebase Findings (Verified in Repository)

- **[next.config.ts](file:///d:/Mine%20Projects/sauditaxi/next.config.ts)**:
  - Permanent redirects (`permanent: true`, HTTP 308) configured for `/index`, `/index.html`, and `/index.php` to destination `/`.
  - Host redirection configured for `www.saudiprivatetransfers.com` to `https://saudiprivatetransfers.com/:path*`.
- **[app/(main)/blog/page.tsx](file:///d:/Mine%20Projects/sauditaxi/app/%28main%29/blog/page.tsx)**:
  - Reads `searchParams.category` for server-side UX filtering.
  - Exports static `metadata` via `buildMetadata({ path: "/blog" })`, forcing all category filter queries to emit canonical `https://saudiprivatetransfers.com/blog`.
- **[lib/site.ts](file:///d:/Mine%20Projects/sauditaxi/lib/site.ts)** & **[lib/seo.ts](file:///d:/Mine%20Projects/sauditaxi/lib/seo.ts)**:
  - Preferred domain hardcoded as `https://saudiprivatetransfers.com`.
  - `buildMetadata` emits standard `<link rel="canonical">` and `openGraph.url`.
- **[app/sitemap.ts](file:///d:/Mine%20Projects/sauditaxi/app/sitemap.ts)**:
  - Generates 550 static paths using `absoluteUrl()`.
  - Excludes all query parameters, `/index`, `/index.html`, `/index.php`, and `www.` variants.
- **[proxy.ts](file:///d:/Mine%20Projects/sauditaxi/proxy.ts)**:
  - Next.js proxy middleware handling `/admin` route protection and `x-pathname` header. No redirect conflicts.

---

## 3. Live HTTP Findings (Empirically Tested)

### Redirect Test Results

| Requested URL | Observed HTTP Status | Location Header | Final Destination URL | Total Hops | Status |
| --- | ---: | --- | --- | ---: | --- |
| `/index` | 308 Permanent Redirect | `/` | `https://saudiprivatetransfers.com/` | 1 | Verified |
| `/index.html` | 308 Permanent Redirect | `/` | `https://saudiprivatetransfers.com/` | 1 | Verified |
| `/index.php` | 308 Permanent Redirect | `/` | `https://saudiprivatetransfers.com/` | 1 | Verified |
| `http://saudiprivatetransfers.com/` | 308 Permanent Redirect | `https://saudiprivatetransfers.com/` | `https://saudiprivatetransfers.com/` | 1 | Verified |
| `http://www.saudiprivatetransfers.com/` | 308 Permanent Redirect | `https://www.saudiprivatetransfers.com/` | `https://saudiprivatetransfers.com/` | 2 | Verified |
| `https://www.saudiprivatetransfers.com/` | 308 Permanent Redirect | `https://saudiprivatetransfers.com/` | `https://saudiprivatetransfers.com/` | 1 | Verified |
| `https://saudiprivatetransfers.com/` | 200 OK | N/A | `https://saudiprivatetransfers.com/` | 0 | Verified |

---

## 4. Canonical Findings (Rendered HTML Inspection)

| Page Route / URL | HTTP Status | Rendered `<link rel="canonical">` | OpenGraph `og:url` | Result |
| --- | ---: | --- | --- | --- |
| `https://saudiprivatetransfers.com/` | 200 OK | `https://saudiprivatetransfers.com` | `https://saudiprivatetransfers.com` | Verified |
| `https://saudiprivatetransfers.com/blog` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Umrah%20Transport` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Saudi%20Travel%20Guides` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Travel%20Guides` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Saudi%20Arabia%20Tourism` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Transportation%20for%20Pilgrims` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Saudi%20Airport%20Guides` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Islamic%20Historical%20Sites` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Pilgrim%20Travel%20Tips` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |
| `/blog?category=Madinah%20Travel%20Information` | 200 OK | `https://saudiprivatetransfers.com/blog` | `https://saudiprivatetransfers.com/blog` | Verified |

### Commercial Landing Pages (Verification of 12 Sample Pages)

| Commercial Route | HTTP Status | Self-Referencing Canonical | Verified |
| --- | ---: | --- | --- |
| `/routes/jeddah-to-makkah` | 200 OK | `https://saudiprivatetransfers.com/routes/jeddah-to-makkah` | YES |
| `/airport-transfer/jeddah-airport` | 200 OK | `https://saudiprivatetransfers.com/airport-transfer/jeddah-airport` | YES |
| `/routes/dammam-to-bahrain` | 200 OK | `https://saudiprivatetransfers.com/routes/dammam-to-bahrain` | YES |
| `/airport-transfer/madinah-airport` | 200 OK | `https://saudiprivatetransfers.com/airport-transfer/madinah-airport` | YES |
| `/ziyarat-taxi-service` | 200 OK | `https://saudiprivatetransfers.com/ziyarat-taxi-service` | YES |
| `/umrah-taxi-service` | 200 OK | `https://saudiprivatetransfers.com/umrah-taxi-service` | YES |
| `/airport-transfer/riyadh-airport` | 200 OK | `https://saudiprivatetransfers.com/airport-transfer/riyadh-airport` | YES |
| `/routes/dammam-to-riyadh` | 200 OK | `https://saudiprivatetransfers.com/routes/dammam-to-riyadh` | YES |
| `/routes/doha-to-al-khobar` | 200 OK | `https://saudiprivatetransfers.com/routes/doha-to-al-khobar` | YES |
| `/routes/khobar-to-riyadh` | 200 OK | `https://saudiprivatetransfers.com/routes/khobar-to-riyadh` | YES |
| `/routes/riyadh-to-jubail` | 200 OK | `https://saudiprivatetransfers.com/routes/riyadh-to-jubail` | YES |
| `/airport-transfer/abha-airport` | 200 OK | `https://saudiprivatetransfers.com/airport-transfer/abha-airport` | YES |

---

## 5. Sitemap Findings

- **Must Be Included**:
  - `https://saudiprivatetransfers.com/` (Present)
  - `https://saudiprivatetransfers.com/blog` (Present)
- **Must NOT Be Included**:
  - `/index`, `/index.html`, `/index.php` (Excluded)
  - `http://` or `www.` URLs (Excluded)
  - `/blog?category=...` parameter URLs (Excluded)

---

## 6. Internal Link Findings

- `http://saudiprivatetransfers.com` internal links in code: **0**
- `http://www.saudiprivatetransfers.com` internal links in code: **0**
- `https://www.saudiprivatetransfers.com` internal links in code: **0**
- `/index`, `/index.html`, `/index.php` internal links in code: **0**
- Category filter links (`/blog?category=...`): Functional UX links preserved in `app/(main)/blog/page.tsx` and `app/(main)/blog/[slug]/page.tsx`.

---

## 7. Changes Made

1. **[next.config.ts](file:///d:/Mine%20Projects/sauditaxi/next.config.ts)**:
   Added 301 permanent redirects (`permanent: true`, HTTP 308) for `/index`, `/index.html`, and `/index.php` pointing to destination `/`. Preserved host redirection for `www` and all image caching headers.
2. **[docs/canonical-indexing-audit.md](file:///d:/Mine%20Projects/sauditaxi/docs/canonical-indexing-audit.md)**:
   Updated documentation with empirical verification metrics and GSC analysis.

---

## 8. Build Verification

- **Command**: `npm run build`
- **Result**: PASS
- **Execution Log**:
  ```text
  ▲ Next.js 16.2.6 (Turbopack)
  - Environments: .env
  
    Creating an optimized production build ...
  ✓ Compiled successfully in 45s
    Running TypeScript ...
    Finished TypeScript in 24.4s ...
    Collecting page data using 7 workers ...
    Generating static pages using 7 workers (550/550) in 23.9s
    Finalizing page optimization ...
  ✓ Built successfully
  ```

---

## 9. Final SEO Assessment & Classification

| URL Pattern | GSC Category | Classification | Recommended Action |
| --- | --- | --- | --- |
| `https://saudiprivatetransfers.com/` | Indexing | **Indexable Primary** | Maintain as canonical homepage. |
| `https://saudiprivatetransfers.com/index` | Alternative page | **Correctly Redirected** | HTTP 308 Permanent Redirect to `/`. No further action required. |
| `/blog?category=...` | Alternative page | **Correctly Canonicalized** | Keep 200 OK for UX + canonical to `/blog`. Do NOT force indexing. |
| `http://saudiprivatetransfers.com/` | Page with redirect | **Correctly Redirected** | Protocol redirect to HTTPS. No further action required. |
| `https://www.saudiprivatetransfers.com/` | Page with redirect | **Correctly Redirected** | Host redirect to non-www. No further action required. |
| `http://www.saudiprivatetransfers.com/` | Page with redirect | **Correctly Redirected** | Protocol/Host redirect to apex HTTPS. No further action required. |
