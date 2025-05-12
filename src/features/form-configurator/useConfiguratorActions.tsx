import { useConfiguratorStore } from "@/stores/demo/DEMO_ConfiguratorStore";
import { usePreviewStore } from "@/stores/demo/DEMO_PreviewStore";
import { FormData } from "@/types/types";

export const useConfiguratorActions = () => {
  const updateSaved = usePreviewStore((s) => s.updateSavedFormConfig);
  const updateUnsaved = useConfiguratorStore((s) => s.updateUnsavedFormConfig);
  const deleteSaved = usePreviewStore((s) => s.deleteFieldFromSaved);
  const deleteUnsaved = useConfiguratorStore((s) => s.deleteFieldFromUnsaved);

  return {
    updateField: (id: string, data: FormData) => {
      updateSaved(id, data);
      updateUnsaved(id, data);
    },
    deleteField: (id: string) => {
      deleteSaved(id);
      deleteUnsaved(id);
    },
  };
};
