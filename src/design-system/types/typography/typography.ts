import { typographyVariants } from "@/design-system/cva/Typography/typography";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type ITypographyProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & VariantProps<typeof typographyVariants> &
  ComponentPropsWithoutRef<T>;
