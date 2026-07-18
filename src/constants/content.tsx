import { Target, Moon, Dumbbell, Brain, Activity, Shield, Sliders, Zap } from 'lucide-react';
import React from 'react';

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface FeatureItem {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

export interface ThryveMethodContent {
  title: string;
  paragraphs: string[];
  bullets: Array<{ text: string; icon: React.ComponentType<any> }>;
}

export interface ClientStory {
  name: string;
  title: string;
  desc: string;
  image: string;
  active: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const HERO_CONTENT_BY_LANG: Record<'NL' | 'ENG', HeroContent> = {
  NL: {
    title: "GROEI ONDER DRUK",
    subtitle: "PEAK PERFORMANCE COACHING",
    description: "Wetenschappelijk onderbouwde coaching voor ambitieuze ondernemers die hun energie, focus en prestaties naar een hoger niveau willen tillen.",
    cta: "Performance audit"
  },
  ENG: {
    title: "THRIVE UNDER PRESSURE",
    subtitle: "PEAK PERFORMANCE COACHING",
    description: "Science-backed coaching for ambitious entrepreneurs who want to take their energy, focus, and performance to the next level.",
    cta: "Performance audit"
  }
};

export const FEATURES_ITEMS_BY_LANG: Record<'NL' | 'ENG', FeatureItem[]> = {
  NL: [
    { icon: Activity, title: "Lichaam én geest", desc: "Eén aanpak op training, herstel, slaap, focus en mindset. Geen losse onderdelen, maar een compleet systeem." },
    { icon: Shield, title: "Vakmanschap", desc: "Fysiotherapeut en peak performance coach. Ik begrijp het lichaam tot in detail en vertaal dat naar wat voor jóu werkt." },
    { icon: Sliders, title: "100% Persoonlijk", desc: "Geen standaardplan. We kijken naar jouw leven, jouw lijf en jouw doelen en bouwen daaromheen een aanpak die past." }
  ],
  ENG: [
    { icon: Activity, title: "Body and Mind", desc: "A single approach to training, recovery, sleep, focus, and mindset. No detached components, but a complete system." },
    { icon: Shield, title: "Expertise", desc: "Physiotherapist and peak performance coach. I understand the body in detail and translate that into what works for you." },
    { icon: Sliders, title: "100% Personalized", desc: "No cookie-cutter plan. We look at your life, your body, and your goals, and build a tailored approach around them." }
  ]
};

export const THRYVE_METHOD_CONTENT_BY_LANG: Record<'NL' | 'ENG', ThryveMethodContent> = {
  NL: {
    title: "THE THRYVE METHOD",
    paragraphs: [
      "Ik ben Iven van Stekelenburg, fysiotherapeut en peak performance coach. Met ruim acht jaar ervaring in training, herstel en leefstijl help ik mensen die veel van zichzelf vragen om hun lichaam én geest op hun best te krijgen.",
      "The Thryve Method kijkt naar het hele plaatje: training, herstel, slaap, voeding, focus en mindset. Geen losse onderdelen of extreme regimes, maar een complete aanpak die past in jouw leven. Geen quick fixes, maar systemen die werken onder druk en die je vol kunt houden."
    ],
    bullets: [
      { text: "Meer focus, minder afleiding", icon: Target },
      { text: "Hogere productiviteit", icon: Zap },
      { text: "Sneller herstel & betere slaap", icon: Moon },
      { text: "Duurzame energie", icon: Dumbbell },
      { text: "Stressmanagement", icon: Brain }
    ]
  },
  ENG: {
    title: "THE THRYVE METHOD",
    paragraphs: [
      "I am Iven van Stekelenburg, physiotherapist and peak performance coach. With over eight years of experience in training, recovery, and lifestyle, I help high-demand individuals get both their body and mind in peak condition.",
      "The Thryve Method looks at the complete picture: training, recovery, sleep, nutrition, focus, and mindset. No isolated components or extreme regimes, but a complete approach that fits your life. No quick fixes, but systems that work under pressure and can be sustained."
    ],
    bullets: [
      { text: "More focus, less distraction", icon: Target },
      { text: "Higher productivity", icon: Zap },
      { text: "Faster recovery & better sleep", icon: Moon },
      { text: "Sustainable energy", icon: Dumbbell },
      { text: "Stress management", icon: Brain }
    ]
  }
};

export const CLIENT_STORIES_BY_LANG: Record<'NL' | 'ENG', ClientStory[]> = {
  NL: [
    {
      name: "Dexter",
      title: "10 KG LICHTER, SCHERPER OP HET WERK",
      desc: "In vier maanden naar de beste vorm van zijn leven. Niet alleen fysiek, ook in structuur, focus en productiviteit, met direct positief effect op zijn bedrijf.",
      image: "/images/Dexter.png",
      active: false
    },
    {
      name: "Geraldine",
      title: "STERKER, IN BALANS, MEER ENERGIE",
      desc: "Door een gezondere relatie met voeding kreeg ze haar energie, hormonen en cyclus weer in balans. En ze voelt zich sterker en meer verbonden met haar lichaam dan ooit.",
      image: "/images/geraldine.png",
      active: true
    },
    {
      name: "Sven",
      title: "NA JAREN ZOEKEN, EINDELIJK STRUCTUUR",
      desc: "Na jaren worstelen met voeding en discipline heeft hij eindelijk de juiste structuur gevonden. In 15 weken naar zijn droomlichaam, en een mindset die ook zijn werk scherper maakte.",
      image: "/images/Sven.png",
      active: false
    }
  ],
  ENG: [
    {
      name: "Dexter",
      title: "10 KG LIGHTER, SHARPER AT WORK",
      desc: "In four months to the best shape of his life. Not just physically, but also in structure, focus, and productivity, with an immediate positive impact on his business.",
      image: "/images/Dexter.png",
      active: false
    },
    {
      name: "Geraldine",
      title: "STRONGER, IN BALANCE, MORE ENERGY",
      desc: "Through a healthier relationship with nutrition, she restored balance to her energy, hormones, and cycle. And she feels stronger and more connected to her body than ever.",
      image: "/images/geraldine.png",
      active: true
    },
    {
      name: "Sven",
      title: "AFTER YEARS OF SEARCHING, FINALLY STRUCTURE",
      desc: "After years of struggling with nutrition and discipline he finally found the right structure. In 15 weeks to his dream body, and a mindset that also sharpened his work.",
      image: "/images/Sven.png",
      active: false
    }
  ]
};

export const TESTIMONIALS_BY_LANG: Record<'NL' | 'ENG', Testimonial[]> = {
  NL: [
    {
      name: "Aymen",
      role: "Ondernemer",
      text: "De samenwerking met de coach heb ik als enorm fijn en professioneel ervaren. Wat voor mij echt het verschil maakte, was de persoonlijke aanpak. Alles werd afgestemd op mijn eigen doelen, levensstijl en behoeften. Daarnaast was het super prettig dat ik gedurende de dag altijd vragen kon stellen via WhatsApp. Het traject heeft mij uiteindelijk veel meer opgeleverd dan alleen fysieke resultaten. Ik merk dat ik meer energie heb, productiever ben en beter in mijn vel zit.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Morris",
      role: "Klant",
      text: "Mijn grootste uitdaging tijdens dit traject was mezelf tegenkomen, vooral op het gebied van gezonde voeding, iets waar ik voorheen totaal niet mee bezig was. De samenwerking met Iven was uitstekend: ik kon alles vragen en kreeg altijd duidelijke uitleg en begeleiding. Het traject heeft me lichamelijk veel gebracht, maar ook mentaal heb ik veel geleerd. Ik heb waardevolle inzichten gekregen over onder andere rust, discipline en voeding.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Dexter",
      role: "E-commerceondernemer",
      text: "Ik werk inmiddels enkele maanden samen met Iven dan ook grote resultaten geboekt, zowel fysiek als in mijn bedrijf. In slechts vier maanden ben ik ruim 10 kg afgevallen, ben ik in de beste vorm van mijn leven gekomen en ben ik mentaal veel sterker geworden. Wat Iven onderscheidt, is zijn persoonlijke betrokkenheid. Hij denkt echt met je mee, blijft betrokken en ondersteunt je gedurende het hele traject.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Joshua",
      role: "E-commerceondernemer",
      text: "Voordat ik met Iven begon, liep ik vast op iets dat ik eerst niet eens als het echte probleem zag: mijn slaap en mijn dagstructuur. Ik dacht dat ik gewoon harder moest werken, terwijl het probleem onder de oppervlakte zat. De samenwerking met Iven was direct en praktisch. Hij hielp me niet met vage theorie, maar met concrete bewustwording: waar mijn energie heen lekte, hoe mijn ritme in elkaar zat.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Geraldine",
      role: "UGC-creator",
      text: "Ik ben echt ontzettend blij met de vooruitgang die ik heb geboekt met mijn traject bij The Thryve Method. Wat Iven echt anders maakt dan andere coaches, is hoe persoonlijk en ondersteunend zijn aanpak is. Hij luistert oprecht, denkt met je mee en is er op de momenten dat je begeleiding nodig hebt. Zijn kennis gaat veel verder dan alleen trainingen; hij heeft me geholpen om herstel, slaap en productiviteit te begrijpen.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Sven",
      role: "E-commerceondernemer",
      text: "Voordat ik met het programma begon, was mijn grootste uitdaging mijn voeding. Ik knew wat ik wilde: mijn droomlichaam, maar de discipline en structuur rondom eten ontbraken. Ik had er jarenlang naar gestreefd, maar kwam er alleen niet uit. De samenwerking met Iven was uitstekend. Hij is streng waar nodig, maar denkt altijd met je mee en weet je te motiveren op de momenten dat het écht zwaar wordt.",
      image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=100&auto=format&fit=crop"
    }
  ],
  ENG: [
    {
      name: "Aymen",
      role: "Entrepreneur",
      text: "I experienced the collaboration with the coach as extremely pleasant and professional. What really made the difference for me was the personal approach. Everything was tailored to my own goals, lifestyle, and needs. In addition, it was wonderful that I could always ask questions via WhatsApp throughout the day. Ultimately, the program has given me much more than just physical results. I notice that I have more energy, am more productive, and feel better in my skin.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Morris",
      role: "Client",
      text: "My biggest challenge during this program was confronting my own habits, especially regarding healthy nutrition—something I was previously completely unconcerned with. The collaboration with Iven was outstanding: I could ask anything and always received clear explanations and guidance. The trajectory brought me a lot physically, but I also learned a great deal mentally. I gained valuable insights into rest, discipline, and nutrition, among other things.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Dexter",
      role: "E-commerce entrepreneur",
      text: "I have been working with Iven for a few months now and have achieved great results, both physically and in my business. In just four months, I have lost over 10 kg, reached the best shape of my life, and become mentally much stronger. What sets Iven apart is his personal commitment. He truly thinks along with you, stays engaged, and supports you throughout the entire journey.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Joshua",
      role: "E-commerce entrepreneur",
      text: "Before starting with Iven, I was stuck on something I didn't even recognize as the real problem at first: my sleep and my daily structure. I thought I just needed to work harder, while the problem lay beneath the surface. The collaboration with Iven was direct and practical. He didn't help me with vague theory, but with concrete awareness of where my energy was leaking and how my rhythm was structured.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Geraldine",
      role: "UGC creator",
      text: "I am really incredibly happy with the progress I have made through my program with The Thryve Method. What truly sets Iven apart from other coaches is how personal and supportive his approach is. He genuinely listens, thinks along with you, and is there whenever you need guidance. His knowledge extends far beyond just training; he has helped me understand recovery, sleep, and productivity.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Sven",
      role: "E-commerce entrepreneur",
      text: "Before starting the program, my biggest challenge was nutrition. I knew what I wanted—my dream body—but lacked the discipline and structure around eating. I had strived for it for years but couldn't do it alone. The collaboration with Iven was excellent. He is strict when necessary, but always thinks along with you and knows how to motivate you at the moments when it gets really tough.",
      image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=100&auto=format&fit=crop"
    }
  ]
};

export const FAQS_BY_LANG: Record<'NL' | 'ENG', FAQItem[]> = {
  NL: [
    {
      q: "Wat maakt The Thryve Method anders dan een personal trainer of life coach?",
      a: "Een personal trainer kijkt naar je training, een life coach naar je mindset. Ik kijk naar het geheel: training, herstel, slaap, voeding, focus en mentale rust. Die dingen beïnvloeden elkaar voortdurend. Als fysiotherapeut begrijp ik hoe je lichaam echt werkt, en als coach vertaal ik dat naar een aanpak die past bij jouw leven. Geen los onderdeel, maar een compleet systeem."
    },
    {
      q: "Voor wie is dit traject, en voor wie niet?",
      a: "Dit is voor mensen die veel van zichzelf vragen en op hun best willen presteren. Het gaat niet om je beroep, maar om je instelling. Wat je ook doet: als je bereid bent verantwoordelijkheid te nemen voor je energie, gezondheid en prestaties, dan past dit. Zoek je een snelle truc of een tijdelijke oplossing, dan ben ik niet de juiste persoon."
    },
    {
      q: "Werkt dit ook als ik geen fanatieke sporter ben of weinig ervaring heb?",
      a: "Zeker. Ik werk niet met extreme regimes en je hoeft geen ervaren sporter te zijn. We beginnen waar jij staat en bouwen rustig op naar iets dat je vol kunt houden. Het doel is niet om jou in mijn leefstijl te persen, maar om een aanpak te vinden die in jouw leven past."
    },
    {
      q: "Hoeveel tijd kost dit traject per week?",
      a: "Reken op een paar uur per week voor het voorbereiden van je voeding, plus de training die je doet. Dat klinkt als tijd die je investeert, maar je verdient het ruimschoots terug. Door betere focus, meer energie en scherpere besluitvorming haal je veel meer uit de uren die je werkt. De meeste mensen krijgen netto juist tijd terug, omdat ze productiever en helderder worden."
    },
    {
      q: "Wat heb ik aan jouw achtergrond als fysiotherapeut?",
      a: "Veel. Ik kijk verder dan trainen alleen: naar hoe je lichaam belast wordt, hoe je herstelt en waar je klachten of energieverlies vandaan komen. Daardoor voorkomen we blessures en overbelasting, en bouwen we een lichaam dat druk aankan in plaats van eronder bezwijkt."
    },
    {
      q: "Welke resultaten kan ik verwachten?",
      a: "Meer energie door de dag, scherpere focus, beter herstel dat leidt tot een diepere slaap, en een sterker, fitter lichaam. Maar bovenal het gevoel dat presteren je minder kost. Niet langer leven op wilskracht en cafeïne, maar op een lichaam en brein die je ambities dragen."
    },
    {
      q: "Hoe verloopt de begeleiding?",
      a: "Het traject is volledig online, zodat het past in elk schema en op elke locatie. Toch blijft de begeleiding persoonlijk en dichtbij. Je hebt elke maand een evaluatiecall waarin we je voortgang doornemen en bijsturen, en daartussen kun je me 24/7 bereiken via WhatsApp. Vragen, twijfels of een moment dat het even tegenzit: ik ben er als je me nodig hebt."
    }
  ],
  ENG: [
    {
      q: "What sets The Thryve Method apart from a personal trainer or a life coach?",
      a: "A personal trainer looks at your workouts, a life coach at your mindset. I look at the whole picture: training, recovery, sleep, nutrition, focus, and mental calm. These elements constantly influence one another. As a physiotherapist, I understand how your body truly works, and as a coach, I translate that into an approach that fits your life. No separate components, but a complete system."
    },
    {
      q: "Who is this program for, and who is it not for?",
      a: "This is for high-demand individuals who want to perform at their absolute best. It's not about your profession, but about your mindset. Whatever you do: if you are willing to take responsibility for your energy, health, and performance, then this fits. If you are looking for a quick trick or a temporary solution, I am not the right person."
    },
    {
      q: "Does this work if I'm not an avid athlete or have little experience?",
      a: "Absolutely. I don't work with extreme regimes, and you don't need to be an experienced athlete. We start wherever you are and build up gradually to something you can maintain. The goal is not to squeeze you into my lifestyle, but to find an approach that fits into yours."
    },
    {
      q: "How much time does this program take per week?",
      a: "Expect a few hours per week for food prep plus your workouts. It sounds like an investment of time, but you will earn it back manifold. Through improved focus, higher energy, and sharper decision-making, you get far more out of the hours you work. Most people actually get net time back because they become more productive and clear-minded."
    },
    {
      q: "How do I benefit from your background as a physiotherapist?",
      a: "A lot. I look beyond just working out: I look at how your body is loaded, how you recover, and where physical complaints or energy drops originate. As a result, we prevent injuries and overtraining, building a body that can handle pressure instead of breaking under it."
    },
    {
      q: "What results can I expect?",
      a: "More energy throughout the day, sharper focus, better recovery leading to deeper sleep, and a stronger, fitter body. But above all, the feeling that performing costs you less effort. No longer living on willpower and caffeine, but on a body and brain that sustain your ambitions."
    },
    {
      q: "How does the coaching work?",
      a: "The program is fully online, making it fit into any schedule and location. Yet, the support remains personal and close. You have a monthly evaluation call to review your progress and adjust, and in between, you can reach me 24/7 via WhatsApp. Questions, doubts, or a tough moment: I am there whenever you need me."
    }
  ]
};

// Backwards compatibility defaults
export const HERO_CONTENT = HERO_CONTENT_BY_LANG.NL;
export const FEATURES_ITEMS = FEATURES_ITEMS_BY_LANG.NL;
export const THRYVE_METHOD_CONTENT = THRYVE_METHOD_CONTENT_BY_LANG.NL;
export const CLIENT_STORIES = CLIENT_STORIES_BY_LANG.NL;
export const TESTIMONIALS = TESTIMONIALS_BY_LANG.NL;
export const FAQS = FAQS_BY_LANG.NL;
