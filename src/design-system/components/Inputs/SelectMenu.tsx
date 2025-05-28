import { forwardRef, useEffect, useRef, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { menu } from "@/design-system/cva/Inputs/menu";
import { ISelectMenuProps } from "@/design-system/types/inputs/menu";

export const SelectMenu = forwardRef<HTMLDivElement, ISelectMenuProps>(
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
        className={tailwindClassesMerge(menu({ size, status }))}
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
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4" />
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
                      <FaCheck className="h-4 w-4" />
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
