import { create } from "zustand";
import { FieldConfig, T_FieldsOrder, T_FormConfig } from "@/types/types";
import { unsavedFieldsOrder, unsavedFormConfig } from "./DEMO_UnsavedConfig";

type ConfiguratorState = {
  unsavedFieldsOrder: T_FieldsOrder;
  unsavedFormConfig: T_FormConfig;
  addFieldToUnsavedFormConfig: (id: string, fieldConfig: FieldConfig) => void;
  deleteFieldFromUnsaved: (idToDelete: string) => void;
  updateUnsavedFormConfig: (id: string, updated: FieldConfig) => void;
  updateUnsavedFieldsOrder: (updatedOrder: T_FieldsOrder) => void;
};

const Inital_unsavedFieldsOrder: T_FieldsOrder = unsavedFieldsOrder;
const Initial_unsavedFormConfig: T_FormConfig = unsavedFormConfig;

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  unsavedFieldsOrder: Inital_unsavedFieldsOrder,
  unsavedFormConfig: Initial_unsavedFormConfig,
  addFieldToUnsavedFormConfig: (id: string, fieldConfig: FieldConfig) => {
    set((state) => {
      const updatedOrder = [...state.unsavedFieldsOrder];
      const updatedConfig = { ...state.unsavedFormConfig };
      return {
        unsavedFieldsOrder: [...updatedOrder, id],
        unsavedFormConfig: { ...updatedConfig, [id]: fieldConfig },
      };
    });
  },
  deleteFieldFromUnsaved: (idToDelete) => {
    set((state) => {
      if (!state.unsavedFieldsOrder.includes(idToDelete)) return state;
      const updatedOrder: T_FieldsOrder = state.unsavedFieldsOrder.filter(
        (id) => id !== idToDelete
      );
      const updatedConfig = updatedOrder.reduce((acc, id) => {
        acc[id] = { ...state.unsavedFormConfig[id] };
        return acc;
      }, {} as T_FormConfig);
      return {
        unsavedFieldsOrder: [...updatedOrder],
        unsavedFormConfig: { ...updatedConfig },
      };
    });
  },
  updateUnsavedFormConfig: (id: string, updates: FieldConfig) =>
    set((state) => {
      const updated = { ...state.unsavedFormConfig };
      updated[id] = { ...updated[id], ...updates };
      return { unsavedFormConfig: updated };
    }),
  updateUnsavedFieldsOrder: (updatedOrder: T_FieldsOrder) => {
    set(() => ({ unsavedFieldsOrder: updatedOrder }));
  },
}));
