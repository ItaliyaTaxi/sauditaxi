import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { InvoiceReview } from "@/components/admin/InvoiceReview";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getInvoice, type Invoice } from "@/lib/invoices";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!isSupabaseConfigured()) {
    return (
      <AdminNotice title="Supabase is not configured">
        Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to view invoices.
      </AdminNotice>
    );
  }

  let invoice: Invoice | null = null;
  try {
    invoice = await getInvoice(id);
  } catch (e) {
    return <AdminNotice title="Could not load invoice">{e instanceof Error ? e.message : "Error"}</AdminNotice>;
  }
  if (!invoice) notFound();

  const publicUrl = `${siteConfig.url}/invoice/${invoice.publicToken}`;

  return (
    <div className="space-y-6">
      <Link href="/admin/invoices" className="print:hidden inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-gold">
        <ArrowLeft className="size-4" /> Back to invoices
      </Link>

      <div className="print:hidden">
        <h1 className="text-2xl font-bold text-neutral-900">{invoice.invoiceNumber}</h1>
        <p className="text-sm text-neutral-500">Created {new Date(invoice.createdAt).toLocaleString("en-GB")}</p>
      </div>

      <InvoiceReview invoice={invoice} publicUrl={publicUrl} />
    </div>
  );
}
