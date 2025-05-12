import { Controller, useForm } from "react-hook-form";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Save, Trash2, Grip } from "lucide-react";
import {
  FormData,
  GenericConfiguratorProps,
  InputFieldsProps,
} from "@/types/types";
import { useConfiguratorActions } from "./useConfiguratorActions";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { buildValidationRules } from "./buildValidationRules";

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
  const { fields, optionKey } = schema;

  const defaultValues: Partial<FormData> = {
    label: fieldConfig.label || "",
    name: fieldConfig.name || "",
    placeholder: fieldConfig.placeholder || "",
    ...(optionKey ? { [optionKey]: fieldConfig.options?.join(";") || "" } : {}),
    v_required: Boolean(fieldConfig?.validation?.required) || false,
    v_required_message: fieldConfig?.validation?.required || "",
    v_min: Number(fieldConfig?.validation?.min?.value) || null,
    v_min_message: fieldConfig?.validation?.min?.message || "",
    v_max: Number(fieldConfig?.validation?.max?.value) || null,
    v_max_message: fieldConfig?.validation?.max?.message || "",
    v_minLength: Number(fieldConfig?.validation?.minLength?.value) || null,
    v_minLength_message: fieldConfig?.validation?.minLength?.message || "",
    v_maxLength: Number(fieldConfig?.validation?.maxLength?.value) || null,
    v_maxLength_message: fieldConfig?.validation?.maxLength?.message || "",
    v_pattern: fieldConfig?.validation?.pattern?.value || "",
    v_pattern_message: fieldConfig?.validation?.patter?.message || "",
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues,
  });
  const { updateField, deleteField } = useConfiguratorActions();
  const [showValidationOptions, setShowValidationOptions] = useState(
    Boolean(fieldConfig?.validation) || false
  );

  let validationFields = [
    "v_required",
    "v_required_message",
    "v_min",
    "v_min_message",
    "v_max",
    "v_max_message",
    "v_minLength",
    "v_minLength_message",
    "v_maxLength",
    "v_maxLength_message",
    "v_pattern",
    "v_pattern_message",
  ];

  const onSubmit = (data: FormData) => {
    const validation = buildValidationRules(data);
    let neededKeys = Object.keys(data).filter(
      (key) => !validationFields.includes(key)
    );
    let neededDataObject: any = {};
    neededKeys.forEach((key) => (neededDataObject[key] = data[key]));

    const processedData = {
      ...neededDataObject,
      ...(optionKey ? { options: data[optionKey].split(";") } : {}),
      validation,
    };

    updateField(id, processedData);
  };

  const onDelete = () => {
    deleteField(id);
  };

  return (
    <AccordionItem
      ref={setNodeRef}
      style={style}
      {...attributes}
      value={`item-${index + 1}`}
    >
      <div className="w-full flex">
        <GrabHandle listeners={listeners} />
        <div className="flex-1 border-r">
          <AccordionTrigger className="p-2 hover:cursor-pointer">
            {type.charAt(0).toUpperCase() + type.slice(1)} - {fieldConfig.name}
          </AccordionTrigger>
          <AccordionContent className="border-t pb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 grid grid-cols-2 gap-2 border-b">
                <InputFields
                  fields={fields}
                  register={register}
                  errors={errors}
                  showValidationOptions={showValidationOptions}
                  setShowValidationOptions={setShowValidationOptions}
                />
                {showValidationOptions && (
                  <h3 className="col-span-2 text-center text-lg py-4 font-bold">
                    Validations
                  </h3>
                )}
                {/* REQUIRED */}
                {showValidationOptions && (
                  <>
                    <Label>Set Required</Label>
                    <Label>Set Message for Required</Label>
                    <div className="flex items-center justify-center gap-2 border rounded-md p-2">
                      <Label>Make this field required</Label>
                      <Controller
                        name="v_required"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                    <Input
                      placeholder="set required message"
                      {...register("v_required_message")}
                    />
                  </>
                )}

                {/* MIN */}
                {showValidationOptions && type === "number" && (
                  <>
                    <Label>Set Min Value</Label>
                    <Label>Set Message for Min Value</Label>
                    <Input
                      type="number"
                      {...register("v_min")}
                      placeholder="set min value"
                    />
                    <Input
                      type="text"
                      {...register("v_min_message")}
                      placeholder="set min message"
                    />
                  </>
                )}

                {/* MAX */}
                {showValidationOptions && type === "number" && (
                  <>
                    <Label>Set Max Value</Label>
                    <Label>Set Message for Max Value</Label>
                    <Input
                      type="number"
                      {...register("v_max")}
                      placeholder="set max value"
                    />
                    <Input
                      type="text"
                      {...register("v_max_message")}
                      placeholder="set max message"
                    />
                  </>
                )}

                {/* MIN LENGTH */}
                {showValidationOptions &&
                  !["select", "checkbox", "radio"].includes(type) && (
                    <>
                      <Label>Set Min Length</Label>
                      <Label>Set Message for Min Length</Label>
                      <Input
                        type="number"
                        {...register("v_minLength")}
                        placeholder="set min length"
                      />
                      <Input
                        type="text"
                        {...register("v_minLength_message")}
                        placeholder="set min length message"
                      />
                    </>
                  )}

                {/* MAX LENGTH */}
                {showValidationOptions &&
                  !["select", "checkbox", "radio"].includes(type) && (
                    <>
                      <Label>Set Max Length</Label>
                      <Label>Set Message for Max Length</Label>
                      <Input
                        type="number"
                        {...register("v_maxLength")}
                        placeholder="set max length"
                      />
                      <Input
                        type="text"
                        {...register("v_maxLength_message")}
                        placeholder="set max length message"
                      />
                    </>
                  )}

                {/* PATTERN */}
                {showValidationOptions &&
                  !["select", "checkbox", "radio"].includes(type) && (
                    <>
                      <Label>Set Pattern</Label>
                      <Label>Set Message for Pattern Mismatch</Label>
                      <Input
                        type="text"
                        {...register("v_pattern")}
                        placeholder="set regex pattern"
                      />
                      <Input
                        type="text"
                        {...register("v_pattern_message")}
                        placeholder="set pattern message"
                      />
                    </>
                  )}
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
        <DeleteConfigurator onDelete={onDelete} />
      </div>
    </AccordionItem>
  );
};

const GrabHandle = ({ listeners }: { listeners: any }) => {
  return (
    <div
      className="p-2 flex justify-center items-start border-r hover:cursor-move"
      {...listeners}
    >
      <Grip />
    </div>
  );
};

const InputFields = ({
  fields,
  register,
  errors,
  showValidationOptions,
  setShowValidationOptions,
}: InputFieldsProps) => {
  return (
    <>
      {/* Rendering the base fields defined in configuratorMap */}
      {fields.map((Field, idx) => (
        <Field key={idx} register={register} errors={errors} />
      ))}

      {/* Checkbox to toggle visibility of validation fields */}
      <div className="flex flex-col gap-2">
        <Label>Show Validations</Label>
        <Checkbox
          checked={showValidationOptions}
          onCheckedChange={(checked) => setShowValidationOptions(checked)}
        />
      </div>
    </>
  );
};

const DeleteConfigurator = ({ onDelete }: { onDelete: () => void }) => {
  return (
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
  );
};

export default GenericConfigurator;
