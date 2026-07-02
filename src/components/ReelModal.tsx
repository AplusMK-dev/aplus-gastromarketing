import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReelModal({ isOpen, onClose }: ReelModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="reel-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-crosshair"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative w-full max-w-4xl bg-[#121212] rounded-xs overflow-hidden shadow-2xl border border-white/10 z-10"
          >
            {/* Close button inside modal header */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="bg-black/60 hover:bg-black text-white rounded-full p-2.5 transition-all outline-hidden border border-white/20"
                aria-label="Cerrar Video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black relative">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0" // Fallback but we can use a beautiful gastronomy presentation embed or direct high quality stock video
                // Let's use a beautiful free premium gastronomy cooking video that auto-plays
                className="w-full h-full border-0 absolute inset-0"
                title="Aplus Gastromarketing Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background-color: #000; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                      </style>
                    </head>
                    <body>
                      <video autoplay loop controls src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02af00bf0ff356bc0a7364b423f03b5&profile_id=165&oauth2_token_id=57447761"></video>
                    </body>
                  </html>
                `}
              />
            </div>

            {/* Video description footer bar */}
            <div className="bg-black/80 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-display font-medium text-lg text-[#FAF9F6]">APLUS GASTROMARKETING REEL</h4>
                <p className="text-xs text-[#B2D3C2] font-mono tracking-wider uppercase">Somos lo que cocinamos. Vivimos el marketing gastronómico.</p>
              </div>
              <p className="text-xs text-white/50 max-w-sm sm:text-right">
                Visuales grabados en restaurantes del ecosistema FACYRE y Gastro Leaders Forum.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
