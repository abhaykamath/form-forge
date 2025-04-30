import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { usePreviewStore } from "@/stores/PreviewStore";

const DnDContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  const updateUnsavedFieldsOrder = useConfiguratorStore(
    (state) => state.updateUnsavedFieldsOrder
  );
  const updateSavedFieldsOrder = usePreviewStore(
    (state) => state.updateSavedFieldsOrder
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return; // important
    if (active.id !== over.id) {
      const orderCopy = [...unsavedFieldsOrder];
      const oldIndex = orderCopy.findIndex((id) => id === active.id);
      const newIndex = orderCopy.findIndex((id) => id === over.id);
      const newOrder = arrayMove(orderCopy, oldIndex, newIndex);
      updateUnsavedFieldsOrder(newOrder);
      updateSavedFieldsOrder(newOrder);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]}
    >
      {children}
    </DndContext>
  );
};

export default DnDContextWrapper;
