import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Luggage,
  ShieldCheck,
  Ship,
  TrainFront,
  Building2,
  Compass,
  Car,
  CircleCheck,
} from "lucide-react";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import type { Faq } from "@/data/faqs";

/** The five editorial identities this view composes for — drives icon/eyebrow
 * choice only; the actual information architecture comes from `blocks`. */
export type PointTransferV2Category =
  | "hotel"
  | "attraction"
  | "port"
  | "railway"
  | "service";

export interface PointTransferV2Stat {
  label: string;
  value: string;
  emphasis?: boolean;
}

export interface PointTransferV2TransportOption {
  mode: string;
  bestFor: string;
  advantage: string;
  limitation: string;
}

export interface PointTransferV2Scenario {
  title: string;
  description: string;
}

export type PointTransferV2Block =
  | {
      /** Short "before you travel" panel — verified prep facts only. */
      type: "prepPanel";
      heading: string;
      items: string[];
    }
  | {
      /** Main prose explaining the transfer itself — the universal anchor block. */
      type: "journeyOverview";
      heading: string;
      paragraphs: string[];
    }
  | {
      /** Pickup / meet-and-greet / luggage specifics — Type A (hotel) leans on this. */
      type: "pickupPlanning";
      heading: string;
      paragraphs: string[];
      points?: string[];
    }
  | {
      /** What the origin/destination actually is and why travellers go — Type
       * B/C/D. `image` renders only when a genuine, verified photo exists —
       * never a generic stock substitute. */
      type: "locationContext";
      heading: string;
      paragraphs: string[];
      image?: { src: string; alt: string };
    }
  | {
      /** Distance/duration + timing considerations specific to the transfer type
       * (flight tracking, cruise embarkation window, train departure buffer,
       * prayer-time traffic) — never invents exact schedules/fees. */
      type: "timingPanel";
      heading: string;
      stats?: PointTransferV2Stat[];
      paragraphs: string[];
      note?: string;
    }
  | {
      /** Vehicle selection guidance — passengers, luggage, group size. */
      type: "vehiclePlanning";
      heading: string;
      paragraphs: string[];
    }
  | {
      /** Objective mode comparison — only included where more than one mode
       * genuinely applies. Never declares the company's service "best". */
      type: "transportComparison";
      heading: string;
      options: PointTransferV2TransportOption[];
      note?: string;
    }
  | {
      /** Route-specific traveller scenarios — not copy-pasted across pages. */
      type: "scenarios";
      heading: string;
      items: PointTransferV2Scenario[];
    }
  | {
      type: "checklist";
      heading: string;
      items: string[];
    }
  | {
      /** Concise booking steps, adapted to how this transfer is actually booked. */
      type: "bookingSteps";
      heading: string;
      steps: string[];
    }
  | {
      type: "relatedLinks";
      heading: string;
      links: { label: string; href: string }[];
    };

export interface PointTransferV2Content {
  category: PointTransferV2Category;
  eyebrow: string;
  dek: string;
  stats: PointTransferV2Stat[];
  blocks: PointTransferV2Block[];
  faqs: Faq[];
}

const categoryMeta: Record<
  PointTransferV2Category,
  { icon: typeof Building2; label: string }
> = {
  hotel: { icon: Building2, label: "Hotel Transfer" },
  attraction: { icon: Compass, label: "Attraction Transfer" },
  port: { icon: Ship, label: "Port Transfer" },
  railway: { icon: TrainFront, label: "Railway Transfer" },
  service: { icon: Car, label: "Chauffeur Service" },
};

interface Crumb {
  name: string;
  path: string;
}

export interface PointTransferV2Labels {
  faqHeading: string;
  quoteHeading: string;
  quoteSubheading: string;
}

