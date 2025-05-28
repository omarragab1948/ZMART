import { inputVariant } from "@/design-system/cva/Inputs/input";
import { VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariant> {
  status?: "error" | "disabled";
}