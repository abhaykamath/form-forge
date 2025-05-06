import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig } from "@/types/types";
import { usePreviewStore } from "@/stores/PreviewStore";
import { KeyRound } from "lucide-react";

function PasswordButton() {
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
          type: "password",
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
      <KeyRound />
      Password
    </Button>
  );
}

export default PasswordButton;
