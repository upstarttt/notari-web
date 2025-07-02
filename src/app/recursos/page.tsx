import React from "react";

export default function RecursosGratuitos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center py-20 px-4 font-sans text-gray-900">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Recursos gratuitos para notarías</h1>
      <p className="text-gray-700 mb-8 text-lg text-center max-w-2xl">Descarga nuestras guías y checklists para digitalizar tu notaría y cumplir con la ley. Todo el material es gratuito y actualizado.</p>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl mb-10">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Guía rápida para digitalizar tu notaría</h3>
          <p className="text-gray-600 mb-4">Aprende los pasos clave para transformar tu despacho en una notaría digital, segura y eficiente.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Checklist de cumplimiento legal 2024</h3>
          <p className="text-gray-600 mb-4">Verifica que tu notaría cumpla con todos los requisitos legales y evita sanciones.</p>
        </div>
      </div>
      <form className="w-full max-w-md mx-auto flex flex-col gap-4">
        <input type="email" placeholder="Tu correo electrónico" className="px-4 py-3 rounded bg-white border border-gray-200 focus:border-blue-600 outline-none" required />
        <button type="submit" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition">Descargar recursos</button>
      </form>
    </main>
  );
} 