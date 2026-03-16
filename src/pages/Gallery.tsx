import { useEffect, useState, useCallback } from "react";
import { PhotoHero } from "@/components/revival";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = import.meta.glob<string>(
  "/public/images/revival/gallery-optimized/*.webp",
  { eager: true, query: "?url", import: "default" }
);

// Build sorted list of image paths
const images = Object.keys(galleryImages)
  .map((key) => key.replace("/public", ""))
  .sort();

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery — 100 Days of Revival";
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i !== null ? (i - 1 + images.length) % images.length : null
        );
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <div>
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
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
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
