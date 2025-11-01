import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function BlogSalterCRT() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 antialiased">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16">
        <article className="prose prose-indigo max-w-3xl mx-auto">
          <header>
            <h1>Conditioned Reflex Therapy by Andrew Salter — A Practitioner’s Review</h1>
            <p><em>Estimated reading time: 7–9 minutes</em></p>
          </header>

          <figure>
            <img
              src="/images/forest.jpg"
              alt="Quiet forest path suggesting new learning and conditioning"
            />
            <figcaption>Conditioning is learning: repeat what helps, extinguish what doesn’t.</figcaption>
          </figure>

          <p>
            Andrew Salter’s Conditioned Reflex Therapy (CRT) is a pre‑CBT behavioral approach that takes
            Pavlov seriously: emotions and habits are conditioned responses, so we can re‑condition them on
            purpose. It’s punchy, practical, and surprisingly modern.
          </p>

          <h2>What CRT is in one sentence</h2>
          <p>
            Systematic re‑conditioning of emotional and behavioral responses using excitation (activation,
            expression) to counter chronic inhibition (avoidance, suppression), plus deliberate practice until
            the new response becomes automatic.
          </p>

          <h2>Core ideas (still useful today)</h2>
          <ul>
            <li><strong>Excitation vs. inhibition:</strong> anxious clients over‑inhibit; CRT trains healthy activation (assertion, expression, approach).</li>
            <li><strong>Counter‑conditioning:</strong> pair feared cues with relaxation, assertion, or approach until the old response weakens.</li>
            <li><strong>Response rehearsal:</strong> vivid imagery + in‑vivo practice to encode the target behavior.</li>
            <li><strong>Shaping intensity:</strong> start easy, increase difficulty; reinforce success.</li>
          </ul>

          <h2>Techniques and modern parallels</h2>
          <ul>
            <li><strong>Relaxation conditioning</strong> → modern diaphragmatic breathing and cue‑controlled relaxation.</li>
            <li><strong>Assertion training</strong> → overlaps with CBT/REBT behavioral experiments and exposure with response prevention.</li>
            <li><strong>Imaginal practice</strong> → mental rehearsal and hypnosis scripts to install new response patterns.</li>
          </ul>

          <h2>What holds up, what doesn’t</h2>
          <ul>
            <li><strong>Holds up:</strong> graded exposure, behavioral rehearsal, skills over rumination, measurable homework.</li>
            <li><strong>Less so:</strong> CRT’s polemical tone and one‑size‑fits‑all enthusiasm. Today we tailor protocols and track outcomes.</li>
          </ul>

          <h2>Who benefits</h2>
          <p>
            High‑functioning clients with avoidance loops: social anxiety, performance blocks, mild panic,
            procrastination. CRT’s action bias is motivating when insight alone hasn’t moved the needle.
          </p>

          <h2>Three practical takeaways you can use this week</h2>
          <ol>
            <li><strong>Create a 5‑step exposure ladder:</strong> pick one avoided situation; design five graded reps for this week.</li>
            <li><strong>Install a cue for relaxation:</strong> 4‑7‑8 breathing while touching thumb–index; practice 2×/day for 7 days.</li>
            <li><strong>Assertive script rehearsal:</strong> write a 2–3 sentence boundary; rehearse imaginally, then deliver the easiest version.</li>
          </ol>

          <blockquote>
            <p>“We become what we practice.”</p>
          </blockquote>

          <h2>Bottom line</h2>
          <p>
            CRT is a crisp behavioral toolkit that anticipated much of CBT. Use its conditioning logic as a
            frame: define the old cue→response→consequence chain, install a better response, and reinforce it
            until automatic.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}


