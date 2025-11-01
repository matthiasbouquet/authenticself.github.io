import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Areas } from "../components/Areas";
import { Bio } from "../components/Bio";
import { Booking } from "../components/Booking";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 antialiased">
      <Header />
      <Hero />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 -mt-24 relative z-20">
        <section id="learn"><Intro /></section>
        <section id="focus"><Areas /></section>
        <section id="about"><Bio /></section>
        <section id="blog" className="mt-10">
          <h2 className="text-2xl font-bold">Blog</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/blog/conditioned-reflex-therapy-andrew-salter-review"
              className="block rounded-2xl bg-white shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src="/images/forest.jpg" alt="Forest path suggesting new learning and conditioning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Conditioned Reflex Therapy by Andrew Salter — A Practitioner’s Review</h3>
                <p className="mt-2 text-gray-700">Estimated reading time: 7–9 minutes</p>
                <p className="mt-3 text-indigo-700 font-medium">Read article →</p>
              </div>
            </Link>

            <Link
              to="/blog/the-loop-of-anxiety"
              className="block rounded-2xl bg-white shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src="/images/trader-stressed.jpg" alt="A stressed professional at screens, symbolizing anxious prediction loops" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">The Loop of Anxiety: Why Your Brain Won’t Let Go (And What AI Can Teach Us About It)</h3>
                <p className="mt-2 text-gray-700">Estimated reading time: 9–10 minutes</p>
                <p className="mt-3 text-indigo-700 font-medium">Read article →</p>
              </div>
            </Link>
          </div>
        </section>
        <Booking />
        <Footer />
      </main>
    </div>
  );
}


