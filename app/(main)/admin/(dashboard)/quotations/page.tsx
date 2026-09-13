import Link from "next/link";
import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteStatusBadge } from "@/components/admin/QuoteStatusBadge";
import { DeleteQuotationButton } from "@/components/admin/DeleteQuotationButton";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { QUOTE_STATUSES, listQuotations, type Quotation, type QuoteStatus } from "@/lib/quotations";

export const dynamic = "force-dynamic";

export default async function AdminQuotationsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const activeStatus =
    status && (QUOTE_STATUSES as readonly string[]).includes(status)
      ? (status as QuoteStatus)
      : undefined;

  const configured = isSupabaseConfigured();
  let quotations: Quotation[] = [];
  let error: string | null = null;

  if (configured) {
    try {
      quotations = await listQuotations(activeStatus);
    } catch (e) {
      error = e instanceof Error ? e.message : "Failed to load quotations.";
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink">
            {activeStatus ? `${activeStatus} Quotations` : "All Quotations"}
          </h1>
          <p className="text-sm text-ink-muted">{quotations.length} quotation(s)</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/quotations"
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
              !activeStatus ? "bg-brass text-midnight ring-brass" : "text-ink-soft ring-hairline hover:bg-sand/50"
            }`}
          >
            All
          </Link>
          {QUOTE_STATUSES.map((s) => (
            <Link
              key={s}
              href={`/admin/quotations?status=${s}`}
              className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                activeStatus === s ? "bg-brass text-midnight ring-brass" : "text-ink-soft ring-hairline hover:bg-sand/50"
              }`}
            >
              {s}
            </Link>
          ))}
          <Button asChild variant="gold" size="sm">
            <Link href="/admin/quotations/new">
              <Plus className="size-4" /> New quotation
            </Link>
          </Button>
        </div>
      </div>

      {!configured && (
        <AdminNotice title="Supabase is not configured">
          Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to load quotations.
        </AdminNotice>
      )}
      {error && <AdminNotice title="Could not load quotations">{error}</AdminNotice>}

      <div className="overflow-x-auto rounded-xl border border-hairline bg-white">
        <table className="w-full min-w-[860px] text-sm">
          <thead>
            <tr className="border-b border-hairline text-left text-ink-muted">
              <th className="px-4 py-3 font-medium">Quote #</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Valid until</th>
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotations.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-ink-muted">
                  No quotations found.
                </td>
              </tr>
            ) : (
              quotations.map((quotation) => (
                <tr key={quotation.id} className="border-b border-hairline last:border-0 align-top hover:bg-sand/30">
                  <td className="px-4 py-3">
                    <Link href={`/admin/quotations/${quotation.id}`} className="font-semibold text-ink hover:text-brass">
                      {quotation.quoteNumber}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{quotation.clientName || "—"}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-soft">
                    {quotation.totalAmount.toFixed(2)} {quotation.currency}
                  </td>
                  <td className="px-4 py-3"><QuoteStatusBadge status={quotation.status} /></td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-muted">
                    {quotation.validUntil ? new Date(quotation.validUntil).toLocaleDateString("en-GB") : "—"}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-muted">
                    {new Date(quotation.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/quotations/${quotation.id}`}
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-ink-soft hover:bg-sand/50"
                      >
                        <Eye className="size-3.5" /> View
                      </Link>
                      <DeleteQuotationButton quotationId={quotation.id} variant="ghost" label="Delete" />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
