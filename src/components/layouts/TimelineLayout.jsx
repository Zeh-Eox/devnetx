import { motion } from "motion/react";

const TimelineLayout = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-[#5b6bff] text-white p-6 sm:p-8 w-full max-w-lg h-[500px] rounded-xl shadow-lg flex flex-col items-center justify-center gap-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-transparent shadow-xl">
        {icon}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-center">{title}</h2>
      <p className="text-sm sm:text-md text-center">{description}</p>
    </motion.div>
  );
};

export default TimelineLayout;
