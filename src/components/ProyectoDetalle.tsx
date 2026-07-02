import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, TrendingUp, Award, Clock } from 'lucide-react';

interface ProyectoDetalleProps {
  projectIndex: number;
  onBack: () => void;
  onOpenContact: (category?: string) => void;
}

export const PROJECTS_DETALLE_DATA = [
  {
    title: "El Día de la Hostelería",
    subtitle: "Makro",
    desc: "El Día de la Hostelería de Makro es un evento que celebra y pone en valor el trabajo del sector hostelero a través de experiencias únicas y acciones de gran impacto. Desde Aplus Gastromarketing gestionamos esta jornada, impulsando hitos como el Récord Guinness de la tapa más larga del mundo, un restaurante suspendido a varios metros de altura en pleno centro de Madrid o la emocionante Carrera del Chef.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    challenge: "Posicionar de manera indiscutible a Makro como el socio de confianza absoluto de la hostelería española, creando un hito de visibilidad y repercusión masiva nacional con motivo del Día de la Hostelería.",
    strategy: "Diseñamos un plan de marketing de guerrilla y relaciones públicas de alto impacto. Creamos experiencias físicas espectaculares en el corazón de Madrid, incluyendo la Carrera del Chef (donde cocineros de élite compiten corriendo con sus chaquetillas) y un restaurante popup suspendido a más de 50 metros de altura frente a la Plaza de España. Adicionalmente, batimos el Récord Guinness de la tapa más larga del mundo, atrayendo a miles de visitantes y cadenas de televisión.",
    results: [
      "Consecución certificada del Récord Guinness para la marca con más de 120 metros de recorrido interactivo de tapas.",
      "Cobertura premium en tres de los principales telediarios de televisión nacional de máxima audiencia en hora punta.",
      "Más de 15 millones de impactos directos estimados en canales digitales y redes sociales.",
      "Refuerzo estratégico indiscutible del posicionamiento B2B de Makro como aliado directo del restaurador independiente."
    ],
    stats: [
      { number: "+15M", label: "Impactos Digitales" },
      { number: "Guinness", label: "Récord Batido" },
      { number: "100%", label: "Notoriedad de Marca" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "The premiere Experiencia by Findus",
    subtitle: "Findus",
    desc: "Convertimos la icónica Sala Equis en un auténtico estreno cinematográfico donde ideas, inspiración y sabor fueron los protagonistas. Diseñamos una experiencia inmersiva en la que se presentó la estrategia comercial de 2026 de Findus Food Service junto al chef Pepe Rodríguez.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
    challenge: "Romper la frialdad y el aburrimiento tradicional de las convenciones de ventas B2B, presentando la innovadora estrategia de portfolios de Findus Food Service para 2026 de un modo memorable para distribuidores VIP.",
    strategy: "Concebimos un evento bajo el lema conceptual 'The Premiere Experience'. Para ello, alquilamos y transformamos la Sala Equis (un antiguo cine erótico convertido en espacio de tendencias en Madrid) en un plató escénico. Fusionamos una narrativa de guion de cine clásico con un showcooking inmersivo liderado por el prestigioso chef de estrella Michelin Pepe Rodríguez (jurado de MasterChef España), quien elaboró platos vanguardistas usando la gama de productos Findus.",
    results: [
      "Asistencia récord del 100% de los principales operadores de distribución estratégica horeca de la zona.",
      "Formatos de vídeo de contenido B2B distribuidos con una tasa de retención superior al 85% en redes profesionales.",
      "Altísimo nivel de implicación y fidelización en la preventa de las nuevas líneas de productos congelados premium."
    ],
    stats: [
      { number: "100%", label: "Distribuidores Clave" },
      { number: "MasterChef", label: "Pepe Rodríguez" },
      { number: "85%", label: "Retención Audiovisual" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "HORECA NIGHT + HORECA AWARDS",
    subtitle: "Alimentaria + Hostelco",
    desc: "En Aplus Gastromarketing hemos tenido el orgullo de gestionar los HORECA Awards 2026, los prestigiosos premios organizados por Alimentaria + Hostelco que reconocen los proyectos, profesionales y soluciones más innovadoras del sector hostelero.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    challenge: "Elevar la velada oficial Horeca de Alimentaria + Hostelco 2026 al rango de acontecimiento social insustituible, consolidando unos premios independientes que sirvieran como faro tecnológico y de sostenibilidad para la hostelería.",
    strategy: "Ofrecimos una experiencia integral llave en mano bajo el paraguas conceptual 'HORECA NIGHT'. Estructuramos la gala en base al reconocimiento de proyectos que realmente reinventan la sostenibilidad, la digitalización y el ecosistema laboral. Complementamos la ceremonia con espacios vanguardistas de networking sensorial y propuestas gastronómicas de autor que capturaron la esencia futurista del certamen.",
    results: [
      "Aforo completamente lleno con más de 650 directores ejecutivos y líderes empresariales del canal HORECA mundial.",
      "Cobertura exclusiva en más de 25 publicaciones comerciales, telediarios del sector e impactos directos en LinkedIn.",
      "Se consolidó la reputación del evento de Alimentaria y Hostelco como el mayor clúster de innovación culinaria."
    ],
    stats: [
      { number: "+650", label: "Líderes de la Industria" },
      { number: "AWARDS 26", label: "Plataforma de Vanguardia" },
      { number: "25+", label: "Medios Especializados" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "BARCELONA WINE WEEK",
    subtitle: "BWW Night",
    desc: "En Aplus Gastromarketing también hemos estado detrás de la organización de la Barcelona Wine Week Night, uno de los encuentros más exclusivos del sector vinícola y gastronómico. Desde la conceptualización del evento hasta la producción y experiencia de marca, trabajamos para crear una noche memorable alineada con el posicionamiento premium de Barcelona Wine Week, consolidándola como una cita imprescindible para el sector.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
    challenge: "Crear una experiencia nocturna paralela a la feria Barcelona Wine Week que reforzara la sofisticación, el espíritu de vanguardia de las DD.OO. españolas y reuniera a sumilleres internacionales en un ambiente exclusivo alejado del ruido expositivo habitual.",
    strategy: "Diseñamos un circuito sensorial donde el vino interactúa con el arte y la gastronomía selecta de autor. Establecimos alianzas clave para un maridaje gourmet innovador y diseñamos instalaciones con iluminación escénica minimalista e hilo musical orgánico en vivo.",
    results: [
      "Punto de encuentro ineludible de sumilleres, enólogos consagrados y compradores internacionales clave.",
      "Posicionamiento de la marca Barcelona Wine Week como referente líquido de máxima expresión de calidad global.",
      "Satisfacción absoluta declarada de las bodegas patrocinadoras del evento."
    ],
    stats: [
      { number: "+500", label: "Expertos & Sumilleres" },
      { number: "Wine Art", label: "Cata Sensorial" },
      { number: "Premium", label: "Estatus de Marca" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528821158334-4cca69d49479?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "EVENTO PARA DISTRIBUIDORES",
    subtitle: "Audens Food",
    desc: "En Aplus Gastromarketing organizamos un exclusivo evento para distribuidores de Audens Food en el emblemático Patio de Leones, frente a la Puerta de Alcalá de Madrid. Una experiencia creada para conectar gastronomía, networking e innovación, donde los asistentes pudieron descubrir las propuestas de la marca en un entorno único. Además, contamos con la presencia especial de Fernando Romay, aportando cercanía e inspiración a una jornada pensada para fortalecer relaciones dentro del sector horeca.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1000&auto=format&fit=crop",
    challenge: "Presentar el portafolio estratégico e innovaciones de productos preparados congelados de Audens Food, logrando un 'engagement' muy humano y cercano con la red nacional de distribuidores horeca.",
    strategy: "Elegimos como escenario el icónico espacio 'Patio de Leones' de Madrid, un rincón con un diseño que evoca la autenticidad cañí madrileña. Para liderar la velada de forma amena, incorporamos al reconocido carismático exbaloncestista Fernando Romay, cuya personalidad y humor ayudaron a conectar los valores de superación de equipo con el crecimiento comercial conjunto de la marca.",
    results: [
      "Incremento del 25% de la intención de compra real declarada por las plataformas logísticas.",
      "Consolidación total de la relación humana entre la fuerza comercial del fabricante y los distribuidores horeca.",
      "Gran recuerdo de marca gracias al contraste de un espacio premium con un conductor de primer nivel."
    ],
    stats: [
      { number: "Patio Leones", label: "Madrid Iconic" },
      { number: "F. Romay", label: "Embajador Emocional" },
      { number: "+25%", label: "Crecimiento B2B" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "LA RUTA GALBANI",
    subtitle: "Galbani",
    desc: "En Aplus Gastromarketing también hemos creado La Via d’Italia by Galbani, una ruta gastronómica que del 8 de mayo al 7 de junio conecta algunos de los mejores restaurantes italianos de Madrid. Un proyecto diseñado para acercar la auténtica gastronomía italiana al público a través de platos exclusivos y recetas elaboradas con ingredientes originales Galbani. Una experiencia creada para disfrutar de Italia sin salir de Madrid, impulsando la visibilidad de los restaurantes participantes y generando una experiencia gastronómica única alrededor de la marca.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop",
    challenge: "Activar el consumo de los productos lácteos premium de la icónica firma Galbani, y generar un incremento de tráfico real de comensales en restaurantes italianos seleccionados de la capital madrileña.",
    strategy: "Creamos un concepto de Gastro y Street Marketing denominado 'La Via d’Italia by Galbani'. Una cuidada selección de 15 templos de cocina de autor italiana en Madrid ofrecieron durante un mes platos diseñados en exclusiva con los quesos de la marca (Mozzarella di Bufala, Mascarpone, Ricotta). Respaldamos la acción con cartas de mesa personalizadas, cartelería artesana y una potente campaña de redes con prescriptores clave de gastronomía.",
    results: [
      "Incremento medio del 35% registrado en la afluencia de clientes específicos buscando consumir la ruta.",
      "Importante aumento en las ventas del mayorista de distribución horeca para la línea específica de Galbani.",
      "Gran visibilidad en perfiles sociales foodies e instagramers amantes de la pasta y pizza auténticas."
    ],
    stats: [
      { number: "15", label: "Restaurantes Italianos" },
      { number: "8 May-7 Jun", label: "Duración de Campaña" },
      { number: "+35%", label: "Aumento Tráfico" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "LA ENCIMERA PODCAST",
    subtitle: "FACYRE",
    desc: "En Aplus Gastromarketing también hemos desarrollado para FACYRE el podcast La Encimera, un espacio creado para dar voz a referentes de la gastronomía, la hostelería y la restauración en España. Un proyecto pensado para generar conversación, compartir tendencias e inspirar al sector a través de entrevistas y contenidos de valor, conectando a chefs, profesionales y marcas en un formato cercano, actual y dinámico.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
    challenge: "Establecer una plataforma multimedia de comunicación cercana para FACYRE (Federación de Asociaciones de Cocineros y Reposteros de España) que consiga conectar con la nueva generación de profesionales culinarios vía videopodcast.",
    strategy: "Desarrollamos el concepto de 'La Encimera'. Creamos y produjimos de forma integral un formato videopodcast donde la encimera sirve de metáfora: el lugar íntimo donde suceden las cosas más interesantes. Condujimos entrevistas con grandes estrellas de gastronomía con estrella Michelin, directivos de marcas horeca innovadoras y emprendedores gastronómicos en un formato libre de ataduras.",
    results: [
      "Más de 20 capítulos que han conseguido posicionar la gastronomía en tendencia en el entorno hispanohablante de streaming.",
      "Cercanía real y frescura que humaniza la acción institucional de la federación.",
      "Excelente acogida del sector como altavoz libre y vanguardista."
    ],
    stats: [
      { number: "+20", label: "Episodios Publicados" },
      { number: "100%", label: "Producción Propia" },
      { number: "Chef Stars", label: "Invitados de Élite" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "REVISTA ÑAM ÑAM",
    subtitle: "FACYRE",
    desc: "En Aplus Gastromarketing también gestionamos la revista Ñam Ñam de FACYRE, una publicación especializada en gastronomía y hostelería que se ha consolidado como un referente del sector. Con más de 70.000 ejemplares distribuidos en los principales eventos HORECA de España, desarrollamos un contenido innovador y visualmente impactante para enviar tendencias, entrevistas, actualidad y experiencias gastronómicas a profesionales y amantes de la cocina en toda España.",
    hashtag: "#GastroRevolucionarios",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    challenge: "Desarrollar un medio de comunicación sectorial híbrido (físico y digital) con alta credibilidad editorial e intelectual que sirva de termómetro de tendencias de restauración en ferias y congresos clave.",
    strategy: "Estructuramos un rediseño editorial completo con tintes de diseño suizo y alta elegancia visual. Creamos secciones dedicadas a técnicas culinarias disruptivas, nuevos ecosistemas de negocio, perfiles de jóvenes promesas y reportajes de fondo sobre el futuro horeca.",
    results: [
      "70.000 ejemplares distribuidos de manera física y segmentada en las citas de mayor prestigio gastro de España.",
      "Canal publicitario altamente rentable para patrocinadores que desean llegar de forma directa al tomador de decisiones.",
      "Prestigio reforzado para la Federación de Cocineros (FACYRE) por la calidad crítica del periodismo ofrecido."
    ],
    stats: [
      { number: "70.000", label: "Ejemplares Impresos" },
      { number: "FACYRE", label: "Órgano de Prensa" },
      { number: "Nacional", label: "Distribución Segmentada" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export default function ProyectoDetalle({ projectIndex, onBack, onOpenContact }: ProyectoDetalleProps) {
  const data = PROJECTS_DETALLE_DATA[projectIndex];

  // If index is invalid, provide safe fallback or go back
  if (!data) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-2xl font-display font-bold mb-4 uppercase">[ PROYECTO NO ENCONTRADO ]</h3>
        <button onClick={onBack} className="btn-curtain btn-curtain-green px-8 py-3 font-display uppercase text-xs tracking-wider">
          Volver a Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen font-sans border-t border-black pb-24 selection:bg-[#B2D3C2] selection:text-black">
      
      {/* Top clean sub-bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-black/5">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-black transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          VOLVER AL PORTFOLIO
        </button>
        <span className="font-mono text-[11px] text-neutral-400">
          CASO DE ÉXITO 0{projectIndex + 1} / 0{PROJECTS_DETALLE_DATA.length}
        </span>
      </div>

      {/* Hero Display Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 text-left space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#86a695] font-black block">
              {data.subtitle}
            </span>
            <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-none text-black">
              {data.title}
            </h1>
          </div>
          <div className="lg:col-span-4 text-left border-l-2 border-[#B2D3C2] pl-6 py-2">
            <p className="font-mono text-xs text-neutral-500 font-bold uppercase tracking-[0.15em] mb-1">
              Etiquetas
            </p>
            <p className="font-display font-black text-sm text-[#163524] tracking-wider uppercase">
              {data.hashtag} — GASTROMARKETING
            </p>
          </div>
        </div>
      </div>

      {/* Immersive Giant Image */}
      <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden bg-black select-none border-t border-b border-black/10">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover grayscale contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-900/10" />
      </div>

      {/* Metrics Banner Section */}
      <div className="bg-black text-white border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            {data.stats.map((stat, sIdx) => (
              <div key={sIdx} className={`space-y-2 py-6 md:py-0 ${sIdx > 0 ? 'md:pl-12' : ''}`}>
                <span className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#B2D3C2] block uppercase tracking-tight leading-none">
                  {stat.number}
                </span>
                <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body Editorial Layout (Challenge, Strategy, Results) */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Case-Study Narrative */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* El Desafío */}
            <div className="space-y-4 text-left">
              <span className="font-mono text-xs text-[#86a695] font-black uppercase tracking-[0.2em] block">
                [ 01 / EL DESAFÍO ]
              </span>
              <h2 className="font-display font-black text-2xl md:text-3.5xl uppercase tracking-tight text-neutral-900">
                ¿A qué reto nos enfrentábamos?
              </h2>
              <p className="font-sans text-[15px] md:text-lg text-neutral-700 font-light leading-relaxed">
                {data.challenge}
              </p>
            </div>

            {/* La Estrategia */}
            <div className="space-y-4 text-left">
              <span className="font-mono text-xs text-[#86a695] font-black uppercase tracking-[0.2em] block">
                [ 02 / LA ESTRATEGIA ]
              </span>
              <h2 className="font-display font-black text-2xl md:text-3.5xl uppercase tracking-tight text-neutral-900">
                La solución revolucionaria
              </h2>
              <p className="font-sans text-[15px] md:text-lg text-neutral-700 font-light leading-relaxed">
                {data.strategy}
              </p>
            </div>

            {/* Los Resultados */}
            <div className="space-y-6 text-left">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#86a695] font-black uppercase tracking-[0.2em] block">
                  [ 03 / LOS RESULTADOS ]
                </span>
                <h2 className="font-display font-black text-2xl md:text-3.5xl uppercase tracking-tight text-neutral-900">
                  Impacto mediático & Comercial
                </h2>
              </div>
              <ul className="space-y-4">
                {data.results.map((res, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-4 text-left bg-white p-5 border border-black/5 shadow-xs">
                    <CheckCircle2 className="w-6 h-6 text-[#163524] mt-0.5 shrink-0" />
                    <span className="font-sans text-[14px] md:text-[15px] text-neutral-800 font-normal leading-relaxed">
                      {res}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sticky Sidebar CTA & Details */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-[#121212] text-white p-8 border border-black rounded-none space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#B2D3C2]" />
                <span className="font-display font-black text-sm tracking-widest uppercase">
                  Aplus Gastro
                </span>
              </div>
              
              <div className="space-y-1 text-left">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Marcas</span>
                <span className="font-display font-bold text-lg text-[#B2D3C2]">{data.subtitle}</span>
              </div>

              <div className="space-y-1 text-left">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Acción</span>
                <p className="font-sans text-[13px] text-neutral-300 leading-relaxed font-light">{data.desc}</p>
              </div>

              <button 
                onClick={() => onOpenContact(`Caso de Éxito: ${data.title} (${data.subtitle})`)}
                className="btn-curtain btn-curtain-green w-full py-4 font-display font-black text-[11px] tracking-widest uppercase text-center cursor-pointer block"
              >
                SOLICITAR UN PROYECTO ASÍ
              </button>
            </div>

            <div className="border border-black/5 bg-[#FAF9F6] p-8 text-left space-y-4">
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-[#163524]">
                ¿Quieres transformar tu marca?
              </h4>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                Desde Aplus Gastromarketing conceptualizamos, planificamos, producimos y viralizamos campañas para los operadores y marcas líderes del ecosistema hostelero. Pídenos una sesión estratégica inicial sin compromiso.
              </p>
              <button 
                onClick={() => onOpenContact("Sesión estratégica inicial")}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-black border-b border-black pb-0.5 hover:text-[#86a695] hover:border-[#86a695] transition-colors uppercase tracking-wider"
              >
                AGENDAR SESIÓN <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Visual Food Gallery Showcase */}
      <div className="bg-[#F3F2EE] py-20 border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#86a695] font-black block">
              [ 04 / GALERÍA DEL CASO ]
            </span>
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-neutral-900 mt-2">
              Detalle visual de la activación
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gallery.map((imgUrl, gIdx) => (
              <div 
                key={gIdx}
                className="relative overflow-hidden aspect-video md:aspect-square bg-neutral-200 border border-black/5 group"
              >
                <img 
                  src={imgUrl} 
                  alt={`Galería ${data.title} ${gIdx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant CTA to Continue Browsing back */}
      <div className="max-w-3xl mx-auto text-center px-6 pt-24 space-y-8">
        <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-900 leading-none">
          ¿Listo para dar el siguiente gran paso con tu marca gastronómica?
        </h3>
        <p className="font-sans text-neutral-500 font-light max-w-lg mx-auto">
          Descubre cómo ayudamos a las organizaciones líderes a dominar el canal HORECA y conectar con clientes de valor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onOpenContact(`Siguiente gran paso - ${data.title}`)}
            className="btn-curtain btn-curtain-green px-8 py-4 font-display font-black text-[11px] tracking-widest uppercase cursor-pointer"
          >
            HABLEMOS DE TU PROYECTO
          </button>
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-black tracking-widest uppercase text-neutral-600 hover:text-black transition-colors"
          >
            VOLVER AL PORTFOLIO <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
