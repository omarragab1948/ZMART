import { IconButton } from "@/design-system/components/Buttons/IconButton";
import Card from "@/design-system/components/Card/Card";
import Typography from "@/design-system/components/Typography/Typography";
import { ReactNode } from "react";
import { Link } from "react-router";

interface IProps {
  children: ReactNode;
  className?: string;
}
interface IPropsImage {
  alt: string;
  src: string;
}
export interface ICardProps {
  children: ReactNode;
  link?: string;
  handlers?: {
    icon: ReactNode;
    handler: () => void;
  }[];
}
interface IRatingProps {
  score: number;
  total: number;
}
export const ProductCard = ({ children, link, handlers }: ICardProps) => {
  return (
    <Card
      size="sm"
      className="gap-2 group cursor-pointer  relative overflow-hidden"
    >
      <Link to={link || ""}>
        {children}
        <div className="absolute flex flex-col gap-4 inset-x-full inset-y-5 group-hover:inset-x-3/4 transition-all duration-300">
          {handlers?.map(({ icon, handler }, i) => (
            <IconButton
              key={i}
              onClick={handler}
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-2xl"
            >
              {icon}
            </IconButton>
          ))}
        </div>
      </Link>
    </Card>
  );
};
export const ProductCardTitle = ({ children,className }: IProps) => {
  return (
    <Typography as="p" variant="title" className={className}>
      {children}
    </Typography>
  );
};
export const ProductCardPrice = ({ children, className }: IProps) => {
  return (
    <Typography as="span" variant="price" className={className}>
      {children}
    </Typography>
  );
};
export const ProductCardDiscount = ({ children,className }: IProps) => {
  return (
    <Typography as="span" variant="discount" className={className}>
      {children}
    </Typography>
  );
};

export const ProductCardRating = ({ score, total }: IRatingProps) => {
  return (
    <Typography as="span" variant="body-sm" className="flex items-baseline">
      <Typography as="span" variant="body" className="text-black">
        {score}
      </Typography>
      <Typography as="span" variant="body-sm" className="text-gray-500">
        /{total}
      </Typography>
    </Typography>
  );
};

export const ProductCardImage = ({
  src,
  alt = "Product Image",
}: IPropsImage) => {
  return (
    <div className="group bg-[#F2F0F1] rounded-xl w-full h-[298px] flex justify-center items-center overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        aria-label={alt}
        className="transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
    </div>
  );
};

export const ProductCardPriceSection = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export const ProductCardRatingSection = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="flex items-center gap-2">{children}</div>;
};
