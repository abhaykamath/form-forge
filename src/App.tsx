import { ThemeProvider } from "./contexts/ThemeProvider";
import ConfiguratorPanel from "./features/form-configurator/ConfiguratorPanel";
import Preview from "./features/form-preview/Preview";
import { ThemeToggle } from "./features/ModeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full flex flex-col">
        <nav className="w-full flex justify-end p-2 border-b">
          <ThemeToggle />
        </nav>
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
