import { gridVariant } from "@/design-system/cva/Grid/grid";
import { GridProps } from "@/design-system/types/grid/grid";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import React from "react";

export const Grid: React.FC<GridProps> = ({
  columns,
  gap,
  align,
  justify,
  className,
  ...props
}) => {
  return (
    <div
      className={tailwindClassesMerge(
        gridVariant({ columns, gap, align, justify }),
        className
      )}
      {...props}
    />
  );
};
