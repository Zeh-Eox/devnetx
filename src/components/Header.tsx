import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e) => {
    const href = e.target.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-6 left-6 right-6 z-50 flex items-center justify-between p-4 md:p-6 text-white mx-auto transition-all duration-300 ${
          hasScrolled
            ? "bg-black/50 backdrop-blur-md rounded-xl shadow-lg border border-white/10"
            : ""
        }`}
      >
        <div className="logo text-[#5b6bff] font-bold text-2xl md:text-3xl">
          DevNetiX
        </div>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <a
            href="#histoire"
            onClick={handleNavClick}
            className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
          >
            Histoire
          </a>
          <a
            href="#projets"
            onClick={handleNavClick}
            className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
          >
            Projets
          </a>
          <a
            href="#faq"
            onClick={handleNavClick}
            className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-20 left-6 right-6 bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/10 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#histoire"
                onClick={handleNavClick}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-lg py-2 px-4 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Histoire
              </a>
              <a
                href="#projets"
                onClick={handleNavClick}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-lg py-2 px-4 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Projets
              </a>
              <a
                href="#faq"
                onClick={handleNavClick}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-lg py-2 px-4 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-lg py-2 px-4 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
