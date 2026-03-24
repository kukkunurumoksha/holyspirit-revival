export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "The Story", href: "/the-story" },
  { label: "Pastors", href: "/pastors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
];

export const footerExtraLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
