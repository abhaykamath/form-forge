import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeProvider";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="p-5 flex justify-center items-center">
      <Button
        variant="secondary"
        size="icon"
        className="flex justify-center items-center border-2 rounded-xl scale-0 dark:scale-100 absolute hover:cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="flex justify-center items-center border-2 rounded-xl scale-100 dark:scale-0 absolute hover:cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    </div>
  );
}
