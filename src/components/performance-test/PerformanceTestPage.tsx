import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useForm, Controller } from 'react-hook-form';
import { ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { QUIZ_QUESTIONS, PILLAR_RECOMMENDATIONS } from '../../constants/quizData';
import { Pillar, LeadFormData } from '../../types/quiz';

export default function PerformanceTestPage() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'form' | 'confirmation'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (step === 'confirmation') {
      const timer = setTimeout(() => {
        window.location.href = '/';
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleAnswer = (points: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: points };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('form');
    }
  };

  const calculateResults = (formData: LeadFormData) => {
    const pillarScores: Record<string, number> = {};
    let totalScore = 0;

    QUIZ_QUESTIONS.forEach(q => {
      const score = answers[q.id] || 0;
      pillarScores[q.pillar] = (pillarScores[q.pillar] || 0) + score;
      totalScore += score;
    });

    const scaledTotal = Math.round((totalScore / 120) * 100);

    const types = ["Hustle Junkie", "Unfocused High-Achiever", "Emerging Performer", "Peak Performer"];
    let type = types[0];
    if (scaledTotal > 85) type = types[3];
    else if (scaledTotal > 65) type = types[2];
    else if (scaledTotal > 40) type = types[1];

    let weakestPillar: Pillar = 'Slaapoptimalisatie';
    let minScore = Infinity;

    Object.entries(pillarScores).forEach(([pillar, score]) => {
      if (score < minScore) {
        minScore = score;
        weakestPillar = pillar as Pillar;
      }
    });

    return {
      totalScore: scaledTotal,
      pillarScores: pillarScores as Record<Pillar, number>,
      type,
      weakestPillar,
      recommendation: PILLAR_RECOMMENDATIONS[weakestPillar]
    };
  };

  const onSubmitForm = async (data: LeadFormData) => {
    setIsSubmitting(true);
    const calculatedResults = calculateResults(data);

    try {
      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          ...calculatedResults,
          breakdown: calculatedResults.pillarScores
        }),
      });

      if (!response.ok) throw new Error('Failed to send report');
      
      setStep('confirmation');
    } catch (error) {
      console.error(error);
      setStep('confirmation');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-thryve-dark pt-24 pb-16 px-6 flex items-center">
      <Helmet>
        <title>Gratis Peak Performance Test | The Thryve Method</title>
        <meta name="description" content="Doe de gratis Peak Performance Test en ontdek hoe jouw lichaam en geest presteren." />
      </Helmet>

      <div className="max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="text-thryve-accent text-xs font-semibold tracking-widest uppercase mb-3">
                Ontgrendel je potentieel
              </div>
              <h1 className="text-3xl md:text-4xl mb-4 leading-tight">Peak Performance<br /><span className="text-thryve-accent">Test</span></h1>
              <p className="text-thryve-cream/70 mb-8 text-base max-w-lg mx-auto leading-relaxed">
                Ontdek in 3 minuten op welke gebieden jij energie laat liggen en hoe je jouw productiviteit naar het volgende niveau tilt.
              </p>
              <div className="flex justify-center">
                <Button onClick={() => setStep('quiz')} size="md">
                  Start de test <ChevronRight size={18} strokeWidth={3} className="text-thryve-accent ml-1 -mr-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-thryve-accent">
                    {currentQuestion.pillar}
                  </span>
                  <span className="text-[11px] text-thryve-cream/50 uppercase tracking-widest font-semibold">
                    Vraag {currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length}
                  </span>
                </div>
                <div className="w-full bg-thryve-card h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-thryve-accent h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <h2 className="text-xl md:text-2xl mb-6 leading-snug">
                {currentQuestion.text}
              </h2>

              <div className="space-y-3">
                {currentQuestion.answers.map((answer, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleAnswer(answer.points)}
                    className="w-full text-left p-4 md:p-5 rounded-xl bg-thryve-card border border-white/5 hover:border-thryve-accent/50 transition-colors group flex justify-between items-center"
                  >
                    <span className="text-sm md:text-base group-hover:text-white transition-colors pr-4">{answer.text}</span>
                    <ChevronRight className="w-4 h-4 text-thryve-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg mx-auto"
            >
              <div className="text-center mb-8">
                <CheckCircle2 className="w-12 h-12 text-thryve-accent mx-auto mb-3" />
                <h2 className="text-2xl mb-2">Laatste stap!</h2>
                <p className="text-thryve-cream/70 text-sm">
                  Vul je gegevens in om je gepersonaliseerde Peak Performance Rapport direct in je mailbox te ontvangen.
                </p>
              </div>

              <LeadForm onSubmit={onSubmitForm} isSubmitting={isSubmitting} />
            </motion.div>
          )}

          {step === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <CheckCircle2 className="w-16 h-16 text-thryve-accent mx-auto mb-4" />
              <h2 className="text-2xl mb-3">Rapport Verzonden!</h2>
              <p className="text-thryve-cream/70 text-base max-w-sm mx-auto">
                Je gepersonaliseerde Peak Performance Rapport is onderweg naar je mailbox. Check bij vragen ook even je spam-folder.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function LeadForm({ onSubmit, isSubmitting }: { onSubmit: (data: LeadFormData) => void, isSubmitting: boolean }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm<LeadFormData & { consent: boolean }>();

  return (
    <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-thryve-cream/50 mb-1 ml-1 font-semibold">Voornaam</label>
          <input
            {...register('firstName', { required: 'Voornaam is verplicht' })}
            placeholder="Voornaam"
            className="w-full bg-thryve-card border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-thryve-accent transition-colors"
          />
          {errors.firstName && <span className="text-red-500 text-[10px] mt-1 ml-1 block">{errors.firstName.message}</span>}
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-thryve-cream/50 mb-1 ml-1 font-semibold">Achternaam</label>
          <input
            {...register('lastName', { required: 'Achternaam is verplicht' })}
            placeholder="Achternaam"
            className="w-full bg-thryve-card border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-thryve-accent transition-colors"
          />
          {errors.lastName && <span className="text-red-500 text-[10px] mt-1 ml-1 block">{errors.lastName.message}</span>}
        </div>
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-thryve-cream/50 mb-1 ml-1 font-semibold">E-mail</label>
        <input
          {...register('email', { 
            required: 'E-mail is verplicht',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ongeldig e-mailadres"
            }
          })}
          placeholder="email@voorbeeld.nl"
          className="w-full bg-thryve-card border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-thryve-accent transition-colors"
        />
        {errors.email && <span className="text-red-500 text-[10px] mt-1 ml-1 block">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-thryve-cream/50 mb-1 ml-1 font-semibold">Telefoonnummer</label>
        <input
          {...register('phone', { required: 'Telefoonnummer is verplicht' })}
          placeholder="+31 6 12345678"
          className="w-full bg-thryve-card border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-thryve-accent transition-colors"
        />
        {errors.phone && <span className="text-red-500 text-[10px] mt-1 ml-1 block">{errors.phone.message}</span>}
      </div>
      <div className="pt-2">
        <Controller
          name="consent"
          control={control}
          rules={{ required: 'Je moet akkoord gaan met de voorwaarden' }}
          render={({ field }) => (
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className="mt-0.5 accent-thryve-accent"
              />
              <span className="text-[11px] text-thryve-cream/60 leading-tight group-hover:text-thryve-cream/80 transition-colors">
                Ik ga ermee akkoord dat The Thryve Method contact met mij opneemt naar aanleiding van mijn resultaten.
              </span>
            </label>
          )}
        />
        {errors.consent && <span className="text-red-500 text-[10px] mt-1 ml-6 block">{errors.consent.message}</span>}
      </div>
      
      <Button 
        type="submit"
        size="md"
        className="w-full mt-6" 
        {...({ disabled: isSubmitting } as any)}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Rapport genereren...
          </>
        ) : (
          'Ontgrendel Rapport'
        )}
      </Button>
      <p className="text-[9px] text-center text-thryve-cream/30 mt-3 uppercase tracking-widest">
        Geen spam, alleen je rapport.
      </p>
    </form>
  );
}