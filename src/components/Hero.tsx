"use client";

import React from "react";
import Image from "next/image";
import siteConfig from "@/content/site";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[580px] flex items-center justify-center overflow-hidden bg-[#050507]">
      {/* 1. Fotografía Oficial de Portada de DJ TOTOTE */}
      <div className="absolute inset-0 z-0 bg-[#050507]">
        <Image
          src={siteConfig.media.heroPhoto}
          alt="DJ TOTOTE — Foto oficial de portada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] pointer-events-none select-none"
        />
      </div>

      {/* 2. Oscurecimiento general para lectura impecable de la tipografía */}
      <div className="absolute inset-0 z-10 bg-black/45 pointer-events-none" />

      {/* 3. Degradados perimetrales (Fusión perfecta con el negro base #050507) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050507]/50 via-transparent to-[#050507] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050507]/60 via-transparent to-[#050507]/60 pointer-events-none" />

      {/* 4. Viñeta radial suave centrada en el artista */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, transparent 28%, rgba(5, 5, 7, 0.55) 70%, #050507 100%)",
        }}
      />

      {/* 5. Ambient aura de alta fidelidad en verde neón (GPU acelerada) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none mix-blend-screen opacity-30">
        <div className="absolute top-[18%] left-[22%] w-[32vw] h-[32vw] max-w-[340px] max-h-[340px] bg-[#00FF66]/20 rounded-full blur-[100px] animate-float-a will-change-transform" />
        <div className="absolute top-[32%] right-[18%] w-[28vw] h-[28vw] max-w-[300px] max-h-[300px] bg-[#00FF66]/18 rounded-full blur-[90px] animate-float-b will-change-transform" />
      </div>

      {/* 6. Contenido Central Headliner (Estilo Beltry / High-Impact Editorial) */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-5xl mx-auto will-change-transform select-none">
        {/* Eyebrow de categoría */}
        <p className="font-display font-semibold text-[11px] sm:text-[13px] md:text-[15px] uppercase tracking-[0.28em] sm:tracking-[0.4em] text-[#F5F5F7]/80 mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          DJ · URBANO · POSADAS · CÓRDOBA
        </p>

        {/* Wordmark Gigante TOTOTE (Bricolage Grotesque Ultra-Bold) */}
        <h1
          className="font-display font-extrabold text-white uppercase tracking-tighter leading-none mb-4 sm:mb-6 select-none headliner-solid-white"
          style={{ fontSize: "clamp(3.5rem, 16vw, 13.5rem)" }}
        >
          {siteConfig.artist.name}
        </h1>

        {/* Subtítulo de impacto */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F5F5F7]/90 max-w-xl font-normal px-2 mb-8 sm:mb-10 text-center leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {siteConfig.artist.tagline}
        </p>

        {/* Botones de acción estilo píldora */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#booking"
            className="bg-[#00FF66] text-[#050507] text-[14px] sm:text-[15px] font-bold px-7 sm:px-8 py-3 rounded-full hover:bg-[#00E575] hover:scale-105 active:scale-[0.97] transition-all duration-200 ease-out shadow-[0_0_25px_rgba(0,255,102,0.35)] inline-flex items-center justify-center cursor-pointer tracking-wider uppercase"
          >
            Pide tu fecha
          </a>
          <a
            href="#galeria"
            className="border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-md text-white text-[14px] sm:text-[15px] font-semibold px-7 sm:px-8 py-3 rounded-full hover:bg-white/10 hover:scale-105 active:scale-[0.97] transition-all duration-200 ease-out inline-flex items-center justify-center cursor-pointer tracking-wider uppercase"
          >
            Ver en directo
          </a>
        </div>
      </div>

      {/* 7. Indicador scroll minimalista */}
      <a
        href="#fechas"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Ir a próximas fechas"
      >
        <div className="w-[22px] h-[38px] rounded-full border border-white/30 flex justify-center p-1 group-hover:border-[#00FF66]/80 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-cue" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
