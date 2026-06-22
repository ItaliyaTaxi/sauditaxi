import { CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { ServiceContentSections } from "@/components/templates/ServiceContentSections";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { serviceHero } from "@/lib/hero";
import { getServiceContent } from "@/data/service-content";
import type { Service } from "@/data/services";

/**
 * Shared layout for the main service pages. Page-specific blocks (a city grid,
 * route grid, etc.) are passed as `children` and render between the intro and
 * the vehicle options.
 */
export function ServicePage({
  service,
  children,
}: {
  service: Service;
  children?: React.ReactNode;
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: service.href },
  ];
  const hero = serviceHero(service.slug, service.name);
  const content = getServiceContent(service.slug);
  // Prefer the rich FAQ set when present, but keep the on-page list focused:
  // show at most 6 FAQs (and emit the same set as FAQ schema).
  const faqs = (content?.faqs ?? service.faqs).slice(0, 6);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.heading,
            description: service.intro,
            path: service.href,
            serviceType: service.name,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={service.heading}
        subtitle={service.intro}
        crumbs={crumbs}
        backgroundImage={service.heroImage ?? hero.src}
        backgroundAlt={service.heroAlt ?? hero.alt}
        whatsappMessage={`Hello! I'm interested in your ${service.name} in Saudi Arabia.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="space-y-4 text-muted-foreground">
              {service.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-bold text-navy">
              What&apos;s included
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">Request a Quote</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Send your trip details — we reply on WhatsApp with a fixed price.
              </p>
              <div className="mt-4">
                <QuoteForm serviceType={service.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      {content ? (
        <>
          <ServiceContentSections content={content} slug={service.slug} />
          <VehicleOptions background="muted" />
          <FAQSection faqs={faqs} background="white" />
          <RelatedGuides slugs={content.relatedBlogSlugs} background="muted" />
        </>
      ) : (
        <>
          <VehicleOptions background="muted" />
          <HowItWorks background="white" />
          <FAQSection faqs={faqs} background="muted" />
          <LatestGuides />
        </>
      )}
      <CTASection
        whatsappMessage={`Hello! I'd like to book your ${service.name}.`}
      />
    </>
  );
}
