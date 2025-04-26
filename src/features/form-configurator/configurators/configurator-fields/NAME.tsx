import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NAME = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <Label>Set the name</Label>
      <Input
        {...register("name", {
          required: "A name is required",
        })}
        type="text"
        placeholder="set-name"
      />
      {errors["name"] && (
        <p className="text-sm text-red-700">
          {String(errors["name"]?.message)}
        </p>
      )}
    </div>
  );
};

export default NAME;
