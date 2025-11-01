import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AssessmentForm() {
  const phqItems = [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    'Trouble concentrating on things, such as reading the newspaper or watching television',
    'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
    'Thoughts that you would be better off dead or of hurting yourself in some way'
  ];

  const gadItems = [
    'Feeling nervous, anxious or on edge',
    'Not being able to stop or control worrying',
    'Worrying too much about different things',
    'Trouble relaxing',
    'Being so restless that it is hard to sit still',
    'Becoming easily annoyed or irritable',
    'Feeling afraid as if something awful might happen'
  ];

  const [phq, setPhq] = useState(Array(9).fill(0));
  const [gad, setGad] = useState(Array(7).fill(0));
  const [iapt, setIapt] = useState(Array(3).fill(0));
  const [meta, setMeta] = useState({ name: '', dob: '' });
  const [health, setHealth] = useState({
    heart: false,
    migraine: false,
    pain: false,
    fears: false,
    psychological: '',
    psychologicalYes: false,
    gpConsulted: '',
    gpConsultedYes: false,
    otherConditions: '',
    otherConditionsYes: false,
    medications: '',
    medicationsYes: false,
    ibs: '',
    ibsYes: false,
    tension: '',
    tensionYes: false,
    cigarettes: '0',
    cigarettesYes: false,
    alcohol: '0',
    alcoholYes: false,
    caffeine: '0',
    caffeineYes: false,
    drugs: '',
    drugsYes: false,
    sleep: '',
    sleepYes: false,
    exercise: ''
    ,
    exerciseYes: false,
    otherInfo: '',
    otherInfoYes: false,
    declarationAccepted: false
  });

  const [open, setOpen] = useState({ health: true, phq: false, gad: false, iapt: false });

  const handleRadio = (group, index, value) => {
    if (group === 'phq') {
      const updated = [...phq];
      updated[index] = value;
      setPhq(updated);
      setOpen(prev => ({ ...prev, phq: true }));
    } else if (group === 'gad') {
      const updated = [...gad];
      updated[index] = value;
      setGad(updated);
      setOpen(prev => ({ ...prev, gad: true }));
    } else if (group === 'iapt') {
      const updated = [...iapt];
      updated[index] = value;
      setIapt(updated);
      setOpen(prev => ({ ...prev, iapt: true }));
    }
  };

  const handleHealthChange = (key, value) => {
    setHealth(prev => ({ ...prev, [key]: value }));
  };

  const scorePHQ = (arr) => {
    const total = arr.reduce((s, n) => s + n, 0);
    if (total <= 4) return { total, severity: 'None' };
    if (total <= 9) return { total, severity: 'Mild' };
    if (total <= 14) return { total, severity: 'Moderate' };
    if (total <= 19) return { total, severity: 'Moderately severe' };
    return { total, severity: 'Severe' };
  };

  const scoreGAD = (arr) => {
    const total = arr.reduce((s, n) => s + n, 0);
    if (total <= 4) return { total, severity: 'None' };
    if (total <= 9) return { total, severity: 'Mild' };
    if (total <= 14) return { total, severity: 'Moderate' };
    return { total, severity: 'Severe' };
  };

  const phqScore = scorePHQ(phq);
  const gadScore = scoreGAD(gad);

  const clampIapt = (value) => {
    const n = Number.parseInt(value, 10);
    if (Number.isNaN(n)) return 0;
    return Math.max(0, Math.min(8, n));
  };

  const setIaptValue = (index, value) => {
    const v = clampIapt(value);
    const updated = [...iapt];
    updated[index] = v;
    setIapt(updated);
  };

  const iaptLabel = (v) => {
    if (v <= 1) return 'would not avoid it';
    if (v <= 3) return 'slightly avoid it';
    if (v <= 5) return 'definitely avoid it';
    if (v <= 7) return 'markedly avoid it';
    return 'always avoid it';
  };

  const downloadPDF = () => {
    if (!health.declarationAccepted) {
      alert('Please confirm the Declaration before continuing.');
      return;
    }
    const prevTitle = document.title;
    const inputEl = document.getElementById('client-name');
    const enteredName = (inputEl && inputEl.value) || meta.name || 'Client';
    const safeName = enteredName.replace(/[\\/:*?"<>|]+/g, ' ').trim() || 'Client';
    const desired = `${safeName} Assessment`;
    document.title = desired;
    const restore = () => {
      document.title = prevTitle;
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    window.print();
  };

  const ToggleSection = ({ id, title, children }) => (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen({ ...open, [id]: !open[id] })}
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 text-left font-semibold transition-colors hover:bg-gray-200"
      >
        {title}
        <span>{open[id] ? '–' : '+'}</span>
      </button>
      {open[id] && (
        <div className="p-4 border-t bg-white">
          {children}
        </div>
      )}
    </div>
  );

  useEffect(() => {
    if (meta.name || meta.dob) {
      setOpen(prev => ({ ...prev, health: true }));
    }
  }, [meta]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-semibold mb-2">Comprehensive Health & Psychological Assessment</h1>
      <p className="text-sm font-semibold text-gray-700 mb-4">Private and Confidential</p>
      <p className="text-gray-500 mb-6 text-sm">Complete the following sections. Scores and information are stored securely and may aid assessment.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input id="client-name" name="client-name" type="text" defaultValue={meta.name} onBlur={e=>setMeta({...meta,name:e.target.value})} className="w-full border rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Date of birth</label>
          <input
            type="date"
            value={meta.dob}
            min={(() => { const d=new Date(); d.setFullYear(d.getFullYear()-90); return d.toISOString().slice(0,10); })()}
            max={(() => { const d=new Date(); d.setFullYear(d.getFullYear()-10); return d.toISOString().slice(0,10); })()}
            onChange={e=>setMeta({...meta,dob:e.target.value})}
            className="w-full border rounded-md p-2"
          />
          <p className="text-xs text-gray-600 mt-1">
            Age: {(() => {
              if (!meta.dob) return '—';
              const dob = new Date(meta.dob);
              const now = new Date();
              let age = now.getFullYear() - dob.getFullYear();
              const m = now.getMonth() - dob.getMonth();
              if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
              return age >= 0 && age <= 120 ? age : '—';
            })()} years
          </p>
        </div>
      </div>

      {/* General Questionnaire Section */}
      <ToggleSection id="health" title="General Questionnaire">
        <p className="text-sm text-gray-600 mb-2">Are you currently experiencing any of the following conditions?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {[{key:'heart',label:'Heart problems?'},{key:'migraine',label:'Migraine or epilepsy?'},{key:'pain',label:'Physical pain or injury?'},{key:'fears',label:'Any specific fears or phobias?'}].map(({key,label})=> (
            <label key={key} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={health[key]} onChange={e=>handleHealthChange(key,e.target.checked)}/> {label}
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">Please answer the following questions, adding further details where appropriate.</p>
        {[{key:'psychological',label:'Have you ever been diagnosed as suffering from any psychological or psychiatric condition?'},{key:'gpConsulted',label:'If appropriate, have you consulted your GP about the condition(s) for which you are seeking therapy?'},{key:'otherConditions',label:'Do you have other health condition(s) which you think may be relevant?'},{key:'medications',label:'Are you currently using any prescription medications?'},{key:'ibs',label:'Do you suffer from IBS or any other gastro-intestinal issues?'},{key:'tension',label:'Do you suffer or have difficulty with tension in any particular part of the body?'},{key:'cigarettes',label:'Number of cigarettes smoked per day:'},{key:'alcohol',label:'Alcohol consumption per week (units):'},{key:'caffeine',label:'Cups of coffee per day:'},{key:'drugs',label:'Do you, or have you ever, used any illegal drugs?'},{key:'sleep',label:'Briefly describe your sleep:'},{key:'exercise',label:'Briefly describe your level of exercise per week:'}].map(({key,label})=> (
          <div key={key} className="mb-3">
            {['cigarettes','alcohol','caffeine'].includes(key) ? (
              <>
                <label className="block text-sm font-medium mb-1">{label}</label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={health[key] === '' ? '0' : health[key]}
                  onChange={e=>handleHealthChange(key,e.target.value)}
                  className="w-full border rounded-md p-2 text-sm"
                />
              </>
            ) : ['sleep','exercise'].includes(key) ? (
              <>
                <label className="block text-sm font-medium mb-1">{label}</label>
                <textarea defaultValue={health[key]} onBlur={e=>handleHealthChange(key,e.target.value)} maxLength={100} className="w-full border rounded-md p-2 text-sm" rows={2}></textarea>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-2">
                  <label className="block text-sm font-medium">{label}</label>
                  <div className="flex items-center gap-3 text-sm">
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name={`yn-${key}`} checked={!health[`${key}Yes`]} onChange={()=>handleHealthChange(`${key}Yes`, false)} /> No
                    </label>
                    <label className="inline-flex items-center gap-1">
                      <input type="radio" name={`yn-${key}`} checked={!!health[`${key}Yes`]} onChange={()=>handleHealthChange(`${key}Yes`, true)} /> Yes
                    </label>
                  </div>
                </div>
                {health[`${key}Yes`] && (
                  <textarea defaultValue={health[key]} onBlur={e=>handleHealthChange(key,e.target.value)} maxLength={100} className="w-full border rounded-md p-2 text-sm" rows={2}></textarea>
                )}
              </>
            )}
          </div>
        ))}
        
      </ToggleSection>

      {/* PHQ-9 Section */}
      <ToggleSection id="phq" title="Personal Health Questionnaire-9 (PHQ-9)">
        <p className="text-sm text-gray-600 mb-2">Over the last 2 weeks, how often have you been bothered by any
        of the following problems?.</p>
        <div className="mb-2 text-xs text-gray-600">
          <p className="font-medium">Scale:</p>
          <p>0: Not at all · 1: Several days · 2: More than half the days · 3: Nearly every day</p>
        </div>
        {phqItems.map((q, i) => (
          <div key={i} className="flex justify-between items-center border-b border-gray-100 py-2 text-sm">
            <span>{i + 1}. {q}</span>
            <div className="flex gap-2">
              {[0,1,2,3].map(v => (
                <label key={v} className="flex items-center gap-1">
                  <input type="radio" checked={phq[i]===v} onChange={()=>handleRadio('phq', i, v)} /> {v}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-2 p-3 bg-gray-50 rounded text-sm">PHQ-9 total: <strong>{phqScore.total}</strong> — {phqScore.severity}</div>
        <div className="mt-3 text-sm">
          <p className="font-semibold">Declaration</p>
          <p>The information given above and throughout this consultation is, to the best of my knowledge, full and correct.</p>
        </div>
      </ToggleSection>

      {/* GAD-7 Section */}
      <ToggleSection id="gad" title="Generalized Anxiety Disorder-7 (GAD-7)">
        <p className="text-sm text-gray-600 mb-2">Over the last 2 weeks, how often have you been bothered by any
        of the following problems?.</p>
        <div className="mb-2 text-xs text-gray-600">
          <p className="font-medium">Scale:</p>
          <p>0: Not at all · 1: Several days · 2: More than half the days · 3: Nearly every day</p>
        </div>
        {gadItems.map((q, i) => (
          <div key={i} className="flex justify-between items-center border-b border-gray-100 py-2 text-sm">
            <span>{i + 1}. {q}</span>
            <div className="flex gap-2">
              {[0,1,2,3].map(v => (
                <label key={v} className="flex items-center gap-1">
                  <input type="radio" checked={gad[i]===v} onChange={()=>handleRadio('gad', i, v)} /> {v}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-2 p-3 bg-gray-50 rounded text-sm">GAD-7 total: <strong>{gadScore.total}</strong> — {gadScore.severity}</div>
      </ToggleSection>

      {/* IAPT Section */}
      <ToggleSection id="iapt" title="IAPT Phobia Scales">
        <p className="text-sm text-gray-600 mb-2">How much would you avoid the following situations?</p>
        <div className="mb-2 text-xs text-gray-600">
          <p className="font-medium">Scale:</p>
          <p>0: would not avoid it · 8: would absolutely avoid it</p>
        </div>
        {[ 'A17 — Social situations due to fear of embarrassment', 'A18 — Fear of panic attack or distressing symptoms', 'A19 — Fear of particular objects or activities' ].map((q, i) => (
          <div key={i} className="border-b border-gray-100 py-3 text-sm">
            <div className="mb-2"><span>{q}</span></div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="grid grid-cols-9 gap-1 md:gap-2">
                {Array.from({ length: 9 }, (_, v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={()=>setIaptValue(i, v)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-md border text-sm font-medium flex items-center justify-center ${iapt[i]===v ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'}`}
                    aria-pressed={iapt[i]===v}
                    aria-label={`Select ${v}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="mt-2 md:mt-0 text-xs text-gray-700">— {iaptLabel(iapt[i])}</div>
            </div>
          </div>
        ))}
      </ToggleSection>

      <div className="mt-4 mb-4 p-3 bg-gray-50 rounded border border-gray-200">
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={health.declarationAccepted}
            onChange={(e)=>handleHealthChange('declarationAccepted', e.target.checked)}
            className="mt-0.5"
          />
          <span>
            <span className="font-semibold">Declaration</span><br />
            The information given above and throughout this consultation is, to the best of my knowledge, full and correct.
          </span>
        </label>
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={downloadPDF} className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm">Download PDF</button>
      </div>

      <p className="text-xs text-gray-400 mt-4">Note: This form is for screening only. Seek professional assessment if symptoms are moderate or severe.</p>
    </div>
  );
}


