import {
  CartItem,
  CartItemImage,
  CartItemProperty,
  CartItemContent,
  CartItemPrice,
  CartItemTitle,
} from "./CartItem";
import { RiDeleteBin5Fill } from "react-icons/ri";
import CartSummary from "./CartSummary";
import { Fragment, useState } from "react";
import CartCounter from "./CartCounter";
import currency from "@/utils/currency";
import { IconButton } from "@/design-system/components/Buttons/IconButton";
import Card from "@/design-system/components/Card/Card";
import { Order } from "./types";
import Divider from "@/components/shared/Divider/Divider";

const Cart = ({ order }: { order: Order }) => {
  const [items, setItems] = useState(order.items);

  const handleIncrease = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="py-4 px-5 md:px-14 lg:px-24  flex flex-col lg:flex-row items-center lg:items-start justify-around gap-3 xl:gap-0">
      <Card
        variant="bordered"
        className=" p-6 gap-8 rounded-3xl"
        type="checkout"
      >
        {items.map((item, i) => (
          <Fragment key={item.id}>
            <CartItem link="/product/123">
              <CartItemImage src={item.image} alt={item.title} />
              <CartItemContent>
                <div className="flex justify-between items-start">
                  <CartItemTitle className="flex-1">{item.title}</CartItemTitle>
                  <IconButton
                    className="text-2xl shrink-0"
                    variant="danger"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <RiDeleteBin5Fill />
                  </IconButton>
                </div>

                <CartItemProperty label="Size" value={item.size} />
                <CartItemProperty label="Color" value={item.color} />

                <div className="flex justify-between items-center">
                  <CartItemPrice>{currency(item.price)}</CartItemPrice>
                  <CartCounter
                    count={item.quantity}
                    onIncrement={() => handleIncrease(item.id)}
                    onDecrement={() => handleDecrease(item.id)}
                  />
                </div>
              </CartItemContent>
            </CartItem>
            {i + 1 !== items.length && <Divider />}
          </Fragment>
        ))}
      </Card>
      <CartSummary
        subtotal={order.subtotal}
        discount={order.discount}
        deliveryFees={order.deliveryFees}
        total={order.total}
      />
    </div>
  );
};

export default Cart;
