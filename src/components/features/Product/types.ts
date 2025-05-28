import {  ReactNode } from "react";

export interface IProdcut {
  id: number;
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
  handler: () => void;
}