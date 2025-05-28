import { cva } from "class-variance-authority";

export const inputVariant = cva(
  `
    rounded-full 
    bg-[var(--color-input-bg)] 
    block 
    py-3 px-4 
    transition-all duration-300 ease-in-out 
    focus:outline-none 
    focus:ring-1 
    focus:ring-[var(--color-border-secondary)]/20 
    dark:focus:ring-white 
    focus:ring-offset-1
  `,
  {
    variants: {
      size: {
        xl: "w-full max-w-[577px] h-[48px] text-base",
        lg: "w-full max-w-[460px] h-[48px] text-base",
        md: "w-full max-w-[350px] h-[48px] text-base",
        sm: "w-full max-w-[310px] h-[44px] text-sm",
        xs: "w-full max-w-[250px] h-[40px] text-sm",
        xxs: "w-full max-w-[120px] h-[36px] text-sm",
      },
      fullWidth: {
        true: "w-full",
      },
      status: {
        error: `
          ring-1 
          ring-[var(--color-border-error)] 
          focus:ring-[var(--color-border-error)] 
          placeholder:text-[var(--color-text-error)]
        `,
        disabled: `
          cursor-not-allowed
          bg-[var(--color-bg-light-disabled)] 
          text-[var(--color-text-disabled)] 
          ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0
          border-[var(--color-border-disabled)]
          disabled:shadow-none
        `,
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: false,
    },
  }
);
