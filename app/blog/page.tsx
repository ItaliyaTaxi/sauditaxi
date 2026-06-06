import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { heroImages } from "@/lib/hero";
import { listPublishedBlogs, listPublishedCategories } from "@/lib/blogs";
import { cn } from "@/lib/utils";

export const revalidate = 300;

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata: Metadata = buildMetadata({
  title: "Saudi Arabia Taxi Blog | Travel & Transfer Guides",
  description:
    "Expert guides on taxi service in Saudi Arabia — airport transfers, Makkah & Madinah routes, Riyadh travel, intercity transfers, Umrah and Hajj transport.",
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
      <PageHeader
        title="Saudi Arabia Taxi & Travel Blog"
        subtitle="Practical guides to airport transfers, intercity routes, Umrah and Hajj transport, and getting around Saudi Arabia by private taxi."
        crumbs={crumbs}
        backgroundImage={heroImages.city}
        showCtas={false}
      />

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
                    ? "border-gold bg-gold text-navy"
                    : "border-border text-navy hover:border-gold"
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
                      ? "border-gold bg-gold text-navy"
                      : "border-border text-navy hover:border-gold"
                  )}
                >
                  {c.name} <span className="text-muted-foreground">({c.count})</span>
                </Link>
              ))}
            </div>

            <form action="/blog" method="get" className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                name="q"
                defaultValue={q ?? ""}
                placeholder="Search guides…"
                className="h-11 w-full rounded-full border border-input bg-white pl-9 pr-4 text-sm text-navy shadow-sm focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </form>
          </div>

          {/* Results */}
          {blogs.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-border py-16 text-center">
              <p className="text-lg font-semibold text-navy">No articles found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {filtering
                  ? "Try a different category or search term."
                  : "Our travel guides are on the way — check back soon."}
              </p>
              {filtering && (
                <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-navy underline">
                  Clear filters
                </Link>
              )}
            </div>
          ) : (
            <>
              {filtering && (
                <p className="mt-8 text-sm text-muted-foreground">
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
                    <h2 className="mt-14 text-xl font-bold text-navy">Latest guides</h2>
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
