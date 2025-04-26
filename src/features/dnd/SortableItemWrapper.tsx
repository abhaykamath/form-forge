import { useSortable } from "@dnd-kit/sortable";

const SortableItemWrapper = ({
  id,
  children,
}: {
  id: string;
  children: (props: {
    setNodeRef: any;
    style: any;
    attributes: any;
    listeners: any;
  }) => React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition,
  };

  return <>{children({ setNodeRef, style, attributes, listeners })}</>;
};

export default SortableItemWrapper;
