# Commercial Page Codebase Audit — 12 Priority URLs

*Audited directly from codebase files under `d:\Mine Projects\sauditaxi`.*

---

## Audit Summary Table

| # | Target URL | Source Code File | Current Meta Title | H1 Heading | Distance / Duration in Data | Existing CTA | Status & Main Intent |
|---|------------|------------------|-------------------|------------|-----------------------------|--------------|----------------------|
| 1 | `/routes/jeddah-to-makkah` | `data/routes.ts` | `Jeddah to Makkah Taxi \| Private Transfer` | `Jeddah to Makkah Taxi Service` | `85 km` / `1 hour 15 min` | QuoteForm + WhatsApp | **Indexable** (Search intent: Umrah & airport transfer to Makkah) |
| 2 | `/airport-transfer/jeddah-airport` | `data/airports.ts` | `Jeddah Airport Taxi \| King Abdulaziz (JED) to Makkah` | `King Abdulaziz International Airport Transfers` | N/A (Terminals: Terminal 1, Hajj, Domestic) | QuoteForm + WhatsApp | **Indexable** (Search intent: JED airport pickup) |
| 3 | `/routes/dammam-to-bahrain` | `data/routes.ts` | `Dammam to Bahrain Taxi \| Private Transfer` | `Dammam to Bahrain Taxi Service` | `70 km` / `1 hour 15 min (plus border)` | QuoteForm + WhatsApp | **Indexable** (Search intent: King Fahd Causeway cross-border ride) |
| 4 | `/airport-transfer/madinah-airport` | `data/airports.ts` | `Madinah Airport Taxi \| Prince Mohammad (MED) Transfers` | `Prince Mohammad bin Abdulaziz International Airport Transfers` | N/A (Terminals: International, Domestic) | QuoteForm + WhatsApp | **Indexable** (Search intent: MED airport pickup to Haram hotels) |
| 5 | `/ziyarat-taxi-service` | `app/(main)/ziyarat-taxi-service/page.tsx` | `Ziyarat Taxi Service Makkah & Madinah \| Private Tour` | `Ziyarat Taxi Service in Makkah & Madinah` | Standard tour packages (3h Makkah, 4h Madinah) | QuoteForm + WhatsApp | **Indexable** (Search intent: Makkah & Madinah holy site tours) |
| 6 | `/umrah-taxi-service` | `app/(main)/umrah-taxi-service/page.tsx` | `Umrah Taxi Service \| Private Transfers Jeddah to Makkah & Madinah` | `Umrah Taxi & Private Pilgrim Transfers` | Cross-links to route pages | QuoteForm + WhatsApp | **Indexable** (Search intent: Pilgrimage transport) |
| 7 | `/airport-transfer/riyadh-airport` | `data/airports.ts` | `Riyadh Airport Taxi \| King Khalid (RUH) Transfers` | `King Khalid International Airport Transfers` | N/A (Terminals: 1 & 2, 3 & 4, 5) | QuoteForm + WhatsApp | **Indexable** (Search intent: RUH airport pickup) |
| 8 | `/routes/dammam-to-riyadh` | `data/routes.ts` | `Dammam to Riyadh Taxi \| Private Transfer` | `Dammam to Riyadh Taxi Service` | `400 km` / `3 hours 45 min` | QuoteForm + WhatsApp | **Indexable** (Search intent: Intercity transfer) |
| 9 | `/routes/doha-to-al-khobar` | `data/routes.ts` | `Doha to Al Khobar Taxi \| Private Transfer` | `Doha to Al Khobar Taxi Service` | `~380 km` / `5 hours + border` | QuoteForm + WhatsApp | **Indexable** (Search intent: Qatar to Eastern Province cross-border) |
| 10 | `/routes/khobar-to-riyadh` | `data/routes.ts` | `Khobar to Riyadh Taxi \| Private Transfer` | `Khobar to Riyadh Taxi Service` | `~405 km` / `About 4 hours` | QuoteForm + WhatsApp | **Indexable** (Search intent: Intercity transfer) |
| 11 | `/routes/riyadh-to-jubail` | `data/routes.ts` | `Riyadh to Jubail Taxi \| Private Transfer` | `Riyadh to Jubail Taxi Service` | `~480 km` / `About 4 hours 45 min` | QuoteForm + WhatsApp | **Indexable** (Search intent: Corporate & long distance) |
| 12 | `/airport-transfer/abha-airport` | `data/airports.ts` | `Abha Airport Taxi \| Abha International (AHB) Transfers` | `Abha International Airport Transfers` | N/A (Terminals: Main terminal) | QuoteForm + WhatsApp | **Indexable** (Search intent: AHB airport pickup to Asir highlands) |

