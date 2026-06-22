"use client";

import { useId, useState } from "react";

export interface TabItem {
  label: string;
  /** Prose paragraphs rendered inside the panel. */
  paragraphs: string[];
}

/**
 * Accessible tabbed panel. Every panel stays in the DOM (inactive ones use the
 * `hidden` attribute), so all SEO copy is present in the HTML for crawlers
 * while readers see a clean, compact, app-like interface instead of a text wall.
 */
export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(0);
  const base = useId();

  return (
    <div>
      <div
        role="tablist"
        aria-label="Service details"
        className="flex flex-wrap gap-2 border-b border-border"
      >
        {items.map((it, i) => {
          const selected = i === active;
          return (
            <button
              key={it.label}
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${base}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={
                "relative -mb-px rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors " +
                (selected
                  ? "border-b-2 border-gold text-navy"
                  : "border-b-2 border-transparent text-muted-foreground hover:text-navy")
              }
            >
              {it.label}
            </button>
          );
        })}
      </div>

      {items.map((it, i) => (
        <div
          key={it.label}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          className="pt-6"
        >
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {it.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
