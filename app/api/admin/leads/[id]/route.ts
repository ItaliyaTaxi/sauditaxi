import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import {
  LEAD_STATUSES,
  deleteLead,
  updateLeadStatus,
  type LeadStatus,
} from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function requireAdmin() {
  const session = await getSession();
  return Boolean(session);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  let body: { status?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const status = body.status as LeadStatus;
  if (!status || !(LEAD_STATUSES as readonly string[]).includes(status)) {
    return NextResponse.json({ ok: false, error: "Invalid status." }, { status: 400 });
  }

  try {
    const lead = await updateLeadStatus(id, status);
    return NextResponse.json({ ok: true, lead });
  } catch (err) {
    console.error("[admin] update status failed:", err);
    return NextResponse.json({ ok: false, error: "Update failed." }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  try {
    await deleteLead(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] delete failed:", err);
    return NextResponse.json({ ok: false, error: "Delete failed." }, { status: 500 });
  }
}
