import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/**
 * Shared legal-document layout for Privacy Policy and Terms & Conditions —
 * English and Arabic (type: "legal" in data/translations/ar.ts). A
 * dedicated design, distinct from the marketing/service pages: a restrained
 * light hero (no image, no CTA button), a sticky "On This Page" navigation,
 * and a comfortable-width document column. Content (headings/paragraphs/
 * lists) is passed in verbatim — this component only handles presentation.
 */

export interface LegalSectionItem {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Renders this section as a highlighted callout instead of plain prose —
   * for sections the source content itself flags as practically important
   * (e.g. cancellations, waiting time), not a way to add new emphasis/claims. */
  important?: boolean;
}

export interface LegalFlowStep {
  label: string;
}

export interface LegalPageViewContent {
  h1: string;
  dek: string;
  updatedLabel: string;
  updatedDate?: string;
  tocLabel: string;
  summaryHeading?: string;
  summaryItems?: string[];
  trustHeading?: string;
  trustText?: string;
  flowHeading?: string;
  flowSteps?: LegalFlowStep[];
  sections: LegalSectionItem[];
  contactHeading: string;
  contactText: string;
  quoteLinkLabel: string;
  quoteLinkHref: string;
}

interface LegalPageViewProps extends LegalPageViewContent {
  crumbs: Crumb[];
}

export function LegalPageView({
  h1,
  dek,
  updatedLabel,
  updatedDate,
  tocLabel,
  summaryHeading,
  summaryItems,
  trustHeading,
  trustText,
  flowHeading,
  flowSteps,
  sections,
  contactHeading,
  contactText,
  quoteLinkLabel,
  quoteLinkHref,
  crumbs,
}: LegalPageViewProps) {
  return (
    <>
      {/* Restrained hero — no image, no booking CTA. */}
      <section className="border-b border-hairline bg-sand/40">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <Breadcrumbs items={crumbs} />
          <div className="mt-5 h-[3px] w-12 bg-brass" aria-hidden="true" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{h1}</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">{dek}</p>
          {updatedDate && (
            <p className="mt-4 text-xs font-medium text-ink-muted">
              {updatedLabel}: {updatedDate}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Mobile: collapsible TOC above the content. Desktop: sticky sidebar. */}
        <details className="mb-10 rounded-xl border border-hairline bg-white p-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-semibold text-ink">{tocLabel}</summary>
          <ul className="mt-3 space-y-2 border-t border-hairline pt-3">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-ink-soft hover:text-brass">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{tocLabel}</p>
              <ul className="mt-4 space-y-2.5 border-s-2 border-hairline ps-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-sm text-ink-soft transition-colors hover:text-brass">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="max-w-2xl">
            {summaryHeading && summaryItems && summaryItems.length > 0 && (
              <div className="mb-10 rounded-xl border border-hairline bg-sand/40 p-5">
                <p className="text-sm font-semibold text-ink">{summaryHeading}</p>
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {summaryItems.map((item) => (
                    <li key={item} className="text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {trustHeading && trustText && (
              <div className="mb-10 border-s-2 border-brass ps-4">
                <p className="text-sm font-semibold text-ink">{trustHeading}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{trustText}</p>
              </div>
            )}

            {flowHeading && flowSteps && flowSteps.length > 0 && (
              <div className="mb-10">
                <p className="text-sm font-semibold text-ink">{flowHeading}</p>
                <ol className="mt-3 flex flex-wrap items-center gap-2">
                  {flowSteps.map((step, i) => (
                    <li key={step.label} className="flex items-center gap-2">
                      <span className="rounded-lg border border-hairline bg-white px-3 py-1.5 text-xs font-medium text-ink">
                        {step.label}
                      </span>
                      {i < flowSteps.length - 1 && <span className="text-ink-muted" aria-hidden="true">→</span>}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="space-y-12">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className={
                    s.important
                      ? "scroll-mt-28 rounded-xl border border-brass/30 bg-brass/[0.05] p-5 sm:p-6"
                      : "scroll-mt-28"
                  }
                >
                  <h2 className="text-lg font-bold text-ink">
                    <span className="text-ink-muted">{String(i + 1).padStart(2, "0")}.</span> {s.heading}
                  </h2>
                  {s.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-3 list-disc space-y-1.5 ps-5 text-[15px] leading-relaxed text-ink-soft">
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-hairline pt-8">
              <h2 className="text-base font-bold text-ink">{contactHeading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{contactText}</p>
              <Link
                href={quoteLinkHref}
                className="mt-4 inline-flex items-center text-sm font-semibold text-midnight underline underline-offset-2 hover:text-brass"
              >
                {quoteLinkLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
