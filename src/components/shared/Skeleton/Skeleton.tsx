import { cva, type VariantProps } from "class-variance-authority";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";

const skeletonVariants = cva("skeleton  rounded-md", {
  variants: {
    shape: {
      rectangle: "rounded-md",
      circle: "rounded-full",
    },
    size: {
      xs: "h-3",
      sm: "h-4",
      md: "h-6",
      lg: "h-10",
      xl: "h-14",
    },
    width: {
      full: "w-full",
      half: "w-1/2",
      third: "w-1/3",
      quarter: "w-1/4",
      auto: "w-auto",
    },
  },
  defaultVariants: {
    shape: "rectangle",
    size: "md",
    width: "full",
  },
});

type SkeletonProps = VariantProps<typeof skeletonVariants> & {
  className?: string;
};

const Skeleton = ({ shape, size, width, className }: SkeletonProps) => {
  return (
    <div
      className={tailwindClassesMerge(
        skeletonVariants({ shape, size, width }),
        className
      )}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
