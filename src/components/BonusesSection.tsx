import React from 'react';
import { motion } from 'framer-motion';
const bonuses = [
{
  num: 1,
  title: 'Kit Express de Auditoría en 30 Minutos',
  desc: 'Todo lo necesario para preparar, ejecutar y cerrar una auditoría profesional en menos de 30 minutos. Incluye una guía paso a paso, checklist de recorrido, mapa de prioridades, estructura de trabajo y una versión rápida para utilizar desde el celular durante cada visita.',
  image: "b1.webp"

},
{
  num: 2,
  title: 'Checklist de Primera Visita al Cliente HyS',
  desc: 'No vuelvas a olvidar información importante durante el primer relevamiento. Este checklist reúne todos los puntos críticos que deberías verificar, registrar y documentar para comenzar cada cliente con orden, criterio técnico y una imagen mucho más profesional.',
  image: "b2.webp"

},
{
  num: 3,
  title: 'Banco de Más de 150 Frases Técnicas para Informes HyS',
  desc: 'Más de 150 observaciones, recomendaciones y conclusiones redactadas profesionalmente para adaptar a cada auditoría. Ahorrá horas escribiendo informes y presentá documentos con un lenguaje técnico claro, objetivo y consistente.',
  image: "b3.webp"

},
{
  num: 4,
  title: 'Mapa Visual para Clasificar Desvíos y Hallazgos',
  desc: 'Aprendé un método simple para diferenciar observaciones, oportunidades de mejora, no conformidades y desvíos críticos. Incluye criterios de clasificación, ejemplos prácticos y una guía visual para priorizar acciones correctivas con mayor seguridad.',
  image: "b4.webp"

},
{
  num: 5,
  title: 'Método "Informe Profesional en 7 Pasos"',
  desc: 'Una metodología práctica para transformar toda la información relevada durante la auditoría en un informe claro, ordenado y profesional. Incluye recomendaciones de estructura, organización de evidencias y una lista de verificación final antes de entregar el documento al cliente.',
  image: "b5.webp"

}];

export function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            🎁 5 BONOS INCLUIDOS
          </span>
          <h2 className="font-heading font-semibold text-[#2f3a2c] text-3xl md:text-5xl leading-tight">
            Y además, recibís{' '}
            <span className="italic text-[#8a6a4f]">
              5 bonos exclusivos
            </span>{' '}
            para implementar el sistema mucho más rápido.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((b, i) =>
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
            className="bg-white border border-[#e6ddc7] rounded-2xl overflow-hidden shadow-sm">

              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover object-top" />
                <span className="absolute top-3 left-3 bg-[#b85c43] text-white font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#4a7a4a] text-white font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="p-6">
                <p className="text-[#4b5347] text-[15px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-10 bg-white border border-[#e6ddc7] rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-3">🎁</div>
          <p className="text-sm font-bold tracking-[0.1em] uppercase text-[#8a6a4f] mb-2">
            Todo incluido en
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#2f3a2c] mb-2">
            el Sistema Maestro
          </h3>
          <p className="text-[#4b5347]">
            Los 5 bonos son completamente GRATIS con tu compra de hoy.
          </p>
        </div>
      </div>
    </section>);

}
