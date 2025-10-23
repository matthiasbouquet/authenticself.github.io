import React from "react";
import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Areas } from "../components/Areas";
import { Bio } from "../components/Bio";
import { Reviews } from "../components/Reviews";
import { Booking } from "../components/Booking";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 antialiased">
      <Header />
      <Hero />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 -mt-24 relative z-20">
        <section id="learn"><Intro /></section>
        <section id="focus"><Areas /></section>
        <section id="about"><Bio /></section>
        <section id="reviews"><Reviews /></section>
        <Booking />
        <Footer />
      </main>
    </div>
  );
}


