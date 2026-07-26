"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export function DeleteInvoiceButton({
  invoiceId,
  redirectTo,
  variant = "outline",
  label = "Delete invoice",
}: {
  invoiceId: string;
  redirectTo?: string;
  variant?: "outline" | "ghost";
  label?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function confirmDelete() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/invoices/${invoiceId}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setOpen(false);
      if (redirectTo) router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Could not delete the invoice. Please try again.");
      setBusy(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size="sm"
        onClick={() => setOpen(true)}
        className="text-red-600 hover:bg-red-600 hover:text-white"
      >
        <Trash2 className="size-4" />
        {label}
      </Button>

      <Dialog open={open} onClose={() => !busy && setOpen(false)} title="Delete this invoice?">
        <p className="text-sm text-neutral-600">
          Are you sure you want to delete this invoice? This action cannot be undone.
        </p>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <div className="mt-5 flex justify-end gap-3">
          <Button type="button" variant="ghost" size="sm" onClick={() => setOpen(false)} disabled={busy}>
            Cancel
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={confirmDelete}
            disabled={busy}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {busy && <LoaderCircle className="size-4 animate-spin" />}
            {busy ? "Deleting…" : "Delete"}
          </Button>
        </div>
      </Dialog>
    </>
  );
}
