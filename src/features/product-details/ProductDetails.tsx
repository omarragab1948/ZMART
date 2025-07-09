import { Grid } from "@/design-system/components/Grid/Grid";
import ProductImageGallery from "./ProductImageGallery";
import { GridItem } from "@/design-system/components/Grid/GridItem";
import {
  ProductCardDiscount,
  ProductCardPrice,
  ProductCardPriceSection,
  ProductCardRating,
  ProductCardRatingSection,
} from "../product/ProductCard";
import Typography from "@/design-system/components/Typography/Typography";
import StarRating from "@/design-system/components/StarsRating/StarsRating";
import Badge from "@/design-system/components/Badges/Badge";
import currency from "@/utils/currency";
import Divider from "@/components/shared/Divider/Divider";
import { ColorButton } from "@/design-system/components/Buttons/ColorButton";
import Button from "@/design-system/components/Buttons/Button";
import CartCounter from "../cart/CartCounter";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
export interface IProduct {
  images: string[];
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  sizes: string[];
  colors: { name: string; hex: string }[];
}

interface IProductDetails {
  product: IProduct;
}


const ProductDetails = ({ product }: IProductDetails) => {
  const [selected, setSelected] = useState(0);
  const [selected2, setSelected2] = useState(0);

  return (
    <div className="flex items-center md:h-screen py-3">
      <Grid columns={12}>
        <GridItem span={12} sm={12} md={6} lg={5} className="overflow-hidden">
          <ProductImageGallery images={product.images} />
        </GridItem>
        <GridItem
          span={12}
          sm={12}
          md={6}
          lg={7}
          className="flex flex-col justify-center items-start gap-4 "
        >
          <Typography variant="heading-md">{product.title}</Typography>
          <ProductCardRatingSection>
            <StarRating rating={3.5} size="lg" />
            <ProductCardRating score={3.5} total={5} />
          </ProductCardRatingSection>
          <ProductCardPriceSection>
            <ProductCardPrice>{currency(product.price)}</ProductCardPrice>
            {product.discount && (
              <ProductCardDiscount>
                {currency(product.discount)}
              </ProductCardDiscount>
            )}
            <Badge color="discount">{10}</Badge>
          </ProductCardPriceSection>
          <Typography variant="body" className="text-black/60">
            {product.description}
          </Typography>
          <Divider />
          <div className="flex flex-col gap-3">
            <Typography variant="body" className="text-black/60">
              Select Colors
            </Typography>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <ColorButton
                  key={index}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelected2(index)}
                >
                  {selected2 === index && <FaCheck />}
                </ColorButton>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-3">
            <div>
              <Typography variant="body" className="text-black/60">
                Choose Size
              </Typography>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((label, index) => (
                <Button
                  key={index}
                  variant={selected === index ? "primary" : "info"}
                  size="xxs"
                  onClick={() => setSelected(index)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <Divider />
          <div className="w-full">
            <Grid columns={12} gap={2}>
              <GridItem span={4} lg={4}>
                <CartCounter
                  count={0}
                  onDecrement={() => {}}
                  onIncrement={() => {}}
                  fullWidth
                />
              </GridItem>
              <GridItem span={8} lg={8}>
                <Button fullWidth>Add to Cart</Button>
              </GridItem>
            </Grid>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ProductDetails;
