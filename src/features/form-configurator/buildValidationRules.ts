type T_Rules = {
  required?: string | boolean;
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
};

export const buildValidationRules = (formData: any) => {
  const rules: T_Rules = {};

  if (formData.v_required) {
    rules.required = formData.v_required_message || "This field is required";
  } else rules.required = false;

  if (formData.v_min !== null && formData.v_min !== "") {
    rules.min = {
      value: Number(formData.v_min),
      message: formData.v_min_message || "Minimum value is invalid",
    };
  }

  if (formData.v_max !== null && formData.v_max !== "") {
    rules.max = {
      value: Number(formData.v_max),
      message: formData.v_max_message || "Maximum value is invalid",
    };
  }

  if (formData.v_minLength !== null && formData.v_minLength !== "") {
    rules.minLength = {
      value: Number(formData.v_minLength),
      message: formData.v_minLength_message || "Too short",
    };
  }

  if (formData.v_maxLength !== null && formData.v_maxLength !== "") {
    rules.maxLength = {
      value: Number(formData.v_maxLength),
      message: formData.v_maxLength_message || "Too long",
    };
  }

  if (formData.v_pattern && String(formData.v_pattern).trim() !== "") {
    try {
      rules.pattern = {
        value: new RegExp(formData.v_pattern),
        message: formData.v_pattern_message || "Invalid format",
      };
    } catch (e) {
      console.warn("Invalid regex pattern:", formData.v_pattern);
    }
  }

  return rules;
};
