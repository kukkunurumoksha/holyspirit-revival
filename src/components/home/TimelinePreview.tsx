import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/revival";
import { milestones } from "@/data/timeline";

export function TimelinePreview() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Revival Timeline"
          subtitle="Key milestones from Bangalore to the nations"
        />

        <div className="relative mt-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/30 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-cream-dark md:left-1/2" />

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-8 rounded-lg border border-border bg-card px-6 py-4 shadow-warm-sm transition-shadow hover:shadow-warm-md md:ml-0 md:w-1/2">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {m.date}
                  </p>
                  <p className="mt-1 font-serif text-base font-semibold text-navy">
                    {m.title}
                  </p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/the-story"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
          >
            Explore the Full Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
