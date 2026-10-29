/**
 * ==============================================================================
 * DJ TOTOTE — SINGLE SOURCE OF TRUTH (Configuración de Contenidos y Medios)
 * ==============================================================================
 * Todos los textos, fechas, cifras, rutas de medios, enlaces y redes de la web
 * se configuran centralizadamente en este archivo para facilitar su edición.
 * ==============================================================================
 */

export interface TourDate {
  id: string;
  day: string; // Ej: "15"
  month: string; // Ej: "JUL"
  year?: string;
  city: string;
  venue: string;
  status: "ENTRADAS" | "ÚLTIMAS" | "SOLD OUT";
  ticketUrl: string;
  posterThumb?: string;
  isHeadline?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  views: string;
  duration?: string;
  category: "Festival" | "Club" | "Viral" | "Backstage" | "Estudio";
  location: string;
  src: string;
  poster: string;
  tiktokUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  city: string;
  image: string;
  spanDouble?: boolean; // Para la foto destacada (fuego y noria)
  caption?: string;
}

export interface VenueItem {
  name: string;
  city?: string;
  category: "Festival" | "Discoteca" | "Marca";
}

export interface UniverseProject {
  id: string;
  title: string;
  handle: string;
  badge?: string;
  description: string;
  link: string;
  image?: string;
  accent: "blue" | "pink" | "fire";
}

export interface PressItem {
  id: string;
  title: string;
  format: string;
  size: string;
  fileUrl: string;
  description: string;
}

export interface RiderSpec {
  item: string;
  specification: string;
  notes: string;
}

