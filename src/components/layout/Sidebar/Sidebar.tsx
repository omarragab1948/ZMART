import Divider from "@/components/shared/Divider/Divider";
import { IconButton } from "@/design-system/components/Buttons/IconButton";
import Typography from "@/design-system/components/Typography/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const sampleCategories = [
  {
    name: "Electronics",
    subcategories: ["Phones", "Laptops", "Tablets"],
  },
  {
    name: "Fashion",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Men's Shoes",
      "Women's Shoes",
      "Men's Accessories",
      "Women's Accessories",
    ],
  },

  {
    name: "Adults",
    subcategories: ["Office Wear", "Casual Wear", "Formal Wear", "Sleepwear"],
  },
  {
    name: "Children",
    subcategories: [
      "Baby Clothing",
      "Kids Shoes",
      "School Backpacks",
      "Toys for Kids",
    ],
  },
  {
    name: "Toys",
    subcategories: ["Action Figures", "Puzzles", "Educational Toys", "Dolls"],
  },
  {
    name: "Beauty",
    subcategories: [
      "Make-Up",
      "Haircare",
      "Skincare",
      "Fragrances",
      "Tools & Accessories",
    ],
  },
  {
    name: "Home",
    subcategories: ["Furniture", "Kitchen", "Decor"],
  },
];

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeCat, setActiveCat] = useState<null | {
    name: string;
    subcategories: string[];
  }>(null);

  const handleCLose = useCallback(() => {
    onClose();
    setActiveCat(null);
  }, [onClose]);
  const asideRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
        handleCLose();
      }
    };
    addEventListener("mousedown", handler);
    return () => {
      removeEventListener("mousedown", handler);
    };
  }, [handleCLose]);
  const selected = sampleCategories.find((cat) => cat.name === activeCat?.name);
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full  bg-white shadow-lg z-50  duration-300 ease-in-out overflow-hidden
        ${isOpen ? "w-84 sm:w-96" : "w-0"}
        lg:hidden
      `}
      ref={asideRef}
    >
      <div className="p-4 flex justify-between items-center">
        <span className="font-bold text-lg">ZMART</span>
        <IconButton onClick={handleCLose}>
          <MdClose size={20} />
        </IconButton>
      </div>
      <Divider />
      <nav className="relative w-full h-full">
        <div
          className={`p-4 space-y-4 flex flex-col items-start transition-transform duration-300 w-full h-full absolute inset-0  ${
            selected?.name ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {sampleCategories.map((cat) => (
            <div key={cat.name} className="w-full">
              <button
                onClick={() => setActiveCat(cat)}
                className="cursor-pointer w-full text-left  my-4"
              >
                <Typography as="h4">{cat.name}</Typography>
              </button>
              <Divider />
            </div>
          ))}
        </div>
        <div
          className={`p-4 space-y-4 flex flex-col items-start transition-transform duration-300   w-full h-full absolute inset-0 ${
            selected?.name ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full">
            <button
              onClick={() => setActiveCat(null)}
              className="cursor-pointer flex items-center gap-3 w-full py-4"
            >
              <FaLongArrowAltLeft />
              <Typography as="h4" variant="title">
                {selected?.name}
              </Typography>
            </button>
            <Divider />

            {selected?.subcategories.map((sub) => (
              <a className="w-full my-6 block space-y-4">
                <p>{sub}</p>
                <Divider />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
