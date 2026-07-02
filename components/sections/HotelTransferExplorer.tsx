"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { HotelTransferCard } from "@/components/sections/HotelTransferCard";
import type { HotelTransfer, TransferDirection } from "@/lib/hotel-transfers";
import { cn } from "@/lib/utils";

type StarFilter = "all" | "5" | "4" | "3";
type DirFilter = "all" | TransferDirection;

const PAGE_SIZE = 9;

const dirTabs: { value: DirFilter; label: string }[] = [
  { value: "all", label: "All routes" },
  { value: "airport-to-hotel", label: "Airport → Hotel" },
  { value: "hotel-to-airport", label: "Hotel → Airport" },
];

const starTabs: { value: StarFilter; label: string }[] = [
  { value: "all", label: "All stars" },
  { value: "5", label: "5★" },
  { value: "4", label: "4★" },
  { value: "3", label: "3★" },
];

/**
 * Interactive listing of every transfer route in a city — client-side search,
 * star + direction filters, and pagination. Data is passed in from the server
 * so it stays in the static HTML for crawlers, then hydrates for filtering.
 */
export function HotelTransferExplorer({
  transfers,
  airportName,
}: {
  transfers: HotelTransfer[];
  airportName: string;
}) {
  const [query, setQuery] = useState("");
  const [dir, setDir] = useState<DirFilter>("all");
  const [star, setStar] = useState<StarFilter>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return transfers.filter((t) => {
      if (dir !== "all" && t.direction !== dir) return false;
      if (star !== "all" && String(t.hotel.stars) !== star) return false;
      if (
        q &&
        !`${t.hotel.name} ${t.hotel.area} ${t.from} ${t.to}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [transfers, query, dir, star]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const shown = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  // Reset to page 1 whenever a filter changes.
  function update<T>(setter: (v: T) => void) {
    return (v: T) => {
      setter(v);
      setPage(1);
    };
  }
  const setQ = update(setQuery);
  const setDirF = update(setDir);
  const setStarF = update(setStar);

  return (
    <section className="bg-muted py-16 sm:py-20" id="routes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            All Airport Transfer Routes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Search and filter every {airportName} hotel transfer we operate — book any
            route in a couple of taps.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by hotel, area, or route…"
              aria-label="Search transfer routes"
              className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by direction">
              {dirTabs.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setDirF(t.value)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                    dir === t.value
                      ? "bg-navy text-white"
                      : "bg-muted text-navy hover:bg-gold/15"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:ml-auto" role="group" aria-label="Filter by star rating">
              {starTabs.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setStarF(t.value)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                    star === t.value
                      ? "bg-gold text-navy"
                      : "bg-muted text-navy hover:bg-gold/15"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
          Showing {shown.length} of {filtered.length} route
          {filtered.length === 1 ? "" : "s"}
        </p>

        {shown.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((t) => (
              <HotelTransferCard key={t.path} transfer={t} />
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-border bg-white p-10 text-center text-sm text-muted-foreground">
            No routes match your search. Try a different hotel or clear the filters.
          </div>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <nav
            className="mt-10 flex items-center justify-center gap-1.5"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft className="size-4" />
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-current={p === current ? "page" : undefined}
                className={cn(
                  "size-9 rounded-lg text-sm font-medium transition-colors",
                  p === current
                    ? "bg-navy text-white"
                    : "border border-border bg-white text-navy hover:border-gold"
                )}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={current === pageCount}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight className="size-4" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
