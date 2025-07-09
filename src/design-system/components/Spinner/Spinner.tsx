import { spinnerVariants } from "@/design-system/cva/Spinner/Spinner";
import { ISpinnerProps } from "@/design-system/types/spinner/spinner";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

const Spinner = ({ size, className }: ISpinnerProps) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={tailwindClassesMerge(spinnerVariants({ size }), className)}
    ></div>
  );
};

export default Spinner;
