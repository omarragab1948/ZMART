/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormReturn } from "react-hook-form";

export interface IFormProps {
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
  children: React.ReactNode;
}