import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { listPublishedBlogs } from "@/lib/blogs";

interface LatestGuidesProps {
  heading?: string;
  subheading?: string;
  /** Prefer posts from this category, then fill with the latest. */
  category?: string;
  /** Exclude a slug (e.g. the current post). */
  exclude?: string;
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
  limit = 3,
  background = "white",
}: LatestGuidesProps) {
  // Prefer the category, then top up with the newest posts overall.
  let blogs = await listPublishedBlogs({ category, limit: limit + 1 });
  if (blogs.length < limit) {
    const latest = await listPublishedBlogs({ limit: limit + 4 });
    for (const b of latest) {
      if (!blogs.some((x) => x.slug === b.slug)) blogs.push(b);
    }
  }
  blogs = blogs.filter((b) => b.slug !== exclude).slice(0, limit);
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
