import { ArrowRight, Check, MessageCircle } from "lucide-react";
import type { RouteBlock } from "@/data/routes";
import { CtaButtons } from "@/components/CtaButtons";

/**
 * New-brand block renderers for the Phase 3 domestic city-to-city route
 * redesign (components/routes/RouteJourneyView.tsx +
 * lib/route-composer.ts). Reuses the exact same `RouteBlock` union already
 * defined in data/routes.ts (prose/map/facts/timeline/comparison/
 * scenarios/checklist/ctaBanner) so existing per-route `customLayout` data
 * keeps working — this file only changes the visual tokens
 * (ink/brass/midnight/sand/hairline) and is a separate file from
 * RouteBlocks.tsx so the 5 existing border-route customLayout pages (out
 * of scope this phase) are never touched.
 */

function Prose({ heading, paragraphs }: Extract<RouteBlock, { type: "prose" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-midnight [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brass">
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </div>
  );
}

function MapBlock({ heading, note, origin, destination, size, from, to }: Extract<RouteBlock, { type: "map" }> & { from: string; to: string }) {
  const large = size === "large";
  return (
    <div>
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <div className={`mt-4 overflow-hidden rounded-xl border border-hairline shadow-sm ${large ? "" : "max-w-2xl"}`}>
        <div className={`relative w-full ${large ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/3] sm:aspect-[16/9]"}`}>
          <iframe
            title={`${from} to ${to} route map`}
            src={`https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-muted">{note}</p>
    </div>
  );
}

function Facts({ heading, layout, items }: Extract<RouteBlock, { type: "facts" }>) {
  if (layout === "snapshot") {
    return (
      <div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
        <div className="mt-4 flex flex-wrap divide-x divide-hairline overflow-hidden rounded-xl border border-hairline rtl:divide-x-reverse">
          {items.map((item) => (
            <div key={item.label} className="min-w-[9rem] flex-1 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{item.label}</p>
              <p className={item.emphasis ? "mt-1.5 text-lg font-bold text-brass" : "mt-1.5 text-base font-semibold text-ink"}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={
              item.emphasis
                ? "rounded-lg border border-brass/40 bg-brass/[0.06] p-4"
                : "rounded-lg border border-hairline bg-sand/40 p-4"
            }
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ heading, orientation, steps, note }: Extract<RouteBlock, { type: "timeline" }>) {
  if (orientation === "horizontal") {
    return (
      <div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
        <ol className="mt-5 flex min-w-max items-stretch gap-2 overflow-x-auto pb-1 sm:min-w-0 sm:flex-wrap">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-2">
              <div className="w-40 rounded-lg border border-brass/30 bg-sand/50 px-3 py-2.5 sm:w-44">
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
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <ol className="mt-6 space-y-0">
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

function Comparison({ heading, intro, columns, rows }: Extract<RouteBlock, { type: "comparison" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-ink-soft">{intro}</p>}
      <div className="mt-4 overflow-x-auto rounded-xl border border-hairline">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="bg-midnight text-white">
              <th className="px-4 py-3 text-start font-semibold">Consideration</th>
              <th className="px-4 py-3 text-start font-semibold">{columns[0]}</th>
              <th className="px-4 py-3 text-start font-semibold">{columns[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-sand/40"}>
                <td className="px-4 py-3 font-medium text-ink">{row.criterion}</td>
                <td className="px-4 py-3 text-ink-soft">{row.a}</td>
                <td className="px-4 py-3 text-ink-soft">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Scenarios({ heading, items }: Extract<RouteBlock, { type: "scenarios" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <dl className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="border-s-4 border-brass/40 ps-4">
            <dt className="font-semibold text-ink">{item.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Checklist({ heading, intro, items }: Extract<RouteBlock, { type: "checklist" }>) {
  return (
    <div>
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      {intro && <p className="mt-2 text-[15px] text-ink-soft">{intro}</p>}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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

function CtaBanner({ heading, body, whatsappMessage }: Extract<RouteBlock, { type: "ctaBanner" }>) {
  return (
    <div className="rounded-2xl border border-brass/30 bg-brass/[0.06] p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight text-brass">
          <MessageCircle className="size-4" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-ink">{heading}</h2>
          <p className="mt-1.5 text-sm text-ink-soft">{body}</p>
        </div>
      </div>
      <div className="mt-4">
        <CtaButtons whatsappMessage={whatsappMessage} />
      </div>
    </div>
  );
}

export function RouteJourneyBlockRenderer({ block, from, to }: { block: RouteBlock; from: string; to: string }) {
  switch (block.type) {
    case "prose":
      return <Prose {...block} />;
    case "map":
      return <MapBlock {...block} from={from} to={to} />;
    case "facts":
      return <Facts {...block} />;
    case "timeline":
      return <Timeline {...block} />;
    case "comparison":
      return <Comparison {...block} />;
    case "scenarios":
      return <Scenarios {...block} />;
    case "checklist":
      return <Checklist {...block} />;
    case "ctaBanner":
      return <CtaBanner {...block} />;
    default:
      return null;
  }
}

export function RouteJourneyBody({ blocks, from, to }: { blocks: RouteBlock[]; from: string; to: string }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => (
        <div key={`${block.type}-${block.heading ?? i}`} className={i > 0 ? "border-t border-hairline pt-10" : ""}>
          <RouteJourneyBlockRenderer block={block} from={from} to={to} />
        </div>
      ))}
    </div>
  );
}
