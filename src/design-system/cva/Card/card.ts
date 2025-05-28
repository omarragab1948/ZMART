import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "duration-300 p-4 bg-[var(--color-bg-primary)] ",
  {
    variants: {
      size: {
        sm: "w-[296px]",
        md: "w-[400px]",
        lg: "w-[407px]",
        xl: "w-[715px]",
      },
      layout: {
        vertical: "flex flex-col",
        horizontal: "flex flex-row",
      },
      variant: {
        default: "shadow",
        noshadow: "",
        bordered: "border border-[var(--color-sec-border)]",
      },
    },
    defaultVariants: {
      size: "md",
      layout: "vertical",
      variant: "noshadow",
    },
  }
);
