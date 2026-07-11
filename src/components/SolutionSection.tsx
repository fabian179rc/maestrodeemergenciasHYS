import React from "react";
import { motion } from "framer-motion";
export function SolutionSection() {
  return (
    <section className=" md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block px-6 py-2.5 mb-2 rounded-full border border-white/40 bg-[#4A2E29] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            UN SISTEMA TODO EN UNO
          </span>
          <h2 className="font-heading md:text-5xl font-bold text-[#241F1D] mb-6 max-w-3xl mx-auto text-[24px]">
            El único sistema que convierte tu plan de emergencias de documento
            estático en{" "}
            <span className="text-[#6B5F5A] italic">
              respuesta operativa real
            </span>
          </h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-6"
        >
          <img
            src={`${import.meta.env.BASE_URL}mockup.webp`}
            alt="Sistema Maestro de Emergencias HyS"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-w-2xl md:max-w-sm mx-auto rounded-2xl shadow-xl shadow-navy/5 border border-slate-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
