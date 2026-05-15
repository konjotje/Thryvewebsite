import { motion } from 'motion/react';
import { Target, Zap, Moon, Dumbbell, Brain } from 'lucide-react';

export const ThryveMethod = () => {
  const bullets = [
    { text: "Meer focus, minder afleiding", icon: Target },
    { text: "Hogere productiviteit", icon: Zap },
    { text: "Sneller herstel & betere slaap", icon: Moon },
    { text: "Duurzame energie", icon: Dumbbell },
    { text: "Stressmanagement", icon: Brain }
  ];

  return (
    <section id="method" className="py-16 md:py-32 bg-thryve-dark">
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
                src="https://i.imgur.com/Nz2Hev1.jpeg" 
                alt="Training method" 
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white">THE THRYVE METHOD</h2>
            <p className="text-sm text-thryve-cream/80 mb-6 leading-relaxed">
              The Thryve Method is een peak performance coachingtraject, speciaal ontwikkeld voor ambitieuze ondernemers die het maximale uit zichzelf en hun onderneming willen halen.
            </p>
            <p className="text-sm text-thryve-cream/80 mb-10 leading-relaxed">
              De methode combineert cutting-edge biohacking technieken met wetenschappelijk onderbouwde leefstijlinterventies om focus, productiviteit en vitaliteit naar een next level te tillen.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, i) => {
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
