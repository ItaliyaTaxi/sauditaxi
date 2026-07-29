import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { deleteQuotation, updateQuotation, type QuotationInput } from "@/lib/quotations";

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

  let body: QuotationInput;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  try {
    const quotation = await updateQuotation(id, body);
    return NextResponse.json({ ok: true, quotation });
  } catch (err) {
    console.error("[admin] update quotation failed:", err);
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
    await deleteQuotation(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] delete quotation failed:", err);
    return NextResponse.json({ ok: false, error: "Delete failed." }, { status: 500 });
  }
}
