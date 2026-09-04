import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/** Premium About hero — new design system, real photography, one H1. */
export function AboutHero({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <Image
        src="/images/heroes/intercity.webp"
        alt="A private vehicle on a Saudi Arabia highway"
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
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brass">Our Company</p>
        <h1 className="mt-5 max-w-2xl text-[2.25rem] font-bold leading-[1.08] tracking-tight drop-shadow-sm sm:text-5xl">
          About Saudi Private Transfers
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          We provide private chauffeur and transfer services for travellers moving between
          airports, cities, hotels and destinations across Saudi Arabia, and selected
          cross-border journeys into the GCC.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 rounded-xl bg-brass px-7 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
          >
            Get a Quote
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
          <Link
            href="/intercity-transfers"
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Explore Our Routes
          </Link>
        </div>
      </div>
    </section>
  );
}
