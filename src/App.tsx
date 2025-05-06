import { lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ConfiguratorPanel from "./features/form-configurator/ConfiguratorPanel";
import FieldSelectorTab from "./features/form-field-selector/FieldSelectorTab";
import Preview from "./features/form-preview/Preview";
import { generateRHFJSX } from "./utils/jsxGenerator";
const LazyPreviewJSX = lazy(() => import("./features/jsx-output/PreviewJSX"));
import { usePreviewStore } from "./stores/PreviewStore";
import Footer from "./components/landing/Footer";
import Mention from "./components/landing/Mention";
import Navbar from "./components/landing/Navbar";
import FormData from "./components/landing/FormData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Button } from "./components/ui/button";

const App = () => {
  const savedFormConfig = usePreviewStore((state) => state.savedFormConfig);
  const savedFieldsOrder = usePreviewStore((state) => state.savedFieldsOrder);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full">
        {/* App Container */}
        <div className="w-full h-full m-auto relative">
          <Navbar />

          {/* HERO SECTION */}
          <section className="flex flex-col justify-center items-center text-center p-4 py-16">
            <h1 className="text-5xl font-extrabold text-primary dark:text-primary-foreground">
              Form Forge
            </h1>
            <p className="text-lg max-w-2xl text-primary dark:text-primary-foreground mt-8">
              Design powerful, customizable forms visually — without writing
              boilerplate code.
            </p>
            <p className="text-lg max-w-2xl text-primary dark:text-primary-foreground mt-2">
              Get React Hook Form-ready JSX instantly.
            </p>
            <Button
              className="text-lg px-8 py-4 rounded-xl mt-8"
              variant="default"
            >
              🚀 Start Building Now 👇
            </Button>
          </section>

          {/* BUILDER DEMO - V1 */}
          <section className="py-16 px-8 xl:px-32 flex flex-col gap-16 bg-secondary">
            <h3 className="text-center text-3xl font-extrabold text-primary dark:text-primary-foreground underline underline-offset-4">
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
                          <span className="font-bold italic">JSX</span> - React
                          Hook Form integrated
                        </h3>
                        <Suspense
                          fallback={
                            <div className="h-[500px] flex items-center justify-center bg-muted text-muted-foreground rounded-lg">
                              <div className="text-center space-y-2">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary mx-auto" />
                                <p className="text-lg font-semibold">
                                  Loding...
                                </p>
                              </div>
                            </div>
                          }
                        >
                          <LazyPreviewJSX
                            code={generateRHFJSX(
                              savedFieldsOrder,
                              savedFormConfig
                            )}
                          />
                        </Suspense>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          {/* WHAT'S NEXT SECTION */}
          <section className="flex flex-col justify-center items-center text-center gap-4 p-4 py-16">
            <h2 className="text-4xl font-bold text-primary dark:text-primary-foreground">
              What's Next?
            </h2>
            <p className="text-lg text-primary dark:text-primary-foreground max-w-xl">
              We're just getting started. Here's what's brewing in the lab:
            </p>
            <ul className="text-primary dark:text-primary-foreground list-disc list-inside text-left mt-4">
              <li>🔧 Form Builder Interface with drag & drop</li>
              <li>👤 User Profiles to save and manage form templates</li>
              <li>📤 Export to JSON, JSX, or HTML</li>
              <li>🧩 More fields</li>
            </ul>
          </section>

          {/* SPECIAL MENTION SECTION */}
          <section className="py-16 px-32 bg-secondary flex justify-center">
            <Mention />
          </section>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
