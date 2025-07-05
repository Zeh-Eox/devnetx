import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col items-center justify-center bg-[#1a1a2e] text-white py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-around w-full max-w-6xl px-6">
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <motion.h1
            className="text-xl lg:text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            DevNetX
          </motion.h1>
          <p className="text-md text-gray-400">
            Votre partenaire pour des solutions web et mobile sur mesure.
          </p>
        </div>
        <p className="text-md">
          © {new Date().getFullYear()} DevNetX. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
