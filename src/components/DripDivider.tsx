"use client";

import React from "react";

interface DripDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export const DripDivider: React.FC<DripDividerProps> = ({
  className = "",
  flip = false,
  color = "#00FF66",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none my-6 ${className}`}
      style={{ height: "32px" }}
    >
      {/* Laser line with intense core and diffuse atmospheric glow */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00FF66] to-transparent opacity-80" />
      <div className="absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent" />
      <div
        className="absolute top-1/2 left-1/3 right-1/3 -translate-y-1/2 h-[8px] blur-sm opacity-60"
        style={{
          background: "linear-gradient(90deg, transparent, #00FF66, transparent)",
        }}
      />

      {/* Center Tactical Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_12px_#00FF66]" />
        <span className="text-[10px] font-impact tracking-[0.3em] text-[#00FF66]/80 uppercase px-2 py-0.5 rounded bg-[#050507] border border-[#00FF66]/30">
          TOTOTE · LIVE
        </span>
        <span className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_12px_#00FF66]" />
      </div>
    </div>
  );
};

export default DripDivider;
