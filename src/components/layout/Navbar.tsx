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
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-thryve-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-thryve-dark/80 backdrop-blur-md lg:hidden flex items-center justify-center p-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-thryve-card border border-white/10 rounded-3xl w-full max-w-sm p-8 shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-thryve-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-thryve-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col space-y-6 pt-2">
                {[
                  { name: 'The Method', path: '/#method' },
                  { name: 'Stories', path: '/#stories' },
                  { name: 'Over mij', path: '/#about' },
                  { name: 'Reviews', path: '/#testimonials' },
                  { name: 'FAQ', path: '/#faq' },
                ].map((item, i) => (
                  <motion.button 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    onClick={() => handleMobileLinkClick(item.path)} 
                    className="text-3xl font-heading font-bold text-white text-left hover:text-thryve-accent transition-colors w-full group relative"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-thryve-accent transition-all duration-300 group-hover:w-12 rounded-full -mb-2"></span>
                  </motion.button>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 w-full"
                >
                  <Button size="lg" className="w-full text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]" onClick={() => handleMobileLinkClick('/#contact')}>
                    Contact
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
