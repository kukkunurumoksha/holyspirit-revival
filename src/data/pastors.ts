export interface Pastor {
  id: string;
  name: string;
  role: string;
  church?: string;
  bio?: string;
  imageSrc?: string;
  initials: string;
  quotes: string[];
  featured?: boolean;
}

export const pastors: Pastor[] = [
  {
    id: "anish-mano-stephen",
    name: "Pastor Anish Mano Stephen",
    role: "Host Pastor",
    church: "Hope in Jesus Apostolic Church of Christ (HIJBLR)",
    bio: "42 years old, pastor's son. 10 years of longing for revival, 4 years of daily prayer in Bangalore. Expected revival by 2027 but God moved in 2024.",
    imageSrc: "/images/revival/pastors/pastor-anish-mano-stephen.png",
    initials: "AS",
    quotes: [
      "That one single question became the beginning of a Holy Spirit Revival that impacted India, and from India, people in many nations of the world.",
    ],
    featured: true,
  },
  {
    id: "raison-thomas",
    name: "Pastor Raison Thomas",
    role: "Foundational Message",
    church: "In Christ Church",
    bio: "Delivered the foundational message on April 18 from John 7:37.",
    imageSrc: "/images/revival/pastors/pastor-portrait-01.jpg",
    initials: "RT",
    quotes: [
      "Your thirst is the reason for everything in revival. God cannot do anything through people who do not have thirst.",
      "This is just a foretaste. The real revivals are yet to come.",
    ],
    featured: true,
  },
  {
    id: "finny-stephen",
    name: "Pastor Finny Stephen",
    role: "Continued Ministry from Day 2",
    bio: "Led nightly ministry from Day 2 onward, witnessing the organic growth of the revival.",
    imageSrc: "/images/revival/pastors/pastor-portrait-03.jpg",
    initials: "FS",
    quotes: [
      "Bangalore is going to become a hub of revival for India. What we are seeing now is only a beginning — just a small sign.",
    ],
    featured: true,
  },
  {
    id: "rajesh-elappara",
    name: "Pastor Rajesh Elappara",
    role: "Witnessed Youth Hunger",
    bio: "Witnessed the younger generation's deep hunger for God during the revival.",
    imageSrc: "/images/revival/pastors/pastor-portrait-02.jpg",
    initials: "RE",
    quotes: [
      "God is training an army there for the greatest revival that is yet to come in India.",
      "The young generation did not cry for anything else — they cried to receive the Lord, they cried to draw near to the Lord.",
    ],
    featured: true,
  },
  {
    id: "john-joseph",
    name: "Dr. John Joseph",
    role: "Dubai / Trivandrum Ministry",
    bio: "Based in Dubai and Trivandrum. Family drawn to revival. Started 75+ day Revival Nights in Trivandrum after impartation service.",
    imageSrc: "/images/revival/pastors/pastor-john-joseph.png",
    initials: "JJ",
    quotes: [
      "Let the latter glory be greater than the former. The best is yet to come.",
    ],
    featured: true,
  },
  {
    id: "tijo-thomas",
    name: "Pastor Tijo Thomas",
    role: "Prophetic Ministry",
    bio: "Was in Indonesia during the revival. Prophesied on April 16 about a great move in Karnataka.",
    imageSrc: "/images/revival/pastors/pastor-tijo-thomas.png",
    initials: "TT",
    quotes: [
      "There is going to be a big revival. The Spirit of the Lord says there is going to be a great move in Karnataka. There is going to be a glory encounter in Electronic City.",
    ],
    featured: true,
  },
  {
    id: "damien-antony",
    name: "Pastor Damien Antony",
    role: "Three Phases Teaching",
    bio: "Taught the three phases of revival: Restoration, In-gathering, and Missions.",
    initials: "DA",
    quotes: [
      "This is the kairos time of India — God's appointed time for our nation.",
    ],
  },
  {
    id: "chandy-varghese",
    name: "Pastor Chandy Varghese",
    role: "Revival Witness",
    initials: "CV",
    quotes: [
      "People come there from many places and many countries without anyone inviting them. That is a sign of the revival.",
    ],
  },
  {
    id: "raj-mohan",
    name: "Pastor Raj Mohan",
    role: "Connected from Delhi",
    initials: "RM",
    quotes: [
      "The fire of the Holy Spirit is going to spread like wildfire. It is going to blow like a storm, to pour like unstoppable rain.",
    ],
  },
  {
    id: "alwin-thomas",
    name: "Pastor Alwin Thomas",
    role: "Ministry Transformed",
    bio: "Discovered the revival on YouTube, and his ministry was transformed.",
    initials: "AT",
    quotes: [
      "My ministry has changed... wherever I go I see so many people being with the Holy Spirit, receiving the fresh moment of speaking in tongues and prophesying.",
    ],
  },
  {
    id: "ankit-sajwan",
    name: "Pastor Ankit Sajwan",
    role: "North Indian Pastor",
    initials: "AS",
    quotes: [
      "This fire will be unquenchable. This revival will not stop until Lord Jesus Christ comes back.",
    ],
  },
  {
    id: "greeshma-mullakkara",
    name: "Pastor Greeshma Mullakkara",
    role: "Youth Transformation Witness",
    bio: "Witnessed the transformative impact of the revival on the youth.",
    initials: "GM",
    quotes: [
      "That night, no one could even leave the church, especially the youth; everyone stayed in the church, continuously worshiping until the early hours of the morning.",
    ],
  },
];
