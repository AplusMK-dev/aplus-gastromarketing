import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data';

export default function Servicios() {
  return (
    <section id="servicios" className="bg-[#FAF9F6] py-24 md:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-gray-400 tracking-[0.3em] block uppercase mb-3">
            [ S E R V I C I O S ]
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Persistent statement with elegant staggered entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-8"
          >
            <h3 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight text-black uppercase">
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block animate-slide-up-custom"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  ¿Por qué nuestro
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.11 }}
                >
                  ecosistema marca
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="block text-black"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                >
                  la diferencia?
                </motion.span>
              </span>
            </h3>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-sans text-gray-600 font-light leading-relaxed"
            >
              Somos un equipo multidisciplinar que entiende la gastronomía como un motor de desarrollo definitivo, tanto económico como social. Diseñamos las palancas perfectas para que los proyectos trasciendan.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <a
                href="#contacto"
                className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
                id="btn-hablemos-servicios"
              >
                HABLEMOS
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Beautiful stack of services */}
          <motion.div 
            className="lg:col-span-7 space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group border-b border-gray-200 pb-12 flex flex-col gap-6"
                id={`service-${service.id}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 }
                  }
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Column for Image (hover scaling, rounded cards) */}
                <div className="overflow-hidden rounded-none aspect-[1.8] w-full bg-gray-100 relative">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Column for Text Descriptions */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs font-bold text-[#86a695] tracking-[0.2em]">
                    {service.num} . CLAVE
                  </span>
                  <h4 className="font-display font-black text-xl md:text-2xl tracking-tight text-gray-950 uppercase leading-snug group-hover:text-[#4a6b5a] transition-colors">
                    {service.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-[#4a6b5a] transition-colors">
                    <span>Saber más</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
