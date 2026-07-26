"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select } from "@/components/ui/select";
import { PAYMENT_STATUSES, type PaymentStatus } from "@/lib/invoices";

export function PaymentStatusSelect({
  invoiceId,
  status,
}: {
  invoiceId: string;
  status: PaymentStatus;
}) {
  const router = useRouter();
  const [value, setValue] = useState<PaymentStatus>(status);
  const [saving, setSaving] = useState(false);

  async function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as PaymentStatus;
    const prev = value;
    setValue(next);
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/invoices/${invoiceId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentStatus: next }),
      });
      if (!res.ok) throw new Error();
      router.refresh();
    } catch {
      setValue(prev);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Select
      value={value}
      onChange={onChange}
      disabled={saving}
      aria-label="Update payment status"
      className="h-9 w-40 text-sm"
    >
      {PAYMENT_STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </Select>
  );
}
