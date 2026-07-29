"use client";

import { useRef } from "react";
import { QuotationDocument } from "@/components/quotation/QuotationDocument";
import { DownloadPdfButton } from "@/components/invoice/DownloadPdfButton";
import type { Quotation } from "@/lib/quotations";

/** Client-only wrapper: holds the ref the download button captures to a PDF. */
export function QuotationDownloadSection({ quotation }: { quotation: Quotation }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <QuotationDocument ref={ref} quotation={quotation} />
      <div className="mt-6 flex justify-center print:hidden">
        <DownloadPdfButton targetRef={ref} filename={`${quotation.quoteNumber}.pdf`} />
      </div>
    </>
  );
}
