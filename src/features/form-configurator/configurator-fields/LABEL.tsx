import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LABEL = ({ register }: { register: any }) => {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <Label>Set the label</Label>
      <Input {...register("label")} type="text" placeholder="set-label" />
    </div>
  );
};

export default LABEL;
