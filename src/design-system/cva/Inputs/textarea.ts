import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  `rounded-2xl bg-[var(--color-input-bg)] p-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-[var(--color-border-secondary)]/20 dark:focus:ring-white focus:ring-offset-1 resize-none`,
  {
    variants: {
      size: {
        xl: "w-full max-w-[577px] min-h-[160px] text-base",
        lg: "w-[460px] min-h-[140px] text-base",
        md: "w-[350px] min-h-[120px] text-base",
        sm: "w-[310px] min-h-[100px] text-sm",
        xs: "w-[250px] min-h-[80px] text-sm",
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
    },
  }
);
