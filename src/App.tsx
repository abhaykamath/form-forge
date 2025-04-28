import { Github, Heart, Linkedin, Twitter } from "lucide-react";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ConfiguratorPanel from "./features/form-configurator/ConfiguratorPanel";
import FieldSelectorTab from "./features/form-field-selector/FieldSelectorTab";
import Preview from "./features/form-preview/Preview";
import { ThemeToggle } from "./features/ModeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full">
        {/* App Container */}
        <div className="w-full max-w-5xl h-full m-auto">
          {/* Navbar */}
          <nav className="w-full flex justify-between p-4">
            <div>
              <div className="text-4xl font-extrabold">FORM FORGE</div>
              <div className="text-xl">Build forms effortlessly.</div>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </nav>
          {/* Main - Interactive Space */}
          <main className="p-4 grid grid-cols-12 gap-4">
            {/* Input Options */}
            <div className="col-span-4 border-2 rounded-xl shadow-lg">
              <FieldSelectorTab />
            </div>
            {/* Configurator */}
            <div className="col-span-8 border-2 rounded-xl shadow-lg">
              <ConfiguratorPanel />
            </div>
            {/* Preview + JSX */}
            <div className="col-span-7 border-2 rounded-xl shadow-lg">
              <Preview />
            </div>
            {/* Form Data */}
            <div className="h-fit col-span-5 border-2 rounded-xl shadow-lg">
              <div className="w-full p-4">Form Data</div>
            </div>
            {/* Special Thanks */}
            <div className="h-fit col-span-12 border-2 border-purple-200 rounded-xl shadow-lg bg-purple-100 dark:border-accent dark:bg-background">
              <div className="w-full p-4 text-md">
                A <span className="font-bold">tribute</span> to the amazing
                people behind{" "}
                <span className="font-bold text-pink-500">React Hook Form</span>
                , <span className="font-bold text-blue-400">BEEKAI</span>, and
                the <span className="font-bold">Open Source</span> community —
                whose work inspired me and made it possible to create{" "}
                <span className="font-bold">Form Forge</span> !
              </div>
            </div>
            {/* Footer */}
          </main>
          <footer className="w-full p-4 flex justify-between">
            <div className="flex gap-1">
              Made with <Heart fill="red" /> by Abhay Kamath
            </div>
            <div className="flex gap-4">
              <Github />
              <Linkedin />
              <Twitter />
            </div>
            <div className="flex gap-2">
              <a href="" className="">
                shadcn
              </a>
              <a href="" className="">
                Tailwind
              </a>
              <a href="" className="">
                Zustand
              </a>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
