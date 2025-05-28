import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  "rounded-full cursor-pointer inline-flex justify-center items-center group transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-btn-primary)] text-[var(--color-text-secondary)] font-medium hover:bg-[var(--color-btn-primary-hover)] active:bg-[var(--color-btn-primary-active)] disabled:bg-[var(--color-btn-primary-disabled)]",
        secondary:
          "bg-[var(--color-btn-secondary)]  text-[var(--color-text-primary)]  border border-[var(--color-sec-border)] font-medium hover:bg-[var(--color-btn-secondary-hover)] active:bg-[var(--color-btn-secondary-active)] disabled:bg-[var(--color-btn-secondary-disabled)]",

        danger:
          "bg-[var(--color-btn-danger)] text-white font-medium hover:bg-[var(--color-btn-danger-hover)] active:bg-[var(--color-btn-danger-active)] disabled:bg-[var(--color-btn-danger-disabled)]",

        info: "bg-[var(--color-btn-info)] text-[var(--color-text-info)] font-normal  hover:bg-[var(--color-btn-info-hover)] active:bg-[var(--color-btn-info-active)] disabled:bg-[var(--color-btn-info-disabled)]",
      },
      size: {
        xl: "w-[460px] h-[60px] py-4 px-14 text-base",
        lg: "w-[400px] h-[54px] py-4 px-14 text-base",
        md: "w-[350px] h-[48px] py-4 px-12 text-base",
        sm: "w-[310px] h-[48px] py-4 px-10 text-sm",
        xs: "w-[250px] h-[44px] py-3 px-8 text-sm",
        xxs: "w-[120px] h-[44px] py-2 px-6 text-sm",
      },
      fullWidth: {
        true: "w-full",
      },
      fitContent: {
        true: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);