import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    window.location.href = href;
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-thryve-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-4 sm:py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-heading font-bold tracking-widest text-white uppercase relative z-50">
            THRYVE
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium font-heading text-thryve-cream/80">
            <Link to="/#method" className="hover:text-white transition-colors">The Method</Link>
            <Link to="/#stories" className="hover:text-white transition-colors">Stories</Link>
            <Link to="/#about" className="hover:text-white transition-colors">Over mij</Link>
            <Link to="/#testimonials" className="hover:text-white transition-colors">Reviews</Link>
            <Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link>
            <Button size="sm" onClick={() => window.location.href = '#contact'}>
              Contact
            </Button>
          </div>

          <button 
            className="lg:hidden text-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            >
              {[
                { name: 'The Method', path: '/#method' },
                { name: 'Stories', path: '/#stories' },
                { name: 'Over mij', path: '/#about' },
                { name: 'Reviews', path: '/#testimonials' },
                { name: 'FAQ', path: '/#faq' },
                { name: 'Contact', path: '/#contact' },
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
