import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-32">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white">JOUW PARTNER IN<br/>PEAK PERFORMANCE</h2>
            <p className="text-thryve-cream/70 leading-relaxed mb-10 text-sm">
              Ik ben Iven van Stekelenburg, fysiotherapeut en peak performance coach. Met ruim 8 jaar ervaring in sport en krachttraining help ik ondernemers om hun lichaam en geest te optimaliseren voor duurzame groei. Geen quick fixes, maar systemen die werken onder druk.
            </p>
            <Button onClick={() => window.location.href = '#contact'}>
              Klaar voor?
              <div className="w-8 h-8 rounded-full bg-thryve-accent flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
