import React, { useState } from 'react';
import { 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Sun, 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  Building, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Award, 
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KNOWLEDGE_MODULES } from '../data/mockData';
import { KnowledgeModule } from '../types';
import { soundManager } from '../utils/audio';

interface KnowledgeVaultProps {
  onOpenCertificate: (studentName: string) => void;
}

const QUIZ_QUESTIONS = [
  {
    question: 'How do you calculate total high-ticket commercial photography licensing invoices?',
    options: [
      'Hourly rate × Total shoot hours',
      'Base Creative Fee + Production Expenses + [Base Rate × Media Factor × Territory × Duration]',
      'Flat $500 per photo regardless of billboard or TV broadcast use',
      'Free shoot in exchange for Instagram tag exposure'
    ],
    correctIndex: 1,
    explanation: 'Commercial clients pay for the economic scale of their campaign. Licensing is calculated via media, territory, and duration multipliers.'
  },
  {
    question: 'According to the Inverse Square Law in lighting physics, if you double the modifier distance from 1 meter to 2 meters:',
    options: [
      'Light intensity drops by 50% (1 stop)',
      'Light intensity drops to 25% (2 stops lost)',
      'Light intensity doubles due to focus reflection',
      'Light intensity remains exactly the same'
    ],
    correctIndex: 1,
    explanation: 'Intensity = 1/(Distance)². At 2x distance, intensity is 1/4th (25%), creating harsher contrast and losing 2 full stops.'
  },
  {
    question: 'What is the core secret to the Ghop 18-Hour Royal Bridal Makeup longevity?',
    options: [
      'Applying 5 thick coats of standard liquid foundation at once',
      'Baking the whole face with high-silica powder under flash strobes',
      '3 ultra-thin micro-veils set with film-forming fixing polymers between each layer',
      'Using only natural baby powder and coconut oil'
    ],
    correctIndex: 2,
    explanation: 'Micro-layering thin veils with film-forming setting polymers ensures 18-hour tear/sweat resistance without cakey texture.'
  },
  {
    question: 'Why should luxury creative contracts always use the term "Non-Refundable Retainer" rather than "Deposit"?',
    options: [
      'Because deposits are legally refundable in many jurisdictions if a date is cancelled',
      'It makes no legal difference in contract courts',
      'It allows clients to pay in cryptocurrency',
      'To bypass tax registration'
    ],
    correctIndex: 0,
    explanation: 'A retainer legally compensates the studio for reserving the calendar date and turning down other prospective high-ticket clients.'
  },
  {
    question: 'What is the proven client response time benchmark that increases high-ticket booking conversions by over 300%?',
    options: [
      '3 to 5 business days',
      'Within 15 minutes with personalized greeting',
      'Only once a month in bulk emails',
      '24 hours with an automated generic quote'
    ],
    correctIndex: 1,
    explanation: 'Affluent clients research multiple luxury vendors; a high-touch 15-minute response captures immediate emotional momentum.'
  }
];

