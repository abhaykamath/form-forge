import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig } from "@/types/types";

function RadioButton() {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  const addFieldToUnsavedFormConfig = useConfiguratorStore(
    (state) => state.addFieldToUnsavedFormConfig
  );

  return (
    <Button
      onClick={() => {
        const id = uuid();
        const fieldConfig: FieldConfig = {
          id,
          type: "radio",
          label: "Your Radio Buttons",
          name: `form-field-${unsavedFieldsOrder.length + 1}`,
          placeholder: "",
          options: ["Radio1", "Radio2", "Radio3"],
          validation: {
            required: "This field is required",
          },
        };
        addFieldToUnsavedFormConfig(id, fieldConfig);
      }}
    >
      Radio - Group
    </Button>
  );
}

export default RadioButton;
