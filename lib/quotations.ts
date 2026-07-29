import { getSupabaseAdmin } from "@/lib/supabase";
import type { Lead } from "@/lib/leads";

export const QUOTE_STATUSES = ["Draft", "Sent", "Accepted", "Declined", "Expired"] as const;
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const DEFAULT_PAYMENT_TERMS =
  "A 50% deposit confirms this booking; the balance is due on the day of service.";
export const DEFAULT_CANCELLATION_POLICY =
  "Free cancellation up to 24 hours before pickup. Cancellations within 24 hours may be subject to a fee.";

export interface QuotationLineItem {
  description: string;
  vehicleType: string | null;
  passengers: string | null;
  luggage: string | null;
  amount: number;
}

export interface Quotation {
  id: string;
  quoteNumber: string;
  publicToken: string;
  leadId: string | null;
  clientName: string | null;
  clientPhone: string | null;
  clientEmail: string | null;
  serviceType: string | null;
  pickupLocation: string | null;
  dropoffLocation: string | null;
  date: string | null;
  time: string | null;
  flightNumber: string | null;
  specialRequests: string | null;
  bookingReference: string | null;
  lineItems: QuotationLineItem[];
  currency: string;
  totalAmount: number;
  paymentTerms: string | null;
  cancellationPolicy: string | null;
  notes: string | null;
  status: QuoteStatus;
  quoteDate: string;
  validUntil: string | null;
  createdAt: string;
  updatedAt: string;
}

/** Fields accepted when creating/updating a quotation from the admin form. */
export type QuotationInput = Partial<
  Omit<Quotation, "id" | "quoteNumber" | "publicToken" | "createdAt" | "updatedAt">
>;

type QuotationRow = {
  id: string;
  quote_number: string;
  public_token: string;
  lead_id: string | null;
  client_name: string | null;
  client_phone: string | null;
  client_email: string | null;
  service_type: string | null;
  pickup_location: string | null;
  dropoff_location: string | null;
  date: string | null;
  time: string | null;
  flight_number: string | null;
  special_requests: string | null;
  booking_reference: string | null;
  line_items: QuotationLineItem[];
  currency: string;
  total_amount: number;
  payment_terms: string | null;
  cancellation_policy: string | null;
  notes: string | null;
  status: string;
  quote_date: string;
  valid_until: string | null;
  created_at: string;
  updated_at: string;
};

const TABLE = "quotations";

