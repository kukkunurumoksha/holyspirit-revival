import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-72 bg-navy border-navy-light">
        <SheetHeader>
          <SheetTitle className="font-serif text-lg text-gold">
            100 Days of Revival
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => onOpenChange(false)}
              className={cn(
                "rounded-md px-4 py-3 font-sans text-base font-medium transition-colors",
                location.pathname === link.href
                  ? "bg-gold/10 text-gold"
                  : "text-cream/80 hover:bg-white/5 hover:text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
