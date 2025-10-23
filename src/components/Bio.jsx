import React from "react";
import { SiLinkedin, SiInstagram } from "react-icons/si";

export function Bio() {
  return (
    <section className="mt-10 bg-white rounded-3xl p-6 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-3xl font-bold">About Matthias Bouquet, PhD</h2>
        <p className="mt-4 text-gray-700">
          I'm a hypnotherapist trained at the UK College of Hypnosis & Hypnotherapy in Cognitive Behavioural
          Hypnosis. My training and doctoral background give me a research-informed approach while keeping the
          work compassionate and practical. I enjoy helping people who are high-performing but feel held back by
          anxiety, inconsistent sleep, chronic pain, or confusion about their purpose.
          I used to operate in the high-stress environment of investment banking, and now I'm a full-time hypnotherapist 
          and coach, helping others achieve their goals, and reclaim their authentic self.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>✔︎ Integrative CBT + Hypnosis</li>
          <li>✔︎ Short courses (4-8 sessions)</li>
          <li>✔︎ Confidential remote sessions — evening and weekend availability</li>
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="https://www.linkedin.com/in/matthias-bouquet-418805197/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
            aria-label="LinkedIn profile"
          >
            <SiLinkedin size={16} className="mr-2" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/matthias.bouquet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-100"
            aria-label="Instagram profile"
          >
            <SiInstagram size={16} className="mr-2" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow">
        <img
          src="/images/mb_coat.jpg"
          alt="Matthias Bouquet"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}


