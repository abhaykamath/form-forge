import { ThemeProvider } from "./contexts/ThemeProvider";
import Footer from "./components/landing/Footer";
import Mention from "./components/landing/Mention";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Upcoming from "./components/landing/Upcoming";
import DemoBuilder from "./components/landing/DemoBuilder";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full">
        <Navbar />
        <Hero />
        <DemoBuilder />
        <Upcoming />
        <Mention />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
