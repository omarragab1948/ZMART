import { tailwindClassesMerge } from "@/utils/tailwindClassesMerge";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Check, Eye, EyeClosed } from "lucide-react";
import { motion } from "motion/react";

const inputVariant = cva(
  "rounded-full bg-[var(--color-input-bg)] block py-3 px-4 transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-white focus:ring-offset-1",
  {
    variants: {
      size: {
        xl: "w-full max-w-[577px] h-[48px] text-base",
        lg: "w-[460px] h-[48px] text-base",
        md: "w-[350px] h-[48px] text-base",
        sm: "w-[310px] h-[44px] text-sm",
        xs: "w-[250px] h-[40px] text-sm",
        xxs: "w-[120px] h-[36px] text-sm",
      },
      fullWidth: {
        true: "w-full",
      },
      status: {
        error:
          "ring-1 ring-red-500 focus:ring-red-500 placeholder:text-red-500",
        disabled: `
          cursor-not-allowed
          bg-gray-100 dark:bg-gray-700
          text-gray-500 dark:text-gray-300
          ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0
          disabled:bg-slate-50 dark:disabled:bg-gray-700
          disabled:text-slate-500 dark:disabled:text-gray-400
          disabled:border-slate-200 disabled:shadow-none
        `,
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: false,
    },
  }
);

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariant> {
  status?: "error" | "disabled";
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ size, type, fullWidth, className, status, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isDisabled = status === "disabled";
    const extraTypeClasses =
      type === "number"
        ? "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
        : "";

    const baseClasses = tailwindClassesMerge(
      inputVariant({ size, fullWidth, status }),
      extraTypeClasses,
      isDisabled ? "focus:ring-0 ring-0 focus:outline-none" : "",
      className
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
              <Check size={16} />
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
              {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
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
export const EmailInput = forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <Input ref={ref} type="text" {...props} />
));

export const PasswordInput = forwardRef<HTMLInputElement, IProps>(
  (props, ref) => <Input ref={ref} type="password" {...props} />
);

export const NumberInput = forwardRef<HTMLInputElement, IProps>(
  (props, ref) => (
    <Input ref={ref} type="number" inputMode="numeric" {...props} />
  )
);

export const TextInput = forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <Input ref={ref} type="text" {...props} />
));

export const SearchInput = forwardRef<HTMLInputElement, IProps>(
  (props, ref) => <Input ref={ref} type="search" {...props} />
);

export const CheckboxInput = forwardRef<
  HTMLInputElement,
  Omit<IProps, "value"> & {
    checked?: boolean;
  }
>((props, ref) => <Input ref={ref} type="checkbox" {...props} />);
