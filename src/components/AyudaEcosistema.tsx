import { ArrowUpRight, Tag, Globe, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { helpCategories } from '../data';

export default function Clientes() {
  return (
    <section id="marcas" className="bg-[#FAF9F6] py-24 md:py-32 text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Label and Heading */}
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
          className="mb-20"
        >
          {/* Label and visual divider */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-[#4a725e] tracking-[0.3em] block uppercase mb-3 font-bold">
              [ C L I E N T E S ]
            </span>
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-display font-black text-4xl md:text-6xl tracking-tight uppercase max-w-4xl leading-tight text-black"
          >
            ¿EN QUÉ TE PUEDE AYUDAR NUESTRO ECOSISTEMA?
          </motion.h2>
        </motion.div>

        {/* 3-Column Premium Grid matching Territorios style */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left mt-12" 
          id="clientes-help-grid"
        >
          {helpCategories.map((client, index) => {
            const label = index === 0 ? "01 // FOCUS" : index === 1 ? "02 // TERRITORIO" : "03 // NEGOCIO";
            const cardHref = client.id === 'help-marcas' ? '#marcas' : client.id === 'help-operadores' ? '#operadores' : client.id === 'help-instituciones' ? '#territorios' : '#client-card-' + client.id;
            
            // Map icons based on client type
            const IconComponent = index === 0 ? Tag : index === 1 ? Globe : Store;

            return (
              <a
                key={client.id}
                href={cardHref}
                className="p-8 bg-white border border-gray-150 hover:border-black transition-all duration-300 flex flex-col justify-between group h-full min-h-[380px]"
                id={`client-card-${client.id}`}
              >
                <div className="space-y-6 flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="mb-4">
                      <IconComponent className="w-[50px] h-[50px] text-gray-400 group-hover:text-[#4a725e] transition-colors duration-300 stroke-[1.1]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-black transition-colors block uppercase">
                      {label}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-black uppercase tracking-tight leading-tight group-hover:underline group-hover:decoration-[#B2D3C2] group-hover:decoration-2 transition-transform duration-200">
                      {client.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6 mt-4">
                    <p className="font-sans text-[13.5px] text-gray-600 font-light leading-relaxed">
                      {client.description}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-gray-400 group-hover:text-black transition-colors duration-300">
                      <span>SABER MÁS DETALLES</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
