"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select } from "@/components/ui/select";
import { QUOTE_STATUSES, type QuoteStatus } from "@/lib/quotations";

export function QuoteStatusSelect({
  quotationId,
  status,
}: {
  quotationId: string;
  status: QuoteStatus;
}) {
  const router = useRouter();
  const [value, setValue] = useState<QuoteStatus>(status);
  const [saving, setSaving] = useState(false);

  async function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as QuoteStatus;
    const prev = value;
    setValue(next);
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/quotations/${quotationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
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
      aria-label="Update quote status"
      className="h-9 w-40 text-sm"
    >
      {QUOTE_STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </Select>
  );
}
