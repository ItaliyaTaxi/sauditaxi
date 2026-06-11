import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Milestone, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { borderHero } from "@/lib/hero";
import { BorderGrid } from "@/components/sections/BorderGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { borders, getBorder } from "@/data/borders";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

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
  return buildMetadata({
    title:
      border.metaTitle ??
      `${border.country} Border Taxi | Saudi Cross-Border Transfer`,
    description:
      border.metaDescription ??
      `Private taxi transfer from Saudi Arabia to the ${border.country} border via ${border.crossing}. Door-to-door cross-border rides with WhatsApp booking.`,
    path: `/border-transfers/${border.slug}`,
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

  const faqs = borderFaqs(border);
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
            <h2 className="text-2xl font-bold text-navy">
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

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {border.relatedCitySlugs.length > 0 && (
        <CityGrid
          background="muted"
          heading="Taxi Service in Pickup Cities"
          subheading="Local transfers in the cities served by this border crossing."
          only={border.relatedCitySlugs}
        />
      )}

      <BorderGrid
        background="white"
        exclude={border.slug}
        heading="Other Border Crossings"
        subheading="We cover all the main land borders out of Saudi Arabia."
      />
      <FAQSection faqs={faqs} background="muted" />
      <LatestGuides background="muted" />
      <CTASection
        title={`Book Your ${border.country} Border Transfer`}
        whatsappMessage={`Hello! I'd like to book a border transfer to ${border.country}.`}
      />
    </>
  );
}
