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
  let diagnosisText = '';
  
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
      profile: 'Je leunt op externe stimulansen. Cafeïne, snelle koolhydraten, micro-dopamine hits van je telefoon. Je energie voelt opgepompt en reactief, niet kalm en gefundeerd. Je dagen bestaan uit het managen van pieken en dalen, waardoor je cognitieve output grillig is.',
      problem: 'Je neurologische baseline is verschoven. Wat ooit voelde als "veel" energie, voelt nu als normaal. Omdat je systeem tolerant is geworden voor prikkels, heb je steeds meer nodig om dezelfde focus te bereiken. Uiteindelijk leidt dit tot bijnier-vermoeidheid en een constant gejaagd gevoel zonder daadwerkelijke productiviteit.',
      actionName: 'De Lege Ochtend Protocol',
      actionDesc: 'De eerste 60 minuten van je dag definiëren je neurochemie. Geen telefoon (geen externe dopamine). Geen cafeïne (geef je adenosine-receptoren de tijd om natuurlijk vrij te komen). Alleen hydratatie (500ml water met een snufje zeezout), daglicht in je ogen, en fysieke beweging. Binnen 7 dagen herkalibreert dit je vermogen om zonder externe push gefocust te blijven.'
    },
    2: {
      name: 'De Uitgeputte Atleet',
      profile: 'Je bent gedisciplineerd. Je werkt hard in je bedrijf én je sport hard. Maar je vergeet dat het neurologisch systeem geen onderscheid maakt tussen fysieke en mentale stress. Alles telt op uit dezelfde emmer, en jij vult hem sneller dan je hem leegt.',
      problem: 'Je probleem is niet een gebrek aan output, maar een structureel tekort aan gestructureerd herstel. Je lichaam bouwt cortisol en inflammatie op. Hierdoor stagneert je fysieke progressie, slaap je onrustig (ondanks vermoeidheid), en mis je de scherpte die je van jezelf gewend bent. Je bent aan het overtrainen op het leven.',
      actionName: 'Periodisering & Parasympathische Shift',
      actionDesc: 'Je moet leren "afschakelen" met dezelfde intensiteit waarmee je "aanschakelt". Implementeer een harde avondroutine: na 20:00 geen werk, fel licht of zware fysieke of mentale belasting. Neem magnesium bisglycinaat en doe 10-15 minuten down-regulation ademhaling (zoals box-breathing of 4-7-8 ademhaling) om je zenuwstelsel force-matig in rust (parasympathisch) te brengen voordat je gaat slapen.'
    },
    3: {
      name: 'De Mentale Draaier',
      profile: 'Je cognitieve bandbreedte staat de hele dag op 90%. Zelfs als je niet werkt, ben je in je hoofd bezig met strategie, problemen oplossen, en vooruit plannen. Fysiek ben je misschien thuis, maar mentaal ben je in je bedrijf. Het lukt je niet om simpelweg aanwezig te zijn.',
      problem: 'Je brein opereert in een constante "threat en strategize" status (hoge bèta-hersengolven). Omdat de mentale motor nooit écht afkoelt, daalt je daadwerkelijke beslissingskwaliteit overdag, brand je mentaal sneller op, en vind je het moeilijk om ontspanning te ervaren zonder je schuldig te voelen.',
      actionName: 'De Architectonische Shutdown',
      actionDesc: 'Creëer een onbreekbaar overgangsritueel aan het einde van je werkdag. Rond 17:30 of 18:00 neem je 10 minuten om expliciet te noteren: 1) Wat heb ik vandaag voltooid? 2) Wat is het exacte actieplan voor morgenochtend? Door open loops op papier te sluiten, ontlast je je werkgeheugen en geef je je brein het fysiologische signaal dat het werk daadwerkelijk afgesloten is.'
    },
    4: {
      name: 'De Stille Leaker',
      profile: 'Van de buitenkant houd je alles draaiende. Je stort niet in. Maar gedurende de dag verlies je subtiel energie en focus door gefragmenteerde voeding, slechte hydratatie, of het missen van fysiologische ankers. Je presteert op een "goed" niveau, maar bereikt nooit je fysiologische limiet.',
      problem: 'Je optimaliseert op de verkeerde, kleine details of je negeert de meest impactvolle fysiologische variabelen (zoals bloedsuikerspiegel-stabilisatie en circadiaanse ritmiek). Hierdoor ontstaat de beruchte middagdip, brain fog na de lunch, en merk je dat je aan het eind van de week op reserves draait.',
      actionName: 'Stabiele Bloedsuiker & 40-gram Eiwit Regel',
      actionDesc: 'Piekende en dalende bloedsuiker is de nummer 1 vijand van langdurige cognitieve output. Start je dag met minimaal 40 gram hoogwaardige eiwitten en gezonde vetten (bijv. eieren, gerookte zalm, of een zware proteïneshake), en mijd koolhydraten in de vroege ochtend. Dit hakt je middagdip volledig weg en creëert een stalen energie-baseline tot ver in de middag.'
    },
    5: {
      name: 'De Compounder',
      profile: 'Je systeem is in de kern solide. Je slaapt redelijk tot goed, traint, let op je voeding en bent bovengemiddeld productief. Je valt niet in de valkuilen van de massa. Nu begint het spel van percentages. Hoe ga je van top 10% naar de top 1%.',
      problem: 'Wat je hier bracht, brengt je niet naar the next level. Het gevaar is dat je blindelings meer protocollen gaat toevoegen. Meer supplementen, meer ijsbaden, meer biohacking. "Meer" is in deze fase vaak de oorzaak van stress en sub-optimale prestaties. Je moet niet toevoegen, maar meedogenloos verfijnen.',
      actionName: 'Datagedreven Isolatie (The Audit Cycle)',
      actionDesc: 'Selecteer en track voor 14 dagen slechts één variabele die je normaal negeert. Bijvoorbeeld: de impact van een bepaalde koolhydraatbron in de avond op je HRV, of de correlatie tussen je wektijd en netto deep-work uren. Vervang aannames door objectieve data en identificeer de specifieke fysiologische hefboom die jou persoonlijk die laatste 20% hefboomwerking geeft.'
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
