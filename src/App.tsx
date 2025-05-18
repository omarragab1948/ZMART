import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  CheckboxInput,
  EmailInput,
  NumberInput,
  PasswordInput,
  SearchInput,
  TextInput,
} from "./components/ui/Inputs/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./components/ui/Buttons/Button";
import { AnimatePresence, motion } from "motion/react";
import { SelectMenu } from "./components/ui/Inputs/SelectInput";
import { Textarea } from "./components/ui/Inputs/TextAreaInput";
import FormProvider from "./components/ui/Form/Form";

function App() {
  const schema = Yup.object({
    email: Yup.string().required("Please add email").email("Only valid email"),
    password: Yup.string().required("Please add password"),
    address: Yup.string().required("Please add address"),
    number: Yup.string()
      .required("Please add phone")
      .matches(/^\d+$/, "Only numbers are allowed"),
    agree: Yup.boolean().oneOf([true], "Please confirm data"),
    status: Yup.string().required("Choose your status"),
    details: Yup.string().required("Details are reqiured"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      address: "",
      number: "",
      agree: false,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;
  console.log(watch("agree"));
  const errorAnimation = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  const onSubmit = handleSubmit(
    (data: {
      email: string;
      password: string;
      address: string;
      number: string;
      agree?: boolean | undefined;
    }) => {
      console.log("Form data:", data);
    }
  );

  return (
    <div>
      <SearchInput size="lg" placeholder="Search" />
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <div className="space-y-4 border p-4 rounded-md">
          <h2 className="text-lg font-semibold">Inside Form (Controlled)</h2>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <EmailInput
                {...field}
                placeholder="Email"
                size="sm"
                status={errors.email && "error"}
              />
            )}
          />
          {errors.email && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.email.message}
              </motion.p>
            </AnimatePresence>
          )}

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                placeholder="Password"
                size="sm"
                status={errors.password && "error"}
              />
            )}
          />
          {errors.password && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.password.message}
              </motion.p>
            </AnimatePresence>
          )}

          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Address"
                size="sm"
                status={errors.address && "error"}
              />
            )}
          />
          {errors.address && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.address.message}
              </motion.p>
            </AnimatePresence>
          )}

          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <NumberInput
                {...field}
                placeholder="Number"
                size="sm"
                status={errors.number && "error"}
              />
            )}
          />
          {errors.number && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.number.message}
              </motion.p>
            </AnimatePresence>
          )}

          <Controller
            name="agree"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <CheckboxInput
                  {...field}
                  id="agree"
                  status={errors.agree && "error"}
                />
                <label htmlFor="agree" className="text-black dark:text-white">
                  I agree to terms
                </label>
              </div>
            )}
          />
          {errors.agree && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.agree.message}
              </motion.p>
            </AnimatePresence>
          )}
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <SelectMenu
                  options={[
                    { id: "Active", title: "Active" },
                    { id: "Disabled", title: "Disabled" },
                  ]}
                  {...field}
                  size="sm"
                  status={errors.status && "error"}
                />
              </div>
            )}
          />
          {errors.status && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.status.message}
              </motion.p>
            </AnimatePresence>
          )}
          <Controller
            name="details"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Textarea
                  {...field}
                  size="sm"
                  status={errors.details && "error"}
                />
              </div>
            )}
          />
          {errors.details && (
            <AnimatePresence>
              <motion.p {...errorAnimation} className="text-red-500">
                {errors.details.message}
              </motion.p>
            </AnimatePresence>
          )}
          <Button type="submit" variant="primary" size="sm">
            Submit Form
          </Button>
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
