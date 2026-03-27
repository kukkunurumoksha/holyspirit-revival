import { PhotoHero, ScriptureRibbon } from "@/components/revival";
import { StoryNav } from "@/components/story/StoryNav";
import { StorySection } from "@/components/story/StorySection";
import { scriptures } from "@/data/scriptures";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://electroniccityrevival.com/" },
    { "@type": "ListItem", position: 2, name: "The Story", item: "https://electroniccityrevival.com/the-story" },
  ],
};

const storySections = [
  { id: "prophecy", label: "I. Prophecy" },
  { id: "beginning", label: "II. Beginning" },
  { id: "impartation", label: "III. Impartation" },
  { id: "75th-day", label: "IV. 75th Day - New Delhi" },
  { id: "indonesia", label: "V. Indonesia" },
  { id: "100th-day", label: "VI. 100th Day - UK" },
  { id: "ireland", label: "VII. Ireland" },
  { id: "uganda", label: "VIII. Uganda" },
  { id: "transformation", label: "IX. Transformation" },
  { id: "global-impact", label: "X. Global Impact" },
];

const TheStory = () => {
  return (
    <div>
      <PageMeta
        title="The Story"
        description="The full story of the 100 Days of Holy Spirit Revival — from a 21-day fast to 100 days of nonstop revival at Hope in Jesus Church, Electronic City, Bangalore."
        path="/the-story"
      />
      <JsonLd data={breadcrumb} />

      <PhotoHero
        imageSrc="/images/revival/church-hall/packed-worship-01.webp"
        imageAlt="Packed church hall worship"
        title="The Story"
        subtitle="From Bangalore to the Nations"
        overlay="dark"
      >
        <p className="rounded-full border border-white/30 bg-white/10 px-6 py-2 font-sans text-sm font-semibold tracking-wide text-white backdrop-blur-sm md:text-base">
          April 18 – July 26, 2024 &bull; 100 Days of Holy Spirit Revival
        </p>
      </PhotoHero>

      <StoryNav sections={storySections} />

      {/* Revival Overview Banner */}
      <section className="relative overflow-hidden bg-navy section-dark py-16 md:py-24">
        {/* Decorative background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fire/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6">
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gold/30" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              April 18 – July 26, 2024 &bull; Electronic City, Bangalore
            </span>
            <div className="h-px flex-1 bg-gold/30" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-bold leading-snug text-foreground md:text-4xl lg:text-5xl">
            Overview of the 100 Days of Revival
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gold" />

          <p className="mt-8 font-sans text-lg leading-[1.75] text-muted-foreground">
            It began with a prophecy. On April 16, 2024, Pastor T. Jijo Thomas stood and declared with conviction that a great revival would break out in Karnataka — specifically in Electronic City, Bangalore. No one could have imagined how quickly that word would come to pass.
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            Two days later, on April 18, the church at Hope in Jesus Church was on the 18th day of a 21-day fasting prayer. It was meant to be a quiet, solemn gathering. Pastor Raison Thomas stood to minister from John 7:37 — the passage where Jesus, on the last and greatest day of the feast, cried out to the crowd. The Pastor asked one simple question: <span className="italic text-gold font-medium">"Are you thirsty?"</span> That question broke something open. The spiritual atmosphere of the room shifted instantly. The service moved far beyond its scheduled time. Worship began to flow in a way no one had planned. Prayer deepened. People wept. And from that night, the meetings simply did not stop.
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            For nearly 30 days, worship, prayer, and ministry continued day and night without interruption — no timetable, no schedule, no advertising. Word spread entirely by the Holy Spirit. People began arriving from across India — from Kerala, Tamil Nadu, Delhi, and beyond. Then from other nations — Canada, the United States, the United Kingdom, Australia. Nobody sent invitations. Nobody organised a campaign. Yet thousands came, drawn by something they could not explain.
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            On May 9–10, a leaders' impartation gathering took shape — again, spontaneously. Over 2,000 people attended, including more than 1,000 pastors and 500 frontline ministers from Kerala alone. Not one of them received a formal invitation. In those two days, people experienced inner healing, received spiritual gifts, spoke in tongues for the first time, and were individually prayed for and blessed. Pastor Chandy Varghese, who witnessed it, said simply: <span className="italic">"People come from many places and many countries without anyone inviting them. That is a sign of the revival."</span>
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            The meetings were live streamed continuously — 24 hours a day, without a single break — for 75 days. By July 1, the 75th day, over 2.8 million people from 53 nations had watched online. To mark this milestone, a mega impartation service was held in New Delhi, carrying the revival fire to India's capital. Just five days later, on July 6, the fire crossed international borders as revival gatherings began in Indonesia.
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            On July 26–28, 2024 — the 100th day — a special thanksgiving celebration was held in the United Kingdom. Over 20,000–25,000 people had attended in person across the 100 days in Bangalore. In the final days, Karnataka pastors completed 100 hours of nonstop prayer. One of the most extraordinary testimonies of the entire revival: across all 100 days, there were zero conflicts or misunderstandings among pastors — a unity that only the Holy Spirit could produce. The revival then continued to Ireland in August, and by January 2025, the fire had reached Uganda on the African continent.
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            Throughout the 100 days, God moved in ways that defied human explanation. Testimonies of physical healing, deliverance from spiritual oppression, restored marriages, and renewed callings poured in daily. Young people — who are often the hardest to reach — wept at altars and stayed through the night in worship. Discouraged pastors who had considered leaving ministry returned with fresh fire. New ministries were born. People from more than 25 nations visited physically. Viewers from over 50 countries watched online. The five-fold ministry — pastors, evangelists, teachers, prophets, and apostles — all participated together, with denominations and language barriers falling away in the presence of the Spirit.
          </p>

          <p className="mt-5 font-sans text-lg leading-[1.75] text-muted-foreground">
            What began as one question — <span className="italic text-gold font-medium">"Are you thirsty?"</span> — in a small fasting prayer gathering became a sovereign move of God that touched India and the nations. Every leader who witnessed it said the same thing: this is not the end. This is only the beginning of a greater revival that God will bring to India and the world — until the return of Jesus Christ.
          </p>

          {/* Stats row */}
          <div className="mt-[40px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "100", label: "Days of Revival" },
              { number: "2.8M+", label: "Online Viewers" },
              { number: "25+", label: "Nations Visited" },
              { number: "53", label: "Countries Online" },
            ].map(({ number, label }) => (
              <div key={label} className="rounded-lg border border-gold/20 bg-white/5 px-4 py-5 text-center backdrop-blur-sm">
                <div className="font-serif text-3xl font-bold text-gold">{number}</div>
                <div className="mt-1 font-sans text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="mt-12 flex items-center gap-3">
            <div className="h-px flex-1 bg-gold/20" />
            <span className="font-sans text-xs italic text-muted-foreground">
              "This fire will not stop until Lord Jesus Christ comes back."
            </span>
            <div className="h-px flex-1 bg-gold/20" />
          </div>
        </div>
      </section>

      <StorySection
        id="prophecy"
        title="I. Prophetic Confirmation — April 16, 2024"
        paragraphs={[
          "Before the revival began, Pastor T. Jijo Thomas prophesied that a great revival would take place in Karnataka, specifically in Electronic City, Bangalore. He declared that there would be a powerful move of God and a glory encounter in this region.",
          "This prophetic word set the stage for what was about to unfold—a sovereign move of the Holy Spirit that would touch India and the nations.",
        ]}
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
        title="II. The Beginning — 21-Day Fasting Prayer — April 18, 2024"
        dark
        imageSrc="/images/revival/church-hall/packed-sermon-listening.webp"
        imageAlt="Congregation listening to sermon during revival"
        images={[
          { src: "/images/revival/church-hall/beginning-01.webp", alt: "Fasting prayer at Hope in Jesus Church" },
          { src: "/images/revival/church-hall/beginning-02.webp", alt: "Worship during the 21-day fast" },
          { src: "/images/revival/church-hall/beginning-03.webp", alt: "Congregation at the beginning of revival" },
          { src: "/images/revival/church-hall/beginning-04.webp", alt: "Revival breaks out in Electronic City" },
        ]}
        paragraphs={[
          "The church in Electronic City, Bangalore was on its 18th day of a 21-day fasting prayer. During these penultimate days of sobriety at Hope in Jesus Church, Pastor Raison Thomas delivered a message from John 7:37. Just as Jesus did on the last and greatest day of the festival, the Pastor cried out: 'Let anyone who is thirsty come to Me and drink.' That single question — 'Are you thirsty?' — rapidly changed the entire spiritual atmosphere of the church.",
          "The sessions prolonged beyond all timelines and schedules, with worship that never stopped. Although only a small number of people were expected to attend, this message became the catalyst for a powerful revival movement. From that day onward, worship, prayer, and ministry continued continuously — sometimes day and night for nearly 30 days without stopping.",
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
        imageSrc="/images/revival/convention/large-venue-flags.webp"
        imageAlt="Speaker addressing packed crowd during impartation service"
        images={[
          { src: "/images/revival/convention/impartation-01.webp", alt: "Leaders' impartation service" },
          { src: "/images/revival/convention/impartation-02.webp", alt: "Impartation gathering crowd" },
        ]}
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
        imageSrc="/images/revival/stage/holy-spirit-revival-stage-crowd.webp"
        imageAlt="Worship with keyboard during packed revival service"
        images={[
          { src: "/images/revival/new-delhi/new-delhi-01.webp", alt: "Revival gathering in New Delhi" },
          { src: "/images/revival/new-delhi/new-delhi-02.webp", alt: "Worship at New Delhi impartation service" },
          { src: "/images/revival/new-delhi/new-delhi-03.webp", alt: "Crowds at New Delhi revival" },
          { src: "/images/revival/new-delhi/new-delhi-04.webp", alt: "New Delhi 75th day celebration" },
        ]}
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
        id="indonesia"
        title="V. Indonesia — July 6, 2024"
        dark
        images={[
          { src: "/images/revival/indonesia/indonesia-01.webp", alt: "Revival worship in Indonesia" },
          { src: "/images/revival/indonesia/indonesia-02.webp", alt: "Believers gathered in Indonesia" },
          { src: "/images/revival/indonesia/indonesia-03.webp", alt: "Indonesia revival meeting" },
          { src: "/images/revival/indonesia/indonesia-04.webp", alt: "Prayer and worship in Indonesia" },
          { src: "/images/revival/indonesia/indonesia-05.webp", alt: "Indonesia revival crowd" },
          { src: "/images/revival/indonesia/indonesia-06.webp", alt: "Holy Spirit move in Indonesia" },
        ]}
        paragraphs={[
          "Just days after the New Delhi gathering, the revival fire spread to Indonesia on July 6, 2024. The movement continued to expand beyond India's borders, demonstrating that this was truly a global move of the Holy Spirit.",
          "Believers in Indonesia experienced the same hunger for God and spiritual transformation that had marked the revival in Bangalore, as the fire continued to spread from nation to nation.",
        ]}
      />

      <ScriptureRibbon
        text={scriptures.acts2.text}
        reference={scriptures.acts2.reference}
      />

      <StorySection
        id="100th-day"
        title="VI. 100th Day — July 26-28, 2024 — United Kingdom — Celebration & Thanksgiving"
        images={[
          { src: "/images/revival/uk/uk-01.webp", alt: "100th day celebration in the United Kingdom" },
          { src: "/images/revival/uk/uk-02.webp", alt: "Revival thanksgiving gathering in the UK" },
        ]}
        paragraphs={[
          "After 100 days of revival meetings, a special thanksgiving and celebration was held in the United Kingdom. It is estimated that 20,000–25,000 people attended in person over the 100 days in Bangalore, while millions around the world watched through live streaming and social media. Testimonies of healing, deliverance, salvation, and life transformation were shared.",
          "In the final stretch, Karnataka pastors gathered for 100 hours of nonstop prayer. Across the entire 100 days, there were zero conflicts or misunderstandings among pastors—an extraordinary testimony to the unity the Spirit brought. Pastor Damien Antony identified three phases of what God was doing: Restoration, In-gathering, and Missions—a movement that was only beginning. Leaders emphasized that this revival is only the beginning of a greater move of God in India and around the world.",
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
        id="ireland"
        title="VII. Ireland — August 2-4, 2024"
        dark
        images={[
          { src: "/images/revival/ireland/ireland-01.webp", alt: "Revival gathering in Ireland" },
          { src: "/images/revival/ireland/ireland-02.webp", alt: "Worship and prayer in Ireland" },
        ]}
        paragraphs={[
          "Following the powerful 100th day celebration in the UK, the revival continued to Ireland from August 2-4, 2024. The fire of the Holy Spirit that began in Electronic City, Bangalore was now burning across Europe, touching hearts and transforming lives.",
          "The Irish gatherings continued the pattern of worship, prayer, and spiritual impartation that had characterized the revival from its beginning, as believers from across the region gathered to experience the presence of God.",
        ]}
      />

      <StorySection
        id="uganda"
        title="VIII. Uganda — January 30, 2025"
        images={[
          { src: "/images/revival/uganda/uganda-01.webp", alt: "Revival in Uganda" },
        ]}
        paragraphs={[
          "The revival fire continues to spread to Africa, with a planned gathering in Uganda on January 30, 2025. This marks the expansion of the Holy Spirit Revival to the African continent, demonstrating that the movement truly spans the globe.",
          "From Asia to Europe to Africa and North America, the revival that began with a simple question—'Are you thirsty?'—has become a worldwide call to spiritual awakening and renewal, fulfilling the prophetic word that this fire will not stop until the Lord returns.",
        ]}
      />

      <ScriptureRibbon
        text={scriptures.isaiah44.text}
        reference={scriptures.isaiah44.reference}
      />

      <StorySection
        id="transformation"
        title="IX. Testimonies & Transformation"
        dark
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
        title="X. Global Impact & Unity"
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
        title="The Future — Until He Returns"
        dark
        paragraphs={[
          "One of the most remarkable aspects of the 100 Days of Revival was the full participation of the five-fold ministry—pastors, evangelists, teachers, prophets, and apostles all took part. Denominations and language barriers fell away in the presence of the Spirit. From north India to the south, from Delhi to Kerala, from Indonesia to Dubai, from the UK to Ireland, from the USA to Canada, and to Uganda—ministers of every calling came together in a unity that only the Holy Spirit could orchestrate.",
          "Many leaders described the revival as a foretaste of a greater end-time revival that God will bring to India and the nations. The revival emphasizes that this movement is not limited to a single church, denomination, or location, but is intended to spread across India and around the world until the return of Jesus Christ.",
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
