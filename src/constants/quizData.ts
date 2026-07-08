import { Question } from '../types/quiz';

export const QUIZ_QUESTIONS_BY_LANG: Record<'NL' | 'ENG', Question[]> = {
  NL: [
    // Slaapoptimalisatie
    {
      id: 'q1',
      pillar: 'Slaapoptimalisatie',
      text: 'Hoeveel uur kwalitatieve slaap krijg je gemiddeld per nacht?',
      answers: [
        { text: 'Minder dan 6 uur', points: 2 },
        { text: '6-7 uur', points: 5 },
        { text: '7-9 uur (uitgerust wakker)', points: 10 }
      ]
    },
    {
      id: 'q2',
      pillar: 'Slaapoptimalisatie',
      text: 'Gebruik je schermen (telefoon/laptop) in het laatste uur voor je gaat slapen?',
      answers: [
        { text: 'Ja, tot het moment dat ik mijn ogen sluit', points: 2 },
        { text: 'Soms, ik probeer het te beperken', points: 6 },
        { text: 'Nee, ik heb een schermvrije avondroutine', points: 10 }
      ]
    },
    // Voeding & suppletie
    {
      id: 'q3',
      pillar: 'Voeding & suppletie',
      text: 'Hoe consistent is je energieniveau gedurende de dag?',
      answers: [
        { text: 'Ik heb vaak last van een middagdip of vreetbuien', points: 2 },
        { text: 'Redelijk stabiel, maar ik heb koffie nodig om door te gaan', points: 6 },
        { text: 'Zeer stabiel, ik ervaar geen inkakkers', points: 10 }
      ]
    },
    {
      id: 'q4',
      pillar: 'Voeding & suppletie',
      text: 'Hoe plan je jouw maaltijden tijdens een drukke werkweek?',
      answers: [
        { text: 'Ik eet wat er voorhanden is (vaak fastfood/snack)', points: 2 },
        { text: 'Ik probeer gezond te eten, maar het schiet er vaak bij in', points: 5 },
        { text: 'Ik heb een systeem dat zorgt voor gezonde voeding ongeacht drukte', points: 10 }
      ]
    },
    // Training & beweging
    {
      id: 'q5',
      pillar: 'Training & beweging',
      text: 'Hoe vaak doe je aan gerichte krachttraining per week?',
      answers: [
        { text: '0-1 keer per week', points: 2 },
        { text: '2 keer per week', points: 6 },
        { text: '3 of meer keer per week', points: 10 }
      ]
    },
    {
      id: 'q6',
      pillar: 'Training & beweging',
      text: 'Hoe zou je jouw fysieke belastbaarheid omschrijven?',
      answers: [
        { text: 'Ik voel me vaak stijf, futloos of heb pijntjes', points: 2 },
        { text: 'Gemiddeld, ik kan wel wat aan maar ben snel moe', points: 6 },
        { text: 'Sterk en vitaal, mijn lichaam ondersteunt mijn ambities', points: 10 }
      ]
    },
    // Stressregulatie
    {
      id: 'q7',
      pillar: 'Stressregulatie',
      text: 'Hoe ga je om met hoge werkdruk en stressvolle periodes?',
      answers: [
        { text: 'Ik raak vaak overweldigd en mijn slaap/gezondheid lijdt eronder', points: 2 },
        { text: 'Ik zet de tanden op elkaar en ga door, maar voel me opgejaagd', points: 6 },
        { text: 'Ik gebruik technieken (ademhaling/mindset) om scherp en kalm te blijven', points: 10 }
      ]
    },
    {
      id: 'q8',
      pillar: 'Stressregulatie',
      text: 'Hoe vaak neem je gedurende de dag een moment voor bewuste ontspanning of reflectie?',
      answers: [
        { text: 'Nooit, ik sta de hele dag "aan"', points: 2 },
        { text: 'Soms, als ik er toevallig aan denk', points: 5 },
        { text: 'Dagelijks, dit is een vast onderdeel van mijn systeem', points: 10 }
      ]
    },
    // Focus & productiviteit
    {
      id: 'q9',
      pillar: 'Focus & productiviteit',
      text: 'Hoeveel uur "Deep Work" (werken zonder afleiding) haal je per dag?',
      answers: [
        { text: 'Minder dan 1 uur', points: 3 },
        { text: '1-3 uur', points: 7 },
        { text: 'Meer dan 3 uur', points: 10 }
      ]
    },
    {
      id: 'q10',
      pillar: 'Focus & productiviteit',
      text: 'Word je vaak afgeleid door notificaties, e-mails of randzaken?',
      answers: [
        { text: 'Constant, ik reageer direct op alles', points: 2 },
        { text: 'Regelmatig, het is een uitdaging om focus te houden', points: 5 },
        { text: 'Nee, ik heb mijn omgeving en systemen hierop geoptimaliseerd', points: 10 }
      ]
    },
    // Lifestyle & routines
    {
      id: 'q11',
      pillar: 'Lifestyle & routines',
      text: 'Hoe ziet jouw ochtendroutine eruit?',
      answers: [
        { text: 'Haastig: snoozen, direct mail checken en vlammen', points: 2 },
        { text: 'Wisselend, net hoe de dag loopt', points: 5 },
        { text: 'Consistent en doelgericht: ik start de dag op mijn voorwaarden', points: 10 }
      ]
    },
    {
      id: 'q12',
      pillar: 'Lifestyle & routines',
      text: 'In hoeverre is jouw gezondheid een gepland onderdeel van je business strategie?',
      answers: [
        { text: 'Helemaal niet, het komt op de laatste plek', points: 2 },
        { text: 'Ik zie het belang wel, maar plan het niet structureel in', points: 6 },
        { text: 'Mijn gezondheid is de motor van mijn bedrijf en wordt zo gemanaged', points: 10 }
      ]
    }
  ],
  ENG: [
    // Sleep Optimization
    {
      id: 'q1',
      pillar: 'Slaapoptimalisatie', // Key kept same for logic, text localized
      text: 'How many hours of quality sleep do you get on average per night?',
      answers: [
        { text: 'Less than 6 hours', points: 2 },
        { text: '6-7 hours', points: 5 },
        { text: '7-9 hours (waking up rested)', points: 10 }
      ]
    },
    {
      id: 'q2',
      pillar: 'Slaapoptimalisatie',
      text: 'Do you use screens (phone/laptop) in the last hour before going to sleep?',
      answers: [
        { text: 'Yes, until the moment I close my eyes', points: 2 },
        { text: 'Sometimes, I try to limit it', points: 6 },
        { text: 'No, I have a screen-free evening routine', points: 10 }
      ]
    },
    // Nutrition & Supplementation
    {
      id: 'q3',
      pillar: 'Voeding & suppletie',
      text: 'How consistent is your energy level throughout the day?',
      answers: [
        { text: 'I often suffer from an afternoon dip or food cravings', points: 2 },
        { text: 'Fairly stable, but I need coffee to keep going', points: 6 },
        { text: 'Very stable, I do not experience energy slumps', points: 10 }
      ]
    },
    {
      id: 'q4',
      pillar: 'Voeding & suppletie',
      text: 'How do you plan your meals during a busy work week?',
      answers: [
        { text: 'I eat whatever is available (often fast food/snacks)', points: 2 },
        { text: 'I try to eat healthy, but it often falls short', points: 5 },
        { text: 'I have a system that ensures healthy nutrition regardless of how busy I am', points: 10 }
      ]
    },
    // Training & Movement
    {
      id: 'q5',
      pillar: 'Training & beweging',
      text: 'How often do you engage in targeted strength training per week?',
      answers: [
        { text: '0-1 times per week', points: 2 },
        { text: '2 times per week', points: 6 },
        { text: '3 or more times per week', points: 10 }
      ]
    },
    {
      id: 'q6',
      pillar: 'Training & beweging',
      text: 'How would you describe your physical resilience?',
      answers: [
        { text: 'I often feel stiff, listless, or have minor aches', points: 2 },
        { text: 'Average, I can handle some strain but get tired quickly', points: 6 },
        { text: 'Strong and vital, my body supports my ambitions', points: 10 }
      ]
    },
    // Stress Regulation
    {
      id: 'q7',
      pillar: 'Stressregulatie',
      text: 'How do you handle high work pressure and stressful periods?',
      answers: [
        { text: 'I often get overwhelmed and my sleep/health suffers', points: 2 },
        { text: 'I grit my teeth and push through, but feel rushed', points: 6 },
        { text: 'I use techniques (breathing/mindset) to stay sharp and calm', points: 10 }
      ]
    },
    {
      id: 'q8',
      pillar: 'Stressregulatie',
      text: 'How often during the day do you take a moment for conscious relaxation or reflection?',
      answers: [
        { text: 'Never, I am "on" the entire day', points: 2 },
        { text: 'Sometimes, if I happen to think of it', points: 5 },
        { text: 'Daily, this is a fixed part of my system', points: 10 }
      ]
    },
    // Focus & Productivity
    {
      id: 'q9',
      pillar: 'Focus & productiviteit',
      text: 'How many hours of "Deep Work" (working without distraction) do you achieve per day?',
      answers: [
        { text: 'Less than 1 hour', points: 3 },
        { text: '1-3 hours', points: 7 },
        { text: 'More than 3 hours', points: 10 }
      ]
    },
    {
      id: 'q10',
      pillar: 'Focus & productiviteit',
      text: 'Are you often distracted by notifications, emails, or side issues?',
      answers: [
        { text: 'Constantly, I respond to everything immediately', points: 2 },
        { text: 'Regularly, it is a challenge to stay focused', points: 5 },
        { text: 'No, I have optimized my environment and systems for this', points: 10 }
      ]
    },
    // Lifestyle & Routines
    {
      id: 'q11',
      pillar: 'Lifestyle & routines',
      text: 'What does your morning routine look like?',
      answers: [
        { text: 'Hustled: snoozing, immediately checking email, and rushing into work', points: 2 },
        { text: 'Variable, just depends on how the day goes', points: 5 },
        { text: 'Consistent and purposeful: I start the day on my terms', points: 10 }
      ]
    },
    {
      id: 'q12',
      pillar: 'Lifestyle & routines',
      text: 'To what extent is your health a planned part of your business strategy?',
      answers: [
        { text: 'Not at all, it comes last', points: 2 },
        { text: 'I see the importance, but do not plan it structurally', points: 6 },
        { text: 'My health is the engine of my business and is managed as such', points: 10 }
      ]
    }
  ]
};

