"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Flame } from "lucide-react";
import { InstagramIcon } from "./Icons";
import siteConfig from "@/content/site";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "FECHAS", href: "#fechas" },
    { label: "VÍDEOS", href: "#videos" },
    { label: "GALERÍA", href: "#galeria" },
    { label: "SOBRE", href: "#sobre" },
    { label: "PRESSKIT", href: "#presskit" },
    { label: "RIDER", href: "#rider" },
    { label: "BOOKING", href: "#booking" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050507]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 flex items-center justify-between">
          {/* Logo TOTOTE */}
          <Link
            href="#"
            className="font-display font-extrabold text-2xl sm:text-3xl tracking-tighter uppercase text-white hover:text-[#00FF66] transition-colors flex items-center gap-1.5 select-none"
          >
            <span>TOTOTE</span>
            <span className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_10px_#00FF66]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-[14px] font-semibold text-[#F5F5F7]/75 hover:text-[#00FF66] transition-colors duration-200 tracking-wider relative group uppercase"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF66] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Booking Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#booking"
              className="bg-[#00FF66] text-[#050507] text-[14px] font-bold px-5 py-2 rounded-full hover:bg-[#00E575] hover:scale-105 active:scale-[0.97] transition-all duration-150 ease-out cursor-pointer uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,255,102,0.3)]"
            >
              <span>BOOKING</span>
              <ArrowUpRight className="w-4 h-4 text-[#050507]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            className="md:hidden p-2 text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00FF66]" /> : <Menu className="w-6 h-6 text-[#00FF66]" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050507]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[-8px]"
        }`}
        style={{ paddingTop: "100px" }}
      >
        <div className="flex flex-col gap-5 my-auto">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#00FF66] font-impact tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
            ACCESO DIRECTO
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="font-display text-4xl sm:text-5xl text-white hover:text-[#00FF66] transition-colors py-1 flex items-center justify-between border-b border-white/5"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-7 h-7 text-[#00FF66] opacity-70" />
            </a>
          ))}
        </div>

        {/* Mobile Drawer Bottom Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <a
            href="#booking"
            onClick={handleLinkClick}
            className="btn-primary-booking w-full py-4 text-center text-2xl tracking-widest uppercase flex items-center justify-center gap-2"
          >
            <Flame className="w-6 h-6 text-black" />
            <span>PIDE TU FECHA AHORA</span>
          </a>

          <div className="flex items-center justify-between text-xs text-white/50 pt-2 font-mono">
            <span>{siteConfig.artist.badgeText}</span>
            <a
              href={siteConfig.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#00FF66]"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@djtotote</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
