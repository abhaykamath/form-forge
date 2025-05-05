import React, { JSX } from "react";
import LABEL from "./configurator-fields/LABEL";
import NAME from "./configurator-fields/NAME";
import PLACEHOLDER from "./configurator-fields/PLACEHOLDER";
import OPTIONS from "./configurator-fields/OPTIONS";
import { FieldRenderProps, FieldTypeSchema } from "@/types/types";

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
  },
  email: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
  },
  number: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
  },
  password: {
    fields: [asField(NAME), asField(LABEL), asField(PLACEHOLDER)],
  },
  checkbox: {
    fields: [
      asField(NAME),
      asField(LABEL),
      asField(OPTIONS, "checkbox-options"),
    ],
    optionKey: "checkbox-options",
  },
  radio: {
    fields: [asField(NAME), asField(LABEL), asField(OPTIONS, "radio-options")],
    optionKey: "radio-options",
  },
  select: {
    fields: [asField(NAME), asField(LABEL), asField(OPTIONS, "select-options")],
    optionKey: "select-options",
  },
};
