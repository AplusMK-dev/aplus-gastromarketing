import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onOpenContact: (category?: string) => void;
  onOpenProject?: (index: number) => void;
}

export const PROJECTS = [
  {
    title: "El Día de la Hostelería",
    subtitle: "Makro",
    desc: "El Día de la Hostelería de Makro es un evento que celebra y pone en valor el trabajo del sector hostelero a través de experiencias únicas y acciones de gran impacto. Desde Aplus Gastromarketing gestionamos esta jornada, impulsando hitos como el Récord Guinness de la tapa más larga del mundo, un restaurante suspendido a varios metros de altura en pleno centro de Madrid o la emocionante Carrera del Chef.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "The premiere Experiencia by Findus",
    subtitle: "Findus",
    desc: "Convertimos la icónica Sala Equis en un auténtico estreno cinematográfico donde ideas, inspiración y sabor fueron los protagonistas. Diseñamos una experiencia inmersiva en la que se presentó la estrategia comercial de 2026 de Findus Food Service junto al chef Pepe Rodríguez.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "HORECA NIGHT + HORECA AWARDS",
    subtitle: "Alimentaria + Hostelco",
    desc: "En Aplus Gastromarketing hemos tenido el orgullo de gestionar los HORECA Awards 2026, los prestigiosos premios organizados por Alimentaria + Hostelco que reconocen los proyectos, profesionales y soluciones más innovadoras del sector hostelero.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "BARCELONA WINE WEEK",
    subtitle: "BWW Night",
    desc: `En Aplus Gastromarketing también hemos estado detrás de la organización de la Barcelona Wine Week Night, uno de los encuentros más exclusivos del sector vinícola y gastronómico.
Desde la conceptualización del evento hasta la producción y experiencia de marca, trabajamos para crear una noche memorable alineada con el posicionamiento premium de Barcelona Wine Week, consolidándola como una cita imprescindible para el sector.`,
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "EVENTO PARA DISTRIBUIDORES",
    subtitle: "Audens Food",
    desc: `En Aplus Gastromarketing organizamos un exclusivo evento para distribuidores de Audens Food en el emblemático Patio de Leones, frente a la Puerta de Alcalá de Madrid.
Una experiencia creada para conectar gastronomía, networking e innovación, donde los asistentes pudieron descubrir las propuestas de la marca en un entorno único. Además, contamos con la presencia especial de Fernando Romay, aportando cercanía e inspiración a una jornada pensada para fortalecer relaciones dentro del sector horeca. `,
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "LA RUTA GALBANI",
    subtitle: "Galbani",
    desc: `En Aplus Gastromarketing también hemos creado La Via d’Italia by Galbani, una ruta gastronómica que del 8 de mayo al 7 de junio conecta algunos de los mejores restaurantes italianos de Madrid. 🇮🇹✨
Un proyecto diseñado para acercar la auténtica gastronomía italiana al público a través de platos exclusivos y recetas elaboradas con ingredientes originales Galbani. Una experiencia creada para disfrutar de Italia sin salir de Madrid, impulsando la visibilidad de los restaurantes participantes y generando una experiencia gastronómica única alrededor de la marca.`,
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "LA ENCIMERA PODCAST",
    subtitle: "FACYRE",
    desc: `En Aplus Gastromarketing también hemos desarrollado para FACYRE el podcast La Encimera, un espacio creado para dar voz a referentes de la gastronomía, la hostelería y la restauración en España.
Un proyecto pensado para generar conversación, compartir tendencias e inspirar al sector a través de entrevistas y contenidos de valor, conectando a chefs, profesionales y marcas en un formato cercano, actual y dinámico.`,
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "REVISTA ÑAM ÑAM",
    subtitle: "FACYRE",
    desc: `En Aplus Gastromarketing también gestionamos la revista Ñam Ñam de FACYRE, una publicación especializada en gastronomía y hostelería que se ha consolidado como un referente del sector.
Con más de 70.000 ejemplares distribuidos en los principales eventos HORECA de España, desarrollamos un contenido innovador y visualmente impactante para acercar tendencias, entrevistas, actualidad y experiencias gastronómicas a profesionales y amantes de la cocina en toda España.`,
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Portfolio({ onOpenContact, onOpenProject }: PortfolioProps) {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="w-full bg-[#121212] pt-24 md:pt-32 pb-0 text-white border-t border-black">
      {/* Header container aligned with the rest of the site */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-4">
            <span className="font-mono text-xs text-white/40 tracking-[0.25em] block uppercase text-[#B2D3C2]">
              [ PORTFOLIO / CASOS ]
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight uppercase leading-none text-white">
              Mantente al Día de nuestros últimos proyectos
            </h2>
          </div>
          
          {/* Elegant tiny brand watermark */}
          <div className="shrink-0 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FAF9F6] rounded-none flex items-center justify-center">
              <span className="font-display font-bold text-black text-sm">ap</span>
            </div>
            <span className="font-display font-medium text-xs tracking-widest text-[#FAF9F6] uppercase">
              Aplus <span className="font-light text-neutral-400">GASTROMARKETING</span>
            </span>
          </div>
        </div>
      </div>

      {/* Full-width Accordion Block */}
      <div className="flex flex-col lg:flex-row w-full h-[1600px] lg:h-[800px] overflow-hidden border-t border-b border-white/10 bg-[#0B0B0B] transition-all duration-300">
        {PROJECTS.map((proj, idx) => {
          const isActive = activeProject === idx;
          return (
            <div 
              key={idx}
              onMouseEnter={() => setActiveProject(idx)}
              onClick={() => {
                if (isActive) {
                  if (onOpenProject) {
                    onOpenProject(idx);
                  } else {
                    window.location.hash = `#proyecto-${idx}`;
                  }
                } else {
                  setActiveProject(idx);
                }
              }}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none border-b lg:border-b-0 lg:border-r border-white/10 group rounded-none flex flex-col justify-end h-full ${
                isActive 
                  ? 'flex-[5] lg:flex-[5] bg-neutral-900' 
                  : 'flex-[1] lg:flex-[1] hover:bg-neutral-800'
              }`}
            >
              {/* Full background food texture picture */}
              <div className="absolute inset-0 overflow-hidden grayscale contrast-125 transition-all duration-700">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black via-black/90 to-transparent opacity-95' : 'bg-black/80'}`} />
              </div>

              {/* Highlight bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-400 ${isActive ? 'bg-[#B2D3C2]' : 'bg-transparent'}`} />

              {/* COLLAPSED STATE DISPLAY */}
              <div className={`absolute inset-0 flex flex-row lg:flex-col items-center justify-between p-6 transition-all duration-700 ${
                isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}>
                {/* Index */}
                <span className="font-mono text-sm text-[#B2D3C2] font-black tracking-widest">
                  0{idx + 1}
                </span>

                {/* Rotated text on desktop, horizontal row on mobile */}
                <div className="lg:-rotate-90 lg:transform lg:origin-center lg:whitespace-nowrap lg:absolute lg:bottom-1/2 lg:translate-y-1/2">
                  <span className="font-display font-black text-[11px] lg:text-xs uppercase tracking-[0.25em] text-white/55 group-hover:text-white transition-colors duration-300">
                    {proj.subtitle} — {proj.title.length > 25 ? proj.title.slice(0, 23) + '...' : proj.title}
                  </span>
                </div>

                {/* Subtle marker indicator of accordion */}
                <div className="hidden lg:block w-px h-12 bg-white/20 group-hover:bg-white/40 transition-colors" />
              </div>

              {/* EXPANDED FULL CONTENT STATE */}
              <div className={`relative z-10 p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full w-full transition-all duration-700 delay-100 ${
                isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
              }`}>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B2D3C2] font-black bg-black/40 px-3 py-1.5 backdrop-blur-xs">
                    0{idx + 1} // {proj.subtitle}
                  </span>
                </div>

                <div className="space-y-4 text-left max-w-2xl mt-auto">
                  <h3 className="font-display font-black text-2xl md:text-3xl lg:text-3.5xl uppercase tracking-tight text-white leading-none">
                    {proj.title}
                  </h3>
                  
                  <p className="font-sans text-[13.5px] md:text-[14px] text-gray-300 font-light leading-relaxed">
                    {proj.desc}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenProject) {
                          onOpenProject(idx);
                        } else {
                          window.location.hash = `#proyecto-${idx}`;
                        }
                      }}
                      className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-6 py-3.5 font-display font-extrabold text-[11px] tracking-widest uppercase transition-all duration-300 pointer-events-auto"
                    >
                      MÁS INFORMACIÓN
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
