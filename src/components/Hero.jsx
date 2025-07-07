import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "./Header";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#histoire");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Background with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10"></div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div
        className={`hero min-h-screen text-black relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Header />

        <div className="hero-content text-center flex items-center justify-center min-h-screen">
          <div className="max-w-6xl flex flex-col items-center justify-center gap-6 p-4">
            <div className="space-y-4">
              <h1
                className={`text-5xl md:text-8xl font-bold text-white leading-tight transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Bienvenue chez{" "}
                <span className="text-[#5b6bff] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  DevNetX
                </span>
              </h1>
            </div>

            <p
              className={`py-6 text-md md:text-lg text-gray-300 max-w-3xl leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Nous sommes là pour vous aider à réaliser vos projets de
              développement web et mobile. Découvrez nos services de création de
              solutions sur mesure.
            </p>

            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group bg-transparent hover:bg-blue-500 font-semibold text-white py-3 md:py-4 px-6 md:px-8 border-2 border-blue-500 hover:border-transparent rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Nous contacter
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white cursor-pointer transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          onClick={scrollToNext}
        >
          <div className="animate-bounce">
            <ArrowDown
              className="hover:text-blue-400 transition-colors duration-300"
              size={28}
            />
          </div>
          <span className="text-sm mt-2 text-gray-400">Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
