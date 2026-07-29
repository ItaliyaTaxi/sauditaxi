import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { QuotationReview } from "@/components/admin/QuotationReview";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getQuotation, type Quotation } from "@/lib/quotations";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function QuotationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!isSupabaseConfigured()) {
    return (
      <AdminNotice title="Supabase is not configured">
        Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to view quotations.
      </AdminNotice>
    );
  }

  let quotation: Quotation | null = null;
  try {
    quotation = await getQuotation(id);
  } catch (e) {
    return <AdminNotice title="Could not load quotation">{e instanceof Error ? e.message : "Error"}</AdminNotice>;
  }
  if (!quotation) notFound();

  const publicUrl = `${siteConfig.url}/quote/${quotation.publicToken}`;

  return (
    <div className="space-y-6">
      <Link href="/admin/quotations" className="print:hidden inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-gold">
        <ArrowLeft className="size-4" /> Back to quotations
      </Link>

      <div className="print:hidden">
        <h1 className="text-2xl font-bold text-neutral-900">{quotation.quoteNumber}</h1>
        <p className="text-sm text-neutral-500">Created {new Date(quotation.createdAt).toLocaleString("en-GB")}</p>
      </div>

      <QuotationReview quotation={quotation} publicUrl={publicUrl} />
    </div>
  );
}
