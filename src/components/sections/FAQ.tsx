import { useState } from 'react';
import { Card } from '../ui/Card';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../../constants/content';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0 }}
        className="max-w-2xl mx-auto px-6"
      >
        <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4 text-center">FAQ</div>
        <h2 className="text-center mb-10">VEELGESTELDE VRAGEN</h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <Card key={i} className="overflow-hidden" innerClassName="p-3 md:p-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex justify-between items-center group"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm font-normal text-white normal-case group-hover:text-thryve-accent transition-colors">{faq.q}</span>
                <span className="text-thryve-accent text-lg">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                   <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 text-xs text-thryve-cream/70">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
