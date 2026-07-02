import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';

interface OperadoresProps {
  onOpenContact: (category?: string) => void;
  onBack?: () => void;
}

const PROFILES = [
  {
    num: "[ 1 ]",
    title: "Chefs y hosteleros independientes",
    desc: "Profesionales que quieren estar conectados con la actualidad del sector, acceder a contenidos útiles, participar en iniciativas colectivas o formar parte de comunidades gastronómicas con recorrido.",
    serviceTitle: "Línea de acción: Comunidad de Creadores",
    serviceDesc: "",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "[ 2 ]",
    title: "Grupos de restauración",
    desc: "Empresas que necesitan trabajar su posicionamiento, fortalecer su relato, conectar con otros líderes del sector o activar proyectos que les ayuden a crecer con una mirada estratégica.",
    serviceTitle: "Línea de acción: Posicionamiento y Relato",
    serviceDesc: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "[ 3 ]",
    title: "Restauración organizada",
    desc: "Cadenas, franquicias, grupos multimarca y operadores que buscan visibilidad, conocimiento, conexiones y espacios de conversación relevantes dentro del ecosistema HORECA.",
    serviceTitle: "Línea de acción: Innovación y Tendencias",
    serviceDesc: "",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "[ 4 ]",
    title: "Cadenas hoteleras y perfiles de F&B",
    desc: "Hoteles, grupos hoteleros y responsables de F&B que quieren potenciar su propuesta gastronómica, conectar con tendencias y desarrollar proyectos con mayor valor diferencial.",
    serviceTitle: "Línea de acción: Activación Gastronómica F&B",
    serviceDesc: "",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "[ 5 ]",
    title: "Consultores de foodservice",
    desc: "Profesionales especializados en restauración, equipamiento, operaciones, estrategia F&B o desarrollo de conceptos que quieren formar parte de una red sectorial más amplia.",
    serviceTitle: "Línea de acción: Red de Soluciones Técnicas",
    serviceDesc: "",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "[ 6 ]",
    title: "Directivos, asociaciones y otros perfiles del sector",
    desc: "Personas y organizaciones que influyen en la evolución del sector y buscan espacios de encuentro, contenido, colaboración y activación.",
    serviceTitle: "Línea de acción: Alianzas Sectoriales Estructuradas",
    serviceDesc: "",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Operadores({ onOpenContact, onBack }: OperadoresProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#inicio';
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Highly progressive physics-based spring progress to create an incredibly buttery, cushioned, and elegant deceleration momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 18,
    damping: 25,
    mass: 1.2,
    restDelta: 0.0001
  });

// Setup smooth transforming scroll progress over the 6 main cards
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-81%"]);
  return (
    <div className="bg-black text-black min-h-screen font-sans">
      
      {/* ========================================================================= */}
      {/* SPLIT SCREEN HERO HEADER WITH PHOTO ON LEFT & GIANT TYPOGRAPHY ON RIGHT */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[847.5px] min-h-[85vh]">
        {/* Left Side: Close-up Textured Leaf Image with Water Droplets */}
        <div className="relative h-[55vh] lg:h-full overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop"
            alt="Moody close up of a textured purple beetroot with water droplets"
            className="w-full h-full object-cover select-none pointer-events-none scale-100 hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Side: Black Content Box */}
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
          
          {/* Header Title Word list */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#B2D3C2] tracking-[0.3em] block uppercase mb-4">
              [ SERVICIOS // OPERADORES ]
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-none text-white uppercase"
            >
              OPERADORES
            </motion.h1>
          </div>

          <div className="space-y-6 max-w-xl">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-sans text-xl md:text-2xl text-gray-200 font-light leading-relaxed text-left"
            >
              Conectamos a los operadores HORECA con ideas, proyectos y oportunidades de valor
            </motion.h2>

            {/* Secondary Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-sans text-[18px] text-gray-400 font-light leading-relaxed text-left"
            >
              Trabajamos con profesionales, grupos y empresas del sector que quieren reforzar su posicionamiento, estar más cerca de las tendencias y formar parte de iniciativas con impacto real en la gastronomía y la hostelería.
            </motion.p>
          </div>

          {/* Side by side action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* SOLID GREEN CURTAIN BUTTON */}
            <button
              onClick={() => onOpenContact("Operadores HORECA")}
              className="btn-curtain btn-curtain-green inline-flex items-center gap-3 px-9 py-4 font-display font-extrabold text-[13px] tracking-widest transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 group cursor-pointer"
            >
              CUÉNTANOS TU RETO
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION: ¿A QUIEN NOS DIRIGIMOS? (Full width white bg) */}
      {/* ========================================================================= */}
      <div className="w-full bg-white py-[200px] scroll-mt-24" id="a-quien-nos-dirigimos">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-black uppercase">
                ¿A quién nos <br className="hidden lg:inline" />dirigimos?
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-lg md:text-[22px] font-light leading-snug md:leading-relaxed text-gray-800">
              <p>
                Nos dirigimos a quienes forman parte activa del universo HORECA: profesionales, empresas, grupos y organizaciones que quieren estar más conectados con el sector, ganar visibilidad, acceder a nuevas oportunidades o impulsar proyectos con sentido.
              </p>
              <p>
                No todos necesitáis lo mismo. Por eso trabajamos desde distintas puertas de entrada: estrategia, contenidos, comunidad, sostenibilidad, entretenimiento, eventos, alianzas o proyectos especiales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BODY CONTENT (INTRO BLOCK) with full-width green background */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#B2D3C2] py-20 md:py-28 overflow-hidden">
        <div className="w-full px-6">

          {/* ========================================================================= */}
          {/* BLOCK 2: ¿ERES UNO DE ESTOS PERFILES? */}
          {/* ========================================================================= */}
          <div>
            <div className="w-full text-center">
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
                  {"¿ERES UNO DE ESTOS PERFILES Y/O QUIERES CONECTAR CON UNO DE ELLOS?".split(" ").map((word, idx) => {
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
                <span className="block overflow-hidden py-2 text-white inline-flex flex-wrap justify-center">
                  {"PODEMOS AYUDARTE".split(" ").map((word, idx) => {
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
      </div>

      {/* ========================================================================= */}
      {/* HORIZONTAL STICKY SCROLL SECTION */}
      {/* ========================================================================= */}
      <div ref={containerRef} className="relative h-[480vh] bg-[#FAF9F6] w-full">
        
        {/* At the beginning of the section: Intro text block */}
        <div className="w-full pt-20 pb-20 bg-[#ECF4EC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-6 text-black font-sans text-xl md:text-[32px] font-light leading-snug md:leading-relaxed text-left">
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-left"
              >
                No todos los operadores buscan lo mismo. Algunos necesitan{' '}
                <span className="relative inline-block font-medium text-black">
                  comunidad,
                  <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#B2D3C2] -z-10" />
                </span>{' '}
                otros{' '}
                <span className="relative inline-block font-medium text-black">
                  inspiración,
                  <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#B2D3C2] -z-10" />
                </span>{' '}
                otros{' '}
                <span className="relative inline-block font-medium text-black">
                  visibilidad,
                  <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#B2D3C2] -z-10" />
                </span>{' '}
                otros{' '}
                <span className="relative inline-block font-medium text-black">
                  estrategia,
                  <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#B2D3C2] -z-10" />
                </span>{' '}
                otros{' '}
                <span className="relative inline-block font-medium text-black">
                  acceso
                  <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#B2D3C2] -z-10" />
                </span>{' '}
                a tendencias o espacios de relación.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-right"
              >
                Por eso nuestro ecosistema reúne proyectos, alianzas e iniciativas pensadas para conectar con distintas realidades del sector gastronómico y HORECA.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#FAF9F6]">
          {/* Subtle Navigation Guide Tag Header */}
          <div className="max-w-7xl mx-auto w-full px-6 mb-8 flex justify-between items-center text-gray-400 font-mono text-[11px] tracking-[0.25em] uppercase">
            <span>[ DESLIZA VERTICALMENTE PARA CONTROLAR LA NAVEGACIÓN ]</span>
            <span>GASTRONOMÍA // HORECA</span>
          </div>

          {/* Running Horizontally Pinned Track */}
          <div className="relative w-full overflow-hidden flex items-center">
            <motion.div style={{ x }} className="flex gap-12 px-[10vw]">
              {PROFILES.map((profile, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-[85vw] sm:w-[600px] md:w-[750px] lg:w-[1300px] shrink-0 p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center rounded-none transition-all duration-300"
                  >
                    {/* Left side: Moody visual with custom overlay */}
                    <div className="w-full lg:w-[800px] h-[500px] relative group overflow-hidden bg-gray-950 shrink-0">
                      <img
                        src={profile.image}
                        alt={profile.title}
                        className="w-full h-full object-cover select-none pointer-events-none scale-100 group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#86a695]/15 mix-blend-color pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right side: Highly typography-focused information panel */}
                    <div className="w-full lg:flex-1 space-y-6 text-left flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="flex flex-col gap-1 md:gap-2">
                          <span className="font-mono text-sm md:text-base tracking-[0.15em] text-neutral-400 font-bold">
                            {profile.num}
                          </span>
                          <h3 className="font-display font-black text-3xl md:text-5xl lg:text-[56px] tracking-tight leading-tight md:leading-none text-black uppercase">
                            {profile.title}
                          </h3>
                        </div>
                        <p className="font-sans text-sm md:text-base text-gray-700 font-light leading-relaxed">
                          {profile.desc}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-gray-150 space-y-1">
                        <span className="block font-display font-black text-xs tracking-wider text-[#4a6b5a] uppercase">
                          {profile.serviceTitle}
                        </span>
                        {profile.serviceDesc && (
                          <p className="font-sans text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                            {profile.serviceDesc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Scrolling dynamic indicator bar */}
          <div className="max-w-xs mx-auto w-full px-6 mt-12">
            <div className="h-[2px] bg-gray-200 w-full rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#86a695]"
                style={{ 
                  width: useTransform(smoothProgress, [0, 1], ["10%", "100%"]),
                  scaleX: 1, 
                  transformOrigin: "left" 
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BLOCK 3: Ventajas / Iniciativas "Si te interesa..." inside wrapper */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 overflow-hidden pt-0 md:pt-0">
        <div className="pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div 
              onClick={() => onOpenContact("Ecohostelero")}
              className="relative bg-[#1A1A1A] border border-white/5 rounded-none overflow-hidden flex flex-col justify-end group min-h-[480px] h-full transition-all duration-300 hover:border-white/10 cursor-pointer"
            >
              {/* Full background food texture picture */}
              <div className="absolute inset-0 overflow-hidden grayscale contrast-125 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Ecohostelero"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-95" />
              </div>

              {/* Solid green curtain rising from the bottom line under hover */}
              <div className="absolute inset-0 bg-[#B2D3C2] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

              {/* Card descriptions overlay */}
              <div className="relative z-10 p-8 flex flex-col justify-between gap-6 pt-32 h-full">
                <div className="space-y-3 mt-auto text-left">
                  <span className="font-mono text-[16px] uppercase tracking-[0.2em] text-[#86a695] group-hover:text-[#163524] font-black transition-colors duration-500 block">
                    Si te interesa la sostenibilidad...
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-[48px] uppercase tracking-tight text-white group-hover:text-[#121212] transition-colors duration-500 leading-tight md:leading-none">
                    Ecohostelero
                  </h3>
                  <p className="font-sans text-base text-gray-300 font-light leading-relaxed group-hover:text-black transition-colors duration-500">
                    Contenidos, enfoque y soluciones para avanzar hacia una hostelería más consciente, eficiente y alineada con los nuevos retos del sector. Una iniciativa pensada para acercar la sostenibilidad a la reality diaria de bares, restaurantes, operadores y profesionales HORECA.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between text-xs font-mono font-bold text-gray-400 group-hover:text-[#121212] transition-colors duration-500">
                  <span>ME INTERESA</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#121212] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => onOpenContact("Horeca Entertainment")}
              className="relative bg-[#1A1A1A] border border-white/5 rounded-none overflow-hidden flex flex-col justify-end group min-h-[480px] h-full transition-all duration-300 hover:border-white/10 cursor-pointer"
            >
              {/* Full background food texture picture */}
              <div className="absolute inset-0 overflow-hidden grayscale contrast-125 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
                  alt="Horeca Entertainment"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-95" />
              </div>

              {/* Solid green curtain rising from the bottom line under hover */}
              <div className="absolute inset-0 bg-[#B2D3C2] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

              {/* Card descriptions overlay */}
              <div className="relative z-10 p-8 flex flex-col justify-between gap-6 pt-32 h-full">
                <div className="space-y-3 mt-auto text-left">
                  <span className="font-mono text-[16px] uppercase tracking-[0.2em] text-[#86a695] group-hover:text-[#163524] font-black transition-colors duration-500 block">
                    Si quieres mejorar la experiencia del cliente...
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-[48px] uppercase tracking-tight text-white group-hover:text-[#121212] transition-colors duration-500 leading-tight md:leading-none">
                    Horeca Entertainment
                  </h3>
                  <p className="font-sans text-base text-gray-300 font-light leading-relaxed group-hover:text-black transition-colors duration-500">
                    Ideas, inspiración y proyectos para integrar música, entretenimiento y experiencia en la propuesta de valor de los espacios HORECA. Porque la gastronomía no solo se sirve: también se vive, se escucha y se recuerda.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between text-xs font-mono font-bold text-gray-400 group-hover:text-[#121212] transition-colors duration-500">
                  <span>ME INTERESA</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#121212] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => onOpenContact("FCSI Iberia")}
              className="relative bg-[#1A1A1A] border border-white/5 rounded-none overflow-hidden flex flex-col justify-end group min-h-[480px] h-full transition-all duration-300 hover:border-white/10 cursor-pointer"
            >
              {/* Full background food texture picture */}
              <div className="absolute inset-0 overflow-hidden grayscale contrast-125 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop"
                  alt="FCSI Iberia"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-95" />
              </div>

              {/* Solid green curtain rising from the bottom line under hover */}
              <div className="absolute inset-0 bg-[#B2D3C2] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

              {/* Card descriptions overlay */}
              <div className="relative z-10 p-8 flex flex-col justify-between gap-6 pt-32 h-full">
                <div className="space-y-3 mt-auto text-left">
                  <span className="font-mono text-[16px] uppercase tracking-[0.2em] text-[#86a695] group-hover:text-[#163524] font-black transition-colors duration-500 block">
                    Si eres consultor o consultora de foodservice...
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-[48px] uppercase tracking-tight text-white group-hover:text-[#121212] transition-colors duration-500 leading-tight md:leading-none">
                    FCSI Iberia
                  </h3>
                  <p className="font-sans text-base text-gray-300 font-light leading-relaxed group-hover:text-black transition-colors duration-500">
                    Conexión con la comunidad de consultoría especializada en foodservice, restauración, equipamiento y estrategia F&B. Un espacio para profesionales que trabajan en l'transformación, planificación y mejora de proyectos gastronómicos.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between text-xs font-mono font-bold text-gray-400 group-hover:text-[#121212] transition-colors duration-500">
                  <span>ME INTERESA</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#121212] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div 
              onClick={() => onOpenContact("Ferias y encuentros")}
              className="relative bg-[#1A1A1A] border border-white/5 rounded-none overflow-hidden flex flex-col justify-end group min-h-[480px] h-full transition-all duration-300 hover:border-white/10 cursor-pointer"
            >
              {/* Full background food texture picture */}
              <div className="absolute inset-0 overflow-hidden grayscale contrast-125 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
                  alt="Ferias, congresos y encuentros HORECA"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-95" />
              </div>

              {/* Solid green curtain rising from the bottom line under hover */}
              <div className="absolute inset-0 bg-[#B2D3C2] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />

              {/* Card descriptions overlay */}
              <div className="relative z-10 p-8 flex flex-col justify-between gap-6 pt-32 h-full">
                <div className="space-y-3 mt-auto text-left">
                  <span className="font-mono text-[16px] uppercase tracking-[0.2em] text-[#86a695] group-hover:text-[#163524] font-black transition-colors duration-500 block">
                    Si te mueves entre varias realidades del sector...
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-[48px] uppercase tracking-tight text-white group-hover:text-[#121212] transition-colors duration-500 leading-tight md:leading-none">
                    Ferias y encuentros
                  </h3>
                  <p className="font-sans text-base text-gray-300 font-light leading-relaxed group-hover:text-black transition-colors duration-500">
                    Te acercamos a los espacios, eventos y conversaciones donde se construye el presente y el futuro del sector HORECA. Diseñamos e impulsamos encuentros de gran valor nacional e internacional.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between text-xs font-mono font-bold text-gray-400 group-hover:text-[#121212] transition-colors duration-500">
                  <span>ME INTERESA</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#121212] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Clean Action Button removed as cards are now directly clickable */}
        </div>

      </div>
    </div>
  );
}
