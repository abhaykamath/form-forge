import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig } from "@/types/types";
import { usePreviewStore } from "@/stores/PreviewStore";
import { SquareCheck } from "lucide-react";

function CheckboxButton() {
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
      className="w-full"
      onClick={() => {
        const id = uuid();
        const fieldConfig: FieldConfig = {
          id,
          type: "checkbox",
          label: "Your Checkboxes",
          name: `form-field-${unsavedFieldsOrder.length + 1}`,
          options: ["Checkbox1", "Checkbox2", "Checkbox3"],
          validation: {
            required: "Please check at least 1 box",
          },
        };
        addFieldToUnsavedFormConfig(id, fieldConfig);
        addFieldToSavedFormConfig(id, fieldConfig);
      }}
    >
      <SquareCheck />
      Checkbox - Group
    </Button>
  );
}

export default CheckboxButton;
