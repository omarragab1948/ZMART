import Button from "@/design-system/components/Buttons/Button";
import Card from "@/design-system/components/Card/Card";
import { PromoCodeInput } from "@/design-system/components/Inputs/Input";
import Typography from "@/design-system/components/Typography/Typography";
import currency from "@/utils/currency";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTag } from "react-icons/fa";
import { CartSummaryProps } from "./types";
import Divider from "@/components/shared/Divider/Divider";

const CartSummary = ({
  subtotal,
  discount,
  deliveryFees,
  total,
}: CartSummaryProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      variant="bordered"
      type="checkoutSummary"
      className="p-6 space-y-4 min-w-[280px] rounded-3xl"
      role="region"
      aria-labelledby="order-summary-title"
    >
      <Typography
        id="order-summary-title"
        variant="title"
        className="text-[20px] font-semibold"
      >
        Order Summary
      </Typography>

      <div className="space-y-2">
        <div className="flex justify-between" role="row">
          <Typography
            as="span"
            className="text-[18px] font-normal text-[var(--color-text-info)]"
          >
            Subtotal
          </Typography>
          <Typography as="span" className="text-[18px] font-bold">
            {currency(subtotal)}
          </Typography>
        </div>

        <div className="flex justify-between" role="row">
          <Typography
            as="span"
            className="text-[16px] font-normal text-[var(--color-text-info)]"
          >
            Discount
          </Typography>
          <Typography as="span" className="text-[16px] font-bold text-red-500">
            -{currency(discount)}
          </Typography>
        </div>

        <div className="flex justify-between" role="row">
          <Typography
            as="span"
            className="text-[16px] font-normal text-[var(--color-text-info)]"
          >
            Delivery Fees
          </Typography>
          <Typography as="span" className="text-[16px] font-bold">
            {currency(deliveryFees)}
          </Typography>
        </div>
      </div>

      <Divider />

      <div className="flex justify-between" role="row">
        <Typography as="span" variant="price">
          Total
        </Typography>
        <Typography as="span" variant="price">
          {currency(total)}
        </Typography>
      </div>

      <div className="flex gap-4" role="group" aria-label="Promo code section">
        <PromoCodeInput
          icon={<FaTag aria-hidden="true" />}
          placeholder="Add promo code"
          aria-label="Promo code"
        />
        <Button size="xxs" type="button" aria-label="Apply promo code">
          Apply
        </Button>
      </div>

      <motion.div
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <Button
          variant="primary"
          size="xl"
          fullWidth
          className="gap-3 flex items-center"
          type="button"
          aria-label="Proceed to checkout"
        >
          <Typography as="span" className="text-[var(--color-text-secondary)]">
            Go to Checkout
          </Typography>
          <motion.div
            animate={
              isHovering
                ? {
                    x: [0, 8, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }
                : { x: 0 }
            }
            aria-hidden="true"
          >
            <FaArrowRight />
          </motion.div>
        </Button>
      </motion.div>
    </Card>
  );
};

export default CartSummary;
