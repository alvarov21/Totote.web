import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        totote: {
          bg: "#050507",
          surface: "#0A0B0E",
          surface2: "#111318",
          border: "rgba(255, 255, 255, 0.07)",
          text: "#F5F5F7",
          muted: "#8A8D9F",
          neon: "#00FF66",
          neonMuted: "#00E575",
          neonDark: "#009944",
          fire: "#FF5500",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        bebas: ["var(--font-bebas)", "Bebas Neue", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        video: "14px",
      },
      boxShadow: {
        "glow-neon": "0 0 30px rgba(0, 255, 102, 0.25)",
        "glow-neon-subtle": "0 0 20px rgba(0, 255, 102, 0.15)",
        "glow-card": "0 12px 40px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "pulse-glow": "pulseGlow 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee-left": "marqueeLeft 55s linear infinite",
        "marquee-right": "marqueeRight 60s linear infinite",
        "marquee-fast": "marqueeLeft 45s linear infinite",
        "spotlight-sweep": "spotlightSweep 28s ease-in-out infinite alternate",
        "spotlight-sweep-2": "spotlightSweep2 34s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(0, 255, 102, 0.25)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 28px rgba(0, 255, 102, 0.45)",
            transform: "scale(1.008)",
          },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        spotlightSweep: {
          "0%": { transform: "rotate(-20deg) translateY(-15px) scale(1)" },
          "100%": { transform: "rotate(20deg) translateY(15px) scale(1.1)" },
        },
        spotlightSweep2: {
          "0%": { transform: "rotate(25deg) translateY(10px) scale(1)" },
          "100%": { transform: "rotate(-15deg) translateY(-20px) scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
