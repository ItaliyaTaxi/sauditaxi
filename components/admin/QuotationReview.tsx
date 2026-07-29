"use client";

import { useState } from "react";
import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuotationForm } from "@/components/admin/QuotationForm";
import { QuoteStatusSelect } from "@/components/admin/QuoteStatusSelect";
import { SendQuotationEmailButton } from "@/components/admin/SendQuotationEmailButton";
import { DeleteQuotationButton } from "@/components/admin/DeleteQuotationButton";
import { CopyQuotationLink } from "@/components/quotation/CopyQuotationLink";
import { PrintButton } from "@/components/invoice/PrintButton";
import { QuotationDocument } from "@/components/quotation/QuotationDocument";
import type { Quotation, QuotationInput } from "@/lib/quotations";

export function QuotationReview({
  quotation,
  publicUrl,
}: {
  quotation: Quotation;
  publicUrl: string;
}) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    const initialValues: QuotationInput = {
      leadId: quotation.leadId,
      clientName: quotation.clientName,
      clientPhone: quotation.clientPhone,
      clientEmail: quotation.clientEmail,
      serviceType: quotation.serviceType,
      pickupLocation: quotation.pickupLocation,
      dropoffLocation: quotation.dropoffLocation,
      date: quotation.date,
      time: quotation.time,
      flightNumber: quotation.flightNumber,
      specialRequests: quotation.specialRequests,
      bookingReference: quotation.bookingReference,
      lineItems: quotation.lineItems,
      currency: quotation.currency,
      totalAmount: quotation.totalAmount,
      paymentTerms: quotation.paymentTerms,
      cancellationPolicy: quotation.cancellationPolicy,
      notes: quotation.notes,
      status: quotation.status,
      quoteDate: quotation.quoteDate,
      validUntil: quotation.validUntil,
    };
    return (
      <div className="space-y-4">
        <Button type="button" variant="ghost" size="sm" onClick={() => setEditing(false)}>
          <X className="size-4" /> Cancel editing
        </Button>
        <QuotationForm quotationId={quotation.id} leadId={quotation.leadId} initialValues={initialValues} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="print:hidden flex flex-wrap items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(true)}>
          <Pencil className="size-4" /> Edit
        </Button>
        <QuoteStatusSelect quotationId={quotation.id} status={quotation.status} />
        <CopyQuotationLink url={publicUrl} />
        <PrintButton />
        <div className="ms-auto">
          <DeleteQuotationButton quotationId={quotation.id} redirectTo="/admin/quotations" />
        </div>
      </div>

      <div className="print:hidden rounded-xl border border-neutral-200 bg-white p-4">
        <SendQuotationEmailButton quotationId={quotation.id} clientEmail={quotation.clientEmail} />
      </div>

      <QuotationDocument quotation={quotation} />
    </div>
  );
}
