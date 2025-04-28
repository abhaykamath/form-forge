import { T_FieldsOrder, T_FormConfig } from "@/types/types";

export const unsavedFieldsOrder: T_FieldsOrder = [
  "7df1efcd-6ae0-42e5-ad9c-630dfd62494e",
  "1409d960-2c1b-4d7d-9bd0-dc9cac94f81f",
  "fa716367-3f7d-448a-840c-7ea59c9d6278",
  "a3a9e44c-190b-446a-91dd-db2e792130a3",
];
export const unsavedFormConfig: T_FormConfig = {
  "7df1efcd-6ae0-42e5-ad9c-630dfd62494e": {
    id: "7df1efcd-6ae0-42e5-ad9c-630dfd62494e",
    type: "text",
    label: "Name",
    name: "name",
    placeholder: "Hi there ! Wanna tell me you're name ? :)",
    validation: {
      required: "This field is required",
    },
  },
  "1409d960-2c1b-4d7d-9bd0-dc9cac94f81f": {
    id: "1409d960-2c1b-4d7d-9bd0-dc9cac94f81f",
    type: "text",
    label: "Title",
    name: "title",
    placeholder: "What do you do ? :D",
    validation: {
      required: "This field is required",
    },
  },
  "fa716367-3f7d-448a-840c-7ea59c9d6278": {
    id: "fa716367-3f7d-448a-840c-7ea59c9d6278",
    type: "select",
    label: "Framework/Library ?",
    name: "framework",
    placeholder: "",
    options: ["React", "Angular", "Next", "Vue", "Svelte"],
    validation: {
      required: "Please select atleast 1 option",
    },
    "select-options": "React;Angular;Next;Vue;Svelte",
  },
  "a3a9e44c-190b-446a-91dd-db2e792130a3": {
    id: "a3a9e44c-190b-446a-91dd-db2e792130a3",
    type: "radio",
    label: "Ts or Js ? XD",
    name: "language",
    placeholder: "",
    options: ["JavaScript", "TypeScript"],
    validation: {
      required: "Please select atleast 1 option",
    },
    "radio-options": "JavaScript;TypeScript",
  },
};
