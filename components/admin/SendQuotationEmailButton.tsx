"use client";

import { useState } from "react";
import { Mail, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SendQuotationEmailButton({
  quotationId,
  clientEmail,
}: {
  quotationId: string;
  clientEmail: string | null;
}) {
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  async function send() {
    setBusy(true);
    setFeedback(null);
    try {
      const res = await fetch(`/api/admin/quotations/${quotationId}/send-email`, { method: "POST" });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed to send");
      setFeedback({ ok: true, text: "Quotation emailed to the client." });
    } catch (err) {
      setFeedback({
        ok: false,
        text: err instanceof Error ? err.message : "Failed to send quotation email.",
      });
    } finally {
      setBusy(false);
    }
  }

  if (!clientEmail) {
    return <p className="text-sm text-neutral-500">No client email on file — add one to send the quotation.</p>;
  }

  return (
    <div className="space-y-2">
      <Button type="button" variant="navy" size="sm" onClick={send} disabled={busy}>
        {busy ? <LoaderCircle className="size-4 animate-spin" /> : <Mail className="size-4" />}
        {busy ? "Sending…" : `Email quotation to ${clientEmail}`}
      </Button>
      {feedback && (
        <p className={feedback.ok ? "text-sm text-green-600" : "text-sm text-red-600"}>
          {feedback.text}
        </p>
      )}
    </div>
  );
}
