import { ThemeToggle } from "@/features/ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 border-b-2">
      <div>
        <div className="text-4xl font-extrabold">FORM FORGE</div>
        <div className="text-xl">Build forms effortlessly.</div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
