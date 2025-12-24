import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface FAQData {
  question: string;
  answer: React.ReactNode;
}

interface FAQItemProps {
  item: FAQData;
  index: number;
  activeIndex: number | null;
  toggleIndex: (index: number) => void;
  shouldReduceMotion: boolean;
}

const FAQ_DATA: FAQData[] = [
  {
    question: "Comment puis-je contacter le support ?",
    answer: (
      <div>
        Vous pouvez nous contacter via notre formulaire de contact sur le site
        ou par email à{" "}
        <a
          href="mailto:support@devnetix.com"
          className="text-blue-400 hover:text-blue-300 transition-colors underline"
        >
          support@devnetix.com
        </a>
        .
      </div>
    ),
  },
  {
    question: "Quel est votre délai de réponse ?",
    answer: <div>Nous répondons généralement sous 24 heures ouvrées.</div>,
  },
  {
    question: "Proposez-vous une assistance 24/7 ?",
    answer: (
      <div>
        Actuellement non, notre support est disponible de 9h à 18h (UTC+0).
      </div>
    ),
  },
];

const FAQItem: React.FC<FAQItemProps> = ({
  item,
  index,
  activeIndex,
  toggleIndex,
  shouldReduceMotion,
}) => {
  const isOpen = activeIndex === index;

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <motion.button
        onClick={() => toggleIndex(index)}
        className="w-full text-left px-6 py-4 text-white font-medium flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <span className="text-lg md:text-xl">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-blue-400" />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-content-${index}`}
            initial={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 pb-6 text-gray-300 overflow-hidden"
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleIndex = (index) =>
    setActiveIndex(index === activeIndex ? null : index);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative min-h-screen w-full p-6 lg:p-12 flex flex-col gap-12 items-center justify-center bg-[#1a1a2e]"
      id="faq"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Titre */}
      <motion.div
        className="text-center space-y-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Questions{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Fréquentes
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Trouvez les réponses aux questions les plus courantes sur nos services
        </p>
      </motion.div>

      {/* FAQ list */}
      <div className="w-full max-w-4xl space-y-6 z-10">
        {FAQ_DATA.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            toggleIndex={toggleIndex}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 mb-6">
          Vous ne trouvez pas votre réponse ? Contactez-nous directement.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Nous contacter
        </a>
      </motion.div>
    </div>
  );
};

export default Faq;
