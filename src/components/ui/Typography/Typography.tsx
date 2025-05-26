import { tailwindClassesMerge } from "@/utils/tailwindClassesMerge";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { ElementType, ComponentPropsWithoutRef } from "react";
const typographyVariants = cva(
  "font-primary leading-relaxed text-black dark:text-white",
  {
    variants: {
      variant: {
        // Logo or strong brand identity (used once or few times)
        display:
          "font-secondary text-[23px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold tracking-tight",

        // Strong headings (sections, pages, or hero)
        "heading-xl":
          "text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold", 
        "heading-lg":
          "text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold", 
        "heading-md":
          "text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] font-bold",
        "heading-sm":
          "text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold", 

        // Paragraph body text
        body: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal", 
        "body-sm":
          "text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] font-normal", 

        // Labels, buttons, or link text
        label:
          "text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium",

        // Price
        price:
          "text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] font-bold text-green-600",

        // Discount (strikethrough)
        discount:
          "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal line-through text-red-600 dark:text-red-600",

        // Caption or muted notes
        caption:
          "text-xs lg:text-sm text-black/60 dark:text-white/60 font-normal",
      },
    },
    defaultVariants: {
      variant: "body",
    },
  }
);

type TypographyProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & VariantProps<typeof typographyVariants> &
  ComponentPropsWithoutRef<T>;
const Typography = <T extends ElementType = "p">({
  as,
  children,
  variant,
  ...rest
}: TypographyProps<T>) => {
  const Component = as || "p";

  return (
    <Component
      className={tailwindClassesMerge(typographyVariants({ variant }))}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
