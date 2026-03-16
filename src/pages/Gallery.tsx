import { useState, useCallback, useEffect } from "react";
import { PhotoHero } from "@/components/revival";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

const galleryImages = import.meta.glob<string>(
  "/public/images/revival/gallery-optimized/*.webp",
  { eager: true, query: "?url", import: "default" }
);

// Build shuffled list of image paths (seeded for consistent order per session)
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const images = shuffle(
  Object.keys(galleryImages).map((key) => key.replace("/public", ""))
);

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://electroniccityrevival.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://electroniccityrevival.com/gallery" },
  ],
};

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "100 Days of Holy Spirit Revival — Gallery",
  description: "Photos from the 100 Days of Holy Spirit Revival at Hope in Jesus Church, Electronic City, Bangalore.",
  image: images.slice(0, 20).map((src) => ({
    "@type": "ImageObject",
    contentUrl: `https://electroniccityrevival.com${src}`,
  })),
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard handler via onKeyDown on the lightbox div
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i !== null ? (i - 1 + images.length) % images.length : null
        );
    },
    [closeLightbox]
  );

  return (
    <div>
      <PageMeta
        title="Gallery"
        description={`${images.length}+ photos from the 100 Days of Holy Spirit Revival at Hope in Jesus Church, Electronic City, Bangalore.`}
        path="/gallery"
      />
      <JsonLd data={breadcrumb} />
      <JsonLd data={imageGallerySchema} />

      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-worship-01.webp"
        imageAlt="Packed worship during revival"
        title="Gallery"
        subtitle="Moments captured during 100 days of Holy Spirit Revival"
        overlay="dark"
      />

      {/* Gallery grid */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-8 text-center font-sans text-muted-foreground">
            {images.length} photos &bull; Click any image to view full size
          </p>

          <div className="columns-2 gap-3 sm:columns-3 md:columns-4 lg:columns-5">
            {images.map((src, index) => (
              <button
                key={src}
                onClick={() => openLightbox(index)}
                className="mb-3 block w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold group"
              >
                <img
                  src={src}
                  alt={`Revival moment ${index + 1}`}
                  loading="lazy"
                  className="block w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
          onKeyDown={handleKey}
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-50 rounded-full bg-white/10 px-3 py-1.5 font-sans text-sm text-white/80 backdrop-blur-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + images.length) % images.length
              );
            }}
            className={cn(
              "absolute left-3 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20",
              "sm:left-6 sm:p-3"
            )}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <img
            key={lightboxIndex}
            src={images[lightboxIndex]}
            alt={`Revival moment ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % images.length);
            }}
            className={cn(
              "absolute right-3 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20",
              "sm:right-6 sm:p-3"
            )}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
