import Link from "next/link";
import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentStatusBadge } from "@/components/admin/PaymentStatusBadge";
import { DeleteInvoiceButton } from "@/components/admin/DeleteInvoiceButton";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { PAYMENT_STATUSES, listInvoices, type Invoice, type PaymentStatus } from "@/lib/invoices";

export const dynamic = "force-dynamic";

export default async function AdminInvoicesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const activeStatus =
    status && (PAYMENT_STATUSES as readonly string[]).includes(status)
      ? (status as PaymentStatus)
      : undefined;

  const configured = isSupabaseConfigured();
  let invoices: Invoice[] = [];
  let error: string | null = null;

  if (configured) {
    try {
      invoices = await listInvoices(activeStatus);
    } catch (e) {
      error = e instanceof Error ? e.message : "Failed to load invoices.";
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-ink">
            {activeStatus ? `${activeStatus} Invoices` : "All Invoices"}
          </h1>
          <p className="text-sm text-ink-muted">{invoices.length} invoice(s)</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/invoices"
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
              !activeStatus ? "bg-brass text-midnight ring-brass" : "text-ink-soft ring-hairline hover:bg-sand/50"
            }`}
          >
            All
          </Link>
          {PAYMENT_STATUSES.map((s) => (
            <Link
              key={s}
              href={`/admin/invoices?status=${s}`}
              className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                activeStatus === s ? "bg-brass text-midnight ring-brass" : "text-ink-soft ring-hairline hover:bg-sand/50"
              }`}
            >
              {s}
            </Link>
          ))}
          <Button asChild variant="gold" size="sm">
            <Link href="/admin/invoices/new">
              <Plus className="size-4" /> New invoice
            </Link>
          </Button>
        </div>
      </div>

      {!configured && (
        <AdminNotice title="Supabase is not configured">
          Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to load invoices.
        </AdminNotice>
      )}
      {error && <AdminNotice title="Could not load invoices">{error}</AdminNotice>}

      <div className="overflow-x-auto rounded-xl border border-hairline bg-white">
        <table className="w-full min-w-[860px] text-sm">
          <thead>
            <tr className="border-b border-hairline text-left text-ink-muted">
              <th className="px-4 py-3 font-medium">Invoice #</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Total</th>
              <th className="px-4 py-3 font-medium">Payment status</th>
              <th className="px-4 py-3 font-medium">Invoice date</th>
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-ink-muted">
                  No invoices found.
                </td>
              </tr>
            ) : (
              invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-hairline last:border-0 align-top hover:bg-sand/30">
                  <td className="px-4 py-3">
                    <Link href={`/admin/invoices/${invoice.id}`} className="font-semibold text-ink hover:text-brass">
                      {invoice.invoiceNumber}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{invoice.clientName || "—"}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-soft">
                    {invoice.totalAmount.toFixed(2)} {invoice.currency}
                  </td>
                  <td className="px-4 py-3"><PaymentStatusBadge status={invoice.paymentStatus} /></td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-muted">
                    {new Date(invoice.invoiceDate).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-muted">
                    {new Date(invoice.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/invoices/${invoice.id}`}
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-ink-soft hover:bg-sand/50"
                      >
                        <Eye className="size-3.5" /> View
                      </Link>
                      <DeleteInvoiceButton invoiceId={invoice.id} variant="ghost" label="Delete" />
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
