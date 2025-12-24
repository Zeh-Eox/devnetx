import Contact from "./components/Contact.js";
import Faq from "./components/Faq.js";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import History from "./components/History.js";
import Projects from "./components/Projects.js";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-y-auto overflow-x-hidden bg-[#1a1a2e] scroll-smooth">
      <div className="relative z-10 h-screen">
        <Hero />
        <History />
        <Projects />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
