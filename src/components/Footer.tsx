"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, Disc3, ArrowUp } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "./Icons";
import siteConfig from "@/content/site";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050507] pt-16 pb-0 overflow-hidden border-t border-white/8 select-none">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-14 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3.5">
            <div className="relative h-9 w-32">
              <Image
                src={siteConfig.media.logoSvg}
                alt="DJ TOTOTE"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#8A8D9F] max-w-sm font-ui leading-relaxed">
              DJ urbano de reguetón, dembow y música de festival. Desde Posadas (Córdoba) para los principales escenarios de España.
            </p>

            <div className="text-xs text-[#00FF66] font-impact tracking-widest uppercase">
              {siteConfig.artist.badgeText}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="text-xs font-impact tracking-widest text-[#00FF66] uppercase mb-1">
              NAVEGACIÓN
            </span>
            <a href="#fechas" className="text-xs sm:text-sm text-white/70 hover:text-[#00FF66] transition-colors">
              Próximas Fechas (Tour)
            </a>
            <a href="#videos" className="text-xs sm:text-sm text-white/70 hover:text-[#00FF66] transition-colors">
              Vídeos en Directo & Virales
            </a>
            <a href="#sobre" className="text-xs sm:text-sm text-white/70 hover:text-[#00FF66] transition-colors">
              Sobre TOTOTE & Trayectoria
            </a>
            <a href="#presskit" className="text-xs sm:text-sm text-white/70 hover:text-[#00FF66] transition-colors">
              Presskit & Rider Oficial
            </a>
            <a href="#booking" className="text-xs sm:text-sm font-bold text-[#00FF66] hover:underline transition-colors">
              Contratación & Booking
            </a>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-col gap-3.5">
            <span className="text-xs font-impact tracking-widest text-[#00FF66] uppercase">
              REDES OFICIALES
            </span>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-[#00FF66] hover:text-black text-white/90 border border-white/8 transition-colors flex items-center gap-2 text-xs font-impact tracking-wider uppercase"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-[#00FF66] hover:text-black text-white/90 border border-white/8 transition-colors flex items-center gap-2 text-xs font-impact tracking-wider uppercase"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>TikTok</span>
              </a>

              <a
                href={siteConfig.socials.totoneta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#00FF66]/10 hover:bg-[#00FF66] hover:text-black text-[#00FF66] border border-[#00FF66]/30 transition-colors flex items-center gap-2 text-xs font-impact tracking-wider uppercase"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Canal TOTONETA</span>
              </a>

              <a
                href={siteConfig.socials.spotify.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-[#1DB954] hover:text-black text-white/90 border border-white/8 transition-colors flex items-center gap-2 text-xs font-impact tracking-wider uppercase"
              >
                <Disc3 className="w-3.5 h-3.5" />
                <span>Spotify</span>
              </a>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-impact tracking-wider text-[#8A8D9F] hover:text-white transition-colors uppercase"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>VOLVER ARRIBA</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8D9F] font-ui">
          <div>
            © {new Date().getFullYear()} TOTOTE · Spain Urban DJ. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-3">
            <a href="#booking" className="hover:text-white transition-colors">
              Aviso Legal
            </a>
            <span>·</span>
            <a href="#booking" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <span>·</span>
            <a href="#booking" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>

          <div className="text-white/60">
            Web por{" "}
            <a
              href="https://potenciatunegocio.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FF66] font-bold hover:underline transition-all"
            >
              Potencia tu Negocio
            </a>
          </div>
        </div>
      </div>

      {/* Giant "TOTOTE" Cutout Text at the bottom edge */}
      <div className="w-full overflow-hidden flex justify-center items-end leading-none pointer-events-none select-none opacity-10 hover:opacity-18 transition-opacity">
        <span
          className="font-display uppercase tracking-tighter text-white translate-y-1/3"
          style={{ fontSize: "clamp(5rem, 22vw, 20rem)" }}
        >
          TOTOTE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
