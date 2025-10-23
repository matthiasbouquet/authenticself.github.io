import React from "react";
import { motion } from "framer-motion";
import { areas } from "../data/areas";

export function Areas() {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {areas.map((a) => (
        <motion.article
          key={a.title}
          className="relative rounded-2xl overflow-hidden shadow-lg min-h-[220px] bg-white"
          whileHover={{ scale: 1.02 }}
        >
          <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white">{a.title}</h3>
            <p className="mt-2 text-sm text-white/90">{a.copy}</p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}


