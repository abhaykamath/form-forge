import { useConfiguratorStore } from "@/stores/demo/DEMO_ConfiguratorStore";
import { Accordion } from "@/components/ui/accordion";
import DnDContextWrapper from "../dnd/DnDContextWrapper";
import SortableContextWrapper from "../dnd/SortableContextWrapper";
import SortableItemWrapper from "../dnd/SortableItemWrapper";
import { inputTypeSchemas } from "./configuratorMap";
import GenericConfigurator from "./GenericConfigurator";

const ConfiguratorPanel = () => {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  const unsavedFormConfig = useConfiguratorStore(
    (state) => state.unsavedFormConfig
  );

  return (
    <div className="w-full p-4 flex flex-col items-center gap-4">
      {unsavedFieldsOrder.length < 1 && <h3>👈 Start by adding fields</h3>}
      {unsavedFieldsOrder.length > 0 && (
        <section className="w-full flex flex-col gap-2">
          <DnDContextWrapper>
            <SortableContextWrapper>
              <Accordion
                type="single"
                collapsible
                className="w-full border rounded-md"
              >
                {unsavedFieldsOrder.map((id, index) => {
                  const config = unsavedFormConfig[id];
                  const schema = inputTypeSchemas[config.type];
                  if (!schema) return null;
                  return (
                    <SortableItemWrapper key={`configurator-${id}`} id={id}>
                      {({ setNodeRef, style, attributes, listeners }) => (
                        <GenericConfigurator
                          index={index}
                          id={id}
                          type={config.type}
                          fieldConfig={config}
                          schema={schema}
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
