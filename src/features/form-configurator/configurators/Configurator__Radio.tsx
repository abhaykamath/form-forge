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
import { Grip } from "lucide-react";
import OPTIONS from "./configurator-fields/OPTIONS";

interface Configurator__Radio_Props {
  index: number;
  id: string;
  fieldConfig: FieldConfig;
  setNodeRef: any;
  style: any;
  attributes: any;
  listeners: any;
}

const Configurator__Radio = ({
  index,
  id,
  fieldConfig,
  setNodeRef,
  style,
  attributes,
  listeners,
}: Configurator__Radio_Props) => {
  const updateSavedFormConfig = usePreviewStore(
    (state) => state.updateSavedFormConfig
  );
  const validation = {
    required: "Please select atleast 1 option",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      label: fieldConfig.label || "",
      name: fieldConfig.name || "",
      "radio-options": fieldConfig.options?.join(";") || "",
    },
  });

  const onSubmit = (data: FormData) => {
    updateSavedFormConfig(id, {
      ...data,
      options: data["radio-options"].split(";"),
      validation,
    });
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
        <div className="flex-1">
          <AccordionTrigger className="p-2 hover:cursor-pointer">Radio Group</AccordionTrigger>
          <AccordionContent className="border-t pb-0">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 flex flex-wrap gap-2 border-b">
                <NAME register={register} errors={errors} />
                <LABEL register={register} />
                <OPTIONS
                  name="radio-options"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="p-2 flex justify-end gap-2">
                <Button type="button">edit</Button>
                <Button type="submit">save</Button>
              </div>
            </form>
          </AccordionContent>
        </div>
      </div>
    </AccordionItem>
  );
};

export default Configurator__Radio;