export function PointTransferV2View({
  h1,
  from,
  to,
  isPointToPoint = true,
  crumbs,
  cityName,
  serviceType,
  areaServed,
  quoteServiceType,
  whatsappMessage,
  latestGuidesKey,
  content,
  labels,
}: {
  h1: string;
  from: string;
  to: string;
  /** false for named-offering "service" pages (e.g. "Private Chauffeur Service"),
   * which read as a single destination, not an A → B pair. */
  isPointToPoint?: boolean;
  crumbs: Crumb[];
  cityName: string;
  serviceType: string;
  areaServed: string;
  quoteServiceType: string;
  whatsappMessage: string;
  latestGuidesKey: string;
  content: PointTransferV2Content;
  labels: PointTransferV2Labels;
}) {
  const meta = categoryMeta[content.category];
  const Icon = meta.icon;
  const faqs = content.faqs.slice(0, 20);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: isPointToPoint ? `${from} to ${to} Transfer` : h1,
            description: content.dek,
            path: crumbs[crumbs.length - 1].path,
            serviceType,
            areaServed,
          }),
          faqSchema(faqs),
        ]}
      />

      {/* ── Hero — deliberately photo-free for a consistent identity across
          all 61 pages (real per-location photos, where they exist, live
          inside the locationContext block instead). ── */}
      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="text-white/85">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            <Icon className="size-3.5" />
            {meta.label} · {content.eyebrow}
          </p>

          {isPointToPoint && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">{from}</span>
              <ArrowRight className="size-4 shrink-0 text-brass rtl:rotate-180" />
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">{to}</span>
            </div>
          )}

          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">{content.dek}</p>

          {content.stats.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {content.stats.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl border px-4 py-2.5 ${
                    s.emphasis ? "border-brass/40 bg-brass/10" : "border-white/15 bg-white/5"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-wide text-white/55">{s.label}</p>
                  <p className={`text-sm font-semibold ${s.emphasis ? "text-brass" : "text-white"}`}>
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Body + booking sidebar ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-12 lg:col-span-3">
            {content.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-hairline bg-sand/30 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-ink">{labels.quoteHeading}</h2>
              <p className="mt-1 text-sm text-ink-soft">{labels.quoteSubheading}</p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={quoteServiceType}
                  city={cityName}
                  route={isPointToPoint ? `${from} to ${to}` : h1}
                  defaultPickup={isPointToPoint ? from : undefined}
                  defaultDropoff={isPointToPoint ? to : undefined}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />
      <FAQSection faqs={faqs} heading={labels.faqHeading} background="muted" />
      <LatestGuides background="white" pageKey={latestGuidesKey} />
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{children}</h2>;
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-brass [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-ink">
      {paragraphs.map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: PointTransferV2Block }) {
  switch (block.type) {
    case "prepPanel":
      return (
        <div className="rounded-2xl border border-hairline bg-sand/40 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-base font-bold text-ink">
            <ShieldCheck className="size-4 text-brass" />
            {block.heading}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-brass" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "journeyOverview":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <Prose paragraphs={block.paragraphs} />
        </div>
      );

    case "locationContext":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          {block.image && (
            <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-sand/40">
              <Image src={block.image.src} alt={block.image.alt} fill className="object-cover" />
            </div>
          )}
          <Prose paragraphs={block.paragraphs} />
        </div>
      );

    case "pickupPlanning":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <Prose paragraphs={block.paragraphs} />
          {block.points && block.points.length > 0 && (
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {block.points.map((p) => (
                <li key={p} className="flex items-start gap-2 rounded-xl border border-hairline bg-white p-3.5 text-sm text-ink-soft">
                  <Luggage className="mt-0.5 size-4 shrink-0 text-brass" />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "timingPanel":
      return (
        <div className="rounded-2xl border border-hairline bg-white p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-base font-bold text-ink">
            <Clock className="size-4 text-brass" />
            {block.heading}
          </h2>
          {block.stats && block.stats.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {block.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-sand/40 px-4 py-2">
                  <p className="text-[11px] uppercase tracking-wide text-ink-muted">{s.label}</p>
                  <p className="text-sm font-semibold text-ink">{s.value}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
            {block.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {block.note && <p className="mt-4 border-t border-hairline pt-4 text-xs text-ink-muted">{block.note}</p>}
        </div>
      );

    case "vehiclePlanning":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <Prose paragraphs={block.paragraphs} />
        </div>
      );

    case "transportComparison":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-xl border border-hairline text-sm">
              <thead>
                <tr className="bg-sand/40 text-left text-ink">
                  <th className="p-3 font-semibold">Mode</th>
                  <th className="p-3 font-semibold">Best for</th>
                  <th className="p-3 font-semibold">Advantage</th>
                  <th className="p-3 font-semibold">Limitation</th>
                </tr>
              </thead>
              <tbody>
                {block.options.map((o) => (
                  <tr key={o.mode} className="border-t border-hairline">
                    <td className="p-3 font-medium text-ink">{o.mode}</td>
                    <td className="p-3 text-ink-soft">{o.bestFor}</td>
                    <td className="p-3 text-ink-soft">{o.advantage}</td>
                    <td className="p-3 text-ink-soft">{o.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className="mt-3 text-xs text-ink-muted">{block.note}</p>}
        </div>
      );

    case "scenarios":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {block.items.map((s) => (
              <div key={s.title} className="rounded-xl border border-hairline bg-sand/30 p-5">
                <p className="text-sm font-semibold text-ink">{s.title}</p>
                <p className="mt-1.5 text-sm text-ink-soft">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "checklist":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <ul className="mt-4 space-y-2.5">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-brass" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "bookingSteps":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <ol className="mt-4 space-y-3">
            {block.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brass/15 text-xs font-bold text-brass">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      );

    case "relatedLinks":
      return (
        <div>
          <SectionHeading>{block.heading}</SectionHeading>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {block.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between gap-2 rounded-xl border border-hairline bg-white p-4 text-sm font-semibold text-ink transition-colors hover:border-brass/50"
              >
                {l.label}
                <ArrowRight className="size-4 shrink-0 text-brass rtl:rotate-180" />
              </Link>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
