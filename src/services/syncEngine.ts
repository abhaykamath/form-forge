import {
  T_FieldConfig,
  T_FormConfig,
  saveFormConfig,
  deleteFormConfig,
} from "@/db/supabaseFunctions";
import {
  useAddCanvasField,
  useRemoveCanvasField,
  useSetCanvasConfig,
  useUpdateCanvasField,
} from "@/stores/CanvasStore";
import {
  useAddPreviewField,
  useRemovePreviewField,
  useSetPreviewConfig,
  useUpdatePreviewField,
} from "@/stores/PreviewStore";

/**
 * SyncEngine provides a unified API to manage form config synchronization
 * between the canvas store, preview store, and the Supabase database.
 */
export const useSyncEngine = () => {
  //    SET
  const setCanvasConfig = useSetCanvasConfig();
  const setPreviewConfig = useSetPreviewConfig();

  //    ADD
  const addCanvasField = useAddCanvasField();
  const addPreviewField = useAddPreviewField();

  //   UPDATE
  const updateCanvasField = useUpdateCanvasField();
  const updatePreviewField = useUpdatePreviewField();

  //   REMOVE
  const removeCanvasField = useRemoveCanvasField();
  const removePreviewField = useRemovePreviewField();

  return {
    /**
     * Hydrates both Canvas and Preview stores with the same config.
     */
    hydrateStores: (formConfig: T_FormConfig) => {
      setCanvasConfig(formConfig);
      setPreviewConfig(formConfig);
    },

    /**
     * Adds a field to both stores.
     */
    addField: (fieldId: string, fieldConfig: T_FieldConfig) => {
      addCanvasField(fieldId, fieldConfig);
      addPreviewField(fieldId, fieldConfig);
    },

    /**
     * Updates a field in both stores.
     */
    updateField: (fieldId: string, updatedConfig: Partial<T_FieldConfig>) => {
      updateCanvasField(fieldId, updatedConfig);
      updatePreviewField(fieldId, updatedConfig);
    },

    /**
     * Removes a field from both stores.
     */
    removeField: (fieldId: string) => {
      removeCanvasField(fieldId);
      removePreviewField(fieldId);
    },

    /**
     * Persists the form config to the Supabase database (create or update).
     */
    persistForm: async (formConfig: T_FormConfig) => {
      return await saveFormConfig(formConfig);
    },

    /**
     * Deletes the form from the Supabase database.
     */
    deleteForm: async (form_id: string) => {
      return await deleteFormConfig(form_id);
    },
  };
};
