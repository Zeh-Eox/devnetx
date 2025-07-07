import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  return (
    <div
      className="relative min-h-screen w-full p-6 lg:p-12 flex flex-col items-center justify-center"
      id="contact"
    >
      {/* Background cohérent avec les autres sections */}
      <div className="absolute inset-0 bg-[#10102e]"></div>

      {/* Animated background elements comme dans History/Projects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative w-full max-w-2xl">
        {/* Titre harmonisé */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Contact
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            Une question, un projet ou une idée ? Écrivez-nous et nous vous
            répondrons rapidement.
          </p>
        </motion.div>

        {/* Formulaire - style cohérent avec les cartes */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 lg:p-12 shadow-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} className="flex flex-col gap-6">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-gray-300 text-sm font-medium"
              >
                Votre nom
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
                placeholder="Jean Dupont"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-gray-300 text-sm font-medium"
              >
                Votre email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
                placeholder="jean@exemple.com"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-gray-300 text-sm font-medium"
              >
                Votre message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
                placeholder="Dites-nous en plus sur votre projet..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer le message
            </motion.button>
          </form>
        </motion.div>

        {/* Coordonnées supplémentaires */}
        <motion.div
          className="mt-12 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Ou contactez-nous directement à{" "}
            <a
              href="mailto:contact@DevNetiX.com"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              contact@devnetix.com
            </a>
          </p>
          <p className="mt-2">Ouagadougou, BURKINA FASO</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
