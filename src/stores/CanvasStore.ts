import { T_FieldConfig, T_FormConfig } from "@/db/supabaseFunctions";
import { create } from "zustand";

export type CanvasState = {
  canvasConfig: T_FormConfig;
  setCanvasConfig: (formConfig: T_FormConfig) => void;
  addCanvasField: (fieldId: string, fieldConfig: T_FieldConfig) => void;
  updateCanvasField: (
    fieldId: string,
    updatedConfig: Partial<T_FieldConfig>
  ) => void;
  removeCanvasField: (fieldId: string) => void;
};

const initialCanvasConfig: T_FormConfig = {
  form_id: "",
  form_name: "",
  form_description: "",
  creator_id: "",
  created_at: "",
  updated_at: "",
  field_order: [],
  field_config: {},
};

const useCanvasStore = create<CanvasState>((set) => ({
  canvasConfig: initialCanvasConfig,

  setCanvasConfig: (formConfig) => {
    set(() => ({
      canvasConfig: formConfig,
    }));
  },

  addCanvasField: (fieldId, fieldConfig) => {
    set((state) => {
      const updatedFieldOrder = [...state.canvasConfig.field_order];
      const updatedFieldConfig = { ...state.canvasConfig.field_config };

      return {
        canvasConfig: {
          ...state.canvasConfig,
          field_order: [...updatedFieldOrder, fieldId],
          field_config: { ...updatedFieldConfig, [fieldId]: fieldConfig },
        },
      };
    });
  },

  updateCanvasField: (fieldId, updatedConfig) => {
    set((state) => {
      const existingField = state.canvasConfig.field_config[fieldId];
      if (!existingField) return {}; // no update if field doesn't exist

      return {
        canvasConfig: {
          ...state.canvasConfig,
          field_config: {
            ...state.canvasConfig.field_config,
            [fieldId]: {
              ...existingField,
              ...updatedConfig,
            },
          },
        },
      };
    });
  },

  removeCanvasField: (fieldId) => {
    set((state) => {
      const { [fieldId]: _, ...remainingFields } =
        state.canvasConfig.field_config;
      const updatedFieldOrder = state.canvasConfig.field_order.filter(
        (id) => id !== fieldId
      );

      return {
        canvasConfig: {
          ...state.canvasConfig,
          field_order: updatedFieldOrder,
          field_config: remainingFields,
        },
      };
    });
  },
}));

export const useCanvasConfig = () =>
  useCanvasStore((state) => state.canvasConfig);

export const useSetCanvasConfig = () =>
  useCanvasStore((state) => state.setCanvasConfig);

export const useAddCanvasField = () =>
  useCanvasStore((state) => state.addCanvasField);

export const useUpdateCanvasField = () =>
  useCanvasStore((state) => state.updateCanvasField);

export const useRemoveCanvasField = () =>
  useCanvasStore((state) => state.removeCanvasField);
