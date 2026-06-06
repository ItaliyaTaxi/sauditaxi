/**
 * Renders stored blog HTML with article typography. Content is authored by us
 * (seeded server-side), not user-submitted, so dangerouslySetInnerHTML is safe.
 */
export function BlogContent({ html }: { html: string }) {
  return <div className="blog-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
