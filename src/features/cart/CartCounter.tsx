import { FiPlus, FiMinus } from "react-icons/fi";

import { CartCounterProps } from "./types";
import { IconButton } from "@/design-system/components/Buttons/IconButton";
import Typography from "@/design-system/components/Typography/Typography";

const CartCounter = ({ count, onIncrement, onDecrement }: CartCounterProps) => {
  return (
    <div
      className={`
    flex items-center justify-between rounded-full border border-gray-300
    bg-[var(--color-btn-info)] text-black
    w-[105px] h-[40px] text-sm
    sm:w-[110px] sm:h-[42px] sm:text-sm
    md:w-[115px] md:h-[44px] md:text-base
    lg:w-[120px] lg:h-[46px] lg:text-base
    xl:w-[126px] xl:h-[48px] xl:text-base
  `}
      role="group"
      aria-label="Item quantity counter"
    >
      <IconButton
        onClick={onDecrement}
        className="flex items-center justify-center w-10 h-full hover:text-red-500"
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </IconButton>
      <Typography
        as="span"
        className="font-medium"
        aria-label={`Quantity: ${count}`}
        aria-live="polite"
      >
        {count}
      </Typography>
      <IconButton
        onClick={onIncrement}
        className="flex items-center justify-center w-10 h-full hover:text-green-600"
        aria-label="Increase quantity"
      >
        <FiPlus />
      </IconButton>
    </div>
  );
};

export default CartCounter;
