import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import PENT_Input from "./PENT_Input";
import Select_Input from "./Select_Input";
import Checkbox_Input from "./Checkbox_Input";
import RadioGroup_Input from "./RadioGroup_Input";
import { FormData, T_FieldsOrder, T_FormConfig } from "@/types/types";
import { usePreviewStore } from "@/stores/PreviewStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";

export default function Preview() {
  const [animationParent] = useAutoAnimate();
  const savedFieldsOrder: T_FieldsOrder = usePreviewStore(
    (state) => state.savedFieldsOrder
  );
  const savedFormConfig: T_FormConfig = usePreviewStore(
    (state) => state.savedFormConfig
  );
  const {
    register,
    unregister,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {},
  });

  // Removes stale field names in the form
  useEffect(() => {
    const registeredNames = Object.keys(getValues());
    const actualNames = Object.values(savedFormConfig).map((obj) => obj.name);
    const staleNames = registeredNames.filter(
      (name) => !actualNames.includes(name)
    );
    if (staleNames.length > 0) {
      unregister(staleNames);
    }
  }, [savedFormConfig, unregister]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      ref={animationParent}
      onSubmit={handleSubmit(onSubmit)}
      className="border w-full max-w-xl flex flex-col gap-6 items-center m-auto py-8 rounded-md"
    >
      {savedFieldsOrder.map((id) => {
        const fieldConfig = savedFormConfig[id];
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
