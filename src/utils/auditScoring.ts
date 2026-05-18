import { AuditQuestion } from '../constants/auditData';

export const calculateScores = (answers: Record<string, any>, questions: AuditQuestion[]) => {
  const categoryScores: Record<string, { sum: number, max: number }> = {};
  let totalPoints = 0;
  let totalMax = 0;

  questions.filter(q => q.part === 2).forEach(q => {
    if (!q.category) return;
    if (!categoryScores[q.category]) {
      categoryScores[q.category] = { sum: 0, max: 0 };
    }

    const answerIdx = answers[q.id];
    let pt = 0;
    let maxPt = 4;

    if (Array.isArray(answerIdx)) { // multiple choice
      if (answerIdx.length === 0) pt = 0;
      else {
        // q23 logica
        if (answerIdx.includes(6)) pt = 4; // 'geen van deze' = 4 pt
        else pt = Math.max(1, 4 - answerIdx.length); // e.g. 1 -> 3, 2 -> 2, 3+ -> 1
      }
    } else if (answerIdx !== undefined) {
      pt = q.answers[answerIdx]?.points || 0;
    }

    categoryScores[q.category].sum += pt;
    categoryScores[q.category].max += maxPt;
  });

  const breakdown: Record<string, number> = {};
  let sumCatScores = 0;
  let numCategories = 0;

  for (const cat in categoryScores) {
    const data = categoryScores[cat];
    const catScore = (data.sum / data.max) * 10;
    breakdown[cat] = catScore;
    sumCatScores += catScore;
    numCategories++;
  }

  const performanceScore = Math.round((sumCatScores / numCategories) * 10);
  
  let level = '';
  let label = '';
  if (performanceScore <= 40) {
    level = 'Survival Mode';
    label = 'Je systeem leakt op meerdere fronten';
  } else if (performanceScore <= 60) {
    level = 'Functioneel maar lekkend';
    label = 'Je presteert, maar onder je niveau';
  } else if (performanceScore <= 80) {
    level = 'Solide, met groeiruimte';
    label = 'Goede basis, ceiling nog niet bereikt';
  } else {
    level = 'Compounding';
    label = 'Je systeem werkt — fine-tuning fase';
  }

  // Bepaal Archetype
  let lowestCat = '';
  let secondLowestCat = '';
  let min1 = 11, min2 = 11;

  for (const cat in breakdown) {
    if (breakdown[cat] < min1) {
      min2 = min1;
      secondLowestCat = lowestCat;
      min1 = breakdown[cat];
      lowestCat = cat;
    } else if (breakdown[cat] < min2) {
      min2 = breakdown[cat];
      secondLowestCat = cat;
    }
  }

  const laagsteCategories = [lowestCat, secondLowestCat];

  let archetypeType = 2; // default
  
  if (performanceScore >= 75) {
    archetypeType = 5;
  } else if (laagsteCategories.includes('Dopamine & Stimulus-Management') || laagsteCategories.includes('Energie & Vitaliteit')) {
    archetypeType = 1;
  } else if (laagsteCategories.includes('Slaap & Herstel') || laagsteCategories.includes('Training & Lichaam')) {
    archetypeType = 2;
  } else if (laagsteCategories.includes('Stress & Nervous System') || laagsteCategories.includes('Focus & Cognitieve Output')) {
    archetypeType = 3;
  } else if (laagsteCategories.includes('Voeding & Hydratatie')) {
    archetypeType = 4;
  }

  const archetypes = {
    1: {
      name: 'De Stapelaar',
      profile: 'Stapelt stimulansen om door de dag te komen. Cafeïne, suiker, scrollen. Energie voelt extern, niet intern.',
      problem: 'Tolerantie opgebouwd. Normaal werk voelt traag. Motivatie afhankelijk van prikkels.',
      actionName: 'De Lege Ochtend',
      actionDesc: 'Eerste 60 minuten na wakker worden: geen telefoon, geen cafeïne. Alleen water, daglicht, beweging. Geeft je dopamine-systeem ruimte om te recalibreren.'
    },
    2: {
      name: 'De Uitgeputte Atleet',
      profile: 'Werkt hard, traint hard, herstelt niet. Stapelt fysieke en mentale belasting zonder structurele recovery.',
      problem: 'Niet te weinig effort. Te weinig herstel. Overtraining op leven, niet op de sportschool.',
      actionName: 'De Herstelweek',
      actionDesc: '7 dagen lang: vaste bedtijd ±30 min, geen training na 19:00, geen cafeïne na 14:00. Eén week is genoeg om je baseline te voelen verschuiven.'
    },
    3: {
      name: 'De Mentale Draaier',
      profile: 'Cognitief overbelast. Hoofd staat altijd aan. Veel werk, weinig resultaat per uur. Aanwezig maar niet echt aanwezig.',
      problem: 'Geen mentale schakelaar. Brein krijgt nooit het signaal dat het werk klaar is.',
      actionName: 'De Shutdown',
      actionDesc: 'Elke werkdag om 18:00: schrijf drie regels op. (1) Wat is af. (2) Wat staat open voor morgen. (3) Eén zin: "Het werk is af voor vandaag." Dit installeert het schakelaar-signaal dat je brein mist.'
    },
    4: {
      name: 'De Stille Leaker',
      profile: 'Lijkt van buiten oké. Functioneert. Maar leakt structureel via voeding, hydratatie, timing. Geen crash, wel een plafond.',
      problem: 'Onderschatte basisvariabelen. Eiwit, timing, alcohol — kleine lekken die optellen.',
      actionName: 'De 40-gram Regel',
      actionDesc: 'Minimaal 40g eiwit bij ontbijt. Eén verandering, één maaltijd. Stabiliseert je energie tot lunch en breekt de middagdip-cyclus.'
    },
    5: {
      name: 'De Compounder',
      profile: 'Systeem werkt grotendeels. Wint op consistentie. Wil van goed naar uitzonderlijk. ',
      problem: 'Niet meer toevoegen. Maar verfijnen.',
      actionName: 'De Audit Cycle',
      actionDesc: 'Track 14 dagen één variabele die je nu niet meet (HRV, deep work uren, of avond-cafeïne). Data toont waar je laatste 20% rendement zit.'
    }
  };

  return {
    performanceScore,
    level,
    label,
    breakdown,
    archetypeType,
    archetype: archetypes[archetypeType as 1|2|3|4|5]
  };
};
