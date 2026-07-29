import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuotationDownloadSection } from "@/components/quotation/QuotationDownloadSection";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getQuotationByToken } from "@/lib/quotations";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  if (!isSupabaseConfigured()) return { robots: { index: false, follow: false } };
  const quotation = await getQuotationByToken(token);
  return {
    title: quotation ? `Quotation ${quotation.quoteNumber}` : "Quotation",
    robots: { index: false, follow: false },
  };
}

export default async function PublicQuotationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  if (!isSupabaseConfigured()) notFound();

  const quotation = await getQuotationByToken(token);
  if (!quotation) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 print:p-[10mm] sm:py-12">
      <QuotationDownloadSection quotation={quotation} />
    </div>
  );
}
