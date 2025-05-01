import { useForm, FieldErrors, UseFormRegister } from "react-hook-form";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Save, Trash2, Grip } from "lucide-react";
import { usePreviewStore } from "@/stores/PreviewStore";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig, FormData } from "@/types/types";
import { JSX } from "react";

interface GenericConfiguratorProps {
  index: number;
  id: string;
  type: string;
  fieldConfig: FieldConfig;
  schema: FieldTypeSchema;
  setNodeRef: any;
  style: any;
  attributes: any;
  listeners: any;
}

export type FieldRenderProps = {
  name?: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export type FieldTypeSchema = {
  fields: ((props: FieldRenderProps) => JSX.Element)[];
  validation: any;
  optionKey?: string | null;
  validationFields?: ((props: FieldRenderProps) => JSX.Element)[];
};

const GenericConfigurator = ({
  index,
  id,
  type,
  fieldConfig,
  schema,
  setNodeRef,
  style,
  attributes,
  listeners,
}: GenericConfiguratorProps) => {
  const { fields, validation, optionKey } = schema;

  const defaultValues: Partial<FormData> = {
    label: fieldConfig.label || "",
    name: fieldConfig.name || "",
    placeholder: fieldConfig.placeholder || "",
    ...(optionKey ? { [optionKey]: fieldConfig.options?.join(";") || "" } : {}),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues,
  });

  const updateSavedFormConfig = usePreviewStore((s) => s.updateSavedFormConfig);
  const updateUnsavedFormConfig = useConfiguratorStore(
    (s) => s.updateUnsavedFormConfig
  );
  const deleteFieldFromUnsaved = useConfiguratorStore(
    (s) => s.deleteFieldFromUnsaved
  );
  const deleteFieldFromSaved = usePreviewStore((s) => s.deleteFieldFromSaved);

  const onSubmit = (data: FormData) => {
    const processedData = {
      ...data,
      ...(optionKey ? { options: data[optionKey].split(";") } : {}),
      validation,
    };
    updateSavedFormConfig(id, processedData);
    updateUnsavedFormConfig(id, processedData);
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
            {type.charAt(0).toUpperCase() + type.slice(1)} - {fieldConfig.name}
          </AccordionTrigger>
          <AccordionContent className="border-t pb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 grid grid-cols-2 gap-2 border-b">
                {fields.map((Field, idx) => (
                  <Field key={idx} register={register} errors={errors} />
                ))}
                {/* {schema?.validationFields?.map((ValidationField, idx) => (
                  <ValidationField
                    key={`val-${idx}`}
                    register={register}
                    errors={errors}
                  />
                ))} */}
              </div>
              <div className="p-2 flex justify-end gap-2">
                <Button type="submit" className="flex items-center">
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
            onClick={onDelete}
            className="w-8 h-8 flex items-center"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </AccordionItem>
  );
};

export default GenericConfigurator;
