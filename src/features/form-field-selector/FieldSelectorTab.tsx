import CheckboxButton from "./buttons/CheckboxButton";
import EmailButton from "./buttons/EmailButtton";
import NumberButton from "./buttons/NumberButton";
import PasswordButton from "./buttons/PasswordButton";
import RadioButton from "./buttons/RadioButton";
import SelectButton from "./buttons/SelectButton";
import TextButton from "./buttons/TextButton";

const FieldSelectorTab = () => {
  return (
    <div className="w-full flex justify-center gap-2 p-2">
      <TextButton />
      <EmailButton />
      <NumberButton />
      <PasswordButton />
      <RadioButton />
      <CheckboxButton />
      <SelectButton />
    </div>
  );
};

export default FieldSelectorTab;
