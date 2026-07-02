import Link from "next/link";
import { ArrowRight, Clock, MapPin, Plane, Building2 } from "lucide-react";
import type { HotelTransfer } from "@/lib/hotel-transfers";

/**
 * Presentational card for a single airport ↔ hotel transfer. Pure (no hooks),
 * so it can be rendered from both server components (grids) and the client-side
 * explorer.
 */
export function HotelTransferCard({ transfer }: { transfer: HotelTransfer }) {
  const FromIcon = transfer.fromType === "airport" ? Plane : Building2;
  return (
    <Link
      href={transfer.path}
      className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
    >
      <div className="flex items-start gap-2 text-base font-semibold text-navy">
        <FromIcon className="mt-0.5 size-4 shrink-0 text-gold" />
        <span className="leading-snug">
          {transfer.from}
          <ArrowRight className="mx-1.5 inline size-4 text-gold align-middle" />
          {transfer.to}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
        {transfer.hotel.blurb}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5 text-gold" /> {transfer.duration}
        </span>
        <span>{transfer.distance}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="size-3.5 text-gold" /> {transfer.hotel.area}
        </span>
        <span className="ml-auto rounded-full bg-gold/10 px-2 py-0.5 font-medium text-navy">
          {transfer.hotel.stars}★
        </span>
      </div>
    </Link>
  );
}
