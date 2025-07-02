'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    label: "Home",
    icon: (
      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 10.5V19a1 1 0 0 0 1 1h3.5a.5.5 0 0 0 .5-.5V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.5a.5.5 0 0 0 .5.5H19a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-.293-.707l-6-6a1 1 0 0 0-1.414 0l-6 6A1 1 0 0 0 4 10.5z"/>
      </svg>
    ),
    submenu: [
      { label: "Página principal", href: "/" },
      { label: "Equipo", href: "/equipo" },
      { label: "Recursos gratuitos", href: "/recursos" },
    ],
  },
  {
    label: "Conocer plataforma",
    icon: (
      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    submenu: [
      { label: "¿Cómo funciona?", href: "/how" },
      { label: "Características", href: "/features" },
      { label: "Cumplimiento", href: "/legal" },
    ],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="w-full flex items-center justify-between py-6 px-8 border-b border-gray-100 bg-white z-10 sticky top-0 shadow-sm">
      <Link href="/" className="flex items-center gap-1 select-none">
        <img src="/Logo.png" alt="Notari logo" className="h-14 w-auto ml-2" />
      </Link>
      <nav className="hidden md:flex gap-8 text-base font-medium relative">
        {menuItems.map((item) => (
          <div key={item.label} className="relative group">
            <button
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-blue-50 transition"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
              onFocus={() => setOpenMenu(item.label)}
              onBlur={() => setOpenMenu(null)}
              type="button"
            >
              {item.icon}
              <span className="text-black group-hover:text-blue-600 transition">{item.label}</span>
              <svg className="w-4 h-4 ml-1 text-blue-400 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </button>
            <AnimatePresence>
              {openMenu === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden"
                >
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-center px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition text-base"
                      onClick={() => setOpenMenu(null)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="flex items-center gap-8">
          <Link href="/blog" className="flex items-center gap-1 transition text-black hover:text-blue-600">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5"/>
              <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V6"/>
              <path d="M8 6h8"/>
            </svg>
            Blog
          </Link>
          <Link href="/contact" className="flex items-center gap-1 transition text-black hover:text-blue-600">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
            Contacto
          </Link>
        </div>
      </nav>
      <div className="flex items-center gap-3">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          href="https://calendly.com/jorgefloresrv/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Solicitar demo
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          href="https://notarimx.replit.app/auth"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-white border border-blue-600 text-blue-600 font-semibold shadow hover:bg-blue-50 transition"
        >
          Iniciar sesión en plataforma
        </motion.a>
      </div>
    </header>
  );
} 