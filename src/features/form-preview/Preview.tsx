import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import PENT_Input from "./PENT_Input";
import Select_Input from "./Select_Input";
import Checkbox_Input from "./Checkbox_Input";
import RadioGroup_Input from "./RadioGroup_Input";
import { FieldConfig, FormData } from "@/types/types";

const formFields: FieldConfig[] = [
  {
    type: "text",
    label: "Full Name",
    name: "fullName",
    placeholder: "Enter your name",
    validation: { required: "Full name is required" },
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  {
    type: "password",
    label: "Password",
    name: "password",
    placeholder: "Enter your password",
    validation: {
      required: "Password is required",
      minLength: { value: 6, message: "Minimum 6 characters" },
    },
  },
  {
    type: "number",
    label: "Age",
    name: "age",
    placeholder: "Enter your age",
    validation: {
      required: "Age is required",
      min: { value: 18, message: "You must be at least 18" },
    },
  },
  {
    type: "select",
    label: "Fruit",
    name: "fruit",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
    validation: { required: "Please select a fruit" },
  },
  {
    type: "checkbox",
    label: "Hobbies",
    name: "hobbies",
    options: ["Reading", "Gaming", "Traveling"],
    validation: { required: "Please select at least one hobby" },
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
    validation: { required: "Please select your gender" },
  },
];

export default function Preview() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      hobbies: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border w-full max-w-xl flex flex-col gap-6 items-center m-auto py-8 rounded-md"
    >
      {formFields.map((field) => {
        switch (field.type) {
          case "password":
          case "email":
          case "number":
          case "text":
            return (
              <PENT_Input
                key={field.name}
                field={field}
                register={register}
                errors={errors}
              />
            );
          case "select":
            return (
              <Select_Input
                key={field.name}
                field={field}
                control={control}
                errors={errors}
              />
            );
          case "checkbox":
            return (
              <Checkbox_Input
                key={field.name}
                field={field}
                control={control}
                errors={errors}
              />
            );
          case "radio":
            return (
              <RadioGroup_Input
                key={field.name}
                field={field}
                control={control}
                errors={errors}
              />
            );
          default:
            return null;
        }
      })}

      <Button type="submit">Submit</Button>
    </form>
  );
}
