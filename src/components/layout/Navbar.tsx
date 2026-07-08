import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <motion.nav 
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-thryve-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-4 sm:py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="relative z-50 flex items-center">
            <img src="/images/logoTTM.svg" alt="The Thryve Method" className="h-6 md:h-8 w-auto" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium font-heading text-thryve-cream">
            <Link to="/#method" className="hover:text-white transition-colors">{t('nav.method')}</Link>
            <Link to="/#stories" className="hover:text-white transition-colors">{t('nav.stories')}</Link>
            <Link to="/#testimonials" className="hover:text-white transition-colors">{t('nav.reviews')}</Link>
            <Link to="/#faq" className="hover:text-white transition-colors">{t('nav.faq')}</Link>
            <Link to="/#contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
            
            {/* Language Switcher (Desktop) */}
            <div className="flex items-center space-x-2 select-none font-mono text-xs tracking-wider">
              <button 
                onClick={() => setLanguage('NL')} 
                className={`transition-colors cursor-pointer py-1 ${language === 'NL' ? 'text-white font-semibold' : 'text-thryve-cream/40 hover:text-white'}`}
              >
                NL
              </button>
              <span className="text-white/10 font-sans">/</span>
              <button 
                onClick={() => setLanguage('ENG')} 
                className={`transition-colors cursor-pointer py-1 ${language === 'ENG' ? 'text-white font-semibold' : 'text-thryve-cream/40 hover:text-white'}`}
              >
                ENG
              </button>
            </div>

            <Button size="sm" onClick={() => navigate('/performance-audit')} className="pulsate-glow">
              {t('nav.audit')}
            </Button>
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            {/* Language Switcher (Mobile) */}
            <div className="flex items-center space-x-1.5 select-none font-mono text-[10px] tracking-wider relative z-50 mr-1">
              <button 
                onClick={() => setLanguage('NL')} 
                className={`transition-colors cursor-pointer py-1 ${language === 'NL' ? 'text-white font-semibold' : 'text-thryve-cream/40 hover:text-white'}`}
              >
                NL
              </button>
              <span className="text-white/10 font-sans">/</span>
              <button 
                onClick={() => setLanguage('ENG')} 
                className={`transition-colors cursor-pointer py-1 ${language === 'ENG' ? 'text-white font-semibold' : 'text-thryve-cream/40 hover:text-white'}`}
              >
                ENG
              </button>
            </div>

            <button 
              className="text-white relative z-50 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-thryve-dark/60 backdrop-blur-3xl lg:hidden flex flex-col justify-center px-8 sm:px-12 overflow-hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-thryve-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-thryve-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div 
              className="relative z-10 flex flex-col space-y-4 sm:space-y-6"
              onClick={(e) => e.stopPropagation()}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {[
                { name: t('nav.method'), path: '/#method' },
                { name: t('nav.stories'), path: '/#stories' },
                { name: t('nav.reviews'), path: '/#testimonials' },
                { name: t('nav.faq'), path: '/#faq' },
                { name: t('nav.contact'), path: '/#contact' },
                { name: t('nav.audit'), path: '/performance-audit' },
              ].map((item, i) => (
                <motion.button 
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.1 + (i * 0.08), 
                    duration: 0.6, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  onClick={() => handleMobileLinkClick(item.path)} 
                  className="group flex items-baseline text-4xl sm:text-7xl font-heading font-black text-white text-left transition-all duration-300 w-full"
                >
                  <span className="text-thryve-accent text-sm sm:text-lg font-mono mr-6 opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <span className="relative uppercase tracking-tighter group-hover:pl-4 transition-all duration-300 group-hover:text-thryve-accent">
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
