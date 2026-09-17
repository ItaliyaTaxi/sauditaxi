import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HomeSectionCard {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}

/**
 * Shared "H2 + short intro + grid of H3 cards" pattern used across most of
 * the homepage's service/location sections (airport, Umrah & Hajj, day
 * trips, chauffeur, cross-border, locations, vehicles, benefits). Keeps the
 * heading hierarchy consistent (one H2, each card titled with an H3) without
 * duplicating the same section markup in half a dozen files.
 */
export function HomeSectionCards({
  eyebrow,
  heading,
  intro,
  cards,
  columns = 2,
  tone = "white",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  cards: HomeSectionCard[];
  columns?: 2 | 3 | 4;
  tone?: "white" | "sand" | "midnight";
}) {
  const isDark = tone === "midnight";
  const sectionBg = tone === "sand" ? "bg-sand" : tone === "midnight" ? "bg-midnight" : "bg-white";
  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";

  return (
    <section className={cn(sectionBg, "py-16 sm:py-24", isDark && "text-white")}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">{eyebrow}</p>
          <h2 className={cn("mt-3 text-3xl font-bold tracking-tight sm:text-4xl", isDark ? "text-white" : "text-ink")}>
            {heading}
          </h2>
          {intro && (
            <p className={cn("mt-4 text-base leading-relaxed", isDark ? "text-white/70" : "text-ink-soft")}>
              {intro}
            </p>
          )}
        </div>

        <div className={cn("mt-10 grid gap-4", gridCols)}>
          {cards.map((card) => {
            const content = (
              <>
                <h3 className={cn("font-semibold", isDark ? "text-white" : "text-ink")}>{card.title}</h3>
                <p className={cn("mt-2 text-sm leading-relaxed", isDark ? "text-white/65" : "text-ink-soft")}>
                  {card.body}
                </p>
                {card.href && (
                  <span
                    className={cn(
                      "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold",
                      isDark ? "text-brass" : "text-midnight group-hover:text-brass"
                    )}
                  >
                    {card.linkLabel ?? "Learn more"}
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </span>
                )}
              </>
            );

            const cardClass = cn(
              "group flex flex-col rounded-2xl border p-6 transition-colors",
              isDark ? "border-white/15 bg-white/5 hover:border-brass/60" : "border-hairline bg-sand/40 hover:border-brass"
            );

            return card.href ? (
              <Link key={card.title} href={card.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={card.title} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
