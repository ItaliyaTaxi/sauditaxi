import { HotelTransferCard } from "@/components/sections/HotelTransferCard";
import type { HotelTransfer } from "@/lib/hotel-transfers";

interface HotelTransferGridProps {
  transfers: HotelTransfer[];
  heading?: string;
  subheading?: string;
  background?: "white" | "muted";
  limit?: number;
}

/**
 * Server-rendered grid of transfer cards — used for the "Related routes" and
 * "Nearby hotels" sections on a transfer page. Renders nothing when empty.
 */
export function HotelTransferGrid({
  transfers,
  heading,
  subheading,
  background = "muted",
  limit,
}: HotelTransferGridProps) {
  const list = limit ? transfers.slice(0, limit) : transfers;
  if (list.length === 0) return null;

  return (
    <section
      className={
        background === "muted"
          ? "bg-muted py-16 sm:py-20"
          : "bg-white py-16 sm:py-20"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-3 text-muted-foreground">{subheading}</p>
            )}
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <HotelTransferCard key={t.path} transfer={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
