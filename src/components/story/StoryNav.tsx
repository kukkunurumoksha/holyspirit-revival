import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface StoryNavProps {
  sections: { id: string; label: string }[];
}

export function StoryNav({ sections }: StoryNavProps) {
  const activeId = useScrollSpy(
    sections.map((s) => s.id),
    120
  );

  return (
    <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 scrollbar-hide">
        <nav className="flex gap-1 py-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "whitespace-nowrap rounded-md px-3 py-2 font-sans text-sm font-medium transition-colors",
                activeId === s.id
                  ? "bg-gold/10 text-gold-dark"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
