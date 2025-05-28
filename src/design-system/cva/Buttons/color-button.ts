import { cva } from "class-variance-authority";

export const colorButtonVariant = cva(
  "cursor-pointer inline-flex justify-center items-center rounded-full w-[37px] h-[37px] border border-[var(--color-sec-border)]",
  {
    variants: {
      variant: {
        primary: "bg-black text-white",
        secondary: "bg-[var(--color-btn-secondary)] text-black",
        danger: "bg-[var(--color-btn-danger)] text-white",
        warning: "bg-[var(--color-btn-warning)] text-white",
        info: "bg-[var(--color-btn-info)] text-white",
        infoDark: "bg-[var(--color-btn-info-dark)] text-white",
        purple: "bg-[var(--color-btn-purple)] text-white",
        filter: "bg-[var(--color-btn-filter)] text-black",
        pink: "bg-[var(--color-btn-pink)] text-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);