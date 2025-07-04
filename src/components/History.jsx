import { Lightbulb, Signature, Telescope } from "lucide-react";
import { descriptions, titles } from "../utils";
import TimelineLayout from "./layouts/TimelineLayout";
import { motion } from "motion/react";

const History = () => {
  return (
    <div className="min-h-screen w-full p-6 flex flex-col gap-16 lg:gap-32 items-center justify-center bg-[#10102e]">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Notre Histoire
      </motion.h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center">
        <TimelineLayout
          icon={<Lightbulb className="w-10 h-10 text-white" />}
          title={titles.firstTitle}
          description={descriptions.firstDescription}
        />

        <TimelineLayout
          icon={<Signature className="w-10 h-10 text-white" />}
          title={titles.secondTitle}
          description={descriptions.secondDescription}
        />

        <TimelineLayout
          icon={<Telescope className="w-10 h-10 text-white" />}
          title={titles.thirdTitle}
          description={descriptions.thirdDescription}
        />
      </div>
    </div>
  );
};

// bg-[#1a1a2e]

export default History;
