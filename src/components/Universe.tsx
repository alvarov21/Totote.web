"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Users, Shirt } from "lucide-react";
import siteConfig from "@/content/site";

export const Universe: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#050507]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECOSISTEMA DEL ARTISTA</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            UNIVERSO TOTOTE
          </h2>
          <p className="text-[#8E90A0] text-sm sm:text-base mt-2">
            Más que un DJ: una marca, una comunidad y un concepto de fiesta propio que mueve a miles de jóvenes.
          </p>
        </div>

        {/* 3 Glowing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.universe.map((item) => {
            const isTotoneta = item.id === "totoneta";
            const isFriends = item.id === "tototeandfriends";

            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="totote-card group relative p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border border-white/10 hover:border-[#00FF66] hover:shadow-[0_0_35px_rgba(0,255,102,0.25)] overflow-hidden bg-[#0B0C10]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-impact tracking-widest uppercase border bg-[#00FF66]/10 border-[#00FF66]/40 text-[#00FF66]">
                      {item.badge}
                    </span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-[#00FF66] group-hover:text-black" />
                    </div>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide group-hover:text-[#00FF66] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-impact text-base text-[#00FF66] tracking-wider block mt-1">
                    {item.handle}
                  </span>

                  <p className="text-sm text-[#8E90A0] mt-4 font-ui leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {isTotoneta && item.image && (
                  <div className="relative w-full h-36 mt-6 rounded-xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center p-2">
                    <Image
                      src={item.image}
                      alt="Ilustración Totoneta Furgoneta"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {isFriends && (
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/70 font-ui">
                    <Users className="w-4 h-4 text-[#00FF66]" />
                    <span>Colaboraciones con cantantes y DJs invitados</span>
                  </div>
                )}

                {!isTotoneta && !isFriends && (
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/70 font-ui">
                    <Shirt className="w-4 h-4 text-[#00FF66]" />
                    <span>Colecciones streetwear & drop cápsula</span>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Universe;
