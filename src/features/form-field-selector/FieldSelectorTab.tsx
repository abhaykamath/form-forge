import { Button } from "@/components/ui/button";
import CheckboxButton from "./buttons/CheckboxButton";
import EmailButton from "./buttons/EmailButtton";
import NumberButton from "./buttons/NumberButton";
import PasswordButton from "./buttons/PasswordButton";
import RadioButton from "./buttons/RadioButton";
import SelectButton from "./buttons/SelectButton";
import TextButton from "./buttons/TextButton";

const FieldSelectorTab = () => {
  return (
    <div className="w-full p-4 grid grid-cols-2 gap-4">
      <TextButton />
      <EmailButton />
      <NumberButton />
      <PasswordButton />
      <div className="col-span-2">
        <RadioButton />
      </div>
      <div className="col-span-2">
        <CheckboxButton />
      </div>
      <div className="col-span-2">
        <SelectButton />
      </div>
      <div className="col-span-2">
        <div className="w-full bg-card text-center rounded-md p-2">
          Use these options to build !
        </div>
      </div>
    </div>
  );
};

export default FieldSelectorTab;
