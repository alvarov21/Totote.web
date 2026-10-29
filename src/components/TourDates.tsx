"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Ticket, Flame, ArrowUpRight, AlertCircle, MapPin, Sparkles } from "lucide-react";
import siteConfig, { TourDate } from "@/content/site";
import DripDivider from "./DripDivider";

export const TourDates: React.FC = () => {
  return (
    <section id="fechas" className="relative w-full py-20 sm:py-28 bg-[#050507] overflow-hidden">
      {/* Subtle stage ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#00FF66]/8 blur-[150px] pointer-events-none"
      />

      <div className="relative z-20 max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CALENDARIO DE GIRA 2026</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            PRÓXIMAS FECHAS
          </h2>
          <p className="text-[#8A8D9F] text-sm sm:text-base max-w-xl mt-2 font-ui">
            Fechas confirmadas para la temporada. Entradas oficiales disponibles a través de las promotoras y salas colaboradoras.
          </p>
        </div>

        {/* Tour List Container */}
        <div className="relative flex flex-col gap-3">
          {siteConfig.tourDates.map((tour) => {
            const isSoldOut = tour.status === "SOLD OUT";
            const isUltimas = tour.status === "ÚLTIMAS";

            return (
              <div
                key={tour.id}
                className={`group relative rounded-[16px] border transition-all duration-200 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  isSoldOut
                    ? "bg-[#0A0B0E]/50 border-white/5 opacity-55 hover:opacity-80"
                    : "bg-[#0A0B0E] border-white/8 hover:border-[#00FF66]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                }`}
              >
                {/* Date column (Day + Month) */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex flex-col items-center justify-center w-16 sm:w-20 py-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-[#00FF66]/40 transition-colors">
                    <span className="font-display text-2xl sm:text-3xl text-white group-hover:text-[#00FF66] transition-colors leading-none">
                      {tour.day}
                    </span>
                    <span className="font-impact text-xs sm:text-sm text-[#00FF66] tracking-widest mt-0.5">
                      {tour.month}
                    </span>
                  </div>

                  {/* Mobile-visible city indicator */}
                  <div className="md:hidden flex flex-col">
                    <span className="font-display text-xl text-white tracking-wide">
                      {tour.city}
                    </span>
                    <span className="text-xs text-[#8A8D9F] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#00FF66]" />
                      {tour.venue}
                    </span>
                  </div>
                </div>

                {/* Desktop City & Venue Details + Poster Thumbnail on hover */}
                <div className="hidden md:flex items-center flex-1 px-4 gap-6">
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl text-white group-hover:text-[#00FF66] transition-colors tracking-wide">
                        {tour.city}
                      </h3>
                      {tour.isHeadline && (
                        <span className="px-2 py-0.5 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] font-impact text-[11px] tracking-wider uppercase">
                          HEADLINER
                        </span>
                      )}
                    </div>
                    <p className="text-[#8A8D9F] text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00FF66]/70" />
                      <span>{tour.venue}</span>
                    </p>
                  </div>

                  {/* Mini Poster Preview inline on hover */}
                  {tour.posterThumb && (
                    <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/10 opacity-30 group-hover:opacity-100 group-hover:border-[#00FF66]/50 transition-all duration-300 relative shrink-0">
                      <Image
                        src={tour.posterThumb}
                        alt={`${tour.city} flyer`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Status and Action Button */}
                <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                  <div>
                    {isSoldOut ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-impact text-xs sm:text-sm tracking-wider uppercase">
                        <Flame className="w-3.5 h-3.5" />
                        SOLD OUT
                      </span>
                    ) : isUltimas ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-impact text-xs sm:text-sm tracking-wider uppercase">
                        <AlertCircle className="w-3.5 h-3.5" />
                        ÚLTIMAS ENTRADAS
                      </span>
                    ) : (
                      <span className="hidden sm:inline-flex items-center text-xs text-[#00FF66]/80 font-impact tracking-widest uppercase">
                        ACCESO DISPONIBLE
                      </span>
                    )}
                  </div>

                  {isSoldOut ? (
                    <a
                      href="#booking"
                      className="px-4 py-2 rounded-full border border-white/10 text-white/40 text-sm font-impact tracking-wider uppercase hover:border-[#00FF66] hover:text-[#00FF66] transition-colors"
                    >
                      PEDIR FECHA
                    </a>
                  ) : (
                    <a
                      href={tour.ticketUrl}
                      target={tour.ticketUrl.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full font-impact text-base tracking-wider uppercase flex items-center gap-1.5 transition-all duration-200 bg-[#00FF66] text-[#050507] hover:bg-white"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>ENTRADAS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* "¿Quieres a TOTOTE en tu ciudad?" Booking Callout */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-[16px] bg-[#0A0B0E] border border-white/8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col">
            <span className="font-impact text-xs sm:text-sm text-[#00FF66] tracking-widest uppercase">
              CONTRATACIÓN PARA PROMOTORES Y SALAS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mt-1">
              ¿QUIERES A TOTOTE EN TU CIUDAD?
            </h3>
            <p className="text-[#8A8D9F] text-xs sm:text-sm max-w-xl mt-1 font-ui">
              Consulta disponibilidad de calendario para festivales, salas y fiestas patronales.
            </p>
          </div>

          <a
            href="#booking"
            className="btn-primary-booking px-7 py-3 text-lg tracking-wider uppercase shrink-0 flex items-center gap-2 group"
          >
            <Flame className="w-4 h-4 text-black" />
            <span>SOLICITAR DISPONIBILIDAD</span>
          </a>
        </div>
      </div>

      <DripDivider className="mt-14" color="#00FF66" />
    </section>
  );
};

export default TourDates;
