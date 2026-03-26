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
    id: "beginning",
    title: "The Beginning",
    subtitle: "How it all started — Holy Spirit Revival, Electronic City 2024",
    videos: [
      { type: "youtube" as const, id: "8eKvUki-hw0", title: "HOW IT ALL STARTED? | Holy Spirit Revival, Electronic City 2024 | Episode 1" },
      { type: "youtube" as const, id: "IUt9JF9Bb4g", title: "REWIND | HOW IT ALL STARTED? | Holy Spirit Revival, Electronic City 2024 | Episode 2" },
      { type: "youtube" as const, id: "A-BbT90j6JU", title: "REWIND | HOW IT ALL STARTED? | Holy Spirit Revival, Electronic City 2024 | Episode 3" },
      { type: "youtube" as const, id: "4PHZ71nOoEk", title: "REWIND | HOW IT ALL STARTED? | Holy Spirit Revival, Electronic City 2024 | Episode 4" },
      { type: "youtube" as const, id: "OOvd9a3tKb8", title: "REWIND | HOW IT ALL STARTED? | Holy Spirit Revival, Electronic City 2024 | Episode 5" },
    ],
  },
  {
    id: "impartation",
    title: "Impartation Service",
    subtitle: "Holy Spirit Revival Impartation Conference — Bangalore",
    videos: [
      { type: "youtube" as const, id: "ZnRANxNLILQ", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 1" },
      { type: "youtube" as const, id: "OfFu60ez-GU", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 2" },
      { type: "youtube" as const, id: "j82AOpJDhfo", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 3" },
      { type: "youtube" as const, id: "JYyTkdmY41A", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 4" },
      { type: "youtube" as const, id: "UrIpkIwmXI4", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 5" },
      { type: "youtube" as const, id: "NpffoJtihJ0", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 6" },
      { type: "youtube" as const, id: "AqKP1KQVu2w", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 7" },
      { type: "youtube" as const, id: "Zz01pEu5rx0", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 8" },
      { type: "youtube" as const, id: "BzAtFl0ua2E", title: "Holy Spirit Revival Impartation Conference Bangalore | Part 9" },
    ],
  },
  {
    id: "revival-highlights",
    title: "Revival Highlights",
    subtitle: "Overview videos from the 100 Days of Holy Spirit Revival",
    videos: [
      { type: "youtube" as const, id: "WkziRXKraFE", title: "50 Days of Holy Spirit Revival" },
      { type: "youtube" as const, id: "9BNYwXz9yRE", title: "75 Days of Holy Spirit Revival" },
      { type: "youtube" as const, id: "H6tu2Ch_kKg", title: "100 Days of Holy Spirit Revival" },
    ],
  },
  {
    id: "new-delhi",
    title: "New Delhi — 75th Day",
    subtitle: "Mega Impartation Service · July 1, 2024",
    videos: [
      { type: "youtube" as const, id: "sxGv_J9jhVs", title: "Holy Spirit Revival | Mega Impartation Service — New Delhi | 75th Day Highlights" },
      { type: "youtube" as const, id: "uoBjzhLaZZg", title: "Holy Spirit Revival | Day 79 | Mega Impartation Session | Part-1" },
      { type: "youtube" as const, id: "miWEC78eRGI", title: "Holy Spirit Revival | Day 80 | Mega Impartation Session | Part-2" },
    ],
  },
  {
    id: "uk",
    title: "United Kingdom — 100th Day Celebration",
    subtitle: "July 26–28, 2024",
    videos: [
      { type: "youtube" as const, id: "54aC6iif36E", title: "Holy Spirit Revival in UK | Pr. Raison Thomas | Pr. Damien Antony | Pr. Finny Stephen | Pr. Anish | Part-1" },
      { type: "youtube" as const, id: "ykb0GKMdZqU", title: "Holy Spirit Revival in UK | Pr. Raison Thomas | Pr. Damien Antony | Pr. Finny Stephen | Pr. Anish | Part-2" },
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
                        ) : video.type === "playlist" ? (
                          <iframe
                            src={`https://www.youtube.com/embed/videoseries?list=${video.listId}`}
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
