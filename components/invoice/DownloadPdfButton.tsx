"use client";

import { useState, type RefObject } from "react";
import { Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Renders the referenced document node to a canvas and embeds it as a
 * single-page PDF sized exactly to that canvas — no browser print dialog
 * (which we can't fully suppress: it always offers "print" as well as
 * "save", and injects its own header/footer). jsPDF's .save() triggers a
 * direct file download instead, straight to the browser's downloads folder.
 */
export function DownloadPdfButton({
  targetRef,
  filename,
}: {
  targetRef: RefObject<HTMLElement | null>;
  filename: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    const node = targetRef.current;
    if (!node) return;
    setBusy(true);
    setError(null);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        // html2canvas-pro (not html2canvas): the original doesn't parse
        // modern CSS color functions (oklch/lab), which Tailwind v4's
        // default palette (neutral-*, green-*, red-*, amber-* etc.) emits —
        // only our custom hex navy/gold survive with the original package.
        import("html2canvas-pro"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      // JPEG, not PNG: the document is mostly white space with flat colors,
      // which a lossless PNG encodes poorly at 2x scale (10MB+ for one
      // page). JPEG at high quality is visually indistinguishable here and
      // roughly an order of magnitude smaller.
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdf = new jsPDF({
        orientation: canvas.width >= canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
        compress: true,
      });
      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
      pdf.save(filename);
    } catch (err) {
      console.error("[pdf] generation failed:", err);
      setError("Could not generate the PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button type="button" variant="gold" size="sm" onClick={handleDownload} disabled={busy}>
        {busy ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
        {busy ? "Preparing…" : "Download PDF"}
      </Button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
