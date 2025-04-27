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
import PLACEHOLDER from "./configurator-fields/PLACEHOLDER";
import { Grip } from "lucide-react";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";

interface Configurator__Email_Props {
  index: number;
  id: string;
  fieldConfig: FieldConfig;
  setNodeRef: any;
  style: any;
  attributes: any;
  listeners: any;
}

const Configurator__Email = ({
  index,
  id,
  fieldConfig,
  setNodeRef,
  style,
  attributes,
  listeners,
}: Configurator__Email_Props) => {
  const updateSavedFormConfig = usePreviewStore(
    (state) => state.updateSavedFormConfig
  );
  const updateUnsavedFormConfig = useConfiguratorStore(
    (state) => state.updateUnsavedFormConfig
  );
  const validation = {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format",
    },
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
      placeholder: fieldConfig.placeholder || "",
    },
  });

  const onSubmit = (data: FormData) => {
    updateSavedFormConfig(id, { ...data, validation });
    updateUnsavedFormConfig(id, { ...data, validation });
  };

  return (
    <AccordionItem
      value={`item-${index + 1}`}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className="w-full flex">
        <div
          className="p-2 flex justify-center items-start border-r hover:cursor-move"
          {...listeners}
        >
          <Grip />
        </div>
        <div className="flex-1">
          <AccordionTrigger className="p-2 hover:cursor-pointer">
            Email
          </AccordionTrigger>
          <AccordionContent className="border-t pb-0">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 flex gap-2 border-b">
                <NAME register={register} errors={errors} />
                <LABEL register={register} />
                <PLACEHOLDER register={register} />
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

export default Configurator__Email;
