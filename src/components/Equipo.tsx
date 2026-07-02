import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Linkedin, Mail, X, Sparkles, Utensils, GlassWater, Award } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  role: string;
  category: 'dirección' | 'estrategia' | 'eventos' | 'marketing' | 'diseño' | 'gestión';
  categoryLabel: string;
  bio: string;
  longBio: string;
  image: string;
  specialty: string;
  favoriteDish: string;
  favoriteWine: string;
  superpower: string;
  linkedin: string;
  email: string;
}

const PROFILES: Profile[] = [
  // DIRECCIÓN & ESTRATEGIA
  {
    id: 1,
    name: "Diego Olmedilla Guiseris",
    role: "CEO & Fundador",
    category: "dirección",
    categoryLabel: "Dirección, Estrategia & Territorio",
    bio: "Diego lidera la visión estratégica de Aplus Gastromarketing y representa el espíritu pionero de la agencia en el desarrollo del marketing gastronómico en España.",
    longBio: "Su trabajo conecta estrategia, sector HORECA, marcas, eventos, proyectos institucionales y relaciones con los principales actores de la gastronomía. Además, es una de las caras visibles de Aplus en foros, congresos y espacios de reflexión sectorial. En Alimentaria aparece como CEO de Aplus Gastromarketing. ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    specialty: "Consultoría Estratégica & Relaciones Institucionales",
    favoriteDish: "Salmorejo cordobés tradicional con jamón ibérico",
    favoriteWine: "Fino de Jerez seleccionado",
    superpower: "Conectar marcas con oportunidades únicas del sector",
    linkedin: "https://linkedin.com",
    email: "alvaro@aplusgastro.com"
  },
  {
    id: 2,
    name: "Elena Martín Navarro",
    role: "Cofundadora de Aplus Gastromarketing",
    category: "dirección",
    categoryLabel: "Dirección de recursos humanos",
    bio: "Elena forma parte del origen de Aplus Gastromarketing. Junto a Diego Olmedilla fundó la agencia en 2005, construyendo una compañía pionera en marketing gastronómico y especializada en el sector HORECA.",
    longBio: "Elena forma parte del origen de Aplus Gastromarketing. Junto a Diego Olmedilla fundó la agencia en 2005, construyendo una compañía pionera en marketing gastronómico y especializada en el sector HORECA.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    specialty: "Estrategia Corporativa & Desarrollo de Negocio HORECA",
    favoriteDish: "Jamón ibérico de bellota de Los Pedroches con pan de cristal",
    favoriteWine: "Vino tinto crianza D.O. Ribera del Duero",
    superpower: "Visión de negocio 360º y liderazgo estratégico sectorial",
    linkedin: "https://linkedin.com",
    email: "elena@aplusmk.com"
  },
  {
    id: 3,
    name: "Alfredo García-Plata Fernández",
    role: "Director de Relaciones Institucionales",
    category: "estrategia",
    categoryLabel: "Dirección, Estrategia & Territorio",
    bio: "Alfredo conecta Aplus con el ámbito institucional, territorial y público-privado. Su perfil es especialmente relevante para proyectos con administraciones, territorios, producto local, dinamización hostelera y licitaciones.",
    longBio: "Alfredo conecta Aplus con el ámbito institucional, territorial y público-privado. Su perfil es especialmente relevante para proyectos con administraciones, territorios, producto local, dinamización hostelera y licitaciones.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    specialty: "Relaciones Institucionales, Licitaciones & Desarrollo Territorial",
    favoriteDish: "Cochinillo crujiente a baja temperatura con su guarnición",
    favoriteWine: "Tinto Ribera del Duero Gran Reserva",
    superpower: "Conectar de manera ágil el sector público y el privado",
    linkedin: "https://linkedin.com",
    email: "alfredo@aplusmk.com"
  },
  {
    id: 4,
    name: "Pablo Bellenda",
    role: "Director de Marketing",
    category: "estrategia",
    categoryLabel: "Estrategia & Marketing",
    bio: "Lidera la estrategia de marketing, comunicación y contenidos de Aplus Gastromarketing. Su perfil combina creatividad publicitaria, estrategia de marca y conocimiento del sector gastronómico.",
    longBio: "Texto.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Pistos manchegos artesanos con huevo de corral",
    favoriteWine: "Tinto de uva Prieto Picudo",
    superpower: "Entender el lenguaje del agricultor y traducirlo a marketing",
    linkedin: "https://linkedin.com",
    email: "ines@aplusgastro.com"
  },
  {
    id: 5,
    name: "Rodrigo Domínguez Sáez",
    role: "Director de Estrategia",
    category: "estrategia",
    categoryLabel: "Estrategia & Negocio",
    bio: "Trabaja en la parte estratégica de los proyectos, ayudando a traducir tendencias, retos de negocio y oportunidades del sector HORECA en propuestas accionables.",
    longBio: "Texto.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Tártaro de lubina con cítricos silvestres",
    favoriteWine: "Rosado pálido provenzal",
    superpower: "Transformar conceptos conceptuales en sensaciones físicas",
    linkedin: "https://linkedin.com",
    email: "sandra@aplusgastro.com"
  },
    // OPERACIONES, EVENTOS & I+D
  {
    id: 6,
    name: "Marcos Martín",
    role: "Director de producción",
    category: "eventos",
    categoryLabel: "Label",
    bio: "Redactor de manifiestos gastronómicos, cartas con chispa y storytelling con sabor.",
    longBio: "Lucas da voz a los proyectos. Genera narrativas sugerentes para el sector hostelero, asegurando que cada palabra despierte el apetito y refleje de manera honesta y con carácter los valores de la cocina.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    specialty: "Storytelling gastronómico & Copywriting persuasivo",
    favoriteDish: "Croqueta untuosa de jamón ibérico de bellota",
    favoriteWine: "Jerez oloroso viejo",
    superpower: "Escribir textos que se pueden casi saborear y oler",
    linkedin: "https://linkedin.com",
    email: "lucas@aplusgastro.com"
  },
  {
    id: 7,
    name: "Angélica Herrera",
    role: "Gestión de proyectos ",
    category: "eventos",
    categoryLabel: "Label",
    bio: "Angélica trabaja en la coordinación y producción de proyectos, eventos y acciones especiales dentro de Aplus Gastromarketing.",
    longBio: "Participa especialmente en iniciativas que requieren una mirada vinculada a Horeca Entertainment, experiencia de cliente, activación en espacios HORECA, tendencias e innovación en el sector.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Tarta de queso tierno horneada extra cremosa",
    favoriteWine: "Cava Brut Nature Gran Reserva",
    superpower: "Hacer de lo simple algo extraordinariamente tentador",
    linkedin: "https://linkedin.com",
    email: "clara@aplusgastro.com"
  },
  {
    id: 8,
    name: "Candela Granados",
    role: "Responsable de Proyectos de Sostenibilidad HORECA",
    category: "eventos",
    categoryLabel: "Label",
    bio: "Lidera parte del área de sostenibilidad de Aplus, impulsando proyectos, contenidos e iniciativas vinculadas a una hostelería más consciente, eficiente y alineada con los nuevos retos del sector.",
    longBio: "Su trabajo combina organización, sensibilidad sectorial y capacidad de ejecución para que cada proyecto avance con coherencia, detalle y visión práctica.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Alcachofas confitadas con lascas de foie y jamón",
    favoriteWine: "Tinto de uva Mencía muy expresivo",
    superpower: "Darle valor a un producto solo con tocar su caja",
    linkedin: "https://linkedin.com",
    email: "daniel@aplusgastro.com"
  },

  // MARKETING, CUENTAS & BRANDING
  {
    id: 9,
    name: "Jorge Cáliz",
    role: "Diseño / Edición audiovisual",
    category: "diseño",
    categoryLabel: "Marketing, Cuentas & Branding Digital",
    bio: "Jorge lidera la dirección creativa y artística de Aplus Gastromarketing, con un enfoque especializado en marketing gastronómico.",
    longBio: "Cuenta con más de 10 años de experiencia en el sector, dando forma visual y conceptual a campañas, eventos, contenidos y proyectos para marcas, instituciones y operadores HORECA.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Gyoza artesanal de rabo de toro crujiente",
    favoriteWine: "Vino tinto joven ecológico maceración carbónica",
    superpower: "Solucionar cualquier imprevisto de un cliente antes de que ocurra",
    linkedin: "https://linkedin.com",
    email: "paula@aplusgastro.com"
  },
  {
    id: 10,
    name: "Miriam Nadal",
    role: "Responsable Digital",
    category: "marketing",
    categoryLabel: "Marketing & Cuentas",
    bio: "Lidera la estrategia digital y los flujos de comunicación de Aplus Gastromarketing, ayudando a ordenar mensajes, canales y contenidos para marcas, proyectos e iniciativas del ecosistema gastronómico.",
    longBio: "Texto",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Tataki de atún rojo del estrecho con sésamo negro",
    favoriteWine: "Blanco fermentado en barrica de uva Verdejo",
    superpower: "Convertir un clic en una mesa reservada en tiempo récord",
    linkedin: "https://linkedin.com",
    email: "sergio@aplusgastro.com"
  },
  {
    id: 11,
    name: "Paloma Antón",
    role: "Responsable comunicación de FACYRE",
    category: "marketing",
    categoryLabel: "Marketing & Cuentas",
    bio: "Paloma lidera la comunicación de FACYRE dentro de Aplus Gastromarketing, coordinando contenidos, mensajes y acciones que conectan con chefs, restaurantes, profesionales del sector y comunidad gastronómica.",
    longBio: "Su trabajo ayuda a dar visibilidad a las iniciativas de FACYRE, ordenar su relato y mantener una comunicación activa, coherente y cercana con el ecosistema de la cocina y la hostelería.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Ceviche clásico peruano con choclo y camote dulce",
    favoriteWine: "Vino de uva riesling mineral",
    superpower: "Lograr que los medios hablen de lo que realmente importa",
    linkedin: "https://linkedin.com",
    email: "elena@aplusgastro.com"
  },
    // CREATIVIDAD & CONTENIDO
  {
    id: 12,
    name: "Sara López",
    role: "Diseño de Producto Digital",
    category: "diseño",
    categoryLabel: "Marketing, Cuentas & Branding Digital",
    bio: "Especialista en investigación de audiencias y patrones de consumo del comensal moderno.",
    longBio: "Mateo descifra qué querrá comer y beber el cliente mañana. Elabora sofisticados informes analíticos para anticipar cartas ganadoras, posicionamientos de precio óptimos y ubicaciones ideales para nuevos restaurantes.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    specialty: "Data Intelligence aplicada a la hostelería",
    favoriteDish: "Ramen artesanal con caldo de huesos cocinado 12h",
    favoriteWine: "Sidra natural de nueva expresión",
    superpower: "Encontrar la pepita de oro oculta en gigabytes de datos de reservas",
    linkedin: "https://linkedin.com",
    email: "mateo@aplusgastro.com"
  },
  {
    id: 13,
    name: "Amparo Millares",
    role: "Diseño Estratégico Gastronómico",
    category: "diseño",
    categoryLabel: "Operaciones, Experiencia & I+D",
    bio: "Amparo aporta una visión de diseño estratégico aplicada a la gastronomía, ayudando a transformar ideas, conceptos y proyectos en propuestas visuales y narrativas con sentido.",
    longBio: "Su trabajo conecta estrategia, estética y experiencia para dar forma a marcas, campañas, eventos y contenidos dentro del universo gastronómico y HORECA.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    specialty: "Eventos a gran escala & Experiencias gastronómicas inmersivas",
    favoriteDish: "Canelón de pularda con trufa negra fina de invierno",
    favoriteWine: "Cava Rosado Premium seco",
    superpower: "Mantener los nervios helados montando un banquete para 500 personas",
    linkedin: "https://linkedin.com",
    email: "rocio@aplusgastro.com"
  },
      // ADMINISTRACIÓN & BACK OFFICE
  {
    id: 14,
    name: "Elvira García",
    role: "Back Office",
    category: "gestión",
    categoryLabel: "Label",
    bio: "Elvira forma parte del área de Back Office de Aplus Gastromarketing, dando soporte a la organización interna, la gestión administrativa y el seguimiento operativo de los proyectos.",
    longBio: "Texto",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Huevo campero frito con puntilla y trufa laminada",
    favoriteWine: "Blanco crianza andaluz bajo velo de flor",
    superpower: "Encontrar el coste exacto de un plato con solo catarlo en boca",
    linkedin: "https://linkedin.com",
    email: "carlos@aplusgastro.com"
  },
  {
    id: 15,
    name: "Estefanía",
    role: "Administración",
    category: "gestión",
    categoryLabel: "Label",
    bio: "Especialista en campañas estratégicas con prescriptores, sumilleres y críticos de prestigio.",
    longBio: "El área de Administración gestiona pagos, proveedores, documentación, certificados, datos fiscales y procesos internos. En correos internos aparece coordinando certificados de titularidad bancaria de proveedores. ",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=600&auto=format&fit=crop",
    specialty: "Label",
    favoriteDish: "Navajas frescas gallegas a la plancha con limón y jengibre",
    favoriteWine: "Champagne Blanc de Blancs",
    superpower: "Tener el teléfono directo de los mejores sumilleres del país",
    linkedin: "https://linkedin.com",
    email: "laura@aplusgastro.com"
  },
 
];

