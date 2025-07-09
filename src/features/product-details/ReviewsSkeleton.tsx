import Skeleton from "@/components/shared/Skeleton/Skeleton";

const ReviewsSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton size={"sm"} width={"full"} />
      <Skeleton size={"sm"} width={"full"} />
      <Skeleton size={"sm"} width={"full"} />
      <Skeleton size={"sm"} width={"full"} />
    </div>
  );
};

export default ReviewsSkeleton;
