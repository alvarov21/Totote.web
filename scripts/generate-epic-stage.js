const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

const PUBLIC_DIR = path.join(__dirname, '../public');

function generateEpicFestivalStageSvg(width, height) {
  // 1920 x 1080 Epic Mainstage Festival Visual
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background base gradient -->
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020305"/>
        <stop offset="45%" stop-color="#080C0E"/>
        <stop offset="70%" stop-color="#050807"/>
        <stop offset="100%" stop-color="#020304"/>
      </linearGradient>

      <!-- Laser Gradients -->
      <linearGradient id="laserGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#00FF66" stop-opacity="0.95"/>
        <stop offset="50%" stop-color="#00FF66" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#00FF66" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="laserFanLeft" x1="50%" y1="60%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#00FF66" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#00FF66" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="laserFanRight" x1="50%" y1="60%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00FF66" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#00FF66" stop-opacity="0"/>
      </linearGradient>

      <!-- Stage Center Glow -->
      <radialGradient id="centerStageGlow" cx="50%" cy="58%" r="55%">
        <stop offset="0%" stop-color="#00FF66" stop-opacity="0.38"/>
        <stop offset="35%" stop-color="#00C853" stop-opacity="0.18"/>
        <stop offset="65%" stop-color="#022010" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>

      <!-- Blinder Flares -->
      <radialGradient id="blinderGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
        <stop offset="30%" stop-color="#00FF66" stop-opacity="0.6"/>
        <stop offset="70%" stop-color="#00FF66" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>

      <!-- Pyro Flame Gradient -->
      <linearGradient id="pyroGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#FF5500" stop-opacity="0.9"/>
        <stop offset="40%" stop-color="#FFB800" stop-opacity="0.8"/>
        <stop offset="80%" stop-color="#FFFFFF" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </linearGradient>

      <filter id="laserBlur">
        <feGaussianBlur stdDeviation="3" />
      </filter>
      <filter id="heavyFog">
        <feGaussianBlur stdDeviation="40" />
      </filter>
      <filter id="sparkBlur">
        <feGaussianBlur stdDeviation="1.5" />
      </filter>
    </defs>

    <!-- 1. Dark Atmosphere Base -->
    <rect width="${width}" height="${height}" fill="url(#skyGrad)" />

    <!-- 2. Ambient Stage Haze & Fog Layers -->
    <ellipse cx="${width * 0.5}" cy="${height * 0.58}" rx="${width * 0.6}" ry="${height * 0.4}" fill="url(#centerStageGlow)" filter="url(#heavyFog)" />
    <ellipse cx="${width * 0.2}" cy="${height * 0.65}" rx="${width * 0.35}" ry="${height * 0.25}" fill="#00FF66" opacity="0.12" filter="url(#heavyFog)" />
    <ellipse cx="${width * 0.8}" cy="${height * 0.65}" rx="${width * 0.35}" ry="${height * 0.25}" fill="#00FF66" opacity="0.12" filter="url(#heavyFog)" />

    <!-- 3. Giant LED Wall Grid in Background (Equilizer pattern & Cyber Lines) -->
    <g opacity="0.2">
      <rect x="${width * 0.2}" y="${height * 0.25}" width="${width * 0.6}" height="${height * 0.35}" fill="#080C0A" stroke="#00FF66" stroke-width="1.5" />
      ${Array.from({ length: 24 }).map((_, i) => {
        const x = width * 0.22 + i * (width * 0.56 / 24);
        const barH = (Math.sin(i * 0.8) * 0.5 + 0.5) * height * 0.25 + 20;
        return `<rect x="${x}" y="${height * 0.6 - barH}" width="${width * 0.015}" height="${barH}" fill="#00FF66" opacity="0.4" />`;
      }).join('')}
    </g>

    <!-- 4. Massive Overhead Stage Truss Structures -->
    <g stroke="#161B22" stroke-width="3" opacity="0.85">
      <!-- Top Main Arch Truss -->
      <line x1="${width * 0.05}" y1="${height * 0.15}" x2="${width * 0.95}" y2="${height * 0.15}" stroke="#22C55E" stroke-opacity="0.3" stroke-width="4" />
      <line x1="${width * 0.05}" y1="${height * 0.18}" x2="${width * 0.95}" y2="${height * 0.18}" />
      <!-- Diagonal Cross Bracing -->
      ${Array.from({ length: 30 }).map((_, i) => {
        const x1 = width * 0.05 + i * (width * 0.9 / 30);
        const x2 = width * 0.05 + (i + 1) * (width * 0.9 / 30);
        return `<line x1="${x1}" y1="${height * 0.15}" x2="${x2}" y2="${height * 0.18}" stroke="#1E293B" stroke-width="2" />`;
      }).join('')}
      <!-- Vertical Support Towers -->
      <line x1="${width * 0.12}" y1="${height * 0.15}" x2="${width * 0.12}" y2="${height * 0.75}" stroke-width="6" />
      <line x1="${width * 0.88}" y1="${height * 0.15}" x2="${width * 0.88}" y2="${height * 0.75}" stroke-width="6" />
    </g>

    <!-- 5. Stage Spotlights / Blinders Mounted on Truss -->
    ${[0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85].map(pos => `
      <circle cx="${width * pos}" cy="${height * 0.165}" r="8" fill="#FFFFFF" />
      <circle cx="${width * pos}" cy="${height * 0.165}" r="35" fill="url(#blinderGlow)" opacity="0.8" />
    `).join('')}

    <!-- 6. HIGH-INTENSITY LASER FAN MATRIX (Sweeping Across the Sky) -->
    <g opacity="0.85">
      <!-- Left Fan -->
      <polygon points="${width * 0.5},${height * 0.56} 0,0 ${width * 0.1},0" fill="url(#laserFanLeft)" />
      <polygon points="${width * 0.5},${height * 0.56} 0,${height * 0.2} 0,${height * 0.35}" fill="url(#laserFanLeft)" />
      <!-- Right Fan -->
      <polygon points="${width * 0.5},${height * 0.56} ${width * 0.9},0 ${width},0" fill="url(#laserFanRight)" />
      <polygon points="${width * 0.5},${height * 0.56} ${width},${height * 0.2} ${width},${height * 0.35}" fill="url(#laserFanRight)" />

      <!-- Sharp Piercing Laser Beams -->
      ${[-0.45, -0.32, -0.22, -0.12, -0.04, 0.04, 0.12, 0.22, 0.32, 0.45].map((angle, i) => {
        const destX = width * (0.5 + angle * 1.3);
        const destY = 0;
        return `
          <line x1="${width * 0.5}" y1="${height * 0.56}" x2="${destX}" y2="${destY}" stroke="#00FF66" stroke-width="2.5" opacity="0.9" filter="url(#laserBlur)" />
          <line x1="${width * 0.5}" y1="${height * 0.56}" x2="${destX}" y2="${destY}" stroke="#FFFFFF" stroke-width="1" opacity="0.95" />
        `;
      }).join('')}

      <!-- Horizontal Stage Scanning Laser Lines -->
      <line x1="0" y1="${height * 0.45}" x2="${width}" y2="${height * 0.45}" stroke="#00FF66" stroke-width="2" opacity="0.6" filter="url(#laserBlur)" />
      <line x1="0" y1="${height * 0.52}" x2="${width}" y2="${height * 0.52}" stroke="#00FF66" stroke-width="1.5" opacity="0.5" />
      <line x1="0" y1="${height * 0.38}" x2="${width}" y2="${height * 0.38}" stroke="#00FF66" stroke-width="1.5" opacity="0.4" />
    </g>

    <!-- 7. Massive Pyro Flame Eruptions & Cold Sparks on Left & Right Wings -->
    <!-- Left Pyro -->
    <path d="M${width * 0.24} ${height * 0.62} Q${width * 0.22} ${height * 0.35} ${width * 0.25} ${height * 0.2} Q${width * 0.28} ${height * 0.35} ${width * 0.26} ${height * 0.62} Z" fill="url(#pyroGrad)" opacity="0.9" filter="url(#laserBlur)" />
    <path d="M${width * 0.245} ${height * 0.62} L${width * 0.25} ${height * 0.24} L${width * 0.255} ${height * 0.62} Z" fill="#FFFFFF" opacity="0.9" />

    <!-- Right Pyro -->
    <path d="M${width * 0.74} ${height * 0.62} Q${width * 0.72} ${height * 0.35} ${width * 0.75} ${height * 0.2} Q${width * 0.78} ${height * 0.35} ${width * 0.76} ${height * 0.62} Z" fill="url(#pyroGrad)" opacity="0.9" filter="url(#laserBlur)" />
    <path d="M${width * 0.745} ${height * 0.62} L${width * 0.75} ${height * 0.24} L${width * 0.755} ${height * 0.62} Z" fill="#FFFFFF" opacity="0.9" />

    <!-- 8. Pyro Spark Sprays (Hundreds of sparks shooting up) -->
    ${Array.from({ length: 60 }).map((_, i) => {
      const isLeft = i % 2 === 0;
      const baseX = isLeft ? width * 0.25 : width * 0.75;
      const spreadX = baseX + (Math.sin(i * 13) * width * 0.08);
      const sparkY = height * 0.22 + (Math.cos(i * 7) * 0.5 + 0.5) * (height * 0.4);
      const r = Math.random() * 2 + 1;
      const col = i % 3 === 0 ? '#FFFFFF' : i % 3 === 1 ? '#00FF66' : '#FFB800';
      return `<circle cx="${spreadX}" cy="${sparkY}" r="${r}" fill="${col}" opacity="${0.6 + Math.random() * 0.4}" filter="url(#sparkBlur)" />`;
    }).join('')}

    <!-- 9. DJ BOOTH & DJ SILHOUETTE (Center Mainstage Focus) -->
    <!-- Booth Platform Stage Base -->
    <polygon points="${width * 0.34},${height * 0.68} ${width * 0.66},${height * 0.68} ${width * 0.72},${height * 0.76} ${width * 0.28},${height * 0.76}" fill="#0A0D12" stroke="#00FF66" stroke-width="2" />
    <!-- Front LED Strip on DJ Console -->
    <line x1="${width * 0.36}" y1="${height * 0.675}" x2="${width * 0.64}" y2="${height * 0.675}" stroke="#00FF66" stroke-width="4" filter="url(#laserBlur)" />
    <line x1="${width * 0.36}" y1="${height * 0.675}" x2="${width * 0.64}" y2="${height * 0.675}" stroke="#FFFFFF" stroke-width="1.5" />

    <!-- CDJ Decks & Mixer Lighting -->
    <rect x="${width * 0.42}" y="${height * 0.62}" width="${width * 0.045}" height="${height * 0.025}" rx="3" fill="#12161F" stroke="#00FF66" stroke-width="1.5" />
    <circle cx="${width * 0.442}" cy="${height * 0.632}" r="7" fill="#00FF66" opacity="0.9" />
    <rect x="${width * 0.535}" y="${height * 0.62}" width="${width * 0.045}" height="${height * 0.025}" rx="3" fill="#12161F" stroke="#00FF66" stroke-width="1.5" />
    <circle cx="${width * 0.558}" cy="${height * 0.632}" r="7" fill="#00FF66" opacity="0.9" />
    <rect x="${width * 0.475}" y="${height * 0.618}" width="${width * 0.05}" height="${height * 0.028}" rx="3" fill="#0D1117" stroke="#334155" stroke-width="1" />

    <!-- DJ Silhouette (T-shirt, headphones, raising one arm to crowd) -->
    <path d="
      M${width * 0.475} ${height * 0.62}
      L${width * 0.48} ${height * 0.54}
      Q${width * 0.5} ${height * 0.5} ${width * 0.52} ${height * 0.54}
      L${width * 0.525} ${height * 0.62}
      Z
    " fill="#05070A" stroke="#00FF66" stroke-width="1" stroke-opacity="0.3" />
    <!-- DJ Head -->
    <circle cx="${width * 0.5}" cy="${height * 0.49}" r="${width * 0.018}" fill="#05070A" />
    <!-- Headphones on Neck with Green Accent -->
    <path d="M${width * 0.485} ${height * 0.505} Q${width * 0.5} ${height * 0.525} ${width * 0.515} ${height * 0.505}" stroke="#00FF66" stroke-width="3" fill="none" opacity="0.9" />
    <!-- Raised Arm Hype Gesture -->
    <path d="M${width * 0.52} ${height * 0.54} Q${width * 0.54} ${height * 0.48} ${width * 0.55} ${height * 0.44}" stroke="#05070A" stroke-width="8" stroke-linecap="round" />
    <circle cx="${width * 0.55}" cy="${height * 0.44}" r="5" fill="#05070A" />

    <!-- 10. MASSIVE SILHOUETTED STADIUM CROWD (Dense Sea of Hands & Phones) -->
    <!-- Primary Crowd Skyline -->
    <path d="
      M0 ${height}
      L0 ${height * 0.77}
      Q${width * 0.05} ${height * 0.74}, ${width * 0.1} ${height * 0.76}
      Q${width * 0.18} ${height * 0.71}, ${width * 0.25} ${height * 0.75}
      Q${width * 0.32} ${height * 0.73}, ${width * 0.4} ${height * 0.77}
      Q${width * 0.5} ${height * 0.75}, ${width * 0.6} ${height * 0.78}
      Q${width * 0.68} ${height * 0.72}, ${width * 0.75} ${height * 0.75}
      Q${width * 0.82} ${height * 0.7}, ${width * 0.9} ${height * 0.76}
      Q${width * 0.96} ${height * 0.73}, ${width} ${height * 0.75}
      L${width} ${height} Z
    " fill="#030406" />

    <!-- Raised Arms & Hands Layer 1 -->
    ${[
      0.03, 0.06, 0.09, 0.13, 0.16, 0.19, 0.22, 0.27, 0.31, 0.35, 
      0.38, 0.43, 0.47, 0.53, 0.58, 0.62, 0.66, 0.71, 0.76, 0.79, 
      0.83, 0.87, 0.91, 0.94, 0.97
    ].map((pos, i) => {
      const armH = 45 + (i % 5) * 14;
      const armY = height * 0.75 - armH;
      const angle = Math.sin(i * 9) * 16;
      return `
        <rect x="${width * pos}" y="${armY}" width="${width * 0.007}" height="${armH + 20}" rx="3" fill="#040507" transform="rotate(${angle} ${width * pos} ${armY + armH})" />
        <circle cx="${width * pos}" cy="${armY}" r="${width * 0.007}" fill="#040507" />
      `;
    }).join('')}

    <!-- Raised Phone Flashes (White Glowing Dots Illuminating Crowd) -->
    ${[0.08, 0.15, 0.21, 0.29, 0.36, 0.44, 0.57, 0.64, 0.72, 0.81, 0.89, 0.95].map((pos, i) => {
      const flashY = height * 0.72 + (Math.sin(i * 11) * 35);
      return `
        <circle cx="${width * pos}" cy="${flashY}" r="3" fill="#FFFFFF" />
        <circle cx="${width * pos}" cy="${flashY}" r="12" fill="#FFFFFF" opacity="0.4" filter="url(#laserBlur)" />
      `;
    }).join('')}

    <!-- 11. Subtle Foreground Edge Vignette -->
    <rect width="${width}" height="${height}" fill="none" stroke="#000000" stroke-width="1" />
  </svg>
  `;
}

async function generateEpicAssets() {
  console.log('Generating epic stadium festival visuals for DJ TOTOTE...');

  const svgStr = generateEpicFestivalStageSvg(1920, 1080);
  const jpgBuffer = await sharp(Buffer.from(svgStr.trim())).jpeg({ quality: 92 }).toBuffer();

  fs.writeFileSync(path.join(PUBLIC_DIR, 'media/hero-live.jpg'), jpgBuffer);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.jpg'), await sharp(Buffer.from(svgStr.trim())).resize(1200, 630).jpeg({ quality: 90 }).toBuffer());

  // Render looping MP4 video from the new stage artwork with high quality
  console.log('Rendering high-frame video loop...');
  execSync(
    `ffmpeg -loop 1 -i "${path.join(PUBLIC_DIR, 'media/hero-live.jpg')}" -c:v libx264 -t 4 -pix_fmt yuv420p -vf "scale=1920:1080" "${path.join(PUBLIC_DIR, 'media/hero-live.mp4')}" -y`,
    { stdio: 'inherit' }
  );

  console.log('Epic festival stage asset successfully deployed!');
}

generateEpicAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
