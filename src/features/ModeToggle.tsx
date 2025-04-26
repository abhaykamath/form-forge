import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeProvider";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="p-5 flex justify-center items-center relative">
      <Button
        variant="outline"
        size="icon"
        className="scale-0 dark:scale-100 absolute"
        onClick={() => setTheme("light")}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90  transition-all dark:rotate-0" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="scale-100 dark:scale-0 absolute"
        onClick={() => setTheme("dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0  transition-all dark:-rotate-90" />
      </Button>
    </div>
  );
}
