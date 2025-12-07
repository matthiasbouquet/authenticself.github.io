import React, { useMemo, useState } from "react";

export default function ConsultationForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  // Phone: country code dropdown + local number (default UK +44)
  const baseCountryOptions = [
    // Europe (sovereign states and key microstates)
    { code: "AD", dial: "+376", label: "Andorra", flag: "🇦🇩" },
    { code: "AL", dial: "+355", label: "Albania", flag: "🇦🇱" },
    { code: "AT", dial: "+43", label: "Austria", flag: "🇦🇹" },
    { code: "BY", dial: "+375", label: "Belarus", flag: "🇧🇾" },
    { code: "BE", dial: "+32", label: "Belgium", flag: "🇧🇪" },
    { code: "BA", dial: "+387", label: "Bosnia and Herzegovina", flag: "🇧🇦" },
    { code: "BG", dial: "+359", label: "Bulgaria", flag: "🇧🇬" },
    { code: "HR", dial: "+385", label: "Croatia", flag: "🇭🇷" },
    { code: "CY", dial: "+357", label: "Cyprus", flag: "🇨🇾" },
    { code: "CZ", dial: "+420", label: "Czechia", flag: "🇨🇿" },
    { code: "DK", dial: "+45", label: "Denmark", flag: "🇩🇰" },
    { code: "EE", dial: "+372", label: "Estonia", flag: "🇪🇪" },
    { code: "FI", dial: "+358", label: "Finland", flag: "🇫🇮" },
    { code: "FR", dial: "+33", label: "France", flag: "🇫🇷" },
    { code: "DE", dial: "+49", label: "Germany", flag: "🇩🇪" },
    { code: "GI", dial: "+350", label: "Gibraltar", flag: "🇬🇮" },
    { code: "GR", dial: "+30", label: "Greece", flag: "🇬🇷" },
    { code: "HU", dial: "+36", label: "Hungary", flag: "🇭🇺" },
    { code: "IS", dial: "+354", label: "Iceland", flag: "🇮🇸" },
    { code: "IE", dial: "+353", label: "Ireland", flag: "🇮🇪" },
    { code: "IT", dial: "+39", label: "Italy", flag: "🇮🇹" },
    { code: "LV", dial: "+371", label: "Latvia", flag: "🇱🇻" },
    { code: "LI", dial: "+423", label: "Liechtenstein", flag: "🇱🇮" },
    { code: "LT", dial: "+370", label: "Lithuania", flag: "🇱🇹" },
    { code: "LU", dial: "+352", label: "Luxembourg", flag: "🇱🇺" },
    { code: "MT", dial: "+356", label: "Malta", flag: "🇲🇹" },
    { code: "MD", dial: "+373", label: "Moldova", flag: "🇲🇩" },
    { code: "MC", dial: "+377", label: "Monaco", flag: "🇲🇨" },
    { code: "ME", dial: "+382", label: "Montenegro", flag: "🇲🇪" },
    { code: "NL", dial: "+31", label: "Netherlands", flag: "🇳🇱" },
    { code: "MK", dial: "+389", label: "North Macedonia", flag: "🇲🇰" },
    { code: "NO", dial: "+47", label: "Norway", flag: "🇳🇴" },
    { code: "PL", dial: "+48", label: "Poland", flag: "🇵🇱" },
    { code: "PT", dial: "+351", label: "Portugal", flag: "🇵🇹" },
    { code: "RO", dial: "+40", label: "Romania", flag: "🇷🇴" },
    { code: "RU", dial: "+7", label: "Russia", flag: "🇷🇺" },
    { code: "RS", dial: "+381", label: "Serbia", flag: "🇷🇸" },
    { code: "SK", dial: "+421", label: "Slovakia", flag: "🇸🇰" },
    { code: "SI", dial: "+386", label: "Slovenia", flag: "🇸🇮" },
    { code: "ES", dial: "+34", label: "Spain", flag: "🇪🇸" },
    { code: "SE", dial: "+46", label: "Sweden", flag: "🇸🇪" },
    { code: "CH", dial: "+41", label: "Switzerland", flag: "🇨🇭" },
    { code: "UA", dial: "+380", label: "Ukraine", flag: "🇺🇦" },
    { code: "GB", dial: "+44", label: "United Kingdom", flag: "🇬🇧" },
    { code: "XK", dial: "+383", label: "Kosovo", flag: "🇽🇰" },
    // Non-Europe (previous plus requested)
    { code: "HK", dial: "+852", label: "Hong Kong", flag: "🇭🇰" },
    { code: "AE", dial: "+971", label: "United Arab Emirates", flag: "🇦🇪" },
    { code: "SG", dial: "+65", label: "Singapore", flag: "🇸🇬" },
    { code: "JP", dial: "+81", label: "Japan", flag: "🇯🇵" },
    { code: "KR", dial: "+82", label: "Korea (Republic of Korea)", flag: "🇰🇷" },
    { code: "CN", dial: "+86", label: "China", flag: "🇨🇳" },
    // Keep some common non-Europe choices for convenience
    { code: "US", dial: "+1", label: "United States", flag: "🇺🇸" },
    { code: "CA", dial: "+1", label: "Canada", flag: "🇨🇦" },
    { code: "AU", dial: "+61", label: "Australia", flag: "🇦🇺" },
    { code: "NZ", dial: "+64", label: "New Zealand", flag: "🇳🇿" },
    { code: "IN", dial: "+91", label: "India", flag: "🇮🇳" },
    // Additional requested countries
    { code: "TR", dial: "+90", label: "Turkey", flag: "🇹🇷" },
    { code: "ZA", dial: "+27", label: "South Africa", flag: "🇿🇦" },
    { code: "MX", dial: "+52", label: "Mexico", flag: "🇲🇽" },
    { code: "AR", dial: "+54", label: "Argentina", flag: "🇦🇷" },
    { code: "BR", dial: "+55", label: "Brazil", flag: "🇧🇷" },
    { code: "CO", dial: "+57", label: "Colombia", flag: "🇨🇴" },
    { code: "TH", dial: "+66", label: "Thailand", flag: "🇹🇭" },
    { code: "ID", dial: "+62", label: "Indonesia", flag: "🇮🇩" },
    { code: "MY", dial: "+60", label: "Malaysia", flag: "🇲🇾" },
  ];
  const countryOptions = useMemo(
    () => [...baseCountryOptions].sort((a, b) => a.label.localeCompare(b.label)),
    []
  );
  const [phoneCountryCode, setPhoneCountryCode] = useState("GB");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [livingSituation, setLivingSituation] = useState("");
  const [children, setChildren] = useState("");
  const [occupation, setOccupation] = useState("");
  const [referral, setReferral] = useState("");
  const [fees, setFees] = useState("");

  const [previousTherapy, setPreviousTherapy] = useState("");

  const [presentingIssues, setPresentingIssues] = useState("");
  const [triggers, setTriggers] = useState("");
  const [situationsWorst, setSituationsWorst] = useState("");

  const [whatHappens, setWhatHappens] = useState("");
  const [emotions, setEmotions] = useState("");
  const [behaviour, setBehaviour] = useState("");

  const [impact, setImpact] = useState("");
  const [duration, setDuration] = useState("");

  const [copingHow, setCopingHow] = useState("");
  const [factorsBetter, setFactorsBetter] = useState("");
  const [copingHow2, setCopingHow2] = useState("");
  const [doesThatWork, setDoesThatWork] = useState("");

  const [originCause, setOriginCause] = useState("");
  const [maintainCause, setMaintainCause] = useState("");

  const [agreedGoals, setAgreedGoals] = useState("");
  const [treatmentPlan, setTreatmentPlan] = useState("");
  const [caseNotes, setCaseNotes] = useState("");

  function printAsPdf() {
    window.print();
  }

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 antialiased">
      <main className="container mx-auto px-6 md:px-12 lg:px-24 pt-10 pb-16">
        <article className="max-w-4xl mx-auto">
          <header className="prose prose-indigo">
            <h1 className="!text-4xl md:!text-5xl !font-extrabold tracking-tight">Consultation Form</h1>
            <p className="text-gray-700">Private and Confidential</p>
          </header>

          <div className="print:hidden mt-6">
            <button onClick={printAsPdf} className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">
              Print / Save as PDF
            </button>
          </div>

          <section className="mt-8 grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-600" aria-hidden="true">*</span></label>
                <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth <span className="text-red-600" aria-hidden="true">*</span></label>
                <input required type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" placeholder="Street, City, Postcode, Country" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Relationship Status</label>
                <input value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="Single / Married / Partnered / Other" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Living situation</label>
                <input value={livingSituation} onChange={(e) => setLivingSituation(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="Alone / Parents / Spouse / Other" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number <span className="text-red-600" aria-hidden="true">*</span></label>
              <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  required
                  value={phoneCountryCode}
                  onChange={(e) => setPhoneCountryCode(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 bg-white"
                >
                  {countryOptions.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.dial} ({c.label})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Children</label>
                <input value={children} onChange={(e) => setChildren(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="Number / ages" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <input value={occupation} onChange={(e) => setOccupation(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="Job title / field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Source of Referral</label>
                <input value={referral} onChange={(e) => setReferral(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="GP / friend / website / other" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Agreed Fees</label>
              <input value={fees} onChange={(e) => setFees(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3" placeholder="£ / session details" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Previous Hypnosis/Therapy (type, when, for what, liked/not, learned)</label>
              <textarea value={previousTherapy} onChange={(e) => setPreviousTherapy(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" />
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-2xl font-semibold mb-2">Presenting Issue(s)</h2>
              <label className="block text-sm font-medium text-gray-700">Trigger(s)</label>
              <textarea value={triggers} onChange={(e) => setTriggers(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">In what situations is it most severe or problematic for you?</label>
              <textarea value={situationsWorst} onChange={(e) => setSituationsWorst(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">What happens?</h2>
              <label className="block text-sm font-medium text-gray-700">Emotions</label>
              <textarea value={emotions} onChange={(e) => setEmotions(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">Behaviour</label>
              <textarea value={behaviour} onChange={(e) => setBehaviour(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">What happens (describe)</label>
              <textarea value={whatHappens} onChange={(e) => setWhatHappens(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Impact on Relationship?</h2>
              <textarea value={impact} onChange={(e) => setImpact(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[120px]" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Duration of Problem(s)</h2>
              <label className="block text-sm font-medium text-gray-700">When did it start happening?</label>
              <textarea value={duration} onChange={(e) => setDuration(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Factors & Coping</h2>
              <label className="block text-sm font-medium text-gray-700">How do you try to cope?</label>
              <textarea value={copingHow} onChange={(e) => setCopingHow(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">What makes it better?</label>
              <textarea value={factorsBetter} onChange={(e) => setFactorsBetter(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">How do you try to cope? (additional)</label>
              <textarea value={copingHow2} onChange={(e) => setCopingHow2(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">Does that work?</label>
              <textarea value={doesThatWork} onChange={(e) => setDoesThatWork(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Causes</h2>
              <label className="block text-sm font-medium text-gray-700">What do you think caused the problem to begin with? (Originating cause)</label>
              <textarea value={originCause} onChange={(e) => setOriginCause(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
              <label className="block text-sm font-medium text-gray-700 mt-4">What do you think causes the problem to continue? (Maintaining cause)</label>
              <textarea value={maintainCause} onChange={(e) => setMaintainCause(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[100px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Agreed Goals</h2>
                <textarea value={agreedGoals} onChange={(e) => setAgreedGoals(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Treatment Plan</h2>
                <textarea value={treatmentPlan} onChange={(e) => setTreatmentPlan(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[140px]" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Case History / Notes</h2>
              <textarea value={caseNotes} onChange={(e) => setCaseNotes(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-3 min-h-[160px]" />
            </div>

            <div className="print:hidden flex gap-3 pt-4">
              <button onClick={printAsPdf} className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">
                Print / Save as PDF
              </button>
            </div>
          </section>
          <div className="mt-10 text-center text-gray-700">
            <p className="font-semibold">Matthias Bouquet, PhD</p>
            <p>Authentic Self</p>
          </div>
        </article>
      </main>
    </div>
  );
}


