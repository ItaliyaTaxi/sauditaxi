import type { PaymentStatus } from "@/lib/invoices";
import { cn } from "@/lib/utils";

const styles: Record<PaymentStatus, string> = {
  Unpaid: "bg-red-100 text-red-700 ring-red-200",
  "Partially Paid": "bg-amber-100 text-amber-800 ring-amber-200",
  Paid: "bg-green-100 text-green-800 ring-green-200",
};

export function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
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
