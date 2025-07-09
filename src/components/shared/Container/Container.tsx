import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={tailwindClassesMerge(
        `max-w-11/12 sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 xl:px-0`,
        className
      )}
    >
      {children}
    </Tag>
  );
}
