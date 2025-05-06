import { ThemeToggle } from "@/features/ModeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 px-32 bg-primary">
      <div>
        <div className="text-4xl font-extrabold leading-7 text-primary-foreground">
          Form Forge{" "}
          <span className="text-xl">
            v0.1.0 <i className="text-sm">(beta)</i>
          </span>
        </div>
        <div className="text-md leading-6 text-primary-foreground">
          Build forms effortlessly.
        </div>
      </div>
      {/* BUTTONS */}
      <div className="flex items-center gap-2">
        <Button variant="outline" className="border-2 rounded-xl">
          Builder - <i>coming soon !</i>
        </Button>
        <Button variant="outline" className="border-2 rounded-xl">
          Profile - <i>coming soon !</i>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
