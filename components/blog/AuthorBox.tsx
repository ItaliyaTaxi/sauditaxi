import Link from "next/link";
import { siteConfig } from "@/lib/site";

/** Author/E-E-A-T box shown beneath the article body. */
export function AuthorBox({ author }: { author: string }) {
  return (
    <div className="mt-12 flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.png"
        alt={`${siteConfig.name} logo`}
        className="size-14 shrink-0 rounded-full bg-navy object-contain p-1"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Written by
        </p>
        <p className="text-base font-bold text-navy">{author}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {siteConfig.name} operates private taxi and transfer services across Saudi Arabia —
          airports, Makkah and Madinah, intercity routes, and border crossings — helping pilgrims
          and travellers move comfortably and reliably. Our guides are written to make your journey
          easier.
        </p>
        <Link
          href="/about"
          className="mt-2 inline-block text-sm font-semibold text-navy underline hover:text-gold"
        >
          About us
        </Link>
      </div>
    </div>
  );
}
