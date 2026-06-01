import type { JsonLd } from "@/lib/schema";

/**
 * Renders one or more JSON-LD schema blocks. Server component — the script is
 * part of the static HTML so crawlers see it immediately.
 */
export function SchemaScript({ schema }: { schema: JsonLd | JsonLd[] }) {
  const blocks = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe; no user input is interpolated.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
