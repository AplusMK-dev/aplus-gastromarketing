import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Layout, Users, Target, MessageSquare, Volume2, ChefHat, Sparkles } from 'lucide-react';
import Portfolio from './Portfolio';

interface MarcasProps {
  onOpenContact: (category?: string) => void;
  onOpenProject?: (index: number) => void;
  onBack?: () => void;
}

const ACTIVATIONS = [
  {
    num: "01",
    title: "Marketing estratégico",
    desc: `Definimos el enfoque, el posicionamiento, el relato y las oportunidades de la marca dentro del canal o del territorio gastronómico.
Te ayudamos a decidir dónde estar, cómo contar lo que haces y qué tipo de acciones pueden acercarte a tus objetivos.`,
    icon: Target,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "02",
    title: "Activaciones y eventos",
    desc: `Diseñamos encuentros, experiencias, presentaciones, jornadas, acciones con chefs, eventos sectoriales y formatos a medida para conectar tu marca con el público adecuado.
Activamos la gastronomía como espacio de relación, prueba, conversación y recuerdo.`,
    icon: Users,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "03",
    title: "Contenidos y marketing digital",
    desc: `Creamos contenidos, campañas y formatos digitales que ayudan a reforzar la visibilidad, el posicionamiento y la relación de la marca con sus públicos.
Desde piezas editoriales hasta campañas, entrevistas, redes, newsletters o contenidos especializados para el canal.`,
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "04",
    title: "Diseño y relato visual",
    desc: `Damos forma visual a cada proyecto para que el mensaje sea claro, coherente y reconocible.
Desarrollamos identidades, piezas, presentaciones, materiales comerciales, soportes para eventos y recursos de comunicación alineados con la estrategia.`,
    icon: Layout,
    image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "05",
    title: "Conexión sectorial",
    desc: `Activamos nuestra red de proyectos, alianzas y relaciones para acercar tu marca a profesionales, comunidades, entidades y espacios relevantes dentro del universo HORECA.
Este punto lo añadiría porque es uno de vuestros grandes diferenciales y no queda recogido del todo en marketing estratégico/eventos/digital/diseño.`,
    icon: Volume2,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
  }
];

const OUTCOMES = [
  {
    title: "Entender mejor el canal HORECA",
    desc: "Te ayudamos a conocer sus actores, dinámicas, códigos, necesidades y oportunidades para tomar mejores decisiones."
  },
  {
    title: "Reforzar tu posicionamiento",
    desc: "Construimos una propuesta más clara, diferencial y relevante para el sector o para el consumidor al que quieres llegar."
  },
  {
    title: "Aumentar presencia y notoriedad",
    desc: "Diseñamos acciones que hacen que tu marca esté presente en los espacios, conversaciones y momentos adecuados."
  },
  {
    title: "Entrar en el mercado español",
    desc: "Acompañamos a marcas que quieren aterrizar en España con una mirada estratégica, sectorial y conectada con el canal."
  },
  {
    title: "Diseñar acciones con impacto",
    desc: "Creamos campañas, eventos, contenidos y activaciones que conectan estrategia, creatividad y ejecución."
  },
  {
    title: "La gastronomía como herramienta de marketing",
    desc: "Utilizamos la gastronomía para generar experiencia, relación, contenido, notoriedad y valor de marca."
  },
  {
    title: "Ejecutar proyectos con visión sectorial",
    desc: "No solo pensamos ideas. Las llevamos al terreno con criterio, conocimiento del sector y capacidad de coordinación."
  }
];

interface ScrollCardProps {
  item: string;
  idx: number;
  progress: any;
  isLgScreen: boolean;
  theme?: 'light' | 'dark';
  totalItems?: number;
  key?: any;
}

