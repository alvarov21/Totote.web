"use client";

import React, { useState } from "react";
import {
  Flame,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";
import siteConfig from "@/content/site";
import SparksCanvas from "./SparksCanvas";

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    fecha: "",
    ciudad: "",
    tipoEvento: siteConfig.bookingOptions.eventTypes[0],
    aforo: siteConfig.bookingOptions.capacities[1],
    mensaje: "",
    rgpd: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.nombre || !formData.email || !formData.telefono || !formData.fecha || !formData.ciudad) {
      setErrorMsg("Por favor, completa los campos requeridos para tramitar tu solicitud.");
      return;
    }

    if (!formData.rgpd) {
      setErrorMsg("Debes aceptar la política de privacidad y RGPD.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const dynamicWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hola, quiero consultar la contratación de DJ TOTOTE para el ${formData.fecha || "[fecha]"} en ${
      formData.ciudad || "[ciudad]"
    }. ¿Podéis indicarme disponibilidad de calendario?`
  )}`;

  return (
    <section id="booking" className="relative w-full py-20 sm:py-32 bg-[#050507] overflow-hidden">
      {/* Background Stage Pyro & Smoke Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] rounded-full opacity-18 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 255, 102, 0.3) 0%, rgba(0, 200, 100, 0.15) 50%, rgba(5, 5, 7, 0) 75%)",
          }}
        />
      </div>

      <SparksCanvas count={24} speed={0.35} />

      <div className="relative z-20 max-w-[1320px] mx-auto px-5 sm:px-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#00FF66] text-xs font-impact tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>CONTRATACIÓN OFICIAL 2026</span>
          </div>

          <h2 className="font-display h2-title-clamp text-white uppercase tracking-tight">
            PIDE TU FECHA
          </h2>

          <p className="text-base sm:text-xl text-[#F5F5F7]/85 font-medium mt-2 font-ui max-w-xl mx-auto leading-relaxed">
            Discotecas, festivales, ferias y eventos privados.
          </p>

          <div className="inline-flex items-center gap-2 mt-2 text-xs sm:text-sm text-[#00FF66] font-impact tracking-wider uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>{siteConfig.contact.responseTime}</span>
          </div>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-start">
          {/* Main Booking Form Card */}
          <div className="lg:col-span-7 totote-card p-6 sm:p-9 border border-white/10 bg-[#0A0B0E]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] relative">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#00FF66] p-0.5 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(0,255,102,0.4)]">
                  <div className="w-full h-full rounded-full bg-[#0A0B0E] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#00FF66]" />
                  </div>
                </div>

                <span className="font-impact text-lg text-[#00FF66] tracking-widest uppercase mb-1.5">
                  SOLICITUD REGISTRADA
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3">
                  COMPROBANDO DISPONIBILIDAD
                </h3>

                <p className="text-[#8A8D9F] text-sm max-w-md mx-auto mb-6 font-ui">
                  El equipo de booking de TOTOTE se pondrá en contacto contigo en menos de 24 horas para remitirte la disponibilidad y condiciones técnicas.
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-left text-xs text-[#8A8D9F] max-w-md w-full mb-6 font-mono">
                  <div className="text-white font-bold mb-1">Detalles recibidos:</div>
                  <div>Fecha evento: <span className="text-[#00FF66]">{formData.fecha}</span></div>
                  <div>Ubicación: <span className="text-white">{formData.ciudad}</span></div>
                  <div>Contacto: <span className="text-white">{formData.nombre} ({formData.telefono})</span></div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      nombre: "",
                      empresa: "",
                      email: "",
                      telefono: "",
                      fecha: "",
                      ciudad: "",
                      tipoEvento: siteConfig.bookingOptions.eventTypes[0],
                      aforo: siteConfig.bookingOptions.capacities[1],
                      mensaje: "",
                      rgpd: false,
                    });
                  }}
                  className="btn-secondary-totote px-6 py-2.5 text-base uppercase tracking-wider"
                >
                  ENVIAR OTRA SOLICITUD
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3 mb-5">
                  <h3 className="font-impact text-xl text-white uppercase tracking-wider">
                    CONSULTA DE DISPONIBILIDAD
                  </h3>
                  <p className="text-xs text-[#8A8D9F] mt-0.5 font-ui">
                    Indica los datos del evento para coordinar la ruta de gira y condiciones.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Carlos Martínez"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Empresa / Discoteca / Promotora
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ej: Festival Califa"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Email de contacto *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contacto@empresa.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Teléfono móvil *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="600 000 000"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Fecha del evento *
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Ciudad / Localidad *
                    </label>
                    <input
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Ej: Posadas, Córdoba"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Tipo de evento
                    </label>
                    <select
                      name="tipoEvento"
                      value={formData.tipoEvento}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111318] border border-white/8 text-white focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    >
                      {siteConfig.bookingOptions.eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                      Aforo aproximado
                    </label>
                    <select
                      name="aforo"
                      value={formData.aforo}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111318] border border-white/8 text-white focus:outline-none focus:border-[#00FF66] transition-colors text-sm"
                    >
                      {siteConfig.bookingOptions.capacities.map((cap) => (
                        <option key={cap} value={cap}>
                          {cap}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-impact tracking-wider text-white/90 uppercase mb-1">
                    Mensaje / Observaciones técnicas
                  </label>
                  <textarea
                    name="mensaje"
                    rows={3}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Horario estimado de set, otros artistas del cartel, rider de sala..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-white/30 focus:outline-none focus:border-[#00FF66] transition-colors text-sm resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="rgpd"
                    name="rgpd"
                    checked={formData.rgpd}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-3.5 w-3.5 rounded bg-white/10 border-white/20 text-[#00FF66] focus:ring-[#00FF66] accent-[#00FF66]"
                  />
                  <label htmlFor="rgpd" className="text-[11px] text-[#8A8D9F] leading-relaxed select-none">
                    Acepto el tratamiento de datos para la gestión y respuesta de la solicitud de contratación según la normativa RGPD.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-booking w-full py-3.5 text-xl tracking-wider uppercase flex items-center justify-center gap-2 mt-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 text-sm">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ENVIANDO...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>ENVIAR SOLICITUD DE BOOKING</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Booking Alternatives */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="totote-card p-6 sm:p-7 border border-white/10 bg-[#0A0B0E] shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 text-xs font-impact text-[#00FF66] tracking-widest uppercase mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMUNICACIÓN DIRECTA</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
                BOOKING POR WHATSAPP
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8D9F] mt-1.5 mb-5 font-ui">
                Contacto prioritario con el equipo de management para promotores y fechas urgentes.
              </p>

              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#00FF66] hover:bg-white text-black font-impact text-lg tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_0_20px_rgba(0,255,102,0.3)] font-bold"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>HABLAR POR WHATSAPP</span>
              </a>
            </div>

            <div className="totote-card p-6 sm:p-7 border border-white/10 bg-[#0A0B0E] space-y-4">
              <h4 className="font-impact text-lg text-white uppercase tracking-wider pb-2.5 border-b border-white/8">
                CANALES OFICIALES
              </h4>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#00FF66]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] text-[#00FF66] flex items-center justify-center shrink-0 group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8A8D9F] uppercase font-impact tracking-wider block">
                    TELÉFONO DE CONTRATACIÓN
                  </span>
                  <span className="font-display text-xl text-white group-hover:text-[#00FF66] transition-colors">
                    {siteConfig.contact.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=Contratación%20DJ%20TOTOTE`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#00FF66]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] text-[#00FF66] flex items-center justify-center shrink-0 group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8A8D9F] uppercase font-impact tracking-wider block">
                    EMAIL MANAGEMENT
                  </span>
                  <span className="font-impact text-base text-white group-hover:text-[#00FF66] transition-colors">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#8A8D9F] leading-relaxed">
                <span className="text-[#00FF66] font-bold block mb-0.5">
                  ★ TEMPORADA 2026
                </span>
                Respuesta en menos de 24 horas laborables.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
