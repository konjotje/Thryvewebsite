export interface AuditAnswer {
  text: string;
  points?: number;
  isCustom?: boolean;
}

export interface AuditQuestion {
  id: string;
  part: number; // 1 = Baseline, 2 = Diagnostiek/Diagnostics, 3 = Impact & Intentie/Impact & Intention, 4 = Uitkomst/Outcome
  category?: string;
  text: string;
  answers: AuditAnswer[];
  type?: 'single' | 'multiple';
  maxAnswers?: number;
}

export interface MicroMoment {
  afterQuestionId: string;
  type: 'intro_diagnostiek' | 'social_proof' | 'educatief_inzicht';
  title?: string;
  content: string[];
}

export const AUDIT_QUESTIONS_BY_LANG: Record<'NL' | 'ENG', AuditQuestion[]> = {
  NL: [
    // DEEL 1 - BASELINE
    {
      id: 'q1',
      part: 1,
      text: 'Wat is je geslacht?',
      answers: [{ text: 'Man' }, { text: 'Vrouw' }]
    },
    {
      id: 'q2',
      part: 1,
      text: 'Wat is je leeftijd?',
      answers: [
        { text: '25-30' },
        { text: '31-35' },
        { text: '36-40' },
        { text: '41-45' },
        { text: '46+' }
      ]
    },
    {
      id: 'q3',
      part: 1,
      text: 'Wat beschrijft jouw situatie het best?',
      answers: [
        { text: 'Ik heb een eigen bedrijf (1-5 fte)' },
        { text: 'Ik heb een eigen bedrijf (5+ fte)' },
        { text: "Ik ben freelancer / ZZP'er" },
        { text: 'Ik heb een leidinggevende rol in loondienst' },
        { text: 'Anders' }
      ]
    },
    {
      id: 'q4',
      part: 1,
      text: 'Hoeveel uur werk je gemiddeld per week?',
      answers: [
        { text: 'Minder dan 40' },
        { text: '40-50 uur' },
        { text: '50-60 uur' },
        { text: '60-70 uur' },
        { text: '70+ uur' }
      ]
    },
    {
      id: 'q5',
      part: 1,
      text: 'Wat is je primaire performance-doel?',
      answers: [
        { text: 'Meer energie en focus voor mijn werk' },
        { text: 'Sterker en fitter lichaam' },
        { text: 'Beide — fysiek en mentaal niveau omhoog' },
        { text: 'Burnout voorkomen of herstellen' },
        { text: 'Volgende level bereiken zonder in te leveren' }
      ]
    },

    // DEEL 2 - DIAGNOSTIEK
    // Categorie 1: SLAAP & HERSTEL
    {
      id: 'q6',
      part: 2,
      category: 'Slaap & Herstel',
      text: 'Hoe consistent is je slaap-/waakritme?',
      answers: [
        { text: 'Vaste tijden, ±30 min, ook in weekend', points: 4 },
        { text: 'Doordeweeks redelijk, weekend wijkt af', points: 3 },
        { text: 'Wisselend, afhankelijk van werk', points: 2 },
        { text: 'Geen vast ritme', points: 1 }
      ]
    },
    {
      id: 'q7',
      part: 2,
      category: 'Slaap & Herstel',
      text: "Hoe word je 's ochtends wakker?",
      answers: [
        { text: 'Uitgerust, voor de wekker', points: 4 },
        { text: 'Oké met wekker, snel op gang', points: 3 },
        { text: 'Moe, eerst koffie nodig', points: 2 },
        { text: 'Uitgeput, snooze meerdere keren', points: 1 }
      ]
    },
    {
      id: 'q8',
      part: 2,
      category: 'Slaap & Herstel',
      text: "Hoe vaak word je 's nachts wakker en heb je moeite om weer in slaap te komen?",
      answers: [
        { text: 'Vrijwel nooit', points: 4 },
        { text: '1-2x per week', points: 3 },
        { text: '3-5x per week', points: 2 },
        { text: 'Bijna elke nacht', points: 1 }
      ]
    },

    // Categorie 2: ENERGIE & VITALITEIT
    {
      id: 'q9',
      part: 2,
      category: 'Energie & Vitaliteit',
      text: 'Wanneer zakt je energie het hardst weg op een normale werkdag?',
      answers: [
        { text: 'Geen duidelijke dip, stabiel', points: 4 },
        { text: 'Korte dip rond lunch, snel hersteld', points: 3 },
        { text: 'Stevige middagdip (14:00-16:00)', points: 2 },
        { text: 'Meerdere crashes per dag', points: 1 }
      ]
    },
    {
      id: 'q10',
      part: 2,
      category: 'Energie & Vitaliteit',
      text: 'Hoeveel cafeïne (koffie / energydrinks / pre-workout) per dag?',
      answers: [
        { text: '0-1', points: 4 },
        { text: '2-3', points: 3 },
        { text: '4-5', points: 2 },
        { text: '6+ of nodig om te functioneren', points: 1 }
      ]
    },
    {
      id: 'q11',
      part: 2,
      category: 'Energie & Vitaliteit',
      text: "Hoe voel je je 's avonds na een werkdag?",
      answers: [
        { text: 'Energiek, ruimte voor sport/sociaal', points: 4 },
        { text: 'Oké, maar wil rust', points: 3 },
        { text: 'Uitgeput, alleen bank/scherm', points: 2 },
        { text: 'Op, te moe om te ontspannen', points: 1 }
      ]
    },

    // Categorie 3: TRAINING & LICHAAM
    {
      id: 'q12',
      part: 2,
      category: 'Training & Lichaam',
      text: 'Hoe vaak train je gestructureerd (kracht/cardio) per week?',
      answers: [
        { text: '4-5x, vast schema', points: 4 },
        { text: '2-3x, redelijk consistent', points: 3 },
        { text: '1-2x, wisselend', points: 2 },
        { text: 'Zelden of nooit', points: 1 }
      ]
    },
    {
      id: 'q13',
      part: 2,
      category: 'Training & Lichaam',
      text: 'Train je met progressie (track je sets, reps, gewichten)?',
      answers: [
        { text: 'Ja, gestructureerd schema met progressie', points: 4 },
        { text: 'Ja, ik onthoud wat ik vorige week deed', points: 3 },
        { text: 'Nee, ik doe wat ik die dag voel', points: 2 },
        { text: 'Ik train niet of nauwelijks', points: 1 }
      ]
    },
    {
      id: 'q14',
      part: 2,
      category: 'Training & Lichaam',
      text: 'Hoe is je herstel na een zware werkweek of trainingsweek?',
      answers: [
        { text: 'Goed, binnen 1-2 dagen weer scherp', points: 4 },
        { text: 'Redelijk, maar voel het wel', points: 3 },
        { text: 'Slecht, blijft dagen hangen', points: 2 },
        { text: 'Ik herstel niet meer goed', points: 1 }
      ]
    },

    // Categorie 4: VOEDING & HYDRATATIE
    {
      id: 'q15',
      part: 2,
      category: 'Voeding & Hydratatie',
      text: 'Hoe consistent eet je eiwit bij elke maaltijd?',
      answers: [
        { text: 'Bij elke maaltijd, bewust', points: 4 },
        { text: 'Meestal wel, niet altijd', points: 3 },
        { text: 'Bij sommige maaltijden', points: 2 },
        { text: 'Ik let er niet op', points: 1 }
      ]
    },
    {
      id: 'q16',
      part: 2,
      category: 'Voeding & Hydratatie',
      text: 'Hoeveel alcohol drink je per week?',
      answers: [
        { text: '0-1 glas', points: 4 },
        { text: '2-5 glazen', points: 3 },
        { text: '6-10 glazen', points: 2 },
        { text: '10+ glazen', points: 1 }
      ]
    },
    {
      id: 'q17',
      part: 2,
      category: 'Voeding & Hydratatie',
      text: "Hoe vaak eet je 's avonds laat door, snack je weg of grijp je naar suiker?",
      answers: [
        { text: 'Vrijwel nooit', points: 4 },
        { text: '1-2x per week', points: 3 },
        { text: '3-5x per week', points: 2 },
        { text: 'Bijna dagelijks', points: 1 }
      ]
    },

    // Categorie 5: FOCUS & COGNITIEVE OUTPUT
    {
      id: 'q18',
      part: 2,
      category: 'Focus & Cognitieve Output',
      text: 'Wat is het eerste wat je doet binnen 10 minuten na wakker worden?',
      answers: [
        { text: 'Stilte, water, beweging of journaling', points: 4 },
        { text: 'Ik neem rustig de tijd', points: 3 },
        { text: 'Telefoon checken, mail of nieuws', points: 2 },
        { text: 'Direct in werk-modus, scrollen, scherm', points: 1 }
      ]
    },
    {
      id: 'q19',
      part: 2,
      category: 'Focus & Cognitieve Output',
      text: 'Hoeveel aaneengesloten minuten deep work haal je gemiddeld voordat je afgeleid raakt?',
      answers: [
        { text: '60+ minuten', points: 4 },
        { text: '30-60 minuten', points: 3 },
        { text: '15-30 minuten', points: 2 },
        { text: 'Minder dan 15 minuten', points: 1 }
      ]
    },
    {
      id: 'q20',
      part: 2,
      category: 'Focus & Cognitieve Output',
      text: 'Hoeveel van je werkuren zijn écht productief (deep work, geen meetings/admin)?',
      answers: [
        { text: '60%+', points: 4 },
        { text: '40-60%', points: 3 },
        { text: '20-40%', points: 2 },
        { text: 'Minder dan 20%', points: 1 }
      ]
    },

    // Categorie 6: DOPAMINE & STIMULUS-MANAGEMENT
    {
      id: 'q21',
      part: 2,
      category: 'Dopamine & Stimulus-Management',
      text: 'Wat is je gemiddelde schermtijd op je telefoon per dag?',
      answers: [
        { text: 'Minder dan 2 uur', points: 4 },
        { text: '2-3 uur', points: 3 },
        { text: '3-5 uur', points: 2 },
        { text: '5+ uur', points: 1 }
      ]
    },
    {
      id: 'q22',
      part: 2,
      category: 'Dopamine & Stimulus-Management',
      text: 'Hoe voelt 30 minuten zonder prikkels (geen telefoon, scherm, muziek)?',
      answers: [
        { text: 'Prettig, ik zoek het op', points: 4 },
        { text: 'Oké, kan ik prima', points: 3 },
        { text: 'Oncomfortabel, ik word onrustig', points: 2 },
        { text: 'Ondraaglijk, ik vermijd het', points: 1 }
      ]
    },
    {
      id: 'q23',
      part: 2,
      category: 'Dopamine & Stimulus-Management',
      text: 'Welke stimulansen stapel je vóór 12:00? (meerdere mogelijk)',
      type: 'multiple',
      answers: [
        { text: 'Cafeïne (2+ koppen)', points: 1 },
        { text: 'Nicotine', points: 1 },
        { text: 'Suiker / zoet ontbijt', points: 1 },
        { text: 'Social media / scrollen', points: 1 },
        { text: 'Nieuws / mail direct na wakker worden', points: 1 },
        { text: 'Pre-workout / energydrink', points: 1 },
        { text: 'Geen van deze', points: 0, isCustom: true }
      ]
    },

    // Categorie 7: STRESS & NERVOUS SYSTEM
    {
      id: 'q24',
      part: 2,
      category: 'Stress & Nervous System',
      text: "Kun je 's avonds mentaal écht uitschakelen?",
      answers: [
        { text: 'Ja, vrijwel altijd', points: 4 },
        { text: 'Meestal wel', points: 3 },
        { text: 'Moeite mee, hoofd blijft draaien', points: 2 },
        { text: 'Nee, ook in het weekend niet', points: 1 }
      ]
    },
    {
      id: 'q25',
      part: 2,
      category: 'Stress & Nervous System',
      text: 'Hoe vaak voel je je fysiek aanwezig maar mentaal nog bij het werk (bij partner, gezin, vrienden)?',
      answers: [
        { text: 'Zelden of nooit', points: 4 },
        { text: 'Soms', points: 3 },
        { text: 'Vaak', points: 2 },
        { text: 'Bijna altijd', points: 1 }
      ]
    },

    // DEEL 3 - IMPACT & INTENTIE
    {
      id: 'q26',
      part: 3,
      text: 'Waar voel je de grootste impact van je huidige situatie? (max 3)',
      type: 'multiple',
      maxAnswers: 3,
      answers: [
        { text: 'Mijn bedrijf groeit niet zoals het zou kunnen' },
        { text: 'Mijn team mist de leider die ik zou kunnen zijn' },
        { text: 'Mijn relatie of gezinsleven lijdt eronder' },
        { text: 'Mijn gezondheid gaat achteruit' },
        { text: 'Ik voel me niet meer de versie van mezelf die ik wil zijn' },
        { text: 'Ik mis plezier en scherpte in mijn werk' }
      ]
    },
    {
      id: 'q27',
      part: 3,
      text: 'Als je over 12 weken één ding wilt voelen, wat is het?',
      answers: [
        { text: 'Elke ochtend wakker worden met energie' },
        { text: '6 uur deep work in plaats van 10 uur half werk' },
        { text: 'Echt aanwezig kunnen zijn buiten werk' },
        { text: 'Zichtbaar fysiek sterker en strakker' },
        { text: 'Mentale rust, ook in drukke weken' }
      ]
    },
    {
      id: 'q28',
      part: 3,
      text: 'Hoe snel wil je dit veranderen?',
      answers: [
        { text: 'Zo snel mogelijk' },
        { text: 'Binnen 1-3 maanden' },
        { text: 'Binnen 6 maanden' },
        { text: 'Geen haast, oriënterend' }
      ]
    },
    {
      id: 'q29',
      part: 3,
      text: 'Heb je eerder gewerkt met een coach of programma op fysiek/mentaal vlak?',
      answers: [
        { text: 'Ja, en het werkte' },
        { text: 'Ja, maar het hield geen stand' },
        { text: 'Nee, dit zou de eerste keer zijn' }
      ]
    },
    {
      id: 'q30',
      part: 3,
      text: 'Sta je open voor gepersonaliseerde begeleiding op basis van deze uitkomst?',
      answers: [
        { text: 'Ja, ik wil horen hoe the Thryve Method dit aanpakt' },
        { text: 'Misschien, eerst de uitkomst zien' },
        { text: 'Nee, ik wil alleen de analyse' }
      ]
    }
  ],
  ENG: [
    // PART 1 - BASELINE
    {
      id: 'q1',
      part: 1,
      text: 'What is your gender?',
      answers: [{ text: 'Male' }, { text: 'Female' }]
    },
    {
      id: 'q2',
      part: 1,
      text: 'What is your age?',
      answers: [
        { text: '25-30' },
        { text: '31-35' },
        { text: '36-40' },
        { text: '41-45' },
        { text: '46+' }
      ]
    },
    {
      id: 'q3',
      part: 1,
      text: 'What describes your situation best?',
      answers: [
        { text: 'I have my own company (1-5 FTE)' },
        { text: 'I have my own company (5+ FTE)' },
        { text: 'I am a freelancer / self-employed' },
        { text: 'I have a leadership role as an employee' },
        { text: 'Other' }
      ]
    },
    {
      id: 'q4',
      part: 1,
      text: 'How many hours do you work on average per week?',
      answers: [
        { text: 'Less than 40' },
        { text: '40-50 hours' },
        { text: '50-60 hours' },
        { text: '60-70 hours' },
        { text: '70+ hours' }
      ]
    },
    {
      id: 'q5',
      part: 1,
      text: 'What is your primary performance goal?',
      answers: [
        { text: 'More energy and focus for my work' },
        { text: 'Stronger and fitter body' },
        { text: 'Both — elevating physical and mental levels' },
        { text: 'Preventing or recovering from burnout' },
        { text: 'Reaching the next level without compromising other areas' }
      ]
    },

    // PART 2 - DIAGNOSTICS
    // Category 1: Sleep & Recovery
    {
      id: 'q6',
      part: 2,
      category: 'Sleep & Recovery',
      text: 'How consistent is your sleep/wake rhythm?',
      answers: [
        { text: 'Fixed times, ±30 min, also on weekends', points: 4 },
        { text: 'Reasonable during weekdays, weekends differ', points: 3 },
        { text: 'Variable, depending on work', points: 2 },
        { text: 'No fixed rhythm', points: 1 }
      ]
    },
    {
      id: 'q7',
      part: 2,
      category: 'Sleep & Recovery',
      text: 'How do you wake up in the morning?',
      answers: [
        { text: 'Rested, before the alarm', points: 4 },
        { text: 'Okay with the alarm, quickly up and running', points: 3 },
        { text: 'Tired, need coffee first', points: 2 },
        { text: 'Exhausted, snooze multiple times', points: 1 }
      ]
    },
    {
      id: 'q8',
      part: 2,
      category: 'Sleep & Recovery',
      text: 'How often do you wake up at night and struggle to fall back asleep?',
      answers: [
        { text: 'Virtually never', points: 4 },
        { text: '1-2 times per week', points: 3 },
        { text: '3-5 times per week', points: 2 },
        { text: 'Almost every night', points: 1 }
      ]
    },

    // Category 2: Energy & Vitality
    {
      id: 'q9',
      part: 2,
      category: 'Energy & Vitality',
      text: 'When does your energy drop the most on a normal workday?',
      answers: [
        { text: 'No clear drop, stable', points: 4 },
        { text: 'Brief dip around lunch, quickly recovered', points: 3 },
        { text: 'Heavy afternoon dip (2:00 PM - 4:00 PM)', points: 2 },
        { text: 'Multiple crashes per day', points: 1 }
      ]
    },
    {
      id: 'q10',
      part: 2,
      category: 'Energy & Vitality',
      text: 'How much caffeine (coffee / energy drinks / pre-workout) per day?',
      answers: [
        { text: '0-1', points: 4 },
        { text: '2-3', points: 3 },
        { text: '4-5', points: 2 },
        { text: '6+ or needed to function', points: 1 }
      ]
    },
    {
      id: 'q11',
      part: 2,
      category: 'Energy & Vitality',
      text: 'How do you feel in the evening after a workday?',
      answers: [
        { text: 'Energetic, room for sports/socializing', points: 4 },
        { text: 'Okay, but want rest', points: 3 },
        { text: 'Exhausted, only couch/screen', points: 2 },
        { text: 'Drained, too tired to relax', points: 1 }
      ]
    },

    // Category 3: Training & Body
    {
      id: 'q12',
      part: 2,
      category: 'Training & Body',
      text: 'How often do you train in a structured way (strength/cardio) per week?',
      answers: [
        { text: '4-5x, fixed program', points: 4 },
        { text: '2-3x, reasonably consistent', points: 3 },
        { text: '1-2x, variable', points: 2 },
        { text: 'Seldom or never', points: 1 }
      ]
    },
    {
      id: 'q13',
      part: 2,
      category: 'Training & Body',
      text: 'Do you train with progression (do you track sets, reps, weights)?',
      answers: [
        { text: 'Yes, structured routine with progression', points: 4 },
        { text: 'Yes, I remember what I did last week', points: 3 },
        { text: 'No, I do what I feel that day', points: 2 },
        { text: 'I barely train or not at all', points: 1 }
      ]
    },
    {
      id: 'q14',
      part: 2,
      category: 'Training & Body',
      text: 'How is your recovery after a tough work week or training week?',
      answers: [
        { text: 'Good, sharp again within 1-2 days', points: 4 },
        { text: 'Reasonable, but I still feel it', points: 3 },
        { text: 'Poor, lingers for days', points: 2 },
        { text: 'I no longer recover well', points: 1 }
      ]
    },

    // Category 4: Nutrition & Hydration
    {
      id: 'q15',
      part: 2,
      category: 'Nutrition & Hydration',
      text: 'How consistently do you eat protein with each meal?',
      answers: [
        { text: 'With every meal, consciously', points: 4 },
        { text: 'Usually, but not always', points: 3 },
        { text: 'With some meals', points: 2 },
        { text: 'I do not pay attention to it', points: 1 }
      ]
    },
    {
      id: 'q16',
      part: 2,
      category: 'Nutrition & Hydration',
      text: 'How much alcohol do you drink per week?',
      answers: [
        { text: '0-1 glass', points: 4 },
        { text: '2-5 glasses', points: 3 },
        { text: '6-10 glasses', points: 2 },
        { text: '10+ glasses', points: 1 }
      ]
    },
    {
      id: 'q17',
      part: 2,
      category: 'Nutrition & Hydration',
      text: 'How often do you eat late at night, snack, or reach for sugar?',
      answers: [
        { text: 'Virtually never', points: 4 },
        { text: '1-2 times per week', points: 3 },
        { text: '3-5 times per week', points: 2 },
        { text: 'Almost daily', points: 1 }
      ]
    },

    // Category 5: Focus & Cognitive Output
    {
      id: 'q18',
      part: 2,
      category: 'Focus & Cognitive Output',
      text: 'What is the first thing you do within 10 minutes of waking up?',
      answers: [
        { text: 'Silence, water, movement, or journaling', points: 4 },
        { text: 'I take my time peacefully', points: 3 },
        { text: 'Check phone, email, or news', points: 2 },
        { text: 'Directly into work mode, scrolling, screen', points: 1 }
      ]
    },
    {
      id: 'q19',
      part: 2,
      category: 'Focus & Cognitive Output',
      text: 'How many consecutive minutes of deep work do you average before getting distracted?',
      answers: [
        { text: '60+ minutes', points: 4 },
        { text: '30-60 minutes', points: 3 },
        { text: '15-30 minutes', points: 2 },
        { text: 'Less than 15 minutes', points: 1 }
      ]
    },
    {
      id: 'q20',
      part: 2,
      category: 'Focus & Cognitive Output',
      text: 'How many of your working hours are truly productive (deep work, no meetings/admin)?',
      answers: [
        { text: '60%+', points: 4 },
        { text: '40-60%', points: 3 },
        { text: '20-40%', points: 2 },
        { text: 'Less than 20%', points: 1 }
      ]
    },

    // Category 6: Dopamine & Stimulus Management
    {
      id: 'q21',
      part: 2,
      category: 'Dopamine & Stimulus Management',
      text: 'What is your average screen time on your phone per day?',
      answers: [
        { text: 'Less than 2 hours', points: 4 },
        { text: '2-3 hours', points: 3 },
        { text: '3-5 hours', points: 2 },
        { text: '5+ hours', points: 1 }
      ]
    },
    {
      id: 'q22',
      part: 2,
      category: 'Dopamine & Stimulus Management',
      text: 'How does 30 minutes without stimulation feel (no phone, screen, music)?',
      answers: [
        { text: 'Pleasant, I actively seek it out', points: 4 },
        { text: 'Okay, I handle it fine', points: 3 },
        { text: 'Uncomfortable, I get restless', points: 2 },
        { text: 'Unbearable, I avoid it', points: 1 }
      ]
    },
    {
      id: 'q23',
      part: 2,
      category: 'Dopamine & Stimulus Management',
      text: 'Which stimulants do you stack before 12:00 PM? (multiple choice)',
      type: 'multiple',
      answers: [
        { text: 'Caffeine (2+ cups)', points: 1 },
        { text: 'Nicotine', points: 1 },
        { text: 'Sugar / sweet breakfast', points: 1 },
        { text: 'Social media / scrolling', points: 1 },
        { text: 'News / email immediately after waking up', points: 1 },
        { text: 'Pre-workout / energy drink', points: 1 },
        { text: 'None of these', points: 0, isCustom: true }
      ]
    },

    // Category 7: Stress & Nervous System
    {
      id: 'q24',
      part: 2,
      category: 'Stress & Nervous System',
      text: 'Can you truly switch off mentally in the evening?',
      answers: [
        { text: 'Yes, virtually always', points: 4 },
        { text: 'Usually', points: 3 },
        { text: 'Struggle with it, mind keeps racing', points: 2 },
        { text: 'No, not even on weekends', points: 1 }
      ]
    },
    {
      id: 'q25',
      part: 2,
      category: 'Stress & Nervous System',
      text: 'How often do you feel physically present but mentally still at work (with partner, family, friends)?',
      answers: [
        { text: 'Seldom or never', points: 4 },
        { text: 'Sometimes', points: 3 },
        { text: 'Often', points: 2 },
        { text: 'Almost always', points: 1 }
      ]
    },

    // PART 3 - IMPACT & INTENTION
    {
      id: 'q26',
      part: 3,
      text: 'Where do you feel the biggest impact of your current situation? (max 3)',
      type: 'multiple',
      maxAnswers: 3,
      answers: [
        { text: 'My business is not growing as it could' },
        { text: 'My team lacks the leader I could be' },
        { text: 'My relationship or family life is suffering' },
        { text: 'My health is declining' },
        { text: 'I no longer feel like the version of myself I want to be' },
        { text: 'I lack joy and sharpness in my work' }
      ]
    },
    {
      id: 'q27',
      part: 3,
      text: 'If you want to feel one thing 12 weeks from now, what is it?',
      answers: [
        { text: 'Waking up every morning with energy' },
        { text: '6 hours of deep work instead of 10 hours of half-work' },
        { text: 'Being genuinely present outside of work' },
        { text: 'Visibly physically stronger and leaner' },
        { text: 'Mental calm, even during busy weeks' }
      ]
    },
    {
      id: 'q28',
      part: 3,
      text: 'How quickly do you want to change this?',
      answers: [
        { text: 'As quickly as possible' },
        { text: 'Within 1-3 months' },
        { text: 'Within 6 months' },
        { text: 'No rush, just exploring' }
      ]
    },
    {
      id: 'q29',
      part: 3,
      text: 'Have you worked with a coach or program on a physical/mental level before?',
      answers: [
        { text: 'Yes, and it worked' },
        { text: 'Yes, but it did not last' },
        { text: 'No, this would be the first time' }
      ]
    },
    {
      id: 'q30',
      part: 3,
      text: 'Are you open to personalized guidance based on this outcome?',
      answers: [
        { text: 'Yes, I want to hear how the Thryve Method approaches this' },
        { text: 'Maybe, let\'s see the results first' },
        { text: 'No, I only want the analysis' }
      ]
    }
  ]
};

