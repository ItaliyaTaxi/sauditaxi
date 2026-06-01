import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { heroImages } from "@/lib/hero";
import { siteConfig, whatsappLink } from "@/lib/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Book Your Saudi Arabia Taxi",
  description:
    "Contact our Saudi Arabia taxi service by WhatsApp, phone, or email. Fast quotes for airport transfers, city rides, intercity routes, borders, Umrah, and Hajj.",
  path: "/contact",
});

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: whatsappLink("Hello! I'd like a taxi quote in Saudi Arabia."),
    note: "Fastest response — usually within minutes",
  },
  {
    icon: Phone,
    title: "Call us",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
    note: "Available 24/7 for bookings",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "For group and corporate enquiries",
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Contact Our Taxi Service"
        subtitle="Reach us any time on WhatsApp, by phone, or by email. We reply quickly with a fixed quote for your journey."
        crumbs={crumbs}
        backgroundImage={heroImages.city}
        showCtas={false}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-navy">Get in Touch</h2>
            <p className="mt-3 text-muted-foreground">
              Whether you need an airport pickup, a city ride, or a long-distance
              transfer, choose the channel that suits you best.
            </p>

            <div className="mt-8 space-y-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.title}
                    href={c.href}
                    target={c.title === "WhatsApp" ? "_blank" : undefined}
                    rel={c.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-all hover:border-gold hover:shadow-sm"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy">{c.title}</span>
                      <span className="block text-sm text-navy">{c.value}</span>
                      <span className="block text-xs text-muted-foreground">{c.note}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Clock className="size-4 text-gold" /> Open 24 hours, 7 days a week
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-gold" /> Serving all major cities and airports in Saudi Arabia
              </p>
            </div>

            <Button asChild variant="whatsapp" size="lg" className="mt-8">
              <a
                href={whatsappLink("Hello! I'd like a taxi quote in Saudi Arabia.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Message us on WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Send a Booking Request</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your trip and we&apos;ll reply on WhatsApp with a fixed price.
            </p>
            <div className="mt-5">
              <QuoteForm serviceType="Contact page enquiry" twoColumn={false} />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
