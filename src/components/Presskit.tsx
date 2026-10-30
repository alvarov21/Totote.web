"use client";

import React from "react";
import Image from "next/image";
import { Download, ExternalLink, FileText, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import siteConfig from "@/content/site";

export const Presskit: React.FC = () => {
  const dossier = siteConfig.presskit.dossier;

  return (
    <section id="presskit" className="relative w-full py-20 sm:py-28 bg-[#050507] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF66]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>PARA PROMOTORES & MEDIOS</span>
          </div>

          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            PRESSKIT OFICIAL
          </h2>

          <p className="text-[#8E90A0] text-sm sm:text-base max-w-2xl mt-3 font-ui leading-relaxed">
            Dossier corporativo en alta resolución para salas, promotores de festivales, medios de comunicación y cartelería oficial.
          </p>
        </div>

        {/* Central Feature Showcase Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#0F1117] via-[#0B0C10] to-[#07080A] border border-white/10 hover:border-[#00FF66]/40 transition-all duration-500 p-6 sm:p-10 lg:p-12 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.85)] group">
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#00FF66]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: 3D Layered Magazine Presentation */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <a
                  href={dossier.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/cover block cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
                  aria-label="Abrir Dossier de Prensa PDF"
                >
                  {/* Background Layer: Page 2 peek */}
                  {dossier.secondaryCoverImage && (
                    <div className="absolute top-2 -right-3 sm:-right-4 w-[240px] sm:w-[270px] aspect-[1/1.414] rounded-2xl overflow-hidden border border-white/10 opacity-40 -rotate-3 scale-[0.96] shadow-xl pointer-events-none hidden sm:block bg-black">
                      <Image
                        src={dossier.secondaryCoverImage}
                        alt="Dossier Página 2"
                        fill
                        className="object-cover"
                        sizes="270px"
                      />
                    </div>
                  )}

                  {/* Foreground Layer: Official Cover */}
                  <div className="relative w-[240px] sm:w-[280px] aspect-[1/1.414] rounded-2xl overflow-hidden border border-white/20 group-hover/cover:border-[#00FF66]/80 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-black">
                    <Image
                      src={dossier.coverImage}
                      alt={dossier.title}
                      fill
                      quality={92}
                      className="object-cover transition-transform duration-500 group-hover/cover:scale-105"
                      sizes="(max-width: 640px) 240px, 280px"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover/cover:opacity-40 transition-opacity" />

                    {/* Top Tag inside cover */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#00FF66]/40 text-[#00FF66] text-[10px] font-impact tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66]" />
                      <span>{dossier.pages}</span>
                    </div>

                    {/* Quick View Pill on bottom */}
                    <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-center flex items-center justify-center gap-1.5 text-xs font-impact tracking-wider text-white uppercase group-hover/cover:bg-[#00FF66] group-hover/cover:text-black group-hover/cover:border-[#00FF66] transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>CLIC PARA VER ONLINE</span>
                    </div>
                  </div>
                </a>

                {/* Subtitle underneath mockup */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#8E90A0] font-mono uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#00FF66]" />
                  <span>Documento Oficial Auditado</span>
                </div>
              </div>

              {/* Right Column: Detailed Specs, Highlights & Action Buttons */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/40 text-[#00FF66] text-xs font-impact tracking-wider uppercase">
                      <FileText className="w-3.5 h-3.5" />
                      {dossier.format} · {dossier.size}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-impact tracking-wider uppercase">
                      {dossier.pages} OFICIALES
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-extrabold uppercase tracking-tight leading-tight">
                    {dossier.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#00FF66] font-display uppercase tracking-wider mt-1 font-semibold">
                    {dossier.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8E90A0] mt-3.5 font-ui leading-relaxed">
                    {dossier.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {dossier.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#D1D3DC] font-ui leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Specs Row */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10">
                    {dossier.specs.map((spec, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                        <div className="text-[10px] text-[#8E90A0] font-mono uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="text-xs sm:text-sm text-white font-impact tracking-wider uppercase mt-0.5">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={dossier.fileUrl}
                    download="DJ_TOTOTE_Presskit_2026.pdf"
                    className="flex-1 py-4 px-6 rounded-full font-impact text-base sm:text-lg tracking-wider uppercase flex items-center justify-center gap-2.5 bg-[#00FF66] text-[#050507] hover:bg-[#00E575] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_25px_rgba(0,255,102,0.35)] cursor-pointer"
                  >
                    <Download className="w-5 h-5 text-[#050507]" />
                    <span>DESCARGAR DOSSIER PDF</span>
                  </a>

                  <a
                    href={dossier.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 rounded-full font-impact text-base tracking-wider uppercase flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                    <span>VER ONLINE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presskit;
