"use client";

import { useRef, useState } from "react";
import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvoiceForm } from "@/components/admin/InvoiceForm";
import { PaymentStatusSelect } from "@/components/admin/PaymentStatusSelect";
import { SendInvoiceEmailButton } from "@/components/admin/SendInvoiceEmailButton";
import { DeleteInvoiceButton } from "@/components/admin/DeleteInvoiceButton";
import { CopyInvoiceLink } from "@/components/invoice/CopyInvoiceLink";
import { DownloadPdfButton } from "@/components/invoice/DownloadPdfButton";
import { InvoiceDocument } from "@/components/invoice/InvoiceDocument";
import type { Invoice, InvoiceInput } from "@/lib/invoices";

export function InvoiceReview({ invoice, publicUrl }: { invoice: Invoice; publicUrl: string }) {
  const [editing, setEditing] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  if (editing) {
    const initialValues: InvoiceInput = {
      leadId: invoice.leadId,
      clientName: invoice.clientName,
      clientPhone: invoice.clientPhone,
      clientEmail: invoice.clientEmail,
      serviceType: invoice.serviceType,
      pickupLocation: invoice.pickupLocation,
      dropoffLocation: invoice.dropoffLocation,
      date: invoice.date,
      time: invoice.time,
      lineItems: invoice.lineItems,
      currency: invoice.currency,
      totalAmount: invoice.totalAmount,
      paymentStatus: invoice.paymentStatus,
      notes: invoice.notes,
      invoiceDate: invoice.invoiceDate,
    };
    return (
      <div className="space-y-4">
        <Button type="button" variant="ghost" size="sm" onClick={() => setEditing(false)}>
          <X className="size-4" /> Cancel editing
        </Button>
        <InvoiceForm invoiceId={invoice.id} leadId={invoice.leadId} initialValues={initialValues} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="print:hidden flex flex-wrap items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(true)}>
          <Pencil className="size-4" /> Edit
        </Button>
        <PaymentStatusSelect invoiceId={invoice.id} status={invoice.paymentStatus} />
        <CopyInvoiceLink url={publicUrl} />
        <DownloadPdfButton targetRef={documentRef} filename={`${invoice.invoiceNumber}.pdf`} />
        <div className="ms-auto">
          <DeleteInvoiceButton invoiceId={invoice.id} redirectTo="/admin/invoices" />
        </div>
      </div>

      <div className="print:hidden rounded-xl border border-neutral-200 bg-white p-4">
        <SendInvoiceEmailButton invoiceId={invoice.id} clientEmail={invoice.clientEmail} />
      </div>

      <InvoiceDocument ref={documentRef} invoice={invoice} />
    </div>
  );
}
