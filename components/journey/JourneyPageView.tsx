import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Clock,
  Plane,
  ShieldAlert,
  Route as RouteIcon,
  CheckCircle2,
  ExternalLink,
  Car,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";

/**
 * A deliberately distinct visual design for a small batch of "rich journey"
 * distance pages — see data/journey-pages.ts. Built as a fully self-contained
 * view (its own hero, no PageHeader reuse) so the existing distance-page
 * design (app/(main)/distance/[slug]/page.tsx's default render path,
 * data/distance-pages.ts) stays completely untouched for every other
 * distance page on the site. Shared between the English route
 * (app/(main)/distance/[slug]/page.tsx) and the Arabic route
 * (app/ar/[...slug]/page.tsx) — all directional markup uses rtl: variants so
 * it mirrors correctly under the site's existing dir="rtl" Arabic layout.
 */

export interface JourneyFact {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface JourneyTimelineStep {
  label: string;
  detail: string;
}

export interface JourneyFaq {
  question: string;
  answer: string;
}

export interface JourneyLink {
  label: string;
  href: string;
}

export interface JourneyContent {
  heroTag: string;
  heroAnswer: string;
  heroDistance: string;
  heroDuration: string;
  /** Optional real photography behind the hero (licensed, locally hosted —
   * see public/images/journey/). Falls back to the plain navy gradient when
   * omitted. */
  heroImage?: string;
  heroImageAlt?: string;
  facts: JourneyFact[];
  mapOrigin: string;
  mapDestination: string;
  mapNote: string;
  distanceExplanation: string[];
  timeline: JourneyTimelineStep[];
  timelineNote: string;
  routeStory: { heading: string; paragraphs: string[] };
  borderContext?: { heading: string; paragraphs: string[] };
  planning: { heading: string; items: string[] };
  travelOptions: { mode: string; detail: string }[];
  travelOptionsNote?: string;
  ctaRoutePath: string;
  ctaLabel: string;
  faqs: JourneyFaq[];
  relatedJourneys: JourneyLink[];
  sources: JourneyLink[];
  conclusion: string;
  lastVerified: string;
}

interface JourneyPageViewProps extends JourneyContent {
  h1: string;
  from: string;
  to: string;
  crumbs: Crumb[];
  labels: {
    home: string;
    quickAnswer: string;
    journeyAtAGlance: string;
    routeMap: string;
    mapCaption: string;
    distanceExplained: string;
    howLong: string;
    understandingRoute: string;
    borderCrossing: string;
    planYourJourney: string;
    waysToTravel: string;
    ctaPrompt: string;
    faqHeading: string;
    relatedJourneys: string;
    sources: string;
    sourceFootnote: string;
    conclusion: string;
  };
}

export function JourneyPageView({
  h1,
  from,
  to,
  crumbs,
  heroTag,
  heroAnswer,
  heroDistance,
  heroDuration,
  heroImage,
  heroImageAlt,
  facts,
  mapOrigin,
  mapDestination,
  mapNote,
  distanceExplanation,
  timeline,
  timelineNote,
  routeStory,
  borderContext,
  planning,
  travelOptions,
  travelOptionsNote,
  ctaRoutePath,
  ctaLabel,
  faqs,
  relatedJourneys,
  sources,
  conclusion,
  lastVerified,
  labels,
}: JourneyPageViewProps) {
  return (
    <>
      {/* ── Section 1: Route hero — data-focused, not a marketing hero ── */}
      <section className="relative overflow-hidden bg-navy text-white">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={heroImageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-40"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy"
              aria-hidden="true"
            />
          </>
        )}
        <div
          className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-gold/5 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />

          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
            <RouteIcon className="size-3.5" />
            {heroTag}
          </span>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {h1}
          </h1>

          {/* Origin → destination visual indicator */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <span className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-lg font-bold">
              {from}
            </span>
            <ArrowDown className="size-6 text-gold sm:hidden" aria-hidden="true" />
            <ArrowRight className="hidden size-6 shrink-0 text-gold sm:block rtl:rotate-180" aria-hidden="true" />
            <span className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-lg font-bold">
              {to}
            </span>
          </div>

          {/* Direct-answer panel */}
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gold/25 bg-white/[0.04] p-5 text-center backdrop-blur-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">{labels.quickAnswer}</p>
            <p className="mt-2 text-base text-white/90 sm:text-lg">{heroAnswer}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-5 text-gold" />
                <span className="text-xl font-bold">{heroDistance}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-5 text-gold" />
                <span className="text-xl font-bold">{heroDuration}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ── Section 2: Journey at a glance ── */}
        <section className="py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.journeyAtAGlance}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className={
                  fact.emphasis
                    ? "rounded-2xl border border-gold/40 bg-gold/[0.06] p-5 shadow-sm"
                    : "rounded-2xl border border-border bg-white p-5"
                }
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {fact.label}
                </p>
                <p className={fact.emphasis ? "mt-1.5 text-lg font-bold text-navy" : "mt-1.5 text-base font-semibold text-navy"}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Visual route map ── */}
        <section className="pb-14 sm:pb-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.routeMap}</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
              <iframe
                title={`${from} to ${to} route map`}
                src={`https://maps.google.com/maps?saddr=${encodeURIComponent(mapOrigin)}&daddr=${encodeURIComponent(mapDestination)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{mapNote}</p>
          <p className="mt-1 text-xs text-muted-foreground">{labels.mapCaption}</p>
        </section>

        {/* ── Section 4: The distance explained ── */}
        <section className="border-t border-border py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.distanceExplained}</h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {distanceExplanation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* ── Section 5: How long does the journey take? — vertical timeline ── */}
        <section className="border-t border-border py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.howLong}</h2>
          <ol className="mt-8 space-y-0">
            {timeline.map((step, i) => (
              <li key={step.label} className="relative ps-10 pb-8 last:pb-0">
                {i !== timeline.length - 1 && (
                  <span
                    className="absolute top-8 bottom-0 start-[15px] w-px bg-border"
                    aria-hidden="true"
                  />
                )}
                <span className="absolute start-0 top-0 flex size-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                  {i + 1}
                </span>
                <p className="font-semibold text-navy">{step.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-sm text-muted-foreground">{timelineNote}</p>
        </section>

        {/* ── Section 6: Understanding the route (editorial story) ── */}
        <section className="border-t border-border py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{routeStory.heading}</h2>
          <div className="mt-5 max-w-3xl space-y-4 border-s-4 border-gold/40 ps-5 text-[15px] leading-relaxed text-muted-foreground">
            {routeStory.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* ── Section 7: Border crossing context (conditional) ── */}
        {borderContext && (
          <section className="border-t border-border py-14 sm:py-16">
            <div className="rounded-2xl border border-navy/15 bg-navy/[0.03] p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy">
                <ShieldAlert className="size-4 text-gold" />
                {labels.borderCrossing}
              </span>
              <h3 className="mt-3 text-xl font-bold text-navy">{borderContext.heading}</h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                {borderContext.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Section 8: Plan your journey ── */}
        <section className="border-t border-border py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.planYourJourney}</h2>
          <h3 className="mt-2 text-base font-semibold text-navy">{planning.heading}</h3>
          <ul className="mt-4 space-y-3">
            {planning.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                <span className="text-[15px] text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Section 9: Ways to make the journey ── */}
        <section className="border-t border-border py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.waysToTravel}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {travelOptions.map((opt) => (
              <div key={opt.mode} className="rounded-2xl border border-border bg-white p-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-navy text-gold">
                  <Car className="size-4" />
                </span>
                <h3 className="mt-3 font-semibold text-navy">{opt.mode}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{opt.detail}</p>
              </div>
            ))}
          </div>
          {travelOptionsNote && (
            <p className="mt-4 text-sm text-muted-foreground">{travelOptionsNote}</p>
          )}
          <p className="mt-6 text-sm text-navy">
            {labels.ctaPrompt}{" "}
            <Link
              href={ctaRoutePath}
              className="font-semibold text-navy underline underline-offset-2 hover:text-gold"
            >
              {ctaLabel}
            </Link>
          </p>
        </section>
      </div>

      {/* ── Section 10: FAQs ── */}
      <FAQSection faqs={faqs} heading={labels.faqHeading} background="muted" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Conclusion */}
        <section className="border-t border-border py-14 sm:py-16">
          <h2 className="text-lg font-bold text-navy">{labels.conclusion}</h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{conclusion}</p>
        </section>

        {/* ── Section 11: Related journeys — card grid, not pill links ── */}
        {relatedJourneys.length > 0 && (
          <section className="border-t border-border py-14 sm:py-16">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">{labels.relatedJourneys}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedJourneys.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-white p-4 transition-colors hover:border-gold"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-navy">
                    <Plane className="size-4 text-gold" aria-hidden="true" />
                    {link.label}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        <section className="border-t border-border py-10">
          <h2 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{labels.sources}</h2>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            {sources.map((s) => (
              <li key={s.href} className="flex items-start gap-1.5">
                <ExternalLink className="mt-0.5 size-3 shrink-0" />
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline decoration-dotted hover:text-navy"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            {labels.sourceFootnote} {lastVerified}.
          </p>
        </section>
      </div>
    </>
  );
}
