import { cn } from "@/lib/utils";
import { QuoteBlock } from "@/components/revival";

interface StoryQuote {
  quote: string;
  author: string;
  role?: string;
}

interface StorySectionProps {
  id: string;
  title: string;
  paragraphs: string[];
  quotes?: StoryQuote[];
  imageSrc?: string;
  imageAlt?: string;
  videoId?: string;
  dark?: boolean;
}

export function StorySection({
  id,
  title,
  paragraphs,
  quotes,
  imageSrc,
  imageAlt,
  videoId,
  dark,
}: StorySectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark && "section-dark bg-navy"
      )}
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-h2 font-bold text-foreground">{title}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-gold" />

        <div className="mt-8 space-y-6">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-body leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}
        </div>

        {videoId && (
          <div className="mt-10 overflow-hidden rounded-lg shadow-warm-lg aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Revival highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        )}

        {imageSrc && (
          <div className="mt-10 overflow-hidden rounded-lg shadow-warm-lg">
            <img
              src={imageSrc}
              alt={imageAlt || "Revival photo"}
              className="w-full object-cover"
            />
          </div>
        )}

        {quotes && quotes.length > 0 && (
          <div className="mt-10 space-y-8">
            {quotes.map((q, i) => (
              <QuoteBlock
                key={i}
                quote={q.quote}
                author={q.author}
                role={q.role}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
