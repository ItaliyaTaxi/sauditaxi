import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceBody, type ServiceBlock } from "@/components/services/ServiceBlocks";

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceV2Content {
  eyebrow: string;
  h1: string;
  dek: string;
  heroImage: string;
  heroAlt: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  blocks: ServiceBlock[];
  faqs: ServiceFaqItem[];
  finalCtaHeading: string;
  finalCtaText: string;
}

interface ServiceV2ViewProps extends ServiceV2Content {
  crumbs: Crumb[];
  labels: {
    faqHeading: string;
  };
}

/**
 * Shared view for the 8 rebuilt service pages — one component, used by both
 * the English route files and the Arabic catch-all (type: "serviceV2" in
 * data/translations/ar.ts), each fed a different ordered `blocks` array so
 * the 8 pages don't share one fixed section sequence. Self-contained hero
 * (not the shared PageHeader/HeroSection) so this new design doesn't touch
 * any other page's rendering.
 */
export function ServiceV2View({
  eyebrow,
  h1,
  dek,
  heroImage,
  heroAlt,
  primaryCtaLabel,
  secondaryCtaLabel,
  secondaryCtaHref,
  blocks,
  faqs,
  finalCtaHeading,
  finalCtaText,
  crumbs,
  labels,
}: ServiceV2ViewProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-midnight text-white">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-midnight/55" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/75 to-midnight/35"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1280px] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brass">{eyebrow}</p>
          <h1 className="mt-5 max-w-2xl text-[2.1rem] font-bold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{dek}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-xl bg-brass px-7 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
            >
              {primaryCtaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ServiceBody blocks={blocks} />
      </div>

      <FAQSection faqs={faqs} heading={labels.faqHeading} background="muted" />

      <section className="bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{finalCtaHeading}</h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">{finalCtaText}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-xl bg-brass px-7 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
            >
              {primaryCtaLabel}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
