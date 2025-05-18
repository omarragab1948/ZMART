/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

interface IProps {
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
  children: React.ReactNode;
}

const FormProvider = ({ methods, onSubmit, children }: IProps) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
