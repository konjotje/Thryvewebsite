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
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-40 bg-thryve-dark/98 backdrop-blur-lg lg:hidden pt-24 pb-8 px-6 border-b border-white/10 shadow-2xl"
          >
            <div className="relative z-10 flex flex-col space-y-5 max-w-sm mx-auto">
              {[
                { name: 'The Method', path: '/#method' },
                { name: 'Stories', path: '/#stories' },
                { name: 'Over mij', path: '/#about' },
                { name: 'Reviews', path: '/#testimonials' },
                { name: 'FAQ', path: '/#faq' },
              ].map((item, i) => (
                <motion.button 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleMobileLinkClick(item.path)} 
                  className="text-xl font-heading font-medium text-white text-left hover:text-thryve-accent transition-colors w-full group relative"
                >
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 w-full"
              >
                <Button size="md" className="w-full text-base shadow-[0_0_20px_rgba(16,185,129,0.2)]" onClick={() => handleMobileLinkClick('/#contact')}>
                  Contact
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};