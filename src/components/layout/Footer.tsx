import { Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img src="/images/logoTTM.svg" alt="The Thryve Method" className="h-8 md:h-10 w-auto" />
            </Link>
            <p className="text-thryve-cream/80 text-sm leading-relaxed">
              Premium online peak performance coaching voor mensen die het beste uit zichzelf willen halen. Meer energie, focus en rust, met een sterker lichaam en een helderder hoofd.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/thethryvemethod" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-thryve-cream/80 hover:text-white hover:border-white hover:bg-white/5 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Navigatie</h3>
            <nav className="flex flex-col gap-3 text-sm text-thryve-cream/80" aria-label="Footer Navigatie">
              <Link to="/#method" className="hover:text-white transition-colors w-fit">The Method</Link>
              <Link to="/#stories" className="hover:text-white transition-colors w-fit">Stories</Link>
              <Link to="/#about" className="hover:text-white transition-colors w-fit">Over mij</Link>
              <Link to="/#testimonials" className="hover:text-white transition-colors w-fit">Reviews</Link>
              <Link to="/#faq" className="hover:text-white transition-colors w-fit">FAQ</Link>
              <Link to="/performance-audit" className="hover:text-white transition-colors w-fit text-thryve-accent">Performance Audit</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Contact</h3>
            <address className="flex flex-col gap-3 text-sm text-thryve-cream/80 not-italic">
              <a href="mailto:info@thethryvemethod.com" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Mail size={16} className="text-thryve-accent shrink-0" />
                info@thethryvemethod.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-thryve-accent shrink-0" />
                Nederland
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-thryve-cream/80">KVK:</span> 74191187
              </div>
            </address>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Legal</h3>
            <nav className="flex flex-col gap-3 text-sm text-thryve-cream/80" aria-label="Legal Navigatie">
              <Link to="/privacy-policy" className="hover:text-white transition-colors w-fit">Privacy Policy</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left text-xs text-thryve-cream/90">
          &copy; {new Date().getFullYear()} The Thryve Method. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};
