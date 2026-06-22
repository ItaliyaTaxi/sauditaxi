import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { listPublishedBlogs } from "@/lib/blogs";

/**
 * "Related guides" block for service pages — surfaces a curated set of blog
 * posts (by slug) relevant to the service, falling back to the latest posts to
 * fill any gaps. Renders nothing when the database is empty/unconfigured, so
 * static builds never break.
 */
export async function RelatedGuides({
  slugs,
  heading = "Related Travel Guides",
  subheading = "Practical, up-to-date guides to help you plan your journey.",
  background = "white",
  limit = 3,
}: {
  slugs: string[];
  heading?: string;
  subheading?: string;
  background?: "white" | "muted";
  limit?: number;
}) {
  const all = await listPublishedBlogs({ limit: 60 });
  if (all.length === 0) return null;

  const bySlug = new Map(all.map((b) => [b.slug, b]));
  const picked = slugs.map((s) => bySlug.get(s)).filter((b): b is NonNullable<typeof b> => Boolean(b));

  // Top up with the newest posts if the curated set is short.
  for (const b of all) {
    if (picked.length >= limit) break;
    if (!picked.some((p) => p.slug === b.slug)) picked.push(b);
  }
  const blogs = picked.slice(0, limit);
  if (blogs.length === 0) return null;

  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">{heading}</h2>
            {subheading && <p className="mt-3 text-muted-foreground">{subheading}</p>}
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
          >
            View all guides <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
