import Skeleton from "@/components/shared/Skeleton/Skeleton";
import { Grid } from "@/design-system/components/Grid/Grid";
import { GridItem } from "@/design-system/components/Grid/GridItem";

const ProductDetailsSkeleton = () => {
  return (
    <div className="flex items-center md:h-screen py-3">
      <Grid columns={12} className="w-full">
        <GridItem span={12} sm={12} md={6} lg={5} className="overflow-hidden">
          <GridItem
            span={12}
            lg={12}
            className="max-w-[360px] h-[290px] md:h-[470px] md:max-w-[460px] rounded-3xl bg-[#F0EEED] mx-auto"
          >
            <Skeleton className="w-full h-full" />
          </GridItem>
        </GridItem>
        <GridItem
          span={12}
          sm={12}
          md={6}
          lg={7}
          className="flex flex-col justify-center items-start gap-4 "
        >
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ProductDetailsSkeleton;
