import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Hotel,
  Landmark,
  Milestone,
  MoonStar,
  Plane,
  Route as RouteIcon,
  Tent,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/**
 * Dedicated /services layout — a discovery hub, not a card grid. Distinct
 * from Contact (conversational), Get Quote (form-first) and the 8
 * individual service pages (each an editorial detail page in its own
 * right). This page's job is routing intent to the correct service, so it
 * stays intentionally light on per-service detail and heavy on "which one
 * is mine". Reused for the Arabic page (type: "servicesV2" in
 * data/translations/ar.ts) with the same shape and Arabic strings/hrefs.
 */

export type HubIconKey =
  | "airport"
  | "city"
  | "hotel"
  | "intercity"
  | "border"
  | "umrah"
  | "hajj"
  | "ziyarat";

const HUB_ICONS: Record<HubIconKey, LucideIcon> = {
  airport: Plane,
  city: Building2,
  hotel: Hotel,
  intercity: RouteIcon,
  border: Milestone,
  umrah: MoonStar,
  hajj: Tent,
  ziyarat: Landmark,
};

export interface HubService {
  icon: HubIconKey;
  scenario: string;
  name: string;
  tagline: string;
  href: string;
}

export interface HubImageService extends HubService {
  image: string;
  alt: string;
}

export interface ServicesHubContent {
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;

  everydayHeading: string;
  everydayIntro: string;
  everydayServices: HubService[];

  longDistanceHeading: string;
  longDistanceIntro: string;
  longDistanceServices: HubImageService[];

  pilgrimageHeading: string;
  pilgrimageIntro: string;
  pilgrimageServices: HubService[];

  journeyHeading: string;
  journeyIntro: string;
  journeyExamples: { scenario: string; serviceLabel: string; serviceHref: string }[];

  closingHeading: string;
  closingText: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

interface ServicesHubViewProps extends ServicesHubContent {
  crumbs: Crumb[];
}

function ServiceCard({ service }: { service: HubService }) {
  const Icon = HUB_ICONS[service.icon];
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col rounded-2xl border border-hairline bg-white p-6 transition-colors hover:border-brass"
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-midnight text-brass transition-colors group-hover:bg-brass group-hover:text-midnight">
        <Icon className="size-5" />
      </span>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-muted">{service.scenario}</p>
      <p className="mt-1.5 text-lg font-semibold text-ink">{service.name}</p>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{service.tagline}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight group-hover:text-brass">
        {service.name}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}

export function ServicesHubView({
  eyebrow,
  h1,
  intro,
  heroImage,
  heroAlt,
  everydayHeading,
  everydayIntro,
  everydayServices,
  longDistanceHeading,
  longDistanceIntro,
  longDistanceServices,
  pilgrimageHeading,
  pilgrimageIntro,
  pilgrimageServices,
  journeyHeading,
  journeyIntro,
  journeyExamples,
  closingHeading,
  closingText,
  primaryCtaLabel,
  secondaryCtaLabel,
  secondaryCtaHref,
  crumbs,
}: ServicesHubViewProps) {
  return (
    <>
      {/* Opening — centered image hero. Different composition from Contact's two-column band and Quote's left-aligned band. */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-midnight/65" aria-hidden="true" />
        <div className="relative mx-auto max-w-[820px] px-4 pb-14 pt-32 text-center sm:px-6 sm:pt-36 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{intro}</p>
          <div className="mx-auto mt-6 h-[3px] w-12 bg-brass" aria-hidden="true" />
        </div>
      </section>

      {/* Cluster 1 — Everyday & Business: compact icon-card grid. */}
      <section className="bg-white pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{everydayHeading}</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{everydayIntro}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {everydayServices.map((s) => (
              <ServiceCard key={s.href} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Cluster 2 — Long-Distance: editorial image bands, alternating sides. */}
      <section className="bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{longDistanceHeading}</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{longDistanceIntro}</p>
          <div className="mt-8 space-y-8">
            {longDistanceServices.map((s, i) => {
              const Icon = HUB_ICONS[s.icon];
              const imageStart = i % 2 === 1;
              return (
                <div
                  key={s.href}
                  className="grid items-center gap-0 overflow-hidden rounded-2xl border border-hairline bg-white lg:grid-cols-2"
                >
                  <div className={`relative h-56 w-full sm:h-72 lg:h-80 ${imageStart ? "lg:order-2" : ""}`}>
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className={`p-6 sm:p-8 ${imageStart ? "lg:order-1" : ""}`}>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-midnight text-brass">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-muted">{s.scenario}</p>
                    <p className="mt-1.5 text-xl font-semibold text-ink">{s.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
                    <Link
                      href={s.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-brass"
                    >
                      {s.name}
                      <ArrowRight className="size-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cluster 3 — Pilgrimage: connected journey chain, not a grid. */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{pilgrimageHeading}</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{pilgrimageIntro}</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {pilgrimageServices.map((s, i) => {
              const Icon = HUB_ICONS[s.icon];
              return (
                <div key={s.href} className="flex flex-1 items-center gap-3">
                  <Link
                    href={s.href}
                    className="group flex flex-1 flex-col rounded-2xl border border-hairline bg-sand/30 p-6 transition-colors hover:border-brass"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-midnight text-brass transition-colors group-hover:bg-brass group-hover:text-midnight">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-muted">{s.scenario}</p>
                    <p className="mt-1.5 text-lg font-semibold text-ink">{s.name}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight group-hover:text-brass">
                      {s.name}
                      <ArrowRight className="size-4 rtl:rotate-180" />
                    </span>
                  </Link>
                  {i < pilgrimageServices.length - 1 && (
                    <ArrowRight
                      className="hidden size-5 shrink-0 text-brass lg:block rtl:rotate-180"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real journeys, matched to a service — grounds the abstract clusters in actual scenarios. */}
      <section className="border-t border-hairline bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{journeyHeading}</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">{journeyIntro}</p>
          <div className="mt-7 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-white">
            {journeyExamples.map((j) => (
              <Link
                key={j.scenario}
                href={j.serviceHref}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-sand/30"
              >
                <span className="text-sm text-ink">{j.scenario}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-midnight group-hover:text-brass">
                  {j.serviceLabel}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — distinct wording/purpose from the service pages' final CTA. */}
      <section className="bg-midnight py-14 text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{closingHeading}</h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">{closingText}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-xl bg-brass px-7 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
            >
              {primaryCtaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
