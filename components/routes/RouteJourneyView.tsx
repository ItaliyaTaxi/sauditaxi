import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { RouteJourneyBody } from "@/components/routes/RouteJourneyBlocks";
import type { RouteBlock } from "@/data/routes";
import type { Faq } from "@/data/faqs";

/**
 * New-brand shell for the Phase 3 domestic city-to-city route redesign.
 * Distinct from the hub-page shells (City/Airport/Border) — this one keeps
 * an inline booking form beside the content, since a route page is the
 * site's highest-commercial-intent page type, not a discovery page. Body
 * content is a composed `RouteBlock[]` (see lib/route-composer.ts), so the
 * section order and mix genuinely differs per journey type instead of one
 * fixed template repeated across the batch. Airport/border/international
 * routes keep the pre-existing page (app/(main)/routes/[slug]/page.tsx
 * only calls this component for the domestic city-to-city batch).
 */

export interface RouteJourneyFact {
  label: string;
  value: string;
}

export interface RouteJourneyLinkItem {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface RouteJourneyViewProps {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  facts: RouteJourneyFact[];
  from: string;
  to: string;
  blocks: RouteBlock[];
  pickupHeading: string;
  pickupPoints: string[];
  dropoffHeading: string;
  dropoffPoints: string[];
  relatedRoutesHeading?: string;
  relatedRoutes: RouteJourneyLinkItem[];
  relatedCitiesHeading?: string;
  relatedCities: RouteJourneyLinkItem[];
  faqsHeading: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  formHeading: string;
  formSubheading: string;
  formSlot: ReactNode;
  crumbs: Crumb[];
}

export function RouteJourneyView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  facts,
  from,
  to,
  blocks,
  pickupHeading,
  pickupPoints,
  dropoffHeading,
  dropoffPoints,
  relatedRoutesHeading,
  relatedRoutes,
  relatedCitiesHeading,
  relatedCities,
  faqsHeading,
  faqs,
  ctaHeading,
  ctaText,
  ctaLabel,
  ctaHref,
  formHeading,
  formSubheading,
  formSlot,
  crumbs,
}: RouteJourneyViewProps) {
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

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RouteJourneyBody blocks={blocks} from={from} to={to} />

              {(pickupPoints.length > 0 || dropoffPoints.length > 0) && (
                <div className="mt-10 grid gap-6 border-t border-hairline pt-10 sm:grid-cols-2">
                  {pickupPoints.length > 0 && (
                    <div className="rounded-xl border border-hairline bg-sand/30 p-5">
                      <h3 className="font-semibold text-ink">{pickupHeading}</h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                        {pickupPoints.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <MapPin className="size-3.5 shrink-0 text-brass" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {dropoffPoints.length > 0 && (
                    <div className="rounded-xl border border-hairline bg-sand/30 p-5">
                      <h3 className="font-semibold text-ink">{dropoffHeading}</h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                        {dropoffPoints.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <MapPin className="size-3.5 shrink-0 text-brass" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-brass/30 bg-sand/20 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-ink">{formHeading}</h2>
                <p className="mt-1 text-sm text-ink-soft">{formSubheading}</p>
                <div className="mt-4">{formSlot}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedRoutes.length > 0 && (
        <section className="bg-sand/40 py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {relatedRoutesHeading && <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{relatedRoutesHeading}</h2>}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((r) => (
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

      {relatedCities.length > 0 && (
        <section className="border-t border-hairline bg-white py-10">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-8">
            {relatedCitiesHeading && <p className="text-sm font-semibold text-ink">{relatedCitiesHeading}</p>}
            <div className="flex flex-wrap gap-2.5">
              {relatedCities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-lg border border-hairline bg-sand/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
                >
                  {c.label}
                </Link>
              ))}
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
