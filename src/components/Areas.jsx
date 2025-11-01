import React from "react";
import { motion } from "framer-motion";
import { areas } from "../data/areas";

export function Areas() {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {areas.map((a) => (
        <div key={a.title} className="group [perspective:1000px]">
          <motion.article
            className="relative rounded-2xl overflow-hidden shadow-lg h-72 bg-white"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transform-gpu">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/90">{a.copy}</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white p-6 md:p-8 flex items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <blockquote className="max-w-md">
                  <p className="text-lg md:text-xl text-gray-800">“{a.quote}”</p>
                </blockquote>
              </div>
            </div>
          </motion.article>
        </div>
      ))}
    </section>
  );
}


