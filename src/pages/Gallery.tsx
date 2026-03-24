import { useState, useCallback, useEffect } from "react";
import { PhotoHero } from "@/components/revival";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

// Load images per folder
const churchHallImgs = import.meta.glob<string>(
  "/public/images/revival/church-hall/*.webp",
  { eager: true, query: "?url", import: "default" }
);
const conventionImgs = import.meta.glob<string>(
  "/public/images/revival/convention/*.webp",
  { eager: true, query: "?url", import: "default" }
);
const newDelhiImgs = import.meta.glob<string>(
  "/public/images/revival/new-delhi/*.webp",
  { eager: true, query: "?url", import: "default" }
);
const indonesiaImgs = import.meta.glob<string>(
  "/public/images/revival/indonesia/*.webp",
  { eager: true, query: "?url", import: "default" }
);
const ukImgs = import.meta.glob<string>(
  "/public/images/revival/uk/*.webp",
  { eager: true, query: "?url", import: "default" }
);
const irelandImgs = import.meta.glob<string>(
  "/public/images/revival/ireland/*.webp",
  { eager: true, query: "?url", import: "default" }
);
const ugandaImgs = import.meta.glob<string>(
  "/public/images/revival/uganda/*.webp",
  { eager: true, query: "?url", import: "default" }
);

function toUrls(glob: Record<string, string>) {
  return Object.keys(glob).map((k) => k.replace("/public", ""));
}

const sections = [
  {
    id: "bangalore",
    title: "Bangalore — Electronic City",
    subtitle: "Hope in Jesus Church · The birthplace of the revival",
    images: toUrls(churchHallImgs),
  },
  {
    id: "convention",
    title: "VRR Convention",
    subtitle: "Leaders' Impartation · May 9–10, 2024",
    images: toUrls(conventionImgs),
  },
  {
    id: "new-delhi",
    title: "New Delhi — 75th Day Revival",
    subtitle: "Mega Impartation Service · July 1, 2024",
    images: toUrls(newDelhiImgs),
  },
  {
    id: "indonesia",
    title: "Indonesia — International Revival",
    subtitle: "July 6, 2024",
    images: toUrls(indonesiaImgs),
  },
  {
    id: "uk",
    title: "United Kingdom — 100th Day Celebration",
    subtitle: "Thanksgiving Gathering · July 26–28, 2024",
    images: toUrls(ukImgs),
  },
  {
    id: "ireland",
    title: "Ireland — European Revival",
    subtitle: "August 2–4, 2024",
    images: toUrls(irelandImgs),
  },
  {
    id: "uganda",
    title: "Uganda — African Revival",
    subtitle: "January 30, 2025",
    images: toUrls(ugandaImgs),
  },
].filter((s) => s.images.length > 0);

// Flat list of all images with section info for lightbox navigation
const allImages = sections.flatMap((s) =>
  s.images.map((src) => ({ src, sectionTitle: s.title }))
);

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://electroniccityrevival.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://electroniccityrevival.com/gallery" },
  ],
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight")
      setLightboxIndex((i) => (i !== null ? (i + 1) % allImages.length : null));
    if (e.key === "ArrowLeft")
      setLightboxIndex((i) => (i !== null ? (i - 1 + allImages.length) % allImages.length : null));
  }, [closeLightbox]);

  // Build a flat index offset per section for lightbox
  const sectionOffsets: number[] = [];
  let offset = 0;
  for (const s of sections) {
    sectionOffsets.push(offset);
    offset += s.images.length;
  }

  return (
    <div>
      <PageMeta
        title="Gallery"
        description={`${allImages.length}+ photos from the 100 Days of Holy Spirit Revival — Bangalore, New Delhi, Indonesia, UK, Ireland, Uganda.`}
        path="/gallery"
      />
      <JsonLd data={breadcrumb} />

      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-worship-01.webp"
        imageAlt="Packed worship during revival"
        title="Gallery"
        subtitle="Moments captured during 100 days of Holy Spirit Revival"
        overlay="dark"
      />

      {/* Sections */}
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-12 text-center font-sans text-muted-foreground">
            {allImages.length} photos across {sections.length} locations &bull; Click any image to view full size
          </p>

          <div className="space-y-20">
            {sections.map((section, sIdx) => (
              <div key={section.id} id={section.id}>
                {/* Section heading */}
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-1 h-0.5 w-12 rounded-full bg-gold" />
                  {section.subtitle && (
                    <p className="mt-2 font-sans text-sm text-muted-foreground">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                {/* Photo grid */}
                <div className="columns-2 gap-3 sm:columns-3 md:columns-4 lg:columns-5">
                  {section.images.map((src, imgIdx) => {
                    const flatIdx = sectionOffsets[sIdx] + imgIdx;
                    return (
                      <button
                        key={src}
                        onClick={() => setLightboxIndex(flatIdx)}
                        className="mb-3 block w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold group"
                      >
                        <img
                          src={src}
                          alt={`${section.title} — photo ${imgIdx + 1}`}
                          loading="lazy"
                          className="block w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Divider between sections */}
                {sIdx < sections.length - 1 && (
                  <div className="mt-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                    <div className="h-px flex-1 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
          onKeyDown={handleKey}
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute top-4 left-4 z-50 rounded-full bg-white/10 px-3 py-1.5 font-sans text-sm text-white/80 backdrop-blur-sm">
            {allImages[lightboxIndex].sectionTitle} &bull; {lightboxIndex + 1} / {allImages.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length); }}
            className={cn("absolute left-3 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20", "sm:left-6 sm:p-3")}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <img
            key={lightboxIndex}
            src={allImages[lightboxIndex].src}
            alt={`${allImages[lightboxIndex].sectionTitle} photo`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % allImages.length); }}
            className={cn("absolute right-3 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20", "sm:right-6 sm:p-3")}
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
