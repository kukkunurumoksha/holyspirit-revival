export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 100, suffix: "+", label: "Days of Continuous Revival" },
  { value: 24, suffix: "/7", label: "Nonstop Worship & Prayer" },
  { value: 25, suffix: "+", label: "Nations Represented" },
  { value: 3, suffix: "M+", label: "People Touched Globally" },
];
