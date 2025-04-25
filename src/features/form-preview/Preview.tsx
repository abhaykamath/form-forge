import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import PENT_Input from "./PENT_Input";
import Select_Input from "./Select_Input";
import Checkbox_Input from "./Checkbox_Input";
import RadioGroup_Input from "./RadioGroup_Input";
import { FormData } from "@/types/types";
import { usePreviewStore } from "@/stores/PreviewStore";

export default function Preview() {
  const formFieldsConfig = usePreviewStore((state) => state.formFieldsConfig);
  const formFieldsOrder = usePreviewStore((state) => state.formFieldsOrder);
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
      {formFieldsOrder.map((id) => {
        const fieldConfig = formFieldsConfig[id];
        switch (fieldConfig.type) {
          case "password":
          case "email":
          case "number":
          case "text":
            return (
              <PENT_Input
                key={fieldConfig.name}
                field={fieldConfig}
                register={register}
                errors={errors}
              />
            );
          case "select":
            return (
              <Select_Input
                key={fieldConfig.name}
                field={fieldConfig}
                control={control}
                errors={errors}
              />
            );
          case "checkbox":
            return (
              <Checkbox_Input
                key={fieldConfig.name}
                field={fieldConfig}
                control={control}
                errors={errors}
              />
            );
          case "radio":
            return (
              <RadioGroup_Input
                key={fieldConfig.name}
                field={fieldConfig}
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
