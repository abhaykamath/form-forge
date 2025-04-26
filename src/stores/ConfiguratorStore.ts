import { create } from "zustand";
import { T_FieldsOrder, T_FormConfig } from "@/types/types";
import { unsavedFieldsOrder, unsavedFormConfig } from "./UnsavedConfig";

type ConfiguratorState = {
  unsavedFieldsOrder: T_FieldsOrder;
  unsavedFormConfig: T_FormConfig;
  updateUnsavedFieldsOrder: (updatedOrder: T_FieldsOrder) => void;
};

const Inital_unsavedFieldsOrder: T_FieldsOrder = unsavedFieldsOrder;
const Initial_unsavedFormConfig: T_FormConfig = unsavedFormConfig;

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  unsavedFieldsOrder: Inital_unsavedFieldsOrder,
  unsavedFormConfig: Initial_unsavedFormConfig,
  updateUnsavedFieldsOrder: (updatedOrder: T_FieldsOrder) => {
    set(() => ({ unsavedFieldsOrder: updatedOrder }));
  },
}));
