import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { heroImages } from "@/lib/hero";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata: Metadata = buildMetadata({
  title: "About Us | Trusted Taxi Service in Saudi Arabia",
  description:
    "Learn about our private taxi and transfer service in Saudi Arabia — covering airports, cities, intercity routes, borders, Umrah, and Hajj with professional drivers and fixed prices.",
  path: "/about",
});

const commitments = [
  "Fixed quotes agreed before every trip",
  "Professional, experienced local drivers",
  "Clean, well-maintained modern vehicles",
  "Coverage of all major cities and airports",
  "Specialist Umrah, Hajj, and Ziyarat transfers",
  "Fast WhatsApp booking, 24 hours a day",
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="About Our Saudi Arabia Taxi Service"
        subtitle="A private transfer service built around comfort, safety, and clear pricing — for tourists, pilgrims, families, and business travellers across the Kingdom."
        crumbs={crumbs}
        backgroundImage={heroImages.city}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4 text-muted-foreground">
            <h2 className="text-2xl font-bold text-navy">Who We Are</h2>
            <p>
              We are a dedicated taxi and transfer service operating across Saudi
              Arabia. From the moment travellers land at Riyadh, Jeddah, Madinah, or
              Dammam, our goal is simple: a comfortable, reliable, fairly priced
              private ride to wherever they need to go.
            </p>
            <p>
              Our roots are in pilgrim transport — the Jeddah airport to Makkah
              transfer and the Makkah to Madinah journey are among our most
              requested routes. Over time we expanded to cover every major city,
              the most popular intercity routes, and the Kingdom&apos;s land borders
              with Bahrain, Qatar, the UAE, Kuwait, and Jordan.
            </p>
            <p>
              We keep things refreshingly simple. There is no app to download and no
              account to create — you send your trip details on WhatsApp or through
              our quote form, and we reply with a fixed price and the right vehicle
              for your group.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Our Commitments</h2>
            <ul className="mt-5 space-y-3">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-3 text-navy">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustBadges />
      <WhyChooseUs background="muted" />
      <HowItWorks background="white" />
      <CTASection />
    </>
  );
}
