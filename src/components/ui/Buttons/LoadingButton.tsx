import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tailwindClassesMerge } from "@/utils/tailwindClassesMerge";

const loadingButtonVariant = cva(
  "rounded-full cursor-pointer inline-flex justify-center items-center group transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white dark:bg-white dark:text-black font-medium",
        secondary:
          "bg-white text-black dark:bg-black dark:text-white border border-black/20 font-medium",
        danger: "bg-[var(--color-btn-danger)] text-white font-medium",
        warning: "bg-[var(--color-btn-warning)] text-white font-medium",
        info: "bg-[var(--color-btn-info)] text-black font-normal opacity-60",
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

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof loadingButtonVariant> {
  children?: ReactNode;
  isLoading?: boolean;
}

const LoadingButton = ({
  children,
  variant,
  size,
  fullWidth,
  fitContent,
  isLoading,
  ...rest
}: IProps) => {
  return (
    <button
      className={tailwindClassesMerge(
        loadingButtonVariant({ variant, fullWidth, fitContent, size })
      )}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default LoadingButton;
