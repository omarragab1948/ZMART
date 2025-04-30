import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function tailwindClassesMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
