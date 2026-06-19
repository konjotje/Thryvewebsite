import { motion } from 'motion/react';
import { FEATURES_ITEMS } from '../../constants/content';

export const Features = () => {
  return (
    <section className="py-12 md:py-24 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {FEATURES_ITEMS.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.0, delay: i * 0.15 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-thryve-accent transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white text-lg font-bold">{f.title}</h3>
                </div>
                <p className="text-[14px] text-thryve-cream/60 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
