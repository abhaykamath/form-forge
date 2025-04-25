import { create } from "zustand";
import { InitialFieldConfig, InitialFieldOrder } from "./InitialFieldConfig";
import { FieldConfig } from "@/types/types";

type FormState = {
  formFieldsConfig: Record<string, FieldConfig>;
  formFieldsOrder: string[];
  updateField: (id: string, updates: Partial<FieldConfig>) => void;
  resetFields: () => void;
};

const initialFieldConfig: Record<string, FieldConfig> = InitialFieldConfig;
const initialFieldOrder: string[] = InitialFieldOrder;

export const usePreviewStore = create<FormState>((set) => ({
  formFieldsConfig: initialFieldConfig,
  formFieldsOrder: initialFieldOrder,
  updateField: (id, updates) =>
    set((state) => {
      const updated = { ...state.formFieldsConfig };
      updated[id] = { ...updated[id], ...updates };
      return { formFieldsConfig: updated };
    }),
  resetFields: () => set({ formFieldsConfig: initialFieldConfig }),
}));
