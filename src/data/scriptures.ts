export interface Scripture {
  text: string;
  reference: string;
}

export const scriptures: Record<string, Scripture> = {
  john7: {
    text: "If anyone is thirsty, let him come to Me and drink. Whoever believes in Me, as the Scripture has said, rivers of living water will flow from within him.",
    reference: "John 7:37–38",
  },
  acts2: {
    text: "In the last days, I will pour out My Spirit on all flesh.",
    reference: "Acts 2:17",
  },
  isaiah44: {
    text: "I will pour water on the thirsty land, and streams on the dry ground.",
    reference: "Isaiah 44:3",
  },
  john6: {
    text: "No one can come to Me unless the Father who sent Me draws him.",
    reference: "John 6:44",
  },
};
