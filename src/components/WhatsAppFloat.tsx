"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import siteConfig from "@/content/site";

export const WhatsAppFloat: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Acceso rápido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0B0C10]/95 backdrop-blur-md border border-[#00FF66]/40 shadow-xl transition-all duration-300 pointer-events-none select-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
        <span className="text-xs font-impact tracking-wider text-white uppercase whitespace-nowrap">
          BOOKING DIRECTO · WHATSAPP
        </span>
      </div>

      <a
        href={siteConfig.contact.whatsappBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para contratar a DJ TOTOTE"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#00FF66] to-[#00E599] p-0.5 shadow-[0_0_35px_rgba(0,255,102,0.5)] hover:shadow-[0_0_45px_rgba(0,255,102,0.8)] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full bg-[#0B0C10] group-hover:bg-[#00FF66] transition-colors duration-300 flex items-center justify-center">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#00FF66] group-hover:text-black transition-colors" />
        </div>

        <span className="absolute -inset-1 rounded-full bg-[#00FF66] opacity-30 group-hover:opacity-60 blur-sm animate-pulse -z-10" />
      </a>
    </aside>
  );
};

export default WhatsAppFloat;
