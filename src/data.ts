import { ServiceCard, EcosystemCard, Partner, HelpCategory, RetoOption } from "./types";

export const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Operadores Horeca", href: "#operadores" },
  { label: "Marcas", href: "#marcas" },
  { label: "Territorios y Productos", href: "#territorios" },
  { label: "Equipo", href: "#equipo" },
  { label: "La Exprimidora", href: "#la-exprimidora" },
  { label: "Contacto", href: "#contacto" }
];

export const services: ServiceCard[] = [
  {
    id: "s1",
    num: "01",
    title: "MÁS CONOCIMIENTO DEL SECTOR",
    description: "Definimos la hoja de ruta para negocios que buscan liderar el cambio en el mercado gastronómico actual.",
    longDescription: "Aportamos inteligencia de mercado, informes analíticos exclusivos y auditoría de tendencias en el canal HORECA. Sometemos tu producto al análisis de expertos para dar en la diana del comportamiento del comensal moderno.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" // Cozy modern bar shelf
  },
  {
    id: "s2",
    num: "02",
    title: "MÁS ACCESO A COMUNIDADES CONCRETAS",
    description: "Creamos puentes de conexión profunda con colectivos que multiplican el alcance y la reputación de tu propuesta.",
    longDescription: "Te conectamos de forma directa con tomadores de decisiones, redes de propietarios hosteleros, gremios de cocineros vanguardistas e influencers culinarios selectos que avalan tu producto ante el consumidor corporativo y final.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80" // High quality coffee pouring
  },
  {
    id: "s3",
    num: "03",
    title: "MÁS CAPACIDAD DE ACTIVACIÓN",
    description: "Llevamos las marcas a la acción con campañas disruptivas, eventos experienciales y contenido HORECA de gran impacto verbal.",
    longDescription: "Olvídate de las promociones aburridas. Conceptualizamos y operamos festivales gastronómicos, experiencias de cata inmersivas, pop-ups efímeros y producciones audiovisuales que marcan el ritmo del sector.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" // Culinary presentation, hands plating
  },
  {
    id: "s4",
    num: "04",
    title: "MÁS CREDIBILIDAD Y CONTEXTO",
    description: "Trabajamos con prescriptores, sumilleres, chefs de alto calibre y entidades oficiales para dotar de valor a tu marca.",
    longDescription: "Damos validez a tus claims comerciales en cocinas reales. Creamos manuales de aplicación técnica, sellos de recomendación y foros de debate en los que tu marca lidera el pensamiento crítico gastronómico.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80" // Chic sophisticated restaurant
  }
];

export const ecosystemItems: EcosystemCard[] = [
  {
    id: "eco1",
    title: "FACYRE",
    label: "Label",
    description: "La federación de cocineros y reposteros de España: una puerta natural a la hostelería independiente y al talento gastronómico.",
    extendedText: "FACYRE es la Federación de Asociaciones de Cocineros y Reposteros de España y trabaja por el crecimiento y reconocimiento del mundo gastronómico, la protección de su patrimonio y la mejora de la formación profesional del sector. Para Aplus, es un punto de conexión clave con chefs, asociaciones, profesionales y entornos donde la gastronomía se vive desde dentro.",
    image: "https://images.unsplash.com/photo-1541240901-71fb5de37775?auto=format&fit=crop&w=800&q=80", // Shiny pomegranate red
    color: "#B2D3C2",
    category: "gastronomia"
  },
  {
    id: "eco2",
    title: "GASTRO LEADERS FORUM",
    label: "Label",
    description: "Una comunidad profesional pensada para grupos de restauración independiente, con contenido útil, debate y encuentros directivos.",
    extendedText: "Gastro Leaders Forum nace para ayudar a los grupos de restauración independiente a tomar mejores decisiones empresariales a partir de datos sólidos, comparables y bien interpretados. Se presenta como una comunidad profesional con aprendizaje, conversación estratégica y encuentros periódicos con directivos. Es un espacio especialmente valioso para proyectos ligados a liderazgo, gestión, posicionamiento y visión de negocio.",
    image: "https://images.unsplash.com/photo-1596541223947-f4728f3263df?auto=format&fit=crop&w=800&q=80", // Purple macro cabbage swirl
    color: "#1A1A1A",
    category: "innovacion"
  },
  {
    id: "eco3",
    title: "ECOHOSTELERO",
    label: "Label",
    description: "Soluciones, herramientas y contenidos para una hostelería más sostenible.",
    extendedText: "Ecohostelero pone a disposición de los profesionales soluciones, herramientas e información para llevar a cabo una gestión sostenible de los establecimientos hosteleros. Es una plataforma especialmente útil cuando un proyecto necesita trabajar sostenibilidad, economía circular, sensibilización o buenas prácticas dentro del canal horeca.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80", // Golden orange slice pulp
    color: "#B2D3C2",
    category: "comunidad"
  },
  {
    id: "eco4",
    title: "HORECA ENTERTAINMENT & SOMOS MÚSICA",
    label: "Label",
    description: "Contenidos, formación y recursos para integrar la música y el entretenimiento en la experiencia horeca.",
    extendedText: "Horeca Entertainment pone a disposición de profesionales de la hostelería, el alojamiento y el ocio nocturno newsletters especializadas, formación, calendario de eventos, guías prácticas y materiales descargables para sacar más partido al poder de la música en el negocio. Aquí el valor está en activar experiencia, ambientación, contenido y propuesta diferencial.",
    image: "https://images.unsplash.com/photo-1541240901-71fb5de37775?auto=format&fit=crop&w=800&q=80", // Red pomegranate seeds alternative
    color: "#1A1A1A",
    category: "restauracion"
  },
  {
    id: "eco5",
    title: "FCSI IBERIA",
    label: "Label",
    description: "La red profesional de consultores independientes del foodservice en España y Portugal.",
    extendedText: "FCSI Iberia agrupa a consultores independientes especializados en diseño, viabilidad, seguridad alimentaria, marketing, operaciones y capacitación, con foco en la profesionalización, la ética y la independencia. Es un aliado natural cuando un proyecto necesita rigor técnico, visión metodológica y conocimiento experto de foodservice.",
    image: "https://images.unsplash.com/photo-1596541223947-f4728f3263df?auto=format&fit=crop&w=800&q=80", // Purple cabbage alternative
    color: "#B2D3C2",
    category: "innovacion"
  }
];

