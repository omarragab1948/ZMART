import { tailwindClassesMerge } from "@/utils/tailwindClassesMerge";
import { cva, VariantProps } from "class-variance-authority";
import { TextareaHTMLAttributes, forwardRef } from "react";

const textareaVariants = cva(
  "rounded-2xl bg-[var(--color-input-bg)] p-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-white focus:ring-offset-1 resize-none",
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
        error: "ring-1 ring-red-500 focus:ring-red-500 placeholder:text-red-500",
        disabled: `
          cursor-not-allowed
          bg-gray-100 dark:bg-gray-700
          text-gray-500 dark:text-gray-300
          ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0
          disabled:shadow-none
        `,
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  status?: "error" | "disabled";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, fullWidth, status, className, ...rest }, ref) => {
    const combinedClass = tailwindClassesMerge(
      textareaVariants({ size, fullWidth, status }),
      className
    );

    return (
      <textarea
        ref={ref}
        className={combinedClass}
        aria-label={rest.placeholder || "Textarea input"}
        {...rest}
      />
    );
  }
);

