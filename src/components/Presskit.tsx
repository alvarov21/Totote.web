"use client";

import React from "react";
import { Download, FileText, Image as ImageIcon, Sliders, AlertCircle } from "lucide-react";
import siteConfig from "@/content/site";

export const Presskit: React.FC = () => {
  return (
    <section id="presskit" className="relative w-full py-24 sm:py-32 bg-[#050507]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>PARA PROMOTORES & MEDIOS</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            PRESSKIT & RIDER TÉCNICO
          </h2>
          <p className="text-[#8E90A0] text-sm sm:text-base max-w-xl mt-2 font-ui">
            Todo el material oficial en alta resolución necesario para cartelería, redes sociales, dossiers de festivales y montaje de escenario.
          </p>
        </div>

        {/* 3 Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {siteConfig.presskit.downloads.map((item) => {
            const isZip = item.format === "ZIP";
            const isRider = item.id === "rider";

            return (
              <div
                key={item.id}
                className="totote-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00FF66] transition-all duration-300 border border-white/10 bg-[#0B0C10]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#00FF66] transition-colors">
                      {isZip ? (
                        <ImageIcon className="w-6 h-6 text-[#00FF66]" />
                      ) : isRider ? (
                        <Sliders className="w-6 h-6 text-[#00E599]" />
                      ) : (
                        <FileText className="w-6 h-6 text-[#00FF66]" />
                      )}
                    </div>
                    <span className="font-impact text-xs sm:text-sm text-[#8E90A0] px-3 py-1 rounded-full bg-white/5 border border-white/10 uppercase tracking-widest">
                      {item.format} · {item.size}
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
                    <span>DESCARGAR {item.format}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen de Rider Técnico */}
        <div className="totote-card p-6 sm:p-10 border border-white/10 bg-[#0B0C10]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-impact text-[#00FF66] tracking-widest uppercase mb-1">
                <Sliders className="w-4 h-4" />
                <span>RESUMEN TÉCNICO DE CABINA</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
                ESPECIFICACIONES DEL SHOW
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-wider uppercase self-start sm:self-auto">
              <AlertCircle className="w-4 h-4" />
              <span>CONFIGURACIÓN ESTÁNDAR PIONEER DJ</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-impact tracking-widest text-[#8E90A0] uppercase">
                  <th className="py-3 px-4 font-normal">ELEMENTO</th>
                  <th className="py-3 px-4 font-normal">EQUIPO REQUERIDO</th>
                  <th className="py-3 px-4 font-normal hidden md:table-cell">DETALLES / NOTAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-ui text-sm">
                {siteConfig.presskit.riderSummary.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white whitespace-nowrap">
                      {spec.item}
                    </td>
                    <td className="py-4 px-4 text-[#00FF66] font-medium whitespace-nowrap sm:whitespace-normal">
                      {spec.specification}
                    </td>
                    <td className="py-4 px-4 text-[#8E90A0] hidden md:table-cell">
                      {spec.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E90A0]">
            <p>
              * Para adaptaciones técnicas de sala o riders personalizados de festival, contactar directamente con el equipo de booking.
            </p>
            <a
              href="#booking"
              className="text-[#00FF66] hover:underline font-impact text-sm tracking-wider uppercase shrink-0"
            >
              CONSULTAR CON BOOKING →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presskit;
