import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { distancePages, getDistancePage } from "@/data/distance-pages";
import { routeHero } from "@/lib/hero";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getArPathForEnPath } from "@/data/translations/ar";

/**
 * Informational distance/travel-time pages — /distance/{slug}. Deliberately
 * NOT built from the commercial route template: no VehicleOptions,
 * HowItWorks, or QuoteForm, and only one contextual CTA linking to the
 * matching /routes/{slug} commercial page. See data/distance-pages.ts for
 * the content model and sourcing notes.
 */

type Params = { slug: string };

export function generateStaticParams() {
  return distancePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDistancePage(slug);
  if (!page) return {};
  const enPath = `/distance/${page.slug}`;
  const arPath = getArPathForEnPath(enPath);
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: enPath,
    ...(arPath ? { alternateLanguages: { en: enPath, ar: arPath } } : {}),
  });
}

export default async function DistancePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getDistancePage(slug);
  if (!page) notFound();

  const path = `/distance/${page.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `${page.from} to ${page.to} Distance`, path },
  ];

  return (
    <>
      <SchemaScript
        schema={[breadcrumbSchema(crumbs), faqSchema(page.faqs)]}
      />

      <PageHeader
        title={page.h1}
        crumbs={crumbs}
        backgroundImage={routeHero(page.from, page.to).src}
        backgroundAlt={routeHero(page.from, page.to).alt}
        showCtas={false}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Quick answer */}
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
              Quick answer
            </h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-navy">Driving distance</p>
                  <p className="text-sm text-muted-foreground">{page.quickAnswer.drivingDistance}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-navy">Driving time</p>
                  <p className="text-sm text-muted-foreground">{page.quickAnswer.drivingTime}</p>
                </div>
              </div>
              {page.quickAnswer.straightLineDistance && (
                <div className="flex items-start gap-2 sm:col-span-2">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Straight-line (great-circle) distance</p>
                    <p className="text-sm text-muted-foreground">{page.quickAnswer.straightLineDistance}</p>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{page.quickAnswer.note}</p>
          </div>

          {/* Distance explanation */}
          <h2 className="mt-10 text-2xl font-bold text-navy">
            {page.from} to {page.to}: distance in detail
          </h2>
          <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {page.distanceExplanation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Travel time */}
          <h2 className="mt-10 text-2xl font-bold text-navy">Travel time</h2>
          <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {page.travelTime.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Info boxes */}
          {page.infoBoxes.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {page.infoBoxes.map((b) => (
                <div key={b.label} className="rounded-xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">{b.label}</p>
                  <p className="mt-1 text-sm text-navy">{b.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Transport options */}
          <h2 className="mt-10 text-2xl font-bold text-navy">
            How to travel from {page.from} to {page.to}
          </h2>
          <div className="mt-4 space-y-4">
            {page.transportOptions.map((t) => (
              <div key={t.mode} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">{t.mode}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-navy">Duration: </span>
                  {t.duration}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-navy">Best for: </span>
                  {t.suitability}
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-navy">Advantages: </span>
                    {t.advantages}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-navy">Limitations: </span>
                    {t.limitations}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Route-specific section */}
          <h2 className="mt-10 text-2xl font-bold text-navy">{page.routeSpecific.heading}</h2>
          <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {page.routeSpecific.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Single contextual CTA to the commercial route page */}
          <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6">
            <p className="text-sm text-navy">
              Planning to make this journey by private vehicle? See our{" "}
              <Link href={page.routePath} className="font-semibold text-navy underline underline-offset-2 hover:text-gold">
                {page.from} to {page.to} transfer service
              </Link>{" "}
              for fixed-price private transfers, vehicle options, and booking.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={page.faqs} background="muted" />

      {/* Related links */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-navy">Related pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {page.relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-gold"
              >
                {l.label}
                <ArrowRight className="size-3.5 text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-muted py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-navy">Sources</h2>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            {page.sources.map((s) => (
              <li key={s.url} className="flex items-start gap-1.5">
                <ExternalLink className="mt-0.5 size-3 shrink-0" />
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-dotted hover:text-navy">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Distances and travel times are approximate and can vary by exact starting point, route taken, and traffic
            or seasonal conditions. Last checked 2026-08-23.
          </p>
        </div>
      </section>
    </>
  );
}
