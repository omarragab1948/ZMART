import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { colorButtonVariant } from "@/design-system/cva/Buttons/color-button";
import { IColorButtonProps } from "@/design-system/types/buttons/color-button";

export const ColorButton = ({
  variant,
  children,
  ...rest
}: IColorButtonProps) => (
  <button
    className={tailwindClassesMerge(colorButtonVariant({ variant }))}
    {...rest}
  >
    {children}
  </button>
);
