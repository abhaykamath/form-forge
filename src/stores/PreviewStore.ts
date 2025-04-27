import { create } from "zustand";
import { savedFieldsOrder, savedFormConfig } from "./SavedConfig";
import { FieldConfig, T_FieldsOrder, T_FormConfig } from "@/types/types";

type FormState = {
  savedFieldsOrder: T_FieldsOrder;
  savedFormConfig: T_FormConfig;
  addFieldToSavedFormConfig: (id: string, fieldConfig: FieldConfig) => void;
  updateSavedFormConfig: (id: string, updates: FieldConfig) => any;
  updateSavedFieldsOrder: (updatedOrder: T_FieldsOrder) => void;
  syncPreview: (newOrder: T_FieldsOrder, newFormConfig: T_FormConfig) => void;
};

const Inital_savedFieldsOrder: T_FieldsOrder = savedFieldsOrder;
const Initial_savedFormConfig: T_FormConfig = savedFormConfig;

export const usePreviewStore = create<FormState>((set) => ({
  savedFieldsOrder: Inital_savedFieldsOrder,
  savedFormConfig: Initial_savedFormConfig,
  addFieldToSavedFormConfig: (id: string, fieldConfig: FieldConfig) => {
    set((state) => {
      const updatedOrder = [...state.savedFieldsOrder];
      const updatedConfig = { ...state.savedFormConfig };
      return {
        savedFieldsOrder: [...updatedOrder, id],
        savedFormConfig: { ...updatedConfig, [id]: fieldConfig },
      };
    });
  },
  updateSavedFormConfig: (id: string, updates: FieldConfig) =>
    set((state) => {
      const updated = { ...state.savedFormConfig };
      updated[id] = { ...updated[id], ...updates };
      return { savedFormConfig: updated };
    }),
  updateSavedFieldsOrder: (updatedOrder: T_FieldsOrder) => {
    set(() => ({ savedFieldsOrder: updatedOrder }));
  },
  syncPreview: (newOrder, newFormConfig) => {
    set(() => {
      return {
        savedFieldsOrder: [...newOrder],
        savedFormConfig: { ...newFormConfig },
      };
    });
  },
}));
