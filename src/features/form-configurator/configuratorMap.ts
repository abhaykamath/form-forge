import Configurator__Text from "./configurators/Configurator__Text";
import Configurator__Email from "./configurators/Configurator__Email";
import Configurator__Password from "./configurators/Configurator__Password";
import Configurator__Number from "./configurators/Configurator__Number";
import Configurator__Select from "./configurators/Configurator__Select";
import Configurator__Checkbox from "./configurators/Configurator__Checkbox";
import Configurator__Radio from "./configurators/Configurator__Radio";

type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "select"
  | "checkbox"
  | "radio";

const configuratorMap: Record<FieldType, React.ComponentType<any>> = {
  text: Configurator__Text,
  email: Configurator__Email,
  password: Configurator__Password,
  number: Configurator__Number,
  select: Configurator__Select,
  checkbox: Configurator__Checkbox,
  radio: Configurator__Radio,
};

export default configuratorMap;
