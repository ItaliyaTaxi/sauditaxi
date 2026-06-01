import { getSupabaseAdmin } from "@/lib/supabase";

export const LEAD_STATUSES = [
  "New",
  "Contacted",
  "Quoted",
  "Confirmed",
  "Cancelled",
  "Completed",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export interface Lead {
  id: string;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  pickupLocation: string | null;
  dropoffLocation: string | null;
  date: string | null;
  time: string | null;
  passengers: string | null;
  luggage: string | null;
  vehicleType: string | null;
  flightNumber: string | null;
  message: string | null;
  sourcePage: string | null;
  serviceType: string | null;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

/** Fields accepted when creating a lead (camelCase, from the public forms). */
export type NewLeadInput = Partial<
  Omit<Lead, "id" | "status" | "createdAt" | "updatedAt">
>;

type LeadRow = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  pickup_location: string | null;
  dropoff_location: string | null;
  date: string | null;
  time: string | null;
  passengers: string | null;
  luggage: string | null;
  vehicle_type: string | null;
  flight_number: string | null;
  message: string | null;
  source_page: string | null;
  service_type: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

const TABLE = "leads";

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    pickupLocation: row.pickup_location,
    dropoffLocation: row.dropoff_location,
    date: row.date,
    time: row.time,
    passengers: row.passengers,
    luggage: row.luggage,
    vehicleType: row.vehicle_type,
    flightNumber: row.flight_number,
    message: row.message,
    sourcePage: row.source_page,
    serviceType: row.service_type,
    status: (LEAD_STATUSES as readonly string[]).includes(row.status)
      ? (row.status as LeadStatus)
      : "New",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function inputToRow(input: NewLeadInput): Partial<LeadRow> {
  return {
    full_name: input.fullName ?? null,
    email: input.email ?? null,
    phone: input.phone ?? null,
    pickup_location: input.pickupLocation ?? null,
    dropoff_location: input.dropoffLocation ?? null,
    date: input.date ?? null,
    time: input.time ?? null,
    passengers: input.passengers ?? null,
    luggage: input.luggage ?? null,
    vehicle_type: input.vehicleType ?? null,
    flight_number: input.flightNumber ?? null,
    message: input.message ?? null,
    source_page: input.sourcePage ?? null,
    service_type: input.serviceType ?? null,
  };
}

export async function createLead(input: NewLeadInput): Promise<Lead> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .insert(inputToRow(input))
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToLead(data as LeadRow);
}

export async function listLeads(status?: LeadStatus): Promise<Lead[]> {
  const supabase = getSupabaseAdmin();
  let query = supabase.from(TABLE).select("*").order("created_at", { ascending: false });
  if (status) query = query.eq("status", status);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data as LeadRow[]).map(rowToLead);
}

export async function getLead(id: string): Promise<Lead | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  return data ? rowToLead(data as LeadRow) : null;
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<Lead> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .update({ status })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return rowToLead(data as LeadRow);
}

export async function deleteLead(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export interface LeadStats {
  total: number;
  byStatus: Record<LeadStatus, number>;
  today: number;
}

export async function getLeadStats(): Promise<LeadStats> {
  const leads = await listLeads();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const byStatus = LEAD_STATUSES.reduce(
    (acc, s) => ({ ...acc, [s]: 0 }),
    {} as Record<LeadStatus, number>
  );
  let today = 0;
  for (const lead of leads) {
    byStatus[lead.status] += 1;
    if (new Date(lead.createdAt) >= startOfToday) today += 1;
  }
  return { total: leads.length, byStatus, today };
}

export async function logEmail(input: {
  leadId: string;
  subject: string;
  message: string;
  sentTo: string;
}): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("email_logs").insert({
    lead_id: input.leadId,
    subject: input.subject,
    message: input.message,
    sent_to: input.sentTo,
  });
  if (error) throw new Error(error.message);
}
