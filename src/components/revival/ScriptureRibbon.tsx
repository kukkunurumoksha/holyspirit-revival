import { cn } from "@/lib/utils";

interface ScriptureRibbonProps {
  text: string;
  reference: string;
  className?: string;
}

export function ScriptureRibbon({
  text,
  reference,
  className,
}: ScriptureRibbonProps) {
  return (
    <div
      className={cn(
        "w-full bg-cream-dark py-12 md:py-16",
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-gold" />
        <p className="font-serif text-body-lg italic leading-relaxed text-foreground md:text-h3">
          &ldquo;{text}&rdquo;
        </p>
        <p className="mt-4 font-sans text-sm font-medium tracking-wide text-gold-dark uppercase">
          {reference}
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" />
      </div>
    </div>
  );
}
