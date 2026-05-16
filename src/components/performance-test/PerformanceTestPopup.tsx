import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const PerformanceTestPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const shown = localStorage.getItem('performance_popup_shown');
      if (!shown) {
        setIsVisible(true);
        setHasBeenShown(true);
        localStorage.setItem('performance_popup_shown', 'true');
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleStartTest = () => {
    setIsVisible(false);
    navigate('/performance-test');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center md:items-center p-6 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="bg-thryve-dark border border-thryve-accent/30 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient background effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-thryve-accent/10 rounded-full blur-3xl group-hover:bg-thryve-accent/20 transition-colors duration-700"></div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-thryve-cream/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-thryve-accent/20 flex items-center justify-center text-thryve-accent">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl m-0 leading-tight">Peak Performance <span className="text-thryve-accent">Test</span></h3>
              </div>
            </div>

            <p className="text-thryve-cream/70 text-sm md:text-base mb-8 leading-relaxed">
              Ben je een ambitieuze ondernemer maar voel je dat er meer in de tank zit? Test binnen 3 minuten je energie, focus en fysieke belastbaarheid.
            </p>

            <div className="flex flex-col gap-3">
              <Button onClick={handleStartTest} size="md" className="w-full">
                Doe de gratis test <ChevronRight size={20} strokeWidth={3} className="text-thryve-accent" />
              </Button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-xs text-thryve-cream/40 hover:text-thryve-accent transition-colors uppercase tracking-widest font-semibold py-2"
              >
                Nee bedankt, ik ga liever direct door
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-thryve-dark bg-thryve-card overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-thryve-cream/40 font-medium italic">
                Al 240+ ondernemers gingen je voor deze maand.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