export const partners: Partner[] = [
  { id: "p1", name: "FOOD SERVICE INSTITUTE", description: "Think-tank centrado en la investigación técnica, el desarrollo del canal de distribución indirecta y la inteligencia competitiva en el foodservice." },
  { id: "p2", name: "AIDABE", description: "Asociación Iberoamericana de Directores de Alimentos y Bebidas, conectando a los máximos mandatarios de compras hoteleras de alto nivel." },
  { id: "p3", name: "CLUB CLAVE F&B", description: "Comunidad privada que reúne a los directores de operaciones y responsables de Food & Beverage de los grupos de restauración más potentes." },
  { id: "p4", name: "ADECOD", description: "Alianza para el desarrollo inteligente del consumo fuera del hogar, impulsando normativas claras y simplificaciones fiscales en Horeca." },
  { id: "p5", name: "FEDIS HORECA", description: "Federación Española de Distribuidores de Alimentos y Bebidas, el eslabón fundamental de la cadena logística hacia bares y restaurantes." },
  { id: "p6", name: "MARCAS DE RESTAURACIÓN", description: "Asociación empresarial nacional que engloba a las grandes cadenas de restauración moderna y marcas organizadas de rápido crecimiento." }
];

export const helpCategories: HelpCategory[] = [
  {
    id: "help-marcas",
    title: "MARCAS",
    description: "Acceso a comunidades profesionales, visibilidad sectorial, contenidos especializados, prescriptores, espacios de relación y contextos donde activar campañas con más legitimidad.",
    detailedPoints: [
      "Planes integrales de penetración en el canal HORECA.",
      "Votos de confianza avalados por FACYRE y cocineros de prestigio.",
      "Creación de recetas de aplicación e ingeniería técnica con tu producto.",
      "Roadshows experienciales en escuelas y salones especializados.",
      "Generación de leads de distribución y de compra directa."
    ],
    image: "https://images.unsplash.com/photo-1541240901-71fb5de37775?auto=format&fit=crop&w=800&q=80" // Pomegranate macro
  },
  {
    id: "help-instituciones",
    title: "INSTITUCIONES",
    description: "Programas de formación, iniciativas de dinamización, conexión con profesionales, puesta en valor de producto, sostenibilidad y activaciones vinculadas al territorio.",
    detailedPoints: [
      "Campañas para alimentos de Denominación de Origen Protegida (D.O.P.).",
      "Ferias y congresos gastronómicos para fomento del turismo receptor.",
      "Creación de marcas territoriales gastronómicas de alta recordación.",
      "Formación para reactivar la hostelería de proximidad frente a la despoblación.",
      "Gestión de foros institucionales y alianzas público-privadas en el sector."
    ],
    image: "https://images.unsplash.com/photo-1596541223947-f4728f3263df?auto=format&fit=crop&w=800&q=80" // Cabbage macro
  },
  {
    id: "help-operadores",
    title: "OPERADORES",
    description: "Networking, contenido útil, participación en foros, aprendizaje compartido, conexión con tendencias y nuevas oportunidades de posicionamiento.",
    detailedPoints: [
      "Auditoría operativa y mejora del posicionamiento de carta.",
      "Modelos de transición sostenible certificada mediante ECOHOSTELERO.",
      "Acceso preferente al Gastro Leaders Forum con bonificaciones formativas.",
      "Conexión con consultores de primer nivel mundial agrupados en FCSI.",
      "Contratación de contenidos y activaciones exclusivas de Horeca Entertainment."
    ],
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80" // Orange macro
  }
];

export const challenges: RetoOption[] = [
  {
    id: "c1",
    num: "01",
    title: "ERES HORECA",
    description: "Quieres trabajar tu posicionamiento, acceder a soluciones sectoriales o activar un proyecto gastronómico.",
    placeholderText: "Cuéntanos sobre tu negocio o restaurante (m2, especialidad, ciudad...)",
    sectionName: "CONECTA CON SECCIÓN HORECA"
  },
  {
    id: "c2",
    num: "02",
    title: "ERES UNA MARCA",
    description: "Quieres conectar con el canal HORECA o utilizar la gastronomía como territorio de marketing.",
    placeholderText: "Indica tu clase de producto o portafolio (bebidas, frescos, maquinaria...)",
    sectionName: "CONECTA CON SECCIÓN MARCA"
  },
  {
    id: "c3",
    num: "03",
    title: "ERES UN TERRITORIO / PRODUCTO LOCAL",
    description: "Quieres dinamizar el comercio hostelero, posicionar un territorio o impulsar un producto.",
    placeholderText: "Dinos cuál es tu territorio, región o denominación que deseas promocionar...",
    sectionName: "CONECTA CON SECCIÓN TERRITORIOS"
  }
];
