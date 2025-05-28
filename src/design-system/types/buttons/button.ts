import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonVariant } from "../../cva/Buttons/button";
import { VariantProps } from "class-variance-authority";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  children?: ReactNode;
}
