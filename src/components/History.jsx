import { Lightbulb, Edit3, Telescope } from "lucide-react";
import { useEffect, useState } from "react";

// Mock data (replace with your actual utils)
const titles = {
  firstTitle: "L'Idée",
  secondTitle: "La Création",
  thirdTitle: "L'Expansion",
};

const descriptions = {
  firstDescription:
    "Tout a commencé par une idée simple : créer des solutions web innovantes qui transforment la façon dont les entreprises interagissent avec leurs clients.",
  secondDescription:
    "En 2020, nous avons officiellement lancé DevNetiX avec une équipe passionnée de développeurs déterminés à repousser les limites du possible.",
  thirdDescription:
    "Aujourd'hui, nous continuons d'évoluer et d'explorer de nouvelles technologies pour offrir des expériences digitales exceptionnelles à nos clients.",
};

// Timeline Layout Component
const TimelineLayout = ({ icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative max-w-sm mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Card */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 mx-auto">
          {icon}
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("histoire");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a2e]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div
        className="relative min-h-screen w-full p-6 flex flex-col gap-16 lg:gap-32 items-center justify-center text-white"
        id="histoire"
      >
        {/* Title */}
        <h1
          className={`text-4xl md:text-6xl font-bold text-white text-center transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          Notre{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Histoire
          </span>
        </h1>

        {/* Timeline Cards */}
        <div className="w-full max-w-7xl">
          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16 relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30"></div>

            <TimelineLayout
              icon={<Lightbulb className="w-10 h-10 text-white" />}
              title={titles.firstTitle}
              description={descriptions.firstDescription}
              delay={200}
            />

            <TimelineLayout
              icon={<Edit3 className="w-10 h-10 text-white" />}
              title={titles.secondTitle}
              description={descriptions.secondDescription}
              delay={400}
            />

            <TimelineLayout
              icon={<Telescope className="w-10 h-10 text-white" />}
              title={titles.thirdTitle}
              description={descriptions.thirdDescription}
              delay={600}
            />
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden flex flex-col gap-8 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30"></div>

            <div className="relative">
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="ml-16">
                <TimelineLayout
                  icon={<Lightbulb className="w-8 h-8 text-white" />}
                  title={titles.firstTitle}
                  description={descriptions.firstDescription}
                  delay={200}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-8 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="ml-16">
                <TimelineLayout
                  icon={<Edit3 className="w-8 h-8 text-white" />}
                  title={titles.secondTitle}
                  description={descriptions.secondDescription}
                  delay={400}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="ml-16">
                <TimelineLayout
                  icon={<Telescope className="w-8 h-8 text-white" />}
                  title={titles.thirdTitle}
                  description={descriptions.thirdDescription}
                  delay={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
