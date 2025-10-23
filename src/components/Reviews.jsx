import React from "react";
import { reviews } from "../data/reviews";

export function Reviews() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">Client feedback</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <blockquote key={i} className="p-6 rounded-2xl bg-white shadow">
            <p className="text-gray-800">“{r.text}”</p>
            <footer className="mt-4 text-sm text-gray-600">— {r.author}</footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-4 text-gray-600">Obviously these are not real reviews. I'm still in training, so I'm not yet ready to collect real reviews.</p>
    </section>
  );
}


