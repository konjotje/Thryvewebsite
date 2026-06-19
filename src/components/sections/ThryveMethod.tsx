import { motion } from 'motion/react';
import { Check, Monitor, User } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { THRYVE_METHOD_CONTENT } from '../../constants/content';

export const ThryveMethod = () => {
  return (
    <section id="method" className="py-16 md:py-24 bg-thryve-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full opacity-50 -z-10"></div>
              <img 
                src="/images/thryve-method.webp" 
                alt="Detail van gewicht in fitnessruimte voor The Thryve Method"
                className="w-full h-full object-cover image-fade-abstract transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-thryve-dark via-transparent to-thryve-dark pointer-events-none opacity-80"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">The Method</div>
            <h2 className="mb-8">{THRYVE_METHOD_CONTENT.title}</h2>
            {THRYVE_METHOD_CONTENT.paragraphs.map((p, i) => (
              <p key={i} className={`text-sm text-thryve-cream/80 leading-relaxed ${i === THRYVE_METHOD_CONTENT.paragraphs.length - 1 ? 'mb-10' : 'mb-6'}`}>
                {p}
              </p>
            ))}

            <ul className="space-y-4 font-heading font-bold not-italic">
              {THRYVE_METHOD_CONTENT.bullets.map((bullet, i) => {
                const Icon = bullet.icon;
                return (
                  <li key={i} className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-thryve-accent shrink-0" />
                    <span className="text-thryve-cream/90">{bullet.text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
