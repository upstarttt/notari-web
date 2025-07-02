'use client';
import { motion } from "framer-motion";

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

const features = [
  {
    title: "Revisión legal con IA",
    desc: "Detecta errores, omisiones o incoherencias en escrituras y documentos. Aprende y mejora con cada operación.",
  },
  {
    title: "Organización visual por etapas",
    desc: "Cada expediente fluye por un tablero visual, desde la apertura hasta la firma, con estatus automáticos y alertas inteligentes.",
  },
  {
    title: "Roles y permisos avanzados",
    desc: "Cada quien accede solo a lo que debe ver.",
  },
  {
    title: "Auditorías automáticas",
    desc: "La IA detecta procesos detenidos, atrasos o documentos incompletos. Reportes claros y accionables.",
  },
  {
    title: "Seguridad de grado bancario",
    desc: "Encriptación AES-256, backups automáticos, historial de cambios y control de accesos.",
  },
  {
    title: "Gestión de citas y notificaciones",
    desc: "Calendario interno con recordatorios inteligentes para el equipo y el cliente.",
  },
  {
    title: "Panel web 100% online",
    desc: "Accede desde cualquier navegador, sin instalaciones.",
  },
  {
    title: "Personalización total",
    desc: "Adapta la plataforma a los procesos y formatos únicos de tu notaría.",
  },
  {
    title: "Escaneo de documentos",
    desc: "Escaneo automatico de documentos de miles de paginas sin ningun esfuerzo.",
  },
  {
    title: "Soporte humano + IA 24/7",
    desc: "Siempre tendrás respuesta, ya sea de nuestro equipo o de nuestra IA.",
  },
];

export default function Features() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center py-20 px-4 font-sans text-gray-900">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-4xl font-extrabold text-blue-600 mb-10 text-center"
      >
        Todo lo que tu notaría necesita, en una sola plataforma
      </motion.h1>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="flex flex-col items-start text-left bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition group"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-700">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 