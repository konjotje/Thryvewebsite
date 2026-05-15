import { useState } from 'react';
import { Card } from '../ui/Card';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Wat maakt The Thryve Method anders dan een standaard personal trainer?", a: "Wij richten ons specifiek op de behoeften van ondernemers: we bouwen systemen die werken onder hoge druk. Onze aanpak is gebaseerd op fysiologie, biohacking en lifestyle-optimalisatie, in plaats van alleen op fitness." },
    { q: "Hoeveel tijd kost dit traject per week?", a: "Het is ontworpen voor drukke ondernemers. We bouwen systemen die juist tijd besparen door je energie en focus te optimaliseren, in plaats van extra tijd te kosten." },
    { q: "Wat is de toegevoegde waarde van jouw achtergrond als fysiotherapeut?", a: "Dit stelt me in staat om verder te kijken dan alleen training. Ik analyseer biomechanica, herstel en stressregulatie om een lichaam te bouwen dat duurzaam hoge prestaties kan leveren." },
    { q: "Welke resultaten kan ik verwachten van dit traject?", a: "Je kunt rekenen op een significante toename in dagelijkse energie, scherpere mentale focus, beter herstel en een fysiek sterkere basis om je ambities te ondersteunen." }
  ];
  return (
    <section id="faq" className="py-12 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4 text-center">FAQ</div>
        <h2 className="text-3xl md:text-4xl text-center mb-10 text-white">VEELGESTELDE VRAGEN</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-0 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-3 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-normal text-white normal-case">{faq.q}</span>
                <span className="text-thryve-accent text-lg">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-xs text-thryve-cream/70 border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
