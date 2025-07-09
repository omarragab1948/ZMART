import { ReactNode } from "react";

interface OrderItem {
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  id: string;
}

export interface Order {
  subtotal: number;
  discount: number;
  deliveryFees: number;
  total: number;
  items: OrderItem[];
}

export interface CartCounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
  fullWidth?: boolean;
  size?: string;
}
export interface CartSummaryProps {
  subtotal: number;
  discount: number;
  deliveryFees: number;
  total: number;
}
export interface ICartItemProps {
  children: ReactNode;
  link?: string;
}
