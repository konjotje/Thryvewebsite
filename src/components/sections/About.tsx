import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-thryve-dark min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-thryve-accent/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full opacity-50 -z-10"></div>
              <img 
                src="/images/about.webp" 
                alt="Iven van Stekelenburg" 
                className="w-full h-full object-cover image-fade-abstract transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-thryve-dark via-transparent to-thryve-dark pointer-events-none opacity-80"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-thryve-accent text-sm font-bold tracking-widest uppercase mb-4 block">
              Over Mij
            </span>
            <h2 className="mb-6">JOUW PARTNER IN<br/>PEAK PERFORMANCE</h2>
            <p className="text-thryve-cream/70 leading-relaxed mb-6 font-medium">
              Ik ben Iven van Stekelenburg, fysiotherapeut en peak performance coach. Met ruim 8 jaar ervaring in training, herstel en leefstijl help ik mensen die veel van zichzelf vragen om hun lichaam én geest op hun best te krijgen. Geen quick fixes en geen extreme regimes, maar systemen die werken onder druk en die je vol kunt houden.
            </p>
            <Button onClick={() => navigate('/#contact')}>
              Plan een kennismaking
              <ChevronRight size={20} className="text-thryve-title group-hover:translate-x-1 transition-transform inline-block ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
