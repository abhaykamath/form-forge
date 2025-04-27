import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig } from "@/types/types";
import { usePreviewStore } from "@/stores/PreviewStore";

function NumberButton() {
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
          type: "number",
          label: "",
          name: `form-field-${unsavedFieldsOrder.length + 1}`,
          placeholder: "",
          validation: {
            required: "This field is required",
          },
        };
        addFieldToUnsavedFormConfig(id, fieldConfig);
        addFieldToSavedFormConfig(id, fieldConfig);
      }}
    >
      Number
    </Button>
  );
}

export default NumberButton;
