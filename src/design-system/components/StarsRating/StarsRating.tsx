import { getStars } from "@/utils/getStars";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { VariantProps } from "class-variance-authority";
import { starRating } from "@/design-system/cva/StarsRating/stars-rating";

interface StarRatingProps extends VariantProps<typeof starRating> {
  rating: number;
  max?: number;
  className?: string;
}

const StarRating = ({
  rating,
  max = 5,
  className,
  size,
  color,
}: StarRatingProps) => {
  const { full, half, empty } = getStars(rating, max);

  return (
    <div className={starRating({ size, color, className })}>
      {Array(full)
        .fill(0)
        .map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
      {half === 1 && <FaStarHalfAlt />}
      {Array(empty)
        .fill(0)
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-300" />
        ))}
    </div>
  );
};

export default StarRating;
