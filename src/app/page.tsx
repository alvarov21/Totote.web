import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import TourDates from "@/components/TourDates";
import Stats from "@/components/Stats";
import Videos from "@/components/Videos";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Universe from "@/components/Universe";
import Venues from "@/components/Venues";
import Presskit from "@/components/Presskit";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#050507] text-[#F5F5F7] overflow-x-hidden">
      {/* 3.1 Fixed Navbar */}
      <Navbar />

      {/* 3.2 Hero (100svh) with video, live stage lights & ticker */}
      <Hero />

      {/* 3.3 Double Angled Stats Marquee */}
      <StatsMarquee />

      {/* 3.4 Próximas Fechas (#fechas) */}
      <TourDates />

      {/* 3.5 Cifras & Métricas */}
      <Stats />

      {/* 3.6 Vídeos en Directo & Virales (#videos) */}
      <Videos />

      {/* 3.7 Galería de Escenario (Masonry + Lightbox) */}
      <Gallery />

      {/* 3.8 Sobre TOTOTE (#sobre) */}
      <About />

      {/* 3.9 Proyectos / Universo TOTOTE (Totoneta, Friends, Brandy) */}
      <Universe />

      {/* 3.10 Han pinchado / Ha estado en (Festivales & Salas) */}
      <Venues />

      {/* 3.11 Presskit & Rider Técnico (#presskit) */}
      <Presskit />

      {/* 3.12 Booking & Contratación Directa (#booking) */}
      <Booking />

      {/* 3.13 Giant Footer & Redes */}
      <Footer />
    </main>
  );
}
