import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../../constants/content';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
      {/* Fixed background accent to replace Card glow, positioned at the top so it doesn't move on toggle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none mt-20"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0 }}
        className="max-w-3xl mx-auto px-6 relative z-10"
      >
        <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4 text-center">FAQ</div>
        <h2 className="text-center mb-12">VEELGESTELDE VRAGEN</h2>
        
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/10 rounded-2xl bg-thryve-card/80 backdrop-blur-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-colors hover:border-white/20"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex justify-between items-center"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm md:text-base font-heading font-normal text-white normal-case pr-6 leading-snug">
                  {faq.q}
                </span>
                <span className="text-thryve-accent flex-shrink-0 bg-white/5 p-2 rounded-full">
                  {openIndex === i ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                   <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-sm md:text-base text-thryve-cream/80 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
