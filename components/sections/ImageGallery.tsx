import Image from "next/image";

/**
 * A single gallery image. Files are added under /public later; until then a
 * page simply carries no images and the gallery renders nothing — so content
 * can be dropped in without any code change (see docs/image-manifest.md).
 */
export interface GalleryImage {
  /** Path under /public, e.g. "/images/airports/jed-terminal.webp". */
  src: string;
  /** Descriptive alt text — required for accessibility. */
  alt: string;
  /** Optional visible caption rendered in <figcaption>. */
  caption?: string;
  /** Intrinsic dimensions to reserve layout space and avoid CLS. */
  width: number;
  height: number;
}

/**
 * Responsive, lazy-loaded image gallery with semantic <figure>/<figcaption>.
 * Renders nothing when there are no images, so it is safe to place on every
 * page ahead of the actual photography.
 */
export function ImageGallery({
  images,
  heading,
  subheading,
  background = "white",
}: {
  images?: GalleryImage[];
  heading?: string;
  subheading?: string;
  background?: "white" | "muted";
}) {
  if (!images || images.length === 0) return null;

  return (
    <section
      className={
        background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-3 text-muted-foreground">{subheading}</p>
            )}
          </div>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
