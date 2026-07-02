import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Store,
  Map,
  Compass,
  Wheat,
  Network,
  BookOpen,
  TrendingUp
} from 'lucide-react';

interface TerritoriosProps {
  onOpenContact: (category?: string) => void;
  onOpenProject?: (index: number) => void;
  onBack?: () => void;
}

export default function Territorios({ onOpenContact, onOpenProject, onBack }: TerritoriosProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#inicio';
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    if (scrollWidth === clientWidth) return;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Translate vertical scroll wheel gesture to horizontal slide
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      
      // Determine if visual scroll is at the very boundaries
      const canScrollLeft = scrollLeft > 2;
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 2;

      // Intercept vertical wheel scrolling and convert to horizontal scroll
      if ((e.deltaY < 0 && canScrollLeft) || (e.deltaY > 0 && canScrollRight)) {
        e.preventDefault();
        carousel.scrollBy({
          left: e.deltaY * 0.95,
          behavior: 'auto' // 'auto' feels very snappy and matches wheel movement
        });
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      carousel.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Recalculate progress on resize just in case
  useEffect(() => {
    const handleResize = () => {
      handleScroll();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="bg-black text-black min-h-screen font-sans">
      
      {/* SECTION 1: SPLIT SCREEN HERO (Header exactly of same size and style as Marcas & Operadores) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[847.5px] min-h-[85vh]">
        {/* Left Image Column */}
        <div className="relative h-[55vh] lg:h-full overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
            alt="Paisaje vitivinícola y campos tradicionales singulares"
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
              [ SERVICIOS // TERRITORIOS ]
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-none text-white uppercase"
            >
              TERRITORIOS
            </motion.h1>
          </div>

          <div className="space-y-6 max-w-xl text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-sans text-xl md:text-2xl text-gray-200 font-bold leading-tight"
            >
              Activamos territorios, productos y destinos a través de la gastronomía
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              Trabajamos con instituciones, administraciones, destinos turísticos, asociaciones, consejos reguladores, denominaciones de origen y entidades vinculadas al producto local que quieren utilizar la gastronomía como herramienta de dinamización, promoción y posicionamiento.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              Diseñamos planes, acciones, contenidos y proyectos capaces de conectar territorio, producto, hostelería, turismo y ciudadanía.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => onOpenContact("Territorios / Producto Local")}
              className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 group cursor-pointer"
            >
              CUÉNTANOS TU RETO
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: ¿A QUIÉN NOS DIRIGIMOS? (White Background) */}
      <div className="w-full bg-white py-24 md:py-32 scroll-mt-24" id="a-quien-nos-dirigimos">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back button positioned nicely on the left */}
          <div className="mb-10 flex justify-start">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-black transition-colors group cursor-pointer uppercase"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              VOLVER A INICIO
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-black uppercase">
                ¿A quién <br />nos dirigimos?
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-base md:text-lg font-light leading-relaxed text-gray-800 text-left">
              <p className="text-xl font-bold text-black font-sans leading-snug">
                Nos dirigimos a entidades que quieren utilizar la gastronomía como una palanca de desarrollo, promoción y conexión con el sector.
              </p>
              <p className="text-[#3c3c3c] font-sans text-base">
                Trabajamos con instituciones y organizaciones que necesitan activar un territorio, dinamizar su tejido hostelero, posicionar un producto o crear proyectos capaces de generar impacto cultural, turístico, comercial o social.
              </p>
            </div>
          </div>

          {/* List/Grid of targets with sophisticated horizontal line styling instead of heavy boxes */}
          <div className="mt-16 border-t border-gray-200 divide-y divide-gray-150">
            {[
              {
                title: "Administraciones públicas",
                desc: "Ayuntamientos, diputaciones, comunidades autónomas y organismos públicos que quieren impulsar la hostelería, el comercio local o la identidad gastronómica de su territorio.",
                image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Destinos turísticos",
                desc: "Entidades y organismos que buscan posicionar un destino a través de su cocina, su producto, sus restaurantes, sus mercados y su forma de entender la gastronomía.",
                image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Consejos reguladores y denominaciones de origen",
                desc: "Organizaciones que quieren reforzar el value de un producto, acercarlo a la hostelería, generar contenido, activar campañas o construir un relato más conectado con el consumidor y el territorio.",
                image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Productores, cooperativas y marcas agroalimentarias",
                desc: "Proyectos vinculados al producto local que quieren ganar visibilidad, profesionalizar su comunicación y conectar con chefs, hosteleros, prescriptores y consumidores.",
                image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Asociaciones y entidades sectoriales",
                desc: "Organizaciones que representan al sector hostelero, agroalimentario, turístico o gastronómico y necesitan desarrollar proyectos de promoción, formación, dinamización o comunicación.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
              }
            ].map((audience, idx) => (
              <div 
                key={idx} 
                className="w-full py-10 md:py-0 md:h-[200px] flex flex-col md:flex-row gap-6 md:gap-8 items-center text-left group hover:bg-neutral-50 pl-0 pr-4 md:pl-0 md:pr-6 transition-all duration-500 ease-[0.16,1,0.3,1] overflow-hidden"
              >
                {/* Left Area: Number & Expanding Hover Image (Fill Height) */}
                <div className="relative overflow-hidden flex items-center justify-center transition-all duration-500 ease-[0.16,1,0.3,1] shrink-0 self-stretch rounded-none bg-neutral-100/30
                  w-12 h-12 md:w-16 md:h-full
                  group-hover:w-full md:group-hover:w-[240px] group-hover:h-[200px] md:group-hover:h-full"
                >
                  {/* The Background Photo */}
                  <img 
                    src={audience.image} 
                    alt={audience.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[0.16,1,0.3,1] opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 pointer-events-none z-0"
                  />
                  {/* Subtle dark tint to make the overlaid number perfectly legible on hover */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-colors duration-500 z-10" />

                  {/* The Number */}
                  <span className="relative z-20 font-mono text-xs md:text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content Box */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-11 gap-6 items-center w-full">
                  <div className="md:col-span-4">
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-neutral-900 group-hover:text-[#4a725e] transition-colors duration-300">
                      {audience.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7 font-sans text-[15px] sm:text-base text-gray-600 font-light leading-relaxed">
                    {audience.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

               {/* SECTION 3: QUÉ PODEMOS AYUDARTE A CONSEGUIR */}
      <div className="w-full bg-[#B2D3C2] py-24 md:py-32 border-t border-b border-black/10 text-black relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Bar with Section Title and Aplus Branding */}
          <div className="flex justify-between items-center border-b border-black/10 pb-6 mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-black/80 font-bold uppercase">
              [ TERRITORIOS Y PRODUCTOS ]
            </span>
            <div className="flex flex-col items-end shrink-0 select-none">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[#B2D3C2] font-display font-bold text-xs">
                  a
                </div>
                <span className="font-display font-black text-lg tracking-tighter text-black uppercase leading-none">
                  plus
                </span>
              </div>
              <span className="text-[6.5px] tracking-[0.2em] font-mono font-black text-black uppercase leading-none mt-0.5 mr-0.5">
                GASTROMARKETING
              </span>
            </div>
          </div>

          {/* 3-Column Layout from the Mock Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* COLUMN 1: Cards 01, 04, 06 */}
            <div className="flex flex-col gap-6">
              {/* Card 01 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        01 // OBJETIVO
                      </span>
                      <Store className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      DINAMIZAR EL COMERCIO HOSTELERO
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    Diseñamos planes y acciones para activar bares, restaurantes, mercados, productores y comercios vinculados a la gastronomía local.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        04 // OBJETIVO
                      </span>
                      <Wheat className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      PONER EN VALOR EL PRODUCTO LOCAL
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    Ayudamos a productores, cooperativas, denominaciones de origen y consejos reguladores a convertir su producto en una herramienta de posicionamiento gastronómico, territorial y comercial.
                  </p>
                </div>
              </div>

              {/* Card 06 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        06 // OBJETIVO
                      </span>
                      <BookOpen className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      CREAR CONTENIDOS CON SENTIDO TERRITORIAL
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    Desarrollamos relatos, piezas editoriales, campañas, entrevistas, rutas, guías y formatos que ayudan a contar mejor la identidad gastronómica de cada lugar.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Cards 02, 05, 07 */}
            <div className="flex flex-col gap-6">
              {/* Card 02 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        02 // OBJETIVO
                      </span>
                      <Map className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      POSICIONAR UN TERRITORIO DESDE LA GASTRONOMÍA
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    Construimos relatos, campañas y proyectos que ayudan a convertir la cocina, el producto y la cultura gastronómica en activos diferenciales del territorio.
                  </p>
                </div>
              </div>

              {/* Card 05 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        05 // OBJETIVO
                      </span>
                      <Network className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      CONECTAR PRODUCTO, HOSTELERÍA Y CONSUMIDOR
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    Diseñamos acciones que acercan el producto al canal HORECA, a chefs, a restaurantes, a prescriptores y al consumidor final.
                  </p>
                </div>
              </div>

              {/* Card 07 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        07 // OBJETIVO
                      </span>
                      <TrendingUp className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      ACTIVAR PROYECTOS CON RECORRIDO
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    No planteamos acciones aisladas. Diseñamos iniciativas que puedan crecer, repetirse, generar comunidad y dejar valor en el territorio.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 3: Card 03 & Highlight Text Block with Page Number */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 03 */}
              <div className="p-8 bg-transparent border border-black hover:bg-black/5 transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
                <div className="space-y-4 flex flex-col h-full justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-black/60 tracking-wider uppercase">
                        03 // OBJETIVO
                      </span>
                      <Compass className="w-5 h-5 text-black/40 group-hover:text-black transition-colors duration-300 stroke-[1.2]" />
                    </div>
                    <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform duration-200">
                      IMPULSAR DESTINOS TURÍSTICOS GASTRONÓMICOS
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-black font-light leading-relaxed">
                    Creamos estrategias y contenidos para reforzar el atractivo gastronómico de destinos que quieren atraer visitantes, generar experiencia y diferenciarse.
                  </p>
                </div>
              </div>

              {/* Text Block */}
              <div className="flex-1 flex flex-col justify-between pt-6 lg:pt-8 pb-2">
                <div className="space-y-6 text-left">
                  <h2 className="font-display font-black text-5xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
                    QUÉ <br />
                    PODEMOS <br />
                    AYUDARTE A <br />
                    CONSEGUIR
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="font-sans text-[14.5px] sm:text-base text-black font-semibold leading-relaxed">
                      Cada territorio, producto o institución tiene un reto distinto. Algunos necesitan dinamizar su hostelería. Otros quieren posicionarse como destino gastronómico. Otros buscan dar valor a un producto local o conectar mejor con el sector.
                    </p>
                    <p className="font-sans text-xs sm:text-[13.5px] text-black/80 font-light leading-relaxed">
                      En Aplus diseñamos proyectos que convierten esos retos en acciones concretas, medibles y conectadas con la realidad gastronómica.
                    </p>
                  </div>
                </div>

                {/* Page Number from Mock layout */}
                <div className="flex justify-end items-end mt-8">
                  <span className="font-display font-black text-3xl md:text-4xl text-black">
                    27
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 4: CÓMO ACTIVAMOS INSTITUCIONES, TERRITORIOS Y PRODUCTOS */}
      <div className="w-full bg-[#121212] py-24 md:py-32 text-white border-b border-black">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl space-y-6 text-left">
              <span className="font-mono text-xs text-[#B2D3C2] tracking-[0.25em] block uppercase">
                [ NUESTRA METODOLOGÍA ]
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl tracking-tight leading-none text-white uppercase">
                Cómo activamos instituciones, <br />territorios y productos
              </h2>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-[#B2D3C2] flex items-center justify-center text-white hover:text-[#B2D3C2] transition-colors bg-white/5 cursor-pointer hover:bg-white/10"
                aria-label="Diapositiva anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-[#B2D3C2] flex items-center justify-center text-white hover:text-[#B2D3C2] transition-colors bg-white/5 cursor-pointer hover:bg-white/10"
                aria-label="Siguiente diapositiva"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4 Pillars Carousel */}
          <div className="relative">
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 scrollbar-none"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {[
                {
                  num: "01",
                  title: "Planes de dinamización hostelera",
                  desc: "Diseñamos programas para activar el tejido hostelero de un municipio, comarca o territorio. Creamos acciones que ayudan a generar movimiento, participación, visibilidad y conexión entre hostelería, producto local, ciudadanía y visitantes.",
                  image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
                },
                {
                  num: "02",
                  title: "Estrategia gastronómica territorial",
                  desc: "Ayudamos a definir cómo debe posicionarse un territorio desde su gastronomía. Trabajamos el relato, los atributos diferenciales, los públicos, las oportunidades y las acciones necesarias para convertir la cocina local en una ventaja competitiva.",
                  image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop"
                },
                {
                  num: "03",
                  title: "Posicionamiento de producto local y agroalimentario",
                  desc: "Convertimos el producto en protagonista. Diseñamos planes y acciones para que productores, cooperativas, denominaciones de origen, consejos reguladores e instituciones puedan reforzar el valor gastronómico, comercial y cultural de sus productos.",
                  image: "https://images.unsplash.com/photo-1488459718957-3920bc0a95ff?q=80&w=800&auto=format&fit=crop"
                },
                {
                  num: "04",
                  title: "Campañas, eventos y activaciones",
                  desc: "Creamos jornadas, rutas, presentaciones, encuentros, showcookings, campañas, experiencias y formatos capaces de llevar el proyecto al terreno. La gastronomía se entiende mejor cuando se vive, se prueba y se comparte.",
                  image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
                }
              ].map((pillar) => (
                <div 
                  key={pillar.num}
                  className="w-[85vw] sm:w-[500px] md:w-[600px] lg:w-[800px] shrink-0 bg-[#1a1a1a] border border-white/5 flex flex-col md:flex-row items-stretch hover:border-[#B2D3C2] transition-all duration-300 group rounded-none text-left overflow-hidden min-h-[260px] snap-start"
                >
                  {/* Left side: Text details */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="font-mono text-xs text-gray-500 group-hover:text-[#B2D3C2] transition-colors font-bold tracking-widest block">
                        [ {pillar.num} // PILAR ]
                      </span>
                      <div className="space-y-3">
                        <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight group-hover:text-[#B2D3C2] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="font-sans text-[14px] md:text-[15px] text-gray-400 font-light leading-relaxed max-w-3xl">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side: Image block */}
                  <div className="w-full md:w-[40%] h-[260px] md:h-auto relative overflow-hidden bg-gray-950 shrink-0">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover select-none pointer-events-none scale-100 group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#4a725e]/10 mix-blend-color pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Custom elegant dynamic progress line indicator matching brand styling */}
            <div className="mt-8 max-w-xs mx-auto w-full">
              <div className="h-[2px] bg-white/10 w-full rounded-full overflow-hidden relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#B2D3C2] transition-all duration-150 ease-out"
                  style={{ 
                    width: `${Math.max(12, scrollProgress)}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: CASOS DE ÉXITO DE TERRITORIO Y PRODUCTO */}
      <div className="w-full bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 text-left mb-16">
            <span className="font-mono text-xs text-[#4a725e] tracking-[0.25em] block uppercase">
              [ CASOS REALES // SECTOR COMUNIDAD ]
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-black uppercase">
              Casos de éxito de territorio <br />y producto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "TURISMO DE TENERIFE",
                desc: "Aplus Gastromarketing ha sido la agencia encargada de gestionar y desarrollar la estrategia de marketing gastronómico impulsada por Turismo de Tenerife dentro del Plan Director para la Gastronomía y el Turismo de la isla. Este proyecto, promovido por el Cabildo de Tenerife, nace con el objetivo de fortalecer la competitividad, la innovación y la profesionalización del sector gastronómico insular, ofreciendo herramientas reales de crecimiento a profesionales, emprendedores y negocios de toda Tenerife.",
                img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "SHOWCOOKING EN LOS MERCADOS DE MADRID",
                desc: "En Aplus Gastromarketing también hemos desarrollado la campaña \"Su Turno de Disfrutar\" junto al Ayuntamiento de Madrid y más de 40 mercados municipales de la ciudad. Una iniciativa creada para poner en valor el producto de km 0, la gastronomía local y el comercio de proximidad a través de experiencias gastronómicas únicas, showcookings y activaciones en los propios mercados.",
                img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "ALIMENTOS DE ESPAÑA",
                desc: "Aplus Gastromarketing también gestiona la estrategia y dinamización de redes sociales de Alimentos de España, la marca impulsada por el Ministerio de Agricultura, Pesca y Alimentación para promocionar y poner en valor los productos, la gastronomía y la cultura alimentaria española. Nuestro trabajo se centra en desarrollar una comunicación digital cercana, creativa y estratégica, capaz de conectar con profesionales, consumidores y amantes de la gastronomía a través de contenidos adaptados a las nuevas tendencias del sector food y del marketing gastronómico.",
                img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=800&auto=format&fit=crop"
              }
            ].map((project, idx) => (
              <div key={idx} className="flex flex-col text-left space-y-6 group">
                <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display font-black text-xl md:text-2xl text-black uppercase tracking-tight leading-tight group-hover:underline group-hover:decoration-black group-hover:decoration-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-gray-700 font-light leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 6: CUÉNTANOS QUÉ QUIERES ACTIVAR */}
      <div className="w-full bg-[#FAF9F6] py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black uppercase tracking-tight leading-tight">
            Cuéntanos qué quieres activar
          </h2>
          <p className="font-sans text-neutral-800 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Si quieres dinamizar la hostelería de tu territorio, posicionar un destino, impulsar un producto local o desarrollar un proyecto gastronómico con impacto, podemos ayudarte. Partimos de tu reto y diseñamos una estrategia capaz de conectar territorio, producto, sector y público.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onOpenContact("Territorios / Producto Local - Qué quieres activar")}
              className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-12 py-5 font-display font-extrabold text-[14px] tracking-widest uppercase transition-all duration-200 cursor-pointer"
            >
              ¡Me interesa!
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
