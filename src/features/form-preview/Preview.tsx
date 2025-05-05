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
import { useOutputSotre } from "@/stores/OutputStore";

export default function Preview() {
  const [animationParent] = useAutoAnimate();
  const savedFieldsOrder: T_FieldsOrder = usePreviewStore(
    (state) => state.savedFieldsOrder
  );
  const savedFormConfig: T_FormConfig = usePreviewStore(
    (state) => state.savedFormConfig
  );
  const updateFormData = useOutputSotre((state) => state.updateFormData);

  const {
    register,
    unregister,
    getValues,
    handleSubmit,
    clearErrors,
    trigger,
    control,
    formState,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {},
  });

  // Removes stale field names in the form
  useEffect(() => {
    clearErrors(Object.keys(formState.errors));
    trigger()
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
    updateFormData(data);
  };

  return (
    <form
      ref={animationParent}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl flex flex-col gap-6 items-center m-auto py-8 px-8"
    >
      <h2 className="text-2xl font-bold">Preview</h2>
      {savedFieldsOrder.length < 1 && (
        <div>Hmm, your form is looking empty, start building !☝️😎</div>
      )}
      {savedFieldsOrder.map((id) => {
        const fieldConfig = savedFormConfig[id];
        switch (fieldConfig.type) {
          case "password":
          case "email":
          case "number":
          case "text":
            return (
              <PENT_Input
                key={fieldConfig.name + fieldConfig.id}
                field={fieldConfig}
                register={register}
                errors={errors}
              />
            );
          case "select":
            return (
              <Select_Input
                key={fieldConfig.name + fieldConfig.id}
                field={fieldConfig}
                control={control}
                errors={errors}
              />
            );
          case "checkbox":
            return (
              <Checkbox_Input
                key={fieldConfig.name + fieldConfig.id}
                field={fieldConfig}
                control={control}
                errors={errors}
              />
            );
          case "radio":
            return (
              <RadioGroup_Input
                key={fieldConfig.name + fieldConfig.id}
                field={fieldConfig}
                control={control}
                errors={errors}
              />
            );
          default:
            return null;
        }
      })}
      <Button disabled={savedFieldsOrder.length < 1} type="submit">
        Submit
      </Button>
    </form>
  );
}
