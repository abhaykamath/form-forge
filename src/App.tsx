import { ThemeProvider } from "./contexts/ThemeProvider";
import { ThemeToggle } from "./features/ModeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-[100dvw] relative">
        <div>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
