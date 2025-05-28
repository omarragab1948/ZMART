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
import currency from "@/design-system/utils/currency";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IProdcut, IProducHandlers } from "./types";

const handlers: IProducHandlers[] = [
  {
    icon: <FaRegHeart />,
    handler: () => {},
  },
  {
    icon: <FiShoppingCart />,
    handler: () => {},
  },
];
const Product = ({
  title,
  image,
  price,
  discount,
  rating,
  discountPercent,
  link,
}: IProdcut) => {
  return (
    <ProductCard link={link} handlers={handlers}>
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
