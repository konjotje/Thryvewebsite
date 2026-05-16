import { Question } from '../types/quiz';

export const QUIZ_QUESTIONS: Question[] = [
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
];

export const PILLAR_RECOMMENDATIONS: Record<string, string> = {
  'Slaapoptimalisatie': 'Je slaap is het fundament van je herstel. Begin met een "digital sunset": leg alle schermen 60 minuten voor het slapen weg.',
  'Voeding & suppletie': 'Voeding is brandstof, geen beloning. Focus op onbewerkte voeding en stabiele bloedsuikerspiegel voor constante focus.',
  'Training & beweging': 'Een sterk brein vereist een sterk lichaam. Integreer minimaal 3 krachttrainingen per week om je belastbaarheid te vergroten.',
  'Stressregulatie': 'Stress is niet het probleem, het gebrek aan herstel wel. Implementeer dagelijkse ademhalingsoefeningen om je zenuwstelsel te kalmeren.',
  'Focus & productiviteit': 'Bescherm je tijd als je meest waardevolle bezit. Blokkeer "Deep Work" blokken in je agenda en zet alle notificaties uit.',
  'Lifestyle & routines': 'Consistentie verslaat intensiteit. Bouw onbreekbare routines die ervoor zorgen dat je presteert, ook als je geen motivatie hebt.'
};
