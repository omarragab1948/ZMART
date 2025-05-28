import { menu } from "@/design-system/cva/Inputs/menu";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

export interface ISelectMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof menu> {
  options: { id: string; title: string }[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}