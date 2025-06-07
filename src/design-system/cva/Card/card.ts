import { cva } from "class-variance-authority";

export const cardVariants = cva("duration-300  bg-[var(--color-bg-primary)]", {
  variants: {
    layout: {
      vertical: "flex flex-col",
      horizontal: "flex flex-row",
    },
    variant: {
      default: "shadow",
      bordered: "border border-[var(--color-sec-border)]",
      noshadow: "",
    },
    type: {
      product: "w-[296px]",
      cart: "w-full sm:w-full lg:w-full",
      checkout: "w-full md:w-[550px] lg:w-[600px] xl:w-[700px]",
      checkoutSummary: "w-full md:w-[550px] lg:w-[350px] xl:w-[500px]",
    },
  },
  defaultVariants: {
    layout: "vertical",
    variant: "noshadow",
  },
});
