/**
 * Doesn't include individual component prop types
 * They can be found at the top of each component file*/

import { JSX } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface FieldConfig extends Record<string, any> {
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

// Generic Configurator Types
export interface GenericConfiguratorProps {
  index: number;
  id: string;
  type: string;
  fieldConfig: FieldConfig;
  schema: FieldTypeSchema;
  setNodeRef: any;
  style: any;
  attributes: any;
  listeners: any;
}

export type FieldRenderProps = {
  name?: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export type FieldTypeSchema = {
  fields: ((props: FieldRenderProps) => JSX.Element)[];
  validation?: any;
  optionKey?: string | null;
  validationFields?: ((props: FieldRenderProps) => JSX.Element)[];
};

export type InputFieldsProps = {
  fields: ((props: FieldRenderProps) => JSX.Element)[];
  register: any;
  errors: any;
  showValidationOptions: boolean;
  setShowValidationOptions: any;
};
