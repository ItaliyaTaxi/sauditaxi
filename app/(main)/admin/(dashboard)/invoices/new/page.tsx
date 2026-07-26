import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { InvoiceForm } from "@/components/admin/InvoiceForm";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getLead } from "@/lib/leads";
import { invoiceInputFromLead, type InvoiceInput } from "@/lib/invoices";

export const dynamic = "force-dynamic";

export default async function NewInvoicePage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string }>;
}) {
  const { leadId } = await searchParams;

  if (!isSupabaseConfigured()) {
    return (
      <AdminNotice title="Supabase is not configured">
        Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to create invoices.
      </AdminNotice>
    );
  }

  let initialValues: InvoiceInput | undefined;
  if (leadId) {
    const lead = await getLead(leadId);
    if (!lead) notFound();
    initialValues = invoiceInputFromLead(lead);
  }

  return (
    <div className="space-y-6">
      <Link href="/admin/invoices" className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-gold">
        <ArrowLeft className="size-4" /> Back to invoices
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-neutral-900">New invoice</h1>
        <p className="text-sm text-neutral-500">
          {leadId ? "Fields are pre-filled from the lead — review and add pricing before saving." : "Fill in the client, trip, and line-item details."}
        </p>
      </div>

      <InvoiceForm leadId={leadId ?? null} initialValues={initialValues} />
    </div>
  );
}
