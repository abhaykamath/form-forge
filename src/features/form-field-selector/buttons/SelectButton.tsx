import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig } from "@/types/types";
import { usePreviewStore } from "@/stores/PreviewStore";

function SelectButton() {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  const addFieldToUnsavedFormConfig = useConfiguratorStore(
    (state) => state.addFieldToUnsavedFormConfig
  );
  const addFieldToSavedFormConfig = usePreviewStore(
    (state) => state.addFieldToSavedFormConfig
  );

  return (
    <Button
      onClick={() => {
        const id = uuid();
        const fieldConfig: FieldConfig = {
          id,
          type: "select",
          label: "Your dropdown options",
          name: `form-field-${unsavedFieldsOrder.length + 1}`,
          placeholder: "",
          options: ["Option1", "Option2", "Option3"],
          validation: {
            required: "This field is required",
          },
        };
        addFieldToUnsavedFormConfig(id, fieldConfig);
        addFieldToSavedFormConfig(id, fieldConfig);
      }}
    >
      Dropdown (Select)
    </Button>
  );
}

export default SelectButton;
