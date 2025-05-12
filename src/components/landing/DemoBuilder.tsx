import ConfiguratorPanel from "@/features/form-configurator/ConfiguratorPanel";
import FieldSelectorTab from "@/features/form-field-selector/FieldSelectorTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Preview from "@/features/form-preview/Preview";
import FormData from "./FormData";
import { lazy, Suspense } from "react";
const LazyPreviewJSX = lazy(
  () => import("../../features/jsx-output/PreviewJSX")
);
import { generateRHFJSX } from "@/utils/jsxGenerator";
import { usePreviewStore } from "@/stores/demo/DEMO_PreviewStore";

const DemoBuilder = () => {
  const savedFormConfig = usePreviewStore((state) => state.savedFormConfig);
  const savedFieldsOrder = usePreviewStore((state) => state.savedFieldsOrder);

  return (
    <section className="py-8 px-8 xl:px-32 flex flex-col gap-6">
      <h3 className="text-center text-3xl font-extrabold text-primary dark:text-primary-foreground">
        Form Builder - Live Demo
      </h3>

      {/* BUILDER */}
      <div className="grid grid-cols-12 border-2 rounded-xl bg-card shadow-lg overflow-hidden">
        {/* INPUT SELECTOR */}
        <div className="col-span-2 border-dashed border-r-2">
          <h4 className="p-4 text-center text-xl font-bold bg-primary text-primary-foreground">
            Components
          </h4>
          <FieldSelectorTab />
        </div>

        {/* CONFIGURATOR PANEL/CANVAS */}
        <div className="col-span-4 border-r-2">
          <h4 className="p-4 text-center text-xl font-bold bg-primary text-primary-foreground">
            Canvas
          </h4>
          <ConfiguratorPanel />
        </div>

        {/* PREVIEW + JSX + FORM DATA */}
        <div className="col-span-6 flex flex-col">
          <h4 className="p-4 text-center text-xl font-bold bg-primary text-primary-foreground">
            Your Custom Form
          </h4>
          <Tabs defaultValue="preview" className="flex-1 p-4">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="jsx">JSX</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="h-full">
              <div className="h-full col-span-6 grid grid-cols-12">
                <div className="col-span-8">
                  <Preview />
                </div>
                <div className="h-fit col-span-4 border-dashed border-2 rounded-xl overflow-hidden">
                  <FormData />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="jsx">
              <div className="h-fit col-span-6 border-2 rounded-xl shadow-lg overflow-hidden">
                <div className="w-full p-4 bg-card">
                  <h3 className="mb-2">
                    <span className="font-bold italic">JSX</span> - React Hook
                    Form integrated
                  </h3>
                  <Suspense
                    fallback={
                      <div className="h-[500px] flex items-center justify-center bg-muted text-muted-foreground rounded-lg">
                        <div className="text-center space-y-2">
                          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto" />
                          <p className="text-lg font-semibold">Loding...</p>
                        </div>
                      </div>
                    }
                  >
                    <LazyPreviewJSX
                      code={generateRHFJSX(savedFieldsOrder, savedFormConfig)}
                    />
                  </Suspense>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DemoBuilder;
