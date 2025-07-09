import Typography from "@/design-system/components/Typography/Typography";
import { IoIosArrowForward } from "react-icons/io";
interface BreadcrumbItem {
  link: string;
  label: string;
}
interface IBreadcrumbsProps {
  items: BreadcrumbItem[];
}
const Breadcrumbs = ({ items }: IBreadcrumbsProps) => {
  return (
    <div className="flex gap-4">
      {items?.map((item, i) => (
        <div className="flex items-center">
          <Typography
            variant="label"
            className={`${
              i < items?.length - 1 ? "text-[var(--color-text-primary)]/60" : ""
            }`}
          >
            {item?.label}
          </Typography>
          {i < items?.length - 1 && <IoIosArrowForward />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
