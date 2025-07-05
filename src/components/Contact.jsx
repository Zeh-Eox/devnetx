import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-transparent text-white py-16 px-6 sm:px-12 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-xl w-full text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contactez-nous
        </motion.h2>
        <motion.p
          className="text-white/70 mb-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Une question, un projet, une idée ? Écrivez-nous et nous vous
          répondrons rapidement.
        </motion.p>

        <motion.form
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Votre nom"
            className="p-4 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#5b6bff] placeholder-white/60"
          />
          <input
            type="email"
            placeholder="Votre e-mail"
            className="p-4 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#5b6bff] placeholder-white/60"
          />
          <textarea
            rows="5"
            placeholder="Votre message"
            className="p-4 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#5b6bff] placeholder-white/60"
          ></textarea>
          <button
            type="submit"
            className="bg-[#5b6bff] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#4a5bf0] transition duration-300"
          >
            Envoyer le message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
