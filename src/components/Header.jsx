import React from "react";

export function Header() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <nav className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm px-4 py-3">
          <a href="#top" className="font-semibold text-gray-900">Matthias Bouquet, PhD - Authentic Self</a>
          <div className="flex items-center gap-4 text-sm md:text-base">
            <a href="#learn" className="text-gray-700 hover:text-gray-900">How it works</a>
            <a href="#focus" className="text-gray-700 hover:text-gray-900">My focus</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">Bio</a>
            <a href="#reviews" className="text-gray-700 hover:text-gray-900">Reviews</a>
            <a href="#book" className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl px-3 py-1.5 font-medium">Book free call</a>
          </div>
        </nav>
      </div>
    </div>
  );
}


