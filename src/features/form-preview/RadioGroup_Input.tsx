import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldConfig } from "@/types/types";
import { Controller } from "react-hook-form";

interface RadioGroup_Input_Props {
  field: FieldConfig;
  control: any;
  errors: any;
}

const RadioGroup_Input = ({
  field,
  control,
  errors,
}: RadioGroup_Input_Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{field.label}</Label>
      <Controller
        name={field.name}
        control={control}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <RadioGroup
            value={controllerField.value}
            onValueChange={controllerField.onChange}
            className="flex flex-col gap-0"
          >
            {field.options?.map((option) => (
              <div key={option} className="w-full flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label className="p-1 pr-2" htmlFor={option}>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
      {errors[field.name] && (
        <p className="text-sm text-red-700">
          {String(errors[field.name]?.message)}
        </p>
      )}
    </div>
  );
};

export default RadioGroup_Input;
