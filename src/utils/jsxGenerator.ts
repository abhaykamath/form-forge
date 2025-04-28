import { FieldConfig } from "@/types/types";

export function generateRHFJSX(config: Record<string, FieldConfig>) {
  const fieldEntries = Object.values(config);

  return `
import React from 'react';
import { useForm } from 'react-hook-form';

export default function GeneratedForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
${
  Array.isArray(fieldEntries) ? ReduceFieldEntries(fieldEntries) : ""
}      <input type="submit" />
    </form>
  );
}
`;
}


function ReduceFieldEntries(fieldEntries: FieldConfig[]) {
  return fieldEntries.reduce((acc, { type, name, placeholder, options, validation, label }) => {
    const { required, max, min, maxLength, minLength, pattern } = validation || {};
    const extractValue = (rule: any) => {
      if (typeof rule === 'object' && rule !== null && 'value' in rule) {
        return rule.value;
      }
      return rule;
    };
    const buildValidationAttributes = () => {
      const validations: string[] = [];
      if (required) validations.push(`required: ${JSON.stringify(required)}`);
      if (max) validations.push(`max: ${extractValue(max)}`);
      if (min) validations.push(`min: ${extractValue(min)}`);
      if (minLength) validations.push(`minLength: ${extractValue(minLength)}`);
      if (maxLength) validations.push(`maxLength: ${extractValue(maxLength)}`);
      if (pattern) {
        const patternVal = extractValue(pattern);
        validations.push(`pattern: ${patternVal instanceof RegExp ? patternVal : `/${patternVal}/i`}`);
      }
      return validations.length
        ? `("${name}", { ${validations.join(", ")} })`
        : `("${name}")`;
    };
    const registerString = `{...register${buildValidationAttributes()}}`;
    if (type === "select") {
      return acc + SelectCode(options, label, registerString)
    }
    if (type === "radio") {
      return (
        acc + RadioCode(options, label, registerString)
      );
    }
    if (type === "checkbox") {
      return acc + CheckboxCode(options, label, registerString)
    }
    return acc + TextCode(type, placeholder, label, registerString)
  }, "")
}

function TextCode(
  type: string,
  placeholder: string | undefined,
  label: string,
  registerString: string
) {
  return (
    `      //-----${type.toLocaleUpperCase()}: ${label}-----\n` +
    `      <label>${label}</label>\n` +
    `      <input type="${type}" placeholder="${placeholder || ""}" ${registerString} />\n`
  );
}

function RadioCode(
  options: string[] | undefined,
  label: string,
  registerString: string
) {
  return (
    `      //-----Radio Group: ${label}-----\n` +
    `      <label>${label}</label>\n` +
    `${(options || []).map((option) => `      <input ${registerString} type="radio" value="${option}" />\n`).join("")}`
  );
}

function CheckboxCode(
  options: string[] | undefined,
  label: string,
  registerString: string
) {
  return (
    `      //-----Checkbox: ${label}-----\n` +
    `      <label>${label}</label>\n` +
    `${(options || []).map(option => `      <input ${registerString} type="checkbox" value="${option}" />\n`).join("")}`
  );
}

function SelectCode(
  options: string[] | undefined,
  label: string,
  registerString: string
) {
  return (
    `      //-----Select: ${label}-----\n` +
    `      <label>${label}</label>\n` +
    `      <select ${registerString}>` +
    `${(options || []).map(option => `        <option value="${option}">${option}</option>`).join("\n")}\n` +
    `      </select>\n`
  );
}