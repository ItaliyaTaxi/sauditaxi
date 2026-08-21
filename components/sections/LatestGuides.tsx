import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { listPublishedBlogs, pickDistributed } from "@/lib/blogs";

interface LatestGuidesProps {
  heading?: string;
  subheading?: string;
  /** Prefer posts from this category, then fill with the latest. */
  category?: string;
  /** Exclude a slug (e.g. the current post). */
  exclude?: string;
  /** Identifies the page this block renders on (e.g. the page's own slug/path), so the weekly rotation varies per page instead of showing the identical picks everywhere. */
  pageKey?: string;
  limit?: number;
  background?: "white" | "muted";
}

/**
 * "Latest guides" block — surfaces recent blog posts as internal links on
 * service/city/route/home pages. Improves crawl discovery of new content and
 * acts as a freshness signal. Renders nothing when no posts are published, so
 * static builds never break when the database is empty or unconfigured.
 */
export async function LatestGuides({
  heading = "Latest Travel & Pilgrim Guides",
  subheading = "Practical tips on Umrah, Hajj, airport transfers, and getting around Saudi Arabia.",
  category,
  exclude,
  pageKey,
  limit = 3,
  background = "white",
}: LatestGuidesProps) {
  // This block renders on most service/city/route pages sitewide, so always
  // picking the newest posts would permanently starve everything else in the
  // catalog of internal links as new posts get published. Rotate the
  // selection by a weekly time-bucket instead — every page shows a
  // consistent set within the week (no hydration mismatch), but which posts
  // get featured cycles over time. `pageKey` is folded into the seed so
  // different pages in the same category/week don't all show the identical
  // picks.
  const weekBucket = String(Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)));
  const seed = `${category ?? "all"}:${weekBucket}:${pageKey ?? ""}`;

  const categoryPool = (await listPublishedBlogs({ category })).filter((b) => b.slug !== exclude);
  let blogs = pickDistributed(categoryPool, seed, limit);
  if (blogs.length < limit) {
    const pool = (await listPublishedBlogs()).filter(
      (b) => b.slug !== exclude && !blogs.some((x) => x.slug === b.slug)
    );
    blogs = [...blogs, ...pickDistributed(pool, seed, limit - blogs.length)];
  }
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