export const KnowledgeVault: React.FC<KnowledgeVaultProps> = ({ onOpenCertificate }) => {
  const [selectedModule, setSelectedModule] = useState<KnowledgeModule>(KNOWLEDGE_MODULES[0]);
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [studentName, setStudentName] = useState('');

  const getModuleIcon = (name: string) => {
    switch (name) {
      case 'DollarSign': return <DollarSign className="w-4 h-4 text-[#d4af37]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#d4af37]" />;
      case 'Sun': return <Sun className="w-4 h-4 text-[#d4af37]" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#d4af37]" />;
      case 'Crown': return <Crown className="w-4 h-4 text-[#d4af37]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#d4af37]" />;
      case 'Building': return <Building className="w-4 h-4 text-[#d4af37]" />;
      default: return <BookOpen className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    soundManager.playChime();
    setTimeout(() => setCopiedFormula(null), 2500);
  };

  const handleAnswerSubmit = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === QUIZ_QUESTIONS[currentQuestion].correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
      soundManager.playChime(true);
    } else {
      soundManager.playChime(false);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
        if (score + (isCorrect ? 1 : 0) >= 4) {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#d4af37', '#f3e5ab', '#ffffff']
          });
        }
      }
    }, 1200);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    soundManager.playChime();
  };

  const filteredModules = KNOWLEDGE_MODULES.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="knowledge-vault" className="py-24 relative bg-[#08090c] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121319] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab] tracking-widest uppercase">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span>The $1,000,000 Studio Playbook</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            GHOP <span className="text-gold-gradient">MASTER ACADEMY</span> & VAULT
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            All essential factors, legal scripts, lighting formulas, and high-ticket business systems needed to operate a world-class visual empire.
          </p>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics: pricing formula, lighting laws, skin prep, contracts, ads..."
            className="w-full bg-[#121319] border border-[#d4af37]/30 rounded-full pl-11 pr-4 py-3 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-all"
          />
        </div>

        {/* Modules Navigation & Detail View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Module List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-bold pb-2 flex items-center justify-between">
              <span>Curriculum Modules (7)</span>
              <span>100% Comprehensive</span>
            </div>

            <div className="space-y-2 max-h-[620px] overflow-y-auto pr-2">
              {filteredModules.map((mod) => (
                <div
                  key={mod.id}
                  onClick={() => {
                    setSelectedModule(mod);
                    setExpandedSection(0);
                    soundManager.playChime();
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border flex items-start gap-3.5 ${
                    selectedModule.id === mod.id
                      ? 'bg-[#161720] border-[#d4af37] ring-1 ring-[#d4af37]/50 shadow-xl shadow-[#d4af37]/10'
                      : 'bg-[#101117] border-neutral-800/80 hover:border-[#d4af37]/40'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#08090c] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    {getModuleIcon(mod.iconName)}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#d4af37] uppercase font-bold">
                        Module {mod.number} • {mod.readTime}
                      </span>
                    </div>
                    <h4 className="font-cinzel text-sm font-bold text-white line-clamp-1">
                      {mod.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 line-clamp-2">
                      {mod.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiz Jump Card */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#1c1810] to-[#121319] border border-[#d4af37]/30">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-4 h-4 text-[#d4af37]" />
                <h4 className="text-xs font-bold text-white font-cinzel">Earn Certified Luxury Producer Credential</h4>
              </div>
              <p className="text-[11px] text-neutral-300 mb-3">
                Complete our 5-question studio business quiz below to generate your personalized Ghop Academy Certificate.
              </p>
              <a
                href="#academy-quiz"
                onClick={() => soundManager.playChime()}
                className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#f3e5ab] font-bold uppercase tracking-wider"
              >
                <span>Jump to Quiz</span>
                <span>↓</span>
              </a>
            </div>

          </div>

          {/* Right: Selected Module Content Reader */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-6">
            
            {/* Module Header */}
            <div className="space-y-2 pb-5 border-b border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  Module {selectedModule.number}
                </span>
                <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                  {selectedModule.readTime}
                </span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                {selectedModule.title}
              </h3>
              <p className="font-cormorant text-base sm:text-lg text-[#f3e5ab] italic">
                {selectedModule.subtitle}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-4 rounded-xl bg-[#08090c] border border-[#d4af37]/20 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                Executive Takeaways:
              </span>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {selectedModule.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Content Sections Accordion */}
            <div className="space-y-3">
              {selectedModule.contentSections.map((section, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0e0f15] border border-neutral-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => {
                      setExpandedSection(expandedSection === idx ? null : idx);
                      soundManager.playChime();
                    }}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-[#161720] transition-colors cursor-pointer"
                  >
                    <span className="font-cinzel text-sm font-bold text-white">
                      {section.heading}
                    </span>
                    {expandedSection === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#d4af37]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500" />
                    )}
                  </button>

                  {expandedSection === idx && (
                    <div className="p-4 pt-0 border-t border-neutral-800/60 space-y-4 text-xs text-neutral-300">
                      <p className="leading-relaxed whitespace-pre-line">
                        {section.body}
                      </p>

                      {section.bulletPoints && (
                        <div className="space-y-1.5 pl-2 border-l-2 border-[#d4af37]">
                          {section.bulletPoints.map((pt, pIdx) => (
                            <p key={pIdx} className="text-neutral-200">
                              {pt}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.proTip && (
                        <div className="p-3 rounded-lg bg-[#1a1710] border border-[#d4af37]/30 text-neutral-200">
                          <span className="text-[10px] font-mono text-[#d4af37] font-bold uppercase block mb-1">
                            ★ Master Pro-Tip:
                          </span>
                          <span>{section.proTip}</span>
                        </div>
                      )}

                      {section.formulaOrTemplate && (
                        <div className="p-3 rounded-lg bg-black border border-neutral-800 relative group font-mono text-[11px] text-[#f3e5ab]">
                          <div className="flex items-center justify-between pb-2 border-b border-neutral-800 mb-2">
                            <span className="text-[9px] uppercase tracking-wider text-neutral-400">
                              Official Formula & Pitch Template
                            </span>
                            <button
                              onClick={() => handleCopy(section.formulaOrTemplate!)}
                              className="text-xs text-[#d4af37] hover:text-white flex items-center gap-1 cursor-pointer"
                            >
                              {copiedFormula === section.formulaOrTemplate ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copy Script</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="whitespace-pre-wrap leading-relaxed text-neutral-300">
                            {section.formulaOrTemplate}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Interactive Luxury Certification Quiz Component */}
        <div id="academy-quiz" className="mt-20 glass-panel p-8 rounded-2xl border border-[#d4af37]/40 max-w-3xl mx-auto shadow-2xl">
          
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] uppercase">
              <Crown className="w-3.5 h-3.5" />
              <span>Ghop Studio Mastery Exam</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              LUXURY CERTIFICATION CHALLENGE
            </h3>
            <p className="text-xs text-neutral-400">
              Test your understanding of high-ticket pricing, lighting physics, skin longevity, and contracts.
            </p>
          </div>

          {!quizFinished ? (
            <div className="space-y-6">
              
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2">
                <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                <span>Score: {score} Correct</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white pt-2">
                {QUIZ_QUESTIONS[currentQuestion].question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentQuestion].options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === QUIZ_QUESTIONS[currentQuestion].correctIndex;
                  let btnStyle = 'border-neutral-800 bg-[#0e0f15] text-neutral-300 hover:border-[#d4af37]/50';

                  if (selectedAnswer !== null) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'border-rose-500 bg-rose-950/40 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleAnswerSubmit(idx)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          ) : (
            /* Quiz Completed Results */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa820a] p-[2px] mx-auto shadow-xl shadow-[#d4af37]/20">
                <div className="w-full h-full rounded-full bg-[#08090c] flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-cinzel text-2xl font-bold text-white">
                  {score >= 4 ? 'Exam Passed with Distinction!' : 'Exam Completed'}
                </h4>
                <p className="text-sm text-[#f3e5ab] font-mono">
                  Final Score: {score} / {QUIZ_QUESTIONS.length} ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}%)
                </p>
              </div>

              {score >= 4 ? (
                <div className="space-y-4 max-w-md mx-auto">
                  <p className="text-xs text-neutral-300">
                    Congratulations! Enter your full name to generate your verified <strong>Ghop Certified Luxury Producer</strong> Credential.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter Full Name (e.g. Alexandra Vance)"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="flex-1 bg-[#121319] border border-[#d4af37]/40 rounded-lg px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    <button
                      onClick={() => {
                        const nameToUse = studentName.trim() || 'Master Visual Producer';
                        soundManager.playChime(true);
                        onOpenCertificate(nameToUse);
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#f3e5ab] transition-all cursor-pointer"
                    >
                      Generate Certificate
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-neutral-400">
                    A score of 4/5 or higher is required for the official credential. Review the modules above and try again!
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-2.5 rounded-full bg-[#1a1c25] border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase font-bold tracking-wider hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer"
                  >
                    Retake Examination
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
