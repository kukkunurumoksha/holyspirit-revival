import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/revival";
import { milestones } from "@/data/timeline";

const previewMilestones = milestones.filter((m) => m.dayNumber);

export function TimelinePreview() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Revival Timeline"
          subtitle="Key milestones across 100 days"
        />

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {previewMilestones.map((m, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-lg border border-border bg-card px-6 py-4 shadow-warm-sm transition-shadow hover:shadow-warm-md"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-dark">
                {m.dayNumber ? `Day ${m.dayNumber}` : m.date}
              </p>
              <p className="mt-1 font-serif text-sm font-semibold whitespace-nowrap">
                {m.title.replace(/^Day \d+ — /, "")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
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
