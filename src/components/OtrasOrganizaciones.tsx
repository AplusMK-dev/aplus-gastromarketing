import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PARTNERS_ACCORDION = [
  {
    title: 'FOOD SERVICE INSTITUTE',
    description: 'Organización sin ánimo de lucro que agrupa a directivos y propietarios de empresas de restauración, proveedoras, distribuidoras y operadoras para compartir conocimiento, tendencias e informes técnicos.',
  },
  {
    title: 'AIDABE',
    description: 'Una comunidad orientada a promover la excelencia, la ética y el desarrollo profesional en el ámbito de alimentos y bebidas.',
  },
  {
    title: 'CLUB CLAVE F&B',
    description: 'Club de referentes del F&B en España, Portugal y LATAM, orientado a conexiones, iniciativas y mejores prácticas en la gestión del Food & Beverage.',
  },
  {
    title: 'ADECOD',
    description: 'Profesionales centrados en la innovación y la excelencia en compras y logística para Hospitality, Foodservice y Retail.',
  },
  {
    title: 'FEDIS HORECA',
    description: 'La Federación Española de Empresas de Distribución a Hostelería y Restauración, una red clave para entender el pulso de la distribución al sector.',
  },
  {
    title: 'MARCAS DE RESTAURACIÓN',
    description: 'La asociación empresarial de la restauración de marca, que representa a más de 180 marcas del sector.',
  }
];

function LogoPartner({ index, isLarge }: { index: number; isLarge: boolean }) {
  const sizeClass = isLarge ? "w-10 h-10" : "w-5 h-5";
  const logos = [
    // FOOD SERVICE INSTITUTE
    <svg className={`${sizeClass} text-black transition-all duration-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" referrerPolicy="no-referrer">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="5" className="fill-black/10" />
    </svg>,
    // AIDABE
    <svg className={`${sizeClass} text-black transition-all duration-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" referrerPolicy="no-referrer">
      <path d="M6 18V6l6 12V6l6 12V6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="12" r="2" className="fill-black/5" />
      <circle cx="18" cy="12" r="2" className="fill-black/5" />
    </svg>,
    // CLUB CLAVE F&B
    <svg className={`${sizeClass} text-black transition-all duration-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" referrerPolicy="no-referrer">
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h8M16 12v3M20 12v3" strokeLinecap="round" />
    </svg>,
    // ADECOD
    <svg className={`${sizeClass} text-black transition-all duration-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" referrerPolicy="no-referrer">
      <path d="M3 21h18M5 21V8l7-5 7 5v13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h6" strokeLinecap="round" />
    </svg>,
    // FEDIS HORECA
    <svg className={`${sizeClass} text-black transition-all duration-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" referrerPolicy="no-referrer">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>,
    // MARCAS DE RESTAURACIÓN
    <svg className={`${sizeClass} transition-all duration-300`} viewBox="0 0 100 100" fill="none" referrerPolicy="no-referrer">
      {/* Red square on the left */}
      <rect x="15" y="36" width="20" height="20" fill="#E30613" />
      {/* MDR Bold Text */}
      <text x="39" y="55" fill="#13263C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="-0.5">MDR</text>
      {/* Subtitle */}
      <text x="15" y="65" fill="#E30613" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.3" letterSpacing="0.4">MARCAS DE RESTAURACIÓN</text>
    </svg>
  ];
  return logos[index] || logos[0];
}

export default function Colaboradores() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="colaboradores" className="bg-[#B2D3C2] py-24 md:py-32 border-b border-black">
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
          <span className="font-mono text-xs text-black/60 tracking-[0.3em] block uppercase mb-3">
            [ C O L A B O R A D O R E S ]
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading, description, white Hablemos button with elegant stagger */}
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
            className="lg:col-span-5 flex flex-col items-start gap-6 lg:sticky lg:top-24"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-display font-black text-4xl md:text-5xl tracking-normal text-black uppercase leading-tight"
            >
              OTRAS ORGANIZACIONES DE NUESTRO ECOSISTEMA
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-sans text-black/85 text-base md:text-lg font-light leading-relaxed"
            >
              Además de nuestras plataformas más visibles, Aplus se conecta con otras organizaciones y comunidades que amplían el alcance del conocimiento, la interlocución y las oportunidades de activación empresarial directa.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="mt-4"
            >
              <a
                href="#contacto"
                className="btn-curtain btn-curtain-white inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
                id="btn-hablemos-colaboradores"
              >
                HABLEMOS
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Accordion list aligned vertically */}
          <div className="lg:col-span-7 w-full">
            <div className="flex flex-col gap-3.5 w-full" id="colaboradores-capsules-grid">
              {PARTNERS_ACCORDION.map((partner, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`border rounded-none transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-transparent border-black' 
                        : 'bg-transparent border-black/30 hover:border-black/60'
                    }`}
                    id={`capsule-${index}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-start p-5 text-left font-display text-black transition-colors focus:outline-none focus:ring-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`rounded-full flex-shrink-0 bg-black/[0.04] border border-black/10 flex items-center justify-center transition-all duration-300 ${
                          isOpen ? 'w-20 h-20' : 'w-10 h-10'
                        }`}>
                          <LogoPartner index={index} isLarge={isOpen} />
                        </div>
                        <span className="font-display font-extrabold text-xs md:text-sm tracking-[0.14em] break-words">
                          {partner.title}
                        </span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-black/10">
                            <p className="font-sans text-sm md:text-base text-black/80 font-normal leading-relaxed">
                              {partner.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
