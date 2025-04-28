import { create } from "zustand";

type OutputState = {
  FormData: Record<string, any>;
  FormJSX: string;
  updateFormData: (newFormData: Record<string, any>) => void;
};

const initialFormData = {};
const initialFormJSX = "";

export const useOutputSotre = create<OutputState>((set) => ({
  FormJSX: initialFormJSX,
  FormData: initialFormData,
  updateFormData: (newFormData) => {
    set(() => {
      return { FormData: newFormData };
    });
  },
}));
