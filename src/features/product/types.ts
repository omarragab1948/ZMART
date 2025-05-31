import { ReactNode } from "react";

export interface IProdcut {
  id: string;
  title: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  discountPercent: string;
  link: string;
}
export interface IProducHandlers {
  icon: ReactNode;
  handler: (product: IProdcut) => void;
}
export type ProductProps = {
  product: IProdcut;
  handlers: IProducHandlers[];
};
