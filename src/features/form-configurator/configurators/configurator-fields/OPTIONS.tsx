import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const OPTIONS = ({
  name,
  register,
  errors,
}: {
  name: string;
  register: any;
  errors: any;
}) => {
  return (
    <div className="col-span-2 flex flex-col items-start gap-1.5">
      <Label>Set the options</Label>
      <Input
        {...register(name, {
          required: "At least 1 option is required",
          pattern: {
            value: /^[\w\s'’]+(;\s*[\w\s'’]+)*$/,
            message:
              "Options must be separated by semicolons (e.g., option1;option2;option3)",
          },
        })}
        spellCheck={false}
        type="text"
        placeholder="e.g., option1;option2;option3"
      />
      {errors[name] && (
        <p className="text-sm text-red-700">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
};

export default OPTIONS;
