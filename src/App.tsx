import { ThemeProvider } from "./contexts/ThemeProvider";
import ConfiguratorPanel from "./features/form-configurator/ConfiguratorPanel";
import FieldSelectorTab from "./features/form-field-selector/FieldSelectorTab";
import Preview from "./features/form-preview/Preview";
import { ThemeToggle } from "./features/ModeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full flex flex-col">
        <nav className="w-full flex justify-center items-center p-4 border-b relative">
          <h1 className="text-2xl">Form Forge - A dynamic UI based form builder</h1>
          <ThemeToggle />
        </nav>
        {/* Field Selector Tab */}
        <section>
          <FieldSelectorTab />
        </section>
        {/* Configurator Panel */}
        <section className="w-full">
          <ConfiguratorPanel />
        </section>
        {/* Preview of the Form */}
        <section className="w-full">
          <Preview />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
