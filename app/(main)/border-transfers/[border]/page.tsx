import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Milestone, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { TrustSection } from "@/components/sections/TrustSection";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { borderHero } from "@/lib/hero";
import { BorderGrid } from "@/components/sections/BorderGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { borders, getBorder } from "@/data/borders";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

type Params = { border: string };

export function generateStaticParams() {
  return borders.map((b) => ({ border: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { border: slug } = await params;
  const border = getBorder(slug);
  if (!border) return {};
  const path = `/border-transfers/${border.slug}`;
  const arPath = getArPathForEnPath(path);
  return buildMetadata({
    title:
      border.metaTitle ??
      `${border.country} Border Taxi | Saudi Cross-Border Transfer`,
    description:
      border.metaDescription ??
      `Private taxi transfer from Saudi Arabia to the ${border.country} border via ${border.crossing}. Door-to-door cross-border rides with WhatsApp booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function borderFaqs(b: { country: string; crossing: string }): Faq[] {
  return [
    {
      question: `Can I book a border transfer from Saudi Arabia to ${b.country}?`,
      answer: `Yes. We provide private cross-border transfers from Saudi Arabia to ${b.country} via the ${b.crossing}, with door-to-door pickup and drop-off.`,
    },
    {
      question: `What documents do I need to cross to ${b.country}?`,
      answer: `You will need a valid passport and the appropriate visa for ${b.country}. We advise on the specific requirements when you book.`,
    },
    {
      question: `How long does the border crossing take?`,
      answer: `Crossing times vary with traffic and immigration queues. We build in extra time at the ${b.crossing} so your transfer stays comfortable and unhurried.`,
    },
    {
      question: `Is the transfer to the ${b.country} border private?`,
      answer: `Yes, the transfer is fully private for your booking, with a fixed price agreed before you travel.`,
    },
  ];
}

export default async function BorderPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { border: slug } = await params;
  const border = getBorder(slug);
  if (!border) notFound();

  const faqs = (border.faqs ?? borderFaqs(border)).slice(0, 15);
  const path = `/border-transfers/${border.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Border Transfers", path: "/border-transfers" },
    { name: border.country, path },
  ];

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `Saudi Arabia to ${border.country} Border Transfer`,
            description: border.intro,
            path,
            serviceType: "Border Transfer",
            dateModified: border.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`Saudi Arabia to ${border.country} Border Taxi`}
        subtitle={border.intro}
        crumbs={crumbs}
        backgroundImage={border.heroImage ?? borderHero(border.country).src}
        backgroundAlt={border.heroAlt ?? borderHero(border.country).alt}
        whatsappMessage={`Hello! I'd like a border transfer from Saudi Arabia to ${border.country} (${border.crossing}).`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
                Key takeaways
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                <li>
                  • Private, fixed-price door-to-door transfer from Saudi Arabia to
                  the {border.country} border via {border.crossing}.
                </li>
                <li>• Pickup cities: {border.pickupCities.join(", ")}.</li>
                <li>
                  • A valid passport and the correct {border.country} entry
                  permission are required — always verify current visa rules with
                  official sources before you travel.
                </li>
                {border.lastUpdated && <li>• Page reviewed {border.lastUpdated}.</li>}
              </ul>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-navy">
              Private transfer to the {border.country} border
            </h2>
            <p className="mt-3 text-muted-foreground">{border.about}</p>

            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <Milestone className="size-5 text-gold" />
                Crossing: {border.crossing}
              </h3>
            </div>

            <h2 className="mt-10 text-xl font-bold text-navy">
              What to know before you travel
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {border.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {n}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Pickup cities for this border
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {border.pickupCities.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy"
                >
                  <ArrowRight className="size-4 text-gold" />
                  {c} to {border.country}
                </li>
              ))}
            </ul>

            {/* Rich long-form border crossing guide sections */}
            {border.sections && border.sections.length > 0 && (
              <div className="mt-10 space-y-8 [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
                {border.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {border.country} Border Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fixed price for your cross-border transfer on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${border.country} border transfer`}
                  route={`Saudi Arabia to ${border.country}`}
                  defaultDropoff={`${border.country} (${border.crossing})`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        images={border.images}
        heading={`${border.country} Crossing in Pictures`}
        subheading={`Views of the ${border.crossing} and the route across the border.`}
        background="white"
      />

      <VehicleOptions background="muted" />
      <TrustSection background="white" />
      <HowItWorks background="muted" />

      {border.relatedCitySlugs.length > 0 && (
        <CityGrid
          background="white"
          heading="Taxi Service in Pickup Cities"
          subheading="Local transfers in the cities served by this border crossing."
          only={border.relatedCitySlugs}
        />
      )}

      <BorderGrid
        background="muted"
        exclude={border.slug}
        heading="Other Border Crossings"
        subheading="We cover all the main land borders out of Saudi Arabia."
      />
      <FAQSection faqs={faqs} background="white" />
      <LatestGuides background="muted" />
      <CTASection
        title={`Book Your ${border.country} Border Transfer`}
        whatsappMessage={`Hello! I'd like to book a border transfer to ${border.country}.`}
      />
    </>
  );
}
