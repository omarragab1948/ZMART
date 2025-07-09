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
        xl: "w-[460px] h-[60px]  text-base",
        lg: "w-[400px] h-[54px] text-base",
        md: "w-[350px] h-[48px] text-base",
        sm: "w-[310px] h-[48px] text-sm",
        xs: "w-[250px] h-[44px] text-sm",
        xxs: "w-[116px] h-[44px] text-sm",
        responsive: `
              w-[116px] h-[44px] text-sm
              sm:w-[250px] sm:h-[44px] sm:text-sm
              md:w-[350px] md:h-[48px] md:text-base
              lg:w-[400px] lg:h-[54px] lg:text-base
              xl:w-[460px] xl:h-[60px] xl:text-base
          `,
      },
      fullWidth: {
        true: "!w-full",
      },
      fitContent: {
        true: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "responsive",
      fullWidth: false,
    },
  }
);
