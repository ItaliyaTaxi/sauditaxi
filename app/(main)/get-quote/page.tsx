import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { QuoteForm } from "@/components/QuoteForm";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Get Quote", path: "/get-quote" },
];

export const metadata: Metadata = buildMetadata({
  title: "Get a Private Transfer Quote in Saudi Arabia – Book Online",
  description:
    "Request a fast, fixed-price taxi quote in Saudi Arabia. Enter your pickup, drop-off, date, and passengers — we reply on WhatsApp in minutes.",
  path: "/get-quote",
});

const assurances = [
  "Fixed price agreed before you travel",
  "Reply on WhatsApp within minutes",
  "No payment needed to get a quote",
  "Vehicles for solo travellers to large groups",
];

type SearchParams = {
  pickup?: string;
  dropoff?: string;
  date?: string;
  time?: string;
  passengers?: string;
};

export default async function GetQuotePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Pre-fill from the homepage hero quick form (passed as query params).
  const sp = await searchParams;
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Get Your Taxi Quote"
        subtitle="Tell us about your trip and receive a fixed-price quote on WhatsApp — fast, simple, and with no obligation."
        crumbs={crumbs}
        showCtas={false}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Request a Price</h2>
            <p className="mt-3 text-muted-foreground">
              Complete the form and your details open a prefilled WhatsApp chat.
              The more you tell us — pickup, drop-off, date, passengers, and
              luggage — the faster we can confirm your fixed quote.
            </p>
            <ul className="mt-6 space-y-3">
              {assurances.map((a) => (
                <li key={a} className="flex items-start gap-3 text-navy">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <QuoteForm
                serviceType="Get Quote page"
                defaultPickup={sp.pickup ?? ""}
                defaultDropoff={sp.dropoff ?? ""}
                defaultDate={sp.date ?? ""}
                defaultTime={sp.time ?? ""}
                defaultPassengers={sp.passengers || "2"}
              />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks background="muted" />
      <FAQSection faqs={generalFaqs} background="white" />
    </>
  );
}
