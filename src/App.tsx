import { ThemeProvider } from "./contexts/ThemeProvider";
import ConfiguratorPanel from "./features/form-configurator/ConfiguratorPanel";
import FieldSelectorTab from "./features/form-field-selector/FieldSelectorTab";
import Preview from "./features/form-preview/Preview";
import { generateRHFJSX } from "./utils/jsxGenerator";
import { PreviewJSX } from "./features/jsx-output/PreviewJSX";
import { usePreviewStore } from "./stores/PreviewStore";
import Footer from "./components/landing/Footer";
import Mention from "./components/landing/Mention";
import Navbar from "./components/landing/Navbar";
import FormData from "./components/landing/FormData";

const App = () => {
  const savedFormConfig = usePreviewStore((state) => state.savedFormConfig);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full">
        {/* App Container */}
        <div className="w-full max-w-6xl h-full m-auto relative">
          <Navbar />
          <main className="p-4 py-8 grid grid-cols-12 gap-4">
            <div className="col-span-4 border-2 rounded-xl shadow-lg">
              <FieldSelectorTab />
            </div>
            <div className="col-span-8 h-fit border-2 rounded-xl shadow-lg">
              <ConfiguratorPanel />
            </div>
            <div className="col-span-7 border-2 rounded-xl shadow-lg">
              <Preview />
            </div>
            <div className="h-fit col-span-5 border-2 rounded-xl shadow-lg">
              <FormData />
            </div>
            <div className="h-fit col-span-12 border-2 rounded-xl shadow-lg">
              <div className="w-full p-4">
                <h3 className="mb-2"><span className="font-bold italic">JSX</span> - React Hook Form integrated</h3>
                <PreviewJSX code={generateRHFJSX(savedFormConfig)} />
              </div>
            </div>
            <Mention />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
