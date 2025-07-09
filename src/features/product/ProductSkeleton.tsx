import Skeleton from "@/components/shared/Skeleton/Skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex gap-3 flex-col w-[296px] mx-auto">
      <Skeleton size="xs" width="full" className="h-[296px] rounded-xl" />
      <Skeleton shape="circle" size="sm" width="full" />
      <Skeleton shape="circle" size="sm" width="full" />
      <Skeleton shape="circle" size="sm" width="full" />
    </div>
  );
};

export default ProductSkeleton;
