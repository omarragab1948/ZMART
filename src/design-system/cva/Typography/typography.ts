import { cva } from "class-variance-authority";

export const typographyVariants = cva(
  `font-[var(--font-playfair)] leading-relaxed text-[var(--color-text-primary)] `,
  {
    variants: {
      variant: {
        // Logo or strong brand identity (used once or few times)
        display: `font-secondary text-[23px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold tracking-tight`,

        // Strong headings (sections, pages, or hero)
        "heading-xl": `text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold`,
        "heading-lg": `text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold`,
        "heading-md": `text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] font-bold`,
        "heading-sm": `text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold`,

        // Paragraph body text
        body: `text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-normal`,

        "body-sm": `text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] font-normal`,

        // Labels, buttons, or link text
        label: `text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium`,

        title:
          "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold",

        // Price
        price: `text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] font-bold text-[var(--color-text-primary)]`,

        // Discount (strikethrough)
        discount: `text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px]   font-bold line-through text-black/40 dark:text-white/70`,

        // Caption or muted notes
        caption: `text-xs lg:text-sm text-[var(--color-text-primary)]/60 dark:text-[var(--color-text-primary)]/60 font-normal`,
      },
    },
    defaultVariants: {
      variant: "body",
    },
  }
);
