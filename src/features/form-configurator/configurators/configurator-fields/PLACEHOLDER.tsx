import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PLACEHOLDER = ({ register }: { register: any }) => {
  return (
    <div className="grid items-center gap-1.5">
      <Label>Set the placeholder</Label>
      <Input
        {...register("placeholder")}
        type="text"
        placeholder="set-placeholder"
      />
    </div>
  );
};

export default PLACEHOLDER;
