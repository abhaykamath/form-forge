import Footer from "./components/landing/Footer";
import Mention from "./components/landing/Mention";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Upcoming from "./components/landing/Upcoming";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Mention />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default App;
