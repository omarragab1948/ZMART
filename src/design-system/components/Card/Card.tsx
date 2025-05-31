import { cardVariants } from "@/design-system/cva/Card/card";
import { ICardProps } from "@/design-system/types/cards/card";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

const Card = ({
  variant,
  className,
  layout,
  children,
  type,
  ...res
}: ICardProps) => {
  return (
    <div
      className={tailwindClassesMerge(
        cardVariants({ variant, layout, type }), 
        className 
      )}
      {...res}
    >
      {children}
    </div>
  );
};

export default Card;
