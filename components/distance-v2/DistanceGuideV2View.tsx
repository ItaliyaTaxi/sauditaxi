import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";

/**
 * "Road Distance Guide V2" — a third, deliberately distinct visual design
 * for a small batch of informational /distance/{slug} pages, alongside the
 * original template (app/(main)/distance/[slug]/page.tsx's default render
 * path, data/distance-pages.ts) and the "rich journey" design
 * (components/journey/JourneyPageView.tsx, data/journey-pages.ts). Every
 * other distance page renders exactly as before — this is additive only.
 *
 * Editorial / research-guide language: a compact masthead instead of a big
 * image hero, a data-driven proportional distance strip, figure-caption
 * style map, and a module vocabulary (stages, profile, time-reality,
 * planning notes) that has no visual overlap with the other two designs.
 * Shared between the English route (app/(main)/distance/[slug]/page.tsx)
 * and the Arabic route (app/ar/[...slug]/page.tsx) — all directional
 * markup uses rtl: variants.
 */

export interface DistanceGuideV2Fact {
  label: string;
  value: string;
}

export interface DistanceGuideV2Segment {
  from: string;
  to: string;
  /** Verified km for this segment, or null when no reliable figure exists
   * (in which case the segment renders without a proportional bar weight). */
  km: number | null;
  displayValue: string;
}

export interface DistanceGuideV2Stage {
  label: string;
  detail?: string;
}

export type DistanceGuideV2Block =
  | {
      type: "distanceStrip";
      heading: string;
      segments: DistanceGuideV2Segment[];
      totalLabel: string;
      note?: string;
    }
  | {
      type: "map";
      heading: string;
      caption: string;
      origin: string;
      destination: string;
    }
  | {
      type: "profile";
      heading: string;
      layout: "strip" | "split" | "table" | "bignumber";
      items: DistanceGuideV2Fact[];
    }
  | {
      type: "stages";
      heading: string;
      steps: DistanceGuideV2Stage[];
      note?: string;
    }
  | {
      type: "timeReality";
      heading: string;
      pureDriving: string;
      totalJourney?: string;
      factors: string[];
      note?: string;
    }
  | {
      type: "borderNote";
      heading: string;
      paragraphs: string[];
    }
  | {
      type: "prose";
      heading: string;
      paragraphs: string[];
      narrow?: boolean;
    }
  | {
      type: "planningNotes";
      heading: string;
      items: { question: string; answer: string }[];
    }
  | {
      type: "contextCard";
      heading: string;
      paragraphs: string[];
    }
  | {
      type: "relatedInfo";
      heading: string;
      paragraph: string;
    }
  | {
      type: "cta";
      text: string;
      linkLabel: string;
      linkPath: string;
    };

export interface DistanceGuideV2Faq {
  question: string;
  answer: string;
}

export interface DistanceGuideV2Source {
  label: string;
  url: string;
}

export interface DistanceGuideV2Content {
  eyebrow: string;
  dek: string;
  blocks: DistanceGuideV2Block[];
  faqs: DistanceGuideV2Faq[];
  sources: DistanceGuideV2Source[];
  lastVerified: string;
}

interface DistanceGuideV2ViewProps extends DistanceGuideV2Content {
  h1: string;
  from: string;
  to: string;
  crumbs: Crumb[];
  labels: {
    faqHeading: string;
    sourcesHeading: string;
    sourceFootnote: string;
  };
}

