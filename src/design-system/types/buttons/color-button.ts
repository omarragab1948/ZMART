import { ButtonHTMLAttributes, ReactNode } from "react";
import { colorButtonVariant } from "../../cva/Buttons/color-button";
import { VariantProps } from "class-variance-authority";

export interface IColorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof colorButtonVariant> {
  children?: ReactNode;
}
