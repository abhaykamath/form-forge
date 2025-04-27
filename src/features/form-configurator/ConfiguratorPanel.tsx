import { useConfiguratorStore } from "@/stores/ConfiguratorStore";
import Configurator__Text from "./configurators/Configurator__Text";
import Configurator__Email from "./configurators/Configurator__Email";
import Configurator__Password from "./configurators/Configurator__Password";
import { Accordion } from "@/components/ui/accordion";
import Configurator__Number from "./configurators/Configurator__Number";
import DnDContextWrapper from "../dnd/DnDContextWrapper";
import SortableContextWrapper from "../dnd/SortableContextWrapper";
import SortableItemWrapper from "../dnd/SortableItemWrapper";
import { Button } from "@/components/ui/button";
import { usePreviewStore } from "@/stores/PreviewStore";
import Configurator__Select from "./configurators/Configurator__Select";
import Configurator__Checkbox from "./configurators/Configurator__Checkbox";
import Configurator__Radio from "./configurators/Configurator__Radio";

const ConfiguratorPanel = () => {
  const unsavedFieldsOrder = useConfiguratorStore(
    (state) => state.unsavedFieldsOrder
  );
  const unsavedFormConfig = useConfiguratorStore(
    (state) => state.unsavedFormConfig
  );
  const syncPreview = usePreviewStore((state) => state.syncPreview);
  return (
    <div className="border w-full max-w-xl flex flex-col items-center m-auto rounded-md">
      <header className="w-full p-2 text-center border-b">
        Configuration Panel
      </header>
      {/* Configurators List */}
      <section className="w-full p-2 flex flex-col gap-2">
        <DnDContextWrapper>
          <SortableContextWrapper>
            <Accordion
              type="single"
              collapsible
              className="w-full border rounded-md"
            >
              {unsavedFieldsOrder.map((id, index) => {
                switch (unsavedFormConfig[id].type) {
                  case "text":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Text
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                  case "email":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Email
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                  case "password":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Password
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                  case "number":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Number
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                  case "select":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Select
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                  case "checkbox":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Checkbox
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                  case "radio":
                    return (
                      <SortableItemWrapper key={`configurator-${id}`} id={id}>
                        {({ setNodeRef, style, attributes, listeners }) => (
                          <Configurator__Radio
                            index={index}
                            id={id}
                            fieldConfig={unsavedFormConfig[id]}
                            setNodeRef={setNodeRef}
                            style={style}
                            attributes={attributes}
                            listeners={listeners}
                          />
                        )}
                      </SortableItemWrapper>
                    );
                }
              })}
            </Accordion>
          </SortableContextWrapper>
        </DnDContextWrapper>
      </section>
      <footer className="w-full p-2 flex justify-center border-t">
        <Button
          onClick={() => {
            syncPreview(unsavedFieldsOrder, unsavedFormConfig);
          }}
        >
          Sync Preview
        </Button>
      </footer>
    </div>
  );
};

export default ConfiguratorPanel;
