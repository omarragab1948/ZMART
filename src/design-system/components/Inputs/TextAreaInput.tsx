
import { textareaVariants } from "@/design-system/cva/Inputs/textarea";
import { ITextareaProps } from "@/design-system/types/inputs/textaria";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
import { forwardRef } from "react";




export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ size, fullWidth, status, className, ...rest }, ref) => {
    const combinedClass = tailwindClassesMerge(
      textareaVariants({ size, fullWidth, status }),
      className
    );

    return (
      <textarea
        ref={ref}
        className={combinedClass}
        aria-label={rest.placeholder || "Textarea input"}
        {...rest}
      />
    );
  }
);
