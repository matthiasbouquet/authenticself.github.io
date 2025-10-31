import React from "react";
import { Link } from "react-router-dom";
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";

export function Footer() {
  return (
    <footer className="mt-12 py-10 text-center text-gray-600">
      <div>
        <Link to="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
      </div>
      <div className="flex items-center justify-center gap-5 mb-3 text-sm">
        <a
          href="https://www.linkedin.com/in/matthias-bouquet-418805197/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-700 hover:text-gray-900"
          aria-label="LinkedIn"
        >
          <SiLinkedin size={20} className="mr-1.5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://instagram.com/matthias.bouquet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-700 hover:text-gray-900"
          aria-label="Instagram"
        >
          <SiInstagram size={20} className="mr-1.5" />
          <span>Instagram</span>
        </a>
        <a
          href="https://youtube.com/@matthiasbouquet?si=ktQLvjKCezPwOSbp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-700 hover:text-gray-900"
          aria-label="YouTube"
        >
          <SiYoutube size={20} className="mr-1.5" />
          <span>YouTube</span>
        </a>
      </div>
      <p>© {new Date().getFullYear()} Matthias Bouquet, PhD — Trainee Hypnotherapist</p>
    </footer>
  );
}
