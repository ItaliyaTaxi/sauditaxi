import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { ServiceBlockRenderer, type ServiceBlock } from "@/components/services/ServiceBlocks";
import { HomeSectionCards, type HomeSectionCard } from "@/components/home/HomeSectionCards";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import type { Faq } from "@/data/faqs";

export interface UmrahTransfersHubContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  coreServiceHeading: string;
  coreServiceParagraphs: string[];
  routesHeading: string;
  routesIntro: string;
  routeCards: HomeSectionCard[];
  airportHeading: string;
  airportIntro: string;
  airportCards: HomeSectionCard[];
  citiesHeading: string;
  citiesIntro: string;
  cityCards: HomeSectionCard[];
  hotelHeading: string;
  hotelIntro: string;
  hotelCards: HomeSectionCard[];
  familyHeading: string;
  familyIntro: string;
  familyCards: HomeSectionCard[];
  vehiclesHeading: string;
  vehiclesIntro: string;
  vehicleCards: HomeSectionCard[];
  howItWorksBlock: ServiceBlock;
  bookingInfoHeading: string;
  bookingInfoIntro: string;
  bookingInfoItems: string[];
  planningHeading: string;
  planningIntro: string;
  planningItems: string[];
  requirementsHeading: string;
  requirementsParagraphs: string[];
  faqHeading: string;
  faqs: Faq[];
  finalCtaHeading: string;
  finalCtaText: string;
}

/**
 * Dedicated view for the Umrah Transfers page only — not shared with the
 * other rebuilt service pages. Same pattern as AirportTransfersHub and
 * IntercityTransfersHub: reuses ServiceBlockRenderer (timeline, unmodified)
 * plus HomeSectionCards/HomeFAQSection (unmodified, already generic) for
 * the sections needing H3 cards or H3 FAQ questions. No shared file
 * touched, so no other page is affected by this page's restructuring.
 */
export function UmrahTransfersHub({ content, crumbs }: { content: UmrahTransfersHubContent; crumbs: Crumb[] }) {
  const {
    eyebrow,
    h1,
    dek,
    heroImage,
    heroAlt,
    primaryCtaLabel,
    secondaryCtaLabel,
    secondaryCtaHref,
    coreServiceHeading,
    coreServiceParagraphs,
    routesHeading,
    routesIntro,
    routeCards,
    airportHeading,
    airportIntro,
    airportCards,
    citiesHeading,
    citiesIntro,
    cityCards,
    hotelHeading,
    hotelIntro,
    hotelCards,
    familyHeading,
    familyIntro,
    familyCards,
    vehiclesHeading,
    vehiclesIntro,
    vehicleCards,
    howItWorksBlock,
    bookingInfoHeading,
    bookingInfoIntro,
    bookingInfoItems,
    planningHeading,
    planningIntro,
    planningItems,
    requirementsHeading,
    requirementsParagraphs,
    faqHeading,
    faqs,
    finalCtaHeading,
    finalCtaText,
  } = content;

  return (
    <>
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image src={heroImage} alt={heroAlt} fill priority sizes="100vw" className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-midnight/55" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/75 to-midnight/35" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1280px] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brass">{eyebrow}</p>
          <h1 className="mt-5 max-w-2xl text-[2.1rem] font-bold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{dek}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
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

      {/* H2 #1 — Core Service (no H3s) */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{coreServiceHeading}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              {coreServiceParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2 — Popular Umrah Transfer Routes (H3 x4) */}
      <div id="routes">
        <HomeSectionCards eyebrow="Popular Routes" heading={routesHeading} intro={routesIntro} tone="sand" columns={4} cards={routeCards} />
      </div>

      {/* H2 #3 — Airport Transfers for Umrah Travellers (H3 x3) */}
      <HomeSectionCards eyebrow="Airport Arrival" heading={airportHeading} intro={airportIntro} columns={3} cards={airportCards} />

      {/* H2 #4 — Makkah and Madinah Transfers (H3 x3) */}
      <HomeSectionCards eyebrow="The Holy Cities" heading={citiesHeading} intro={citiesIntro} tone="sand" columns={3} cards={cityCards} />

      {/* H2 #5 — Hotel Transfers (H3 x3) */}
      <HomeSectionCards eyebrow="Hotel Transfers" heading={hotelHeading} intro={hotelIntro} columns={3} cards={hotelCards} />

      {/* H2 #6 — Families and Groups (H3 x3) */}
      <HomeSectionCards eyebrow="Families & Groups" heading={familyHeading} intro={familyIntro} tone="sand" columns={3} cards={familyCards} />

      {/* H2 #7 — Vehicles (H3 x4) */}
      <HomeSectionCards eyebrow="The Fleet" heading={vehiclesHeading} intro={vehiclesIntro} columns={4} cards={vehicleCards} />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #8 — How to Book (existing Timeline block) */}
        <ServiceBlockRenderer block={howItWorksBlock} />

        {/* H2 #9 — Journey Information (bullet list, no H3s) */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{bookingInfoHeading}</h2>
          <p className="mt-2 text-[15px] text-ink-soft">{bookingInfoIntro}</p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {bookingInfoItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* H2 #10 — Planning (bullet list, no H3s) */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{planningHeading}</h2>
          <p className="mt-2 text-[15px] text-ink-soft">{planningIntro}</p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {planningItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* H2 #11 — Requirements & Responsibilities (no H3s) */}
        <div className="rounded-2xl border border-hairline bg-sand/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{requirementsHeading}</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {requirementsParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* H2 #12 — FAQ (H3 questions) */}
      <HomeFAQSection faqs={faqs} heading={faqHeading} />

      {/* Final CTA (H2) */}
      <section className="bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{finalCtaHeading}</h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">{finalCtaText}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
