'use client';
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-20 px-4 font-sans text-gray-900">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-4xl font-extrabold text-blue-600 mb-10 text-center"
      >
        Contacto
      </motion.h1>
      <motion.form
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        action="https://formsubmit.co/jorgefloresrv@gmail.com"
        method="POST"
        className="w-full max-w-md bg-blue-50 rounded-2xl p-8 shadow-md flex flex-col gap-6 mb-8"
      >
        <input type="text" name="Nombre" placeholder="Nombre" className="px-4 py-3 rounded bg-white border border-gray-200 focus:border-blue-600 outline-none" required />
        <input type="email" name="Correo" placeholder="Correo electrónico" className="px-4 py-3 rounded bg-white border border-gray-200 focus:border-blue-600 outline-none" required />
        <textarea name="Mensaje" placeholder="Mensaje" rows={4} className="px-4 py-3 rounded bg-white border border-gray-200 focus:border-blue-600 outline-none" required />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-md w-full bg-white rounded-2xl p-6 shadow text-center mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Información de contacto</h2>
        <p className="text-gray-700 mb-1">Correo: jorgefloresrv@gmail.com</p>
        <p className="text-gray-700 mb-1">WhatsApp: +52 33 2338 0217</p>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-md w-full bg-blue-50 rounded-2xl p-6 shadow text-center">
        <h2 className="text-xl font-bold text-blue-700 mb-2">¿Necesitas ayuda rápida?</h2>
        <p className="text-gray-700">Consulta nuestra sección de <Link href="/" className="text-blue-600 underline">Preguntas Frecuentes</Link> o escríbenos y te responderemos lo antes posible.</p>
      </motion.div>
    </main>
  );
} 