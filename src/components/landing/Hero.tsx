import { NavLink } from "react-router";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center p-4 py-16 bg-grid">
      <h1 className="text-5xl font-extrabold text-primary dark:text-primary-foreground">
        Form Forge
      </h1>
      <p className="text-lg max-w-2xl text-primary dark:text-primary-foreground mt-8">
        Design powerful, customizable forms visually — without writing
        boilerplate code.
      </p>
      <p className="text-lg max-w-2xl text-primary dark:text-primary-foreground mt-2">
        Get React Hook Form-ready JSX instantly.
      </p>
      <Button
        className="text-lg px-8 py-4 rounded-xl mt-8"
        variant="default"
        asChild
      >
        <NavLink to="/demo">🚀 Start Building Now 👉 - Demo</NavLink>
      </Button>
    </section>
  );
};

export default Hero;
