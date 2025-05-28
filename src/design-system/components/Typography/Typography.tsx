import { typographyVariants } from "@/design-system/cva/Typography/typography";
import { ITypographyProps } from "@/design-system/types/typography/typography";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { ElementType } from "react";

const Typography = <T extends ElementType>({
  as,
  children,
  variant,
  className,
  ...rest
}: ITypographyProps<T>) => {
  const Component = as || "p";

  return (
    <Component
      className={tailwindClassesMerge(
        typographyVariants({ variant, className })
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
