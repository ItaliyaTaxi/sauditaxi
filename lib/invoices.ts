import { getSupabaseAdmin } from "@/lib/supabase";
import type { Lead } from "@/lib/leads";

export const PAYMENT_STATUSES = ["Unpaid", "Paid", "Partially Paid"] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export interface InvoiceLineItem {
  description: string;
  vehicleType: string | null;
  passengers: string | null;
  luggage: string | null;
  amount: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
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
  lineItems: InvoiceLineItem[];
  currency: string;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  notes: string | null;
  invoiceDate: string;
  createdAt: string;
  updatedAt: string;
}

/** Fields accepted when creating/updating an invoice from the admin form. */
export type InvoiceInput = Partial<
  Omit<Invoice, "id" | "invoiceNumber" | "publicToken" | "createdAt" | "updatedAt">
>;

type InvoiceRow = {
  id: string;
  invoice_number: string;
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
  line_items: InvoiceLineItem[];
  currency: string;
  total_amount: number;
  payment_status: string;
  notes: string | null;
  invoice_date: string;
  created_at: string;
  updated_at: string;
};

const TABLE = "invoices";

function rowToInvoice(row: InvoiceRow): Invoice {
  return {
    id: row.id,
    invoiceNumber: row.invoice_number,
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
    lineItems: row.line_items ?? [],
    currency: row.currency,
    totalAmount: Number(row.total_amount),
    paymentStatus: (PAYMENT_STATUSES as readonly string[]).includes(row.payment_status)
      ? (row.payment_status as PaymentStatus)
      : "Unpaid",
    notes: row.notes,
    invoiceDate: row.invoice_date,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function inputToRow(input: InvoiceInput): Partial<InvoiceRow> {
  const row: Partial<InvoiceRow> = {};
  if ("leadId" in input) row.lead_id = input.leadId ?? null;
  if ("clientName" in input) row.client_name = input.clientName ?? null;
  if ("clientPhone" in input) row.client_phone = input.clientPhone ?? null;
  if ("clientEmail" in input) row.client_email = input.clientEmail ?? null;
  if ("serviceType" in input) row.service_type = input.serviceType ?? null;
  if ("pickupLocation" in input) row.pickup_location = input.pickupLocation ?? null;
  if ("dropoffLocation" in input) row.dropoff_location = input.dropoffLocation ?? null;
  if ("date" in input) row.date = input.date ?? null;
  if ("time" in input) row.time = input.time ?? null;
  if ("lineItems" in input) row.line_items = input.lineItems ?? [];
  if ("currency" in input) row.currency = input.currency ?? "SAR";
  if ("totalAmount" in input) row.total_amount = input.totalAmount ?? 0;
  if ("paymentStatus" in input) row.payment_status = input.paymentStatus ?? "Unpaid";
  if ("notes" in input) row.notes = input.notes ?? null;
  if ("invoiceDate" in input) row.invoice_date = input.invoiceDate;

  // Line items are the source of truth for the total unless the caller
  // explicitly overrides totalAmount in the same input (e.g. a discount).
  if ("lineItems" in input && !("totalAmount" in input)) {
    row.total_amount = computeTotal(input.lineItems ?? []);
  }

  return row;
}

/** Sum line item amounts — the default totalAmount unless overridden. */
export function computeTotal(lineItems: InvoiceLineItem[]): number {
  return lineItems.reduce((sum, li) => sum + (Number(li.amount) || 0), 0);
}

/** SPT-{YYYYMMDD}-{seq}, seq = count of invoices created today + 1. */
export async function generateInvoiceNumber(): Promise<string> {
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
  return `SPT-${datePart}-${seq}`;
}

/** Seed an InvoiceInput from a Lead — used by the "create from lead" flow. */
export function invoiceInputFromLead(lead: Lead): InvoiceInput {
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

export async function createInvoice(input: InvoiceInput): Promise<Invoice> {
  const supabase = getSupabaseAdmin();
  const row = inputToRow(input);
  if (row.total_amount === undefined) row.total_amount = computeTotal(input.lineItems ?? []);
  if (!row.invoice_date) row.invoice_date = new Date().toISOString().slice(0, 10);

  for (let attempt = 0; attempt < 2; attempt++) {
    const invoiceNumber = await generateInvoiceNumber();
    const { data, error } = await supabase
      .from(TABLE)
      .insert({ ...row, invoice_number: invoiceNumber })
      .select("*")
      .single();
    if (!error) return rowToInvoice(data as InvoiceRow);
    if (error.code !== UNIQUE_VIOLATION || attempt === 1) throw new Error(error.message);
  }
  throw new Error("Failed to create invoice.");
}

export async function listInvoices(status?: PaymentStatus): Promise<Invoice[]> {
  const supabase = getSupabaseAdmin();
  let query = supabase.from(TABLE).select("*").order("created_at", { ascending: false });
  if (status) query = query.eq("payment_status", status);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data as InvoiceRow[]).map(rowToInvoice);
}

export async function getInvoice(id: string): Promise<Invoice | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToInvoice(data as InvoiceRow) : null;
}

/** Public lookup by unguessable token — never look up a public page by id. */
export async function getInvoiceByToken(token: string): Promise<Invoice | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("public_token", token)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToInvoice(data as InvoiceRow) : null;
}

export async function updateInvoice(id: string, input: InvoiceInput): Promise<Invoice> {
  const supabase = getSupabaseAdmin();
  const row = inputToRow(input);
  const { data, error } = await supabase
    .from(TABLE)
    .update(row)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToInvoice(data as InvoiceRow);
}

export async function updateInvoicePaymentStatus(
  id: string,
  status: PaymentStatus
): Promise<Invoice> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ payment_status: status })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToInvoice(data as InvoiceRow);
}

export async function deleteInvoice(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw new Error(error.message);
}
