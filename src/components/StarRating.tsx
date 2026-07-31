import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  value: number;
  onChange?: (value: number) => void;
  className?: string;
};

const StarRating = ({ value, onChange, className }: StarRatingProps) => {
  const interactive = typeof onChange === "function";

  return (
    <div className={cn("flex items-center gap-1", className)} role={interactive ? "radiogroup" : undefined}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= value;
        const icon = (
          <Star
            className={cn(
              "h-5 w-5 transition-colors",
              filled ? "fill-primary text-primary" : "text-muted-foreground/40",
            )}
          />
        );

        if (!interactive) {
          return <span key={star}>{icon}</span>;
        }

        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} de 5 estrellas`}
            onClick={() => onChange?.(star)}
            className="rounded-sm p-0.5 hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
