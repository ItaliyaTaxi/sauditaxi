import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Flag,
  Landmark,
  ShieldCheck,
  Square,
  CheckSquare,
  Users,
  Route as RouteIcon,
} from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";

/**
 * "Journey V2" — the dedicated visual/editorial identity for the long-distance
 * cross-border Journey collection (see data/journey-guide-v2.ts), replacing
 * the old JourneyPageView design. Deliberately distinct from every other
 * /distance/{slug} design on the site:
 *
 * - Distance Guide V2 (components/distance-v2/DistanceGuideV2View.tsx) answers
 *   "how far / how long / what's the road like" with a compact, photo-free
 *   editorial masthead and a proportional distance strip. It still uses the
 *   site's older navy/gold token pair.
 * - The old JourneyPageView used a big stock-photo navy hero and a simple
 *   dot-numbered vertical timeline, also on the old navy/gold tokens.
 * - Commercial /routes/{slug} pages (e.g. GccRouteView, GccToSaudiRouteView)
 *   are booking-focused, with a photo hero, vehicle options and a quote form.
 *
 * Journey V2 instead answers "what is this journey actually like, and how do
 * I plan it" — a premium long-distance planning guide. It's built on the
 * site's current midnight/brass/sand/ink token system (the same system used
 * by the rebuilt homepage, About page, and commercial route families), but
 * with its own signature moves: a photo-free "route line" hero (avoiding the
 * repeated-stock-image problem a 15-page batch with only a handful of real
 * images would otherwise create), a hero stat strip living inside the dark
 * band itself (not a separate white bar below it), and a vertical stage
 * timeline built from square brass-bordered nodes rather than the numbered
 * circles used elsewhere on the site.
 *
 * Block-composed (like DistanceGuideV2View) rather than a fixed section
 * order, specifically so each of the 15 journeys can vary its information
 * architecture — a domestic-feeling airport leg doesn't need the same shape
 * as a genuine capital-to-capital cross-border haul.
 */

