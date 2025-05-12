import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/demo/DEMO_ConfiguratorStore";
import { FieldConfig } from "@/types/types";
import { usePreviewStore } from "@/stores/demo/DEMO_PreviewStore";
import { Mail } from "lucide-react";

function EmailButton() {
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
          type: "email",
          label: "",
          name: `form-field-${unsavedFieldsOrder.length + 1}`,
          placeholder: "",
          validation: {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          },
        };
        addFieldToUnsavedFormConfig(id, fieldConfig);
        addFieldToSavedFormConfig(id, fieldConfig);
      }}
    >
      <Mail />
      Email
    </Button>
  );
}

export default EmailButton;
