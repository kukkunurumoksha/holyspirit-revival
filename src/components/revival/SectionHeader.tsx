import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  accent = true,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="font-serif text-h2 font-bold tracking-tight">{title}</h2>
      {accent && (
        <div
          className={cn(
            "mt-4 h-1 w-16 rounded-full bg-gold",
            centered && "mx-auto"
          )}
        />
      )}
      {subtitle && (
        <p className="mt-4 max-w-2xl font-sans text-body-lg text-muted-foreground mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
