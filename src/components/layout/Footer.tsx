import { Link } from "react-router-dom";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { church } from "@/data/church";

export function Footer() {
  return (
    <footer className="section-dark bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Church info */}
          <div>
            <h3 className="font-serif text-h4 font-bold text-cream">
              {church.name}
            </h3>
            <p className="mt-2 font-sans text-sm text-cream/60">
              {church.address}
            </p>
            <p className="mt-1 font-sans text-sm text-cream/60">
              {church.seniorPastor}
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/50">
              Documenting 100 days of continuous Holy Spirit revival that touched
              nations across the world.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">
              Connect
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href={church.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 text-cream/70 transition-colors hover:bg-gold/20 hover:text-gold"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={church.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 text-cream/70 transition-colors hover:bg-gold/20 hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={church.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 text-cream/70 transition-colors hover:bg-gold/20 hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 font-sans text-sm text-cream/60">
              {church.email}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-xs text-cream/40">
            &copy; {new Date().getFullYear()} {church.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
