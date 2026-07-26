import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvoiceDocument } from "@/components/invoice/InvoiceDocument";
import { PrintButton } from "@/components/invoice/PrintButton";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getInvoiceByToken } from "@/lib/invoices";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  if (!isSupabaseConfigured()) return { robots: { index: false, follow: false } };
  const invoice = await getInvoiceByToken(token);
  return {
    title: invoice ? `Invoice ${invoice.invoiceNumber}` : "Invoice",
    robots: { index: false, follow: false },
  };
}

export default async function PublicInvoicePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  if (!isSupabaseConfigured()) notFound();

  const invoice = await getInvoiceByToken(token);
  if (!invoice) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 print:px-0 print:py-0 sm:py-12">
      <InvoiceDocument invoice={invoice} />
      <div className="mt-6 flex justify-center print:hidden">
        <PrintButton />
      </div>
    </div>
  );
}
