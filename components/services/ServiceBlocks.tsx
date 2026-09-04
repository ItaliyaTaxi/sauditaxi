import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

/**
 * Shared block vocabulary for the 8 rebuilt service pages (English) and
 * their Arabic counterparts (type: "serviceV2" in data/translations/ar.ts).
 * Each page composes a different subset/order of these blocks — see the
 * per-page data files under data/service-pages-v2/ — rather than all 8
 * sharing one fixed section sequence. Mirrors the pattern already
 * established for routes (components/routes/RouteBlocks.tsx) and distance
 * guides (components/distance-v2/DistanceGuideV2View.tsx).
 */

export interface ServiceStep {
  label: string;
  detail?: string;
}

export interface ServiceFact {
  label: string;
  value: string;
}

export interface ServiceRouteExample {
  from: string;
  to: string;
  distance: string;
  duration: string;
  href: string;
  note: string;
}

export interface ServiceLinkItem {
  label: string;
  href: string;
}

export interface ServiceAudience {
  title: string;
  detail: string;
}

export type ServiceBlock =
  | { type: "prose"; heading: string; paragraphs: string[]; narrow?: boolean }
  | {
      type: "comparisonTable";
      heading: string;
      intro?: string;
      columns: string[];
      rows: { criterion: string; values: string[] }[];
      note?: string;
    }
  | { type: "audienceGrid"; heading: string; items: ServiceAudience[] }
  | {
      type: "timeline";
      heading: string;
      orientation: "vertical" | "horizontal";
      steps: ServiceStep[];
      note?: string;
    }
  | {
      type: "imageBand";
      heading: string;
      paragraphs: string[];
      image: string;
      alt: string;
      imageSide?: "start" | "end";
    }
  | { type: "facts"; heading: string; items: ServiceFact[] }
  | {
      type: "routeCards";
      heading: string;
      intro?: string;
      routes: ServiceRouteExample[];
    }
  | { type: "checklist"; heading: string; intro?: string; items: string[] }
  | {
      type: "authorityNote";
      heading: string;
      weHandle: { heading: string; items: string[] };
      authoritiesControl: { heading: string; items: string[] };
      note?: string;
    }
  | { type: "linkGrid"; heading: string; items: ServiceLinkItem[] }
  | { type: "relatedInfo"; heading: string; paragraph: string }
  | { type: "cta"; text: string; linkLabel: string; linkPath: string };

function Prose({ heading, paragraphs, narrow }: Extract<ServiceBlock, { type: "prose" }>) {
  return (
    <div className={narrow ? "max-w-2xl" : ""}>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-midnight [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brass">
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

function ComparisonTable({ heading, intro, columns, rows, note }: Extract<ServiceBlock, { type: "comparisonTable" }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-ink-soft">{intro}</p>}
      <div className="mt-5 overflow-x-auto rounded-xl border border-hairline">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-midnight text-white">
              <th className="px-4 py-3 text-start font-semibold">Consideration</th>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 text-start font-semibold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-sand/40"}>
                <td className="px-4 py-3 font-medium text-ink">{row.criterion}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="px-4 py-3 text-ink-soft">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-xs text-ink-muted">{note}</p>}
    </div>
  );
}

function AudienceGrid({ heading, items }: Extract<ServiceBlock, { type: "audienceGrid" }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-hairline bg-white p-5">
            <p className="font-semibold text-ink">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ heading, orientation, steps, note }: Extract<ServiceBlock, { type: "timeline" }>) {
  if (orientation === "horizontal") {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
        <ol className="mt-6 flex min-w-max items-stretch gap-2 overflow-x-auto pb-1 sm:min-w-0 sm:flex-wrap">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-2">
              <div className="w-40 rounded-xl border border-hairline bg-sand/50 px-3.5 py-3 sm:w-44">
                <p className="text-xs font-semibold text-ink">{step.label}</p>
                {step.detail && <p className="mt-1 text-[11px] leading-snug text-ink-soft">{step.detail}</p>}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="size-4 shrink-0 text-brass rtl:rotate-180" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        {note && <p className="mt-3 text-sm text-ink-soft">{note}</p>}
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      <ol className="mt-7 space-y-0">
        {steps.map((step, i) => (
          <li key={step.label} className="relative ps-10 pb-7 last:pb-0">
            {i !== steps.length - 1 && (
              <span className="absolute top-8 bottom-0 start-[15px] w-px bg-hairline" aria-hidden="true" />
            )}
            <span className="absolute start-0 top-0 flex size-8 items-center justify-center rounded-full bg-midnight text-sm font-bold text-brass">
              {i + 1}
            </span>
            <p className="font-semibold text-ink">{step.label}</p>
            {step.detail && <p className="mt-1 text-sm text-ink-soft">{step.detail}</p>}
          </li>
        ))}
      </ol>
      {note && <p className="mt-2 text-sm text-ink-soft">{note}</p>}
    </div>
  );
}

function ImageBand({ heading, paragraphs, image, alt, imageSide = "end" }: Extract<ServiceBlock, { type: "imageBand" }>) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={imageSide === "start" ? "lg:order-2" : ""}>
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div className={`relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 ${imageSide === "start" ? "lg:order-1" : ""}`}>
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
}

