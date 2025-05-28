import { cva } from "class-variance-authority";

export const starRating = cva("flex items-center gap-1 ", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-xl",
    },
    color: {
      yellow: "text-yellow-400",
      gray: "text-gray-400",
    },
  },
  defaultVariants: {
    size: "md",
    color: "yellow",
  },
});
