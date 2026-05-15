import { motion } from 'motion/react';
import { Check, Monitor, User } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { THRYVE_METHOD_CONTENT } from '../../constants/content';

export const ThryveMethod = () => {
  return (
    <section id="method" className="py-16 md:py-32 bg-thryve-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white">{THRYVE_METHOD_CONTENT.title}</h2>
            {THRYVE_METHOD_CONTENT.paragraphs.map((p, i) => (
              <p key={i} className={`text-sm text-thryve-cream/80 leading-relaxed ${i === THRYVE_METHOD_CONTENT.paragraphs.length - 1 ? 'mb-10' : 'mb-6'}`}>
                {p}
              </p>
            ))}

            <ul className="space-y-4">
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

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full">
              <div className="flex items-center gap-4 mb-6">
                <Monitor className="w-8 h-8 text-thryve-accent" />
                <h3 className="text-2xl text-white">ONLINE COACHING</h3>
              </div>
              <p className="text-thryve-cream/60 text-sm leading-relaxed mb-8 flex-grow">
                Ideaal voor als je niet in de buurt woont of flexibiliteit wilt. Met online coaching werken we effectief samen om exceptionele resultaten te behalen.
              </p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <Check className="text-thryve-accent w-5 h-5" />
                  <span className="text-sm text-thryve-cream/90">Gepersonaliseerde Trainingsplannen</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-thryve-accent w-5 h-5" />
                  <span className="text-sm text-thryve-cream/90">Voedingsadvies & Biohacking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-thryve-accent w-5 h-5" />
                  <span className="text-sm text-thryve-cream/90">Toegang tot Selecte Community</span>
                </li>
              </ul>
              
              <Button className="w-full mt-auto" onClick={() => window.location.href = '#contact'}>
                Start vanaf €199/mnd
              </Button>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex"
          >
            <Card className="flex flex-col w-full">
              <div className="flex items-center gap-4 mb-6">
                <User className="w-8 h-8 text-thryve-accent" />
                <h3 className="text-2xl text-white">IN-PERSON COACHING</h3>
              </div>
              <p className="text-thryve-cream/60 text-sm leading-relaxed mb-8 flex-grow">
                Voor degene die de voorkeur geeft aan 1-op-1 begeleiding. We zorgen voor perfecte technieken gedurende workouts en directe bijsturing.
              </p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <Check className="text-thryve-accent w-5 h-5" />
                  <span className="text-sm text-thryve-cream/90">Alles van Online Coaching</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-thryve-accent w-5 h-5" />
                  <span className="text-sm text-thryve-cream/90">Directe Supervisie</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-thryve-accent w-5 h-5" />
                  <span className="text-sm text-thryve-cream/90">Optimale Techniek & Directe Feedback</span>
                </li>
              </ul>
              
              <Button className="w-full mt-auto" onClick={() => window.location.href = '#contact'}>
                Start vanaf €499/mnd
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
