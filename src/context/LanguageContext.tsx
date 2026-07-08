import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'NL' | 'ENG';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  NL: {
    // Navbar / Nav
    'nav.method': 'The Method',
    'nav.stories': 'Stories',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.audit': 'Performance Audit',

    // StructureAndAudit
    'audit.subtitle': 'PEAK PERFORMANCE COACHING',
    'audit.title1': 'Geen disciplineprobleem.',
    'audit.title2': 'Een structuurprobleem.',
    'audit.box_subtitle': 'Performance Audit',
    'audit.box_title': 'JOUW PERSOONLIJKE PERFORMANCE-DIAGNOSE.',
    'audit.box_desc': 'Een complete analyse van je prestaties op zeven pijlers. Je archetype, je verborgen energielekken, en een protocol dat je deze week direct kunt toepassen.',
    'audit.box_cta': 'Gratis Audit',

    // ClientStories
    'stories.badge': 'RESULTATEN',
    'stories.title': 'Meer dan een sterker lichaam',
    'stories.desc': 'Echte resultaten van klanten die hun lichaam, energie en mindset op orde kregen.',
    'stories.before': 'Before',
    'stories.after': 'After',

    // Testimonials
    'testimonials.badge': 'Reviews',
    'testimonials.title': 'WAT KLANTEN ZEGGEN',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'VEELGESTELDE VRAGEN',

    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'KLAAR OM TE\nSTARTEN?',
    'contact.desc': 'Plan een gratis en vrijblijvende kennismaking. We bespreken je doelen, brengen je grootste obstakels in kaart en je ontdekt hoe The Thryve Method je verder kan helpen.',

    // Footer
    'footer.desc': 'Premium online peak performance coaching voor mensen die het beste uit zichzelf willen halen. Meer energie, focus en rust, met een sterker lichaam en een helderder hoofd.',
    'footer.nav_title': 'Navigatie',
    'footer.over_mij': 'Over mij',
    'footer.nederland': 'Nederland',
    'footer.kvk': 'KVK:',
    'footer.rechten': 'The Thryve Method. Alle rechten voorbehouden.',

    // PerformanceAuditPage
    'audit_page.prev': 'Vorige',
    'audit_page.start_title': 'Performance \nAudit',
    'audit_page.start_desc': 'Ontdek waar jouw systeem lekt en wat je blueprint is om fysieke én cognitieve overmacht op te bouwen. Geschatte invultijd: 6 minuten.',
    'audit_page.start_btn': 'Start de Audit',
    'audit_page.multi_desc': 'Selecteer de opties die van toepassing zijn (Max {maxAnswers}).',
    'audit_page.next_btn': 'Volgende Vraag',
    'audit_page.complete_title': 'De audit is voltooid.',
    'audit_page.complete_desc': 'Naar welk e-mailadres mogen we je gepersonaliseerde rapport sturen?',
    'audit_page.input_firstname': 'Voornaam *',
    'audit_page.input_email': 'E-mailadres *',
    'audit_page.input_phone': 'Telefoonnummer (Optioneel)',
    'audit_page.loading': 'Rapport genereren...',
    'audit_page.submit_btn': 'Verstuur Mijn Blueprint',
    'audit_page.success_title': 'Je bent binnen',
    'audit_page.success_desc': 'Je Blueprint is onderweg naar {email}. Zorg dat je hem niet mist (check evt. je spambox).',
    'audit_page.success_cta_title': 'Plan je Performance Call',
    'audit_page.success_cta_desc': 'Je hebt aangegeven open te staan voor gepersonaliseerde begeleiding. In deze gratis call deconstrueren we je knelpunten direct.',
    'audit_page.success_cta_btn': 'Plan Direct In',
    'audit_page.back_home': 'Terug naar Home',
    'audit_page.err_generic': 'Er is iets misgegaan. Probeer het opnieuw.',
    'audit_page.err_pdf': 'Er was een probleem met het genereren van de PDF.',

    // PDF specific strings
    'pdf.audit_title': 'Jouw Performance Audit',
    'pdf.diagnosis_header': 'De Diagnose',
    'pdf.level_prefix': 'Je zit in:',
    'pdf.disclaimer': '* Dit is een indicatie op basis van de ingevulde The Thryve Method Performance Audit. Echte peak performance begint bij het dichten van onzichtbare lekkages in je systeem.',
    'pdf.footer': 'The Thryve Method | Performance Audit',
    'pdf.pillar_header': 'Gedetailleerde Pijler Status',
    'pdf.archetype_header': 'Jouw Archetype',
    'pdf.archetype_problem': 'Kernprobleem',
    'pdf.archetype_action_header': 'Eén Ding Voor Deze Week',
    'pdf.archetype_footer_disclaimer': 'Dit is 1 van de 15+ protocollen die we jouw archetype laten installeren.',
    'pdf.comparison_header': 'Nu vs. Over 12 Weken',
    'pdf.col_pillar': 'Pijler',
    'pdf.col_now': 'Nu',
    'pdf.col_future': 'Over 12 Weken',
    'pdf.focus': 'Focus',
    'pdf.focus_now': 'Afgeleid, sprongen',
    'pdf.focus_future': '6 uur deep work direct',
    'pdf.stress': 'Stress',
    'pdf.stress_now': 'Hoofd staat altijd aan',
    'pdf.stress_future': 'Mentale rust, ook in weekend',
    'pdf.energy': 'Energie',
    'pdf.energy_now': 'Moe wakker, middagdip',
    'pdf.energy_future': 'Stabiele energie de hele dag',
    'pdf.body': 'Lichaam',
    'pdf.body_now': 'Slecht herstel, geen progressie',
    'pdf.body_future': 'Sterker, strakker, volledig hersteld',
    'pdf.what_we_do': 'Wat The Thryve Method Doet',
    'pdf.what_we_do_desc': 'Dit is geen fitness coaching. Dit is performance architecture.'
  },
  ENG: {
    // Navbar / Nav
    'nav.method': 'The Method',
    'nav.stories': 'Stories',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.audit': 'Performance Audit',

    // StructureAndAudit
    'audit.subtitle': 'PEAK PERFORMANCE COACHING',
    'audit.title1': 'Not a discipline problem.',
    'audit.title2': 'A structure problem.',
    'audit.box_subtitle': 'Performance Audit',
    'audit.box_title': 'YOUR PERSONAL PERFORMANCE DIAGNOSIS.',
    'audit.box_desc': 'A complete analysis of your performance across seven pillars. Your archetype, your hidden energy leaks, and a protocol you can apply immediately this week.',
    'audit.box_cta': 'Free Audit',

    // ClientStories
    'stories.badge': 'RESULTS',
    'stories.title': 'More than a stronger body',
    'stories.desc': 'Real results from clients who got their body, energy, and mindset in order.',
    'stories.before': 'Before',
    'stories.after': 'After',

    // Testimonials
    'testimonials.badge': 'Reviews',
    'testimonials.title': 'WHAT CLIENTS SAY',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'FREQUENTLY ASKED QUESTIONS',

    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'READY TO\nSTART?',
    'contact.desc': 'Schedule a free, no-obligation introduction. We will discuss your goals, map out your biggest obstacles, and explore how The Thryve Method can help you move forward.',

    // Footer
    'footer.desc': 'Premium online peak performance coaching for individuals who want to get the best out of themselves. More energy, focus, and calm, with a stronger body and a clearer mind.',
    'footer.nav_title': 'Navigation',
    'footer.over_mij': 'About me',
    'footer.nederland': 'Netherlands',
    'footer.kvk': 'CoC:',
    'footer.rechten': 'The Thryve Method. All rights reserved.',

    // PerformanceAuditPage
    'audit_page.prev': 'Previous',
    'audit_page.start_title': 'Performance \nAudit',
    'audit_page.start_desc': 'Discover where your system leaks and what your blueprint is to build physical and cognitive dominance. Estimated completion time: 6 minutes.',
    'audit_page.start_btn': 'Start the Audit',
    'audit_page.multi_desc': 'Select the options that apply (Max {maxAnswers}).',
    'audit_page.next_btn': 'Next Question',
    'audit_page.complete_title': 'The audit is complete.',
    'audit_page.complete_desc': 'To which email address should we send your personalized report?',
    'audit_page.input_firstname': 'First Name *',
    'audit_page.input_email': 'Email Address *',
    'audit_page.input_phone': 'Phone Number (Optional)',
    'audit_page.loading': 'Generating Report...',
    'audit_page.submit_btn': 'Send My Blueprint',
    'audit_page.success_title': 'You are in',
    'audit_page.success_desc': 'Your Blueprint is on its way to {email}. Make sure not to miss it (check your spam folder if needed).',
    'audit_page.success_cta_title': 'Schedule your Performance Call',
    'audit_page.success_cta_desc': 'You have indicated you are open to personalized guidance. In this free call, we will deconstruct your bottlenecks directly.',
    'audit_page.success_cta_btn': 'Schedule Now',
    'audit_page.back_home': 'Back to Home',
    'audit_page.err_generic': 'Something went wrong. Please try again.',
    'audit_page.err_pdf': 'There was a problem generating the PDF.',

    // PDF specific strings
    'pdf.audit_title': 'Your Performance Audit',
    'pdf.diagnosis_header': 'The Diagnosis',
    'pdf.level_prefix': 'You are in:',
    'pdf.disclaimer': '* This is an indication based on the completed The Thryve Method Performance Audit. Real peak performance starts with closing invisible leaks in your system.',
    'pdf.footer': 'The Thryve Method | Performance Audit',
    'pdf.pillar_header': 'Detailed Pillar Status',
    'pdf.archetype_header': 'Your Archetype',
    'pdf.archetype_problem': 'Core Problem',
    'pdf.archetype_action_header': 'One Thing For This Week',
    'pdf.archetype_footer_disclaimer': 'This is 1 of the 15+ protocols we install for your archetype.',
    'pdf.comparison_header': 'Now vs. 12 Weeks from Now',
    'pdf.col_pillar': 'Pillar',
    'pdf.col_now': 'Now',
    'pdf.col_future': '12 Weeks from Now',
    'pdf.focus': 'Focus',
    'pdf.focus_now': 'Distracted, jumping',
    'pdf.focus_future': '6 hours of instant deep work',
    'pdf.stress': 'Stress',
    'pdf.stress_now': 'Mind is always on',
    'pdf.stress_future': 'Mental calm, even on weekends',
    'pdf.energy': 'Energy',
    'pdf.energy_now': 'Wake up tired, afternoon dip',
    'pdf.energy_future': 'Stable energy all day long',
    'pdf.body': 'Body',
    'pdf.body_now': 'Poor recovery, no progression',
    'pdf.body_future': 'Stronger, leaner, fully recovered',
    'pdf.what_we_do': 'What The Thryve Method Does',
    'pdf.what_we_do_desc': 'This is not fitness coaching. This is performance architecture.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ENG' || saved === 'NL') ? saved : 'NL';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, variables?: Record<string, string | number>): string => {
    const dict = UI_TRANSLATIONS[language];
    let template = dict[key] || UI_TRANSLATIONS['NL'][key] || key;
    
    if (variables) {
      Object.entries(variables).forEach(([vKey, vVal]) => {
        template = template.replace(new RegExp(`{${vKey}}`, 'g'), String(vVal));
      });
    }
    
    return template;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
