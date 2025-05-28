import { ButtonHTMLAttributes, ReactNode } from "react";
import { loadingButtonVariant } from "../../cva/Buttons/loading-button";
import { VariantProps } from "class-variance-authority";

export interface ILoadingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof loadingButtonVariant> {
  children?: ReactNode;
  isLoading?: boolean;
}
