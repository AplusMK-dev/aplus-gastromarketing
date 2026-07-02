import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="bg-white py-24 md:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Huge Title & Indicator with Scroll Reveal */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-black uppercase">
              <span className="block overflow-hidden py-1">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  ¿QUÉ
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span 
                  className="block text-black"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.11 }}
                >
                  HACEMOS?
                </motion.span>
              </span>
            </h2>
          </div>

          {/* Right Column: Descriptions & Interactive Mint Button */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="text-gray-700 font-sans text-lg md:text-xl font-light leading-relaxed">
              <p>
                Ayudamos a <strong className="font-semibold text-black">productos, territorios y operadores</strong> a conectar con el sector HORECA a través de <strong className="font-semibold text-black">estrategias, activaciones, eventos y contenidos</strong> en un ecosistema propio de proyectos sectoriales.
              </p>
            </div>

            {/* Minor features / stats widgets to show design precision */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div>
                <span className="font-display font-bold text-3xl text-black">100%</span>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Gastro Especialización</p>
              </div>
              <div>
                <span className="font-display font-bold text-3xl text-black">+250</span>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Campañas Activas</p>
              </div>
            </div>

            {/* Action button matching the custom sage-mint background */}
            <div className="mt-4">
              <a
                href="#contacto"
                className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest rounded-none shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 group"
                id="btn-hablemos-quehacemos"
              >
                HABLEMOS
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
