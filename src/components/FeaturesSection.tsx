import React from 'react';
import { motion } from 'framer-motion';
const features = [
{
  icon: '✅',
  title: 'Auditorías Mucho Más Profesionales',
  desc: 'Realizá auditorías con un proceso claro, ordenado y repetible, transmitiendo mayor confianza frente a cada cliente.'
},
{
  icon: '✅',
  title: 'Informes Técnicos con Mayor Respaldo',
  desc: 'Documentá hallazgos, evidencias y acciones correctivas utilizando criterios técnicos claros y defendibles.'
},
{
  icon: '✅',
  title: 'Seguimiento Real de Cada Desvío',
  desc: 'Convertí cada observación en un plan de acción concreto y controlá su cumplimiento hasta el cierre.'
},
{
  icon: '✅',
  title: 'Más Tiempo Para Atender Empresas',
  desc: 'Dejá de improvisar formularios e informes y dedicá ese tiempo a conseguir nuevos clientes y hacer crecer tu consultora.'
}];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#2f3a2c] uppercase">
            ¿Qué vas a lograr con este sistema?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 8
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
            className="flex items-start gap-4 bg-white p-8 rounded-2xl border border-[#e6ddc7]">

              <div className="text-3xl flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-[#2f3a2c] mb-2 text-xl">
                  {feature.title}
                </h3>
                <p className="text-[#4b5347] leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
