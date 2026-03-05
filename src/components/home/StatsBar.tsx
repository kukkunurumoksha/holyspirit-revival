import { StatCounter } from "@/components/revival";
import { stats } from "@/data/stats";

export function StatsBar() {
  return (
    <section className="section-dark bg-navy py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
