import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="flex bg-[#10102e] h-screen w-full items-center justify-center min-h-screen">
      <motion.h1
        className="text-xl md:text-4xl xl:text-6xl font-bold text-white"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        En construction... (section projets)
      </motion.h1>
    </div>
  );
};

export default Projects;
