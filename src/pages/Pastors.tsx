import { useState } from "react";
import { PhotoHero, PastorCard } from "@/components/revival";
import { PastorProfile } from "@/components/pastors/PastorProfile";
import { pastors, type Pastor } from "@/data/pastors";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://electroniccityrevival.com/" },
    { "@type": "ListItem", position: 2, name: "Pastors & Ministers", item: "https://electroniccityrevival.com/pastors" },
  ],
};

const Pastors = () => {
  const [selected, setSelected] = useState<Pastor | null>(null);

  return (
    <div>
      <PageMeta
        title="Pastors & Ministers"
        description="Meet the pastors and ministers who led the 100 Days of Holy Spirit Revival at Hope in Jesus Church, Electronic City, Bangalore."
        path="/pastors"
      />
      <JsonLd data={breadcrumb} />

      <PhotoHero
        imageSrc="/images/revival/convention/large-venue-crowd-worship.webp"
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
