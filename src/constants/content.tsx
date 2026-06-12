import { Target, Moon, Dumbbell, Brain, Activity, Shield, Sliders, Zap } from 'lucide-react';

export const HERO_CONTENT = {
  title: "ONTDEK JOUW POTENTIEEL",
  subtitle: "PEAK PERFORMANCE COACHING",
  description: "Wetenschappelijk onderbouwde coaching voor ambitieuze ondernemers die hun energie, focus en prestaties naar een hoger niveau willen tillen.",
  cta: "Performance audit"
};

export const FEATURES_ITEMS = [
  { icon: Activity, title: "Lichaam én geest", desc: "Eén aanpak op training, herstel, slaap, focus en mindset. Geen losse onderdelen, maar een compleet systeem." },
  { icon: Shield, title: "Vakmanschap", desc: "Fysiotherapeut en peak performance coach. Ik begrijp het lichaam tot in detail en vertaal dat naar wat voor jóu werkt." },
  { icon: Sliders, title: "100% Persoonlijk", desc: "Geen standaardplan. We kijken naar jouw leven, jouw lijf en jouw doelen — en bouwen daaromheen een aanpak die past." }
];

export const THRYVE_METHOD_CONTENT = {
  title: "THE THRYVE METHOD",
  paragraphs: [
    "The Thryve Method is een peak performance coachingtraject, speciaal ontwikkeld voor ambitieuze ondernemers die het maximale uit zichzelf en hun onderneming willen halen.",
    "De methode combineert cutting-edge biohacking technieken met wetenschappelijk onderbouwde leefstijlinterventies om focus, productiviteit en vitaliteit naar een next level te tillen."
  ],
  bullets: [
    { text: "Meer focus, minder afleiding", icon: Target },
    { text: "Hogere productiviteit", icon: Zap },
    { text: "Sneller herstel & betere slaap", icon: Moon },
    { text: "Duurzame energie", icon: Dumbbell },
    { text: "Stressmanagement", icon: Brain }
  ]
};

export const CLIENT_STORIES = [
  {
    name: "Philip Thompson",
    title: "PHILIP'S SUCCES",
    desc: "Philip wilde vet verliezen en spiermassa opbouwen. Met vastberadenheid en een solide plan heeft hij opmerkelijke resultaten behaald.",
    before: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop",
    active: false
  },
  {
    name: "Jack Smith",
    title: "JACK'S TRANSFORMATIE",
    desc: "Jack streefde naar een gespierd en strak lichaam. Door toewijding en hard werken heeft hij dit werkelijkheid gemaakt.",
    before: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop",
    active: true
  },
  {
    name: "Anna Taylor",
    title: "ANNA'S DROOMFYSIEK",
    desc: "Een jaar geleden kwam Anna bij mij met het doel om tegelijkertijd vet te verliezen en spiermassa op te bouwen.",
    before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583465539801-bf10f51931a3?q=80&w=500&auto=format&fit=crop",
    active: false
  }
];

export const TESTIMONIALS = [
  {
    name: "Mark de Vries",
    role: "CEO TechStartup",
    text: "Sinds ik met Iven werk, is mijn focus en energielevel enorm gestegen. Ik kan veel meer aan zonder me opgebrand te voelen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Sarah Jansen",
    role: "Marketing Director",
    text: "De combinatie van training en biohacking heeft mijn slaapkwaliteit en dagelijkse productiviteit drastisch verbeterd.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Thomas Bakker",
    role: "Ondernemer",
    text: "Iven begrijpt precies wat een ondernemer nodig heeft. Geen standaard schema's, maar maatwerk dat echt werkt.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Lisa van Dijk",
    role: "Creative Lead",
    text: "Ik voel me fitter en scherper dan ooit. Het programma is uitdagend maar perfect in te passen in een drukke agenda.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
  }
];

export const FAQS = [
  { q: "Wat maakt The Thryve Method anders dan een standaard personal trainer?", a: "Waar een personal trainer stopt bij de gymdeur, begint The Thryve Method. We kijken holistisch naar jouw leven als ondernemer. Door training, voeding, slaap en stressmanagement te integreren met cutting-edge biohacking, implementeren we systemen die jouw absolute peak performance ontsluiten in zowel business als privé." },
  { q: "Hoeveel tijd kost dit traject per week?", a: "Tijd is je meest kostbare bezit. Daarom is de methode volledig ontworpen voor drukke agenda's. In plaats van tijd te kósten, levert het juist tijd óp. Door je energie, slaap en mentale helderheid te optimaliseren, win je wekelijks uren aan productiviteit en onverstoorbare focus terug." },
  { q: "Wat is de toegevoegde waarde van jouw achtergrond als fysiotherapeut?", a: "Met mijn klinische expertise analyseer ik jouw biomechanica en herstelvermogen op microniveau. Dat betekent trainen zonder blessures, slimme stressregulatie en een onverwoestbaar fundament. We bouwen een fysiek pantser dat bestand is tegen de extreme druk van het ondernemerschap." },
  { q: "Welke resultaten kan ik verwachten van dit traject?", a: "Verwacht geen incrementele verbetering, maar een complete transformatie. Je zult ervaren wat het is om te domineren met onuitputtelijke energie, vlijmscherpe focus en een fysiek waar je trots op bent. Het is een duurzame upgrade van jouw operating system, waardoor je doelen sneller en met meer overtuiging bereikt." }
];
