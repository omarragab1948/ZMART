import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import clsx from "clsx";
import { tailwindClassesMerge } from "@/utils/tailwindClassesMerge";

const selectTrigger = cva(
  "relative rounded-lg bg-[var(--color-input-bg)] py-3 px-4 cursor-pointer transition-all duration-300 ease-in-out focus:outline-none ring-1 ring-transparent focus:ring-black/20 dark:focus:ring-white focus:ring-offset-1",
  {
    variants: {
      size: {
        xl: "w-full max-w-[577px] h-[48px] text-base",
        lg: "w-[460px] h-[48px] text-base",
        md: "w-[350px] h-[48px] text-base",
        sm: "w-[310px] h-[44px] text-sm",
        xs: "w-[250px] h-[40px] text-sm",
      },
      status: {
        error: "ring-red-500 text-red-500 placeholder:text-red-500",
        disabled:
          "cursor-not-allowed bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface IProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof selectTrigger> {
  options: { id: string; title: string }[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export const SelectMenu = forwardRef<HTMLDivElement, IProps>(
  (
    {
      options,
      size,
      status,
      placeholder = "Select an option",
      disabled = false,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedValue, setSelectedValue] = useState("");
    const selectedOption = options.find((opt) => opt.id === selectedValue);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleOpen = () => {
      if (!disabled) setOpen((prev) => !prev);
    };

    const handleSelect = (val: string) => {
      onChange?.(val);
      setSelectedValue(val);
      setOpen(false);
    };

    return (
      <div
        className={tailwindClassesMerge(selectTrigger({ size, status }))}
        ref={containerRef}
        {...rest}
      >
        <div
          className="relative"
          onClick={toggleOpen}
          tabIndex={0}
          aria-haspopup="listbox"
          aria-expanded={open}
          ref={ref}
        >
          <span>{selectedOption?.title || placeholder}</span>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4" />
        </div>

        {options?.length > 0 && (
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute z-10 mt-5 w-full left-0 rounded-lg border bg-white dark:bg-black shadow-md"
                role="listbox"
              >
                {options.map((option) => (
                  <li
                    key={option.id}
                    role="option"
                    className={clsx(
                      "flex items-center justify-between px-4 py-2 cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      option.id === selectedValue &&
                        "bg-gray-100 dark:bg-gray-800"
                    )}
                    onClick={() => handleSelect(option.id)}
                  >
                    <span>{option.title}</span>
                    {option.id === selectedValue && (
                      <Check className="h-4 w-4" />
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  }
);
