import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { HERO_CONTENT } from '../../constants/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-thryve-dark">
      {/* Mobile background image */}
      <div className="absolute inset-0 lg:hidden group overflow-hidden">
        <img 
          src="/images/hero.webp" 
          alt="Iven van Stekelenburg - Peak Performance Coach" 
          className="w-full h-full object-cover image-fade-abstract transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-thryve-dark/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl pt-20 lg:pt-0"
        >
          <div className="text-thryve-accent text-sm font-semibold tracking-widest uppercase mb-3">
            {HERO_CONTENT.subtitle}
          </div>
          <h1 className="mb-4 text-white">
            {HERO_CONTENT.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <p className="text-sm text-thryve-cream/70 mb-6 max-w-md leading-relaxed">
            {HERO_CONTENT.description}
          </p>
          
          <Button onClick={() => window.location.href = '#stories'} className="font-heading">
            {HERO_CONTENT.cta} 
            <ChevronRight size={20} strokeWidth={3} className="text-thryve-accent group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Desktop image */}
        <div className="hidden lg:block relative h-[90vh] w-full">
          <div className="rounded-3xl overflow-hidden relative w-full h-full group">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="/images/hero.webp" 
              alt="Iven van Stekelenburg - Peak Performance Coach" 
              className="w-full h-full object-cover object-top image-fade-abstract transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-thryve-dark via-transparent to-thryve-dark pointer-events-none opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
