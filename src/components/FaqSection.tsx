import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es un producto físico o digital?',
  a: 'Es un sistema 100% digital. Recibirás acceso inmediato a todos los bloques, materiales, plantillas y bonos para descargar, editar e imprimir todas las veces que necesites.'
},
{
  q: '¿Necesito experiencia realizando auditorías?',
  a: 'No. El sistema fue desarrollado tanto para profesionales con experiencia como para Técnicos y Licenciados que recién comienzan a brindar servicios de auditoría.'
},
{
  q: '¿Sirve para cualquier provincia de Argentina?',
  a: 'Sí. El contenido fue pensado para profesionales que trabajan en Argentina y puede adaptarse fácilmente a distintos tipos de empresas y actividades.'
},
{
  q: '¿Puedo adaptar los documentos a mis clientes?',
  a: 'Sí. Todo el material fue diseñado para editarse fácilmente y personalizarse según cada empresa.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'Inmediatamente después de confirmar tu compra recibirás un correo electrónico con acceso completo al Sistema Maestro y todos sus bonos.'
},
{
  q: '¿Qué pasa si ya tengo algunos modelos de auditoría?',
  a: 'Este sistema no busca reemplazar tu experiencia. Su objetivo es ayudarte a trabajar con un método mucho más organizado, profesional y eficiente, incorporando herramientas listas para utilizar desde el primer día.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#2f3a2c] leading-tight">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-[#e6ddc7]">

                <button
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#4a553f] text-white' : 'bg-[#4a553f]/10 text-[#4a553f]'}`}
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-5 h-5" /> :

                    <Plus className="w-5 h-5" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-8 -mt-2 text-[#4b5347] leading-relaxed text-[16px] md:text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
