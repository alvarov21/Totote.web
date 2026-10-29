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
      posterThumb: "/media/gallery/totote-live-1.jpg",
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
      posterThumb: "/media/gallery/totote-live-2.jpg",
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
      posterThumb: "/media/gallery/totote-live-3.jpg",
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
      posterThumb: "/media/gallery/totote-live-4.jpg",
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
      posterThumb: "/media/gallery/totote-live-1.jpg",
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
      posterThumb: "/media/gallery/totote-live-2.jpg",
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
      posterThumb: "/media/gallery/totote-live-3.jpg",
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
      posterThumb: "/media/gallery/totote-live-4.jpg",
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

  // Galería de Escenario (4 Fotos Oficiales en Directo)
  gallery: [
    {
      id: "gal-1",
      title: "Show de Fuego en Escenario",
      event: "Festival Califa Urban",
      city: "Córdoba",
      image: "/media/gallery/totote-live-1.jpg",
      caption: "Show principal con llamaradas de fuego sobre el escenario ante miles de asistentes.",
    },
    {
      id: "gal-2",
      title: "Columnas de Humo Criogénico CO2",
      event: "Summer Urban Fest",
      city: "Málaga",
      image: "/media/gallery/totote-live-2.jpg",
      caption: "Clímax de sesión con cañones de CO2 y el público cantando con las manos arriba.",
    },
    {
      id: "gal-3",
      title: "Micrófono en Mano y Chispas Frías",
      event: "Puro Perreo Fest",
      city: "Cádiz",
      image: "/media/gallery/totote-live-3.jpg",
      caption: "Conexión directa con la pista micro en mano animando el drop con pirotecnia de fondo.",
    },
    {
      id: "gal-4",
      title: "Puesta en Escena Festivalera",
      event: "Gran Fiesta Mayor",
      city: "Posadas (Córdoba)",
      image: "/media/gallery/totote-live-4.jpg",
      caption: "Lleno absoluto en cabina ante miles de gargantas disfrutando del set urbano.",
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

  // Presskit (Solo 2 tarjetas oficiales)
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
    ] as PressItem[],
  },

  // Rider Técnico (Sección independiente con 2 tarjetas)
  rider: {
    cards: [
      {
        id: "rider-doc",
        title: "Rider Técnico & Iluminación (PDF)",
        format: "PDF",
        size: "2,8 MB",
        fileUrl: "/press/rider.pdf",
        badge: "DOCUMENTO OFICIAL",
        description: "Requisitos técnicos completos de sonido, conexionado Pro DJ Link, canalizaciones y condiciones de escenario.",
        actionText: "DESCARGAR RIDER PDF",
      },
      {
        id: "rider-specs",
        title: "Setup de Cabina Pioneer DJ",
        format: "SETUP",
        size: "ESTÁNDAR",
        fileUrl: "/press/rider.pdf",
        badge: "CONFIGURACIÓN MÍNIMA",
        description: "2× Pioneer CDJ-3000 + 1× DJM-A9 / 900NXS2 + 2× Monitores de cabina estéreo de 1.000 W + Micro inalámbrico.",
        actionText: "DESCARGAR RIDER PDF",
      },
    ],
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
