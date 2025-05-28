import { cva } from "class-variance-authority";

export const menu = cva(
  [
    "relative rounded-lg py-3 px-4 cursor-pointer transition-all duration-300 ease-in-out focus:outline-none ring-1 ring-transparent focus:ring-offset-1",
    "bg-[var(--color-input-bg)]",
    "focus:ring-[var(--color-border-secondary)]",
    "dark:focus:ring-white",
  ].join(" "),
  {
    variants: {
      size: {
        xl: "w-full max-w-[577px] h-[48px] text-base",
        lg: "w-[460px] h-[48px] text-base",
        md: "w-[350px] h-[48px] text-base",
        sm: "w-[310px] h-[44px] text-sm",
        xs: "w-[250px] h-[40px] text-sm",
      },
      status: {
        error: [
          "ring-1",
          "ring-[var(--color-border-error)]",
          "text-[var(--color-text-error)]",
          "placeholder:text-[var(--color-text-error)]",
        ].join(" "),
        disabled: [
          "cursor-not-allowed",
          "bg-[var(--color-input-disabled-bg)]",
          "text-[var(--color-text-disabled)]",
          "ring-[var(--color-border-disabled)]",
          "focus:ring-0 focus:outline-none focus:ring-offset-0",
        ].join(" "),
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
