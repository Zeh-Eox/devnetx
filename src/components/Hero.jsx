import { ArrowDown } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <motion.div
        className="hero bg-transparent min-h-screen text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="hero-content text-center">
          <div className="max-w-6xl flex flex-col items-center justify-center gap-6 p-4">
            <h1 className="text-5xl md:text-8xl font-bold text-white">
              Bienvenu chez <span className="text-[#5b6bff]">DevNetX</span>
            </h1>
            <p className="py-6 text-md md:text-lg text-white">
              Nous sommes là pour vous aider à réaliser vos projets de
              développement web et mobile. Découvrez nos services de création de
              de solutions sur mesure.
            </p>
            <a
              href="#contact"
              className="bg-transparent hover:bg-blue-500 font-semibold text-white py-2 md:py-4 px-4 border border-blue-500 hover:border-transparent rounded flex items-center gap-2"
            >
              Nous contacter <ArrowRightIcon />
            </a>
          </div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ArrowDown />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