function rowToQuotation(row: QuotationRow): Quotation {
  return {
    id: row.id,
    quoteNumber: row.quote_number,
    publicToken: row.public_token,
    leadId: row.lead_id,
    clientName: row.client_name,
    clientPhone: row.client_phone,
    clientEmail: row.client_email,
    serviceType: row.service_type,
    pickupLocation: row.pickup_location,
    dropoffLocation: row.dropoff_location,
    date: row.date,
    time: row.time,
    flightNumber: row.flight_number,
    specialRequests: row.special_requests,
    bookingReference: row.booking_reference,
    lineItems: row.line_items ?? [],
    currency: row.currency,
    totalAmount: Number(row.total_amount),
    paymentTerms: row.payment_terms,
    cancellationPolicy: row.cancellation_policy,
    notes: row.notes,
    status: (QUOTE_STATUSES as readonly string[]).includes(row.status)
      ? (row.status as QuoteStatus)
      : "Draft",
    quoteDate: row.quote_date,
    validUntil: row.valid_until,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function inputToRow(input: QuotationInput): Partial<QuotationRow> {
  const row: Partial<QuotationRow> = {};
  if ("leadId" in input) row.lead_id = input.leadId ?? null;
  if ("clientName" in input) row.client_name = input.clientName ?? null;
  if ("clientPhone" in input) row.client_phone = input.clientPhone ?? null;
  if ("clientEmail" in input) row.client_email = input.clientEmail ?? null;
  if ("serviceType" in input) row.service_type = input.serviceType ?? null;
  if ("pickupLocation" in input) row.pickup_location = input.pickupLocation ?? null;
  if ("dropoffLocation" in input) row.dropoff_location = input.dropoffLocation ?? null;
  if ("date" in input) row.date = input.date ?? null;
  if ("time" in input) row.time = input.time ?? null;
  if ("flightNumber" in input) row.flight_number = input.flightNumber ?? null;
  if ("specialRequests" in input) row.special_requests = input.specialRequests ?? null;
  if ("bookingReference" in input) row.booking_reference = input.bookingReference ?? null;
  if ("lineItems" in input) row.line_items = input.lineItems ?? [];
  if ("currency" in input) row.currency = input.currency ?? "SAR";
  if ("totalAmount" in input) row.total_amount = input.totalAmount ?? 0;
  if ("paymentTerms" in input) row.payment_terms = input.paymentTerms ?? null;
  if ("cancellationPolicy" in input) row.cancellation_policy = input.cancellationPolicy ?? null;
  if ("notes" in input) row.notes = input.notes ?? null;
  if ("status" in input) row.status = input.status ?? "Draft";
  if ("quoteDate" in input) row.quote_date = input.quoteDate;
  if ("validUntil" in input) row.valid_until = input.validUntil ?? null;

  // Line items are the source of truth for the total unless the caller
  // explicitly overrides totalAmount in the same input (e.g. a discount).
  if ("lineItems" in input && !("totalAmount" in input)) {
    row.total_amount = computeTotal(input.lineItems ?? []);
  }

  return row;
}

/** Sum line item amounts — the default totalAmount unless overridden. */
export function computeTotal(lineItems: QuotationLineItem[]): number {
  return lineItems.reduce((sum, li) => sum + (Number(li.amount) || 0), 0);
}

/** QUO-{YYYYMMDD}-{seq}, seq = count of quotations created today + 1. */
export async function generateQuoteNumber(): Promise<string> {
  const supabase = getSupabaseAdmin();
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const datePart = `${yyyy}${mm}${dd}`;

  const startOfDay = new Date(now);
  startOfDay.setHours(0, 0, 0, 0);

  const { count, error } = await supabase
    .from(TABLE)
    .select("*", { count: "exact", head: true })
    .gte("created_at", startOfDay.toISOString());
  if (error) throw new Error(error.message);

  const seq = String((count ?? 0) + 1).padStart(2, "0");
  return `QUO-${datePart}-${seq}`;
}

/** Seed a QuotationInput from a Lead — used by the "create from lead" flow. */
export function quotationInputFromLead(lead: Lead): QuotationInput {
  const description =
    [
      lead.serviceType,
      lead.pickupLocation && lead.dropoffLocation
        ? `${lead.pickupLocation} → ${lead.dropoffLocation}`
        : null,
    ]
      .filter(Boolean)
      .join(" — ") || "Transfer";

  return {
    leadId: lead.id,
    clientName: lead.fullName,
    clientPhone: lead.phone,
    clientEmail: lead.email,
    serviceType: lead.serviceType,
    pickupLocation: lead.pickupLocation,
    dropoffLocation: lead.dropoffLocation,
    date: lead.date,
    time: lead.time,
    flightNumber: lead.flightNumber,
    paymentTerms: DEFAULT_PAYMENT_TERMS,
    cancellationPolicy: DEFAULT_CANCELLATION_POLICY,
    lineItems: [
      {
        description,
        vehicleType: lead.vehicleType,
        passengers: lead.passengers,
        luggage: lead.luggage,
        amount: 0,
      },
    ],
  };
}

/** Postgres unique_violation error code. */
const UNIQUE_VIOLATION = "23505";

export async function createQuotation(input: QuotationInput): Promise<Quotation> {
  const supabase = getSupabaseAdmin();
  const row = inputToRow(input);
  if (row.total_amount === undefined) row.total_amount = computeTotal(input.lineItems ?? []);
  if (!row.quote_date) row.quote_date = new Date().toISOString().slice(0, 10);
  if (row.status === undefined) row.status = "Draft";

  for (let attempt = 0; attempt < 2; attempt++) {
    const quoteNumber = await generateQuoteNumber();
    const { data, error } = await supabase
      .from(TABLE)
      .insert({ ...row, quote_number: quoteNumber })
      .select("*")
      .single();
    if (!error) return rowToQuotation(data as QuotationRow);
    if (error.code !== UNIQUE_VIOLATION || attempt === 1) throw new Error(error.message);
  }
  throw new Error("Failed to create quotation.");
}

export async function listQuotations(status?: QuoteStatus): Promise<Quotation[]> {
  const supabase = getSupabaseAdmin();
  let query = supabase.from(TABLE).select("*").order("created_at", { ascending: false });
  if (status) query = query.eq("status", status);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data as QuotationRow[]).map(rowToQuotation);
}

export async function getQuotation(id: string): Promise<Quotation | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToQuotation(data as QuotationRow) : null;
}

/** Public lookup by unguessable token — never look up a public page by id. */
export async function getQuotationByToken(token: string): Promise<Quotation | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("public_token", token)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToQuotation(data as QuotationRow) : null;
}

export async function updateQuotation(id: string, input: QuotationInput): Promise<Quotation> {
  const supabase = getSupabaseAdmin();
  const row = inputToRow(input);
  const { data, error } = await supabase
    .from(TABLE)
    .update(row)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToQuotation(data as QuotationRow);
}

export async function updateQuotationStatus(
  id: string,
  status: QuoteStatus
): Promise<Quotation> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ status })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToQuotation(data as QuotationRow);
}

export async function deleteQuotation(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw new Error(error.message);
}
