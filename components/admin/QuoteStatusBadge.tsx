import type { QuoteStatus } from "@/lib/quotations";
import { cn } from "@/lib/utils";

const styles: Record<QuoteStatus, string> = {
  Draft: "bg-neutral-100 text-neutral-700 ring-neutral-200",
  Sent: "bg-blue-100 text-blue-700 ring-blue-200",
  Accepted: "bg-green-100 text-green-800 ring-green-200",
  Declined: "bg-red-100 text-red-700 ring-red-200",
  Expired: "bg-amber-100 text-amber-800 ring-amber-200",
};

export function QuoteStatusBadge({ status }: { status: QuoteStatus }) {
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
