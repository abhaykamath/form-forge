import { T_FormConfig } from "@/types/types";

export function generateRHFJSX(config: T_FormConfig) {
  const fieldEntries = Object.values(config);

  const fieldsJSX = fieldEntries.map((field) => {
    const { type, label, name, placeholder, options, validation } = field;

    const registerString = validation
      ? ` {...register("${name}", ${JSON.stringify(validation, null, 2)})}`
      : ` {...register("${name}")}`;

    switch (type) {
      case "text":
      case "email":
      case "password":
      case "number":
        return `
  <label>${label}
    <input
      type="${type}"
      placeholder="${placeholder || ""}"
      ${registerString}
    />
  </label>
  `;

      case "select":
        return `
  <label>${label}
    <select ${registerString}>
      ${options
        ?.map((opt) => `<option value="${opt}">${opt}</option>`)
        .join("\n    ")}
    </select>
  </label>
  `;

      case "radio":
        return `
  <fieldset>
    <legend>${label}</legend>
    ${options
      ?.map(
        (opt) => `
    <label>
      <input
        type="radio"
        value="${opt}"
        ${registerString}
        name="${name}"
      />
      ${opt}
    </label>
    `
      )
      .join("\n")}
  </fieldset>
  `;

      case "checkbox":
        return `
  <fieldset>
    <legend>${label}</legend>
    ${options
      ?.map(
        (opt) => `
    <label>
      <input
        type="checkbox"
        value="${opt}"
        ${registerString}
        name="${name}"
      />
      ${opt}
    </label>
    `
      )
      .join("\n")}
  </fieldset>
  `;

      default:
        return `<!-- Unsupported field type: ${type} -->`;
    }
  });

  return `
  <form onSubmit={handleSubmit(onSubmit)}>
  ${fieldsJSX.join("\n")}
    <button type="submit">Submit</button>
  </form>
  `;
}
