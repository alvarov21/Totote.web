"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Flame, Radio, ExternalLink } from "lucide-react";
import siteConfig from "@/content/site";

interface YouTubeFacadeProps {
  id: string;
  title: string;
  coverImage?: string;
}

const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ id, title, coverImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        className="w-full h-full border-0 rounded-[18px]"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&color=white`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  // Máxima resolución HD: archivo local HD o maxresdefault oficial de YouTube (1280x720)
  const thumbnailUrl = coverImage || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div
      onClick={() => setIsPlaying(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Reproducir ${title}`}
      className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-black rounded-[18px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00FF66]"
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        quality={95}
        sizes="(max-width: 768px) 100vw, 1280px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Central Play Button */}
      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00FF66] text-[#050507] flex items-center justify-center shadow-[0_0_35px_rgba(0,255,102,0.65)] group-hover:scale-110 active:scale-95 transition-all duration-300 ease-out border border-white/25">
        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-[#050507]" />
      </div>

      <span className="sr-only">Reproducir {title}</span>
    </div>
  );
};

export const Sets: React.FC = () => {
  return (
    <section id="sets" className="relative w-full py-20 sm:py-32 bg-[#050507] overflow-hidden">
      {/* Background Spotlight Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#00FF66]/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>SETS & SESIONES EN DIRECTO</span>
          </div>

          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            SESIONES EN CABINA
          </h2>

          <p className="text-[#8E90A0] text-sm sm:text-base mt-2 font-ui">
            Dale al play y siente la energía de los sets completos de TOTOTE: mezclas en directo, drops de dembow y pura vibra de festival.
          </p>
        </div>

        {/* 2 Widescreen Large YouTube Sets */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-10 sm:gap-14 mb-12 sm:mb-16">
          {siteConfig.youtubeSets.map((video, idx) => (
            <div
              key={video.id}
              className="totote-card group rounded-[22px] sm:rounded-[28px] border border-white/10 hover:border-[#00FF66]/50 bg-[#0A0B0E]/95 p-2 sm:p-3.5 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              {/* 16:9 Widescreen Container */}
              <div className="relative w-full aspect-video rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black">
                <YouTubeFacade
                  id={video.id}
                  title={video.title}
                  coverImage={video.coverImage}
                />
              </div>

              {/* Set Info Row */}
              <div className="p-3 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5 mt-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-impact tracking-wider uppercase bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30">
                      {video.category}
                    </span>
                    <span className="text-xs text-[#8E90A0] font-impact uppercase tracking-wider">
                      SET #{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-[#00FF66] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E90A0] mt-1 font-ui max-w-xl">
                    {video.description}
                  </p>
                </div>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-impact text-white/80 hover:text-[#00FF66] border border-white/10 hover:border-[#00FF66]/40 transition-colors uppercase tracking-wider shrink-0 self-start sm:self-center"
                >
                  <span>ABRIR EN YOUTUBE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-5 items-center w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#booking"
            className="w-full sm:w-auto text-center bg-[#00FF66] text-[#050507] font-bold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-full hover:bg-[#00E575] hover:scale-105 active:scale-[0.97] transition-all duration-200 ease-out shadow-[0_0_25px_rgba(0,255,102,0.35)] cursor-pointer uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 text-[#050507]" />
            <span>PIDE TU FECHA PARA SESIÓN</span>
          </a>
          <a
            href="#galeria"
            className="w-full sm:w-auto text-center border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-md text-white font-semibold text-[14px] sm:text-[15px] px-8 py-3.5 rounded-full hover:bg-white/10 hover:scale-105 active:scale-[0.97] transition-all duration-200 ease-out cursor-pointer uppercase tracking-wider inline-flex items-center justify-center"
          >
            VER GALERÍA DE DIRECTOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sets;