function DistanceStrip({ heading, segments, totalLabel, note }: Extract<DistanceGuideV2Block, { type: "distanceStrip" }>) {
  const knownTotal = segments.reduce((sum, s) => sum + (s.km ?? 0), 0);
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <p className="mt-2 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">{totalLabel}</p>
      <div className="mt-6 flex flex-col gap-0 sm:flex-row sm:items-stretch">
        {segments.map((seg, i) => {
          const weight = seg.km && knownTotal ? Math.max(seg.km / knownTotal, 0.18) : 1 / segments.length;
          return (
            <div key={`${seg.from}-${seg.to}`} className="flex flex-1 flex-col" style={{ flexGrow: weight }}>
              <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                <span>{seg.from}</span>
              </div>
              <div className="relative my-2 h-px bg-gradient-to-r from-gold via-gold to-gold/40">
                <ArrowRight className="absolute -top-[7px] end-0 size-3.5 text-gold rtl:rotate-180" aria-hidden="true" />
              </div>
              <p className="text-xs text-muted-foreground">{seg.displayValue}</p>
              {i === segments.length - 1 && (
                <p className="mt-1 text-sm font-semibold text-navy">{seg.to}</p>
              )}
            </div>
          );
        })}
      </div>
      {note && <p className="mt-4 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

function MapFigure({ heading, caption, origin, destination, from, to }: Extract<DistanceGuideV2Block, { type: "map" }> & { from: string; to: string }) {
  return (
    <figure>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/8]">
          <iframe
            title={`${from} to ${to} route map`}
            src={`https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
      <figcaption className="mt-2 text-xs italic text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Profile({ heading, layout, items }: Extract<DistanceGuideV2Block, { type: "profile" }>) {
  if (layout === "bignumber") {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (layout === "split") {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
        <dl className="mt-4 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="text-sm font-semibold text-navy">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }
  if (layout === "table") {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <tbody>
              {items.map((item, i) => (
                <tr key={item.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="px-3 py-2.5 text-muted-foreground">{item.label}</td>
                  <td className="px-3 py-2.5 text-end font-semibold text-navy">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  // strip (default): horizontal scroll row divided by borders
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <div className="mt-4 flex flex-wrap divide-x divide-border overflow-hidden rounded-lg border border-border rtl:divide-x-reverse">
        {items.map((item) => (
          <div key={item.label} className="min-w-[9rem] flex-1 px-4 py-3.5">
            <p className="text-sm font-semibold text-navy">{item.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stages({ heading, steps, note }: Extract<DistanceGuideV2Block, { type: "stages" }>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <ol className="mt-5 space-y-5">
        {steps.map((step, i) => (
          <li key={step.label} className="border-s-2 border-gold/50 ps-4">
            <p className="font-mono text-xs font-semibold text-gold">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 font-semibold text-navy">{step.label}</p>
            {step.detail && <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>}
          </li>
        ))}
      </ol>
      {note && <p className="mt-4 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

function TimeReality({ heading, pureDriving, totalJourney, factors, note }: Extract<DistanceGuideV2Block, { type: "timeReality" }>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <div className={`mt-4 grid gap-6 ${totalJourney ? "sm:grid-cols-2" : ""}`}>
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-navy">{pureDriving}</p>
          <p className="mt-1 text-xs text-muted-foreground">Pure driving time, free-flowing conditions</p>
        </div>
        {totalJourney && (
          <div>
            <p className="text-2xl font-extrabold tracking-tight text-navy">{totalJourney}</p>
            <p className="mt-1 text-xs text-muted-foreground">Realistic total, including likely stops</p>
          </div>
        )}
      </div>
      {factors.length > 0 && (
        <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
          {factors.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      )}
      {note && <p className="mt-3 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

function BorderNote({ heading, paragraphs }: Extract<DistanceGuideV2Block, { type: "borderNote" }>) {
  return (
    <div className="rounded-lg bg-muted/50 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function Prose({ heading, paragraphs, narrow }: Extract<DistanceGuideV2Block, { type: "prose" }>) {
  return (
    <div className={narrow ? "max-w-2xl" : ""}>
      <h2 className="text-lg font-bold text-navy">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-[1.75] text-muted-foreground [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

function PlanningNotes({ heading, items }: Extract<DistanceGuideV2Block, { type: "planningNotes" }>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <div className="mt-4 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="bg-white p-4">
            <p className="text-sm font-semibold text-navy">{item.question}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContextCard({ heading, paragraphs }: Extract<DistanceGuideV2Block, { type: "contextCard" }>) {
  return (
    <div className="border-s-2 border-navy/20 ps-5">
      <h2 className="text-lg font-bold text-navy">{heading}</h2>
      <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function RelatedInfo({ heading, paragraph }: Extract<DistanceGuideV2Block, { type: "relatedInfo" }>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{heading}</p>
      <p
        className="mt-3 text-[15px] leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    </div>
  );
}

function CtaLine({ text, linkLabel, linkPath }: Extract<DistanceGuideV2Block, { type: "cta" }>) {
  return (
    <div className="border-t border-border pt-6">
      <p className="text-[15px] text-navy">
        {text}{" "}
        <Link href={linkPath} className="font-semibold text-navy underline underline-offset-2 hover:text-gold">
          {linkLabel}
        </Link>
      </p>
    </div>
  );
}

function BlockRenderer({ block, from, to }: { block: DistanceGuideV2Block; from: string; to: string }) {
  switch (block.type) {
    case "distanceStrip":
      return <DistanceStrip {...block} />;
    case "map":
      return <MapFigure {...block} from={from} to={to} />;
    case "profile":
      return <Profile {...block} />;
    case "stages":
      return <Stages {...block} />;
    case "timeReality":
      return <TimeReality {...block} />;
    case "borderNote":
      return <BorderNote {...block} />;
    case "prose":
      return <Prose {...block} />;
    case "planningNotes":
      return <PlanningNotes {...block} />;
    case "contextCard":
      return <ContextCard {...block} />;
    case "relatedInfo":
      return <RelatedInfo {...block} />;
    case "cta":
      return <CtaLine {...block} />;
    default:
      return null;
  }
}

export function DistanceGuideV2View({
  h1,
  from,
  to,
  crumbs,
  eyebrow,
  dek,
  blocks,
  faqs,
  sources,
  lastVerified,
  labels,
}: DistanceGuideV2ViewProps) {
  return (
    <>
      {/* ── Compact editorial masthead — no image hero, no booking CTA ── */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
          <h1 className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
            <span>{from}</span>
            <ArrowRight className="size-6 shrink-0 text-muted-foreground rtl:rotate-180" aria-hidden="true" />
            <span>{to}</span>
          </h1>
          <p className="mt-1.5 text-sm font-medium text-muted-foreground">{h1}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{dek}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 py-12 sm:py-14">
          {blocks.map((block, i) => (
            <div key={`${block.type}-${i}`}>
              <BlockRenderer block={block} from={from} to={to} />
            </div>
          ))}
        </div>
      </div>

      <FAQSection faqs={faqs} heading={labels.faqHeading} background="muted" />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{labels.sourcesHeading}</p>
        <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
          {sources.map((s) => (
            <li key={s.url} className="flex items-start gap-1.5">
              <ExternalLink className="mt-0.5 size-3 shrink-0" />
              <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-dotted hover:text-navy">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          {labels.sourceFootnote} {lastVerified}.
        </p>
      </div>
    </>
  );
}
