"use client";

export default function Equipo() {
  const miembros = [
    {
      nombre: "Jorge Flores",
      rol: "Co-fundador",
      carrera: "Administración y Finanzas",
      universidad: "Estudiante de la Universidad Panamericana de Guadalajara"
    },
    {
      nombre: "Diego Corona",
      rol: "Co-fundador",
      carrera: "Licenciatura en Derecho",
      universidad: "Estudiante de la Universidad Panamericana de Guadalajara"
    },
  ];

  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center py-20 px-4 font-sans text-gray-900">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">Nuestro equipo</h1>
      <p className="max-w-2xl text-center text-gray-700 mb-10 text-lg">
        Somos un equipo joven, apasionado y con expertise en tecnología de alto nivel, innovación y transformación digital. Nuestra visión es revolucionar el sector notarial en México, combinando el conocimiento académico de la Universidad Panamericana de Guadalajara con una profunda comprensión de las necesidades legales y administrativas.<br /><br />
        Gracias al conocimiento de Diego en derecho y en la actividad notarial, y la experiencia de Jorge en inteligencia artificial, logramos crear la mejor plataforma de gestión notarial en México. Notari es la plataforma número uno, fundada a principios de 2024, y desde entonces nos mantenemos a la vanguardia con actualizaciones semanales y nuevos features constantes.<br /><br />
        Cada día hay avances en inteligencia artificial y nosotros somos los primeros en llevarlos a la industria notarial. Estamos en constante crecimiento y evolución, siempre de la mano de nuestros clientes, quienes son nuestra prioridad y con quienes construimos la plataforma desde el inicio. Su retroalimentación y necesidades son el motor que impulsa cada mejora y cada innovación en Notari.
      </p>
      <div className="max-w-2xl w-full grid md:grid-cols-2 gap-10">
        {miembros.map((m) => (
          <div key={m.nombre} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-blue-700 mb-1">{m.nombre}</h3>
            <div className="text-blue-500 font-semibold mb-2">{m.rol}</div>
            <div className="text-gray-700 mb-1">{m.carrera}</div>
            <div className="text-gray-500 text-sm">{m.universidad}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 