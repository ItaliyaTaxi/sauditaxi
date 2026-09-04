import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Plane } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";

/**
 * Dedicated /taxi-service/{city} layout — "destination transportation
 * guide" editorial identity, distinct from AirportHubView's journey-flow
 * layout and BorderHubView's crossing/logistics layout. Content is driven
 * by the existing, already-unique per-city data in data/cities.ts (+
 * data/city-guides.ts) and data/routes.ts — this component only handles
 * presentation and information architecture, not content authoring. Also
 * reused for the small set of existing Arabic city pages (type: "city" in
 * data/translations/ar.ts) via a leaner adapter that omits fields the
 * Arabic data doesn't carry (see app/ar/[...slug]/page.tsx).
 */

export interface CityHubFact {
  label: string;
  value: string;
}

export interface CityHubRouteCard {
  from: string;
  to: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface CityHubLinkItem {
  label: string;
  href: string;
}

export interface CityHubContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  facts: CityHubFact[];
  aboutHeading?: string;
  aboutParagraphs?: string[];
  highlightsHeading?: string;
  highlights?: string[];
  /** Additional named sections (heading + paragraphs) rendered below the
   * about/highlights block — used by the leaner Arabic city adapter, which
   * carries its content as generic sections rather than the richer English
   * City record's discrete fields. */
  extraSections?: { heading: string; paragraphs: string[] }[];
  routesHeading?: string;
  routesIntro?: string;
  routes?: CityHubRouteCard[];
  destinationsHeading?: string;
  destinations?: CityHubLinkItem[];
  airportCard?: { heading: string; text: string; linkLabel: string; href: string };
  hotelsCard?: { heading: string; text: string; linkLabel: string; href: string };
  landmarksHeading?: string;
  landmarks?: string[];
  nearbyCitiesHeading?: string;
  nearbyCities?: CityHubLinkItem[];
  servicesHeading?: string;
  services?: CityHubLinkItem[];
  faqsHeading: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
}

interface CityHubViewProps extends CityHubContent {
  crumbs: Crumb[];
}

export function CityHubView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  facts,
  aboutHeading,
  aboutParagraphs,
  highlightsHeading,
  highlights,
  extraSections,
  routesHeading,
  routesIntro,
  routes,
  destinationsHeading,
  destinations,
  airportCard,
  hotelsCard,
  landmarksHeading,
  landmarks,
  nearbyCitiesHeading,
  nearbyCities,
  servicesHeading,
  services,
  faqsHeading,
  faqs,
  ctaHeading,
  ctaText,
  ctaLabel,
  ctaHref,
  crumbs,
}: CityHubViewProps) {
  return (
    <>
      {/* Hero with an inline facts strip — establishes the entity/location signals immediately. */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-midnight/60" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/70 to-midnight/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/85">{dek}</p>
        </div>
        {facts.length > 0 && (
          <div className="relative border-t border-white/10 bg-midnight/40 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1200px] flex-wrap divide-x divide-white/10 px-4 sm:px-6 lg:px-8 rtl:divide-x-reverse">
              {facts.map((f) => (
                <div key={f.label} className="min-w-[9rem] flex-1 py-4 pe-4">
                  <p className="text-sm font-semibold text-white">{f.value}</p>
                  <p className="mt-0.5 text-xs text-white/60">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* About — prose with a companion facts/quick-links sidebar (distinct from Airport's timeline-first layout). */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
            <div>
              {aboutHeading && aboutParagraphs && aboutParagraphs.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{aboutHeading}</h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                    {aboutParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {highlights && highlights.length > 0 && (
                <div className="mt-9">
                  {highlightsHeading && <h2 className="text-lg font-bold text-ink">{highlightsHeading}</h2>}
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {extraSections && extraSections.length > 0 && (
                <div className="mt-9 space-y-8">
                  {extraSections.map((s) => (
                    <div key={s.heading}>
                      <h2 className="text-lg font-bold text-ink">{s.heading}</h2>
                      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                        {s.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-4">
              {airportCard && (
                <div className="rounded-2xl border border-hairline bg-sand/30 p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-midnight text-brass">
                    <Plane className="size-4" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{airportCard.heading}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{airportCard.text}</p>
                  <Link
                    href={airportCard.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                  >
                    {airportCard.linkLabel}
                    <ArrowRight className="size-4 rtl:rotate-180" />
                  </Link>
                </div>
              )}
              {hotelsCard && (
                <div className="rounded-2xl border border-hairline bg-white p-5">
                  <p className="text-sm font-semibold text-ink">{hotelsCard.heading}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{hotelsCard.text}</p>
                  <Link
                    href={hotelsCard.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                  >
                    {hotelsCard.linkLabel}
                    <ArrowRight className="size-4 rtl:rotate-180" />
                  </Link>
                </div>
              )}
              {services && services.length > 0 && (
                <div className="rounded-2xl border border-hairline bg-white p-5">
                  {servicesHeading && <p className="text-sm font-semibold text-ink">{servicesHeading}</p>}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="rounded-lg border border-hairline bg-white px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-brass"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Popular journeys from this city — real route pages, not a generic list. */}
      {routes && routes.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {routesHeading && <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{routesHeading}</h2>}
            {routesIntro && <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{routesIntro}</p>}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex flex-col justify-between rounded-2xl border border-hairline bg-white p-5 transition-colors hover:border-brass"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <span>{r.from}</span>
                    <ArrowRight className="size-3.5 shrink-0 text-brass rtl:rotate-180" />
                    <span>{r.to}</span>
                  </div>
                  {(r.distance || r.duration) && (
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-muted">
                      {[r.distance, r.duration].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {(!routes || routes.length === 0) && destinations && destinations.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {destinationsHeading && <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{destinationsHeading}</h2>}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {destinations.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Landmarks + nearby cities — grounds the page in real, specific places. */}
      {((landmarks && landmarks.length > 0) || (nearbyCities && nearbyCities.length > 0)) && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {landmarks && landmarks.length > 0 && (
                <div>
                  {landmarksHeading && <h2 className="text-lg font-bold text-ink">{landmarksHeading}</h2>}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {landmarks.map((l) => (
                      <span
                        key={l}
                        className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-sand/30 px-3.5 py-1.5 text-sm text-ink-soft"
                      >
                        <MapPin className="size-3.5 text-brass" />
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {nearbyCities && nearbyCities.length > 0 && (
                <div>
                  {nearbyCitiesHeading && <h2 className="text-lg font-bold text-ink">{nearbyCitiesHeading}</h2>}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {nearbyCities.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="rounded-lg border border-hairline bg-white px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} heading={faqsHeading} background="muted" />

      {/* Compact contextual CTA — not a giant banner. */}
      <section className="border-t border-hairline bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-hairline bg-sand/30 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-ink">{ctaHeading}</h2>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-soft">{ctaText}</p>
            </div>
            <Link
              href={ctaHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-midnight px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-midnight-soft"
            >
              {ctaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
