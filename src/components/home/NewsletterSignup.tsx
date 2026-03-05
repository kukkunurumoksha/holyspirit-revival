import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to newsletter service
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="section-dark bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-h2 font-bold text-cream">
          Stay Connected
        </h2>
        <p className="mt-4 font-sans text-body text-cream/70">
          Subscribe to receive updates about the revival movement and upcoming
          events.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border-white/20 text-cream placeholder:text-cream/40 sm:rounded-r-none"
          />
          <Button
            type="submit"
            className="bg-gold text-white hover:bg-gold-light sm:rounded-l-none"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
