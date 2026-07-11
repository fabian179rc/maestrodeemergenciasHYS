import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
const bonuses = [
  {
    num: 1,
    title: "Plantillas Editables de Plan de Emergencias",
    desc: "Modelos editables en Word para industria, comercio, depósitos, oficinas y escuelas. Cargás los datos y el plan queda listo para presentar.",
    image: "sm-bono1.webp",
  },
  {
    num: 2,
    title: "Kit Maestro de Simulacros",
    desc: "Guiones de práctica, planilla de observación, acta e informe final. Todo para que el simulacro deje evidencia profesional.",
    image: "sm-bono2.webp",
  },
  {
    num: 3,
    title: "Banco de Procedimientos Operativos de Respuesta",
    desc: "Guiones listos ante incendio, derrame químico, accidente grave, emergencia médica y amenaza. Un procedimiento claro para cada rol.",
    image: "sm-bono3.webp",
  },
  {
    num: 4,
    title: "Checklist de Auditoría de Medios de Escape",
    desc: "Checklist para inspeccionar rutas de evacuación, luces, señalización y matafuegos. Detectá fallas antes que el inspector.",
    image: "sm-bono4.webp",
  },
  {
    num: 5,
    title: "Registro de Brigadistas y Capacitación Específica",
    desc: "Formatos para registrar designación, formación y prácticas de cada brigadista. Tu brigada, documentada y capacitada.",
    image: "sm-bono5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-2 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[#241F1D] text-3xl md:text-5xl leading-tight">
            Y además, recibís{" "}
            <span className="italic text-[#6B5F5A]">5 bonos gratis</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#F3E8DE] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-2 pb-2">
                <p className="text-slate-600 text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-6 py-4 bg-white/60 border border-amber-100 rounded-3xl">
          <Gift className="w-9 h-9 text-[#E8A33D] mx-auto mb-4" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6B5F5A] mb-2">
            Todo incluido en
          </p>
          <h3 className="font-heading font-bold text-[#241F1D] text-3xl md:text-4xl mb-3">
            el Sistema Maestro
          </h3>
          <p className="text-slate-600">
            Los 5 bonos son gratis con tu compra hoy.
          </p>
        </div>
      </div>
    </section>
  );
}
