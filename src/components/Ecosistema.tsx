import { motion } from 'motion/react';
import { ecosystemItems } from '../data';

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="bg-white py-24 md:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Label, Title, and Description */}
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
          className="mb-12 text-center flex flex-col items-center"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-mono text-xs text-gray-400 tracking-[0.3em] block uppercase mb-11"
          >
            [ E C O S I S T E M A ]
          </motion.span>
          
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-display font-black text-5xl md:text-6xl tracking-tight uppercase leading-[1.05] text-black mb-6 max-w-2xl"
          >
            ECOSISTEMA APLUS
          </motion.h2>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-sans text-gray-600 font-light text-base md:text-lg max-w-3xl leading-relaxed"
          >
            Aplus Gastromarketing no trabaja desde fuera del sector, forma parte de él. Gestionamos, impulsamos y colaboramos en proyectos que nos conectan con la realidad de la gastronomía, la hostelería y el foodservice.
          </motion.p>
        </motion.div>

        {/* 5-Card Grid Layout with custom close-up textures */}
        <motion.div 
          className="flex flex-wrap gap-8 mt-16 justify-center" 
          id="ecosystem-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-320px 0px 0px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {ecosystemItems.map((item, index) => {
            // Calculate starting offsets relative to target (0,0) so they all start concentrated at the center of the wrap layout
            const getInitialOffset = (i: number) => {
              switch (i) {
                case 0: // Top Left
                  return { x: 180, y: 120 };
                case 1: // Top Center (stays in mid-X, starts lower)
                  return { x: 0, y: 120 };
                case 2: // Top Right
                  return { x: -180, y: 120 };
                case 3: // Bottom Left (centered wrap row, starts shifted right and up)
                  return { x: 90, y: -120 };
                case 4: // Bottom Right (centered wrap row, starts shifted left and up)
                  return { x: -90, y: -120 };
                default:
                  return { x: 0, y: 0 };
              }
            };

            const offset = getInitialOffset(index);

            return (
              <motion.div
                key={item.id}
                className="group bg-transparent rounded-none overflow-hidden flex flex-col h-full flex-grow flex-shrink-0 basis-full sm:basis-[calc(50%-16px)] lg:basis-[calc(33.333%-22px)] min-w-[280px]"
                id={`eco-card-${item.id}`}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    x: offset.x, 
                    y: offset.y, 
                    scale: 0.9 
                  },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 2.0, 
                      ease: [0.05, 0.95, 0.05, 1] 
                    }
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.015,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.12)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                {/* Image Close-up texturized */}
                <div className="relative aspect-[1.3] w-full overflow-hidden bg-gray-50">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300" />
                  
                  {/* Premium black hover overlay with sliding explanatory text */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="font-sans text-xs sm:text-sm md:text-[15px] text-emerald-50/90 font-normal leading-relaxed max-w-[95%] transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75 overflow-y-auto custom-hover-scrollbar">
                      {item.extendedText}
                    </p>
                  </div>
                </div>

                {/* Card Descriptions */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4 bg-transparent">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#86a695] font-black block mb-2">
                      {item.label}
                    </span>
                    <h3 className="font-display font-black text-lg md:text-xl tracking-tight text-gray-950 uppercase leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 font-light mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>


                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

