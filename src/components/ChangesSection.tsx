import React from 'react';
import { motion } from 'framer-motion';
const changes = [
{
  emoji: '📋',
  title: 'Auditorías Mucho Más Organizadas',
  desc: 'Cada auditoría sigue el mismo proceso profesional. Sabés exactamente qué hacer antes, durante y después de cada visita, evitando olvidos y mejorando la calidad de tu trabajo.'
},
{
  emoji: '📑',
  title: 'Informes Técnicos con Mayor Respaldo',
  desc: 'Cada observación queda correctamente documentada, con evidencias claras, criterios técnicos y recomendaciones profesionales que generan mayor confianza frente al cliente.'
},
{
  emoji: '📈',
  title: 'Seguimiento Real de las Acciones Correctivas',
  desc: 'Dejá de entregar informes que terminan archivados. Vas a poder controlar responsables, plazos y avances hasta el cierre definitivo de cada desvío detectado.'
},
{
  emoji: '🛡️',
  title: 'Profesionalismo Visible',
  desc: 'Cada auditoría refleja organización, criterio técnico y una metodología de trabajo consistente. Tus clientes perciben un servicio mucho más completo, profesional y confiable.'
}];

export function ChangesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#2f3a2c] pt-[60px] pb-[60px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full border border-white/20 bg-white/10 text-[#e8c9a3] font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            Lo Que Va a Cambiar
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto">
            Lo que va a cambiar en tu forma de realizar auditorías{' '}
            <span className="italic text-[#c8d6bd]">
              desde la primera semana.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {changes.map((c, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl">

              <div className="text-5xl mb-6">{c.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {c.title}
              </h3>
              <p className="text-[#c8d6bd] leading-relaxed text-lg">
                {c.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
