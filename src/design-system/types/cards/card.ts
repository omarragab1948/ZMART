import { cardVariants } from "@/design-system/cva/Card/card";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

export interface ICardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: ReactNode;
}
