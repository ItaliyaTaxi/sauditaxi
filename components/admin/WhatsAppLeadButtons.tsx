"use client";

import { useState } from "react";
import { MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lead } from "@/lib/leads";

function buildMessage(lead: Lead): string {
  const lines = [
    `Hello ${lead.fullName ?? ""}, regarding your taxi request:`,
    "",
    lead.pickupLocation ? `Pickup: ${lead.pickupLocation}` : "",
    lead.dropoffLocation ? `Drop-off: ${lead.dropoffLocation}` : "",
    lead.date ? `Date: ${lead.date}` : "",
    lead.time ? `Time: ${lead.time}` : "",
    lead.passengers ? `Passengers: ${lead.passengers}` : "",
    lead.vehicleType ? `Vehicle: ${lead.vehicleType}` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

export function WhatsAppLeadButtons({ lead }: { lead: Lead }) {
  const [copied, setCopied] = useState(false);
  const message = buildMessage(lead);
  const digits = (lead.phone ?? "").replace(/\D/g, "");
  const chatUrl = digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable */
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="ghost" size="sm" onClick={copy}>
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy WhatsApp message"}
      </Button>
      {chatUrl && (
        <Button asChild variant="whatsapp" size="sm">
          <a href={chatUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" />
            Open WhatsApp chat
          </a>
        </Button>
      )}
    </div>
  );
}
