import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Cada Auditoría Empieza Desde Cero',
  desc: 'Cada cliente requiere volver a preparar checklists, formularios, informes y documentación. Nunca sentís que tenés un método realmente organizado.'
},
{
  emoji: '😩',
  title: 'El Miedo a Olvidarte un Hallazgo Importante',
  desc: 'Sabés que una observación que no registraste hoy puede convertirse en un problema mañana.'
},
{
  emoji: '⚖️',
  title: 'La Responsabilidad Técnica Que Siempre Está Presente',
  desc: 'No alcanza con detectar un riesgo. Necesitás documentarlo correctamente, clasificarlo y respaldar cada observación con evidencia.'
},
{
  emoji: '⏱️',
  title: 'Horas Perdidas Armando Informes',
  desc: 'Terminás la recorrida en una hora… pero después pasás toda la tarde redactando informes y organizando fotografías.'
}];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-4 text-[#2f3a2c] uppercase">
            ¿Te reconocés en esto?
          </h2>
          <p className="text-xl md:text-2xl font-heading italic text-[#8a6a4f] mb-6">
            ¿Las auditorías te llevan más tiempo del que deberían?
          </p>
          <p className="text-lg text-[#4b5347] leading-relaxed max-w-2xl mx-auto">
            Si sos Técnico o Licenciado en Higiene y Seguridad, probablemente vivís alguna de estas situaciones:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {situations.map((item, i) =>
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
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6ddc7]">

              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-[#2f3a2c] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4b5347] leading-relaxed text-[16px]">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}