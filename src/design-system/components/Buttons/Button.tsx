import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { buttonVariant } from "@/design-system/cva/Buttons/button";
import { IButtonProps } from "@/design-system/types/buttons/button";

const Button = ({
  children,
  variant,
  fullWidth,
  fitContent,
  className,
  size,
  ...rest
}: IButtonProps) => {
  
  return (
    <button
      className={tailwindClassesMerge(
        buttonVariant({
          variant,
          size,
          fullWidth,
          fitContent,
          className,
        })
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
