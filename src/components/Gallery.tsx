"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react";
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
    <section className="relative w-full py-20 sm:py-28 bg-[#050507]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="flex flex-col items-center md:items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>GALERÍA DE ESCENARIO</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            NOCHES DE FESTIVAL
          </h2>
          <p className="text-[#8E90A0] text-sm sm:text-base mt-2 max-w-xl">
            La atmósfera inconfundible del Summer Tour: pirotecnia de escenario, chispas en cabina, luces láser y miles de gargantas cantando.
          </p>
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {siteConfig.gallery.map((item, idx) => {
            const isFeatured = item.spanDouble;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`totote-card group relative overflow-hidden cursor-pointer rounded-[18px] border border-white/10 hover:border-[#00FF66] transition-all duration-300 ${
                  isFeatured
                    ? "sm:col-span-2 sm:row-span-2 shadow-[0_0_35px_rgba(0,255,102,0.25)]"
                    : "hover:shadow-[0_0_25px_rgba(0,255,102,0.2)]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.city}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#00FF66]" />
                </div>

                {isFeatured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#00FF66] text-black font-impact text-xs tracking-widest uppercase font-bold shadow-lg">
                    FOTO DESTACADA · MAINSTAGE
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-1.5 text-xs text-[#00FF66] font-impact tracking-wider uppercase mb-1">
                    <MapPin className="w-3 h-3 text-[#00FF66]" />
                    <span>{item.city} · {item.event}</span>
                  </div>
                  <h3
                    className={`font-display text-white uppercase tracking-wide leading-tight ${
                      isFeatured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {isFeatured && item.caption && (
                    <p className="hidden sm:block text-xs text-[#8E90A0] mt-2 font-ui max-w-md line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00FF66] hover:text-black text-white transition-colors"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00FF66] hover:text-black text-white transition-all"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00FF66] hover:text-black text-white transition-all"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            className="relative max-w-5xl w-full h-[75vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-[18px] overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src={siteConfig.gallery[lightboxIndex].image}
                alt={siteConfig.gallery[lightboxIndex].title}
                fill
                className="object-contain sm:object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-impact text-[#00FF66] tracking-widest uppercase mb-1">
                  <span>{siteConfig.gallery[lightboxIndex].city}</span>
                  <span>·</span>
                  <span className="text-white/80">{siteConfig.gallery[lightboxIndex].event}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-wide">
                  {siteConfig.gallery[lightboxIndex].title}
                </h3>
                {siteConfig.gallery[lightboxIndex].caption && (
                  <p className="text-sm text-[#8E90A0] mt-1 font-ui max-w-xl">
                    {siteConfig.gallery[lightboxIndex].caption}
                  </p>
                )}
              </div>
            </div>

            <div className="text-center font-impact text-lg text-[#00FF66] tracking-widest mt-4">
              {String(lightboxIndex + 1).padStart(2, "0")} / {String(siteConfig.gallery.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
