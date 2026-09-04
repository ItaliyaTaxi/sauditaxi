import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Milestone } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Faq } from "@/data/faqs";

/**
 * Dedicated /border-transfers/{border} layout — "crossing logistics"
 * editorial identity, the most specialized of the three hub types. Built
 * around an origin-to-onward-destination journey visual and an explicit
 * "what we handle vs what border authorities control" split, so the page
 * never reads as a generic city/airport template with a border name
 * swapped in. Content is driven by the existing, already-unique
 * per-crossing data in data/borders.ts (+ data/border-guides.ts) and
 * data/routes.ts. No Arabic border pages exist yet, so this component is
 * English-only for now.
 */

export interface BorderHubFact {
  label: string;
  value: string;
}

export interface BorderHubStep {
  label: string;
  detail?: string;
}

export interface BorderHubRouteCard {
  label: string;
  distance?: string;
  duration?: string;
  href: string;
}

export interface BorderHubLinkItem {
  label: string;
  href: string;
}

export interface BorderHubGuideSection {
  heading: string;
  paragraphs: string[];
}

export interface BorderHubContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  facts: BorderHubFact[];
  journeyHeading: string;
  journeySteps: BorderHubStep[];
  responsibilityHeading: string;
  weHandleHeading: string;
  weHandleItems: string[];
  authorityHeading: string;
  authorityItems: string[];
  responsibilityNote?: string;
  notesHeading: string;
  notes: string[];
  pickupCitiesHeading: string;
  pickupCities: BorderHubLinkItem[];
  routesHeading?: string;
  routesIntro?: string;
  routes?: BorderHubRouteCard[];
  guideSections?: BorderHubGuideSection[];
  otherBordersHeading?: string;
  otherBorders?: BorderHubLinkItem[];
  faqsHeading: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
}

interface BorderHubViewProps extends BorderHubContent {
  crumbs: Crumb[];
}

export function BorderHubView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  facts,
  journeyHeading,
  journeySteps,
  responsibilityHeading,
  weHandleHeading,
  weHandleItems,
  authorityHeading,
  authorityItems,
  responsibilityNote,
  notesHeading,
  notes,
  pickupCitiesHeading,
  pickupCities,
  routesHeading,
  routesIntro,
  routes,
  guideSections,
  otherBordersHeading,
  otherBorders,
  faqsHeading,
  faqs,
  ctaHeading,
  ctaText,
  ctaLabel,
  ctaHref,
  crumbs,
}: BorderHubViewProps) {
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

      {/* Origin -> road journey -> crossing -> onward destination — the defining visual for this page type. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{journeyHeading}</h2>
          <ol className="mt-7 flex min-w-max items-stretch gap-2 overflow-x-auto pb-2 sm:min-w-0 sm:flex-wrap">
            {journeySteps.map((step, i) => (
              <li key={step.label} className="flex items-center gap-2">
                <div className="w-44 rounded-xl border border-hairline bg-sand/40 px-4 py-3.5 sm:w-48">
                  <p className="text-xs font-semibold text-ink">{step.label}</p>
                  {step.detail && <p className="mt-1 text-[11px] leading-snug text-ink-soft">{step.detail}</p>}
                </div>
                {i < journeySteps.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-brass rtl:rotate-180" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Responsibility split — explicit, to avoid implying control over immigration/border authority matters. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{responsibilityHeading}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brass">{weHandleHeading}</p>
                <ul className="mt-3 space-y-2">
                  {weHandleItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{authorityHeading}</p>
                <ul className="mt-3 space-y-2">
                  {authorityItems.map((item) => (
                    <li key={item} className="text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {responsibilityNote && <p className="mt-6 text-xs text-ink-muted">{responsibilityNote}</p>}
          </div>
        </div>
      </section>

      {/* Practical notes + pickup cities, side by side. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-lg font-bold text-ink">{notesHeading}</h2>
              <ul className="mt-4 space-y-2.5">
                {notes.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-ink">
                    <Milestone className="mt-0.5 size-4 shrink-0 text-brass" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-ink">{pickupCitiesHeading}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {pickupCities.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="rounded-lg border border-hairline bg-sand/30 px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-border route pages. */}
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

      {guideSections && guideSections.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[820px] space-y-10 px-4 sm:px-6 lg:px-8">
            {guideSections.map((s) => (
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
        </section>
      )}

      {otherBorders && otherBorders.length > 0 && (
        <section className="border-t border-hairline bg-sand/40 py-10">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-8">
            {otherBordersHeading && <p className="text-sm font-semibold text-ink">{otherBordersHeading}</p>}
            <div className="flex flex-wrap gap-2.5">
              {otherBorders.map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
                >
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} heading={faqsHeading} background="white" />

      <section className="border-t border-hairline bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-hairline bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
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
