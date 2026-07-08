import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { calculateScores } from '../../utils/auditScoring';
import { AUDIT_QUESTIONS_BY_LANG, MICRO_MOMENTS_BY_LANG } from '../../constants/auditData';
import { pdf } from '@react-pdf/renderer';
import { PerformanceAuditPDF } from './PerformanceAuditPDF';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

type StepType = 'start' | 'question' | 'micro_moment' | 'email_capture' | 'success';

export default function PerformanceAuditPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const AUDIT_QUESTIONS = AUDIT_QUESTIONS_BY_LANG[language];
  const MICRO_MOMENTS = MICRO_MOMENTS_BY_LANG[language];

  const [stepType, setStepType] = useState<StepType>('question');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState('');
  
  // Lead info
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const currentQuestion = AUDIT_QUESTIONS[currentQIndex];
  
  // Find if there's a micro moment to show AFTER the previous question
  const [activeMicroMoment, setActiveMicroMoment] = useState<any>(null);

  const handleStart = () => {
    setStepType('question');
    setCurrentQIndex(0);
  };

  const handleAnswer = (answerIdx: number) => {
    if (currentQuestion.type === 'multiple') {
      const currentSelection = answers[currentQuestion.id] || [];
      // Toggle
      let newSelection = [...currentSelection];
      if (newSelection.includes(answerIdx)) {
        newSelection = newSelection.filter(i => i !== answerIdx);
      } else {
        if (!currentQuestion.maxAnswers || newSelection.length < currentQuestion.maxAnswers) {
          // If "Geen van deze" or "None of these" was clicked (isCustom = true)
          if (currentQuestion.answers[answerIdx].isCustom) {
            newSelection = [answerIdx];
          } else {
            // Remove "Geen van deze" if it was selected
            const noneIndex = currentQuestion.answers.findIndex(a => a.isCustom);
            newSelection = newSelection.filter(i => i !== noneIndex);
            newSelection.push(answerIdx);
          }
        }
      }
      setAnswers({ ...answers, [currentQuestion.id]: newSelection });
      // Multiple choice requires manual next
    } else {
      const newAnswers = { ...answers, [currentQuestion.id]: answerIdx };
      setAnswers(newAnswers);
      
      // Auto-advance
      setTimeout(() => advance(newAnswers), 300);
    }
  };

  const advance = (currentAnswers = answers) => {
    // Check if there is a micro moment after this question
    const mm = MICRO_MOMENTS.find(m => m.afterQuestionId === currentQuestion.id);
    if (mm && stepType !== 'micro_moment') {
      setActiveMicroMoment(mm);
      setStepType('micro_moment');
    } else {
      // Go to next question or capture
      if (currentQIndex < AUDIT_QUESTIONS.length - 1) {
        setCurrentQIndex(currentQIndex + 1);
        setStepType('question');
        setActiveMicroMoment(null);
      } else {
        setStepType('email_capture');
      }
    }
  };

  const goBack = () => {
    if (stepType === 'email_capture') {
      setStepType('question');
    } else if (stepType === 'micro_moment') {
      setStepType('question');
    } else if (stepType === 'question') {
      if (currentQIndex > 0) {
        const prevQ = AUDIT_QUESTIONS[currentQIndex - 1];
        const mm = MICRO_MOMENTS.find(m => m.afterQuestionId === prevQ.id);
        if (mm) {
          setActiveMicroMoment(mm);
          setStepType('micro_moment');
          setCurrentQIndex(currentQIndex - 1);
        } else {
          setCurrentQIndex(currentQIndex - 1);
        }
      } else {
        setStepType('start');
      }
    }
  };

  const calculateAndSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;
    
    setLoading(true);
    setShowError('');

    try {
      const result = calculateScores(answers, AUDIT_QUESTIONS, language);
      
      // Generate PDF 
      const pdfBlob = await pdf(
        <PerformanceAuditPDF 
          firstName={firstName}
          totalScore={result.performanceScore}
          level={result.level}
          label={result.label}
          diagnosisText={result.diagnosisText}
          archetype={result.archetype}
          breakdown={result.breakdown}
          language={language}
        />
      ).toBlob();

      // Convert to base64
      const reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = async () => {
        const base64data = reader.result?.toString().split(',')[1];
        
        // Send to backend
        const res = await fetch('/api/send-report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            email,
            phone,
            totalScore: result.performanceScore,
            type: result.archetype.name,
            breakdown: result.breakdown,
            pdfBase64: base64data
          })
        });

        if (res.ok) {
          setStepType('success');
        } else {
          setShowError(language === 'ENG' ? 'Something went wrong. Please try again.' : 'Er is iets misgegaan. Probeer het opnieuw.');
        }
        setLoading(false);
      };
    } catch (err) {
      console.error(err);
      setShowError(language === 'ENG' ? 'There was a problem generating the PDF.' : 'Er was een probleem met het genereren van de PDF.');
      setLoading(false);
    }
  };

  const progress = ((currentQIndex + 1) / AUDIT_QUESTIONS.length) * 100;
  const showPhone = answers['q30'] === 0; // index 0 is open to guidance
  const isEng = language === 'ENG';

  return (
    <div className="min-h-screen bg-thryve-dark py-24 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Absolute back button */}
      {stepType !== 'start' && stepType !== 'success' && (
        <button 
          onClick={goBack}
          className="absolute top-24 left-4 md:left-10 text-gray-400 hover:text-white flex items-center gap-2 transition"
        >
          <ArrowLeft size={20} /> <span className="hidden sm:inline font-sans">{isEng ? 'Previous' : 'Vorige'}</span>
        </button>
      )}

      {/* Progress bar */}
      {(stepType === 'question' || stepType === 'micro_moment') && (
        <div className="absolute top-0 left-0 w-full h-1 bg-black">
          <div 
            className="h-full bg-thryve-accent transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="max-w-2xl w-full mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {stepType === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight mb-4 uppercase">
                Performance <br/><span className="text-thryve-accent">Audit</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto">
                {isEng 
                  ? 'Discover where your system leaks energy and what your blueprint is to build physical and cognitive dominance. Estimated completion time: 6 minutes.'
                  : 'Ontdek waar jouw systeem lekt en wat je blueprint is om fysieke én cognitieve overmacht op te bouwen. Geschatte invultijd: 6 minuten.'}
              </p>
              <Button onClick={handleStart} size="lg">
                {isEng ? 'Start the Audit' : 'Start de Audit'} <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          )}

          {stepType === 'question' && (
            <motion.div 
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                {currentQuestion.category && (
                  <span className="text-thryve-accent font-heading text-xs md:text-sm tracking-widest uppercase mb-3 block">
                    {currentQuestion.category}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                  {currentQuestion.text}
                </h2>
                {currentQuestion.type === 'multiple' && (
                  <p className="text-gray-400 mt-2 text-xs md:text-sm">
                    {isEng 
                      ? `Select the options that apply (Max ${currentQuestion.maxAnswers || 'all'}).`
                      : `Selecteer de opties die van toepassing zijn (Max ${currentQuestion.maxAnswers || 'alles'}).`}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {currentQuestion.answers.map((answer, idx) => {
                  const isSelected = currentQuestion.type === 'multiple' 
                    ? (answers[currentQuestion.id] || []).includes(idx)
                    : answers[currentQuestion.id] === idx;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-200 group flex justify-between items-center ${
                        isSelected 
                          ? 'bg-thryve-accent/10 border-thryve-accent text-white' 
                          : 'border-[#E8E3D4]/50 bg-black/20 text-gray-300 hover:border-[#E8E3D4] hover:bg-black/40'
                      }`}
                    >
                      <span className="font-medium text-sm md:text-base pr-4">{answer.text}</span>
                      
                      {currentQuestion.type !== 'multiple' && (
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                          isSelected ? 'border-thryve-accent bg-thryve-accent' : 'border-[#E8E3D4]/50'
                        }`} />
                      )}
                      
                      {currentQuestion.type === 'multiple' && (
                        <div className={`w-4 h-4 border-2 flex-shrink-0 flex items-center justify-center ${
                          isSelected ? 'border-thryve-accent bg-thryve-accent' : 'border-[#E8E3D4]/50'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 bg-white" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {currentQuestion.type === 'multiple' && (
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => advance()} disabled={!(answers[currentQuestion.id] && answers[currentQuestion.id].length > 0)}>
                    {isEng ? 'Next Question' : 'Volgende Vraag'} <ChevronRight className="ml-2" />
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {stepType === 'micro_moment' && activeMicroMoment && (
            <motion.div 
              key={`mm-${activeMicroMoment.afterQuestionId}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center bg-black/30 p-10 border border-gray-800 rounded-2xl"
            >
              <h3 className="text-thryve-accent font-heading tracking-widest text-base md:text-lg mb-4 uppercase">
                {activeMicroMoment.title}
              </h3>
              <div className="space-y-4 mb-8 text-base md:text-lg font-medium text-gray-200">
                {activeMicroMoment.content.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Button onClick={() => advance()}>
                {isEng ? 'Next Question' : 'Volgende Vraag'} <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          )}

          {stepType === 'email_capture' && (
            <motion.div 
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-black mb-3 uppercase">
                  {isEng ? 'The audit is ' : 'De audit is '}<span className="text-thryve-accent">{isEng ? 'completed.' : 'voltooid.'}</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  {isEng 
                    ? 'To which email address can we send your personalized report?'
                    : 'Naar welk e-mailadres mogen we je gepersonaliseerde rapport sturen?'}
                </p>
              </div>

              <form onSubmit={calculateAndSend} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{isEng ? 'First name *' : 'Voornaam *'}</label>
                  <input 
                    type="text" 
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full bg-black/30 rounded-xl border border-gray-800 p-3 md:p-4 text-sm md:text-base font-body text-white focus:border-thryve-accent focus:ring-1 focus:ring-thryve-accent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{isEng ? 'Email address *' : 'E-mailadres *'}</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-black/30 rounded-xl border border-gray-800 p-3 md:p-4 text-sm md:text-base font-body text-white focus:border-thryve-accent focus:ring-1 focus:ring-thryve-accent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{isEng ? 'Phone number (Optional)' : 'Telefoonnummer (Optioneel)'}</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-black/30 rounded-xl border border-gray-800 p-3 md:p-4 text-sm md:text-base font-body text-white focus:border-thryve-accent focus:ring-1 focus:ring-thryve-accent outline-none transition-all"
                  />
                </div>

                {showError && <p className="text-red-500 text-sm font-medium">{showError}</p>}

                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full mt-4 flex items-center justify-center justify-items-center"
                >
                  {loading ? (
                    isEng ? (
                      <>Generating report... <Loader2 className="ml-2 animate-spin" size={20} /></>
                    ) : (
                      <>Rapport genereren... <Loader2 className="ml-2 animate-spin" size={20} /></>
                    )
                  ) : (
                    isEng ? (
                      <>Send My Blueprint <ChevronRight className="ml-2" /></>
                    ) : (
                      <>Verstuur Mijn Blueprint <ChevronRight className="ml-2" /></>
                    )
                  )}
                </Button>
              </form>
            </motion.div>
          )}

          {stepType === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thryve-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChevronRight size={32} className="text-thryve-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-4 uppercase">
                {isEng ? "You're " : 'Je bent '}<span className="text-thryve-accent">{isEng ? 'in!' : 'binnen'}</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto">
                {isEng 
                  ? <>Your Blueprint is on its way to <strong>{email}</strong>. Make sure you don't miss it (check your spam folder if needed).</>
                  : <>Je Blueprint is onderweg naar <strong>{email}</strong>. Zorg dat je hem niet mist (check evt. je spambox).</>}
              </p>

              {showPhone && (
                <div className="bg-black/30 border border-thryve-accent p-6 md:p-8 rounded-xl max-w-xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                    {isEng ? 'Schedule your Performance Call' : 'Plan je Performance Call'}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-6">
                    {isEng 
                      ? 'You have indicated that you are open to personalized guidance. In this free call, we will deconstruct your bottlenecks directly.'
                      : 'Je hebt aangegeven open te staan voor gepersonaliseerde begeleiding. In deze gratis call deconstrueren we je knelpunten direct.'}
                  </p>
                  <Button onClick={() => window.open('https://cal.com/thethryvemethod/30min', '_blank')} className="w-full">
                    {isEng ? 'Schedule Directly' : 'Plan Direct In'}
                  </Button>
                </div>
              )}
              
              {!showPhone && (
                <Button onClick={() => navigate('/')} className="mt-8">
                  {isEng ? 'Back to Home' : 'Terug naar Home'}
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
