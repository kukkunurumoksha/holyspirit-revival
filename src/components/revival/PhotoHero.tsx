import { cn } from "@/lib/utils";

interface PhotoHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  overlay?: "gold" | "dark";
  children?: React.ReactNode;
  className?: string;
}

export function PhotoHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  overlay = "gold",
  children,
  className,
}: PhotoHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      {/* Background image with Ken Burns */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="block w-full h-[125vh] object-cover animate-ken-burns"
      />

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          overlay === "gold" ? "photo-overlay-gold" : "photo-overlay-dark"
        )}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="font-serif text-display font-bold drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 font-sans text-body-lg text-white/90 drop-shadow-md md:text-h4">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex justify-center gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
