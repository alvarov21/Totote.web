"use client";

import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export const CookieBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("totote_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.warn("LocalStorage not accessible for cookie consent", e);
    }
  }, []);

  const saveConsent = (choice: "all" | "necessary") => {
    try {
      localStorage.setItem("totote_cookie_consent", choice);
    } catch (e) {
      console.warn("Failed saving cookie consent", e);
    }
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-5 left-5 z-50 max-w-sm sm:max-w-md w-[calc(100vw-40px)] rounded-[18px] bg-[#0B0C10]/95 backdrop-blur-xl border border-white/15 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-fade-in text-white text-xs font-ui"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#00FF66]/10 text-[#00FF66]">
            <Cookie className="w-4 h-4" />
          </div>
          <span className="font-impact text-base text-white uppercase tracking-wider">
            CONFIGURACIÓN DE PRIVACIDAD
          </span>
        </div>
        <button
          type="button"
          onClick={() => saveConsent("necessary")}
          className="text-[#8E90A0] hover:text-white transition-colors"
          aria-label="Cerrar banner de cookies"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[#8E90A0] leading-relaxed mb-4 text-xs">
        Utilizamos cookies técnicas necesarias para el funcionamiento del reproductor, estadísticas y preferencias de navegación de la web oficial de DJ TOTOTE.
      </p>

      {showSettings && (
        <div className="mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-[11px] text-[#8E90A0]">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">Técnicas / Necesarias</span>
            <span className="text-[#00FF66] font-bold">Siempre activas</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Rendimiento y Vídeo</span>
            <span className="text-white/70">Opcionales</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => saveConsent("all")}
          className="flex-1 py-2.5 px-4 rounded-full bg-[#00FF66] text-black font-impact text-sm tracking-wider uppercase hover:opacity-90 transition-opacity text-center font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]"
        >
          ACEPTAR TODO
        </button>

        <button
          type="button"
          onClick={() => saveConsent("necessary")}
          className="py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-impact text-sm tracking-wider uppercase border border-white/10 transition-colors"
        >
          SOLO NECESARIAS
        </button>

        <button
          type="button"
          onClick={() => setShowSettings(!showSettings)}
          className="text-[11px] text-[#8E90A0] hover:text-[#00FF66] underline ml-auto py-1"
        >
          {showSettings ? "Ocultar ajustes" : "Ajustes"}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
