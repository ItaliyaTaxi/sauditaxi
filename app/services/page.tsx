import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/card";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { heroImages } from "@/lib/hero";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const metadata: Metadata = buildMetadata({
  title: "Our Services | Taxi & Transfer Services in Saudi Arabia",
  description:
    "Explore our private taxi and transfer services in Saudi Arabia: airport transfers, city and intercity rides, border crossings, Umrah, Hajj, Ziyarat, and hotel transfers.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Taxi & Transfer Services in Saudi Arabia"
        subtitle="Private, fixed-price transfers for airports, cities, intercity routes, borders, and the full pilgrim journey across the Kingdom."
        crumbs={crumbs}
        backgroundImage={heroImages.city}
        whatsappMessage="Hello! I'd like to know more about your taxi services in Saudi Arabia."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={service.href} className="group">
                  <Card className="flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="mt-4 text-lg font-semibold text-navy">
                      {service.name}
                    </h2>
                    <p className="mt-1.5 flex-1 text-sm text-muted-foreground">
                      {service.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                      View details
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks background="muted" />
      <WhyChooseUs background="white" />
      <CTASection />
    </>
  );
}
