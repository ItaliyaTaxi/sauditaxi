import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { listPublishedBlogs, listPublishedCategories } from "@/lib/blogs";
import { cn } from "@/lib/utils";

export const revalidate = 300;

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata: Metadata = buildMetadata({
  title: "Saudi Arabia Travel & Transfer Guides – Blog",
  description:
    "Expert guides on getting around Saudi Arabia — airport transfers, Makkah and Madinah routes, Riyadh travel, and Umrah and Hajj transport tips.",
  path: "/blog",
});

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category, q } = await searchParams;
  const filtering = Boolean(category || q);

  const [blogs, categories] = await Promise.all([
    listPublishedBlogs({ category, search: q }),
    listPublishedCategories(),
  ]);

  const featured = !filtering ? blogs[0] : undefined;
  const rest = featured ? blogs.slice(1) : blogs;

  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />

      {/* Hero — editorial identity for the blog, distinct from the City Hub /
          Point Transfer heroes, still on the Midnight/Sand/Brass system. */}
      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5 text-white/40 rtl:rotate-180" />}
                {i === crumbs.length - 1 ? (
                  <span className="text-white/85">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            Travel &amp; Transfer Guides
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Saudi Arabia Taxi &amp; Travel Blog
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Practical guides to airport transfers, intercity routes, Umrah and Hajj transport, and
            getting around Saudi Arabia by private taxi.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters + search */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog"
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  !category
                    ? "border-brass bg-brass text-midnight"
                    : "border-hairline text-ink hover:border-brass"
                )}
              >
                All
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.name}
                  href={`/blog?category=${encodeURIComponent(c.name)}`}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                    category === c.name
                      ? "border-brass bg-brass text-midnight"
                      : "border-hairline text-ink hover:border-brass"
                  )}
                >
                  {c.name} <span className="text-ink-muted">({c.count})</span>
                </Link>
              ))}
            </div>

            <form action="/blog" method="get" className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted" />
              <input
                type="search"
                name="q"
                defaultValue={q ?? ""}
                placeholder="Search guides…"
                className="h-11 w-full rounded-full border border-hairline bg-white pl-9 pr-4 text-sm text-ink focus-visible:border-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/30"
              />
            </form>
          </div>

          {/* Results */}
          {blogs.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-hairline py-16 text-center">
              <p className="text-lg font-semibold text-ink">No articles found</p>
              <p className="mt-1 text-sm text-ink-soft">
                {filtering
                  ? "Try a different category or search term."
                  : "Our travel guides are on the way — check back soon."}
              </p>
              {filtering && (
                <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-ink underline">
                  Clear filters
                </Link>
              )}
            </div>
          ) : (
            <>
              {filtering && (
                <p className="mt-8 text-sm text-ink-soft">
                  {blogs.length} {blogs.length === 1 ? "article" : "articles"}
                  {category ? ` in ${category}` : ""}
                  {q ? ` matching “${q}”` : ""}
                </p>
              )}

              {featured && (
                <div className="mt-8">
                  <BlogCard blog={featured} featured />
                </div>
              )}

              {rest.length > 0 && (
                <>
                  {!filtering && (
                    <h2 className="mt-14 text-xl font-bold text-ink">Latest guides</h2>
                  )}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((b) => (
                      <BlogCard key={b.id} blog={b} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
