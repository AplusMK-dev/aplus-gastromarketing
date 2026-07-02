import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="contact-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-xs bg-[#FAF9F6] text-black shadow-2xl border-t-4 border-[#B2D3C2]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
              <h3 className="font-display text-2xl font-bold tracking-tight uppercase">CONTACTA CON NOSOTROS</h3>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-black/50 hover:bg-black/5 hover:text-black transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="text-left space-y-2">
                <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                  No dudes en ponerte en contacto con nuestro equipo a través de cualquiera de nuestros canales oficiales:
                </p>
              </div>

              {/* Channels list */}
              <div className="space-y-5 text-left border-t border-b border-gray-100 py-6">
                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <Mail className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      EMAIL PRINCIPAL
                    </span>
                    <a
                      href="mailto:clientes@aplusmk.com"
                      className="font-sans text-base font-bold text-black border-b border-transparent hover:border-black transition-all"
                    >
                      clientes@aplusmk.com
                    </a>
                  </div>
                </div>

                {/* TELEFONO */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <Phone className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      TELÉFONO DE CONTACTO
                    </span>
                    <a
                      href="tel:+34917324866"
                      className="font-sans text-base font-bold text-black border-b border-transparent hover:border-black transition-all"
                    >
                      917 32 48 66
                    </a>
                  </div>
                </div>

                {/* DIRECCION */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <MapPin className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      NUESTRA OFICINA
                    </span>
                    <div className="font-sans text-base font-bold text-black leading-tight">
                      C/ Tarragona, 30 Local
                    </div>
                    <div className="font-sans text-xs text-gray-500">
                      28045 Madrid
                    </div>
                  </div>
                </div>

                {/* HORARIO */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-[#4a725e] mt-1">
                    <Clock className="w-4 h-4 text-[#4a725e]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                      HORARIO DE ATENCIÓN
                    </span>
                    <div className="space-y-0.5">
                      <div className="font-sans text-xs text-gray-700 font-semibold flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#4a725e]" />
                        Lunes a jueves: 9:00 - 18:00
                      </div>
                      <div className="font-sans text-xs text-gray-700 font-semibold flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#4a725e]" />
                        Viernes: 9:00 - 14:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer action */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={onClose}
                  className="btn-curtain btn-curtain-black px-6 py-2.5 text-xs font-mono tracking-wider font-semibold border-b-2 border-black"
                >
                  ENTENDIDO
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
