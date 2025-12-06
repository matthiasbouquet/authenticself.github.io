import React, { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function OldVsNew() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [presentingIssue, setPresentingIssue] = useState("");

  // BASIC-ID inspired sections: Behavior, Affect, Sensation, Imagery, Cognition
  const [oldBehavior, setOldBehavior] = useState("");
  const [newBehavior, setNewBehavior] = useState("");
  const [oldAffect, setOldAffect] = useState("");
  const [newAffect, setNewAffect] = useState("");
  const [oldSensation, setOldSensation] = useState("");
  const [newSensation, setNewSensation] = useState("");
  const [oldImagery, setOldImagery] = useState("");
  const [newImagery, setNewImagery] = useState("");
  const [oldCognition, setOldCognition] = useState("");
  const [newCognition, setNewCognition] = useState("");

  const [triggers, setTriggers] = useState("");
  const [desiredOutcomes, setDesiredOutcomes] = useState("");
  const [actions, setActions] = useState("");
  const [notes, setNotes] = useState("");

  const bodyText = useMemo(() => {
    const lines = [
      "Old vs New Assessment",
      "----------------------------------------",
      name ? `Name: ${name}` : undefined,
      email ? `Email: ${email}` : undefined,
      `Date: ${new Date().toISOString().slice(0, 10)}`,
      "",
      presentingIssue ? `Presenting Issue:\n${presentingIssue}` : undefined,
      "",
      "Behavior",
      oldBehavior ? `Old:\n${oldBehavior}` : "Old:\n",
      newBehavior ? `New:\n${newBehavior}` : "New:\n",
      "",
      "Affect (Emotions)",
      oldAffect ? `Old:\n${oldAffect}` : "Old:\n",
      newAffect ? `New:\n${newAffect}` : "New:\n",
      "",
      "Sensation (Body)",
      oldSensation ? `Old:\n${oldSensation}` : "Old:\n",
      newSensation ? `New:\n${newSensation}` : "New:\n",
      "",
      "Imagery (Mental Pictures)",
      oldImagery ? `Old:\n${oldImagery}` : "Old:\n",
      newImagery ? `New:\n${newImagery}` : "New:\n",
      "",
      "Cognition (Thoughts/Beliefs)",
      oldCognition ? `Old:\n${oldCognition}` : "Old:\n",
      newCognition ? `New:\n${newCognition}` : "New:\n",
      "",
      triggers ? `Triggers/Contexts:\n${triggers}` : "Triggers/Contexts:\n",
      "",
      desiredOutcomes ? `Desired Outcomes:\n${desiredOutcomes}` : "Desired Outcomes:\n",
      "",
      actions ? `First Actions/Experiments:\n${actions}` : "First Actions/Experiments:\n",
      "",
      notes ? `Notes:\n${notes}` : "Notes:\n",
    ].filter(Boolean);
    return lines.join("\n");
  }, [
    name,
    email,
    presentingIssue,
    oldBehavior,
    newBehavior,
    oldAffect,
    newAffect,
    oldSensation,
    newSensation,
    oldImagery,
    newImagery,
    oldCognition,
    newCognition,
    triggers,
    desiredOutcomes,
    actions,
    notes,
  ]);

  function openMailClient() {
    const subject = encodeURIComponent("Old vs New Assessment");
    const body = encodeURIComponent(bodyText);
    const to = "matthias.bouquet@gmail.com";
    // Try to open mail client
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(bodyText);
      alert("Form contents copied to clipboard. If your email client truncated text, paste it manually.");
    } catch (e) {
      alert("Could not copy to clipboard. You can manually select and copy the preview at the bottom.");
    }
  }

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 antialiased">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16">
        <article className="max-w-4xl mx-auto">
          <header className="prose prose-indigo">
            <h1 className="!text-4xl md:!text-5xl !font-extrabold tracking-tight">Old vs New Cognitive Behavioural Patterns</h1>
            <p className="text-gray-700">Use this form as a template to explore old (unhelpful) and new (desired) cognitive behavioural patterns.</p>
          </header>

          <section className="mt-8 grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Presenting Issue</label>
              <textarea value={presentingIssue} onChange={(e) => setPresentingIssue(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" placeholder="Briefly describe the problem you want to address" />
            </div>

            <div className="rounded-2xl border border-indigo-100 p-4 md:p-6 bg-white shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">1. Behavior</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Old</label>
                  <textarea value={oldBehavior} onChange={(e) => setOldBehavior(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[160px]" placeholder="What you did/avoided before (habits, patterns)" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New</label>
                  <textarea value={newBehavior} onChange={(e) => setNewBehavior(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[160px]" placeholder="What you'll do now (approach, actions, experiments)" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 p-4 md:p-6 bg-white shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">2. Affect (Emotions)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Old</label>
                  <textarea value={oldAffect} onChange={(e) => setOldAffect(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" placeholder="Anxiety, shame, anger... intensity/frequency" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New</label>
                  <textarea value={newAffect} onChange={(e) => setNewAffect(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" placeholder="Target emotional profile (calm, confident, curious...)" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 p-4 md:p-6 bg-white shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">3. Sensation (Body)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Old</label>
                  <textarea value={oldSensation} onChange={(e) => setOldSensation(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" placeholder="Tension, heart rate, breath, stomach, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New</label>
                  <textarea value={newSensation} onChange={(e) => setNewSensation(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" placeholder="Calm breath, loosened muscles, grounded posture..." />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 p-4 md:p-6 bg-white shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">4. Inter-personal (Relationships)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Old</label>
                  <textarea value={oldImagery} onChange={(e) => setOldImagery(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" placeholder="Catastrophes, worst-case, self-judgment, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New</label>
                  <textarea value={newImagery} onChange={(e) => setNewImagery(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" placeholder="Success scenes, coping images, compassionate perspectives" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 p-4 md:p-6 bg-white shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">5. Cognition (Thoughts/Beliefs)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Old</label>
                  <textarea value={oldCognition} onChange={(e) => setOldCognition(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[160px]" placeholder="Negative predictions, rules, self-talk, cognitive distortions" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New</label>
                  <textarea value={newCognition} onChange={(e) => setNewCognition(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[160px]" placeholder="Accurate beliefs, coping statements, flexible rules" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Triggers / Contexts</label>
                <textarea value={triggers} onChange={(e) => setTriggers(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" placeholder="Situations, cues, people, places" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Desired Outcomes</label>
                <textarea value={desiredOutcomes} onChange={(e) => setDesiredOutcomes(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" placeholder="What success looks like in daily life" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">First Actions / Experiments</label>
              <textarea value={actions} onChange={(e) => setActions(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" placeholder="Small, testable steps you’ll take" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" placeholder="Anything else important to include" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={openMailClient} className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">
                Send by Email
              </button>
              <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(bodyText)}`} download="old-vs-new-assessment.txt" className="inline-flex items-center rounded-lg bg-white border px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50">
                Download .txt
              </a>
            </div>

          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}