export const MICRO_MOMENTS_BY_LANG: Record<'NL' | 'ENG', MicroMoment[]> = {
  NL: [
    {
      afterQuestionId: 'q5',
      type: 'intro_diagnostiek',
      title: 'INTRO DIAGNOSTIEK',
      content: [
        'De volgende vragen brengen je huidige systeem in kaart.',
        'Geen mindset-vragen. Geen vage gevoelens. Concrete signalen van waar je energie lekt, fysiek én mentaal.',
        'Antwoord vanuit hoe het écht is, niet hoe je wilt dat het is.'
      ]
    },
    {
      afterQuestionId: 'q11',
      type: 'social_proof',
      title: 'WAT DE MEESTE ONDERNEMERS ZELF ONTDEKKEN:',
      content: [
        "Het probleem is niet wat je doet 's avonds. Het probleem is wat je niet doet 's ochtends.",
        'De ondernemers die we begeleidden, scoorden hun eerste 12 weken gemiddeld 40-60% hoger op energie. Niet door meer te doen. Door slimmer te bouwen.'
      ]
    },
    {
      afterQuestionId: 'q17',
      type: 'educatief_inzicht',
      title: 'WIST JE DIT?',
      content: [
        'Energie, focus en herstel zijn geen aparte systemen. Het is één keten: slaap → voeding → training → cognitie → stress.',
        'Eén zwakke schakel ondermijnt de rest. Dat is waarom "harder werken aan focus" zelden werkt als de fysieke basis lekt.'
      ]
    }
  ],
  ENG: [
    {
      afterQuestionId: 'q5',
      type: 'intro_diagnostiek',
      title: 'DIAGNOSTICS INTRO',
      content: [
        'The following questions map out your current system.',
        'No mindset questions. No vague feelings. Concrete signals of where you are leaking energy, both physically and mentally.',
        'Answer based on how it actually is, not how you want it to be.'
      ]
    },
    {
      afterQuestionId: 'q11',
      type: 'social_proof',
      title: 'WHAT MOST ENTREPRENEURS DISCOVER:',
      content: [
        "The problem is not what you do in the evening. The problem is what you do not do in the morning.",
        'The entrepreneurs we coached scored an average of 40-60% higher on energy in their first 12 weeks. Not by doing more. By building smarter.'
      ]
    },
    {
      afterQuestionId: 'q17',
      type: 'educatief_inzicht',
      title: 'DID YOU KNOW THIS?',
      content: [
        'Energy, focus, and recovery are not separate systems. It is one chain: sleep → nutrition → training → cognition → stress.',
        'A single weak link undermines the rest. That is why "working harder on focus" rarely works if the physical foundation is leaking.'
      ]
    }
  ]
};

// Default export arrays for backwards compatibility
export const AUDIT_QUESTIONS = AUDIT_QUESTIONS_BY_LANG.NL;
export const MICRO_MOMENTS = MICRO_MOMENTS_BY_LANG.NL;
