'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

export default function Legal() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center py-20 px-4 font-sans text-gray-900">
      <motion.h1
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-4xl font-extrabold text-blue-600 mb-8 text-center"
      >
        Cumplimiento y respaldo para tu notaría
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-lg text-gray-700 mb-10 max-w-2xl text-center"
      >
        Notari facilita y respalda el cumplimiento de las principales normativas del sector notarial en México. Nuestra plataforma te ayuda a organizar, documentar y generar reportes para que tu notaría esté siempre preparada ante cualquier revisión. <span className="font-semibold text-blue-700">La responsabilidad final del cumplimiento legal recae siempre en el usuario.</span>
      </motion.p>
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-8 mb-12">
        <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
          <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 10h8M8 14h6"/></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 text-blue-700">Ley Antilavado</h3>
            <p className="text-gray-600 text-sm">Genera reportes, organiza expedientes y recibe alertas para facilitar el cumplimiento de la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
          <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10l9 6l9-6"/></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 text-blue-700">NOM-151 y firma electrónica</h3>
            <p className="text-gray-600 text-sm">Facilita la conservación y resguardo de documentos digitales conforme a la NOM-151 y apoya la gestión de firmas electrónicas.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
          <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4-4"/><circle cx="12" cy="12" r="10"/></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 text-blue-700">Obligaciones fiscales</h3>
            <p className="text-gray-600 text-sm">Apoya la generación de reportes y documentos para facilitar el cumplimiento de obligaciones fiscales y la preparación de información para el SAT.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
          <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 10h8M8 14h6"/></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 text-blue-700">Control de accesos y auditoría</h3>
            <p className="text-gray-600 text-sm">Historial de cambios, roles y permisos avanzados para que todo quede documentado y bajo control.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
          <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10l9 6l9-6"/></svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1 text-blue-700">Seguridad y respaldo</h3>
            <p className="text-gray-600 text-sm">Encriptación, respaldos automáticos y protección de datos sensibles para mayor tranquilidad.</p>
          </div>
        </motion.div>
      </div>
      <motion.p initial="hidden" animate={animate ? "visible" : "hidden"} variants={fadeInUp} className="text-gray-500 text-sm max-w-xl text-center mb-8">
        *Notari es una herramienta de apoyo. El cumplimiento legal depende siempre de la correcta operación y supervisión del usuario notarial.
      </motion.p>
      <a href="https://calendly.com/jorgefloresrv/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition">Solicitar demo</a>
    </main>
  );
} 