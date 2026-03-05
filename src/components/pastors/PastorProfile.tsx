import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QuoteBlock } from "@/components/revival";
import type { Pastor } from "@/data/pastors";

interface PastorProfileProps {
  pastor: Pastor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PastorProfile({
  pastor,
  open,
  onOpenChange,
}: PastorProfileProps) {
  if (!pastor) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-lg overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-h3 font-bold">
            {pastor.name}
          </DialogTitle>
          <p className="font-sans text-sm font-medium text-gold-dark">
            {pastor.role}
            {pastor.church && ` — ${pastor.church}`}
          </p>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-6">
          {/* Photo or initials */}
          {pastor.imageSrc ? (
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={pastor.imageSrc}
                alt={pastor.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-navy">
              <span className="font-serif text-display font-bold text-gold/80">
                {pastor.initials}
              </span>
            </div>
          )}

          {/* Bio */}
          {pastor.bio && (
            <p className="font-sans text-body leading-relaxed text-muted-foreground">
              {pastor.bio}
            </p>
          )}

          {/* Quotes */}
          {pastor.quotes.length > 0 && (
            <div className="space-y-6">
              {pastor.quotes.map((q, i) => (
                <QuoteBlock
                  key={i}
                  quote={q}
                  author={pastor.name}
                  role={pastor.role}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
