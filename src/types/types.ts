/**
 * Doesn't include individual component prop types
 * They can be found at the top of each component file*/

export interface FieldConfig {
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

export interface FormData {
  [key: string]: any;
}
