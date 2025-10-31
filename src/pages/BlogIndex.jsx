import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export default function BlogIndex() {
  const posts = [
    {
      path: "/blog/the-loop-of-anxiety",
      title: "The Loop of Anxiety: Why Your Brain Won’t Let Go (And What AI Can Teach Us About It)",
      readingTime: "9–10 minutes",
      excerpt:
        "Why your brain clings to unfinished worries, how prediction fuels anxiety, and what the Zeigarnik effect has to do with earworms.",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 antialiased">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16">
        <section>
          <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                className="block p-6 rounded-2xl bg-white shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-gray-700">Estimated reading time: {p.readingTime}</p>
                <p className="mt-3 text-gray-600">{p.excerpt}</p>
                <p className="mt-3 text-indigo-700 font-medium">Read article →</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


