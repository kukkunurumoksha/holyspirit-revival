import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhotoHero, ScriptureRibbon } from "@/components/revival";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonyCarousel } from "@/components/home/TestimonyCarousel";
import { TimelinePreview } from "@/components/home/TimelinePreview";
import { PastorsGrid } from "@/components/home/PastorsGrid";
import { scriptures } from "@/data/scriptures";

const Home = () => {
  useEffect(() => {
    document.title = "100 Days of Holy Spirit Revival";
  }, []);

  return (
    <div>
      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-family-crowd.jpg"
        imageAlt="Packed church hall with families during revival"
        title="100 Days of Holy Spirit Revival"
        subtitle="What began as a single question on April 18, 2024 became 100 days of 24/7 nonstop worship, prayer, and revival that touched nations."
        overlay="gold"
        className=""
      >
        <Button asChild size="lg" className="bg-gold text-white hover:bg-gold-light">
          <Link to="/the-story">Read the Story</Link>
        </Button>
      </PhotoHero>

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
