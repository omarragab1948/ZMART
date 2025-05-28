import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { iconButtonVariant } from "@/design-system/cva/Buttons/icon-button";
import { IIconButtonProps } from "@/design-system/types/buttons/icon-button";

export const IconButton = ({
  children,
  variant,
  className,
  size,
  ...rest
}: IIconButtonProps) => (
  <button
    className={tailwindClassesMerge(
      iconButtonVariant({ variant, size, className })
    )}
    {...rest}
  >
    {children}
  </button>
);
