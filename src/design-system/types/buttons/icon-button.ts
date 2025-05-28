import { ButtonHTMLAttributes, ReactNode } from "react";
import { iconButtonVariant } from "../../cva/Buttons/icon-button";
import { VariantProps } from "class-variance-authority";

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariant> {
  children: ReactNode;
  className?: string;
}
