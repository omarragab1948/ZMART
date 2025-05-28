import { badgeVariants } from "@/design-system/cva/Badges/badge";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

export interface IBadgeProps extends VariantProps<typeof badgeVariants> {
  children?: ReactNode;
  className?: string;
}
