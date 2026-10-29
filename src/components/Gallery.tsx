"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, MapPin, Flame } from "lucide-react";
import siteConfig from "@/content/site";

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % siteConfig.gallery.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + siteConfig.gallery.length) % siteConfig.gallery.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="galeria" className="relative w-full py-20 sm:py-28 bg-[#050507]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>EN DIRECTO · SUMMER TOUR</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            GALERÍA DE DIRECTOS
          </h2>
          <p className="text-[#8E90A0] text-sm sm:text-base mt-2 max-w-xl font-ui">
            Pirotecnia, llamas de escenario, columnas criogénicas de CO2 y miles de personas viviendo cada drop del set de TOTOTE.
          </p>
        </div>

        {/* 4 Photos Responsive Grid (Native 3:4 Aspect Ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {siteConfig.gallery.map((item, idx) => {
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="totote-card group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-[18px] border border-white/10 hover:border-[#00FF66] hover:shadow-[0_0_35px_rgba(0,255,102,0.3)] transition-all duration-300 bg-[#0B0C10]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.city}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                  <Maximize2 className="w-4 h-4 text-[#00FF66]" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-1.5 text-xs text-[#00FF66] font-impact tracking-wider uppercase mb-1">
                    <MapPin className="w-3 h-3 text-[#00FF66]" />
                    <span>
                      {item.city} · {item.event}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide leading-tight group-hover:text-[#00FF66] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00FF66] text-white hover:text-black transition-colors"
            aria-label="Cerrar vista previa"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00FF66] text-white hover:text-black transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00FF66] text-white hover:text-black transition-colors"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image in Lightbox */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src={siteConfig.gallery[lightboxIndex].image}
                alt={siteConfig.gallery[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center">
              <span className="font-impact text-xs sm:text-sm text-[#00FF66] tracking-widest uppercase block">
                {siteConfig.gallery[lightboxIndex].city} · {siteConfig.gallery[lightboxIndex].event}
              </span>
              <h4 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide mt-1">
                {siteConfig.gallery[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#8E90A0] mt-1 font-ui max-w-lg">
                {siteConfig.gallery[lightboxIndex].caption}
              </p>
              <span className="text-[11px] text-[#8E90A0] font-mono mt-2 block">
                {lightboxIndex + 1} / {siteConfig.gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
