import { cn } from "@/lib/utils";

interface PastorCardProps {
  imageSrc?: string;
  name: string;
  role: string;
  quote?: string;
  initials?: string;
  className?: string;
  onClick?: () => void;
}

export function PastorCard({
  imageSrc,
  name,
  role,
  quote,
  initials,
  className,
  onClick,
}: PastorCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg bg-card shadow-warm-md transition-shadow hover:shadow-warm-lg",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-navy">
            <span className="font-serif text-display font-bold text-gold/80">
              {initials || name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-h4 font-bold">{name}</h3>
        <p className="mt-1 font-sans text-sm text-gold-dark font-medium">
          {role}
        </p>
        {quote && (
          <p className="mt-3 font-serif text-sm italic text-muted-foreground leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}
