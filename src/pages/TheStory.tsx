import { useEffect } from "react";
import { PhotoHero, ScriptureRibbon } from "@/components/revival";
import { StoryNav } from "@/components/story/StoryNav";
import { StorySection } from "@/components/story/StorySection";
import { scriptures } from "@/data/scriptures";

const storySections = [
  { id: "prophecy", label: "I. Prophecy" },
  { id: "beginning", label: "II. Beginning" },
  { id: "impartation", label: "III. Impartation" },
  { id: "75th-day", label: "IV. 75th Day" },
  { id: "100th-day", label: "V. 100th Day" },
  { id: "transformation", label: "VI. Transformation" },
  { id: "global-impact", label: "VII. Global Impact" },
  { id: "five-fold", label: "VIII. Five-Fold" },
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
        id="prophecy"
        title="I. Prophetic Confirmation — April 16, 2024"
        paragraphs={[
          "Before the revival began, Pastor T. Jijo Thomas prophesied that a great revival would take place in Karnataka, specifically in Electronic City, Bangalore. He declared that there would be a powerful move of God and a glory encounter in this region.",
          "This prophetic word set the stage for what was about to unfold—a sovereign move of the Holy Spirit that would touch India and the nations.",
        ]}
        imageSrc="/images/revival/church-hall/packed-full-hall.jpg"
        imageAlt="Packed church hall at Hope In Jesus Apostolic Church"
        quotes={[
          {
            quote:
              "A great revival would take place in Karnataka, specifically in Electronic City, Bangalore. There would be a powerful move of God and a glory encounter in this region.",
            author: "Pastor T. Jijo Thomas",
            role: "Prophetic Declaration, April 16",
          },
        ]}
      />

      <ScriptureRibbon
        text={scriptures.john6.text}
        reference={scriptures.john6.reference}
      />

      <StorySection
        id="beginning"
        title="II. The Beginning — April 18, 2024"
        dark
        imageSrc="/images/revival/church-hall/packed-sermon-listening.jpg"
        imageAlt="Congregation listening to sermon during revival"
        paragraphs={[
          "During the 18th day of a 21-day fasting prayer at Hope in Jesus Church, Electronic City, Bangalore, Pastor Raison Thomas preached from John 7:37: 'If anyone is thirsty, let him come to me and drink.' This message asking 'Are you thirsty?' deeply impacted the congregation and changed the spiritual atmosphere.",
          "Although only a small number of people were expected to attend, this message became the catalyst for a powerful revival movement. Worship and prayer continued beyond scheduled times, marking the beginning of the Holy Spirit Revival. From that day onward, worship, prayer, and ministry continued continuously—sometimes day and night for nearly 30 days without stopping.",
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
        id="impartation"
        title="III. Leaders' Impartation — May 9–10, 2024"
        imageSrc="/images/revival/convention/large-venue-flags.jpg"
        imageAlt="Speaker addressing packed crowd during impartation service"
        paragraphs={[
          "As the revival grew and the number of attendees increased, a two-day leaders' meeting and impartation service was organized under the guidance of the Holy Spirit. More than 2,000 people attended this gathering, including around 1,000–2,000 pastors and believers from different places.",
          "What made this unique was the spontaneous nature of the gathering—no one was formally invited, yet thousands came from across India and beyond. Over 500 frontline ministers and worship leaders from Kerala alone participated. Many experienced prayer, prophetic ministry, and spiritual impartation. Attendees were individually blessed and prayed for by church leaders and ministers. During these meetings, many believers experienced inner healing, received spiritual gifts, and encountered the presence of God.",
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

      <ScriptureRibbon
        text={scriptures.acts2.text}
        reference={scriptures.acts2.reference}
      />

      <StorySection
        id="75th-day"
        title="IV. 75th Day — July 1, 2024 — New Delhi — Continuous Streaming & Expansion"
        dark
        imageSrc="/images/revival/stage/holy-spirit-revival-stage-crowd.jpg"
        imageAlt="Worship with keyboard during packed revival service"
        paragraphs={[
          "The revival meetings were live streamed continuously for 75 days without interruption, reaching around 2.5–2.8 million viewers worldwide. By this time, the revival had touched thousands of people physically and millions online. The revival grew organically into 24/7 nonstop meetings with no advertising or formal invitations—people simply came, drawn by something beyond human effort.",
          "To continue spreading the revival, a mega impartation service was held in New Delhi to commemorate the 75th day of the revival and to ignite revival across India and the nations. Throughout the revival, weekly sessions focused on various spiritual topics, including inner healing, the fruits and gifts of the Holy Spirit, the ministry of the Holy Spirit, and the impartation of God's glory. Many participants testified that they received the gift of speaking in tongues for the first time. The revival gained international attention, including support from representatives connected to the Catch the Fire movement in Toronto.",
        ]}
        quotes={[
          {
            quote:
              "Bangalore is going to become a hub of revival for India. What we are seeing now is only a beginning — just a small sign.",
            author: "Pastor Finny Stephen",
            role: "Continued Ministry",
          },
        ]}
      />

      <StorySection
        id="100th-day"
        title="V. 100th Day — July 26, 2024 — United Kingdom — Celebration & Thanksgiving"
        paragraphs={[
          "After 100 days of revival meetings, a special thanksgiving and celebration was held in the United Kingdom. It is estimated that 20,000–25,000 people attended in person over the 100 days in Bangalore, while millions around the world watched through live streaming and social media. Testimonies of healing, deliverance, salvation, and life transformation were shared.",
          "In the final stretch, Karnataka pastors gathered for 100 hours of nonstop prayer. Across the entire 100 days, there were zero conflicts or misunderstandings among pastors—an extraordinary testimony to the unity the Spirit brought. Pastor Damien Antony identified three phases of what God was doing: Restoration, In-gathering, and Missions—a movement that was only beginning. Leaders emphasized that this revival is only the beginning of a greater move of God in India and around the world.",
        ]}
        videoId="WkziRXKraFE"
        imageSrc="/images/revival/convention/large-venue-flags.jpg"
        imageAlt="Convention with national flags"
        quotes={[
          {
            quote:
              "This is the kairos time of India — God's appointed time for our nation.",
            author: "Pastor Damien Antony",
            role: "Three Phases Teaching",
          },
        ]}
      />

      <ScriptureRibbon
        text={scriptures.isaiah44.text}
        reference={scriptures.isaiah44.reference}
      />

      <StorySection
        id="transformation"
        title="VI. Testimonies & Transformation"
        dark
        videoId="9BNYwXz9yRE"
        paragraphs={[
          "Many testimonies emerged from the revival. People experienced healing, deliverance from spiritual oppression, restoration of faith, salvation, and renewed dedication to God. Many pastors who had become discouraged returned to ministry, and many young people committed their lives to serving God.",
          "One remarkable aspect of the revival was the strong participation of young people, who spent long hours praying, worshiping, and seeking the presence of God. Youth began weeping at altars, and services extended hours beyond scheduled times. Many young believers began new ministries, started preaching, and even launched online channels to share the message of revival.",
        ]}
        quotes={[
          {
            quote:
              "That night, no one could even leave the church, especially the youth; everyone stayed in the church, continuously worshiping until the early hours of the morning.",
            author: "Pastor Greeshma Mullakkara",
            role: "Youth Transformation Witness",
          },
          {
            quote:
              "God is training an army there for the greatest revival that is yet to come in India.",
            author: "Pastor Rajesh Elappara",
            role: "Witnessed Youth Hunger",
          },
        ]}
      />

      <StorySection
        id="global-impact"
        title="VII. Global Impact & Unity"
        paragraphs={[
          "The revival brought unity among different churches and ministries. Leaders and believers from different denominations came together in love and cooperation. Hundreds of worship leaders, pastors, translators, and volunteers participated in the movement.",
          "People from more than 25 nations visited the revival physically, and viewers from over 50 countries joined through online broadcasts. The revival fire spread systematically from nation to nation: from India to New Delhi (July 1), then Indonesia (July 6), England (July 26-28), Ireland (August 2-4), the United States, Canada, and with plans for Uganda (January 30, 2025). Revival meetings and prayer gatherings began to spread to other cities and nations, including countries in the Middle East, Europe, Asia, North America, and Africa. Dr. John Joseph, based in Dubai and Trivandrum, was so impacted that he started 75+ day Revival Nights in Trivandrum. The fire was spreading—not by human effort, but by the sovereign move of the Holy Spirit from nation to nation.",
        ]}
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
        id="five-fold"
        title="VIII. Five-Fold Ministry & The Future"
        dark
        videoId="H6tu2Ch_kKg"
        paragraphs={[
          "One of the most remarkable aspects of the 100 Days of Revival was the full participation of the five-fold ministry—pastors, evangelists, teachers, prophets, and apostles all took part. Denominations and language barriers fell away in the presence of the Spirit. From north India to the south, from Delhi to Kerala, from Indonesia to Dubai—ministers of every calling came together in a unity that only the Holy Spirit could orchestrate.",
          "Many leaders described the revival as a foretaste of a greater end-time revival that God will bring to India and the nations. Prophetic words indicated that the next phase of revival would spread to other regions, including Delhi. A large impartation gathering was planned in New Delhi to continue spreading the revival fire across India and to other nations. The revival emphasizes that this movement is not limited to a single church, denomination, or location, but is intended to spread across India and around the world until the return of Jesus Christ.",
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
              "That one single question became the beginning of a Holy Spirit Revival that impacted India, and from India, people in many nations of the world.",
            author: "Pastor Anish Mano Stephen",
            role: "Host Pastor, HIJBLR",
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
