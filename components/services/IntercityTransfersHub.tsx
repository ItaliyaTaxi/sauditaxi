import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { ServiceBlockRenderer, type ServiceBlock } from "@/components/services/ServiceBlocks";
import { HomeSectionCards, type HomeSectionCard } from "@/components/home/HomeSectionCards";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import type { Faq } from "@/data/faqs";

export interface IntercityTransfersHubContent {
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
  routesBlock: ServiceBlock;
  citiesHeading: string;
  citiesIntro: string;
  cityCards: HomeSectionCard[];
  umrahHajjHeading: string;
  umrahHajjIntro: string;
  umrahHajjCards: HomeSectionCard[];
  businessHeading: string;
  businessIntro: string;
  businessCards: HomeSectionCard[];
  familyHeading: string;
  familyIntro: string;
  familyCards: HomeSectionCard[];
  howItWorksBlock: ServiceBlock;
  bookingInfoHeading: string;
  bookingInfoIntro: string;
  bookingInfoItems: string[];
  vehiclesHeading: string;
  vehiclesIntro: string;
  vehicleCards: HomeSectionCard[];
  benefitsHeading: string;
  benefitsIntro: string;
  benefitCards: HomeSectionCard[];
  faqHeading: string;
  faqs: Faq[];
  finalCtaHeading: string;
  finalCtaText: string;
}

/**
 * Dedicated view for the Intercity (city-to-city) Transfers hub page only —
 * not shared with the other rebuilt service pages (those still use
 * ServiceV2View unchanged). Same pattern as AirportTransfersHub: reuses
 * ServiceBlockRenderer (route-cards/timeline/checklist, unmodified) plus
 * HomeSectionCards/HomeFAQSection (already generic, built for the homepage)
 * for the sections needing H3 cards or H3 FAQ questions — no shared file
 * touched, so no other page is affected by this page's restructuring.
 */
export function IntercityTransfersHub({ content, crumbs }: { content: IntercityTransfersHubContent; crumbs: Crumb[] }) {
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
    routesBlock,
    citiesHeading,
    citiesIntro,
    cityCards,
    umrahHajjHeading,
    umrahHajjIntro,
    umrahHajjCards,
    businessHeading,
    businessIntro,
    businessCards,
    familyHeading,
    familyIntro,
    familyCards,
    howItWorksBlock,
    bookingInfoHeading,
    bookingInfoIntro,
    bookingInfoItems,
    vehiclesHeading,
    vehiclesIntro,
    vehicleCards,
    benefitsHeading,
    benefitsIntro,
    benefitCards,
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

      <div id="routes" className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #2 — Popular City-to-City Transfers (existing RouteCards block, no forced H3s) */}
        <ServiceBlockRenderer block={routesBlock} />
      </div>

      {/* H2 #3 — Cities We Cover (H3 x8) */}
      <HomeSectionCards eyebrow="City Coverage" heading={citiesHeading} intro={citiesIntro} tone="sand" columns={4} cards={cityCards} />

      {/* H2 #4 — Umrah and Hajj (H3 x3) */}
      <HomeSectionCards eyebrow="Pilgrim Transport" heading={umrahHajjHeading} intro={umrahHajjIntro} columns={3} cards={umrahHajjCards} />

      {/* H2 #5 — Business Travel (H3 x3) */}
      <HomeSectionCards eyebrow="Corporate Travel" heading={businessHeading} intro={businessIntro} tone="sand" columns={3} cards={businessCards} />

      {/* H2 #6 — Families and Groups (H3 x3) */}
      <HomeSectionCards eyebrow="Families & Groups" heading={familyHeading} intro={familyIntro} columns={3} cards={familyCards} />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #7 — How to Book (existing Timeline block) */}
        <ServiceBlockRenderer block={howItWorksBlock} />

        {/* H2 #8 — Journey Information (bullet list, no H3s) */}
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
      </div>

      {/* H2 #9 — Vehicles (H3 x4) */}
      <HomeSectionCards eyebrow="The Fleet" heading={vehiclesHeading} intro={vehiclesIntro} tone="sand" columns={4} cards={vehicleCards} />

      {/* H2 #10 — Why Choose a Private City Transfer (H3 x4) */}
      <HomeSectionCards eyebrow="Why It Works This Way" heading={benefitsHeading} intro={benefitsIntro} tone="midnight" columns={4} cards={benefitCards} />

      {/* H2 #11 — FAQ (H3 questions) */}
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
