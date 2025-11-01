import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogLoopOfAnxiety from "./pages/BlogLoopOfAnxiety";
import BlogIndex from "./pages/BlogIndex";
import BlogSalterCRT from "./pages/BlogSalterCRT";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog/the-loop-of-anxiety" element={<BlogLoopOfAnxiety />} />
      <Route path="/blog/conditioned-reflex-therapy-andrew-salter-review" element={<BlogSalterCRT />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


