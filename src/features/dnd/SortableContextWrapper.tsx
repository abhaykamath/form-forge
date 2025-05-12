import { useConfiguratorStore } from "@/stores/demo/DEMO_ConfiguratorStore";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const SortableContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  return (
    <SortableContext
      items={unsavedFieldsOrder}
      strategy={verticalListSortingStrategy}
    >
      {children}
    </SortableContext>
  );
};

export default SortableContextWrapper;
