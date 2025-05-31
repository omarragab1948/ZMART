import { cva } from "class-variance-authority";

export const iconButtonVariant = cva(
  "cursor-pointer inline-flex justify-center items-center size-[24px] bg-transparent rounded-full transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "text-[var(--icon-color-default)]",
        danger: "text-[var(--icon-color-danger)]",
        filter:
          "bg-[var(--color-btn-info)] hover:bg-[var(--color-btn-info-hover)] active:bg-[var(--color-btn-info-active)] text-[var(--icon-color-filter)]",
      },

      size: {
        sm: "size-5",
        md: "size-6",
        lg: "size-8",
        xl: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
