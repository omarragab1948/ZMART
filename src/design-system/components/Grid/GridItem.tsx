import { gridItemVariant } from "@/design-system/cva/Grid/grid-item";
import { GridItemProps } from "@/design-system/types/grid/grid";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

export const GridItem: React.FC<GridItemProps> = ({
  span,
  sm,
  md,
  lg,
  xl,
  className,
  ...props
}) => {
  return (
    <div
      className={tailwindClassesMerge(
        gridItemVariant({ span, sm, md, lg, xl }),
        className
      )}
      {...props}
    />
  );
};
