import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-white/70 py-16 border-t border-white/10 pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px] text-center">
        <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase mb-8">
          🛡️ SISTEMA MAESTRO DE AUDITORÍAS HyS
        </div>

        <p className="text-sm max-w-2xl mx-auto mb-10 leading-relaxed text-white/50">
          Este producto constituye una herramienta de organización, planificación y documentación para profesionales de Higiene y Seguridad. No reemplaza la normativa vigente, el criterio técnico profesional ni el asesoramiento legal específico cuando corresponda.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-10 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        <div className="text-xs text-white/40 font-medium">
          <p>
            © 2026 Sistema Maestro de Auditorías HyS — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}