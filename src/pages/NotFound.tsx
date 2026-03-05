import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found — 100 Days of Revival";
    console.error("404: User attempted to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center section-dark bg-navy">
      <div className="text-center px-6">
        <p className="font-serif text-display font-bold text-gold">404</p>
        <h1 className="mt-4 font-serif text-h2 font-bold text-cream">
          Page Not Found
        </h1>
        <p className="mt-4 font-sans text-body text-cream/60 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to the revival.
        </p>
        <Button
          asChild
          className="mt-8 bg-gold text-white hover:bg-gold-light"
          size="lg"
        >
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
