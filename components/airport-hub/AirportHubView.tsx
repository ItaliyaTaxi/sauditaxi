import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";

/**
 * Dedicated /airport-transfer/{airport} layout — "arrival journey planning"
 * editorial identity, built around a connected pickup-flow visual rather
 * than City Hub's sidebar-facts layout or Border Hub's crossing/logistics
 * layout. Content is driven by the existing, already-unique per-airport
 * data in data/airports.ts (+ data/airport-guides.ts) and data/routes.ts.
 * Also reused for the small set of existing Arabic airport pages (type:
 * "airport" in data/translations/ar.ts) via a leaner adapter.
 */

export interface AirportHubFact {
  label: string;
  value: string;
}

export interface AirportHubStep {
  label: string;
  detail?: string;
}

export interface AirportHubRouteCard {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface AirportHubLinkItem {
  label: string;
  href: string;
}

export interface AirportHubGuideSection {
  heading: string;
  paragraphs: string[];
}

export interface AirportHubContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  facts: AirportHubFact[];
  journeyHeading: string;
  journeySteps: AirportHubStep[];
  terminalsHeading?: string;
  terminals?: string[];
  routesHeading?: string;
  routesIntro?: string;
  routes?: AirportHubRouteCard[];
  destinationsHeading?: string;
  destinations?: AirportHubLinkItem[];
  cityCard?: { heading: string; text: string; linkLabel: string; href: string; hotelsLabel?: string; hotelsHref?: string };
  guideSections?: AirportHubGuideSection[];
  hotelsHeading?: string;
  hotels?: string[];
  faqsHeading: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
}

interface AirportHubViewProps extends AirportHubContent {
  crumbs: Crumb[];
}

export function AirportHubView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  facts,
  journeyHeading,
  journeySteps,
  terminalsHeading,
  terminals,
  routesHeading,
  routesIntro,
  routes,
  destinationsHeading,
  destinations,
  cityCard,
  guideSections,
  hotelsHeading,
  hotels,
  faqsHeading,
  faqs,
  ctaHeading,
  ctaText,
  ctaLabel,
  ctaHref,
  crumbs,
}: AirportHubViewProps) {
  return (
    <>
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

      {/* Arrival journey flow — the defining visual module for this page type. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{journeyHeading}</h2>
          <ol className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {journeySteps.map((step, i) => (
              <li key={step.label} className="relative flex gap-3 pb-6 lg:flex-col lg:gap-0 lg:pb-0 lg:pe-6">
                <div className="flex flex-col items-center lg:flex-row">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight text-sm font-bold text-brass">
                    {i + 1}
                  </span>
                  {i < journeySteps.length - 1 && (
                    <span
                      className="mt-1 w-px flex-1 bg-hairline lg:mt-0 lg:ms-2 lg:h-px lg:w-full lg:flex-none"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="lg:mt-4">
                  <p className="font-semibold text-ink">{step.label}</p>
                  {step.detail && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.detail}</p>}
                </div>
              </li>
            ))}
          </ol>

          {terminals && terminals.length > 0 && (
            <div className="mt-10 border-t border-hairline pt-8">
              {terminalsHeading && <h3 className="text-sm font-bold uppercase tracking-wide text-ink-muted">{terminalsHeading}</h3>}
              <div className="mt-3 flex flex-wrap gap-2">
                {terminals.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-sand/30 px-3.5 py-1.5 text-sm text-ink-soft"
                  >
                    <Plane className="size-3.5 text-brass" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Where you can go from here — real route pages. */}
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
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {r.label}
                    <ArrowRight className="size-3.5 shrink-0 text-brass rtl:rotate-180" />
                  </span>
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

      {/* City + guide content, side by side — airport-specific long-form context where it exists. */}
      {(guideSections?.length || cityCard || (hotels && hotels.length > 0)) && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
              <div className="space-y-10">
                {guideSections?.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-midnight [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brass">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <aside className="space-y-4">
                {cityCard && (
                  <div className="rounded-2xl border border-hairline bg-sand/30 p-5">
                    <p className="text-sm font-semibold text-ink">{cityCard.heading}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{cityCard.text}</p>
                    <Link
                      href={cityCard.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                    >
                      {cityCard.linkLabel}
                      <ArrowRight className="size-4 rtl:rotate-180" />
                    </Link>
                    {cityCard.hotelsHref && cityCard.hotelsLabel && (
                      <Link
                        href={cityCard.hotelsHref}
                        className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                      >
                        {cityCard.hotelsLabel}
                        <ArrowRight className="size-4 rtl:rotate-180" />
                      </Link>
                    )}
                  </div>
                )}
                {hotels && hotels.length > 0 && (
                  <div className="rounded-2xl border border-hairline bg-white p-5">
                    {hotelsHeading && <p className="text-sm font-semibold text-ink">{hotelsHeading}</p>}
                    <ul className="mt-3 space-y-1.5">
                      {hotels.map((h) => (
                        <li key={h} className="text-sm text-ink-soft">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} heading={faqsHeading} background="muted" />

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
