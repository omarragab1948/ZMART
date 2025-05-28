import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { buttonVariant } from "@/design-system/cva/Buttons/button";
import { IButtonProps } from "@/design-system/types/buttons/button";

const Button = ({
  children,
  variant,
  size,
  fullWidth,
  fitContent,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={tailwindClassesMerge(
        buttonVariant({ variant, fullWidth, fitContent, size })
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
