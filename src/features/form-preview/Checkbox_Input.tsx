import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FieldConfig } from "@/types/types";
import { Controller } from "react-hook-form";

interface Checkbox_Input_Props {
  field: FieldConfig;
  control: any;
  errors: any;
}

const Checkbox_Input = ({ field, control, errors }: Checkbox_Input_Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{field.label}</Label>
      <div>
        {field.options?.map((option) => (
          <Controller
            key={option}
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field: controllerField }) => {
              const isChecked = (controllerField.value ?? []).includes(option);
              const handleChange = (checked: boolean) => {
                const currentValue = controllerField.value ?? [];
                if (checked) {
                  controllerField.onChange([...currentValue, option]);
                } else {
                  controllerField.onChange(
                    currentValue.filter((val: string) => val !== option)
                  );
                }
              };
              // OLD LOGIC
              // const handleChange = (checked: boolean) => {
              //   if (checked) {
              //     controllerField.onChange([...controllerField.value, option]);
              //   } else {
              //     controllerField.onChange(
              //       controllerField.value.filter(
              //         (val: string) => val !== option
              //       )
              //     );
              //   }
              // };

              return (
                <div className="w-full flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={isChecked}
                    onCheckedChange={handleChange}
                  />
                  <label
                    htmlFor={option}
                    className="text-sm font-medium pr-2 p-1"
                  >
                    {option}
                  </label>
                </div>
              );
            }}
          />
        ))}
      </div>
      {errors[field.name] && (
        <p className="text-sm text-red-700">
          {String(errors[field.name]?.message)}
        </p>
      )}
    </div>
  );
};

export default Checkbox_Input;
