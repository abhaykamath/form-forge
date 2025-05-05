import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { usePreviewStore } from "@/stores/PreviewStore";
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
