# Hotel-Transfer Page Similarity — follow-up to DUPLICATION_AUDIT.md

Diagnostic only, read-only. Same repo state (HEAD `54ed92b`), same fresh local production build, same extraction method as `DUPLICATION_AUDIT.md` Section 3: rendered HTML → `<main>` isolated → script/style/svg stripped → tags stripped → entities decoded → lowercase/whitespace-collapsed/punctuation-stripped. `app/(main)/[city]/[route]/page.tsx` (the hotel-transfer template) contains no `<aside>`, so nothing additional was excluded.

## Correction to the original audit

The original report's Section 1 said "175 hotel-transfer pages," derived from `236 city-subpage sitemap entries − 61 known point-transfer slugs = 175`. Building the actual page → hotel mapping for this follow-up surfaced that one of those 175 URLs, `/services/hotel-transfers`, is not a hotel-transfer page at all — it's the static services-overview page from `data/services.ts`, which happens to also have a 2-path-segment URL and was mis-bucketed by the categorization script used for the original count. **The true hotel-transfer page count is 174** — exactly `87 hotels × 2 directions`, with no hotel excluded. All numbers below use the corrected 174-page set. `duplication-audit/hotel_transfer_variation_mapping.csv` is the page → hotel → angle mapping used throughout.

## Similarity measurement (174 pages, 15,051 pairs, full pairwise — no sampling)

| Metric | Value |
|---|--:|
| Mean pairwise similarity | 32.68% |
| Median pairwise similarity | 24.48% |
| 90th-percentile pairwise similarity | 76.19% |

Bucket distribution (count of page **pairs**):

| Bucket | Pairs |
|---|--:|
| <30% | 11,689 |
| 30–50% | 231 |
| 50–70% | 766 |
| 70–90% | 2,296 |
| >90% | 69 |

For comparison, the route-page corpus (194 pages, Section 3 of the main audit) had 1 pair in 70–90% and 0 pairs above 90%. This corpus has 2,365 pairs at 70% or higher (15.7% of all pairs) — a materially fatter high-similarity tail than route pages, driven by same-city / same-angle hotel clusters (see below).

- **Boilerplate ratio** (mean % of a page's body text found verbatim, as a whole normalized block, on ≥10 other hotel-transfer pages): **83.0%**. The largest identical blocks (present on all 174/174 pages) are the same shared UI chrome found in the route-page corpus — "Get a Quote Contact Us", the passenger/luggage/vehicle-type form fields, and the entire "Choose Your Vehicle" 6-vehicle catalogue. Full per-page ratios: `duplication-audit/per_page_metrics_hoteltransfer.csv`.
- **Unique word count** (distinct vocabulary words on a page that appear on no other hotel-transfer page): min 0, 25th pct 0, median 0, 75th pct 0, max 7, **mean 0.075**. This is far lower than the route-page corpus (mean 2.81) or blog corpus (mean 25.6) — essentially no hotel-transfer page has any word that isn't also present on at least one other hotel-transfer page.

Full pairwise list: `duplication-audit/pairwise_similarity_hoteltransfer.csv` (15,051 rows).

## Within-angle-group mean pairwise similarity

Each of the 87 hotels is assigned one of 5 content angles by `hotelVariation()` (`lib/hotel-transfers.ts`); both of that hotel's pages (airport→hotel, hotel→airport) inherit the same angle. Grouping the 15,051 pairs by whether both pages share an angle:

| Angle | Hotels (pages) | Pairs within group | Mean similarity within group | Median within group |
|---|--:|--:|--:|--:|
| pilgrim | 30 (60) | 1,770 | 52.70% | 62.06% |
| airport | 1 (2) | 1 | 76.49% | 76.49% |
| location | 12 (24) | 276 | 47.26% | 20.16% |
| luxury | 13 (26) | 325 | 43.30% | 25.20% |
| family | 31 (62) | 1,891 | 41.49% | 25.51% |
| *(cross-group, different angles)* | — | 10,788 | 27.15% | — |

Every within-angle group has a higher mean similarity than the cross-group baseline (27.15%). The "pilgrim" group (Makkah/Madinah hotels, 60 pages) is both the largest group and the most similar — mean 52.70%, median 62.06%, meaning most pilgrim-angle page pairs are *more* similar to each other than the median for the entire corpus. The "airport" group has only 1 hotel (2 pages, 1 pair) — reported for completeness, not a statistically meaningful group.

## Side-by-side sample: 3 pages sharing the same angle

Selected from the 60-page "pilgrim" group as the triplet with the highest mutual similarity: `/makkah/king-abdulaziz-airport-to-jabal-omar-marriott-makkah`, `/makkah/king-abdulaziz-airport-to-voco-makkah`, `/makkah/king-abdulaziz-airport-to-rove-makkah` — pairwise similarities 91.13% / 90.91% / 91.53% (average 91.19%), word counts 2,331 / 2,274 / 2,274.

**Full verbatim text of all three pages, complete and untruncated, plus a line-by-line breakdown of what differs, is in `duplication-audit/hotel_transfer_sample_pages_full.md`.**

In summary: the only text that changes between these three pages is the hotel name (mechanically substituted everywhere), one sentence (the hotel's `blurb`), and the star rating. Every other block — the 5-item "What's included" list, the full booking form, the 6-vehicle catalogue, the "How Booking Works" steps, all 6 "Nearby Hotel Transfers" cards, all 7 "Related Transfer Routes" cards, all 20 "Popular Destinations from Makkah" cards, 6 of 9 FAQ pairs, and the "Latest Travel & Pilgrim Guides" block — is byte-identical across all three pages.

*Read and measure only. Nothing was changed.*
