import React from 'react';
import { motion } from 'framer-motion';
const bloques = [
{
  num: '1',
  emoji: '📘',
  title: 'Método Maestro de Auditorías HyS',
  desc: 'Aprendé el circuito completo para planificar, ejecutar, documentar y cerrar auditorías utilizando un sistema profesional paso a paso.'
},
{
  num: '2',
  emoji: '📋',
  title: 'Planificación Inteligente y Preparación de Auditorías',
  desc: 'Cronogramas, planificación, objetivos, alcance, frecuencia y criterios de priorización para comenzar cada auditoría con un método claro.'
},
{
  num: '3',
  emoji: '🔍',
  title: 'Auditoría en Campo',
  desc: 'Checklists, formularios de relevamiento, actas de inspección y registro profesional de evidencias para no olvidar ningún detalle durante la visita.'
},
{
  num: '4',
  emoji: '📸',
  title: 'Hallazgos, Evidencias e Informes Técnicos',
  desc: 'Cómo documentar observaciones, clasificar desvíos, elaborar informes profesionales y respaldar cada recomendación con evidencia objetiva.'
},
{
  num: '5',
  emoji: '📈',
  title: 'Acciones Correctivas y Seguimiento',
  desc: 'Transformá cada hallazgo en un plan de acción con responsables, prioridades, plazos y seguimiento hasta el cierre definitivo.'
},
{
  num: '6',
  emoji: '⚙️',
  title: 'Implementación del Sistema con Cada Cliente',
  desc: 'Adaptá el método a industrias, comercios, obras y empresas de servicios para mantener una forma de trabajo organizada durante todo el año.'
}];

export function BloquesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            6 Bloques Incluidos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#2f3a2c] leading-tight">
            Todo el Sistema Maestro organizado en{' '}
            <span className="italic text-[#8a6a4f]">seis bloques</span> listos
            para implementar.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloques.map((b, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.08
            }}
            className="flex flex-col bg-white border border-[#e6ddc7] rounded-2xl p-8 shadow-sm">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#4a553f]/10 flex items-center justify-center text-2xl">
                  {b.emoji}
                </div>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white bg-[#4a553f] px-3 py-1.5 rounded-lg">
                  Bloque {b.num}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#2f3a2c] text-xl mb-3 leading-snug">
                {b.title}
              </h3>
              <p className="text-[#4b5347] leading-relaxed text-[15px]">
                {b.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
