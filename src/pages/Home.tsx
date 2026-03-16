import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InteractiveHero, ScriptureRibbon, SectionHeader } from "@/components/revival";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonyCarousel } from "@/components/home/TestimonyCarousel";
import { TimelinePreview } from "@/components/home/TimelinePreview";
import { PastorsGrid } from "@/components/home/PastorsGrid";
import { scriptures } from "@/data/scriptures";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "100 Days of Holy Spirit Revival",
  startDate: "2024-04-18",
  endDate: "2024-07-26",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Hope in Jesus Apostolic Church of Christ",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Electronic City, Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Hope in Jesus Apostolic Church of Christ",
    url: "https://electroniccityrevival.com",
  },
  description:
    "100 days of continuous Holy Spirit revival at Hope in Jesus Church, Electronic City, Bangalore. April 18 – July 26, 2024. 25+ nations, millions worldwide.",
};

const Home = () => {
  return (
    <div>
      <PageMeta
        title="100 Days of Holy Spirit Revival | Electronic City, Bangalore"
        description="100 Days of Holy Spirit Revival at Hope in Jesus Church, Electronic City, Bangalore. April 18 – July 26, 2024. 25+ nations, millions worldwide — a sovereign move of the Holy Spirit."
        path="/"
      />
      <JsonLd data={eventSchema} />

      <InteractiveHero
        imageSrc="/images/revival/church-hall/packed-family-crowd.webp"
        imageAlt="Packed church hall with families during revival"
        title="100 Days of Holy Spirit Revival"
        subtitle="What began as a single question on April 18, 2024 became 100 days of 24/7 nonstop worship, prayer, and revival that touched nations."
        overlay="gold"
      >
        <p className="rounded-full border border-white/30 bg-white/10 px-6 py-2 font-sans text-sm font-semibold tracking-wide text-white backdrop-blur-sm md:text-base">
          April 18 – July 26, 2024 &bull; 100 Days of Holy Spirit Revival
        </p>
        <Button asChild size="lg" className="bg-gold text-white hover:bg-gold-light">
          <Link to="/the-story">Read the Story</Link>
        </Button>
      </InteractiveHero>

      {/* How It Started */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            title="How the Revival Started"
            subtitle="From a 21-day fast to a move of God that shook the nations"
          />
          <div className="space-y-6 font-sans text-body leading-relaxed text-muted-foreground">
            <p>
              In April 2024, the church in Electronic City, Bangalore was on its 18th day of a
              21-day period of fasting and prayer. During these penultimate days of sobriety at Hope
              in Jesus Church, Pastor Raison Thomas delivered a message from the word of God. Just
              as Jesus did on the last and greatest day of the festival, the Pastor cried out from{" "}
              <strong className="text-foreground">John 7:37</strong>:
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-2 font-serif text-lg italic text-foreground md:text-xl">
              "Let anyone who is thirsty come to Me and drink."
            </blockquote>
            <p>
              That single question — <em>"Are you thirsty?"</em> — rapidly changed the entire
              spiritual atmosphere. The sessions prolonged beyond all timelines and schedules, with
              worship that never stopped. Pastors sensed a cloud "the size of a man's fist" for the
              torrent on the way.
            </p>
            <p>
              This paved the way for the ongoing Holy Spirit Revival that has touched thousands of
              people in person and over 2.5 million people online worldwide. The revival started to
              spread like fire — with pastors from different states across India and other parts of
              the world arriving to experience the tangible presence of the Holy Spirit.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/the-story">Read the Full Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsBar />
      <TestimonyCarousel />
      <TimelinePreview />
      <PastorsGrid />

      <ScriptureRibbon
        text={scriptures.john7.text}
        reference={scriptures.john7.reference}
      />
    </div>
  );
};

export default Home;
