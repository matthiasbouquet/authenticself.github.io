import React from "react";

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zM20.452 20.452h-3.5v-6.221c0-1.484-.03-3.391-2.066-3.391-2.07 0-2.387 1.617-2.387 3.283v6.329h-3.5V9h3.36v1.561h.047c.47-.89 1.618-1.83 3.33-1.83 3.563 0 4.217 2.346 4.217 5.394v6.327z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/matthias.bouquet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-100"
            aria-label="Instagram profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.403a4.92 4.92 0 011.78 1.153 4.92 4.92 0 011.153 1.78c.163.458.348 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.153 1.78 4.92 4.92 0 01-1.78 1.153c-.458.163-1.257.348-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.403a4.92 4.92 0 01-1.78-1.153 4.92 4.92 0 01-1.153-1.78c-.163-.458-.348-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.427a4.92 4.92 0 011.153-1.78A4.92 4.92 0 015.499 1.79c.458-.163 1.257-.348 2.427-.403C9.192 1.329 9.572 1.317 12 1.317m0-1.317C8.741 0 8.332.012 7.052.07 5.771.129 4.73.332 3.9.63a6.24 6.24 0 00-2.27 1.48A6.24 6.24 0 00.15 4.38C-.148 5.21-.351 6.251-.41 7.532-.467 8.812-.48 9.221-.48 12.48s.012 3.668.07 4.948c.059 1.281.262 2.322.56 3.152a6.24 6.24 0 001.48 2.27 6.24 6.24 0 002.27 1.48c.83.298 1.871.501 3.152.56 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.281-.059 2.322-.262 3.152-.56a6.24 6.24 0 002.27-1.48 6.24 6.24 0 001.48-2.27c.298-.83.501-1.871.56-3.152.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.059-1.281-.262-2.322-.56-3.152a6.24 6.24 0 00-1.48-2.27 6.24 6.24 0 00-2.27-1.48c-.83-.298-1.871-.501-3.152-.56C15.668.012 15.259 0 12 0z"/>
              <path d="M12 5.838A6.162 6.162 0 105.838 12 6.169 6.169 0 0012 5.838m0-1.838A8 8 0 1120 12 8.009 8.009 0 0112 4z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
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


