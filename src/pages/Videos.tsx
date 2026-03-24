import { PhotoHero } from "@/components/revival";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://electroniccityrevival.com/" },
    { "@type": "ListItem", position: 2, name: "Videos", item: "https://electroniccityrevival.com/videos" },
  ],
};

const videoSections = [
  {
    id: "prophecy",
    title: "Prophetic Confirmation",
    subtitle: "April 16, 2024 — Before the revival began",
    videos: [
      { type: "local" as const, src: "/vedios/prophetic.mp4", poster: "/images/revival/thumbnail/prophetic.jpeg", title: "Prophetic Word — Pastor T. Jijo Thomas" },
    ],
  },
  {
    id: "revival-highlights",
    title: "Revival Highlights",
    subtitle: "Key moments from the 100 Days of Holy Spirit Revival",
    videos: [
      { type: "youtube" as const, id: "WkziRXKraFE", title: "50 Days of Holy Spirit Revival" },
      { type: "youtube" as const, id: "9BNYwXz9yRE", title: "75th Day — New Delhi Impartation Service" },
      { type: "youtube" as const, id: "H6tu2Ch_kKg", title: "100 Days of Holy Spirit Revival" },
    ],
  },
];

const Videos = () => {
  return (
    <div>
      <PageMeta
        title="Videos"
        description="Watch videos from the 100 Days of Holy Spirit Revival — prophetic words, revival highlights, and messages from the nations."
        path="/videos"
      />
      <JsonLd data={breadcrumb} />

      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-worship-01.webp"
        imageAlt="Revival worship"
        title="Videos"
        subtitle="Prophetic words, revival moments, and messages from the nations"
        overlay="dark"
      />

      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-16">
            {videoSections.map((section) => (
              <div key={section.id} id={section.id}>
                {/* Section heading */}
                <div className="mb-8">
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

                {/* Video grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.videos.map((video, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
                      <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-black">
                        {video.type === "youtube" ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                          />
                        ) : (
                          <video
                            src={video.src}
                            poster={video.poster}
                            controls
                            className="h-full w-full object-cover"
                            style={{ objectFit: "cover" }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                      <div className="px-4 py-3">
                        <p className="font-sans text-sm font-medium text-foreground">
                          {video.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
