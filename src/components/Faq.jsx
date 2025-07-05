import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const faqData = [
  {
    question: "Comment puis-je contacter le support ?",
    answer: (
      <>
        Vous pouvez nous contacter via notre formulaire de contact sur le site
        ou par email à{" "}
        <a
          href="mailto:support@devnetix.com"
          className="text-blue-400 underline"
        >
          support@devnetix.com
        </a>
        .
      </>
    ),
  },
  {
    question: "Quels services proposez-vous ?",
    answer:
      "Nous proposons des solutions de développement web, mobile et cloud adaptées à vos besoins.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Remplissez simplement notre formulaire de contact et nous reviendrons vers vous rapidement avec une proposition personnalisée.",
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Les délais varient selon la complexité du projet, mais nous nous engageons à respecter les échéances convenues.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col gap-6 lg:gap-12 items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Ce que vous devez savoir
      </motion.h1>

      <motion.div
        className="w-full max-w-3xl space-y-4 bg-[#5b6bff] p-6 lg:p-12 rounded-lg shadow-lg flex flex-col gap-6 lg:gap-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#10102e] rounded-lg shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-4 text-white font-semibold focus:outline-none flex justify-between items-center"
            >
              {item.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="px-6 pb-4 text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
