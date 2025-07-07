import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e) => {
    const href = e.target.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a2e]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <footer className="relative text-white py-16 lg:py-24">
        {/* Main Footer Content */}
        <div
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                DevNetiX
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Votre partenaire pour des solutions web et mobile sur mesure.
                Nous transformons vos idées en réalité digitale.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#histoire"
                    onClick={handleNavClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Notre Histoire
                  </a>
                </li>
                <li>
                  <a
                    href="#projets"
                    onClick={handleNavClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={handleNavClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Développement Web</li>
                <li className="text-gray-400">Applications Mobile</li>
                <li className="text-gray-400">Consultation IT</li>
                <li className="text-gray-400">Maintenance & Support</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <span className="text-gray-400">contact@devnetix.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <span className="text-gray-400">+226 XX XX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-400" />
                  <span className="text-gray-400">
                    Ouagadougou, Burkina Faso
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} DevNetiX. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Politique de confidentialité
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Conditions d'utilisation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
            aria-label="Retour en haut"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </footer>
    </div>
  );
};

export default Footer;
