import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { ServiceBlockRenderer, type ServiceBlock } from "@/components/services/ServiceBlocks";
import { HomeSectionCards, type HomeSectionCard } from "@/components/home/HomeSectionCards";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import type { Faq } from "@/data/faqs";

export interface AirportTransfersHubContent {
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
  airportsHeading: string;
  airportsIntro: string;
  airportCards: HomeSectionCard[];
  moreAirportsNote: { text: string; links: { label: string; href: string }[] };
  destinationsBlock: ServiceBlock;
  umrahHajjHeading: string;
  umrahHajjIntro: string;
  umrahHajjCards: HomeSectionCard[];
  howItWorksBlock: ServiceBlock;
  bookingInfoHeading: string;
  bookingInfoIntro: string;
  bookingInfoItems: string[];
  vehiclesHeading: string;
  vehiclesIntro: string;
  vehicleCards: HomeSectionCard[];
  travellersHeading: string;
  travellersIntro: string;
  travellerCards: HomeSectionCard[];
  benefitsHeading: string;
  benefitsIntro: string;
  benefitCards: HomeSectionCard[];
  planningBlock: ServiceBlock;
  faqHeading: string;
  faqs: Faq[];
  finalCtaHeading: string;
  finalCtaText: string;
}

/**
 * Dedicated view for the Airport Transfers hub page only — not shared with
 * the other 7 rebuilt service pages (those still use ServiceV2View
 * unchanged). Built this way specifically so this page's heading structure
 * (H2 Core Service → Airports We Cover → Destinations → Umrah/Hajj → How It
 * Works → Booking Info → Vehicles → Travellers → Benefits → Planning → FAQ
 * → final CTA, each H2 with real H3 sub-cards where the brief asks for
 * them) could be built without touching ServiceV2View.tsx, ServiceBlocks.tsx,
 * or FAQSection.tsx — all three are reused here exactly as they already
 * exist (ServiceBlockRenderer for the timeline/route-cards/checklist
 * sections, HomeSectionCards and HomeFAQSection — already generic,
 * presentational components built for the homepage — for the sections that
 * need H3-titled cards or H3 FAQ questions) so the other 7 service pages
 * and the homepage are completely unaffected by this page's changes.
 */
export function AirportTransfersHub({ content, crumbs }: { content: AirportTransfersHubContent; crumbs: Crumb[] }) {
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
    airportsHeading,
    airportsIntro,
    airportCards,
    moreAirportsNote,
    destinationsBlock,
    umrahHajjHeading,
    umrahHajjIntro,
    umrahHajjCards,
    howItWorksBlock,
    bookingInfoHeading,
    bookingInfoIntro,
    bookingInfoItems,
    vehiclesHeading,
    vehiclesIntro,
    vehicleCards,
    travellersHeading,
    travellersIntro,
    travellerCards,
    benefitsHeading,
    benefitsIntro,
    benefitCards,
    planningBlock,
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

      {/* H2 #2 — Airports We Cover (H3 x4 + a plain-text mention of 2 more) */}
      <div id="coverage">
        <HomeSectionCards eyebrow="Airport Coverage" heading={airportsHeading} intro={airportsIntro} tone="sand" columns={4} cards={airportCards} />
      </div>
      <section className="bg-sand py-0">
        <div className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <p className="-mt-6 max-w-3xl text-sm text-ink-soft">
            {moreAirportsNote.text}{" "}
            {moreAirportsNote.links.map((l, i) => (
              <span key={l.href}>
                <Link href={l.href} className="font-medium text-midnight underline underline-offset-2 hover:text-brass">
                  {l.label}
                </Link>
                {i < moreAirportsNote.links.length - 1 ? " and " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #3 — Popular Airport Transfer Destinations (existing RouteCards block, no forced H3s) */}
        <ServiceBlockRenderer block={destinationsBlock} />
      </div>

      {/* H2 #4 — Umrah and Hajj (H3 x3) */}
      <HomeSectionCards eyebrow="Pilgrim Transport" heading={umrahHajjHeading} intro={umrahHajjIntro} columns={3} cards={umrahHajjCards} />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #5 — How Our Airport Transfer Service Works (existing Timeline block) */}
        <ServiceBlockRenderer block={howItWorksBlock} />

        {/* H2 #6 — What Information Do I Need to Book an Airport Transfer? (bullet list, no H3s) */}
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

      {/* H2 #7 — Vehicles (H3 x4) */}
      <HomeSectionCards eyebrow="The Fleet" heading={vehiclesHeading} intro={vehiclesIntro} tone="sand" columns={4} cards={vehicleCards} />

      {/* H2 #8 — Different Travellers (H3 x4) */}
      <HomeSectionCards eyebrow="Who This Is For" heading={travellersHeading} intro={travellersIntro} columns={4} cards={travellerCards} />

      {/* H2 #9 — Why Private Airport Transfer (H3 x4) */}
      <HomeSectionCards eyebrow="Why It Works This Way" heading={benefitsHeading} intro={benefitsIntro} tone="midnight" columns={4} cards={benefitCards} />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* H2 #10 — Planning Your Saudi Airport Transfer (existing Checklist block) */}
        <ServiceBlockRenderer block={planningBlock} />
      </div>

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
