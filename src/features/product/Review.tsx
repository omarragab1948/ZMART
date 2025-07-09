import Card from "@/design-system/components/Card/Card";
import StarRating from "@/design-system/components/StarsRating/StarsRating";
import Typography from "@/design-system/components/Typography/Typography";
import { convertDate } from "@/utils/convertDate";
import { useState } from "react";
export interface Review {
  author: string;
  rating: number;
  review: string;
  createdAt: string;
}
interface IReviewProps {
  review: Review;
  expandable?: boolean;
}
const Reviews = ({ review, expandable = false }: IReviewProps) => {
  const [expanded, setExpanded] = useState(false);
  const content = expandable
    ? expanded
      ? review?.review
      : `${review?.review?.slice(0, 200)}`
    : `${review?.review?.slice(0, 200)}`;
  return (
    <Card className="rounded-xl">
      <div className="p-3 flex flex-col gap-3">
        <StarRating rating={review?.rating} />
        <Typography variant="title">{review?.author}</Typography>
        <Typography>
          {content}
          {expandable && (
            <button
              className="text-blue-600 font-bold cursor-pointer"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Less" : "...More"}
            </button>
          )}
        </Typography>

        <Typography>{convertDate(review?.createdAt)}</Typography>
      </div>
    </Card>
  );
};

export default Reviews;
