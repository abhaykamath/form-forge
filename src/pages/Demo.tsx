import DemoBuilder from "@/components/landing/DemoBuilder";
import { ThemeToggle } from "@/features/ModeToggle";

const Demo = () => {
  return (
    <div className="w-full h-full min-h-dvh relative bg-grid">
      <div className="absolute top-2 right-2">
        <ThemeToggle />
      </div>
      <DemoBuilder />
    </div>
  );
};

export default Demo;
