import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { QuotationForm } from "@/components/admin/QuotationForm";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getLead } from "@/lib/leads";
import { quotationInputFromLead, type QuotationInput } from "@/lib/quotations";

export const dynamic = "force-dynamic";

export default async function NewQuotationPage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string }>;
}) {
  const { leadId } = await searchParams;

  if (!isSupabaseConfigured()) {
    return (
      <AdminNotice title="Supabase is not configured">
        Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to create quotations.
      </AdminNotice>
    );
  }

  let initialValues: QuotationInput | undefined;
  if (leadId) {
    const lead = await getLead(leadId);
    if (!lead) notFound();
    initialValues = quotationInputFromLead(lead);
  }

  return (
    <div className="space-y-6">
      <Link href="/admin/quotations" className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-gold">
        <ArrowLeft className="size-4" /> Back to quotations
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-neutral-900">New quotation</h1>
        <p className="text-sm text-neutral-500">
          {leadId
            ? "Fields are pre-filled from the lead — review and add pricing before saving."
            : "Fill in the client, journey, and pricing details. No lead is required — this can be a fully standalone quotation."}
        </p>
      </div>

      <QuotationForm leadId={leadId ?? null} initialValues={initialValues} />
    </div>
  );
}
