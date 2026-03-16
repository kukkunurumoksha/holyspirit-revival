import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Hope in Jesus Apostolic Church of Christ",
  alternateName: "HIJBLR",
  url: "https://electroniccityrevival.com",
  email: "hopeinjesus.india@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Electronic City, Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.youtube.com/channel/UC8HhQzt1hwAYuQzo6HJaHOA",
    "https://www.instagram.com/hopeinjesusbangalore/",
    "https://www.facebook.com/hopeinjesusbangalore/",
  ],
};

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <JsonLd data={organizationSchema} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
