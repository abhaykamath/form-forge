/**
 * Doesn't include individual component prop types
 * They can be found at the top of each component file*/

export interface FieldConfig {
  id: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "select"
    | "checkbox"
    | "radio";
  label: string;
  name: string;
  placeholder?: string;
  options?: string[]; // for select, checkbox, or radio
  validation?: any; // dynamic validation schema for each field
}

export interface FormData extends FieldConfig {
  [key: string]: any;
}

export type T_FieldsOrder = string[];
export type T_FormConfig = Record<string, FieldConfig>;
