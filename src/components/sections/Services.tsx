import { motion } from 'motion/react';
import { Check, Monitor, User } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-32 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/images/services.webp" 
          alt="Donkere sportschool met gewichten voor peak performance training"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-thryve-dark/90"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Services</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">OPTIMISEER JE<br/>LICHAAM & GEEST!</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
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
