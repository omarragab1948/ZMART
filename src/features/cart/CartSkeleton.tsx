import Divider from "@/components/shared/Divider/Divider";
import Skeleton from "@/components/shared/Skeleton/Skeleton";
import Card from "@/design-system/components/Card/Card";
import { Fragment } from "react/jsx-runtime";

const CartSkeleton = () => {
  return (
    <div className="py-4 px-5 md:px-4 lg:px-2 flex flex-col md:flex-row items-center md:items-start justify-around gap-3 xl:gap-0">
      <Card
        variant="bordered"
        className="p-6 gap-8 rounded-3xl"
        type="checkout"
      >
        {Array.from({ length: 3 }, (_, i) => (
          <Fragment key={i}>
            <div className="flex gap-4 items-center">
              <Skeleton className="rounded-xl w-28 h-28" />
              <div className="flex flex-col gap-2 flex-1">
                <Skeleton size="xs" width="third" />
                <Skeleton size="sm" width="half" />
                <Skeleton size="xs" width="third" />
                <Skeleton size="sm" width="half" />
              </div>
            </div>
            {i < 2 && <Divider />}
          </Fragment>
        ))}
      </Card>

      <Card
        variant="bordered"
        type="checkoutSummary"
        className="p-6 space-y-4 min-w-[280px] rounded-3xl h-fit"
        role="region"
        aria-labelledby="order-summary-title"
      >
        <div className="flex flex-col gap-5 flex-1">
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
          <Skeleton size="sm" width="full" />
        </div>
      </Card>
    </div>
  );
};

export default CartSkeleton;
