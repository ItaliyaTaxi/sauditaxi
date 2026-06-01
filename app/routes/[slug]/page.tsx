import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { routes, getRoute } from "@/data/routes";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Params = { slug: string };

const pickupPoints = [
  "Airport",
  "Hotel",
  "Home address",
  "Business location",
  "Railway or bus station",
  "Religious site",
];
const dropoffPoints = [
  "Hotel",
  "Airport",
  "City center",
  "Religious destination",
  "Tourist location",
  "Border point",
];

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  return buildMetadata({
    title:
      route.metaTitle ??
      `${route.from} to ${route.to} Taxi | Private Transfer`,
    description:
      route.metaDescription ??
      `Book a private ${route.from} to ${route.to} taxi (${route.distance}, approx. ${route.duration}). Fixed price, professional driver, easy WhatsApp booking.`,
    path: `/routes/${route.slug}`,
  });
}

function routeFaqs(from: string, to: string): Faq[] {
  return [
    {
      question: `How can I book a taxi from ${from} to ${to}?`,
      answer: `You can book by sending your trip details through WhatsApp or our quote form. We reply with a fixed price for the ${from} to ${to} transfer.`,
    },
    {
      question: `Is the ${from} to ${to} transfer private?`,
      answer: `Yes, the transfer is fully private for your booking — no shared rides and no waiting for other passengers.`,
    },
    {
      question: `Can I choose the vehicle type for ${from} to ${to}?`,
      answer: `Yes. You can request economy, comfort, business, SUV, van, or minibus depending on your group size and availability.`,
    },
  ];
}

export default async function RoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const faqs = routeFaqs(route.from, route.to);
  const path = `/routes/${route.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Routes", path: "/intercity-transfers" },
    { name: `${route.from} to ${route.to}`, path },
  ];
  const relatedRoutes = routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        (r.category === route.category ||
          r.relatedCitySlugs.some((c) => route.relatedCitySlugs.includes(c)))
    )
    .slice(0, 6)
    .map((r) => r.slug);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${route.from} to ${route.to} Taxi Transfer`,
            description: route.intro,
            path,
            serviceType: "Intercity Transfer",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`${route.from} to ${route.to} Taxi Service`}
        subtitle={route.intro}
        crumbs={crumbs}
        whatsappMessage={`Hello! I'd like a quote for a ${route.from} to ${route.to} taxi.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <Clock className="size-4 text-gold" /> Approx. {route.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <MapPin className="size-4 text-gold" /> {route.distance}
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-navy">
              Private transfer from {route.from} to {route.to}
            </h2>
            <p className="mt-3 text-muted-foreground">{route.about}</p>
            <p className="mt-3 text-muted-foreground">
              Our private transfer service is suitable for tourists, families,
              business travellers, Umrah passengers, and groups travelling with
              luggage.
            </p>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Good to know about this route
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {route.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {n}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Pickup locations</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {pickupPoints.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <ArrowRight className="size-3.5 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Drop-off locations</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {dropoffPoints.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <ArrowRight className="size-3.5 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Booking details required
            </h2>
            <p className="mt-3 text-muted-foreground">
              To confirm your quote, please provide your pickup and drop-off
              locations, date and time, passenger and luggage count, your flight
              number if it&apos;s an airport pickup, and a contact number.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {route.from} → {route.to} Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fixed price for your private transfer on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${route.from} to ${route.to} transfer`}
                  route={`${route.from} to ${route.to}`}
                  defaultPickup={route.from}
                  defaultDropoff={route.to}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {relatedRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading="Related Routes"
          subheading="Other popular private transfers you may need."
          only={relatedRoutes}
        />
      )}

      {route.relatedCitySlugs.length > 0 && (
        <CityGrid
          background="white"
          heading="Taxi Service in Cities on This Route"
          subheading="Local transfers in the cities connected by this journey."
          only={route.relatedCitySlugs}
        />
      )}

      <FAQSection faqs={faqs} background="muted" />
      <CTASection
        title={`Book Your ${route.from} to ${route.to} Taxi`}
        whatsappMessage={`Hello! I'd like to book a ${route.from} to ${route.to} taxi.`}
      />
    </>
  );
}
