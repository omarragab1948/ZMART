import { IFormProps } from "@/design-system/types/form/form";
import { FormProvider as Form } from "react-hook-form";

const FormProvider = ({ methods, onSubmit, children }: IFormProps) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
