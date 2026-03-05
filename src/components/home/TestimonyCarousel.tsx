import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/revival";
import { testimonies } from "@/data/testimonies";

export function TestimonyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Voices of Revival"
          subtitle="Testimonies from those who witnessed the move of God"
        />

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonies.map((t, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_33%]"
                >
                  <div className="rounded-lg border border-border bg-card p-6 shadow-warm-md h-full flex flex-col">
                    <span className="inline-block self-start rounded-full bg-fire/10 px-3 py-1 font-sans text-xs font-semibold text-fire">
                      {t.category}
                    </span>
                    <p className="mt-4 flex-1 font-serif text-body italic leading-relaxed text-foreground">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="font-sans text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
