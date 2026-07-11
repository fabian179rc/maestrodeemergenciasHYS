import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  { emoji: "🗺️", label: "Del Plan de Papel al Sistema Operativo" },
  { emoji: "📐", label: "Análisis de Amenazas y Vulnerabilidades" },
  { emoji: "📅", label: "Diseño de Medios de Escape" },
  { emoji: "⚠️", label: "Dotación y Control de Equipos contra Incendio" },
  { emoji: "✅", label: "Estructura de Roles y Brigadas" },
  { emoji: "🔍", label: "Redacción del Plan de Evacuación" },
  { emoji: "📸", label: "Procedimientos Operativos de Respuesta (POR)" },
  { emoji: "📝", label: "Sistema Profesional de Simulacros" },
  { emoji: "🛠️", label: "Capacitación de Brigadas y Personal" },
  { emoji: "📊", label: "Primeros Auxilios Integrados al Sistema" },
  { emoji: "🏭", label: "Comunicación de Crisis" },
  { emoji: "🏆", label: "Mejora Continua y Revisión del Sistema" },
];

const temas = [
  { emoji: "📋", label: "Análisis de amenazas" },
  { emoji: "🔍", label: "Diseño de evacuación" },
  { emoji: "⚠️", label: "Roles y brigadas" },
  { emoji: "📝", label: "Plan de emergencias" },
  { emoji: "📊", label: "Procedimientos de respuesta" },
  { emoji: "✅", label: "Simulacros con evidencia" },
  { emoji: "👷", label: "Capacitación de brigadistas" },
  { emoji: "🏗️", label: "Equipos contra incendio" },
  { emoji: "🔥", label: "Respuesta ante incendios" },
  { emoji: "🧯", label: "Primeros auxilios integrados" },
  { emoji: "📈", label: "Comunicación de crisis" },
  { emoji: "➕", label: "Y mucho más..." },
];

const rubros = [
  { emoji: "🏭", label: "Industrias" },
  { emoji: "🏬", label: "Comercios" },
  { emoji: "📦", label: "Depósitos" },
  { emoji: "🏢", label: "Oficinas" },
  { emoji: "🏫", label: "Establecimientos Educativos" },
];

export function ContentSection() {
  return (
    <section className="py-2 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A2E29] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E8A33D]" />
            ¿Qué contiene?
          </span>
          <h2 className="font-heading font-bold text-[#241F1D] text-3xl md:text-5xl leading-tight mb-4">
            📦 12{" "}
            <span className="italic text-[#6B5F5A]">Módulos Incluidos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-1.5 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm"
            >
              <span className="text-base flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <span className="font-semibold text-[#241F1D] text-xs md:text-sm leading-tight">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#241F1D] text-xl md:text-2xl mb-4 text-center">
            🎯 Cubre los Procesos Más Importantes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {temas.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="font-semibold text-[#241F1D] text-sm md:text-[15px] leading-tight">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
