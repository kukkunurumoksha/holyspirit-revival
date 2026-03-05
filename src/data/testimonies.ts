export interface Testimony {
  name: string;
  location: string;
  category: "Salvation" | "Healing" | "Deliverance" | "Restoration" | "International";
  text: string;
  imageSrc?: string;
}

export const testimonies: Testimony[] = [
  {
    name: "Dr. John Joseph",
    location: "Dubai / Trivandrum",
    category: "International",
    text: "After attending the impartation service, the fire of revival came with us. We started 75+ days of Revival Nights in Trivandrum. Let the latter glory be greater than the former.",
  },
  {
    name: "Pastor Alwin Thomas",
    location: "India",
    category: "Restoration",
    text: "I discovered the revival on YouTube and my ministry has changed. Wherever I go I see so many people being with the Holy Spirit, receiving the fresh moment of speaking in tongues and prophesying.",
  },
  {
    name: "Youth from HIJBLR",
    location: "Bangalore, India",
    category: "Salvation",
    text: "That night, no one could even leave the church, especially the youth; everyone stayed in the church, continuously worshiping until the early hours of the morning.",
  },
  {
    name: "Pastor Raj Mohan",
    location: "Delhi, India",
    category: "International",
    text: "The fire of the Holy Spirit is going to spread like wildfire. It is going to blow like a storm, to pour like unstoppable rain.",
  },
  {
    name: "Minister from Kerala",
    location: "Kerala, India",
    category: "Restoration",
    text: "People come there from many places and many countries without anyone inviting them. That is a sign of the revival. The Holy Spirit Himself is drawing people.",
  },
];
