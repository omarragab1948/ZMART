import { badgeVariants } from "@/design-system/cva/Badges/badge";
import { IBadgeProps } from "@/design-system/types/badges/badges";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

const Badge = ({ children, className, color }: IBadgeProps) => {
  return (
    <span className={tailwindClassesMerge(badgeVariants({ color, className }))}>
      {children}
    </span>
  );
};

export default Badge;
