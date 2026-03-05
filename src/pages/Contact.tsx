import { useEffect } from "react";
import { SectionHeader } from "@/components/revival";
import { ContactForm } from "@/components/contact/ContactForm";
import { PrayerRequestForm } from "@/components/contact/PrayerRequestForm";
import { church } from "@/data/church";
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — 100 Days of Revival";
  }, []);

  return (
    <div className="pt-24">
      {/* Contact section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Get in Touch"
            subtitle="We'd love to hear from you. Reach out with questions, testimonies, or prayer requests."
          />

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-sans text-sm font-semibold">Address</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {church.name}
                    <br />
                    {church.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-sans text-sm font-semibold">Phone</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {church.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
                  <p className="font-sans text-sm font-semibold">Email</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {church.email}
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <p className="font-sans text-sm font-semibold mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href={church.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href={church.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={church.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-2.5 text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-warm-md">
              <h3 className="font-serif text-h4 font-bold mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer request */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <SectionHeader
            title="Prayer Requests"
            subtitle="Share your prayer request and our community will pray with you."
          />
          <div className="rounded-lg border border-border bg-card p-6 shadow-warm-md">
            <PrayerRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
