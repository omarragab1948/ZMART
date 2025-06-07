import { gridVariant } from "@/design-system/cva/Grid/grid";
import { gridItemVariant } from "@/design-system/cva/Grid/grid-item";
import { VariantProps } from "class-variance-authority";

export type GridItemVariantProps = VariantProps<typeof gridItemVariant>;
export type GridVariantProps = VariantProps<typeof gridVariant>;
export type GridProps = React.HTMLAttributes<HTMLDivElement> & GridVariantProps;
export type GridItemProps = React.HTMLAttributes<HTMLDivElement> & GridItemVariantProps;
