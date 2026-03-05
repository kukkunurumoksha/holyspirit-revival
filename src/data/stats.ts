export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 100, suffix: "+", label: "Days of Continuous Revival" },
  { value: 25, suffix: "+", label: "Nations Represented" },
  { value: 50, suffix: "+", label: "Countries via YouTube" },
  { value: 3, suffix: "M+", label: "People Touched Globally" },
];
