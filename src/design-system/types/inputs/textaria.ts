import { textareaVariants } from "@/design-system/cva/Inputs/text-area";
import { VariantProps } from "class-variance-authority";
import { TextareaHTMLAttributes } from "react";

export interface ITextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  status?: "error" | "disabled";
}
