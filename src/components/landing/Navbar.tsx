import { ThemeToggle } from "@/features/ModeToggle";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 px-8 xl:px-32 bg-primary">
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
        <Button
          asChild
          variant="secondary"
          className="border-2 rounded-xl hidden lg:flex"
        >
          <NavLink to="/demo">Demo</NavLink>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-2 rounded-xl hidden lg:flex"
        >
          <NavLink to="/app">
            Builder - <i>coming soon !</i>
          </NavLink>
        </Button>
        <Button
          variant="secondary"
          className="border-2 rounded-xl hidden lg:flex"
        >
          Profile - <i>coming soon !</i>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