function Facts({ heading, items }: Extract<ServiceBlock, { type: "facts" }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      <div className="mt-5 flex flex-wrap divide-x divide-hairline overflow-hidden rounded-xl border border-hairline rtl:divide-x-reverse">
        {items.map((item) => (
          <div key={item.label} className="min-w-[9rem] flex-1 px-4 py-3.5">
            <p className="text-sm font-semibold text-ink">{item.value}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RouteCards({ heading, intro, routes }: Extract<ServiceBlock, { type: "routeCards" }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-ink-soft">{intro}</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group flex flex-col justify-between rounded-2xl border border-hairline bg-white p-5 transition-colors hover:border-brass"
          >
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span>{r.from}</span>
                <ArrowRight className="size-3.5 shrink-0 text-brass rtl:rotate-180" aria-hidden="true" />
                <span>{r.to}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.note}</p>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-muted">
              {r.distance} · {r.duration}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Checklist({ heading, intro, items }: Extract<ServiceBlock, { type: "checklist" }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-ink-soft">{intro}</p>}
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink">
            <Check className="mt-0.5 size-4 shrink-0 text-brass" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AuthorityNote({ heading, weHandle, authoritiesControl, note }: Extract<ServiceBlock, { type: "authorityNote" }>) {
  return (
    <div className="rounded-2xl border border-hairline bg-sand/50 p-6 sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brass">{weHandle.heading}</p>
          <ul className="mt-3 space-y-2">
            {weHandle.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{authoritiesControl.heading}</p>
          <ul className="mt-3 space-y-2">
            {authoritiesControl.items.map((item) => (
              <li key={item} className="text-sm text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {note && <p className="mt-6 text-xs text-ink-muted">{note}</p>}
    </div>
  );
}

function LinkGrid({ heading, items }: Extract<ServiceBlock, { type: "linkGrid" }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{heading}</h2>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brass"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function RelatedInfo({ heading, paragraph }: Extract<ServiceBlock, { type: "relatedInfo" }>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">{heading}</p>
      <p
        className="mt-3 text-[15px] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-midnight [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brass"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    </div>
  );
}

function CtaLine({ text, linkLabel, linkPath }: Extract<ServiceBlock, { type: "cta" }>) {
  return (
    <div className="rounded-2xl border border-brass/30 bg-brass/[0.06] p-6 sm:p-7">
      <p className="text-[15px] text-ink">{text}</p>
      <Link
        href={linkPath}
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-midnight px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-midnight-soft"
      >
        {linkLabel}
        <ArrowRight className="size-4 rtl:rotate-180" />
      </Link>
    </div>
  );
}

export function ServiceBlockRenderer({ block }: { block: ServiceBlock }) {
  switch (block.type) {
    case "prose":
      return <Prose {...block} />;
    case "comparisonTable":
      return <ComparisonTable {...block} />;
    case "audienceGrid":
      return <AudienceGrid {...block} />;
    case "timeline":
      return <Timeline {...block} />;
    case "imageBand":
      return <ImageBand {...block} />;
    case "facts":
      return <Facts {...block} />;
    case "routeCards":
      return <RouteCards {...block} />;
    case "checklist":
      return <Checklist {...block} />;
    case "authorityNote":
      return <AuthorityNote {...block} />;
    case "linkGrid":
      return <LinkGrid {...block} />;
    case "relatedInfo":
      return <RelatedInfo {...block} />;
    case "cta":
      return <CtaLine {...block} />;
    default:
      return null;
  }
}

export function ServiceBody({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <div className="space-y-14">
      {blocks.map((block, i) => (
        <div key={`${block.type}-${i}`}>
          <ServiceBlockRenderer block={block} />
        </div>
      ))}
    </div>
  );
}