function ScrollCard({ item, idx, progress, isLgScreen, theme = 'light', totalItems = 8 }: ScrollCardProps) {
  // Compute highly fluid sequential transitions using custom functions to avoid monotonically-increasing array limitations
  const isDark = theme === 'dark';
  
  const opacity = useTransform(progress, (v: number) => {
    if (!isLgScreen) return 1;
    
    // 1. One-by-one phase (from 0.0 to 0.70)
    // For n items, each gets roughly 0.70 / n of the scroll area
    const stepSize = 0.70 / totalItems;
    const t0 = idx * stepSize;
    const t1 = t0 + 0.02;
    const t2 = (idx + 1) * stepSize - 0.02;
    const t3 = (idx + 1) * stepSize;

    // 2. Cascade phase (from 0.72 to 1.0)
    // Staggered entrance for all cards together
    const t4 = 0.72 + idx * 0.025;
    const t5 = t4 + 0.06;

    if (v < t0) {
      return 0;
    }
    if (v >= t0 && v < t1) {
      // Fade in single card
      return (v - t0) / (t1 - t0);
    }
    if (v >= t1 && v < t2) {
      return 1;
    }
    if (v >= t2 && v < t3) {
      // Fade out to leave space or wait
      return 1 - (v - t2) / (t3 - t2);
    }
    if (v >= t3 && v < t4) {
      return 0;
    }
    if (v >= t4 && v < t5) {
      // Staggered reveal for all of them
      return (v - t4) / (t5 - t4);
    }
    return 1; // Stay fully visible at the end of the scroll
  });

  const scale = useTransform(progress, (v: number) => {
    if (!isLgScreen) return 1;

    const stepSize = 0.70 / totalItems;
    const t0 = idx * stepSize;
    const t1 = t0 + 0.02;
    const t2 = (idx + 1) * stepSize - 0.02;
    const t3 = (idx + 1) * stepSize;

    const t4 = 0.72 + idx * 0.025;
    const t5 = t4 + 0.06;

    if (v < t0) {
      return 0.93;
    }
    if (v >= t0 && v < t1) {
      const ratio = (v - t0) / (t1 - t0);
      return 0.93 + ratio * 0.07;
    }
    if (v >= t1 && v < t2) {
      return 1;
    }
    if (v >= t2 && v < t3) {
      const ratio = (v - t2) / (t3 - t2);
      return 1 - ratio * 0.07;
    }
    if (v >= t3 && v < t4) {
      return 0.93;
    }
    if (v >= t4 && v < t5) {
      const ratio = (v - t4) / (t5 - t4);
      return 0.93 + ratio * 0.07;
    }
    return 1;
  });

  const y = useTransform(progress, (v: number) => {
    if (!isLgScreen) return 0;

    const stepSize = 0.70 / totalItems;
    const t0 = idx * stepSize;
    const t1 = t0 + 0.02;
    const t2 = (idx + 1) * stepSize - 0.02;
    const t3 = (idx + 1) * stepSize;

    const t4 = 0.72 + idx * 0.025;
    const t5 = t4 + 0.06;

    if (v < t0) {
      return 25;
    }
    if (v >= t0 && v < t1) {
      const ratio = (v - t0) / (t1 - t0);
      return 25 - ratio * 25;
    }
    if (v >= t1 && v < t2) {
      return 0;
    }
    if (v >= t2 && v < t3) {
      const ratio = (v - t2) / (t3 - t2);
      return -ratio * 12; // Float up slightly as it fades
    }
    if (v >= t3 && v < t4) {
      return 25;
    }
    if (v >= t4 && v < t5) {
      const ratio = (v - t4) / (t5 - t4);
      return 25 - ratio * 25;
    }
    return 0;
  });

  if (isLgScreen) {
    return (
      <motion.div
        style={{ y, opacity, scale, transformOrigin: "left center" }}
        className="bg-transparent py-3 flex items-center justify-between relative group rounded-none text-left w-fit"
      >
        <div className="flex items-center gap-4 w-fit">
          <span className={`font-mono text-xs ${isDark ? 'text-white/30 group-hover:text-white' : 'text-gray-300 group-hover:text-black'} font-bold transition-colors shrink-0 select-none`}>
            [ 0{idx + 1} ]
          </span>
          <div className="flex items-center gap-3.5 flex-1 flex-grow w-fit">
            <CheckCircle2 className={`w-6 h-6 ${isDark ? 'text-[#B2D3C2]' : 'text-[#4a725e]'} shrink-0 mt-0.5`} />
            <p className={`font-sans font-medium text-[24px] ${isDark ? 'text-[#f0f0f0]' : 'text-gray-800'} leading-snug select-none w-fit`}>
              {item}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="bg-transparent py-4 flex flex-col justify-between relative group rounded-none text-left h-full w-fit"
    >
      <span className={`font-mono text-xs ${isDark ? 'text-white/30 group-hover:text-white' : 'text-gray-300 group-hover:text-black'} font-semibold mb-4 block transition-colors`}>
        [ 0{idx + 1} ]
      </span>
      <div className="space-y-4 w-fit">
        <div className="flex items-start gap-3.5 w-fit">
          <CheckCircle2 className={`w-6 h-6 ${isDark ? 'text-[#B2D3C2]' : 'text-[#4a725e]'} shrink-0 mt-0.5`} />
          <p className={`font-sans font-medium text-[24px] ${isDark ? 'text-[#f0f0f0]' : 'text-gray-800'} leading-snug select-none w-fit`}>
            {item}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Marcas({ onOpenContact, onOpenProject, onBack }: MarcasProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#inicio';
    }
  };

  const caseARef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: caseAScroll } = useScroll({
    target: caseARef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll tracking physics
  const smoothCaseAScroll = useSpring(caseAScroll, {
    stiffness: 25,
    damping: 30,
    mass: 1,
  });

  const caseBRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: caseBScroll } = useScroll({
    target: caseBRef,
    offset: ["start start", "end end"],
  });

  const smoothCaseBScroll = useSpring(caseBScroll, {
    stiffness: 25,
    damping: 30,
    mass: 1,
  });

  const [comoAyudamosProgress, setComoAyudamosProgress] = useState(0);

  const handleComoAyudamosScroll = () => {
    if (carouselRef.current) {
      const el = carouselRef.current;
      const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth || 1);
      setComoAyudamosProgress(progress);
    }
  };

  const [isLgScreen, setIsLgScreen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      // Scroll smoothly horizontally
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="bg-black text-black min-h-screen font-sans">
      
      {/* SECTION 1: SPLIT SCREEN HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[847.5px] min-h-[85vh]">
        {/* Left Image Column */}
        <div className="relative h-[55vh] lg:h-full overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop"
            alt="Atmósfera sofisticada del sector de la restauración"
            className="w-full h-full object-cover select-none pointer-events-none scale-100 hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Content Column */}
        <div className="bg-[#0b0b0b] text-white flex flex-col justify-center px-8 py-20 lg:p-16 xl:p-24 space-y-8 md:space-y-12 lg:h-full relative">
          {/* Back Button */}
          <div className="absolute top-6 left-8 lg:top-10 lg:left-16 xl:left-24">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#B2D3C2]/80 hover:text-white transition-colors group cursor-pointer uppercase"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              VOLVER A INICIO
            </motion.button>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-[#B2D3C2] tracking-[0.3em] block uppercase mb-4">
              [ SERVICIOS // MARCAS ]
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-none text-white uppercase"
            >
              MARCAS
            </motion.h1>
          </div>

          <div className="space-y-6 max-w-xl text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-sans text-xl md:text-2xl text-gray-200 font-bold leading-tight"
            >
              Impulsamos marcas en HORECA y activamos la gastronomía como palanca de valor
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              Trabajamos con marcas del canal HORECA y con marcas de otros sectores que quieren utilizar la gastronomía para conectar mejor con sus públicos, generar experiencias y abrir nuevas oportunidades.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              Diseñamos estrategias, activamos proyectos y conectamos marcas con los entornos, profesionales, comunidades y conversaciones que realmente mueven el sector.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => onOpenContact("Marcas HORECA / Gastromarketing")}
              className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 group cursor-pointer"
            >
              CUÉNTANOS TU RETO
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: CÓMO AYUDAMOS A LAS MARCAS (White Background with Static Intro) */}
      <div className="w-full bg-white pt-24 pb-12 scroll-mt-24 text-black text-left" id="como-ayudamos">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Header text on top */}
            <div className="max-w-4xl space-y-6">
              <span className="font-mono text-xs text-gray-400 tracking-[0.25em] block uppercase">
                [ NUESTRO ENFOQUE ]
              </span>
              <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[80px] tracking-tight leading-[0.95] text-black uppercase">
                Cómo ayudamos <br />a las marcas
              </h2>
              <p className="text-xl md:text-2xl font-light text-neutral-700 font-sans leading-relaxed">
                No todas las marcas llegan a la gastronomía desde el mismo lugar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL CONTAINER */}
      <div className="bg-white w-full pb-20 overflow-hidden">
        
        {/* Scrollable track */}
        <div 
          ref={carouselRef}
          onScroll={handleComoAyudamosScroll}
          className="flex overflow-x-auto scroll-smooth snap-x snap-strong scrollbar-none items-stretch w-full px-6 md:px-12 lg:px-16 gap-6 md:gap-8 lg:gap-12"
        >
          
          {/* CARD 1: CANAL HORECA */}
          <div
            id="horeca-card"
            onClick={() => {
              caseARef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-[calc(100vw-48px)] md:w-[calc(100vw-96px)] lg:w-[calc(50%-24px)] shrink-0 p-0 flex flex-col items-stretch rounded-none transition-all duration-300 border border-black/5 hover:border-black/10 cursor-pointer bg-[#FAF9F6] text-left relative overflow-hidden group snap-center"
          >
            {/* Background Rising curtain on hover */}
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

            {/* Left side: Moody visual with custom overlay */}
            <div className="w-full h-[320px] lg:h-[380px] relative overflow-hidden bg-gray-950 shrink-0 z-10 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                alt="Canal HORECA"
                className="w-full h-full object-cover select-none pointer-events-none scale-100 group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#4a725e]/15 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right side: Highly typography-focused information panel */}
            <div className="w-full p-8 md:p-12 lg:p-12 xl:p-14 space-y-6 text-left flex flex-col justify-between z-10 flex-1">
              <div className="space-y-4">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="font-mono text-sm tracking-[0.15em] text-[#4a725e] group-hover:text-[#B2D3C2] font-semibold transition-colors">
                    [ CANAL HORECA ]
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl lg:text-[38px] tracking-tight leading-tight uppercase text-black group-hover:text-white transition-colors duration-500">
                    Si ya formas parte del canal HORECA
                  </h3>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-700 group-hover:text-gray-300 font-light leading-relaxed transition-colors pt-2">
                  Ayudamos a crecer y posicionar mejor tu marca conectando de forma real y directa con profesionales, operadores and públicos del sector.
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 group-hover:border-white/10 space-y-1">
                <span className="block font-display font-black text-xs tracking-wider text-[#4a6b5a] group-hover:text-[#B2D3C2] uppercase transition-colors">
                  PERSPECTIVA A · HORECA ACTIVOS
                </span>
                <p className="font-sans text-xs md:text-sm text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors flex items-center justify-between">
                  <span>VER PERSPECTIVA A</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: OTROS SECTORES */}
          <div
            id="sectores-card"
            onClick={() => {
              caseBRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-[calc(100vw-48px)] md:w-[calc(100vw-96px)] lg:w-[calc(50%-24px)] shrink-0 p-0 flex flex-col items-stretch rounded-none transition-all duration-300 border border-black/5 hover:border-black/10 cursor-pointer bg-[#FAF9F6] text-left relative overflow-hidden group snap-center"
          >
            {/* Background Rising curtain on hover */}
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

            {/* Left side: Moody visual with custom overlay */}
            <div className="w-full h-[320px] lg:h-[380px] relative overflow-hidden bg-gray-950 shrink-0 z-10 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
                alt="Otros Sectores"
                className="w-full h-full object-cover select-none pointer-events-none scale-100 group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#4a725e]/15 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right side: Highly typography-focused information panel */}
            <div className="w-full p-8 md:p-12 lg:p-12 xl:p-14 space-y-6 text-left flex flex-col justify-between z-10 flex-1">
              <div className="space-y-4">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="font-mono text-sm tracking-[0.15em] text-[#4a725e] group-hover:text-[#B2D3C2] font-semibold transition-colors">
                    [ OTROS SECTORES ]
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl lg:text-[38px] tracking-tight leading-tight uppercase text-black group-hover:text-white transition-colors duration-500">
                    Si buscas activar tu marca
                  </h3>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-700 group-hover:text-gray-300 font-light leading-relaxed transition-colors pt-2">
                  Ideamos contenidos, experiences y colaboraciones de alto impacto cultural y emocional para conectar con nuevos clientes, dentro del sector gastronómico.
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 group-hover:border-white/10 space-y-1">
                <span className="block font-display font-black text-xs tracking-wider text-[#4a6b5a] group-hover:text-[#B2D3C2] uppercase transition-colors">
                  PERSPECTIVA B · ACTIVACIÓN Y EXPERIENCIAS
                </span>
                <p className="font-sans text-xs md:text-sm text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors flex items-center justify-between">
                  <span>VER PERSPECTIVA B</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 2.5: GREEN BG CLAIM SECTION */}
      <div className="w-full bg-[#B2D3C2] py-20 md:py-28 overflow-hidden">
        <div className="w-full px-6">
          <div className="w-full text-center">
            <span className="font-mono text-xs text-black/50 tracking-[0.25em] block uppercase mb-8 font-bold">
              [ COMPROMISO ]
            </span>
            <motion.h2 
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-display font-black text-4xl md:text-[80px] lg:text-[128px] tracking-tighter leading-none text-black uppercase text-center w-full"
            >
              <span className="block mb-2 md:mb-4 overflow-hidden py-2 inline-flex flex-wrap justify-center">
                {"Diseñamos el camino para que la marca".split(" ").map((word, idx) => {
                  const order = [5, 11, 2, 8, 0, 7, 3, 10, 1, 6, 9, 4];
                  const delay = (order[idx % order.length] || 0) * 0.07;
                  return (
                    <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em] align-top">
                      <motion.span
                        variants={{
                          hidden: { y: "115%" },
                          visible: { y: "0%" }
                        }}
                        transition={{ duration: 1.8, ease: [0.075, 0.82, 0.165, 1], delay }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
              <span className="block overflow-hidden py-2 text-[#1A1A1A] inline-flex flex-wrap justify-center">
                {"tenga sentido dentro del universo gastronómico".split(" ").map((word, idx) => {
                  const delay = 1.3 + idx * 0.12;
                  return (
                    <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em] align-top">
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, scale: 0.92, y: "40%" },
                          visible: { opacity: 1, scale: 1, y: "0%" }
                        }}
                        transition={{ 
                          duration: 1.8,
                          ease: [0.075, 0.82, 0.165, 1],
                          delay 
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* SECCIÓN PORTFOLIO / ÚLTIMOS PROYECTOS */}
      <Portfolio onOpenContact={onOpenContact} onOpenProject={onOpenProject} />

      {/* SECTION 3: TWO FOCUS CASES */}
      <div className="w-full">
        {/* CASE A: SI TU MARCA YA FORMA PARTE DEL CANAL HORECA (Vertical Scroll driven Horizontal Carousel) */}
        <div ref={caseARef} className="relative bg-[#FAF9F6] border-t border-b border-gray-100 lg:h-[580vh]">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden py-16 lg:py-0 w-full">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Text Block */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  <span className="font-mono text-xs text-gray-400 tracking-[0.25em] block uppercase">
                    [ PERSPECTIVA A ]
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-5xl text-black uppercase tracking-tight leading-none">
                    Si tu marca ya forma parte del canal HORECA
                  </h3>
                  <p className="font-sans text-neutral-700 text-base md:text-lg font-bold leading-[30px] md:leading-[30px]">
                    Ayudamos a marcas de alimentación, bebidas, equipamiento, foodservice, tecnología, sostenibilidad y otros ámbitos vinculados al canal HORECA a crecer con una estrategia más conectada con la realidad del sector.
                  </p>
                  <p className="font-sans text-neutral-700 text-base font-light leading-relaxed">
                    Conocemos al cliente hostelero, entendemos los códigos del canal y sabemos cómo convertir una propuesta de marca en acciones que generen visibilidad, confianza y oportunidades comerciales de alto rendimiento.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenContact("Marcas en canal HORECA")}
                      className="btn-curtain btn-curtain-black inline-flex items-center gap-3 px-8 py-3.5 font-display font-extrabold text-[12px] tracking-widest uppercase transition-all duration-200 cursor-pointer"
                    >
                      ¡Me interesa!
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Interactive Carousel */}
                <div className="lg:col-span-7 w-full overflow-hidden relative text-left">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="font-display font-bold text-gray-400 text-xs tracking-widest uppercase pl-4 border-l-2 border-[#4a725e]">
                      TE AYUDAMOS A:
                    </h4>
                    {isLgScreen && (
                      <span className="font-mono text-[10px] text-[#4a725e] tracking-wider uppercase animate-pulse">
                        [ SCROLL VERTICAL PARA REVELAR ]
                      </span>
                    )}
                  </div>
                  
                  {/* Single column container with 8 rows */}
                  <div className="relative overflow-visible w-fit">
                    <div className="grid grid-cols-1 gap-2.5 w-fit">
                      {[
                        "Conocer mejor al cliente HORECA.",
                        "Detectar oportunidades reales en el mercado.",
                        "Reforzar tu posicionamiento en el canal.",
                        "Aumentar visibilidad, relevancia y ventas.",
                        "Entrar en el mercado español con mayor criterio.",
                        "Diseñar acciones de marketing con sentido sectorial.",
                        "Activar proyectos con recorrido duradero.",
                        "Ejecutar iniciativas con visión estratégica clara."
                      ].map((item, idx) => (
                        <ScrollCard
                          key={idx}
                          item={item}
                          idx={idx}
                          progress={smoothCaseAScroll}
                          isLgScreen={isLgScreen}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CASE B: ¿TU MARCA TODAVÍA NO HA UTILIZADO EL GASTROMARKETING? */}
        <div ref={caseBRef} className="relative bg-[#121212] lg:h-[580vh]">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden py-16 lg:py-0 w-full">
            <div className="max-w-7xl mx-auto px-6 w-full text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Text Block */}
                <div className="lg:col-span-5 w-full space-y-6 text-left">
                  <span className="font-mono text-xs text-white/40 tracking-[0.25em] block uppercase text-[#B2D3C2]">
                    [ PERSPECTIVA B ]
                  </span>
                  <h3 className="font-display font-black text-[48px] leading-[48px] text-white uppercase tracking-tight">
                    ¿Tu marca todavía no ha utilizado el gastromarketing?
                  </h3>
                  <p className="font-sans text-neutral-300 text-base md:text-lg font-bold leading-[30px] md:leading-[30px]">
                    Si tu marca quiere utilizar la gastronomía como palanca...
                  </p>
                  <p className="font-sans text-neutral-400 text-[18px] font-bold leading-[30px] md:leading-[30px]">
                    También trabajamos con marcas que no pertenecen directamente al universo HORECA, pero que ven en la gastronomía una oportunidad para acercarse al consumidor, generar experiencias memorables y construir un territorio de marca más emocional, cultural y relevante.
                  </p>
                  <p className="font-sans text-neutral-400 text-base font-light leading-relaxed">
                    Te ayudamos a encontrar el papel que la gastronomía puede jugar en tu estrategia corporativa y a convertirlo en acciones, contenidos, eventos o colaboraciones con impacto.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenContact("Marcas nuevas en Gastromarketing")}
                      className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-8 py-3.5 font-display font-extrabold text-[12px] tracking-widest uppercase transition-all duration-200 cursor-pointer"
                    >
                      Quiero activar mi marca desde la gastronomía
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>

                {/* Right Interactive Carousel */}
                <div className="lg:col-span-7 w-full overflow-hidden relative text-left">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="font-display font-bold text-white/40 text-xs tracking-widest uppercase pl-4 border-l-2 border-[#B2D3C2]">
                      TE AYUDAMOS A:
                    </h4>
                    {isLgScreen && (
                      <span className="font-mono text-[10px] text-[#B2D3C2] tracking-wider uppercase animate-pulse">
                        [ SCROLL VERTICAL PARA REVELAR ]
                      </span>
                    )}
                  </div>
                  
                  {/* Single column container with 7 rows */}
                  <div className="relative overflow-visible w-fit">
                    <div className="grid grid-cols-1 gap-2.5 w-fit">
                      {[
                        "Identificar cómo puede encajar la gastronomía en tu marca.",
                        "Acercarte a nuevos públicos a través de experiencias y contenidos.",
                        "Diseñar acciones con chefs, espacios, comunidades o proyectos del sector.",
                        "Generar visibilidad, afinidad y conversación auténtica.",
                        "Crear campañas innovadoras con una dimensión experiencial.",
                        "Utilizar la gastronomía como territorio de posicionamiento real.",
                        "Ejecutar iniciativas alineadas exactamente con tus objetivos de marca."
                      ].map((item, idx) => (
                        <ScrollCard
                          key={idx}
                          item={item}
                          idx={idx}
                          progress={smoothCaseBScroll}
                          isLgScreen={isLgScreen}
                          theme="dark"
                          totalItems={7}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: CÓMO ACTIVAMOS TU MARCA (The Vertical Split Capability Map) */}
      <section id="metodologia" className="w-full bg-[#FAF9F6] py-24 md:py-32 border-b border-gray-100">
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
              [ N U E S T R A   M E T O D O L O G Í A ]
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Sticky heading and details */}
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
              className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 text-left"
            >
              <h3 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight text-black uppercase">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Cómo activamos
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
                    tu marca
                  </motion.span>
                </span>
              </h3>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-sans text-neutral-700 font-light leading-relaxed text-base md:text-[17px]"
              >
                Cada proyecto necesita una combinación distinta de estrategia, creatividad, contenidos, eventos, diseño y conexión real con el sector. En Aplus unimos visión estratégica y capacidad de ejecución para que cada acción tenga sentido, coherencia e impacto.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <button
                  onClick={() => onOpenContact("Metodología / Activaciones")}
                  className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 group cursor-pointer"
                >
                  CUÉNTANOS TU RETO
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Beautiful stack of activations */}
            <motion.div 
              className="lg:col-span-7 space-y-16 text-left"
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
              {ACTIVATIONS.map((act) => {
                const IconComp = act.icon;
                return (
                  <motion.div
                    key={act.num}
                    className="group border-b border-gray-200 pb-12 flex flex-col gap-6"
                    id={`activation-${act.num}`}
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
                    {/* Image Box */}
                    <div className="overflow-hidden rounded-none aspect-[1.8] w-full bg-gray-100 relative">
                      <motion.img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-xs font-bold text-[#86a695] tracking-[0.2em] uppercase">
                        {act.num} . CAPACIDAD DE ACTIVACIÓN
                      </span>
                      <h4 className="font-display font-black text-xl md:text-2xl tracking-tight text-gray-950 uppercase leading-snug group-hover:text-[#4a6b5a] transition-colors">
                        {act.title}
                      </h4>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                        {act.desc}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-[#4a6b5a] transition-colors cursor-pointer">
                        <span>Saber más</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: QUÉ PODEMOS AYUDARTE A CONSEGUIR (Outcome Matrix) */}
      <div className="w-full bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left space-y-4 max-w-4xl mb-16">
            <span className="font-mono text-xs text-gray-400 tracking-[0.25em] block uppercase">
              [ IMPACTO ]
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-black leading-tight">
              Qué podemos ayudarte a conseguir
            </h2>
            <p className="font-sans text-neutral-600 text-base md:text-lg font-light leading-relaxed">
              Cada marca tiene un reto diferente. Algunas necesitan entrar en el canal, otras ganar relevancia, otras conectar con el consumidor y otras convertir una idea en un proyecto real. Nuestro trabajo consiste en ordenar ese reto, encontrar la oportunidad y activar la respuesta adecuada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {OUTCOMES.map((o, idx) => (
              <div 
                key={idx}
                className="p-6 md:p-8 border border-neutral-100 bg-[#FAF9F6] relative group flex flex-col justify-between hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-[#4a725e] transition-colors">
                    0{idx + 1} // CAPACIDAD
                  </span>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-black">
                    {o.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-neutral-600 font-light leading-relaxed">
                    {o.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200/50 mt-6 flex justify-end">
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}

            {/* Premium CTA Box as the last grid item */}
            <div className="bg-[#B2D3C2] p-8 flex flex-col justify-between text-left group hover:bg-[#86a695] transition-colors duration-300">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-black/60 uppercase">
                  HAZLO REALIDAD
                </span>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black">
                  ¿Listo para activar tu marca?
                </h3>
                <p className="font-sans text-[13.5px] text-neutral-800 font-medium leading-relaxed">
                  Conectemos con comedores, cocinas, foros, distribuidores, prescriptores y el público corporativo que tu marca necesita.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenContact("Marcas HORECA - Activación")}
                  className="w-full bg-black hover:bg-neutral-900 text-white font-display font-extrabold text-xs tracking-widest py-3.5 uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  ¡Me interesa!
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
