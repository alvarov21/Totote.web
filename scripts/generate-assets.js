const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');

// Ensure directories
[
  'brand',
  'media',
  'media/gallery',
  'press',
].forEach(dir => {
  fs.mkdirSync(path.join(PUBLIC_DIR, dir), { recursive: true });
});

// Helper to create SVG strings with serious underground festival visuals (Neon Green & Emerald)
function generateStageSvg(width, height, title, subtitle, variant = 'neon') {
  const mainColor = variant === 'fire' ? '#FF5500' : variant === 'emerald' ? '#00D26A' : '#00FF66';
  const secondaryColor = variant === 'fire' ? '#00FF66' : variant === 'emerald' ? '#00FF66' : '#00E599';

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#050507"/>
        <stop offset="60%" stop-color="#0B0C10"/>
        <stop offset="100%" stop-color="#050507"/>
      </linearGradient>
      <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF66"/>
        <stop offset="100%" stop-color="#00D26A"/>
      </linearGradient>
      <radialGradient id="stageGlow" cx="50%" cy="70%" r="60%">
        <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.4"/>
        <stop offset="50%" stop-color="${secondaryColor}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#050507" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="spotLight1" cx="20%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#00FF66" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="spotLight2" cx="80%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#00E599" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <filter id="blurFilter">
        <feGaussianBlur stdDeviation="30" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Ambient glows -->
    <circle cx="${width * 0.5}" cy="${height * 0.7}" r="${Math.max(width, height) * 0.5}" fill="url(#stageGlow)" />
    <circle cx="${width * 0.2}" cy="${height * 0.2}" r="${width * 0.4}" fill="url(#spotLight1)" />
    <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${width * 0.4}" fill="url(#spotLight2)" />

    <!-- Stage laser beams (Sharp Neon Green Grid) -->
    <polygon points="${width * 0.5},${height * 0.35} 0,${height * 0.85} 0,${height}" fill="#00FF66" opacity="0.2" />
    <polygon points="${width * 0.5},${height * 0.35} ${width},${height * 0.85} ${width},${height}" fill="#00FF66" opacity="0.2" />
    <polygon points="${width * 0.25},0 ${width * 0.48},${height * 0.55} ${width * 0.52},${height * 0.55}" fill="#00FF66" opacity="0.3" />
    <polygon points="${width * 0.75},0 ${width * 0.48},${height * 0.55} ${width * 0.52},${height * 0.55}" fill="#00E599" opacity="0.3" />
    <line x1="0" y1="${height * 0.55}" x2="${width}" y2="${height * 0.55}" stroke="#00FF66" stroke-width="1.5" opacity="0.4" />

    ${variant === 'fire' ? `
      <!-- Pyro flames -->
      <polygon points="${width * 0.2},${height * 0.65} ${width * 0.25},${height * 0.28} ${width * 0.3},${height * 0.65}" fill="#FF5500" opacity="0.5" filter="url(#blurFilter)" />
      <polygon points="${width * 0.7},${height * 0.65} ${width * 0.75},${height * 0.28} ${width * 0.8},${height * 0.65}" fill="#FF5500" opacity="0.5" filter="url(#blurFilter)" />
      <polygon points="${width * 0.22},${height * 0.65} ${width * 0.25},${height * 0.36} ${width * 0.28},${height * 0.65}" fill="#FFF" opacity="0.7" />
      <polygon points="${width * 0.72},${height * 0.65} ${width * 0.75},${height * 0.36} ${width * 0.78},${height * 0.65}" fill="#FFF" opacity="0.7" />
    ` : ''}

    <!-- DJ Booth Silhouette (Tactical Industrial Setup) -->
    <rect x="${width * 0.38}" y="${height * 0.56}" width="${width * 0.24}" height="${height * 0.1}" rx="8" fill="#12141A" stroke="#00FF66" stroke-width="2" />
    <circle cx="${width * 0.44}" cy="${height * 0.6}" r="${width * 0.02}" fill="#00FF66" opacity="0.9" />
    <circle cx="${width * 0.56}" cy="${height * 0.6}" r="${width * 0.02}" fill="#00FF66" opacity="0.9" />
    <path d="M${width * 0.47} ${height * 0.5} C${width * 0.47} ${height * 0.46}, ${width * 0.53} ${height * 0.46}, ${width * 0.53} ${height * 0.5} L${width * 0.54} ${height * 0.56} L${width * 0.46} ${height * 0.56} Z" fill="#050507" />
    <circle cx="${width * 0.5}" cy="${height * 0.45}" r="${width * 0.025}" fill="#050507" stroke="#00FF66" stroke-width="1.5" />

    <!-- Crowd Silhouette -->
    <path d="
      M0 ${height}
      L0 ${height * 0.78}
      Q${width * 0.05} ${height * 0.74}, ${width * 0.1} ${height * 0.78}
      Q${width * 0.15} ${height * 0.72}, ${width * 0.2} ${height * 0.79}
      Q${width * 0.25} ${height * 0.7}, ${width * 0.3} ${height * 0.77}
      Q${width * 0.35} ${height * 0.73}, ${width * 0.4} ${height * 0.78}
      Q${width * 0.45} ${height * 0.69}, ${width * 0.5} ${height * 0.77}
      Q${width * 0.55} ${height * 0.71}, ${width * 0.6} ${height * 0.79}
      Q${width * 0.65} ${height * 0.68}, ${width * 0.7} ${height * 0.78}
      Q${width * 0.75} ${height * 0.72}, ${width * 0.8} ${height * 0.77}
      Q${width * 0.85} ${height * 0.7}, ${width * 0.9} ${height * 0.79}
      Q${width * 0.95} ${height * 0.74}, ${width} ${height * 0.78}
      L${width} ${height} Z
    " fill="#050507" />

    <!-- Raised hands -->
    ${[0.12, 0.22, 0.31, 0.48, 0.62, 0.74, 0.88].map(pos => `
      <rect x="${width * pos}" y="${height * 0.65}" width="${width * 0.008}" height="${height * 0.12}" rx="3" fill="#08090C" transform="rotate(${Math.sin(pos * 10) * 15} ${width * pos} ${height * 0.7})" />
      <circle cx="${width * pos}" cy="${height * 0.64}" r="${width * 0.009}" fill="#08090C" />
    `).join('')}

    <!-- Laser Sparks -->
    ${[0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85].map((x, i) => `
      <circle cx="${width * x}" cy="${height * (0.2 + (i % 4) * 0.12)}" r="${2 + (i % 3)}" fill="${i % 2 === 0 ? '#00FF66' : '#00E599'}" opacity="0.85" />
      <circle cx="${width * (x + 0.04)}" cy="${height * (0.15 + (i % 3) * 0.15)}" r="${1.5 + (i % 2)}" fill="#FFFFFF" opacity="0.9" />
    `).join('')}

    <!-- Visual Text Overlay Badge -->
    <rect x="${width * 0.08}" y="${height * 0.82}" width="${width * 0.84}" height="${height * 0.12}" rx="12" fill="#0B0C10" fill-opacity="0.9" stroke="rgba(0,255,102,0.3)" />
    <text x="${width * 0.12}" y="${height * 0.87}" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="${Math.min(width, height) * 0.045}" fill="#FFFFFF" letter-spacing="0.05em">${title}</text>
    <text x="${width * 0.12}" y="${height * 0.91}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="${Math.min(width, height) * 0.028}" fill="#00FF66" letter-spacing="0.1em">${subtitle.toUpperCase()}</text>
  </svg>
  `;
}

// Generate Serious Press Photo SVG (Camiseta blanca, gafas de sol, iluminación láser verde)
function generatePressPhotoSvg(width, height) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgP" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#050507" />
        <stop offset="50%" stop-color="#0B0C10" />
        <stop offset="100%" stop-color="#12141A" />
      </linearGradient>
      <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00FF66" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#00FF66" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="neonEmerald" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#00D26A" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#00D26A" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bgP)" />

    <!-- Neon Green Rim Lights -->
    <rect x="0" y="0" width="${width * 0.35}" height="${height}" fill="url(#neonGreen)" />
    <rect x="${width * 0.65}" y="0" width="${width * 0.35}" height="${height}" fill="url(#neonEmerald)" />

    <!-- Motion trail silhouettes -->
    <g opacity="0.25" transform="translate(-25, 0)">
      <path d="M${width*0.25} ${height} L${width*0.35} ${height*0.52} Q${width*0.5} ${height*0.48} ${width*0.65} ${height*0.52} L${width*0.75} ${height} Z" fill="#FFFFFF" />
      <circle cx="${width*0.5}" cy="${height*0.32}" r="${width*0.16}" fill="#CBD5E1" />
    </g>
    <g opacity="0.4" transform="translate(15, 0)">
      <path d="M${width*0.25} ${height} L${width*0.35} ${height*0.52} Q${width*0.5} ${height*0.48} ${width*0.65} ${height*0.52} L${width*0.75} ${height} Z" fill="#FFFFFF" />
      <circle cx="${width*0.5}" cy="${height*0.32}" r="${width*0.16}" fill="#CBD5E1" />
    </g>

    <!-- Main Foreground Subject -->
    <!-- White T-Shirt (Camiseta blanca) -->
    <path d="M${width*0.22} ${height} L${width*0.34} ${height*0.52} Q${width*0.5} ${height*0.48} ${width*0.66} ${height*0.52} L${width*0.78} ${height} Z" fill="#F8FAFC" />
    <path d="M${width*0.44} ${height*0.55} L${width*0.42} ${height*0.85}" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
    <path d="M${width*0.56} ${height*0.55} L${width*0.58} ${height*0.82}" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
    
    <!-- Heavy silver/chrome chain -->
    <path d="M${width*0.42} ${height*0.52} Q${width*0.5} ${height*0.64} ${width*0.58} ${height*0.52}" fill="none" stroke="#E2E8F0" stroke-width="5" />

    <!-- Head and Skin -->
    <ellipse cx="${width*0.5}" cy="${height*0.32}" rx="${width*0.15}" ry="${height*0.14}" fill="#E2A67B" />
    <path d="M${width*0.35} ${height*0.26} Q${width*0.5} ${height*0.17} ${width*0.65} ${height*0.26} L${width*0.64} ${height*0.32} L${width*0.36} ${height*0.32} Z" fill="#111827" />
    
    <!-- Tactical Sunglasses with green laser reflection -->
    <rect x="${width*0.38}" y="${height*0.28}" width="${width*0.24}" height="${height*0.055}" rx="8" fill="#050507" stroke="#00FF66" stroke-width="2" />
    <path d="M${width*0.40} ${height*0.295} L${width*0.48} ${height*0.295}" stroke="#00FF66" stroke-width="2.5" opacity="0.9" />
    <path d="M${width*0.52} ${height*0.295} L${width*0.60} ${height*0.295}" stroke="#00FF66" stroke-width="2.5" opacity="0.9" />

    <!-- Studio Glow Badge -->
    <rect x="${width*0.1}" y="${height*0.86}" width="${width*0.8}" height="${height*0.08}" rx="8" fill="#0B0C10" fill-opacity="0.95" stroke="#00FF66" stroke-opacity="0.4"/>
    <text x="${width*0.5}" y="${height*0.91}" text-anchor="middle" font-family="system-ui" font-weight="900" font-size="${width*0.038}" fill="#FFFFFF" letter-spacing="0.12em">DJ TOTOTE · SPAIN URBAN DJ</text>
  </svg>
  `;
}

// Generate Serious Totoneta Van illustration SVG (Dark Matte Body, Cyber Green Laser Trim)
function generateTotonetaSvg() {
  return `
  <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vanBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#12141A"/>
        <stop offset="100%" stop-color="#0B0C10"/>
      </linearGradient>
      <linearGradient id="neonLaser" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00FF66"/>
        <stop offset="100%" stop-color="#00D26A"/>
      </linearGradient>
    </defs>
    <!-- Van Body Dark Matte -->
    <rect x="80" y="120" width="420" height="150" rx="28" fill="url(#vanBody)" stroke="#00FF66" stroke-width="3" />
    
    <!-- Windows Tinted Black -->
    <path d="M120 140 L220 140 L220 190 L120 190 Z" fill="#050507" stroke="#222" stroke-width="1.5" />
    <path d="M240 140 L340 140 L340 190 L240 190 Z" fill="#050507" stroke="#222" stroke-width="1.5" />
    <path d="M360 140 L460 140 Q480 160 470 190 L360 190 Z" fill="#050507" stroke="#222" stroke-width="1.5" />

    <!-- Sharp Laser Green Body Stripe -->
    <path d="M80 205 L500 205" stroke="url(#neonLaser)" stroke-width="5" />
    <path d="M80 215 L480 215" stroke="#00FF66" stroke-width="2" opacity="0.6" />

    <!-- Wheels (Matte Gunmetal) -->
    <circle cx="180" cy="270" r="42" fill="#050507" stroke="#00FF66" stroke-width="3" />
    <circle cx="180" cy="270" r="18" fill="#12141A" />
    <circle cx="400" cy="270" r="42" fill="#050507" stroke="#00FF66" stroke-width="3" />
    <circle cx="400" cy="270" r="18" fill="#12141A" />

    <!-- Headlights (Laser Green) -->
    <circle cx="495" cy="210" r="12" fill="#00FF66" />
    
    <!-- Totoneta Badge -->
    <rect x="220" y="225" width="160" height="32" rx="8" fill="#050507" stroke="#00FF66" stroke-width="1" />
    <text x="300" y="247" text-anchor="middle" font-family="system-ui" font-weight="900" font-size="16" fill="#00FF66" letter-spacing="0.2em">TOTONETA</text>
  </svg>
  `;
}

// Generate Official Serious Logo SVG (Anton typography with neon green glow)
function generateLogoSvg() {
  return `
  <svg width="420" height="120" viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF66" />
        <stop offset="100%" stop-color="#FFFFFF" />
      </linearGradient>
      <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00FF66" flood-opacity="0.7"/>
      </filter>
    </defs>
    <!-- Tactical corner marks -->
    <rect x="16" y="22" width="12" height="2" fill="#00FF66" />
    <rect x="16" y="22" width="2" height="12" fill="#00FF66" />
    <rect x="392" y="22" width="12" height="2" fill="#00FF66" />
    <rect x="402" y="22" width="2" height="12" fill="#00FF66" />
    
    <!-- Main TOTOTE Typography -->
    <text x="210" y="78" text-anchor="middle" font-family="'Anton', 'Impact', sans-serif" font-weight="900" font-size="76" letter-spacing="0.04em" fill="url(#logoGrad)" filter="url(#logoGlow)">TOTOTE</text>
    
    <!-- Subtitle pill -->
    <text x="210" y="104" text-anchor="middle" font-family="'Bebas Neue', sans-serif" font-weight="700" font-size="15" letter-spacing="0.28em" fill="#00FF66">SPAIN URBAN DJ · POSADAS</text>
  </svg>
  `;
}

// Generate Favicon SVG (Neon Green)
function generateFaviconSvg() {
  return `
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00FF66"/>
        <stop offset="100%" stop-color="#00D26A"/>
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#050507" />
    <rect width="60" height="60" x="2" y="2" rx="12" fill="none" stroke="#00FF66" stroke-width="2" opacity="0.6"/>
    <text x="32" y="49" text-anchor="middle" font-family="'Anton', sans-serif" font-weight="900" font-size="46" fill="url(#favGrad)">T</text>
  </svg>
  `;
}

async function buildAllAssets() {
  console.log('Generating serious neon green festival assets for DJ TOTOTE...');

  // 1. Logos & Favicons
  fs.writeFileSync(path.join(PUBLIC_DIR, 'brand/logo-totote.svg'), generateLogoSvg().trim());
  fs.writeFileSync(path.join(PUBLIC_DIR, 'brand/favicon.svg'), generateFaviconSvg().trim());
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), await sharp(Buffer.from(generateFaviconSvg().trim())).resize(32, 32).toFormat('png').toBuffer());

  // 2. Totoneta illustration
  const totonetaPngBuffer = await sharp(Buffer.from(generateTotonetaSvg().trim())).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'media/totoneta.png'), totonetaPngBuffer);

  // 3. Press Photo
  const pressSvg = generatePressPhotoSvg(800, 1000);
  const pressJpg = await sharp(Buffer.from(pressSvg.trim())).jpeg({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'media/press-photo.jpg'), pressJpg);

  // 4. Hero Live Poster & OpenGraph
  const heroSvg = generateStageSvg(1920, 1080, 'TOTOTE TOUR 2026', 'FESTIVAL CALIFA URBAN · POSADAS', 'fire');
  const heroJpg = await sharp(Buffer.from(heroSvg.trim())).jpeg({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'media/hero-live.jpg'), heroJpg);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.jpg'), await sharp(Buffer.from(heroSvg.trim())).resize(1200, 630).jpeg({ quality: 90 }).toBuffer());

  // 5. Viral Videos Posters (9:16 vertical)
  const viral1Svg = generateStageSvg(1080, 1920, '8,4M VIEWS · MOMENTO FUEGO', '15.000 PERSONAS SALTANDO · DIRECTO', 'fire');
  const viral1Jpg = await sharp(Buffer.from(viral1Svg.trim())).jpeg({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'media/viral-1.jpg'), viral1Jpg);

  const viral2Svg = generateStageSvg(1080, 1920, '4,6M VIEWS · DROP DEMBOW', 'SUMMER STAGE POSADAS · CÓRDOBA', 'neon');
  const viral2Jpg = await sharp(Buffer.from(viral2Svg.trim())).jpeg({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'media/viral-2.jpg'), viral2Jpg);

  // 6. Video Carousel Posters (9:16)
  const videoDetails = [
    { title: 'DEMBOW SALVAJE', sub: 'MAE WEST GRANADA', variant: 'neon' },
    { title: 'FUEGOS Y CONFETI', sub: 'OASIS CLUB MÁLAGA', variant: 'fire' },
    { title: 'PRUEBA Y RIDER', sub: 'CABINA PIONEER CDJ-3000', variant: 'emerald' },
    { title: 'TOTONETA EN VIVO', sub: 'RUTA DE FESTIVALES', variant: 'neon' },
    { title: 'REMIX OLD SCHOOL', sub: 'PRODUCCIÓN ESTUDIO', variant: 'emerald' },
    { title: 'COROS DEL PÚBLICO', sub: 'ANTIQUE SEVILLA', variant: 'fire' },
    { title: 'PIROTECNIA Y DROPS', sub: 'PURO PERREO CÁDIZ', variant: 'fire' },
    { title: 'SESIÓN AMANECER', sub: 'MARMARELA ALICANTE', variant: 'neon' },
  ];

  for (let i = 0; i < videoDetails.length; i++) {
    const item = videoDetails[i];
    const num = String(i + 1).padStart(2, '0');
    const svg = generateStageSvg(1080, 1920, item.title, item.sub, item.variant);
    const jpg = await sharp(Buffer.from(svg.trim())).jpeg({ quality: 88 }).toBuffer();
    fs.writeFileSync(path.join(PUBLIC_DIR, `media/video-${num}.jpg`), jpg);
  }

  // 7. Gallery Photos (01 to 08)
  const galleryDetails = [
    { title: 'FUEGO Y NORIA FESTIVAL', sub: 'CALIFA URBAN · CÓRDOBA', variant: 'fire' },
    { title: 'CHISPAS EN CABINA', sub: 'OASIS CLUB · TORREMOLINOS', variant: 'neon' },
    { title: 'LLUVIA DE CHAMPÁN', sub: 'MAE WEST · GRANADA', variant: 'emerald' },
    { title: 'MULTITUD EN ÉXTASIS', sub: 'PURO PERREO · CÁDIZ', variant: 'fire' },
    { title: 'LÁSER VERDE TOTONETA', sub: 'SHÔKO · MADRID', variant: 'neon' },
    { title: 'TOTOTE AND FRIENDS', sub: 'BACKSTAGE SEVILLA', variant: 'emerald' },
    { title: 'PÚBLICO DE POSADAS', sub: 'RECINTO FERIAL · POSADAS', variant: 'fire' },
    { title: 'CIERRE EN LA PLAYA', sub: 'MARMARELA · ALICANTE', variant: 'neon' },
  ];

  for (let i = 0; i < galleryDetails.length; i++) {
    const item = galleryDetails[i];
    const num = String(i + 1).padStart(2, '0');
    const svg = generateStageSvg(1200, 800, item.title, item.sub, item.variant);
    const jpg = await sharp(Buffer.from(svg.trim())).jpeg({ quality: 90 }).toBuffer();
    fs.writeFileSync(path.join(PUBLIC_DIR, `media/gallery/${num}.jpg`), jpg);
  }

  console.log('All serious neon green festival assets generated successfully!');
}

buildAllAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
