import { PhotoHero, SectionHeader, PastorCard, ScriptureRibbon } from "@/components/revival";
import { church } from "@/data/church";
import { pastors } from "@/data/pastors";
import { scriptures } from "@/data/scriptures";
import { MapPin, Clock, Globe } from "lucide-react";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

const seniorPastor = pastors.find((p) => p.id === "anish-mano-stephen")!;

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://electroniccityrevival.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://electroniccityrevival.com/about" },
  ],
};

const About = () => {
  return (
    <div>
      <PageMeta
        title="About"
        description="Hope in Jesus Apostolic Church of Christ, Electronic City, Bangalore — the home of the 100 Days of Holy Spirit Revival."
        path="/about"
      />
      <JsonLd data={breadcrumb} />

      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-full-hall.webp"
        imageAlt="Packed church hall"
        title="About Hope in Jesus Apostolic Church of Christ"
        subtitle="A community of believers passionate about the presence and power of the Holy Spirit"
        overlay="dark"
      />

      {/* Church info */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader title="Our Church" subtitle={church.address} />
          <p className="font-sans text-body leading-relaxed text-muted-foreground">
            {church.founding}
          </p>
        </div>
      </section>

      {/* Senior Pastor */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader title="Senior Pastor" />
          <div className="mx-auto max-w-sm">
            <PastorCard
              imageSrc={seniorPastor.imageSrc}
              name={seniorPastor.name}
              role={seniorPastor.role}
              quote={seniorPastor.quotes[0]}
              initials={seniorPastor.initials}
            />
          </div>
        </div>
      </section>

      {/* Services & Languages */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader title="Services & Languages" />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-serif text-h4 font-bold">Service Times</h3>
              </div>
              <div className="space-y-3">
                {church.services.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-card p-4 shadow-warm-sm"
                  >
                    <p className="font-sans text-sm font-semibold">{s.type}</p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {s.day} — {s.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-5 w-5 text-gold" />
                <h3 className="font-serif text-h4 font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {church.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border bg-card px-4 py-2 font-sans text-sm shadow-warm-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-gold" />
            <h3 className="font-serif text-h3 font-bold">Visit Us</h3>
          </div>
          <p className="font-sans text-body text-muted-foreground">
            {church.name}
          </p>
          <p className="font-sans text-body text-muted-foreground">
            {church.address}
          </p>
        </div>
      </section>

      <ScriptureRibbon
        text={scriptures.acts2.text}
        reference={scriptures.acts2.reference}
      />
    </div>
  );
};

export default About;
