"use client";

import React from "react";
import { TrendingUp, Flame, Heart, Users, Video } from "lucide-react";
import siteConfig from "@/content/site";

export const Stats: React.FC = () => {
  const statCards = [
    {
      id: "tiktok",
      number: siteConfig.stats.tiktokFollowers,
      label: "SEGUIDORES EN TIKTOK",
      sub: "@dj_totote · Audiencia orgánica activa",
      icon: Users,
      accent: "#00FF66",
    },
    {
      id: "likes",
      number: siteConfig.stats.tiktokLikes,
      label: "ME GUSTA EN REDES",
      sub: "Interacción masiva acumulada",
      icon: Heart,
      accent: "#00E575",
    },
    {
      id: "dates",
      number: siteConfig.stats.summerDates,
      label: "FECHAS EN VERANO",
      sub: "Festivales, salas y ferias en toda España",
      icon: Flame,
      accent: "#00FF66",
    },
    {
      id: "viral",
      number: siteConfig.stats.mostViralViews,
      label: "VÍDEO MÁS VIRAL",
      sub: "+4,6M en el segundo vídeo más visto",
      icon: Video,
      accent: "#00E575",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#050507]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MÉTRICAS AUDITADAS</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            EL NIVEL EN CIFRAS
          </h2>
          <p className="text-[#8A8D9F] text-xs sm:text-sm mt-2 font-ui">
            Viralidad constante y poder de convocatoria comprobado en salas y festivales.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="totote-card p-6 flex flex-col justify-between group hover:border-[#00FF66]/40 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[#00FF66]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-impact uppercase tracking-widest text-[#8A8D9F]">
                    VERIFICADO
                  </span>
                </div>

                <div className="my-1">
                  <div className="font-display stat-number-clamp tracking-tight text-white group-hover:text-[#00FF66] transition-colors duration-200">
                    {stat.number}
                  </div>
                  <h3 className="font-impact text-base text-white/95 tracking-wider uppercase mt-1.5">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#8A8D9F] mt-1 font-ui">
                    {stat.sub}
                  </p>
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300 w-3/4 group-hover:w-full bg-[#00FF66]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-[#8A8D9F]/70 mt-7 font-mono">
          * Datos oficiales contrastados en perfiles públicos @djtotote y @dj_totote.
        </p>
      </div>
    </section>
  );
};

export default Stats;
