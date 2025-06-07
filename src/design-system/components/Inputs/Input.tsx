import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { forwardRef, ReactNode, useState } from "react";
import { LuEyeClosed } from "react-icons/lu";
import { motion } from "motion/react";
import { inputVariant } from "@/design-system/cva/Inputs/input";
import { IInputProps } from "@/design-system/types/inputs/input";
import { FaCheck, FaEye } from "react-icons/fa";
import Typography from "../Typography/Typography";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ size, type, fullWidth, className, status, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isDisabled = status === "disabled";
    const extraTypeClasses =
      type === "number"
        ? "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
        : "";

    const baseClasses = tailwindClassesMerge(
      inputVariant({ size, fullWidth, status, className }),
      extraTypeClasses,
      isDisabled ? "focus:ring-0 ring-0 focus:outline-none" : ""
    );
    const checkboxClasses =
      "w-5 h-5 accent-black dark:accent-white transition-colors duration-200 ring-1 ring-black dark:ring-white appearance-none focus:ring-blue-500 checked:ring-blue-500 focus:border-none focus:outline-none rounded-sm peer";
    switch (type) {
      case "checkbox":
        return (
          <label className="relative inline-flex items-center">
            <input
              type="checkbox"
              className={checkboxClasses}
              role="checkbox"
              aria-checked={!!rest.checked}
              aria-label={rest["aria-label"] || "Checkbox option"}
              ref={ref}
              {...rest}
            />
            <span className="absolute left-0 top-0 w-5 h-5 rounded-sm bg-transparent dark:text-white  peer-checked:flex items-center justify-center hidden">
              <FaCheck />
            </span>
          </label>
        );
      case "password":
        return (
          <div className="relative w-fit">
            <input
              type={showPassword ? "text" : "password"}
              className={baseClasses}
              ref={ref}
              {...rest}
            />
            <motion.button
              key={showPassword ? "eye-closed" : "eye"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-black duration-300 focus-visible:ring-2 focus-visible:ring-black/20 rounded-full cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
            >
              {showPassword ? <LuEyeClosed /> : <FaEye />}
            </motion.button>
          </div>
        );
      default:
        return (
          <input
            type={type}
            className={baseClasses}
            aria-label={rest.placeholder || "input"}
            ref={ref}
            {...rest}
          />
        );
    }
  }
);
export const EmailInput = forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => <Input ref={ref} type="text" {...props} />
);

export const PasswordInput = forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => <Input ref={ref} type="password" {...props} />
);

export const NumberInput = forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => (
    <Input ref={ref} type="number" inputMode="numeric" {...props} />
  )
);

export const TextInput = forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => <Input ref={ref} type="text" {...props} />
);

export const SearchInput = forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => <Input ref={ref} type="search" {...props} />
);
interface PromoCodeInputProps extends IInputProps {
  icon?: ReactNode;
}

export const PromoCodeInput = forwardRef<HTMLInputElement, PromoCodeInputProps>(
  ({ icon, ...props }, ref) => (
    <div className="relative w-full">
      <Input
        ref={ref}
        type="text"
        className="pl-10 w-full"
        size="lg"
        {...props}
      />
      {icon && (
        <Typography
          as="span"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {icon}
        </Typography>
      )}
    </div>
  )
);
export const CheckboxInput = forwardRef<
  HTMLInputElement,
  Omit<IInputProps, "value"> & {
    checked?: boolean;
  }
>((props, ref) => <Input ref={ref} type="checkbox" {...props} />);
