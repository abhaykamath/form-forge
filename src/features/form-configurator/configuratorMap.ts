import React, { JSX } from "react";
import LABEL from "./configurator-fields/LABEL";
import NAME from "./configurator-fields/NAME";
import PLACEHOLDER from "./configurator-fields/PLACEHOLDER";
import OPTIONS from "./configurator-fields/OPTIONS";
import { FieldRenderProps, FieldTypeSchema } from "./GenericConfigurator";

export const asField =
  (
    Component: React.ComponentType<any>,
    fieldName?: string
  ): ((props: FieldRenderProps) => JSX.Element) =>
  (props) =>
    React.createElement(Component, { fieldName, ...props });

export const inputTypeSchemas: Record<string, FieldTypeSchema> = {
  text: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
    validation: { required: "This field is required" },
  },
  email: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  number: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
    validation: {
      required: "Age is required",
      min: { value: 18, message: "You must be at least 18" },
    },
  },
  password: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
    validation: {
      required: "Password is required",
      minLength: { value: 6, message: "Minimum 6 characters" },
    },
  },
  checkbox: {
    fields: [
      asField(NAME),
      asField(LABEL),
      asField(OPTIONS, "checkbox-options"),
    ],
    validation: { required: "Please select 1 option" },
    optionKey: "checkbox-options",
  },
  radio: {
    fields: [asField(NAME), asField(LABEL), asField(OPTIONS, "radio-options")],
    validation: { required: "Please select at least 1 option" },
    optionKey: "radio-options",
  },
  select: {
    fields: [asField(NAME), asField(LABEL), asField(OPTIONS, "select-options")],
    validation: { required: "Please select at least 1 option" },
    optionKey: "select-options",
  },
};
