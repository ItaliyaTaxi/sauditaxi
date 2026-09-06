import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

/** Author/E-E-A-T box shown beneath the article body. */
export function AuthorBox({ author }: { author: string }) {
  return (
    <div className="mt-12 flex items-start gap-4 rounded-2xl border border-hairline bg-sand/30 p-5">
      <Image
        src="/images/logo.webp"
        alt={`${siteConfig.name} logo`}
        width={112}
        height={112}
        className="size-14 shrink-0 rounded-full bg-midnight object-contain p-1"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Written by
        </p>
        <p className="text-base font-bold text-ink">{author}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          {siteConfig.name} operates private taxi and transfer services across Saudi Arabia —
          airports, Makkah and Madinah, intercity routes, and border crossings — helping pilgrims
          and travellers move comfortably and reliably. Our guides are written to make your journey
          easier.
        </p>
        <Link
          href="/about"
          className="mt-2 inline-block text-sm font-semibold text-ink underline hover:text-brass"
        >
          About us
        </Link>
      </div>
    </div>
  );
}
