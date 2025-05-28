import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { loadingButtonVariant } from "@/design-system/cva/Buttons/loading-button";
import { ILoadingButtonProps } from "@/design-system/types/buttons/loading-button";

const LoadingButton = ({
  children,
  variant,
  size,
  fullWidth,
  fitContent,
  isLoading,
  ...rest
}: ILoadingButtonProps) => {
  return (
    <button
      className={tailwindClassesMerge(
        loadingButtonVariant({ variant, fullWidth, fitContent, size })
      )}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default LoadingButton;
