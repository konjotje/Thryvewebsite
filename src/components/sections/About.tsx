import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const About = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden relative aspect-[4/5] group">
              <img 
                src="/images/about.webp" 
                alt="Iven van Stekelenburg - Peak Performance Coach en Fysiotherapeut" 
                className="w-full h-full object-cover image-fade-abstract transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="534"
                height="668"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-thryve-dark via-transparent to-thryve-dark pointer-events-none opacity-80"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0 }}
          >
            <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Over Mij</div>
            <h2 className="mb-8">JOUW PARTNER IN<br/>PEAK PERFORMANCE</h2>
            <p className="text-thryve-cream/70 leading-relaxed mb-10 text-sm">
              Ik ben Iven van Stekelenburg, fysiotherapeut en peak performance coach. Met ruim 8 jaar ervaring in training, herstel en leefstijl help ik mensen die veel van zichzelf vragen om hun lichaam én geest op hun best te krijgen. Geen quick fixes en geen extreme regimes, maar systemen die werken onder druk en die je vol kunt houden.
            </p>
            <Button onClick={() => navigate('/#contact')}>
              Klaar voor?
              <ChevronRight size={20} strokeWidth={3} className="text-thryve-accent" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