export const PILLAR_RECOMMENDATIONS_BY_LANG: Record<'NL' | 'ENG', Record<string, string>> = {
  NL: {
    'Slaapoptimalisatie': 'Je slaap is het fundament van je herstel. Begin met een "digital sunset": leg alle schermen 60 minuten voor het slapen weg.',
    'Voeding & suppletie': 'Voeding is brandstof, geen beloning. Focus op onbewerkte voeding en stabiele bloedsuikerspiegel voor constante focus.',
    'Training & beweging': 'Een sterk brein vereist een sterk lichaam. Integreer minimaal 3 krachttrainingen per week om je belastbaarheid te vergroten.',
    'Stressregulatie': 'Stress is niet het probleem, het gebrek aan herstel wel. Implementeer dagelijkse ademhalingsoefeningen om je zenuwstelsel te kalmeren.',
    'Focus & productiviteit': 'Bescherm je tijd als je meest waardevolle bezit. Blokkeer "Deep Work" blokken in je agenda en zet alle notificaties uit.',
    'Lifestyle & routines': 'Consistentie verslaat intensiteit. Bouw onbreekbare routines die ervoor zorgen dat je presteert, ook als je geen motivatie hebt.'
  },
  ENG: {
    'Slaapoptimalisatie': 'Your sleep is the foundation of your recovery. Start with a "digital sunset": put away all screens 60 minutes before bed.',
    'Voeding & suppletie': 'Nutrition is fuel, not a reward. Focus on whole foods and stable blood sugar levels for constant focus.',
    'Training & beweging': 'A strong brain requires a strong body. Integrate at least 3 strength training sessions per week to increase your physical capacity.',
    'Stressregulatie': 'Stress is not the problem; the lack of recovery is. Implement daily breathing exercises to calm your nervous system.',
    'Focus & productiviteit': 'Protect your time as your most valuable asset. Block "Deep Work" sessions in your calendar and turn off all notifications.',
    'Lifestyle & routines': 'Consistency beats intensity. Build unbreakable routines that ensure you perform, even when you have no motivation.'
  }
};

export const QUIZ_QUESTIONS = QUIZ_QUESTIONS_BY_LANG.NL;
export const PILLAR_RECOMMENDATIONS = PILLAR_RECOMMENDATIONS_BY_LANG.NL;
