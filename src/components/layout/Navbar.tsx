import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-thryve-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-heading font-bold tracking-widest text-white uppercase">
          THRYVE
        </Link>
        
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-thryve-cream/80">
          <Link to="/#method" className="hover:text-white transition-colors">The Method</Link>
          <Link to="/#stories" className="hover:text-white transition-colors">Stories</Link>
          <Link to="/#about" className="hover:text-white transition-colors">Over mij</Link>
          <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link to="/#testimonials" className="hover:text-white transition-colors">Reviews</Link>
          <Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link to="/#contact" className="px-6 py-2.5 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all border border-white/10">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