export interface JourneyV2Stat {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface JourneyV2Stage {
  label: string;
  detail?: string;
}

export interface JourneyV2Scenario {
  title: string;
  description: string;
}

export interface JourneyV2TransportOption {
  mode: string;
  bestFor: string;
  advantage: string;
  limitation: string;
}

export type JourneyV2Block =
  | {
      type: "prepPanel";
      heading: string;
      items: string[];
    }
  | {
      type: "map";
      heading: string;
      caption: string;
      origin: string;
      destination: string;
    }
  | {
      type: "stages";
      heading: string;
      steps: JourneyV2Stage[];
      note?: string;
    }
  | {
      type: "roadReality";
      heading: string;
      paragraphs: string[];
    }
  | {
      type: "timingReality";
      heading: string;
      pureDriving: string;
      realisticTotal?: string;
      factors: string[];
      note?: string;
    }
  | {
      type: "borderPanel";
      heading: string;
      paragraphs: string[];
      companyHandlesLabel: string;
      companyHandles: string[];
      authorityControlsLabel: string;
      authorityControls: string[];
      documentsNote?: string;
    }
  | {
      type: "arrivalPanel";
      heading: string;
      paragraphs: string[];
    }
  | {
      type: "scenarios";
      heading: string;
      items: JourneyV2Scenario[];
    }
  | {
      type: "transportOptions";
      heading: string;
      options: JourneyV2TransportOption[];
      note?: string;
    }
  | {
      type: "checklist";
      heading: string;
      items: string[];
    }
  | {
      type: "prose";
      heading: string;
      paragraphs: string[];
      narrow?: boolean;
    }
  | {
      type: "relatedLinks";
      heading: string;
      links: { label: string; href: string }[];
    }
  | {
      type: "cta";
      text: string;
      linkLabel: string;
      linkPath: string;
    };

export interface JourneyV2Faq {
  question: string;
  answer: string;
}

export interface JourneyV2Source {
  label: string;
  url: string;
}

export interface JourneyV2Content {
  eyebrow: string;
  dek: string;
  stats: JourneyV2Stat[];
  blocks: JourneyV2Block[];
  faqs: JourneyV2Faq[];
  sources: JourneyV2Source[];
  lastVerified: string;
}

interface JourneyGuideV2ViewProps extends JourneyV2Content {
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

function PrepPanel({ heading, items }: Extract<JourneyV2Block, { type: "prepPanel" }>) {
  return (
    <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{heading}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Square className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
            <span className="text-[15px] leading-relaxed text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function JourneyMap({ heading, caption, origin, destination, from, to }: Extract<JourneyV2Block, { type: "map" }> & { from: string; to: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{heading}</p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-hairline">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
          <iframe
            title={`${from} to ${to} route map`}
            src={`https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-muted">{caption}</p>
    </div>
  );
}

function Stages({ heading, steps, note }: Extract<JourneyV2Block, { type: "stages" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      <ol className="mt-8 space-y-0">
        {steps.map((step, i) => (
          <li key={step.label} className="relative ps-12 pb-8 last:pb-0">
            {i !== steps.length - 1 && (
              <span className="absolute top-8 bottom-0 start-[15px] w-px border-s border-dashed border-brass/50" aria-hidden="true" />
            )}
            <span className="absolute start-0 top-0 flex size-8 items-center justify-center rounded-md border-2 border-brass bg-midnight text-xs font-bold text-brass">
              {i + 1}
            </span>
            <p className="font-semibold text-ink">{step.label}</p>
            {step.detail && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.detail}</p>}
          </li>
        ))}
      </ol>
      {note && <p className="mt-2 text-xs text-ink-muted">{note}</p>}
    </div>
  );
}

function RoadReality({ heading, paragraphs }: Extract<JourneyV2Block, { type: "roadReality" }>) {
  return (
    <div className="rounded-2xl bg-sand/50 p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-midnight text-brass">
          <RouteIcon className="size-4" />
        </span>
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      </div>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function TimingReality({ heading, pureDriving, realisticTotal, factors, note }: Extract<JourneyV2Block, { type: "timingReality" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      <div className={`mt-5 grid gap-6 ${realisticTotal ? "sm:grid-cols-2" : ""}`}>
        <div className="rounded-2xl border border-hairline bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Pure driving time</p>
          <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink">{pureDriving}</p>
        </div>
        {realisticTotal && (
          <div className="rounded-2xl border border-brass/40 bg-brass/[0.08] p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Realistic total journey</p>
            <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink">{realisticTotal}</p>
          </div>
        )}
      </div>
      {factors.length > 0 && (
        <ul className="mt-5 space-y-1.5 text-sm text-ink-soft">
          {factors.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-brass" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      )}
      {note && <p className="mt-3 text-xs text-ink-muted">{note}</p>}
    </div>
  );
}

function BorderPanel({
  heading,
  paragraphs,
  companyHandlesLabel,
  companyHandles,
  authorityControlsLabel,
  authorityControls,
  documentsNote,
}: Extract<JourneyV2Block, { type: "borderPanel" }>) {
  return (
    <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-midnight text-brass">
          <Landmark className="size-4" />
        </span>
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      </div>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-hairline bg-sand/40 p-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            <ShieldCheck className="size-3.5 text-brass" />
            {companyHandlesLabel}
          </p>
          <ul className="mt-2.5 space-y-1.5 text-sm text-ink-soft">
            {companyHandles.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-hairline bg-white p-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            <Landmark className="size-3.5 text-ink-muted" />
            {authorityControlsLabel}
          </p>
          <ul className="mt-2.5 space-y-1.5 text-sm text-ink-soft">
            {authorityControls.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      {documentsNote && <p className="mt-4 text-xs text-ink-muted">{documentsNote}</p>}
    </div>
  );
}

function ArrivalPanel({ heading, paragraphs }: Extract<JourneyV2Block, { type: "arrivalPanel" }>) {
  return (
    <div className="border-s-2 border-brass/50 ps-5">
      <div className="flex items-center gap-2">
        <Flag className="size-4 text-brass" aria-hidden="true" />
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      </div>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function Scenarios({ heading, items }: Extract<JourneyV2Block, { type: "scenarios" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((s) => (
          <div key={s.title} className="rounded-2xl border border-hairline bg-white p-5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-sand text-ink">
              <Users className="size-4" />
            </span>
            <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransportOptions({ heading, options, note }: Extract<JourneyV2Block, { type: "transportOptions" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-hairline text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
              <th className="py-2 pe-4">Option</th>
              <th className="py-2 pe-4">Best for</th>
              <th className="py-2 pe-4">Advantage</th>
              <th className="py-2">Limitation</th>
            </tr>
          </thead>
          <tbody>
            {options.map((o) => (
              <tr key={o.mode} className="border-b border-hairline/70">
                <td className="py-3 pe-4 font-semibold text-ink">{o.mode}</td>
                <td className="py-3 pe-4 text-ink-soft">{o.bestFor}</td>
                <td className="py-3 pe-4 text-ink-soft">{o.advantage}</td>
                <td className="py-3 text-ink-soft">{o.limitation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-xs text-ink-muted">{note}</p>}
    </div>
  );
}

function Checklist({ heading, items }: Extract<JourneyV2Block, { type: "checklist" }>) {
  return (
    <div className="rounded-2xl border border-hairline bg-sand/40 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{heading}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckSquare className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Prose({ heading, paragraphs, narrow }: Extract<JourneyV2Block, { type: "prose" }>) {
  return (
    <div className={narrow ? "max-w-2xl" : ""}>
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function RelatedLinks({ heading, links }: Extract<JourneyV2Block, { type: "relatedLinks" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between gap-2 rounded-xl border border-hairline bg-white p-4 transition-colors hover:border-brass"
          >
            <span className="text-sm font-medium text-ink">{link.label}</span>
            <ArrowRight className="size-4 shrink-0 text-brass transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function CtaLine({ text, linkLabel, linkPath }: Extract<JourneyV2Block, { type: "cta" }>) {
  return (
    <div className="rounded-2xl border border-brass/30 bg-brass/[0.06] p-6">
      <p className="text-[15px] text-ink">
        {text}{" "}
        <Link href={linkPath} className="font-semibold text-ink underline underline-offset-2 hover:text-brass">
          {linkLabel}
        </Link>
      </p>
    </div>
  );
}

function BlockRenderer({ block, from, to }: { block: JourneyV2Block; from: string; to: string }) {
  switch (block.type) {
    case "prepPanel":
      return <PrepPanel {...block} />;
    case "map":
      return <JourneyMap {...block} from={from} to={to} />;
    case "stages":
      return <Stages {...block} />;
    case "roadReality":
      return <RoadReality {...block} />;
    case "timingReality":
      return <TimingReality {...block} />;
    case "borderPanel":
      return <BorderPanel {...block} />;
    case "arrivalPanel":
      return <ArrivalPanel {...block} />;
    case "scenarios":
      return <Scenarios {...block} />;
    case "transportOptions":
      return <TransportOptions {...block} />;
    case "checklist":
      return <Checklist {...block} />;
    case "prose":
      return <Prose {...block} />;
    case "relatedLinks":
      return <RelatedLinks {...block} />;
    case "cta":
      return <CtaLine {...block} />;
    default:
      return null;
  }
}

export function JourneyGuideV2View({
  h1,
  from,
  to,
  crumbs,
  eyebrow,
  dek,
  stats,
  blocks,
  faqs,
  sources,
  lastVerified,
  labels,
}: JourneyGuideV2ViewProps) {
  return (
    <>
      {/* ── Photo-free "route line" hero — the signature Journey V2 move ── */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-brass/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-brass/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1100px] px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36">
          <Breadcrumbs items={crumbs} onDark />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brass">{eyebrow}</p>

          {/* Route line: origin — line — destination */}
          <div className="mt-4 flex items-center gap-3 sm:gap-4">
            <span className="text-lg font-bold sm:text-xl">{from}</span>
            <span className="relative h-px flex-1 bg-gradient-to-r from-brass/70 via-brass/40 to-brass/70">
              <Compass className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 text-brass rtl:scale-x-[-1]" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold sm:text-xl">{to}</span>
          </div>

          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80">{dek}</p>

          {/* Hero stat strip — lives inside the dark band, not a separate white bar */}
          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((s) => (
              <span
                key={s.label}
                className={`inline-flex flex-col rounded-xl border px-4 py-2.5 ${
                  s.emphasis ? "border-brass/50 bg-brass/15" : "border-white/15 bg-white/5"
                }`}
              >
                <span className="text-[11px] font-medium uppercase tracking-wide text-white/60">{s.label}</span>
                <span className="text-base font-bold text-white">{s.value}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-14 py-14 sm:space-y-16 sm:py-16">
          {blocks.map((block, i) => (
            <div key={`${block.type}-${i}`}>
              <BlockRenderer block={block} from={from} to={to} />
            </div>
          ))}
        </div>
      </div>

      <FAQSection faqs={faqs} heading={labels.faqHeading} background="muted" />

      <div className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">{labels.sourcesHeading}</p>
        <ul className="mt-3 space-y-1.5 text-xs text-ink-muted">
          {sources.map((s) => (
            <li key={s.url} className="flex items-start gap-1.5">
              <ArrowRight className="mt-0.5 size-3 shrink-0 rtl:rotate-180" />
              <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline decoration-dotted hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-muted">
          {labels.sourceFootnote} {lastVerified}.
        </p>
      </div>
    </>
  );
}
