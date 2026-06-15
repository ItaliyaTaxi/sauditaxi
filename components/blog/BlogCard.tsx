import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Blog } from "@/lib/blogs";
import { formatBlogDate } from "@/lib/format";

export function BlogCard({ blog, featured = false }: { blog: Blog; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md md:grid-cols-2"
          : "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
      }
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-muted"
        aria-label={blog.title}
      >
        {blog.featuredImage ? (
          <Image
            src={blog.featuredImage}
            alt={blog.featuredImageAlt ?? blog.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized={blog.featuredImage.endsWith(".svg")}
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-navy text-gold">
            <span className="text-sm font-semibold">Saudi Private Transfers</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
          {blog.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{formatBlogDate(blog.publishedAt ?? blog.createdAt)}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" /> {blog.readingTime} min read
          </span>
        </div>

        <h3
          className={
            featured
              ? "mt-3 text-2xl font-bold leading-snug text-navy"
              : "mt-3 text-lg font-bold leading-snug text-navy"
          }
        >
          <Link href={`/blog/${blog.slug}`} className="hover:text-gold">
            {blog.title}
          </Link>
        </h3>

        {blog.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{blog.excerpt}</p>
        )}

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-foreground/90 text-navy hover:text-gold"
        >
          Read guide <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
