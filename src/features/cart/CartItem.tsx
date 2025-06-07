import Card from "@/design-system/components/Card/Card";
import Typography from "@/design-system/components/Typography/Typography";
import { ReactNode } from "react";
import { Link } from "react-router";
import { ICartItemProps } from "./types";

export const CartItem = ({ children, link }: ICartItemProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  const leftContent = childrenArray[0];
  const rightActions = childrenArray[1];

  return (
    <Card
      className="group  cursor-pointer items-stretch h-[124px] flex flex-row justify-start items-cente gap-3"
      type="cart"
    >
      <Link to={link || ""} className="flex items-center  ">
        {leftContent}
      </Link>
      {rightActions}
    </Card>
  );
};

export const CartItemContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full flex-1  justify-between">
      {children}
    </div>
  );
};

export const CartItemImage = ({
  src,
  alt = "Cart Item Image",
}: {
  src: string;
  alt?: string;
}) => (
  <div className="bg-[#F2F0F1] h-[124px]  object-cover rounded-xl  w-[124px]  flex justify-center items-center  ">
    <img src={src} alt={alt} className=" rounded-xl" />
  </div>
);

export const CartItemTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <Typography as="p" variant="title" className={className}>
    {children}
  </Typography>
);

export const CartItemPrice = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <Typography as="span" variant="price" className={className}>
    {children}
  </Typography>
);

export const CartItemProperty = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex w-full gap-2">
      <Typography as="span" className=" text-gray-500">
        {label}:
      </Typography>
      <Typography as="span" className=" font-medium">
        {value}
      </Typography>
    </div>
  );
};
