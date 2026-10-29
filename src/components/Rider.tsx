"use client";

import React from "react";
import { Download, Sliders, Volume2, ShieldCheck } from "lucide-react";
import siteConfig from "@/content/site";

export const Rider: React.FC = () => {
  return (
    <section id="rider" className="relative w-full py-20 sm:py-28 bg-[#050507]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>PRODUCCIÓN & ESCENARIO</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            RIDER TÉCNICO
          </h2>
          <p className="text-[#8E90A0] text-sm sm:text-base max-w-xl mt-2 font-ui">
            Especificaciones técnicas de cabina, microfonía y monitorización necesarias para garantizar el show al máximo nivel.
          </p>
        </div>

        {/* 2 Rider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
          {siteConfig.rider.cards.map((item, idx) => {
            const isDoc = item.id === "rider-doc";

            return (
              <div
                key={item.id}
                className="totote-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00FF66] transition-all duration-300 border border-white/10 bg-[#0B0C10]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#00FF66] transition-colors">
                      {isDoc ? (
                        <Sliders className="w-6 h-6 text-[#00FF66]" />
                      ) : (
                        <Volume2 className="w-6 h-6 text-[#00FF66]" />
                      )}
                    </div>
                    <span className="font-impact text-xs sm:text-sm text-[#00FF66] px-3 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 uppercase tracking-widest">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#00FF66] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E90A0] mt-3 font-ui leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={item.fileUrl}
                    download
                    className="w-full py-3.5 rounded-full font-impact text-base tracking-wider uppercase flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-[#00FF66] hover:text-[#050507] text-white border border-white/10 transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>{item.actionText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rider;
