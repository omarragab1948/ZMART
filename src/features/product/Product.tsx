import StarRating from "@/design-system/components/StarsRating/StarsRating";
import {
  ProductCard,
  ProductCardDiscount,
  ProductCardImage,
  ProductCardPrice,
  ProductCardPriceSection,
  ProductCardRating,
  ProductCardRatingSection,
  ProductCardTitle,
} from "./ProductCard";
import Badge from "@/design-system/components/Badges/Badge";
import { ProductProps } from "./types";
import currency from "@/utils/currency";

const Product = ({ product, handlers }: ProductProps) => {
  const enhancedHandlers = handlers?.map(({ icon, handler }) => ({
    icon,
    handler: (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      handler(product);
    },
  }));
  const { link, title, image, rating, price, discount, discountPercent } =
    product;
  return (
    <ProductCard link={link} handlers={enhancedHandlers}>
      <ProductCardImage src={image} alt={title} />
      <ProductCardTitle>{title}</ProductCardTitle>
      <ProductCardRatingSection>
        <StarRating rating={rating} size="lg" />
        <ProductCardRating score={rating} total={5} />
      </ProductCardRatingSection>
      <ProductCardPriceSection>
        <ProductCardPrice>{currency(price)}</ProductCardPrice>
        <ProductCardDiscount>{currency(discount)}</ProductCardDiscount>
        <Badge color="discount">{discountPercent}</Badge>
      </ProductCardPriceSection>
    </ProductCard>
  );
};

export default Product;
