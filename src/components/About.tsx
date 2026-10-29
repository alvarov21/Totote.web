"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MapPin, Music, CheckCircle2, ArrowRight } from "lucide-react";
import siteConfig from "@/content/site";

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full py-24 sm:py-32 bg-[#050507] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-[#00FF66]/10 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#00E599]/10 blur-[130px] pointer-events-none"
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Artist Press Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[22px] overflow-hidden border border-white/15 shadow-[0_0_40px_rgba(0,255,102,0.2)] group">
              <Image
                src={siteConfig.media.pressPhoto}
                alt="DJ TOTOTE — Fotografía Oficial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B0C10]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-impact text-lg text-white tracking-wide block">
                    {siteConfig.artist.name}
                  </span>
                  <span className="text-xs text-[#00FF66] flex items-center gap-1 font-ui">
                    <MapPin className="w-3.5 h-3.5 text-[#00FF66]" />
                    {siteConfig.artist.location}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/50 text-[#00FF66] font-impact text-xs tracking-wider uppercase font-bold">
                  NUEVA IMAGEN
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:right-6 bg-gradient-to-r from-[#00FF66] to-[#00E599] p-0.5 rounded-2xl shadow-xl hidden sm:block">
              <div className="bg-[#0B0C10] px-4 py-2 rounded-[14px] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00FF66]" />
                <span className="font-impact text-sm text-white tracking-wider uppercase">
                  +50 FECHAS CERRADAS
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Bio, Genres, Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-4 self-start">
              <Music className="w-3.5 h-3.5" />
              <span>EL ARTISTA</span>
            </div>

            <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight mb-6">
              DESDE POSADAS (CÓRDOBA) PARA TODA ESPAÑA.
            </h2>

            <p className="text-lg sm:text-xl text-[#F5F5F7]/90 leading-relaxed font-ui mb-6">
              {siteConfig.artist.bioLong}
            </p>

            {/* Genre Tags */}
            <div className="mb-8">
              <span className="text-xs font-impact tracking-widest text-[#8E90A0] uppercase block mb-3">
                GÉNEROS MUSICALES EN CABINA:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {siteConfig.artist.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#00FF66] hover:text-[#00FF66] text-white font-impact text-sm sm:text-base tracking-wider uppercase transition-colors"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights bullets */}
            <div className="space-y-3 mb-10 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#8E90A0]">
                <CheckCircle2 className="w-5 h-5 text-[#00FF66] shrink-0" />
                <span>Show de alta intensidad con microfonía activa, animación y conexión directa con el público.</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#8E90A0]">
                <CheckCircle2 className="w-5 h-5 text-[#00FF66] shrink-0" />
                <span>Sincronización con efectos de escenario: fuego frío, lanzallamas y pirotecnia de sala.</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#8E90A0]">
                <CheckCircle2 className="w-5 h-5 text-[#00FF66] shrink-0" />
                <span>Formatos flexibles para festivales multitudinarios, discotecas y fiestas patronales.</span>
              </div>
            </div>

            {/* Quote badge */}
            <div className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#00FF66] mb-8">
              <p className="font-display text-lg sm:text-xl text-white uppercase tracking-wide">
                &ldquo;ASÍ SE TIENE QUE PONER DEMBOW EN LAS DISCOTECAS.&rdquo;
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="btn-primary-booking px-8 py-3.5 text-xl tracking-wider uppercase flex items-center gap-2"
              >
                <span>PEDIR DISPONIBILIDAD</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#presskit"
                className="btn-secondary-totote px-7 py-3.5 text-xl tracking-wider uppercase"
              >
                DESCARGAR PRESSKIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
