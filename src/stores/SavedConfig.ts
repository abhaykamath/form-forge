import { T_FieldsOrder, T_FormConfig } from "@/types/types";

export const savedFieldsOrder: T_FieldsOrder = [
  "fb052ba7-f5cc-4c87-8932-9de43c8afd76",
  "670d2abe-de3c-4010-aecd-9b0bb4c1bf55",
  "335ba0ac-5680-4ec1-8ad5-25905fd00b31",
  "e62b9aa7-0caf-4a59-a9f8-716db5460a14",
  "c36abbe0-a492-4195-aef8-60a84f0964bc",
  "3940a077-c791-44c7-a858-e1765e4d6bae",
  "4249d4dd-aea5-4d77-97fe-289aec69ef4b",
];

export const savedFormConfig: T_FormConfig = {
  "fb052ba7-f5cc-4c87-8932-9de43c8afd76": {
    id: "fb052ba7-f5cc-4c87-8932-9de43c8afd76",
    type: "text",
    label: "Full Name",
    name: "fullName",
    placeholder: "Enter your name",
    validation: {
      required: "Full name is required",
    },
  },
  "670d2abe-de3c-4010-aecd-9b0bb4c1bf55": {
    id: "670d2abe-de3c-4010-aecd-9b0bb4c1bf55",
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  "335ba0ac-5680-4ec1-8ad5-25905fd00b31": {
    id: "335ba0ac-5680-4ec1-8ad5-25905fd00b31",
    type: "password",
    label: "Password",
    name: "password",
    placeholder: "Enter your password",
    validation: {
      required: "Password is required",
      minLength: { value: 6, message: "Minimum 6 characters" },
    },
  },
  "e62b9aa7-0caf-4a59-a9f8-716db5460a14": {
    id: "e62b9aa7-0caf-4a59-a9f8-716db5460a14",
    type: "number",
    label: "Age",
    name: "age",
    placeholder: "Enter your age",
    validation: {
      required: "Age is required",
      min: { value: 18, message: "You must be at least 18" },
    },
  },
  "c36abbe0-a492-4195-aef8-60a84f0964bc": {
    id: "c36abbe0-a492-4195-aef8-60a84f0964bc",
    type: "select",
    label: "Fruit",
    name: "fruit",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
    validation: {
      required: "Please select a fruit",
    },
  },
  "3940a077-c791-44c7-a858-e1765e4d6bae": {
    id: "3940a077-c791-44c7-a858-e1765e4d6bae",
    type: "checkbox",
    label: "Hobbies",
    name: "hobbies",
    options: ["Reading", "Gaming", "Traveling"],
    validation: {
      required: "Please select at least one hobby",
    },
  },
  "4249d4dd-aea5-4d77-97fe-289aec69ef4b": {
    id: "4249d4dd-aea5-4d77-97fe-289aec69ef4b",
    type: "radio",
    label: "Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
    validation: {
      required: "Please select your gender",
    },
  },
};
