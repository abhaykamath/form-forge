import { Button } from "@/components/ui/button";
import { v4 as uuid } from "uuid";
import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { FieldConfig } from "@/types/types";

function PasswordButton() {
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
          type: "password",
          label: "",
          name: `form-field-${unsavedFieldsOrder.length + 1}`,
          placeholder: "",
          validation: {
            required: "This field is required",
          },
        };
        addFieldToUnsavedFormConfig(id, fieldConfig);
      }}
    >
      Password
    </Button>
  );
}

export default PasswordButton;
