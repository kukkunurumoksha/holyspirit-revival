import { useEffect } from "react";
import { PhotoHero, ScriptureRibbon } from "@/components/revival";
import { StoryNav } from "@/components/story/StoryNav";
import { StorySection } from "@/components/story/StorySection";
import { scriptures } from "@/data/scriptures";

const storySections = [
  { id: "preparation", label: "I. Preparation" },
  { id: "day-one", label: "II. Day 1" },
  { id: "unfolding", label: "III. Unfolding" },
  { id: "impartation", label: "IV. Impartation" },
  { id: "the-spread", label: "V. The Spread" },
  { id: "fulfillment", label: "VI. Fulfillment" },
  { id: "five-fold", label: "VII. Five-Fold" },
];

const TheStory = () => {
  useEffect(() => {
    document.title = "The Story — 100 Days of Revival";
  }, []);

  return (
    <div>
      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-worship-01.jpg"
        imageAlt="Packed church hall worship"
        title="The Story"
        subtitle="What began as a single question became a move of God that touched nations"
        overlay="dark"
      />

      <StoryNav sections={storySections} />

      <StorySection
        id="preparation"
        title="I. The Preparation (2014–2024)"
        paragraphs={[
          "Pastor Anish Mano Stephen, 42 years old, a pastor's son, carried a burden for revival for over a decade. For 10 years he longed for a move of God, and for 4 years he prayed daily in Bangalore for God to move.",
          "He expected revival to come by 2027 — but God had other plans. The spiritual burden and anticipation had been building, prayer upon prayer, year upon year. What no one could have foreseen was that God would answer in 2024, three years ahead of any expectation.",
        ]}
        imageSrc="/images/revival/church-hall/packed-full-view.jpg"
        imageAlt="Packed church hall at Hope In Jesus Apostolic Church"
        quotes={[
          {
            quote:
              "That one single question became the beginning of a Holy Spirit Revival that impacted India, and from India, people in many nations of the world.",
            author: "Pastor Anish Mano Stephen",
            role: "Host Pastor, HIJBLR",
          },
        ]}
      />

      <ScriptureRibbon
        text={scriptures.john6.text}
        reference={scriptures.john6.reference}
      />

      <StorySection
        id="day-one"
        title="II. Day 1 — April 17, 2024"
        dark
        paragraphs={[
          "It began with a single question. No grand announcement, no elaborate planning — just one question that ignited a fire no one could have anticipated.",
          "The very next day, April 18, Pastor Raison Thomas delivered the foundational message from John 7:37. His words would set the tone for everything that followed — a revival built not on programs or promotion, but on an unquenchable thirst for God.",
        ]}
        quotes={[
          {
            quote:
              "Your thirst is the reason for everything in revival. God cannot do anything through people who do not have thirst.",
            author: "Pastor Raison Thomas",
            role: "In Christ Church",
          },
          {
            quote:
              "This is just a foretaste. The real revivals are yet to come.",
            author: "Pastor Raison Thomas",
            role: "In Christ Church",
          },
        ]}
      />

      <StorySection
        id="unfolding"
        title="III. The Unfolding (Days 2–25)"
        paragraphs={[
          "From Day 2 onward, Pastor Finny Stephen continued the nightly ministry. What happened next was extraordinary — the revival grew organically into 24/7 nonstop meetings. There was no advertising, no formal invitations. People simply came, drawn by something beyond human effort.",
          "The meetings ran around the clock — worship, prayer, and ministry continued day and night without pause. Youth began weeping at altars. Services extended hours beyond scheduled times. The hunger was palpable — a generation crying out not for anything of this world, but to draw near to the Lord.",
        ]}
        imageSrc="/images/revival/church-hall/packed-standing-worship.jpg"
        imageAlt="Standing worship in packed church"
        quotes={[
          {
            quote:
              "Bangalore is going to become a hub of revival for India. What we are seeing now is only a beginning — just a small sign.",
            author: "Pastor Finny Stephen",
            role: "Continued Ministry from Day 2",
          },
          {
            quote:
              "God is training an army there for the greatest revival that is yet to come in India.",
            author: "Pastor Rajesh Elappara",
            role: "Witnessed Youth Hunger",
          },
        ]}
      />

      <ScriptureRibbon
        text={scriptures.acts2.text}
        reference={scriptures.acts2.reference}
      />

      <StorySection
        id="impartation"
        title="IV. The Impartation (Days 25–50)"
        dark
        paragraphs={[
          "On May 9–10, the first impartation service drew over 2,000 attendees. More than 500 frontline ministers and worship leaders came from Kerala alone. The fire was no longer contained within one church — it was spreading to other cities and congregations.",
          "What made this unique was the spontaneous nature of the gathering. No one was formally invited, yet thousands came from across India and beyond.",
        ]}
        quotes={[
          {
            quote:
              "People come there from many places and many countries without anyone inviting them. That is a sign of the revival.",
            author: "Pastor Chandy Varghese",
            role: "Revival Witness",
          },
        ]}
      />

      <StorySection
        id="the-spread"
        title="V. The Spread — India to Nations (Days 50–75)"
        paragraphs={[
          "By Day 50, the revival had crossed borders. Over 25 nations were represented physically at the services. The unbroken live stream reached 75 consecutive days, accumulating over 2.8 million YouTube views.",
          "Dr. John Joseph, based in Dubai and Trivandrum, was so impacted that he started 75+ day Revival Nights in Trivandrum. The fire was spreading — not by human effort, but by the sovereign move of the Holy Spirit.",
        ]}
        videoId="WkziRXKraFE"
        imageSrc="/images/revival/convention/large-venue-flags.jpg"
        imageAlt="Convention with national flags"
        quotes={[
          {
            quote:
              "The fire of the Holy Spirit is going to spread like wildfire. It is going to blow like a storm, to pour like unstoppable rain.",
            author: "Pastor Raj Mohan",
            role: "Connected from Delhi",
          },
        ]}
      />

      <ScriptureRibbon
        text={scriptures.isaiah44.text}
        reference={scriptures.isaiah44.reference}
      />

      <StorySection
        id="fulfillment"
        title="VI. The Fulfillment (Days 75–100)"
        dark
        videoId="9BNYwXz9yRE"
        paragraphs={[
          "In the final stretch, Karnataka pastors gathered for 100 hours of nonstop prayer. Across the entire 100 days, there were zero conflicts or misunderstandings among pastors — an extraordinary testimony to the unity the Spirit brought.",
          "Between 20,000 and 25,000 people attended physically over the 100 days. Pastor Damien Antony identified three phases of what God was doing: Restoration, In-gathering, and Missions — a movement that was only beginning.",
        ]}
        quotes={[
          {
            quote:
              "This is the kairos time of India — God's appointed time for our nation.",
            author: "Pastor Damien Antony",
            role: "Three Phases Teaching",
          },
        ]}
      />

      <StorySection
        id="five-fold"
        title="VII. Five-Fold Ministry"
        videoId="H6tu2Ch_kKg"
        paragraphs={[
          "One of the most remarkable aspects of the 100 Days of Revival was the full participation of the five-fold ministry — pastors, evangelists, teachers, prophets, and apostles all took part. Denominations and language barriers fell away in the presence of the Spirit.",
          "From north India to the south, from Delhi to Kerala, from Indonesia to Dubai — ministers of every calling came together in a unity that only the Holy Spirit could orchestrate. And the fire shows no signs of stopping.",
        ]}
        quotes={[
          {
            quote:
              "This fire will be unquenchable. This revival will not stop until Lord Jesus Christ comes back.",
            author: "Pastor Ankit Sajwan",
            role: "North Indian Pastor",
          },
          {
            quote:
              "That night, no one could even leave the church, especially the youth; everyone stayed in the church, continuously worshiping until the early hours of the morning.",
            author: "Pastor Greeshma Mullakkara",
            role: "Youth Transformation Witness",
          },
        ]}
      />

      <ScriptureRibbon
        text={scriptures.john7.text}
        reference={scriptures.john7.reference}
      />
    </div>
  );
};

export default TheStory;
