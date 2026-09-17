import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { HomeSectionCards, type HomeSectionCard } from "@/components/home/HomeSectionCards";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import type { Faq } from "@/data/faqs";

export interface HotelTransfersHubContent {
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
  airportToHotelHeading: string;
  airportToHotelIntro: string;
  airportToHotelCards: HomeSectionCard[];
  hotelToAirportHeading: string;
  hotelToAirportIntro: string;
  hotelToAirportItems: string[];
  hotelCityHeading: string;
  hotelCityIntro: string;
  hotelCityCards: HomeSectionCard[];
  makkahMadinahHeading: string;
  makkahMadinahIntro: string;
  makkahMadinahCards: HomeSectionCard[];
  businessFamilyHeading: string;
  businessFamilyIntro: string;
  businessFamilyCards: HomeSectionCard[];
  vehiclesHeading: string;
  vehiclesIntro: string;
  vehicleCards: HomeSectionCard[];
  bookingHeading: string;
  bookingIntro: string;
  bookingSteps: { title: string; detail: string }[];
  bookingInfoHeading: string;
  bookingInfoIntro: string;
  bookingInfoItems: string[];
  coverageHeading: string;
  coverageIntro: string;
  coverageCards: HomeSectionCard[];
  faqHeading: string;
  faqs: Faq[];
  finalCtaHeading: string;
  finalCtaText: string;
}

/**
 * Dedicated view for the Hotel Transfers page only — not shared with the
 * other rebuilt service pages. Same pattern as the Airport/Intercity/
 * Umrah/Hajj/Ziyarat hubs: reuses HomeSectionCards/HomeFAQSection
 * (already generic, unmodified) for H3 cards and H3 FAQ questions. No
 * shared file touched, so no other page is affected.
 */
export function HotelTransfersHub({ content, crumbs }: { content: HotelTransfersHubContent; crumbs: Crumb[] }) {
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
    airportToHotelHeading,
    airportToHotelIntro,
    airportToHotelCards,
    hotelToAirportHeading,
    hotelToAirportIntro,
    hotelToAirportItems,
    hotelCityHeading,
    hotelCityIntro,
    hotelCityCards,
    makkahMadinahHeading,
    makkahMadinahIntro,
    makkahMadinahCards,
    businessFamilyHeading,
    businessFamilyIntro,
    businessFamilyCards,
    vehiclesHeading,
    vehiclesIntro,
    vehicleCards,
    bookingHeading,
    bookingIntro,
    bookingSteps,
    bookingInfoHeading,
    bookingInfoIntro,
    bookingInfoItems,
    coverageHeading,
    coverageIntro,
    coverageCards,
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

      {/* H2 #2 — Airport to Hotel Transfers (H3 x4) */}
      <HomeSectionCards eyebrow="Airport Arrival" heading={airportToHotelHeading} intro={airportToHotelIntro} tone="sand" columns={4} cards={airportToHotelCards} />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #3 — Hotel to Airport Transfers (bullet list, no H3s) */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{hotelToAirportHeading}</h2>
          <p className="mt-2 text-[15px] text-ink-soft">{hotelToAirportIntro}</p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {hotelToAirportItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* H2 #4 — Hotel-to-Hotel and Hotel-to-City Transfers (H3 x4) */}
      <div id="coverage">
        <HomeSectionCards eyebrow="Hotel-to-Hotel & City" heading={hotelCityHeading} intro={hotelCityIntro} tone="sand" columns={4} cards={hotelCityCards} />
      </div>

      {/* H2 #5 — Hotel Transfers in Makkah and Madinah (H3 x2) */}
      <HomeSectionCards eyebrow="The Holy Cities" heading={makkahMadinahHeading} intro={makkahMadinahIntro} columns={2} cards={makkahMadinahCards} />

      {/* H2 #6 — Business Travellers and Families (H3 x2) */}
      <HomeSectionCards eyebrow="Who This Is For" heading={businessFamilyHeading} intro={businessFamilyIntro} tone="sand" columns={2} cards={businessFamilyCards} />

      {/* H2 #7 — Vehicles (H3 x4) */}
      <HomeSectionCards eyebrow="The Fleet" heading={vehiclesHeading} intro={vehiclesIntro} columns={4} cards={vehicleCards} />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 space-y-14">
        {/* H2 #8 — How to Book (numbered steps, bold not H3, matches established site convention) */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{bookingHeading}</h2>
          <p className="mt-2 text-[15px] text-ink-soft">{bookingIntro}</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <li key={step.title} className="rounded-xl border border-hairline bg-sand/40 p-4">
                <p className="font-semibold text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* H2 #9 — Booking Information (bullet list, no H3s) */}
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

      {/* H2 #10 — Coverage (H3 x6) */}
      <HomeSectionCards eyebrow="City Coverage" heading={coverageHeading} intro={coverageIntro} tone="sand" columns={3} cards={coverageCards} />

      {/* H2 #11 — FAQ (H3 questions) */}
      <HomeFAQSection faqs={faqs} heading={faqHeading} />

      {/*
        Final CTA — a real H2: the brief numbers this page's sections up to
        "H2 #11" for FAQ, so 11 numbered + this CTA = 12, exactly at the top
        of the brief's own "Maximum 11-12 H2 sections" — no demotion needed.
      */}
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
