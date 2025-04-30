import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import { Accordion } from "@/components/ui/accordion";
import DnDContextWrapper from "../dnd/DnDContextWrapper";
import SortableContextWrapper from "../dnd/SortableContextWrapper";
import SortableItemWrapper from "../dnd/SortableItemWrapper";
import configuratorMap from "./configuratorMap";

const ConfiguratorPanel = () => {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  const unsavedFormConfig = useConfiguratorStore(
    (state) => state.unsavedFormConfig
  );
  return (
    <div className="w-full p-4 flex flex-col items-cente gap-4">
      <header className="w-full text-center text-2xl font-bold">
        Configuration Panel
      </header>
      {unsavedFieldsOrder.length < 1 && <h3>👈 Start by adding fields</h3>}
      {unsavedFieldsOrder.length > 0 && (
        <section className="w-full flex flex-col gap-2">
          <div>Click on the accordions to configure the fields</div>
          <DnDContextWrapper>
            <SortableContextWrapper>
              <Accordion
                type="single"
                collapsible
                className="w-full border rounded-md"
              >
                {unsavedFieldsOrder.map((id, index) => {
                  const config = unsavedFormConfig[id];
                  const ConfiguratorComponent = configuratorMap[config.type];

                  if (!ConfiguratorComponent) return null;

                  return (
                    <SortableItemWrapper key={`configurator-${id}`} id={id}>
                      {({ setNodeRef, style, attributes, listeners }) => (
                        <ConfiguratorComponent
                          index={index}
                          id={id}
                          fieldConfig={config}
                          setNodeRef={setNodeRef}
                          style={style}
                          attributes={attributes}
                          listeners={listeners}
                        />
                      )}
                    </SortableItemWrapper>
                  );
                })}
              </Accordion>
            </SortableContextWrapper>
          </DnDContextWrapper>
        </section>
      )}
    </div>
  );
};

export default ConfiguratorPanel;
