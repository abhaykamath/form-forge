import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldConfig } from "@/types/types";

interface PENT_Input_Props {
  field: FieldConfig;
  register: any;
  errors: any;
}

const PENT_Input = ({ field, register, errors }: PENT_Input_Props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{field.label}</Label>
      <Input
        {...register(field.name, field.validation)}
        type={field.type}
        placeholder={field.placeholder}
        className="-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {errors[field.name] && (
        <p className="text-sm text-red-700">
          {String(errors[field.name]?.message)}
        </p>
      )}
    </div>
  );
};

export default PENT_Input;
