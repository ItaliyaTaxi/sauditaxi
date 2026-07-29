"use client";

import { useRef } from "react";
import { InvoiceDocument } from "@/components/invoice/InvoiceDocument";
import { DownloadPdfButton } from "@/components/invoice/DownloadPdfButton";
import type { Invoice } from "@/lib/invoices";

/** Client-only wrapper: holds the ref the download button captures to a PDF. */
export function InvoiceDownloadSection({ invoice }: { invoice: Invoice }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <InvoiceDocument ref={ref} invoice={invoice} />
      <div className="mt-6 flex justify-center print:hidden">
        <DownloadPdfButton targetRef={ref} filename={`${invoice.invoiceNumber}.pdf`} />
      </div>
    </>
  );
}
