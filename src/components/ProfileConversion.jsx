import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from 'lucide-react';

import { domicileOptions as INDIAN_STATES, predictorNote } from '../data/admissions';
import { track } from '../data/config';
import LeadCapture from './LeadCapture';

const CATEGORIES = ['General', 'OBC', 'SC', 'ST', 'EWS', 'NRI'];

const BUDGET_OPTIONS = ['Under ₹20L', '₹20L-₹50L', '₹50L-₹80L', 'Above ₹80L'];

const PATHWAY_OPTIONS = ['Government', 'Private', 'Deemed', 'NRI', 'Abroad', 'Not Sure'];

const ProfileConversion = ({ initialProfile }) => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState('');
  const [domicile, setDomicile] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [pathway, setPathway] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!initialProfile) return;
    setScore(initialProfile.score || '');
    setDomicile(initialProfile.domicile === 'Delhi' ? 'Delhi (NCT)' : initialProfile.domicile);
    setStep(initialProfile.score ? 3 : 1);
    setSubmitted(false);
  }, [initialProfile]);

  useEffect(() => { if (step > 1) track('profile_step_complete', { step: step - 1 }); }, [step]);

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setTimeout(() => {
      setStep(4);
    }, 220);
  };

  const handleBudgetSelect = (b) => {
    setBudget(b);
    setTimeout(() => {
      setStep(5);
    }, 220);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    track('profile_complete');
    track('pathway_result_view');
    setSubmitted(true);
  };

  useEffect(() => {
    const onStateLink = () => {
      if (!window.location.hash.startsWith('#counselling?')) return;
      const value = new URLSearchParams(window.location.hash.split('?')[1]).get('state');
      if (INDIAN_STATES.includes(value)) { setDomicile(value); setSubmitted(false); setStep(1); document.getElementById('counselling')?.scrollIntoView(); }
    };
    onStateLink(); window.addEventListener('hashchange', onStateLink);
    return () => window.removeEventListener('hashchange', onStateLink);
  }, []);

  const handleReset = () => {
    setStep(1);
    setScore('');
    setDomicile('');
    setCategory('');
    setBudget('');
    setPathway('');
    setSubmitted(false);
  };

  return (
    <section id="counselling" className="py-20 md:py-28 bg-slate-50 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Left side (lg:w-1/2): Text content */}
          <div className="w-full lg:w-1/2">
            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
              JNEX ADMISSION ANALYSIS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-primary mb-6 text-balance">
              Don't guess your admission chances.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Build your profile and identify the MBBS admission routes across India that are actually worth exploring.
            </p>

            {/* Credibility metrics using typography and numbers */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-primary">5 steps</div>
                <div className="text-xs text-gray-500 font-medium mt-1">A clear starting point</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-primary">Your pace</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Review and edit details</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-primary">One profile</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Ready for a discussion</div>
              </div>
            </div>
          </div>

          {/* Right side (lg:w-1/2): Interactive step form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              
              {!submitted ? (
                <>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-sm font-semibold text-gray-500 mb-3">
                      <span>Step {step} of 5</span>
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-accent transition-colors font-medium cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Back
                        </button>
                      )}
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-accent h-full transition-all duration-300 ease-out"
                        style={{ width: `${(step / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Step 1: NEET Score or AIR */}
                  {step === 1 && (
                    <div className="transition-opacity duration-200">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        What is your NEET score or AIR?
                      </h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Provide your estimated or actual NEET UG score or All India Rank.
                      </p>
                      <div className="space-y-4 mb-6">
                        <input
                          aria-label="NEET score or All India Rank"
                          maxLength={24}
                          type="text"
                          value={score}
                          onChange={(e) => setScore(e.target.value)}
                          placeholder="e.g. 545 or AIR 42,100"
                          className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (/^(?:AIR\s*)?[0-9][0-9, ]*$/i.test(score.trim())) setStep(2);
                        }}
                        disabled={!/^(?:AIR\s*)?[0-9][0-9, ]*$/i.test(score.trim())}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Domicile State */}
                  {step === 2 && (
                    <div className="transition-opacity duration-200">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Select your domicile state
                      </h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Domicile, category and the current authority rules affect your available counselling routes.
                      </p>
                      <div className="mb-6">
                        <select aria-label="Domicile state"
                          value={domicile}
                          onChange={(e) => setDomicile(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all cursor-pointer"
                        >
                          <option value="" disabled>
                            -- Choose your state --
                          </option>
                          {INDIAN_STATES.map((stateName) => (
                            <option key={stateName} value={stateName}>
                              {stateName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (domicile) setStep(3);
                        }}
                        disabled={!domicile}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Step 3: Category */}
                  {step === 3 && (
                    <div className="transition-opacity duration-200">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        What is your category?
                      </h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Seat matrix and cutoff benchmarks differ significantly by category.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {CATEGORIES.map((cat) => {
                          const isSelected = category === cat;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => handleCategorySelect(cat)}
                              className={`py-3.5 px-4 rounded-xl border font-semibold text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-accent bg-blue-50 text-accent ring-2 ring-accent/20'
                                  : 'border-gray-200 text-gray-700 hover:border-accent hover:text-accent hover:bg-slate-50'
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (category) setStep(4);
                        }}
                        disabled={!category}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Step 4: Budget */}
                  {step === 4 && (
                    <div className="transition-opacity duration-200">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        What is your approximate MBBS budget?
                      </h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Helps filter realistic government, private, or deemed options.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {BUDGET_OPTIONS.map((opt) => {
                          const isSelected = budget === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleBudgetSelect(opt)}
                              className={`py-3.5 px-4 rounded-xl border font-semibold text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-accent bg-blue-50 text-accent ring-2 ring-accent/20'
                                  : 'border-gray-200 text-gray-700 hover:border-accent hover:text-accent hover:bg-slate-50'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (budget) setStep(5);
                        }}
                        disabled={!budget}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Step 5: Pathway */}
                  {step === 5 && (
                    <div className="transition-opacity duration-200">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Which pathway are you considering?
                      </h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Select the path you want Jnex to evaluate for you.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                        {PATHWAY_OPTIONS.map((path) => {
                          const isSelected = pathway === path;
                          return (
                            <button
                              key={path}
                              type="button"
                              onClick={() => setPathway(path)}
                              className={`py-3.5 px-4 rounded-xl border font-semibold text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-accent bg-blue-50 text-accent ring-2 ring-accent/20'
                                  : 'border-gray-200 text-gray-700 hover:border-accent hover:text-accent hover:bg-slate-50'
                              }`}
                            >
                              {path}
                            </button>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!pathway}
                        className="w-full bg-accent hover:bg-accent-light text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md hover:shadow-lg"
                      >
                        Show My Options <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* Profile Result / Summary View */
                <div className="transition-opacity duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" /> Profile Summary Ready
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Your JNEX Profile
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Review these pathways alongside your selected preference. Eligibility and a college shortlist require current official data and a profile review.
                  </p>

                  <div className="bg-slate-50 border border-gray-100 rounded-xl p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between py-1 border-b border-gray-200/60">
                      <span className="text-gray-500">NEET Score / AIR:</span>
                      <span className="font-semibold text-primary">{score || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200/60">
                      <span className="text-gray-500">Domicile:</span>
                      <span className="font-semibold text-primary">{domicile || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200/60">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-semibold text-primary">{category || 'General'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200/60">
                      <span className="text-gray-500">Target Budget:</span>
                      <span className="font-semibold text-primary">{budget || 'Flexible'}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-500">Preferred Route:</span>
                      <span className="font-semibold text-accent">{pathway || 'Government & Private'}</span>
                    </div>
                  </div>

                  <div className="pathway-results">
                    <h3 className="text-lg font-bold mb-4">3 admission pathways may be worth evaluating.</h3>
                    {[
                      ['Home-State MBBS Pathways', `Compare options under ${domicile} counselling rules.`],
                      ['Selected Open-State / Eligible Pathways', 'Review options outside your domicile where current rules permit.'],
                      [pathway === 'Abroad' ? 'MBBS Abroad' : 'Deemed / All-India Options', pathway === 'Abroad' ? 'Compare complete costs, eligibility and licensing considerations separately from India counselling.' : 'Compare fees, previous trends and total budget fit.'],
                    ].map(([title, description], i) => <div className="pathway-result" key={title}><span>0{i + 1}</span><div><h4>{title}</h4><p>{description}</p></div></div>)}
                    <p className="text-xs text-slate-500 my-5">{predictorNote}</p>
                    <LeadCapture profile={{ score, domicile, category, budget, preference: pathway }} />
                  </div>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => { window.location.href = '/medical-colleges/'; }}
                      className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      Explore Medical Colleges <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-3 px-6 text-sm font-semibold text-gray-600 hover:text-primary transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" /> Edit Profile Details
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileConversion;
