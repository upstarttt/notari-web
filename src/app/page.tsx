'use client';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
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

const faqs = [
  {
    q: "¿Notari cumple con la ley antilavado?",
    a: "Sí, Notari está diseñado para cumplir con toda la normativa vigente y facilitar reportes automáticos.",
  },
  {
    q: "¿Puedo calcular el ISR directamente en la plataforma?",
    a: "¡Por supuesto! Incluimos una calculadora de ISR fácil de usar y siempre actualizada.",
  },
  {
    q: "¿Es seguro almacenar mis documentos en Notari?",
    a: "Tus documentos están protegidos con cifrado de nivel bancario y copias de seguridad automáticas.",
  },
  {
    q: "¿Puedo acceder desde cualquier dispositivo?",
    a: "Sí, Notari es 100% web y responsivo, puedes acceder desde cualquier lugar y dispositivo.",
  },
];

interface AnimatedCounterProps {
  to: number | string;
  duration?: number;
}

function AnimatedCounter({ to, duration = 1.5 }: AnimatedCounterProps) {
  const [value, setValue] = useState(to === 0 ? 0 : 0);
  useEffect(() => {
    if (to === 0) {
      setValue(0);
      return;
    }
    let start = 0;
    const isDecimal = typeof to === "number" && !Number.isInteger(to);
    const end = typeof to === "string" ? parseFloat(to.replace(/[^\d.]/g, "")) : to;
    const steps = 60; // número de frames
    let current = start;
    let frame = 0;
    const increment = (end - start) / steps;
    const timer = setInterval(() => {
      frame++;
      current += increment;
      if (frame >= steps) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(isDecimal ? parseFloat(current.toFixed(2)) : Math.round(current));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [to, duration]);
  if (to === 0) return <span>0</span>;
  if (typeof to === "number" && !Number.isInteger(to)) {
    return <span>{value.toFixed(2)}</span>;
  }
  return <span>{value.toLocaleString()}</span>;
}

export default function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Contador animado solo cuando es visible
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      {/* Hero principal */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-20 pt-28 text-center bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-600 drop-shadow-lg"
        >
          La IA que revoluciona tu notaría
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8"
        >
          Olvídate del caos, los papeles perdidos y los procesos lentos. Notari es la plataforma inteligente que digitaliza, organiza y automatiza cada paso en tu notaría, con seguridad y cumplimiento legal garantizados.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/jorgefloresrv/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition">Solicitar demo</a>
          <a href="/how" className="px-6 py-3 rounded-full bg-white border border-blue-600 text-blue-600 font-semibold text-lg shadow hover:bg-blue-50 transition">Ver cómo funciona</a>
        </div>
      </section>

      {/* Características tipo dashboard */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
            <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4-4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-700">Revisión legal con IA</h3>
              <p className="text-gray-600 text-sm">Detecta errores, omisiones o incoherencias en escrituras y documentos. Aprende y mejora con cada operación.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
            <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 10h8M8 14h6"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-700">Organización visual por etapas</h3>
              <p className="text-gray-600 text-sm">Cada expediente fluye por un tablero visual, desde la apertura hasta la firma, con estatus automáticos y alertas inteligentes.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-gray-100">
            <div className="flex-shrink-0 bg-blue-50 rounded-xl p-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10l9 6l9-6"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-700">Seguridad de grado bancario</h3>
              <p className="text-gray-600 text-sm">Encriptación AES-256, backups automáticos, historial de cambios y control de accesos.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios y CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="flex-1">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">¿Por qué elegir Notari?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Roles y permisos avanzados: cada quien accede solo a lo que debe ver.</li>
              <li>Auditorías automáticas y reportes claros.</li>
              <li>Gestión de citas y notificaciones inteligentes.</li>
              <li>Panel web 100% online, sin instalaciones.</li>
              <li>Personalización total para tu notaría.</li>
              <li>Soporte humano + IA 24/7.</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" animate={animate ? "visible" : "hidden"} className="flex-1 flex flex-col items-center">
            <a href="https://calendly.com/jorgefloresrv/30min" target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition">Solicita tu demo</a>
          </motion.div>
        </div>
      </section>

      {/* Sección Preguntas Frecuentes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="group bg-blue-50 rounded-xl p-4 shadow cursor-pointer">
              <summary className="font-semibold text-blue-700 text-lg flex items-center justify-between cursor-pointer group-open:text-blue-900 transition-all">
                ¿Qué es Notari?
                <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-2 text-gray-700 text-base">Es una plataforma inteligente para notarías. Organiza tus expedientes, automatiza procesos y revisa documentos con IA.</div>
            </details>
            <details className="group bg-blue-50 rounded-xl p-4 shadow cursor-pointer">
              <summary className="font-semibold text-blue-700 text-lg flex items-center justify-between cursor-pointer group-open:text-blue-900 transition-all">
                ¿La IA realmente ayuda?
                <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-2 text-gray-700 text-base">Sí. Detecta errores en escrituras, avisa sobre retrasos y te da control sin que tengas que pedirlo.</div>
            </details>
            <details className="group bg-blue-50 rounded-xl p-4 shadow cursor-pointer">
              <summary className="font-semibold text-blue-700 text-lg flex items-center justify-between cursor-pointer group-open:text-blue-900 transition-all">
                ¿Necesito instalar algo?
                <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-2 text-gray-700 text-base">Nada. Entras desde tu navegador y listo. Todo funciona en la nube, siempre actualizado.</div>
            </details>
            <details className="group bg-blue-50 rounded-xl p-4 shadow cursor-pointer">
              <summary className="font-semibold text-blue-700 text-lg flex items-center justify-between cursor-pointer group-open:text-blue-900 transition-all">
                ¿Qué tan segura es?
                <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-2 text-gray-700 text-base">Muy segura. Usa cifrado avanzado, historial de cambios y accesos por rol. Todo queda registrado.</div>
            </details>
            <details className="group bg-blue-50 rounded-xl p-4 shadow cursor-pointer">
              <summary className="font-semibold text-blue-700 text-lg flex items-center justify-between cursor-pointer group-open:text-blue-900 transition-all">
                ¿Puedo probarla antes de decidir?
                <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-2 text-gray-700 text-base">Claro. Tenemos una demo para que veas cómo funciona sin compromiso.</div>
            </details>
          </div>
        </div>
      </section>

      {/* Contador animado de logros */}
      <section className="py-16 px-4 bg-white" ref={counterRef}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-blue-700">
              <AnimatedCounter to={isInView ? 120 : 0} />+
            </div>
            <div className="text-gray-600 mt-2">Notarías digitalizadas</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-700">
              <AnimatedCounter to={isInView ? 15000 : 0} />+
            </div>
            <div className="text-gray-600 mt-2">Expedientes gestionados</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-700">
              <AnimatedCounter to={isInView ? 0 : 0} />
            </div>
            <div className="text-gray-600 mt-2">Fugas de información</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-700">
              <AnimatedCounter to={isInView ? 99.99 : 0} />%
            </div>
            <div className="text-gray-600 mt-2">Uptime garantizado</div>
          </div>
        </div>
      </section>

      {/* Testimonios y casos de éxito */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Historias de éxito con Notari</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <p className="text-gray-700 mb-4 italic">"Notari nos ayudó a reducir los errores en documentos y a tener todo bajo control. La IA realmente marca la diferencia."</p>
              <div className="text-blue-600 font-semibold">Usuario de Notari</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <p className="text-gray-700 mb-4 italic">"Ahora todo el equipo sabe en qué etapa está cada expediente. La organización y la seguridad son de otro nivel."</p>
              <div className="text-blue-600 font-semibold">Usuario de Notari</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <p className="text-gray-700 mb-4 italic">"El soporte 24/7 es real: siempre hay alguien (humano o IA) que responde y resuelve."</p>
              <div className="text-blue-600 font-semibold">Usuario de Notari</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Blog Destacado (ahora al final) */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">¿Quieres estar al día en temas legales y tecnología notarial?</h2>
          <p className="text-gray-700 mb-6">Visita nuestro blog para leer artículos profesionales, análisis de reformas y tendencias del sector.</p>
          <Link href="/blog" className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition">Ir al blog</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-gray-50 border-t border-gray-100 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Notari. Todos los derechos reservados.
      </footer>
    </div>
  );
}