export const siteConfig = {
  isDemo: true, // DEMO comercial: activa <meta name="robots" content="noindex, nofollow">

  // Datos del Artista
  artist: {
    name: "TOTOTE",
    stageName: "DJ TOTOTE",
    subtitle: "Spain Urban DJ",
    tagline: "Reguetón, dembow y calle. +50 fechas este verano.",
    location: "Posadas, Córdoba (España)",
    badgeText: "SPAIN URBAN DJ · POSADAS, CÓRDOBA",
    bioLong:
      "Desde Posadas (Córdoba) para toda España. TOTOTE es uno de los DJs urbanos que más rápido ha crecido: millones de visualizaciones en redes, escenarios de festival y más de 50 fechas en un solo verano. Su sello: reguetón y dembow para que la pista no pare.",
    genres: ["Reguetón", "Dembow", "Latin", "Urbano", "Open Format"],
    statusNote: "Disponible para contratación nacional e internacional — Verano / Temporada 2026",
  },

  // Cifras y Estadísticas
  stats: {
    tiktokFollowers: "213,9K",
    tiktokFollowersRaw: 213900,
    tiktokLikes: "6,7M",
    instagramFollowers: "42K",
    instagramVerified: true,
    summerDates: "+50",
    mostViralViews: "8,4M",
    secondViralViews: "4,6M",
    marqueeHighlights: [
      "213K EN TIKTOK",
      "6,7M ME GUSTA",
      "+50 FECHAS EN VERANO",
      "8,4M VISUALIZACIONES",
      "ARTISTA VERIFICADO",
      "REGUETÓN & DEMBOW",
      "SUMMER TOUR 2026",
      "DESDE POSADAS (CÓRDOBA)",
    ],
  },

  // Contacto y Canales de Booking
  contact: {
    phone: "655 765 303",
    phoneTel: "+34655765303",
    email: "booking@email.com",
    whatsappNumber: "34655765303",
    whatsappDefaultText:
      "Hola, quiero contratar a TOTOTE para un evento. ¿Podéis darme disponibilidad y condiciones?",
    whatsappBookingUrl:
      "https://wa.me/34655765303?text=Hola,%20quiero%20contratar%20a%20TOTOTE%20para%20[fecha]",
    responseTime: "Respuesta en menos de 24 h",
  },

  // Redes Sociales y Proyectos
  socials: {
    instagram: {
      handle: "@djtotote",
      url: "https://www.instagram.com/djtotote/",
      verified: true,
    },
    tiktok: {
      handle: "@dj_totote",
      url: "https://www.tiktok.com/@dj_totote",
      viewsBadge: "+13M reproducciones",
    },
    totoneta: {
      title: "Canal TOTONETA",
      url: "https://ig.me/j/AbZtotoneta/", // Canal de difusión Instagram provisional
      description: "El canal oficial. Entérate antes que nadie de las fechas y sorpresas.",
    },
    threads: {
      handle: "@djtotote",
      url: "https://www.threads.net/@djtotote",
    },
    spotify: {
      title: "Spotify",
      url: "https://open.spotify.com/artist/djtotote",
      provisional: true,
    },
    soundcloud: {
      title: "SoundCloud",
      url: "https://soundcloud.com/djtotote",
      provisional: true,
    },
  },

  // Próximas Fechas (Tour)
  tourDates: [
    {
      id: "tour-1",
      day: "18",
      month: "JUL",
      year: "2026",
      city: "Córdoba",
      venue: "Festival Califa Urban",
      status: "SOLD OUT",
      ticketUrl: "#booking",
      isHeadline: true,
      posterThumb: "/media/gallery/01.jpg",
    },
    {
      id: "tour-2",
      day: "25",
      month: "JUL",
      year: "2026",
      city: "Málaga",
      venue: "Oasis Club Torremolinos",
      status: "ÚLTIMAS",
      ticketUrl: "https://entradas.example.com/malaga",
      posterThumb: "/media/gallery/02.jpg",
    },
    {
      id: "tour-3",
      day: "01",
      month: "AGO",
      year: "2026",
      city: "Posadas (Córdoba)",
      venue: "Recinto Ferial — Gran Fiesta Mayor",
      status: "SOLD OUT",
      ticketUrl: "#booking",
      isHeadline: true,
      posterThumb: "/media/gallery/03.jpg",
    },
    {
      id: "tour-4",
      day: "08",
      month: "AGO",
      year: "2026",
      city: "Cádiz",
      venue: "Puro Perreo Beach Fest",
      status: "ENTRADAS",
      ticketUrl: "https://entradas.example.com/cadiz",
      posterThumb: "/media/gallery/04.jpg",
    },
    {
      id: "tour-5",
      day: "14",
      month: "AGO",
      year: "2026",
      city: "Sevilla",
      venue: "Sala Antique Theatro",
      status: "ÚLTIMAS",
      ticketUrl: "https://entradas.example.com/sevilla",
      posterThumb: "/media/gallery/05.jpg",
    },
    {
      id: "tour-6",
      day: "22",
      month: "AGO",
      year: "2026",
      city: "Madrid",
      venue: "Shôko Madrid Urban Night",
      status: "ENTRADAS",
      ticketUrl: "https://entradas.example.com/madrid",
      posterThumb: "/media/gallery/06.jpg",
    },
    {
      id: "tour-7",
      day: "29",
      month: "AGO",
      year: "2026",
      city: "Granada",
      venue: "Mae West Granada",
      status: "ENTRADAS",
      ticketUrl: "https://entradas.example.com/granada",
      posterThumb: "/media/gallery/07.jpg",
    },
    {
      id: "tour-8",
      day: "05",
      month: "SEP",
      year: "2026",
      city: "Alicante",
      venue: "Marmarela Mediterranean Club",
      status: "ENTRADAS",
      ticketUrl: "https://entradas.example.com/alicante",
      posterThumb: "/media/gallery/08.jpg",
    },
  ] as TourDate[],

  // Ticker de próximas 3 fechas para el Hero
  heroTickerDates: [
    { label: "18 JUL", city: "CÓRDOBA", venue: "CALIFA URBAN" },
    { label: "25 JUL", city: "MÁLAGA", venue: "OASIS CLUB" },
    { label: "01 AGO", city: "POSADAS", venue: "FIESTA MAYOR" },
  ],

  // Vídeos Virales Principales (9:16)
  viralVideos: [
    {
      id: "viral-1",
      title: "EL MOMENTO MÁS LOCO DEL VERANO: 15.000 PERSONAS SALTANDO",
      views: "8,4M",
      duration: "0:38",
      category: "Viral",
      location: "Festival Califa Urban",
      src: "/media/viral-1.mp4",
      poster: "/media/viral-1.jpg",
      tiktokUrl: "https://www.tiktok.com/@dj_totote",
    },
    {
      id: "viral-2",
      title: "CUANDO METES EL DROP DE DEMBOW EN MITAD DEL FESTIVAL",
      views: "4,6M",
      duration: "0:29",
      category: "Festival",
      location: "Posadas Summer Stage",
      src: "/media/viral-2.mp4",
      poster: "/media/viral-2.jpg",
      tiktokUrl: "https://www.tiktok.com/@dj_totote",
    },
  ] as VideoItem[],

  // Carrusel de Vídeos de Directo (8 a 10 clips 9:16)
  carouselVideos: [
    {
      id: "clip-1",
      title: "Sesión Dembow Salvaje en Mae West",
      views: "1,2M",
      duration: "0:30",
      category: "Club",
      location: "Granada",
      src: "/media/video-01.mp4",
      poster: "/media/video-01.jpg",
    },
    {
      id: "clip-2",
      title: "Explosión de fuegos y confeti en cierre",
      views: "980K",
      duration: "0:24",
      category: "Festival",
      location: "Málaga",
      src: "/media/video-02.mp4",
      poster: "/media/video-02.jpg",
    },
    {
      id: "clip-3",
      title: "Prueba de sonido & Rider en cabina",
      views: "450K",
      duration: "0:15",
      category: "Backstage",
      location: "Madrid",
      src: "/media/video-03.mp4",
      poster: "/media/video-03.jpg",
    },
    {
      id: "clip-4",
      title: "La Totoneta aparcada frente a la sala",
      views: "720K",
      duration: "0:20",
      category: "Viral",
      location: "Posadas",
      src: "/media/video-04.mp4",
      poster: "/media/video-04.jpg",
    },
    {
      id: "clip-5",
      title: "Remix exclusivo de Reguetón Old School",
      views: "1,5M",
      duration: "0:45",
      category: "Estudio",
      location: "Córdoba",
      src: "/media/video-05.mp4",
      poster: "/media/video-05.jpg",
    },
    {
      id: "clip-6",
      title: "Locura colectiva: pista entera coreando",
      views: "890K",
      duration: "0:32",
      category: "Club",
      location: "Sevilla",
      src: "/media/video-06.mp4",
      poster: "/media/video-06.jpg",
    },
    {
      id: "clip-7",
      title: "Apertura con fuego real en el escenario",
      views: "1,1M",
      duration: "0:28",
      category: "Festival",
      location: "Cádiz",
      src: "/media/video-07.mp4",
      poster: "/media/video-07.jpg",
    },
    {
      id: "clip-8",
      title: "DJ Set sorpresa de madrugada",
      views: "640K",
      duration: "0:35",
      category: "Club",
      location: "Alicante",
      src: "/media/video-08.mp4",
      poster: "/media/video-08.jpg",
    },
  ] as VideoItem[],

  // Mosaico de Escenario (8 fotos de alta energía)
  gallery: [
    {
      id: "gal-1",
      title: "Fuego y Noria en el Festival",
      event: "Festival Califa Urban",
      city: "Córdoba",
      image: "/media/gallery/01.jpg",
      spanDouble: true, // Foto destacada doble tamaño
      caption: "Show principal con pirotecnia de escenario, llamas y +12.000 asistentes.",
    },
    {
      id: "gal-2",
      title: "Chispas en Cabina",
      event: "Oasis Club",
      city: "Torremolinos",
      image: "/media/gallery/02.jpg",
      caption: "Momento clímax con fuentes de chispas frías en cabina.",
    },
    {
      id: "gal-3",
      title: "Lluvia de Champán",
      event: "Mae West",
      city: "Granada",
      image: "/media/gallery/03.jpg",
      caption: "Celebrando el Sold Out con la sala volcada.",
    },
    {
      id: "gal-4",
      title: "Multitud en Éxtasis",
      event: "Puro Perreo Fest",
      city: "Cádiz",
      image: "/media/gallery/04.jpg",
      caption: "Vista aérea desde el escenario principal al atardecer.",
    },
    {
      id: "gal-5",
      title: "Luces Láser y Humo",
      event: "Shôko",
      city: "Madrid",
      image: "/media/gallery/05.jpg",
      caption: "Atmósfera envolvente con juego de luces láser verde neón y humo denso.",
    },
    {
      id: "gal-6",
      title: "Backstage y Amigos",
      event: "Totote & Friends",
      city: "Sevilla",
      image: "/media/gallery/06.jpg",
      caption: "Con los artistas invitados antes de saltar a pinchar.",
    },
    {
      id: "gal-7",
      title: "El Público de Posadas",
      event: "Recinto Ferial",
      city: "Posadas",
      image: "/media/gallery/07.jpg",
      caption: "Jugando en casa: la noche más especial del Summer Tour.",
    },
    {
      id: "gal-8",
      title: "Amanecer en la Playa",
      event: "Marmarela",
      city: "Alicante",
      image: "/media/gallery/08.jpg",
      caption: "Cierre de sesión tras más de 3 horas de pura energía.",
    },
  ] as GalleryItem[],

  // Proyectos / Universo TOTOTE
  universe: [
    {
      id: "totoneta",
      title: "TOTONETA",
      handle: "Canal Oficial",
      badge: "CANAL EXCLUSIVO",
      description:
        "La comunidad de difusión oficial. Entérate antes que nadie de las fechas, lanzamientos, ubicaciones secretas y sorteos.",
      link: "https://ig.me/j/AbZtotoneta/",
      image: "/media/totoneta.png",
      accent: "blue",
    },
    {
      id: "tototeandfriends",
      title: "TOTOTE & FRIENDS",
      handle: "@tototeandfriends",
      badge: "CONCEPTO DE EVENTO",
      description:
        "El formato de fiesta y show donde TOTOTE invita a los mejores DJs y cantantes de la escena urbana. Una noche de pura vibra colaborativa.",
      link: "https://www.instagram.com/tototeandfriends/",
      accent: "pink",
    },
    {
      id: "brandy_ttt",
      title: "BRANDY TTT",
      handle: "@brandy_ttt",
      badge: "EVENTO & FIESTA PROPIA",
      description:
        "El evento propio creado, organizado y producido 100% por TOTOTE. Una fiesta con concepto temático exclusivo, puesta en escena de festival, shows en vivo y toda la energía de su universo en una sola noche.",
      link: "https://www.instagram.com/brandy_ttt/",
      accent: "fire",
    },
  ] as UniverseProject[],

  // Salas, Festivales y Marcas (Han pinchado / Ha estado en)
  venues: [
    { name: "STARLITE OCCIDENT", city: "Marbella", category: "Festival" },
    { name: "ARENAL SOUND", city: "Burriana", category: "Festival" },
    { name: "DREAMBEACH FESTIVAL", city: "Almería", category: "Festival" },
    { name: "SHÔKO MADRID", city: "Madrid", category: "Discoteca" },
    { name: "PURO LATINO FEST", city: "El Puerto / Sevilla", category: "Festival" },
    { name: "FABRIK", city: "Madrid", category: "Discoteca" },
    { name: "OPIUM BARCELONA", city: "Barcelona", category: "Discoteca" },
    { name: "MAE WEST", city: "Granada", category: "Discoteca" },
    { name: "ANTIQUE THEATRO", city: "Sevilla", category: "Discoteca" },
    { name: "MARMARELA", city: "Alicante", category: "Discoteca" },
    { name: "BCM MALLORCA", city: "Magaluf", category: "Discoteca" },
    { name: "FIESTAS PATRONALES POSADAS", city: "Córdoba", category: "Festival" },
  ] as VenueItem[],

  // Presskit
  presskit: {
    downloads: [
      {
        id: "dossier",
        title: "Dossier de Prensa (PDF)",
        format: "PDF",
        size: "12,4 MB",
        fileUrl: "/press/totote-presskit.pdf",
        description: "Biografía completa, cifras en redes, recortes de prensa y trayectoria oficial.",
      },
      {
        id: "photos",
        title: "Fotos de Prensa en Alta (ZIP)",
        format: "ZIP",
        size: "86,2 MB",
        fileUrl: "/press/fotos.zip",
        description: "Pack oficial de fotografías para cartelería, redes y flyers en máxima resolución.",
      },
      {
        id: "rider",
        title: "Rider Técnico & Hospitalidad (PDF)",
        format: "PDF",
        size: "2,8 MB",
        fileUrl: "/press/rider.pdf",
        description: "Requisitos de cabina Pioneer, monitores, microfonía y condiciones técnicas de escenario.",
      },
    ] as PressItem[],

    // Rider técnico resumido
    riderSummary: [
      {
        item: "Reproductores",
        specification: "2× Pioneer CDJ-3000 (o CDJ-2000NXS2)",
        notes: "Conectados en red Pro DJ Link mediante Switch Ethernet de alta velocidad.",
      },
      {
        item: "Mesa de Mezclas",
        specification: "1× Pioneer DJM-A9 o DJM-900NXS2",
        notes: "Firmware actualizado y entradas con masa verificada.",
      },
      {
        item: "Monitorización",
        specification: "2× Monitores de cabina estéreo independientes",
        notes: "Mínimo 1.000 W RMS por lado, con control de volumen independiente accesible en cabina.",
      },
      {
        item: "Microfonía",
        specification: "1× Micrófono inalámbrico profesional",
        notes: "Shure SM58 / Beta 58 o Sennheiser G4 con pilas nuevas para el set.",
      },
      {
        item: "Cabina & Estructura",
        specification: "Mesa rígida y estable a 100 cm de altura",
        notes: "Aislada de subgraves y vibraciones mecánicas.",
      },
      {
        item: "Efectos & Pirotecnia",
        specification: "Cañones de CO2 y Chispas Frías (Opcional)",
        notes: "Alineados con la dinámica de subidas y drops del set.",
      },
    ] as RiderSpec[],
  },

  // Booking Form Options
  bookingOptions: {
    eventTypes: [
      "Discoteca / Club",
      "Festival de Música",
      "Feria o Fiestas Patronales",
      "Evento Privado / Boda VIP",
      "Otro",
    ],
    capacities: [
      "Menos de 500 personas",
      "500 a 2.000 personas",
      "2.000 a 10.000 personas",
      "Más de 10.000 personas (Festival)",
    ],
  },

  // Medios y Rutas
  media: {
    heroPhoto: "/media/totote-hero-desktop.jpg",
    heroPhotoMobile: "/media/totote-cover.jpg",
    heroVideo: "/media/hero-live.mp4",
    heroPoster: "/media/totote-hero-desktop.jpg",
    pressPhoto: "/media/totote-cover.jpg",
    totonetaIllustration: "/media/totoneta.png",
    logoSvg: "/brand/logo-totote.svg",
    ogImage: "/og-image.jpg",
    faviconSvg: "/brand/favicon.svg",
  },

  // Metadata y SEO
  meta: {
    title: "TOTOTE | DJ urbano — Booking y próximas fechas",
    description:
      "Web oficial y contratación de DJ TOTOTE. Reguetón, dembow y música urbana de festival. Millones de visitas, +50 fechas en verano. Pide tu fecha ahora.",
    keywords: [
      "DJ TOTOTE",
      "TOTOTE",
      "Booking DJ",
      "DJ Reggaeton Espana",
      "DJ Dembow",
      "Contratar DJ Festival",
      "DJ Posadas Cordoba",
      "Totoneta",
      "Brand TTT",
    ],
    siteUrl: "https://djtotote.com",
    locale: "es_ES",
    creator: "Potencia tu Negocio",
    creatorUrl: "https://potenciatunegocio.eu",
  },
};

export default siteConfig;
