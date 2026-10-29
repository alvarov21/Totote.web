"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Eye,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Flame,
  ArrowUpRight,
} from "lucide-react";
import siteConfig, { VideoItem } from "@/content/site";
import DripDivider from "./DripDivider";

export const Videos: React.FC = () => {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    const newIdx =
      direction === "left"
        ? Math.max(0, carouselIndex - 1)
        : Math.min(siteConfig.carouselVideos.length - 1, carouselIndex + 1);
    setCarouselIndex(newIdx);
  };

  const handleOpenModal = (video: VideoItem) => {
    setActiveModalVideo(video);
  };

  const closeModal = () => {
    setActiveModalVideo(null);
  };

  return (
    <section id="videos" className="relative w-full py-20 sm:py-28 bg-[#050507] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>EN DIRECTO & SETS</span>
          </div>
          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            ASÍ SE PONE UNA DISCOTECA.
          </h2>
          <p className="text-[#8A8D9F] text-xs sm:text-base max-w-xl mt-2 font-ui">
            Sin filtros. Pistas llenas, drops de dembow y conexión directa con el público.
          </p>
        </div>

        {/* FILA 1: LOS MÁS VIRALES */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2 font-impact text-lg sm:text-xl text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00FF66]" />
              <span>LOS MÁS VIRALES</span>
            </div>
            <span className="text-xs text-[#00FF66] font-impact uppercase tracking-widest">
              +13M REPRODUCCIONES EN REDES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {siteConfig.viralVideos.map((video) => (
              <div
                key={video.id}
                className="totote-card group overflow-hidden border border-white/10 hover:border-[#00FF66]/50 bg-[#0A0B0E] transition-all duration-200 shadow-xl flex flex-col"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/40 pointer-events-none" />

                  {/* Views Count Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#00FF66]" />
                    <span className="font-impact text-sm text-white tracking-wider">
                      {video.views} REPRODUCCIONES
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white font-impact text-[11px] tracking-widest uppercase">
                    {video.category}
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(video)}
                      className="w-16 h-16 rounded-full bg-[#00FF66] p-0.5 flex items-center justify-center shadow-[0_0_25px_rgba(0,255,102,0.4)] transform group-hover:scale-105 transition-transform"
                      aria-label={`Ver vídeo: ${video.title}`}
                    >
                      <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="text-[11px] text-[#00FF66] font-impact tracking-widest uppercase block mb-1">
                      {video.location}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide leading-tight drop-shadow-md">
                      {video.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 bg-[#111318] flex items-center justify-between border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(video)}
                    className="text-xs font-impact text-white/80 hover:text-[#00FF66] tracking-wider uppercase flex items-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#00FF66]" />
                    <span>PANTALLA COMPLETA</span>
                  </button>
                  <a
                    href={video.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#00FF66] hover:underline font-impact tracking-wider uppercase flex items-center gap-1"
                  >
                    <span>TIKTOK OFICIAL</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FILA 2: CARRUSEL ARRASTRABLE */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF66]" />
              <h3 className="font-impact text-lg sm:text-xl text-white uppercase tracking-wider">
                MOMENTOS DE DIRECTO
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-impact text-sm text-[#00FF66] tracking-widest">
                {String(carouselIndex + 1).padStart(2, "0")} / {String(siteConfig.carouselVideos.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel("left")}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                  aria-label="Vídeo anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel("right")}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                  aria-label="Siguiente vídeo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none" }}
          >
            {siteConfig.carouselVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleOpenModal(video)}
                className="totote-card min-w-[220px] sm:min-w-[250px] aspect-[9/16] relative rounded-[14px] overflow-hidden group snap-start border border-white/8 hover:border-[#00FF66]/50 transition-all duration-200 shrink-0"
              >
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-impact text-[#00FF66] tracking-widest uppercase border border-white/10">
                    {video.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/90 font-impact bg-black/80 px-2 py-0.5 rounded-full">
                    <Eye className="w-3 h-3 text-[#00FF66]" />
                    {video.views}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-12 h-12 rounded-full bg-[#00FF66] text-black flex items-center justify-center shadow-[0_0_15px_#00FF66]">
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="text-[10px] text-[#00FF66] font-impact tracking-widest uppercase block">
                    {video.location}
                  </span>
                  <h4 className="font-impact text-sm text-white tracking-wide uppercase line-clamp-2 leading-tight">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={siteConfig.socials.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-totote px-7 py-3 flex items-center gap-2.5 text-lg tracking-wider uppercase group"
            >
              <span>VER MÁS EN TIKTOK (@DJ_TOTOTE)</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-[#0A0B0E] rounded-[16px] overflow-hidden border border-[#00FF66]/30 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/80 hover:bg-[#00FF66] hover:text-black text-white transition-colors"
              aria-label="Cerrar reproductor"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={activeModalVideo.poster}
                alt={activeModalVideo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

              <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#00FF66]" />
                <span className="font-impact text-xs text-[#00FF66] tracking-widest uppercase">
                  REPRODUCIENDO
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-[#00FF66] text-black font-impact text-xs tracking-wider uppercase font-bold">
                    {activeModalVideo.category}
                  </span>
                  <span className="text-white/70 text-xs font-impact tracking-widest uppercase">
                    {activeModalVideo.location} · {activeModalVideo.views}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide leading-tight">
                  {activeModalVideo.title}
                </h3>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                  <a
                    href="#booking"
                    onClick={closeModal}
                    className="btn-primary-booking px-5 py-2 text-base uppercase tracking-wider"
                  >
                    CONTRATAR SHOW
                  </a>
                  <a
                    href={siteConfig.socials.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-impact text-[#00FF66] hover:text-white uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>TIKTOK</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <DripDivider className="mt-16" color="#00FF66" />
    </section>
  );
};

export default Videos;
