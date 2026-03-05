import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader, PastorCard } from "@/components/revival";
import { pastors } from "@/data/pastors";

const featured = pastors.filter((p) => p.featured).slice(0, 6);

export function PastorsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Pastors & Ministers"
          subtitle="United in one Spirit, used by God across 100 days"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PastorCard
              key={p.id}
              imageSrc={p.imageSrc}
              name={p.name}
              role={p.role}
              quote={p.quotes[0]}
              initials={p.initials}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/pastors"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
          >
            Meet All Pastors
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
