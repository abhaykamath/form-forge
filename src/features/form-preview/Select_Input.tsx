import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldConfig } from "@/types/types";
import { Controller } from "react-hook-form";

interface Select_Input_Props {
  field: FieldConfig;
  control: any;
  errors: any;
}

const Select_Input = ({ field, control, errors }: Select_Input_Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{field.label}</Label>
      <Controller
        name={field.name}
        control={control}
        rules={field.validation}
        render={({ field: controllerField }) => (
          <Select
            onValueChange={controllerField.onChange}
            value={controllerField.value}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{field.label}</SelectLabel>
                {field.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
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

export default Select_Input;
