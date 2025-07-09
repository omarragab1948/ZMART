import { cva } from "class-variance-authority";

export const spinnerVariants = cva("border-black animate-spin rounded-full", {
  variants: {
    size: {
      sm: "w-4 h-4 border-[1px] border-l-transparent",
      md: "w-6 h-6 border-2 border-l-transparent",
      lg: "w-10 h-10 border-4 border-l-transparent",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});