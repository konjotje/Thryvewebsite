import { AuditQuestion } from '../constants/auditData';

export const calculateScores = (
  answers: Record<string, any>, 
  questions: AuditQuestion[],
  language: 'NL' | 'ENG' = 'NL'
) => {
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
        if (answerIdx.includes(6)) pt = 4; // 'geen van deze' / 'none of these' = 4 pt
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
  let diagnosisText = '';
  
  if (language === 'ENG') {
    if (performanceScore <= 10) {
      level = 'Critical Status';
      label = 'Your system is on the verge of collapse';
      diagnosisText = 'You are currently surviving purely on adrenaline and emergency reserves. Both physically and mentally, you are depleted and running your body into the ground. This is code red. It is crucial that we intervene immediately with basic physiological anchors before your system completely locks up. Focus purely on recovery and building an absolute foundation.';
    } else if (performanceScore <= 20) {
      level = 'Severe Leaking';
      label = 'You are losing an extreme amount of energy';
      diagnosisText = 'You are losing huge amounts of energy every day to reactive and destructive patterns. This is the time to make a ruthless reset. You have great potential, but your foundation is currently missing. What you now consider "normal" fatigue is in reality chronic exhaustion. Stop working harder, start building smarter.';
    } else if (performanceScore <= 30) {
      level = 'Firefighting';
      label = 'Living on short peaks and deep valleys';
      diagnosisText = 'You are likely spending all day keeping yourself "on" with external stimuli. Brief bursts of energy are followed by severe crashes. With a few strategic adjustments in your sleep architecture, nutrition, and early morning cadence, you can make exponential leaps in mental clarity within a matter of weeks.';
    } else if (performanceScore <= 40) {
      level = 'Functionally Exhausted';
      label = 'You live purely on willpower';
      diagnosisText = 'People around you probably do not see how much effort it costs you to maintain this level. You constantly push yourself through fatigue. That determination is commendable, but biologically completely unsustainable. We must transition from "forcing things on willpower" to "being carried by physiological systems".';
    } else if (performanceScore <= 50) {
      level = 'The Dangerous Middle Ground';
      label = 'You are leaving a painful amount of potential on the table';
      diagnosisText = 'You do many things "okay", but lack the precision to truly break through. You have good intentions, but without unified, streamlined systems, you remain stuck at barely half of your true potential. This is the definitive breaking point where specific, data-driven protocols pull you out of the stagnant middle to the high-performance top.';
    } else if (performanceScore <= 60) {
      level = 'Inconsistent Performer';
      label = 'Good days, alternated with "brain fog"';
      diagnosisText = 'You are functioning reasonably well on average, but the peaks are unpredictable. You have days where you can handle the world, followed by periods of fuzzy focus or afternoon dips. Your system is still too reactive. Our goal is to make those peak-performance days the guarantee, not the exception, for your daily baseline.';
    } else if (performanceScore <= 70) {
      level = 'Solid, With Great Growth Potential';
      label = 'Good foundation, but your ceiling is still far away';
      diagnosisText = 'You have the basic principles reasonably sharp and that translates into good performance. Still, you lack the raw, inexhaustible energy and laser-sharp focus of the true 1%. Your challenge is no longer discipline or mindset. Your problem is a missing structured system to surgically close invisible energy leaks. Time for fine-tuning.';
    } else if (performanceScore <= 80) {
      level = 'Advanced High-Performer';
      label = 'More is not better, better is better';
      diagnosisText = 'Above average. You work out, perform well, and live consciously. But the battle for the final 20% gain requires a completely different, almost surgical approach. This is no longer about "doing more" or "training harder", but about strategic switching off, manipulating your nervous system, and physiological micro-optimization for decades of sustainable dominance.';
    } else if (performanceScore <= 90) {
      level = 'Elite Level';
      label = 'Time for groundbreaking optimization';
      diagnosisText = 'Your system and routines run like a powerful machine. The biggest danger in this phase is overtraining, arrogance, or failing to recognize subtle burnout signals. We must shift to advanced bio-feedback and strict periodization so we can sustain this incredible output indefinitely without your body rebelling.';
    } else {
      level = 'Peak Performance Master';
      label = 'The Absolute Top 1%';
      diagnosisText = 'Physiologically, mentally, and structurally, you are in the elite class. Your system is an unbreakable fortress. Your task is pure maintenance, adapting to extreme stressors, and designing shields against external noise. Keep respecting your anchors, never let go of the fundamentals, and the results will keep compounding automatically.';
    }
  } else {
    // Dutch (NL) default
    if (performanceScore <= 10) {
      level = 'Kritieke Status';
      label = 'Je systeem staat op instorten';
      diagnosisText = 'Je overleeft momenteel puur op adrenaline en noodreserves. Zowel fysiek als mentaal ben je uitgedroogd en roofbouw aan het plegen op je lichaam. Dit is code rood. Het is cruciaal dat we direct ingrijpen met fysiologische basis-ankers voordat je systeem volledig blokkeert. Focus je puur op herstel en het bouwen van een absoluut fundament.';
    } else if (performanceScore <= 20) {
      level = 'Zware Lekkage';
      label = 'Je verliest extreem veel energie';
      diagnosisText = 'Je bent elke dag enorm veel energie kwijt aan reactieve en destructieve patronen. Dit is het moment om een meedogenloze reset te maken. Je hebt grote potentie, maar je fundament ontbreekt momenteel. Wat je nu als "normale" vermoeidheid beschouwt, is in werkelijkheid chronische uitputting. Stop met harder werken, begin met slimmer opbouwen.';
    } else if (performanceScore <= 30) {
      level = 'Brandjes Blussen';
      label = 'Leven op korte pieken en diepe dalen';
      diagnosisText = 'Je bent waarschijnlijk de hele dag bezig om jezelf "aan" te houden met externe prikkels. Korte momenten van energie worden gevolgd door zware instortingen. Met een paar strategische aanpassingen in je slaaparchitectuur, voeding en vroege ochtend-cadans kun je binnen enkele weken al exponentiële sprongen maken in je mentale helderheid.';
    } else if (performanceScore <= 40) {
      level = 'Functioneel Uitgeput';
      label = 'Je leeft puur op wilskracht';
      diagnosisText = 'Mensen om je heen zien waarschijnlijk niet hoeveel moeite het je kost om dit niveau vast te houden. Je push jezelf constant door de vermoeidheid heen. Dat doorzettingsvermogen is prijzenswaardig, maar biologisch totaal onhoudbaar. We moeten de transitie maken van "dingen forceren op wilskracht" naar "gedragen worden door fysiologische systemen".';
    } else if (performanceScore <= 50) {
      level = 'De Gevaarlijke Middenmoot';
      label = 'Je laat pijnlijk veel op tafel liggen';
      diagnosisText = 'Je doet veel dingen "oké", maar mist de precisie om écht door te breken. Je hebt goede intenties, maar zonder eenduidige, gestroomlijnde systemen blijf je hangen op hooguit de helft van je ware potentie. Dit is het definitieve breekpunt waar specifieke, datagedreven protocollen je uit het vastgelopen midden naar de high-performance top trekken.';
    } else if (performanceScore <= 60) {
      level = 'Inconsistente Presteerder';
      label = 'Goede dagen, afgewisseld met "brain fog"';
      diagnosisText = 'Je bent gemiddeld goed aan het functioneren, maar de pieken zijn onvoorspelbaar. Je hebt dagen waarop je de wereld aankan, gevolgd door periodes van vage focus of middagdips. Je systeem is nog te reactief. Ons doel is om díe peak-performance dagen geen uitzondering meer te laten zijn, maar je absoluut gegarandeerde, dagelijkse baseline.';
    } else if (performanceScore <= 70) {
      level = 'Solide, Met Groot Groeipotentieel';
      label = 'Goede basis, maar je ceiling is nog ver weg';
      diagnosisText = 'Je hebt de basisprincipes redelijk scherp staan en dat vertaalt zich in goede prestaties. Toch mis je nog de rauwe, onuitputtelijke energie en de laserscherpe focus van de echte 1%. Jouw uitdaging is geen discipline of mindset meer. Jouw probleem is een ontbrekend gelaagd systeem om onzichtbare energielekken chirurgisch te dichten. Tijd voor fine-tuning.';
    } else if (performanceScore <= 80) {
      level = 'Advanced High-Performer';
      label = 'Meer is niet beter, beter is beter';
      diagnosisText = 'Bovengemiddeld. Je sport, presteert goed en leeft bewust. Maar de strijd voor de allerlaatste 20% winst vereist een compleet andere, bijna chirurgische aanpak. Dit gaat niet meer om "meer doen" of "harder trainen", maar om stategisch afschakelen, het manipuleren van je zenuwstelsel en fysiologische micro-optimalisatie voor decennialange, duurzame dominantie.';
    } else if (performanceScore <= 90) {
      level = 'Elite Niveau';
      label = 'Tijd voor grensverleggende optimalisatie';
      diagnosisText = 'Je systeem en routines lopen als een krachtige machine. Het grootste gevaar in deze fase is overtraining, arrogantie of het niet herkennen van subtiele burn-out signalen. We moeten overstappen op geavanceerde bio-feedback en strikte periodisering, zodat we deze absurde output onbeperkt kunnen blijven leveren zonder dat je lichaam in opstand komt.';
    } else {
      level = 'Peak Performance Master';
      label = 'De Absolute Top 1%';
      diagnosisText = 'Fysiologisch, mentaal en structureel begeef je je in de elite-klasse. Je systeem is een onbreekbare vesting. Jouw taak is puur onderhoud, adaptie aan extreme stressoren en het ontwerpen van schilden tegen externe ruis. Blijf je ankers respecteren, laat de fundamentals nooit los, en de resultaten zullen vanzelf blijven compounden.';
    }
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
  
  const hasDopamineOrEnergy = laagsteCategories.includes('Dopamine & Stimulus-Management') || 
                              laagsteCategories.includes('Dopamine & Stimulus Management') ||
                              laagsteCategories.includes('Energie & Vitaliteit') ||
                              laagsteCategories.includes('Energy & Vitality');

  const hasSleepOrTraining = laagsteCategories.includes('Slaap & Herstel') || 
                             laagsteCategories.includes('Sleep & Recovery') ||
                             laagsteCategories.includes('Training & Lichaam') ||
                             laagsteCategories.includes('Training & Body');

  const hasStressOrFocus = laagsteCategories.includes('Stress & Nervous System') || 
                           laagsteCategories.includes('Focus & Cognitieve Output') ||
                           laagsteCategories.includes('Focus & Cognitive Output');

  const hasNutrition = laagsteCategories.includes('Voeding & Hydratatie') || 
                       laagsteCategories.includes('Nutrition & Hydration');

  if (performanceScore >= 75) {
    archetypeType = 5;
  } else if (hasDopamineOrEnergy) {
    archetypeType = 1;
  } else if (hasSleepOrTraining) {
    archetypeType = 2;
  } else if (hasStressOrFocus) {
    archetypeType = 3;
  } else if (hasNutrition) {
    archetypeType = 4;
  }

  const archetypes = {
    1: {
      name: language === 'ENG' ? 'The Stacker' : 'De Stapelaar',
      profile: language === 'ENG' 
        ? 'You lean on external stimulants. Caffeine, fast carbohydrates, micro-dopamine hits from your phone. Your energy feels pumped up and reactive, not calm and grounded. Your days consist of managing peaks and valleys, making your cognitive output highly erratic.'
        : 'Je leunt op externe stimulansen. Cafeïne, snelle koolhydraten, micro-dopamine hits van je telefoon. Je energie voelt opgepompt en reactief, niet kalm en gefundeerd. Je dagen bestaan uit het managen van pieken en dalen, waardoor je cognitieve output grillig is.',
      problem: language === 'ENG'
        ? 'Your neurological baseline has shifted. What once felt like "high" energy now feels normal. Because your system has become tolerant to stimuli, you need more and more to achieve the same focus. Ultimately, this leads to adrenal fatigue and a constantly rushed feeling without actual productivity.'
        : 'Je neurologische baseline is verschoven. Wat ooit voelde als "veel" energie, voelt nu als normaal. Omdat je systeem tolerant is geworden voor prikkels, heb je steeds meer nodig om dezelfde focus te bereiken. Uiteindelijk leidt dit tot bijnier-vermoeidheid en een constant gejaagd gevoel zonder daadwerkelijke productiviteit.',
      actionName: language === 'ENG' ? 'The Empty Morning Protocol' : 'De Lege Ochtend Protocol',
      actionDesc: language === 'ENG'
        ? 'The first 60 minutes of your day define your neurochemistry. No phone (no external dopamine). No caffeine (give your adenosine receptors time to clear naturally). Only hydration (500ml of water with a pinch of sea salt), daylight in your eyes, and physical movement. Within 7 days, this recalibrates your ability to stay focused without external pushes.'
        : 'De eerste 60 minuten van je dag definiëren je neurochemie. Geen telefoon (geen externe dopamine). Geen cafeïne (geef je adenosine-receptoren de tijd om natuurlijk vrij te komen). Alleen hydratatie (500ml water met een snufje zeezout), daglicht in je ogen, en fysieke beweging. Binnen 7 dagen herkalibreert dit je vermogen om zonder externe push gefocust te blijven.'
    },
    2: {
      name: language === 'ENG' ? 'The Exhausted Athlete' : 'De Uitgeputte Atleet',
      profile: language === 'ENG'
        ? 'You are highly disciplined. You work hard in your business and you train hard physically. But you forget that the neurological system does not distinguish between physical and mental stress. Everything adds up to the same bucket, and you are filling it faster than you empty it.'
        : 'Je bent gedisciplineerd. Je werkt hard in je bedrijf én je sport hard. Maar je vergeet dat het neurologisch systeem geen onderscheid maakt tussen fysieke en mentale stress. Alles telt op uit dezelfde emmer, en jij vult hem sneller dan je hem leegt.',
      problem: language === 'ENG'
        ? 'Your problem is not a lack of output, but a chronic deficit of structured recovery. Your body builds up cortisol and inflammation. As a result, your physical progress stalls, you sleep restlessly (despite being tired), and you miss the sharpness you are used to. You are overtraining at life.'
        : 'Je probleem is niet een gebrek aan output, maar een structureel tekort aan gestructureerd herstel. Je lichaam bouwt cortisol en inflammatie op. Hierdoor stagneert je fysieke progressie, slaap je onrustig (ondanks vermoeidheid), en mis je de scherpte die je van jezelf gewend bent. Je bent aan het overtrainen op het leven.',
      actionName: language === 'ENG' ? 'Periodization & Parasympathetic Shift' : 'Periodisering & Parasympathische Shift',
      actionDesc: language === 'ENG'
        ? 'You must learn to "switch off" with the same intensity that you "switch on". Implement a strict evening routine: after 8:00 PM, no work, bright lights, or heavy physical/mental stimulation. Take magnesium bisglycinate and do 10-15 minutes of down-regulation breathing (such as box breathing or 4-7-8 breathing) to force your nervous system into a relaxed (parasympathetic) state before sleeping.'
        : 'Je moet leren "afschakelen" met dezelfde intensiteit waarmee je "aanschakelt". Implementeer een harde avondroutine: na 20:00 geen werk, fel licht of zware fysieke of mentale belasting. Neem magnesium bisglycinaat en doe 10-15 minuten down-regulation ademhaling (zoals box-breathing of 4-7-8 ademhaling) om je zenuwstelsel force-matig in rust (parasympathisch) te brengen voordat je gaat slapen.'
    },
    3: {
      name: language === 'ENG' ? 'The Mental Spinner' : 'De Mentale Draaier',
      profile: language === 'ENG'
        ? 'Your cognitive bandwidth is constantly at 90% capacity. Even when you are not working, your mind is busy with strategy, problem-solving, and planning ahead. Physically you may be at home, but mentally you are still at work. You struggle to simply be present.'
        : 'Je cognitieve bandbreedte staat de hele dag op 90%. Zelfs als je niet werkt, ben je in je hoofd bezig met strategie, problemen oplossen, en vooruit plannen. Fysiek ben je misschien thuis, maar mentaal ben je in je bedrijf. Het lukt je niet om simpelweg aanwezig te zijn.',
      problem: language === 'ENG'
        ? 'Your brain operates in a constant "threat and strategize" state (high beta brainwaves). Because the mental engine never truly cools down, your actual decision-making quality declines during the day, you burn out mentally faster, and you find it difficult to experience relaxation without feeling guilty.'
        : 'Je brein opereert in een constante "threat en strategize" status (hoge bèta-hersengolven). Omdat de mentale motor nooit écht afkoelt, daalt je daadwerkelijke beslissingskwaliteit overdag, brand je mentaal sneller op, en vind je het moeilijk om ontspanning te ervaren zonder je schuldig te voelen.',
      actionName: language === 'ENG' ? 'The Architectural Shutdown' : 'De Architectonische Shutdown',
      actionDesc: language === 'ENG'
        ? 'Create an unbreakable transition ritual at the end of your workday. Around 5:30 PM or 6:00 PM, take 10 minutes to explicitly write down: 1) What did I complete today? 2) What is the exact action plan for tomorrow morning? By closing open loops on paper, you relieve your working memory and give your brain the physiological signal that the work is actually finished.'
        : 'Creëer een onbreekbaar overgangsritueel aan het einde van je werkdag. Rond 17:30 of 18:00 neem je 10 minuten om expliciet te noteren: 1) Wat heb ik vandaag voltooid? 2) Wat is het exacte actieplan voor morgenochtend? Door open loops op papier te sluiten, ontlast je je werkgeheugen en geef je je brein het fysiologische signaal dat het werk daadwerkelijk afgesloten is.'
    },
    4: {
      name: language === 'ENG' ? 'The Silent Leaker' : 'De Stille Leaker',
      profile: language === 'ENG'
        ? 'From the outside, you keep everything running. You don\'t collapse. But during the day, you subtly lose energy and focus due to fragmented nutrition, poor hydration, or missing physiological anchors. You perform at a "good" level, but never reach your physiological peak.'
        : 'Van de buitenkant houd je alles draaiende. Je stort niet in. Maar gedurende de dag verlies je subtiel energie en focus door gefragmenteerde voeding, slechte hydratatie, of het missen van fysiologische ankers. Je presteert op een "goed" niveau, maar bereikt nooit je fysiologische limiet.',
      problem: language === 'ENG'
        ? 'You optimize the wrong, minor details or ignore the most high-impact physiological variables (such as blood sugar stabilization and circadian rhythms). This leads to the infamous afternoon dip, brain fog after lunch, and finding yourself running on reserves by the end of the week.'
        : 'Je optimaliseert op de verkeerde, kleine details of je negeert de meest impactvolle fysiologische variabelen (zoals bloedsuikerspiegel-stabilisatie en circadiaanse ritmiek). Hierdoor ontstaat de beruchte middagdip, brain fog na de lunch, en merk je dat je aan het eind van de week op reserves draait.',
      actionName: language === 'ENG' ? 'Stable Blood Sugar & the 40-gram Protein Rule' : 'Stabiele Bloedsuiker & 40-gram Eiwit Regel',
      actionDesc: language === 'ENG'
        ? 'Spiking and crashing blood sugar is the number one enemy of sustained cognitive output. Start your day with at least 40 grams of high-quality protein and healthy fats (e.g., eggs, smoked salmon, or a heavy protein shake) and avoid early morning carbs. This completely eliminates your afternoon dip and creates an ironclad energy baseline well into the afternoon.'
        : 'Piekende en dalende bloedsuiker is de nummer 1 vijand van langdurige cognitieve output. Start je dag met minimaal 40 gram hoogwaardige eiwitten en gezonde vetten (bijv. eieren, gerookte zalm, of een zware proteïneshake), en mijd koolhydraten in de vroege ochtend. Dit hakt je middagdip volledig weg en creëert een stalen energie-baseline tot ver in de middag.'
    },
    5: {
      name: language === 'ENG' ? 'The Compounder' : 'De Compounder',
      profile: language === 'ENG'
        ? 'Your system is fundamentally solid. You sleep reasonably well, train regularly, watch your nutrition, and are more productive than average. You don\'t fall into the traps of the masses. Now, the game of small percentages begins. How do you go from the top 10% to the top 1%?'
        : 'Je systeem is in de kern solide. Je slaap redelijk tot goed, traint, let op je voeding en bent bovengemiddeld productief. Je valt niet in de valkuilen van de massa. Nu begint het spel van percentages. Hoe ga je van top 10% naar de top 1%.',
      problem: language === 'ENG'
        ? 'What got you here won\'t get you to the next level. The danger is that you blindly keep adding more protocols. More supplements, more ice baths, more biohacking. In this phase, "more" is often the cause of stress and sub-optimal performance. You should not add, but ruthlessly refine.'
        : 'Wat je hier bracht, brengt je niet naar the next level. Het gevaar is dat je blindelings meer protocollen gaat toevoegen. Meer supplementen, meer ijsbaden, meer biohacking. "Meer" is in deze fase vaak de oorzaak van stress en sub-optimale prestaties. Je moet niet toevoegen, maar meedogenloos verfijnen.',
      actionName: language === 'ENG' ? 'Data-Driven Isolation (The Audit Cycle)' : 'Datagedreven Isolatie (The Audit Cycle)',
      actionDesc: language === 'ENG'
        ? 'Select and track only one variable that you usually ignore for 14 days. For example: the impact of a specific evening carbohydrate source on your HRV, or the correlation between your waking time and net deep-work hours. Replace assumptions with objective data and identify the specific physiological lever that personally gives you that final 20% multiplier.'
        : 'Selecteer en track voor 14 dagen slechts één variabele die je normaal negeert. Bijvoorbeeld: de impact van een bepaalde koolhydraatbron in de avond op je HRV, of de correlatie tussen je wektijd en netto deep-work uren. Vervang aannames door objectieve data en identificeer de specifieke fysiologische hefboom die jou persoonlijk die laatste 20% hefboomwerking geeft.'
    }
  };

  return {
    performanceScore,
    level,
    label,
    diagnosisText,
    breakdown,
    archetypeType,
    archetype: archetypes[archetypeType as 1|2|3|4|5]
  };
};
