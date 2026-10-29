"use client";

import React from "react";
import siteConfig from "@/content/site";

export const StatsMarquee: React.FC = () => {
  const items = siteConfig.stats.marqueeHighlights;
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative py-12 sm:py-16 overflow-hidden select-none bg-[#050507]">
      {/* Background Counter-Band (Subtle -1° tilt, dark carbon background) */}
      <div
        className="w-[120vw] -ml-[10vw] bg-[#07080A] border-y border-white/5 py-2.5 sm:py-3 -rotate-1 transform translate-y-3 sm:translate-y-4 opacity-50 shadow-2xl"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee-right">
            {marqueeItems.map((text, idx) => (
              <span
                key={`b2-${idx}`}
                className="font-impact text-xl sm:text-2xl text-[#8A8D9F] tracking-widest uppercase flex items-center gap-8"
              >
                <span>{text}</span>
                <span className="text-[#00FF66] text-xs opacity-60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground Primary Band (Sleek 1° tilt, dark tactical band with green laser borders and crisp Anton text) */}
      <div className="relative z-10 w-[120vw] -ml-[10vw] bg-[#0A0B0E] border-y border-[#00FF66]/30 py-3 sm:py-4 rotate-1 shadow-[0_0_35px_rgba(0,0,0,0.9)]">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee-left">
            {marqueeItems.map((text, idx) => (
              <span
                key={`b1-${idx}`}
                className="font-display text-2xl sm:text-3xl text-white tracking-wider uppercase flex items-center gap-8 font-normal"
              >
                <span>{text}</span>
                <span className="text-[#00FF66] text-base">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsMarquee;
