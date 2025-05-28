import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center text-white text-sm font-medium rounded-full p- w-[58px] h-[22px] sm:w-[62px]  md:w-[66px]  lg:w-[72px] ",
  {
    variants: {
      color: {
        default: "bg-gray-600",
        discount: "bg-red-100 text-red-500",
        soldout: "bg-black",
        new: "bg-green-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);
