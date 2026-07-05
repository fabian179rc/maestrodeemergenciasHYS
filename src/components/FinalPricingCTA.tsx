import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function FinalPricingCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#f4efe2] text-center relative overflow-hidden pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px] relative z-10">
        <span className="inline-block px-6 py-2.5 mb-8 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
          Última Oportunidad
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold font-heading text-[#2f3a2c] mb-6 leading-tight max-w-3xl mx-auto">
          Tus auditorías merecen un sistema profesional.
        </h2>
        <p className="text-lg md:text-xl text-[#4b5347] mb-12 max-w-2xl mx-auto">
          Dejá de improvisar recorridas, informes y seguimientos. Implementá un método claro, repetible y profesional que te permita ahorrar tiempo, organizar mejor tu trabajo y brindar un servicio con mayor respaldo técnico.
        </p>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl max-w-xl mx-auto mb-8">
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#8a6a4f] mb-2">
            Kit Completo
          </p>
          <h3 className="font-bold text-[#2f3a2c] mb-4 text-[16px] md:text-[18px]">
            Sistema Maestro de Auditorías HyS + 5 Bonos GRATIS
          </h3>
          <div className="text-[#8a8f7f] font-medium line-through mb-2 text-lg">
            $74.940 ARS
          </div>
          <div className="text-5xl md:text-6xl font-extrabold text-[#b85c43] mb-8">
            $19.990 ARS
          </div>

          <motion.a
            href="https://sistema-maestro-de-auditorias-hys.impultienda.ar/checkout"
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="flex items-center justify-center gap-3 w-full bg-[#b85c43] hover:bg-[#a34f38] text-white font-extrabold text-lg md:text-xl px-8 py-6 rounded-full shadow-lg shadow-[#b85c43]/30 transition-colors mb-6">

            <span className="text-center">
              🚀 SÍ, QUIERO MI SISTEMA MAESTRO HOY
            </span>
            <ArrowRight className="w-6 h-6 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm md:text-base text-[#4b5347] font-semibold">
          <span>
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas verificadas
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#c1c8b6]">
            |
          </span>
          <span>
            <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo Cero
          </span>
        </div>
      </div>
    </section>);

}
