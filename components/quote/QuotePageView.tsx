import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/**
 * Dedicated /get-quote layout — form-first and conversion-focused, distinct
 * from the conversational /contact page and the discovery-oriented
 * /services hub. A compact image hero (shorter than Contact's) keeps the
 * quote form itself above the fold and dominant. Reused for the Arabic page
 * (type: "quoteV2" in data/translations/ar.ts) with the same shape and the
 * same QuoteForm passed in as `formSlot`.
 */

export interface QuotePageViewContent {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  infoHeading: string;
  infoItems: string[];
  processHeading: string;
  processSteps: { label: string; text: string }[];
  journeyHeading: string;
  journeyTypes: { label: string; href: string }[];
  complexHeading: string;
  complexText: string;
  resourcesHeading: string;
  resources: { label: string; href: string }[];
}

interface QuotePageViewProps extends QuotePageViewContent {
  crumbs: Crumb[];
  formSlot: ReactNode;
}

export function QuotePageView({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  infoHeading,
  infoItems,
  processHeading,
  processSteps,
  journeyHeading,
  journeyTypes,
  complexHeading,
  complexText,
  resourcesHeading,
  resources,
  crumbs,
  formSlot,
}: QuotePageViewProps) {
  return (
    <>
      {/* Compact image hero — shorter than Contact's, keeps the form above the fold. */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-midnight/65" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/70 to-midnight/45"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
          <Breadcrumbs items={crumbs} onDark />
          <div className="mt-5 h-[3px] w-12 bg-brass" aria-hidden="true" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl">{h1}</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85">{dek}</p>
        </div>
      </section>

      {/* Form-dominant split — the form is the page. */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-brass/30 bg-sand/20 p-6 shadow-sm sm:p-8">
                {formSlot}
              </div>
            </div>

            <div className="lg:col-span-2 lg:pt-1">
              <div className="rounded-xl border border-hairline bg-white p-5">
                <h2 className="text-sm font-bold text-ink">{infoHeading}</h2>
                <ul className="mt-3 space-y-2">
                  {infoItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-bold text-ink">{processHeading}</h2>
                <ol className="mt-3 space-y-4">
                  {processSteps.map((step, i) => (
                    <li key={step.label} className="flex gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-midnight text-[11px] font-bold text-brass">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{step.label}</span>
                        <span className="block text-sm leading-relaxed text-ink-soft">{step.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-bold text-ink">{journeyHeading}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {journeyTypes.map((j) => (
                    <Link
                      key={j.href}
                      href={j.href}
                      className="rounded-lg border border-hairline bg-white px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-brass"
                    >
                      {j.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-hairline bg-sand/30 p-5">
                <h2 className="text-sm font-bold text-ink">{complexHeading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{complexText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning resources — small, contextual, closes the page. */}
      <section className="border-t border-hairline bg-sand/40 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ink">{resourcesHeading}</p>
          <div className="flex flex-wrap gap-2.5">
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
