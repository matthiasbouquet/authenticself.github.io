import React from "react";
import { reviews } from "../data/reviews";

export function Reviews() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">(FAKE) Client feedback (FAKE)</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <blockquote key={i} className="p-6 rounded-2xl bg-white shadow">
            <p className="text-gray-800">“{r.text}”</p>
            <footer className="mt-4 text-sm text-gray-600">— {r.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}


