import type { LeadStatus } from "@/lib/leads";
import { cn } from "@/lib/utils";

const styles: Record<LeadStatus, string> = {
  New: "bg-gold/20 text-neutral-900 ring-gold/40",
  Contacted: "bg-neutral-200 text-neutral-800 ring-neutral-300",
  Quoted: "bg-amber-100 text-amber-800 ring-amber-200",
  Confirmed: "bg-green-100 text-green-800 ring-green-200",
  Cancelled: "bg-red-100 text-red-700 ring-red-200",
  Completed: "bg-neutral-900 text-white ring-neutral-700",
};

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        styles[status]
      )}
    >
      {status}
    </span>
  );
}
