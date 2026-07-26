import Image from "next/image";
import type { Invoice, PaymentStatus } from "@/lib/invoices";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function formatDate(value: string | null): string {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function formatAmount(amount: number, currency: string): string {
  return `${amount.toFixed(2)} ${currency}`;
}

const stampStyles: Record<PaymentStatus, string> = {
  Paid: "border-green-600 text-green-700",
  "Partially Paid": "border-amber-500 text-amber-700",
  Unpaid: "border-neutral-400 text-neutral-500",
};

function Stamp({ status }: { status: PaymentStatus }) {
  return (
    <div
      className={cn(
        "flex size-28 shrink-0 -rotate-12 flex-col items-center justify-center rounded-full border-4 text-center leading-tight",
        stampStyles[status]
      )}
    >
      <span className="text-sm font-extrabold uppercase tracking-wide">
        {status === "Partially Paid" ? "Partial" : status}
      </span>
      <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider">
        {siteConfig.shortName}
      </span>
    </div>
  );
}

export function InvoiceDocument({ invoice }: { invoice: Invoice }) {
  return (
    <div className="invoice-print-page overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-sm print:rounded-none print:border-0 print:shadow-none">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-6 bg-navy px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gold">
            <Image src="/images/logo.webp" alt={`${siteConfig.name} logo`} width={112} height={112} className="size-14 object-cover" />
          </span>
          <div>
            <h1 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
              {siteConfig.name}
            </h1>
            <p className="text-sm text-white/70">Private Taxi &amp; Transfer Services</p>
            <p className="text-sm text-white/70">{siteConfig.email}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-extrabold tracking-wide text-gold sm:text-3xl">INVOICE</p>
          <p className="mt-1 text-sm text-white/80">Invoice #: {invoice.invoiceNumber}</p>
          <p className="text-sm text-white/80">Date: {formatDate(invoice.invoiceDate)}</p>
        </div>
      </div>

      {/* Bill to / Trip details */}
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-500">Bill To</h2>
          <p className="mt-2 text-sm text-neutral-900">Name: {invoice.clientName || "—"}</p>
          <p className="text-sm text-neutral-900">Phone / WhatsApp: {invoice.clientPhone || "—"}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-500">Trip Details</h2>
          <p className="mt-2 text-sm text-neutral-900">Service: {invoice.serviceType || "—"}</p>
          <p className="text-sm text-neutral-900">Pickup: {invoice.pickupLocation || "—"}</p>
          <p className="text-sm text-neutral-900">Drop-off: {invoice.dropoffLocation || "—"}</p>
          <p className="text-sm text-neutral-900">Date: {invoice.date || "—"}</p>
          <p className="text-sm text-neutral-900">Time: {invoice.time || "—"}</p>
        </div>
      </div>

      {/* Line items */}
      <div className="overflow-x-auto px-6 sm:px-8">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="bg-gold text-left text-xs font-bold uppercase tracking-wide text-black">
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Vehicle Type</th>
              <th className="px-4 py-3">Passengers</th>
              <th className="px-4 py-3">Luggage</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.lineItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-neutral-400">
                  No line items.
                </td>
              </tr>
            ) : (
              invoice.lineItems.map((item, i) => (
                <tr key={i} className="border-b border-neutral-100 last:border-0">
                  <td className="px-4 py-3 text-neutral-900">{item.description}</td>
                  <td className="px-4 py-3 text-neutral-600">{item.vehicleType || "—"}</td>
                  <td className="px-4 py-3 text-neutral-600">{item.passengers || "—"}</td>
                  <td className="px-4 py-3 text-neutral-600">{item.luggage || "—"}</td>
                  <td className="px-4 py-3 text-right font-medium text-neutral-900">
                    {formatAmount(item.amount, invoice.currency)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Stamp + totals */}
      <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-8 sm:px-8">
        <Stamp status={invoice.paymentStatus} />
        <div className="text-right">
          <p className="text-sm text-neutral-500">
            Total Amount:{" "}
            <span className="text-lg font-bold text-neutral-900">
              {formatAmount(invoice.totalAmount, invoice.currency)}
            </span>
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Payment Status: <span className="font-semibold text-neutral-900">{invoice.paymentStatus}</span>
          </p>
        </div>
      </div>

      {invoice.notes && (
        <div className="border-t border-neutral-100 px-6 py-6 sm:px-8">
          <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-500">Notes</h2>
          <p className="mt-2 whitespace-pre-line text-sm text-neutral-700">{invoice.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="border-t-2 border-gold px-6 py-5 text-center text-xs text-neutral-500 sm:px-8">
        <p>Thank you for choosing {siteConfig.name}</p>
        <p>{siteConfig.email}</p>
      </div>
    </div>
  );
}
