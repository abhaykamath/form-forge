import { Button } from "@/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePreviewStore } from "@/stores/PreviewStore";
import { FieldConfig, FormData } from "@/types/types";
import { useForm } from "react-hook-form";

import NAME from "./configurator-fields/NAME";
import LABEL from "./configurator-fields/LABEL";
import { Grip, Save, Trash2 } from "lucide-react";
import OPTIONS from "./configurator-fields/OPTIONS";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";

interface Configurator__Checkbox_Props {
  index: number;
  id: string;
  fieldConfig: FieldConfig;
  setNodeRef: any;
  style: any;
  attributes: any;
  listeners: any;
}

const Configurator__Checkbox = ({
  index,
  id,
  fieldConfig,
  setNodeRef,
  style,
  attributes,
  listeners,
}: Configurator__Checkbox_Props) => {
  const updateSavedFormConfig = usePreviewStore(
    (state) => state.updateSavedFormConfig
  );
  const updateUnsavedFormConfig = useConfiguratorStore(
    (state) => state.updateUnsavedFormConfig
  );
  const deleteFieldFromUnsaved = useConfiguratorStore(
    (state) => state.deleteFieldFromUnsaved
  );
  const deleteFieldFromSaved = usePreviewStore(
    (state) => state.deleteFieldFromSaved
  );
  const validation = {
    required: "Please select 1 option",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      label: fieldConfig.label || "",
      name: fieldConfig.name || "",
      "checkbox-options": fieldConfig.options?.join(";") || "",
    },
  });

  const onSubmit = (data: FormData) => {
    updateSavedFormConfig(id, {
      ...data,
      options: data["checkbox-options"].split(";"),
      validation,
    });
    updateUnsavedFormConfig(id, {
      ...data,
      options: data["checkbox-options"].split(";"),
      validation,
    });
  };

  const onDelete = () => {
    deleteFieldFromUnsaved(id);
    deleteFieldFromSaved(id);
  };

  return (
    <AccordionItem
      ref={setNodeRef}
      style={style}
      {...attributes}
      value={`item-${index + 1}`}
    >
      <div className="w-full flex">
        <div
          className="p-2 flex justify-center items-start border-r hover:cursor-move"
          {...listeners}
        >
          <Grip />
        </div>
        <div className="flex-1 border-r">
          <AccordionTrigger className="p-2 hover:cursor-pointer">
            Checkbox - {fieldConfig.name}
          </AccordionTrigger>
          <AccordionContent className="border-t pb-0">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 grid grid-cols-2 flex-wrap gap-2 border-b">
                <NAME register={register} errors={errors} />
                <LABEL register={register} />
                <OPTIONS
                  name="checkbox-options"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="p-2 flex justify-end gap-2">
                <Button
                  type="submit"
                  className="flex items-center hover:cursor-pointer"
                >
                  <Save />
                  <span>Save</span>
                </Button>
              </div>
            </form>
          </AccordionContent>
        </div>
        <div className="p-1 flex justify-center items-start">
          <Button
            variant="destructive"
            type="button"
            className="flex items-center w-8 h-8 hover:cursor-pointer"
            onClick={onDelete}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </AccordionItem>
  );
};

export default Configurator__Checkbox;
