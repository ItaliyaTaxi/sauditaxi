"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyInvoiceLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
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
        {copied ? "Copied" : "Copy client link"}
      </Button>
      <Button asChild variant="outline" size="sm">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="size-4" /> Open client link
        </a>
      </Button>
    </div>
  );
}
