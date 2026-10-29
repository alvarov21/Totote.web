"use client";

import React from "react";
import siteConfig from "@/content/site";

export const Venues: React.FC = () => {
  const venues = siteConfig.venues;
  const loopList = [...venues, ...venues, ...venues];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#050507] border-y border-white/5 overflow-hidden select-none">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10 mb-8 text-center">
        <span className="text-xs sm:text-sm font-impact tracking-[0.25em] text-[#8E90A0] uppercase">
          HAN CONTADO CON TOTOTE EN SUS ESCENARIOS
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden py-3">
          <div className="flex items-center gap-10 sm:gap-16 animate-marquee-fast">
            {loopList.map((venue, idx) => (
              <div
                key={`venue-${idx}`}
                className="flex items-center gap-10 sm:gap-16 text-white/50 hover:text-white transition-colors duration-200"
              >
                <div className="flex flex-col items-center">
                  <span className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white/70 hover:text-white transition-colors">
                    {venue.name}
                  </span>
                  {venue.city && (
                    <span className="text-[10px] sm:text-xs font-impact tracking-widest text-[#00FF66]/80 uppercase">
                      {venue.city}
                    </span>
                  )}
                </div>
                <span className="text-[#00FF66] text-sm opacity-60">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;
