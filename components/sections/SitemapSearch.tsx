"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

/**
 * Progressive-enhancement filter for the /sitemap page. Every link on the
 * page is rendered server-side and present in the DOM regardless of JS —
 * this component only toggles visibility of already-rendered `<li>` items
 * (marked with `data-sitemap-item`) that don't match the query, and expands
 * any collapsed `<details>` section that still has a visible match. With JS
 * disabled the input simply does nothing and every link stays visible.
 */
export function SitemapSearch() {
  const [query, setQuery] = useState("");
  const [matchCount, setMatchCount] = useState<number | null>(null);
  const totalRef = useRef(0);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-sitemap-item]");
    totalRef.current = items.length;
  }, []);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    const items = document.querySelectorAll<HTMLElement>("[data-sitemap-item]");
    let visible = 0;
    const detailsToOpen = new Set<HTMLDetailsElement>();

    items.forEach((item) => {
      const haystack = item.dataset.sitemapItem ?? "";
      const matches = q === "" || haystack.includes(q);
      item.style.display = matches ? "" : "none";
      if (matches) {
        visible++;
        const details = item.closest("details");
        if (details) detailsToOpen.add(details);
      }
    });

    if (q !== "") {
      document.querySelectorAll<HTMLDetailsElement>("details[data-sitemap-group]").forEach((d) => {
        d.open = detailsToOpen.has(d);
      });
    }

    setMatchCount(q === "" ? null : visible);
  }, [query]);

  return (
    <div className="sticky top-16 z-10 -mx-4 border-b border-hairline bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-4">
      <div className="relative mx-auto max-w-md">
        <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the sitemap…"
          aria-label="Search the sitemap"
          className="w-full rounded-lg border border-hairline bg-sand/30 py-2 ps-9 pe-3 text-sm text-ink placeholder:text-ink-muted focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
        />
      </div>
      {matchCount !== null && (
        <p className="mx-auto mt-2 max-w-md text-xs text-ink-muted">
          {matchCount} of {totalRef.current} pages match
        </p>
      )}
    </div>
  );
}
