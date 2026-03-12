export interface Milestone {
  date: string;
  title: string;
  description: string;
  storyId?: string;
}

export const milestones: Milestone[] = [
  {
    date: "April 16, 2024",
    title: "Prophetic Confirmation",
    description:
      "Pastor T. Jijo Thomas prophesies a great revival in Karnataka, specifically in Electronic City, Bangalore.",
    storyId: "prophecy",
  },
  {
    date: "April 18, 2024",
    title: "The Beginning",
    description:
      "Pastor Raison Thomas preaches from John 7:37 — 'If anyone is thirsty, let him come to Me and drink.' The Holy Spirit Revival begins.",
    storyId: "beginning",
  },
  {
    date: "May 9–10, 2024",
    title: "Leaders' Impartation",
    description:
      "Over 2,000 attendees including 500+ frontline ministers and worship leaders gather for impartation services.",
    storyId: "impartation",
  },
  {
    date: "July 1, 2024",
    title: "75th Day — New Delhi",
    description:
      "Mega impartation service in New Delhi. 2.5–2.8 million viewers reached through 75 days of unbroken livestream.",
    storyId: "75th-day",
  },
  {
    date: "July 6, 2024",
    title: "Indonesia",
    description:
      "The revival fire spreads beyond India's borders to Indonesia, demonstrating a truly global move of the Holy Spirit.",
    storyId: "indonesia",
  },
  {
    date: "July 26–28, 2024",
    title: "100th Day — United Kingdom",
    description:
      "Special thanksgiving and celebration in the UK. 20,000–25,000 physical attendees over 100 days. Karnataka pastors complete 100 hours of nonstop prayer.",
    storyId: "100th-day",
  },
  {
    date: "August 2–4, 2024",
    title: "Ireland",
    description:
      "The revival continues across Europe as the fire of the Holy Spirit reaches Ireland.",
    storyId: "ireland",
  },
  {
    date: "January 30, 2025",
    title: "Uganda",
    description:
      "The revival expands to the African continent, spanning Asia, Europe, and Africa.",
    storyId: "uganda",
  },
];