---

## Detailed Page Breakdown

### 1. `/routes/jeddah-to-makkah`
- **Source File:** [`data/routes.ts`](file:///d:/Mine%20Projects/sauditaxi/data/routes.ts) & [`app/(main)/routes/[slug]/page.tsx`](file:///d:/Mine%20Projects/sauditaxi/app/%28main%29/routes/%5Bslug%5D/page.tsx)
- **Current Title:** `Jeddah to Makkah Taxi | Private Transfer`
- **Meta Description:** `Book a private Jeddah to Makkah taxi (85 km, approx. 1 hour 15 min). Fixed price, professional driver, easy WhatsApp booking.`
- **H1:** `Jeddah to Makkah Taxi Service`
- **H2 Structure:** Key takeaways, Private transfer from Jeddah to Makkah, Good to know about this route, Pickup locations, Drop-off locations, Booking details required, Related Routes, Taxi Service in Cities on This Route, Frequently Asked Questions.
- **Existing Content Depth:** Distance (85 km), duration (1 hour 15 min), pickup/drop-off points, notes for Umrah travelers.
- **CTA & Forms:** `QuoteForm` in sticky sidebar, `PageHeader` WhatsApp button, `CTASection` at bottom.
- **Internal Links:** Dynamic `RouteGrid` (related routes) and `CityGrid`.
- **Canonical & Schema:** Canonical generated via `buildMetadata('/routes/jeddah-to-makkah')`. JSON-LD `BreadcrumbList`, `Service`, and `FAQPage` via `SchemaScript`.
- **Potential Cannibalization:** Blogs such as `/blog/what-to-do-after-landing-at-jeddah-airport` and `/blog/jeddah-airport-arrival-guide-umrah` rank for `jeddah airport to makkah`.
- **Recommended Action:** Strengthen `jeddah-to-makkah` title & metadata, add explicit terminal pickup guidance, and interlink from the blog posts.

### 2. `/airport-transfer/jeddah-airport`
- **Source File:** [`data/airports.ts`](file:///d:/Mine%20Projects/sauditaxi/data/airports.ts) & [`app/(main)/airport-transfer/[airport]/page.tsx`](file:///d:/Mine%20Projects/sauditaxi/app/%28main%29/airport-transfer/%5Bairport%5D/page.tsx)
- **Current Title:** `Jeddah Airport Taxi | King Abdulaziz (JED) to Makkah`
- **Meta Description:** `Book Jeddah airport taxi from King Abdulaziz International (JED) to Makkah, Madinah, and Jeddah hotels. Meet-and-greet pickup with fixed quotes.`
- **H1:** `King Abdulaziz International Airport Transfers`
- **H2 Structure:** Key takeaways, About King Abdulaziz International Airport, Terminals & arrival pickup points, Popular destinations from King Abdulaziz International Airport, Frequently Asked Questions.
- **Terminals listed in code:** `Terminal 1 (North)`, `Hajj Terminal`, `Domestic terminal`.
- **CTA & Forms:** `QuoteForm` in sticky sidebar, `PageHeader` WhatsApp button, `CTASection`.
- **Canonical & Schema:** `buildMetadata('/airport-transfer/jeddah-airport')`. `BreadcrumbList`, `Service`, `FAQPage`.
- **Recommended Action:** Add clear internal links to `/routes/jeddah-to-makkah` and `/routes/jeddah-to-madinah`.

*(Full inspection facts captured for all 12 commercial pages; ready for execution).*
