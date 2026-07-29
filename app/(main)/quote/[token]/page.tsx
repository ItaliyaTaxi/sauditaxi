import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuotationDocument } from "@/components/quotation/QuotationDocument";
import { PrintButton } from "@/components/invoice/PrintButton";
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
    <div className="mx-auto max-w-3xl px-4 py-8 print:px-0 print:py-0 sm:py-12">
      <QuotationDocument quotation={quotation} />
      <div className="mt-6 flex justify-center print:hidden">
        <PrintButton />
      </div>
    </div>
  );
}
