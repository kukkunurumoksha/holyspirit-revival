import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  author: string;
  role?: string;
  variant?: "inline" | "featured";
  className?: string;
}

export function QuoteBlock({
  quote,
  author,
  role,
  variant = "inline",
  className,
}: QuoteBlockProps) {
  if (variant === "featured") {
    return (
      <div
        className={cn(
          "w-full py-16 md:py-20 section-dark bg-navy text-cream",
          className
        )}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-h3 italic leading-relaxed md:text-h2">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-sans text-body font-semibold text-gold">
              {author}
            </p>
            {role && (
              <p className="font-sans text-sm text-cream/70">{role}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <blockquote
      className={cn(
        "border-l-4 border-gold pl-6 py-2",
        className
      )}
    >
      <p className="font-serif text-h3 italic leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4">
        <p className="font-sans text-body font-semibold text-foreground">{author}</p>
        {role && (
          <p className="font-sans text-sm text-muted-foreground">{role}</p>
        )}
      </footer>
    </blockquote>
  );
}
