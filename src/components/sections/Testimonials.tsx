import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { TESTIMONIALS } from '../../constants/content';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-thryve-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0 }}
          className="text-center mb-12"
        >
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Reviews</div>
          <h2 className="text-4xl md:text-5xl text-white">WAT KLANTEN ZEGGEN</h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pt-4 pb-8 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:gap-6 md:pt-0 md:pb-0 hide-scrollbar items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 flex flex-col min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center relative h-full shadow-none">
                <p className="text-thryve-cream/80 text-sm leading-relaxed mb-8 flex-grow italic">"{t.text}"</p>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-thryve-accent">{t.role}</p>
                  </div>
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover transition-transform duration-500 hover:scale-125" referrerPolicy="no-referrer" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
