import { FiPlus, FiMinus } from "react-icons/fi";

import { CartCounterProps } from "./types";
import { IconButton } from "@/design-system/components/Buttons/IconButton";
import Typography from "@/design-system/components/Typography/Typography";

// styles/cartCounter.cva.ts
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

import { cva } from "class-variance-authority";

const cartCounter = cva(
  `
  flex items-center justify-between rounded-full border border-gray-300
  bg-[var(--color-btn-info)] text-black
  text-sm
  `,
  {
    variants: {
      size: {
        xxs: "h-[44px] w-[90px] text-xs",
        xs: "h-[44px] w-[100px] text-sm",
        sm: "h-[48px] w-[105px] text-sm",
        md: "h-[48px] w-[115px] text-base",
        lg: "h-[54px] w-[120px] text-base",
        xl: "h-[60px] w-[126px] text-base",
        responsive: `
              w-[90px] h-[44px] text-xs
              sm:w-[105px] sm:h-[48px] sm:text-sm
              md:w-[115px] md:h-[48px] md:text-base
              lg:w-[120px] lg:h-[54px] lg:text-base
              xl:w-[126px] xl:h-[60px] xl:text-base
          `,
      },
      fullWidth: {
        true: "!w-full",
        false: "",
      },
    },
    defaultVariants: {
      size: "responsive",
      fullWidth: false,
    },
  }
);

const CartCounter = ({
  count,
  onIncrement,
  onDecrement,
  className,
  fullWidth,
  size,
}: CartCounterProps) => {
  return (
    <div
      className={tailwindClassesMerge(
        cartCounter({ fullWidth, size }),
        className
      )}
      role="group"
      aria-label="Item quantity counter"
    >
      <IconButton
        onClick={onDecrement}
        className="flex items-center justify-center w-1/3 h-full hover:text-red-500"
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </IconButton>
      <Typography
        as="span"
        className="font-medium text-center w-1/3"
        aria-label={`Quantity: ${count}`}
        aria-live="polite"
      >
        {count}
      </Typography>
      <IconButton
        onClick={onIncrement}
        className="flex items-center justify-center w-1/3 h-full hover:text-green-600"
        aria-label="Increase quantity"
      >
        <FiPlus />
      </IconButton>
    </div>
  );
};

export default CartCounter;
