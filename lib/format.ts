/** Format an ISO date as e.g. "6 June 2026" for blog metadata. */
export function formatBlogDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}
