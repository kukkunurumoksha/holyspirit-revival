import { useEffect, useState } from "react";
import { PhotoHero, PastorCard } from "@/components/revival";
import { PastorProfile } from "@/components/pastors/PastorProfile";
import { pastors, type Pastor } from "@/data/pastors";

const Pastors = () => {
  const [selected, setSelected] = useState<Pastor | null>(null);

  useEffect(() => {
    document.title = "Pastors & Ministers — 100 Days of Revival";
  }, []);

  return (
    <div>
      <PhotoHero
        imageSrc="/images/revival/convention/large-venue-crowd-worship.jpg"
        imageAlt="Worship at large venue"
        title="Pastors & Ministers"
        subtitle="United in one Spirit, one vision"
        overlay="dark"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pastors.map((p) => (
              <PastorCard
                key={p.id}
                imageSrc={p.imageSrc}
                name={p.name}
                role={p.role}
                quote={p.quotes[0]}
                initials={p.initials}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </div>
      </section>

      <PastorProfile
        pastor={selected}
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </div>
  );
};

export default Pastors;
