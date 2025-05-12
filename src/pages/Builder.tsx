import { ChartLine, LayoutTemplate, ScrollText } from "lucide-react";
import { ReactNode } from "react";
import { NavLink, Outlet } from "react-router";

const Builder = () => {
  return (
    <ScreenContainer>
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="flex-1 w-full flex">
          <Sidebar />
          <OutletContiner>
            <Outlet />
          </OutletContiner>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default Builder;

function ScreenContainer({ children }: { children?: ReactNode }) {
  return <div className="w-full h-full">{children}</div>;
}

function Header() {
  return (
    <header className="px-4 py-2 h-16 flex items-end bg-primary text-primary-foreground">
      <NavLink to="" className="text-4xl font-semibold">
        Builder
        <span className="text-xs text-primary-foreground">by Form Forge</span>
      </NavLink>
    </header>
  );
}

function OutletContiner({ children }: { children?: ReactNode }) {
  return (
    <main className="flex-1 px-8 py-4 bg-secondary bg-grid text-foreground">
      {children}
    </main>
  );
}

const navList = [
  {
    path: "",
    text: "Dashboard",
    icon: <ChartLine size={20} />,
  },
  {
    path: "your-forms",
    text: "Your Forms",
    icon: <ScrollText size={20} />,
  },
  {
    path: "templates",
    text: "Templates",
    icon: <LayoutTemplate size={20} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 p-2 gap-2 flex flex-col bg-sidebar">
      {navList.map((item) => (
        <NavLink
          key={item.text}
          to={item.path}
          end={item.path === ""}
          className={({ isActive }) => {
            const baseClasses =
              "p-4 flex items-center gap-4 text-md rounded-md text-sidebar-foreground hover:gap-5 hover:bg-primary/10 active:gap-4 transition-all";
            const activeClass = "bg-primary/20";
            return `${baseClasses} ${isActive ? activeClass : ""}`;
          }}
        >
          {item.icon}
          {item.text}
        </NavLink>
      ))}
    </aside>
  );
}
