import Contact from "./components/Contact.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import History from "./components/History.jsx";
import ParticleComponent from "./components/particles/ParticleComponent.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-y-auto bg-[#1a1a2e] scroll-smooth">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <ParticleComponent />
      </div>

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
