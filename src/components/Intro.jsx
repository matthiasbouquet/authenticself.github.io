import React from "react";

export function Intro() {
  return (
    <section id="learn" className="bg-white rounded-3xl shadow-xl p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold">Evidence-based hypnotherapy for real identity changes</h2>
          <p className="mt-4 text-gray-700">
            Contrary to popular belief, hypnosis is <strong>not</strong> something you can do to someone else, and it doesn't require a trance state. It's a state of 
            <strong>focused attention</strong> that you can achieve for yourself.
            When you're in this state, you're more <strong>open to suggestions</strong>, more <strong>relaxed</strong>, more <strong>present</strong>, and more attuned to your own feelings, thoughts and behaviours.
            Through this process, you can achieve more <strong>clarity</strong>, and generate <strong>real and lasting changes</strong> in your life.
          </p>
          <p className="mt-4 text-gray-700">
            In my practice, I blend <strong>clinical hypnosis</strong> with <strong>cognitive and behavioural techniques</strong> to deliver 
            practical and personalised therapy. My work focuses on <strong>measurable improvements</strong> — better sleep,
            calmer days, improved focus, more confidence, more authenticity, and more satisfying relationships.
          </p>
          <p className="mt-4 text-gray-700">
            My work is about reconnecting you to your authentic self, in alignment with your values and goals.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">🔬</div>
              <div>
                <h4 className="font-semibold">Science-informed</h4>
                <p className="text-sm text-gray-600">CBH-trained, pragmatic, measurable outcomes.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">⏱️</div>
              <div>
                <h4 className="font-semibold">Time-efficient</h4>
                <p className="text-sm text-gray-600">Targeted interventions to fit busy schedules.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">🤝</div>
              <div>
                <h4 className="font-semibold">Confidential & flexible</h4>
                <p className="text-sm text-gray-600">Remote sessions with evening and weekend availability.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">🎯</div>
              <div>
                <h4 className="font-semibold">Goal-oriented</h4>
                <p className="text-sm text-gray-600">Short courses (4-8 sessions) focused on your objectives.</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-2xl overflow-hidden shadow">
          <img
            src="/images/translucid-sphere.jpg?auto=format&fit=crop&w=1200&q=80"
            alt="Matthias Bouquet - Authentic Self"
            className="w-full h-full object-cover"
          />
        </aside>
      </div>
    </section>
  );
}


