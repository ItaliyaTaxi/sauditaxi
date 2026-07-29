"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  QUOTE_STATUSES,
  DEFAULT_PAYMENT_TERMS,
  DEFAULT_CANCELLATION_POLICY,
  type QuotationInput,
  type QuoteStatus,
} from "@/lib/quotations";

type FormLineItem = {
  description: string;
  vehicleType: string;
  passengers: string;
  luggage: string;
  amount: string;
};

function emptyLineItem(): FormLineItem {
  return { description: "", vehicleType: "", passengers: "", luggage: "", amount: "" };
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function QuotationForm({
  quotationId,
  leadId,
  initialValues,
}: {
  /** Present when editing an existing quotation; absent when creating one. */
  quotationId?: string;
  /** Source lead id, if this quotation was (or should be) created from a lead. */
  leadId?: string | null;
  initialValues?: QuotationInput;
}) {
  const router = useRouter();
  const [clientName, setClientName] = useState(initialValues?.clientName ?? "");
  const [clientPhone, setClientPhone] = useState(initialValues?.clientPhone ?? "");
  const [clientEmail, setClientEmail] = useState(initialValues?.clientEmail ?? "");
  const [serviceType, setServiceType] = useState(initialValues?.serviceType ?? "");
  const [pickupLocation, setPickupLocation] = useState(initialValues?.pickupLocation ?? "");
  const [dropoffLocation, setDropoffLocation] = useState(initialValues?.dropoffLocation ?? "");
  const [date, setDate] = useState(initialValues?.date ?? "");
  const [time, setTime] = useState(initialValues?.time ?? "");
  const [flightNumber, setFlightNumber] = useState(initialValues?.flightNumber ?? "");
  const [specialRequests, setSpecialRequests] = useState(initialValues?.specialRequests ?? "");
  const [bookingReference, setBookingReference] = useState(initialValues?.bookingReference ?? "");
  const [quoteDate, setQuoteDate] = useState(initialValues?.quoteDate ?? todayIso());
  const [validUntil, setValidUntil] = useState(initialValues?.validUntil ?? "");
  const [currency, setCurrency] = useState(initialValues?.currency ?? "SAR");
  const [status, setStatus] = useState<QuoteStatus>(initialValues?.status ?? "Draft");
  const [paymentTerms, setPaymentTerms] = useState(
    initialValues?.paymentTerms ?? DEFAULT_PAYMENT_TERMS
  );
  const [cancellationPolicy, setCancellationPolicy] = useState(
    initialValues?.cancellationPolicy ?? DEFAULT_CANCELLATION_POLICY
  );
  const [notes, setNotes] = useState(initialValues?.notes ?? "");
  const [lineItems, setLineItems] = useState<FormLineItem[]>(
    initialValues?.lineItems?.length
      ? initialValues.lineItems.map((li) => ({
          description: li.description,
          vehicleType: li.vehicleType ?? "",
          passengers: li.passengers ?? "",
          luggage: li.luggage ?? "",
          amount: li.amount ? String(li.amount) : "",
        }))
      : [emptyLineItem()]
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = lineItems.reduce((sum, li) => sum + (Number(li.amount) || 0), 0);

  function updateLineItem(index: number, patch: Partial<FormLineItem>) {
    setLineItems((items) => items.map((li, i) => (i === index ? { ...li, ...patch } : li)));
  }
  function addLineItem() {
    setLineItems((items) => [...items, emptyLineItem()]);
  }
  function removeLineItem(index: number) {
    setLineItems((items) => (items.length > 1 ? items.filter((_, i) => i !== index) : items));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    const payload: QuotationInput = {
      leadId: leadId ?? initialValues?.leadId ?? null,
      clientName: clientName.trim() || null,
      clientPhone: clientPhone.trim() || null,
      clientEmail: clientEmail.trim() || null,
      serviceType: serviceType.trim() || null,
      pickupLocation: pickupLocation.trim() || null,
      dropoffLocation: dropoffLocation.trim() || null,
      date: date.trim() || null,
      time: time.trim() || null,
      flightNumber: flightNumber.trim() || null,
      specialRequests: specialRequests.trim() || null,
      bookingReference: bookingReference.trim() || null,
      quoteDate,
      validUntil: validUntil.trim() || null,
      currency: currency.trim() || "SAR",
      status,
      paymentTerms: paymentTerms.trim() || null,
      cancellationPolicy: cancellationPolicy.trim() || null,
      notes: notes.trim() || null,
      lineItems: lineItems
        .filter((li) => li.description.trim())
        .map((li) => ({
          description: li.description.trim(),
          vehicleType: li.vehicleType.trim() || null,
          passengers: li.passengers.trim() || null,
          luggage: li.luggage.trim() || null,
          amount: Number(li.amount) || 0,
        })),
    };

    try {
      const res = await fetch(
        quotationId ? `/api/admin/quotations/${quotationId}` : "/api/admin/quotations",
        {
          method: quotationId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed to save quotation.");
      router.push(`/admin/quotations/${json.quotation.id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save quotation.");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">
          {error}
        </p>
      )}

      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-neutral-900">Client details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="clientName">Full name</Label>
            <Input id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="clientPhone">Phone / WhatsApp</Label>
            <Input id="clientPhone" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="clientEmail">Email</Label>
            <Input id="clientEmail" type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="serviceType">Service</Label>
            <Input id="serviceType" value={serviceType} onChange={(e) => setServiceType(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="bookingReference">Booking reference (optional)</Label>
            <Input id="bookingReference" value={bookingReference} onChange={(e) => setBookingReference(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-neutral-900">Journey details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="pickupLocation">Pickup</Label>
            <Input id="pickupLocation" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="dropoffLocation">Drop-off</Label>
            <Input id="dropoffLocation" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="date">Trip date</Label>
            <Input id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="2026-08-01" />
          </div>
          <div>
            <Label htmlFor="time">Trip time</Label>
            <Input id="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="14:30" />
          </div>
          <div>
            <Label htmlFor="flightNumber">Flight number (if applicable)</Label>
            <Input id="flightNumber" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="specialRequests">Special requests</Label>
            <Input id="specialRequests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-neutral-900">Line items</h2>
          <Button type="button" variant="ghost" size="sm" onClick={addLineItem}>
            <Plus className="size-4" /> Add row
          </Button>
        </div>
        <div className="mt-4 space-y-4">
          {lineItems.map((item, i) => (
            <div key={i} className="rounded-lg border border-neutral-100 bg-neutral-50 p-4">
              <div className="grid gap-3 sm:grid-cols-5">
                <div className="sm:col-span-2">
                  <Label htmlFor={`li-description-${i}`}>Description</Label>
                  <Input
                    id={`li-description-${i}`}
                    value={item.description}
                    onChange={(e) => updateLineItem(i, { description: e.target.value })}
                    placeholder="Jeddah to Makkah transfer"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`li-vehicle-${i}`}>Vehicle type</Label>
                  <Input
                    id={`li-vehicle-${i}`}
                    value={item.vehicleType}
                    onChange={(e) => updateLineItem(i, { vehicleType: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor={`li-passengers-${i}`}>Passengers</Label>
                  <Input
                    id={`li-passengers-${i}`}
                    value={item.passengers}
                    onChange={(e) => updateLineItem(i, { passengers: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor={`li-luggage-${i}`}>Luggage</Label>
                  <Input
                    id={`li-luggage-${i}`}
                    value={item.luggage}
                    onChange={(e) => updateLineItem(i, { luggage: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-3 flex items-end gap-3">
                <div className="w-40">
                  <Label htmlFor={`li-amount-${i}`}>Amount</Label>
                  <Input
                    id={`li-amount-${i}`}
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.amount}
                    onChange={(e) => updateLineItem(i, { amount: e.target.value })}
                    placeholder="0.00"
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeLineItem(i)}
                  disabled={lineItems.length === 1}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="size-4" /> Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-right text-sm text-neutral-600">
          Total: <span className="text-base font-bold text-neutral-900">{total.toFixed(2)} {currency}</span>
        </p>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-neutral-900">Quotation details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          <div>
            <Label htmlFor="quoteDate">Date issued</Label>
            <Input
              id="quoteDate"
              type="date"
              value={quoteDate}
              onChange={(e) => setQuoteDate(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="validUntil">Valid until</Label>
            <Input
              id="validUntil"
              type="date"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="currency">Currency</Label>
            <Input id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as QuoteStatus)}
            >
              {QUOTE_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="paymentTerms">Payment terms</Label>
            <Textarea id="paymentTerms" rows={3} value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="cancellationPolicy">Cancellation policy</Label>
            <Textarea id="cancellationPolicy" rows={3} value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant="gold" disabled={busy}>
          {busy && <LoaderCircle className="size-4 animate-spin" />}
          {busy ? "Saving…" : quotationId ? "Save changes" : "Create quotation"}
        </Button>
      </div>
    </form>
  );
}
