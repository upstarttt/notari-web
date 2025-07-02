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

const steps = [
  {
    title: "Digitaliza y organiza",
    desc: "Sube tus expedientes y documentos. La IA los clasifica y revisa automáticamente.",
  },
  {
    title: "Flujo visual de expedientes",
    desc: "Cada expediente avanza por etapas claras: apertura, revisión, firma, cierre. Todo con estatus automáticos.",
  },
  {
    title: "Alertas y auditorías inteligentes",
    desc: "La IA te avisa si falta algún documento, si hay atrasos o si detecta inconsistencias legales.",
  },
  {
    title: "Gestión de citas y notificaciones",
    desc: "Agenda, notifica y recuerda automáticamente a tu equipo y clientes.",
  },
  {
    title: "Reportes y cumplimiento",
    desc: "Genera reportes listos para auditoría y cumple con la ley antilavado y NOM-151.",
  },
];

export default function How() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-20 px-4 font-sans text-gray-900">
      <motion.h1
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-4xl font-extrabold text-blue-600 mb-10 text-center"
      >
        Así trabaja Notari por ti
      </motion.h1>
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            custom={i}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-col items-start bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition group"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-700">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 