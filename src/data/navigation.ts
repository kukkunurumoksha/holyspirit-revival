export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/the-story" },
  { label: "Pastors", href: "/pastors" },
];
