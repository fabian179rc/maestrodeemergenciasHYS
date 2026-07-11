import React from "react";
import { motion } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative md:h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden bg-transparent py-6 md:py-3">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#E8A33D]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 md:mb-4 rounded-full border border-white/40 bg-[#4A2E29] text-white font-semibold tracking-[0.18em] uppercase text-[8px] md:text-xs"
        >
          ✨ SISTEMA MAESTRO DE EMERGENCIAS HyS
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="font-heading md:text-5xl font-extrabold text-[#241F1D] mb-4 md:mb-3 text-[26px]"
        >
          Si suena la alarma,{" "}
          <span className="text-[#C1272D]"> ¿tu equipo sabe qué hacer?</span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mb-6 md:mb-4 w-full max-w-[300px] sm:max-w-sm md:max-w-[300px]"
        >
          <img
            src={`${import.meta.env.BASE_URL}mockup.webp`}
            alt="Sistema Maestro de Emergencias HyS"
            width={672}
            height={672}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto aspect-square object-contain rounded-2xl"
          />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="md:text-lg text-slate-600 mb-6 md:mb-5 max-w-2xl mx-auto text-[12px] mt-8 md:mt-0"
        >
          Planes, roles, simulacros y evidencia documental listos para
          implementar desde el primer día.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-col items-center mt-14 md:mt-2"
        >
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#C1272D] hover:bg-[#A31F24] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#C1272D]/30 transition-colors mb-14 md:mb-4 text-[16px] md:text-lg"
          >
            🚀 ¡QUIERO MI SISTEMA DE EMERGENCIA!{" "}
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
            <span>
              <span aria-hidden="true">👥</span> +1.200 técnicos y profesionales
              HyS ya lo descargaron
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
              verificadas
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo
              Cero
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
