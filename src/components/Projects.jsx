import { useState, useEffect } from "react";
import { Code, Smartphone, Globe, Database, Zap, Layers } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

    const element = document.getElementById("projets");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      category: "Web App",
      description:
        "Plateforme de vente en ligne moderne avec système de paiement intégré et gestion des stocks.",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Terminé",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "App Mobile Fitness",
      category: "Mobile App",
      description:
        "Application de suivi d'entraînement avec plans personnalisés et tracking des performances.",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Firebase", "Redux"],
      status: "En cours",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "Data Viz",
      description:
        "Tableau de bord interactif pour visualiser les données business en temps réel.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      status: "Terminé",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "API Gateway",
      category: "Backend",
      description:
        "Service de passerelle API scalable avec authentification et rate limiting.",
      icon: <Layers className="w-8 h-8" />,
      technologies: ["Node.js", "Docker", "Redis", "JWT"],
      status: "En cours",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Site Vitrine",
      category: "Website",
      description:
        "Site web responsive pour une entreprise locale avec système de réservation.",
      icon: <Code className="w-8 h-8" />,
      technologies: ["Next.js", "Tailwind", "Sanity CMS"],
      status: "Terminé",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Microservice Auth",
      category: "API",
      description:
        "Service d'authentification haute performance avec support multi-tenant.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Go", "gRPC", "JWT", "Redis"],
      status: "En développement",
      color: "from-teal-500 to-blue-500",
    },
  ];

  const categories = [
    "Tous",
    "Web App",
    "Mobile App",
    "Backend",
    "API",
    "Website",
    "Data Viz",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#10102e]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div
        className="relative min-h-screen w-full p-6 lg:p-12 flex flex-col gap-12 items-center justify-center text-white"
        id="projets"
      >
        {/* Title */}
        <div
          className={`text-center space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projets
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Découvrez quelques-uns de nos projets récents et les technologies
            que nous maîtrisons
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-2 justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 700}ms` }}
              onClick={() => setActiveProject(project.id)}
            >
              {/* Status Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "Terminé"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                }`}
              >
                {project.status}
              </div>

              {/* Icon */}
              <div
                className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{project.icon}</div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">
                    {project.category}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-300 mb-6">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Démarrer un projet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