export default function Equipo() {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'dirección' | 'diseño' | 'marketing' | 'eventos' | 'gestión'>('todos');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const filteredProfiles = PROFILES.filter(p => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'dirección') {
      return p.category === 'dirección' || p.category === 'estrategia';
    }
    return p.category === selectedCategory;
  });

  return (
    <div className="bg-[#FAF9F6] text-black min-h-screen pt-28 md:pt-36 pb-24 font-sans">
      
      {/* Top Header Statement */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="space-y-4 max-w-3xl text-left">
          <span className="font-mono text-xs text-[#4a725e] tracking-[0.25em] block uppercase font-bold">
            [ CAPITAL HUMANO // GASTROMARKETING ]
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-black uppercase">
            NO ESTAMOS HECHOS CON IA, ESTAMOS HECHOS DE CARNE, HUESO Y EXPERIENCIA
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-700 font-light leading-relaxed pt-2">
            Tu mensaje llega a un equipo que trabaja cada día con marcas, instituciones, operadores y organizaciones del ecosistema HORECA. Conocemos el sector desde dentro, por eso entendemos mejor el contexto de cada proyecto.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap gap-2 mt-12 border-b border-gray-200 pb-6">
          {[
            { id: 'todos', label: 'TODOS LOS PERFILES' },
            { id: 'dirección', label: 'DIRECCIÓN & ESTRATEGIA' },
            { id: 'diseño', label: 'DISEÑO' },
            { id: 'marketing', label: 'MARKETING' },
            { id: 'eventos', label: 'EVENTOS' },
            { id: 'gestión', label: 'ADMINISTRACIÓN & BACK OFFICE' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-5 py-3 font-display font-bold text-xs tracking-wider rounded-none cursor-pointer border ${
                selectedCategory === tab.id
                  ? 'btn-curtain btn-curtain-black border-black'
                  : 'btn-curtain btn-curtain-white border-gray-150'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid containing the 16 professional profiles */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProfiles.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-gray-150 hover:border-black transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => setSelectedProfile(p)}
              >
                {/* Image layout container */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-50 border-b border-gray-100 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale hover:grayscale-0 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Subtle hover prompt */}
                  <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1.5 flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-mono text-[9px] font-extrabold tracking-widest text-black">ABRIR FICHA</span>
                    <ArrowUpRight className="w-3 h-3 text-black" />
                  </div>
                </div>

                {/* Text credentials details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-[#4a725e] tracking-widest font-black uppercase block">
                      {p.role}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-black uppercase tracking-tight leading-tight">
                      {p.name}
                    </h3>
                    <p className="font-sans text-[13px] text-gray-500 font-light leading-relaxed pt-1">
                      {p.bio}
                    </p>
                  </div>

                  {/* Specialty flag tag pill */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                      [ EXCELENCIA ]
                    </span>
                    <span className="font-mono text-[10px] text-black font-bold flex items-center gap-1 border-b border-black">
                      VER MÁS +
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Dynamic Drawer Modal dialog for displaying specific culinary details */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Dark background backing barrier */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProfile(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-out Panel details column */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-xl bg-[#FAF9F6] h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-gray-150 z-10"
            >
              <div className="p-6 md:p-8 space-y-8">
                {/* Header controls details of the modal */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">
                    [ FICHA DEL COLABORADOR ]
                  </span>
                  <button
                    onClick={() => setSelectedProfile(null)}
                    className="w-10 h-10 bg-white border border-gray-150 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Identity with portrait grid header */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-32 h-32 shrink-0 rounded-none bg-gray-100 overflow-hidden border border-gray-200">
                    <img
                      src={selectedProfile.image}
                      alt={selectedProfile.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left space-y-2">
                    <span className="font-mono text-xs text-[#4a725e] tracking-widest font-black uppercase inline-block bg-[#ECF4EC] px-3 py-1">
                      {selectedProfile.role}
                    </span>
                    <h2 className="font-display font-black text-3xl text-black uppercase tracking-tight">
                      {selectedProfile.name}
                    </h2>
                    <p className="font-sans text-sm text-gray-500 font-normal">
                      {selectedProfile.categoryLabel}
                    </p>
                  </div>
                </div>

                {/* Substantive descriptions text cards */}
                <div className="space-y-6 text-left border-t border-b border-gray-200 py-6">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-bold text-gray-400 tracking-wider">TRAYECTORIA & ENFOQUE</h4>
                    <p className="font-sans text-gray-700 leading-relaxed font-light text-base">
                      {selectedProfile.longBio}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h4 className="font-mono text-xs font-bold text-gray-400 tracking-wider">PREFERENCIAS & INTIMIDAD GASTRONÓMICA</h4>
                    
                    <div className="grid grid-cols-1 gap-3.5">
                      <div className="bg-white border border-gray-150 p-4 flex items-start gap-3">
                        <Utensils className="w-5 h-5 text-[#4a725e] shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">PLATO PREFERIDO</span>
                          <span className="font-sans text-sm font-semibold text-black">{selectedProfile.favoriteDish}</span>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-150 p-4 flex items-start gap-3">
                        <GlassWater className="w-5 h-5 text-[#4a725e] shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">CON QUÉ BRINDA (VINO/BEBIDA)</span>
                          <span className="font-sans text-sm font-semibold text-black">{selectedProfile.favoriteWine}</span>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-150 p-4 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-[#4a725e] shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">SUPERPODER PROFESIONAL</span>
                          <span className="font-sans text-sm font-semibold text-black">{selectedProfile.superpower}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interaction connect options box at footer */}
              <div className="bg-white p-6 md:p-8 border-t border-gray-150 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gray-150 hover:border-black flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-all rounded-none"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${selectedProfile.email}`}
                    className="w-11 h-11 border border-gray-150 hover:border-black flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-all rounded-none"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProfile(null)}
                  className="btn-curtain btn-curtain-black inline-flex items-center justify-center px-8 py-3.5 font-display font-extrabold text-[#FAF9F6] text-[11px] tracking-widest uppercase transition-all duration-200 cursor-pointer"
                >
                  VOLVER AL EQUIPO
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
