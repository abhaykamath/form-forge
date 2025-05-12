import { T_FieldConfig, T_FormConfig } from "@/db/supabaseFunctions";
import { create } from "zustand";

export type PreviewState = {
  previewConfig: T_FormConfig;
  setPreviewConfig: (formConfig: T_FormConfig) => void;
  addPreviewField: (fieldId: string, fieldConfig: T_FieldConfig) => void;
  updatePreviewField: (
    fieldId: string,
    updatedConfig: Partial<T_FieldConfig>
  ) => void;
  removePreviewField: (fieldId: string) => void;
};

const initialPreviewConfig: T_FormConfig = {
  form_id: "",
  form_name: "",
  form_description: "",
  creator_id: "",
  created_at: "",
  updated_at: "",
  field_order: [],
  field_config: {},
};

const usePreviewStore = create<PreviewState>((set) => ({
  previewConfig: initialPreviewConfig,

  setPreviewConfig: (formConfig) => {
    set(() => ({
      previewConfig: formConfig,
    }));
  },

  addPreviewField: (fieldId, fieldConfig) => {
    set((state) => {
      const updatedFieldOrder = [...state.previewConfig.field_order];
      const updatedFieldConfig = { ...state.previewConfig.field_config };

      return {
        previewConfig: {
          ...state.previewConfig,
          field_order: [...updatedFieldOrder, fieldId],
          field_config: { ...updatedFieldConfig, [fieldId]: fieldConfig },
        },
      };
    });
  },

  updatePreviewField: (fieldId, updatedConfig) => {
    set((state) => {
      const existingField = state.previewConfig.field_config[fieldId];
      if (!existingField) return {};

      return {
        previewConfig: {
          ...state.previewConfig,
          field_config: {
            ...state.previewConfig.field_config,
            [fieldId]: {
              ...existingField,
              ...updatedConfig,
            },
          },
        },
      };
    });
  },

  removePreviewField: (fieldId) => {
    set((state) => {
      const { [fieldId]: _, ...remainingFields } =
        state.previewConfig.field_config;
      const updatedFieldOrder = state.previewConfig.field_order.filter(
        (id) => id !== fieldId
      );

      return {
        previewConfig: {
          ...state.previewConfig,
          field_order: updatedFieldOrder,
          field_config: remainingFields,
        },
      };
    });
  },
}));

export const usePreviewConfig = () =>
  usePreviewStore((state) => state.previewConfig);

export const useSetPreviewConfig = () =>
  usePreviewStore((state) => state.setPreviewConfig);

export const useAddPreviewField = () =>
  usePreviewStore((state) => state.addPreviewField);

export const useUpdatePreviewField = () =>
  usePreviewStore((state) => state.updatePreviewField);

export const useRemovePreviewField = () =>
  usePreviewStore((state) => state.removePreviewField);
