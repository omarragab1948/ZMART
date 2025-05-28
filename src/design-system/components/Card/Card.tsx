import { cardVariants } from "@/design-system/cva/Card/card";
import { ICardProps } from "@/design-system/types/cards/card";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

const Card = ({
  variant,
  className,
  size,
  layout,
  children,
  ...res
}: ICardProps) => {
  return (
    <div
      className={tailwindClassesMerge(
        cardVariants({ variant, className, size, layout })
      )}
      {...res}
    >
      {children}
    </div>
  );
};

export default Card;
