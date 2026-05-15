import { Instagram } from 'lucide-react';

export const Footer = ({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'terms' | 'privacy') => void }) => {
  return (
    <footer className="py-6 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo & Socials */}
        <div className="flex items-center gap-4">
          <div className="text-lg font-bold tracking-widest text-white uppercase cursor-pointer" onClick={() => setCurrentPage('home')}>
            THRYVE
          </div>
          <a href="#" className="text-thryve-cream/60 hover:text-white transition-colors"><Instagram size={18} /></a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-thryve-cream/60">
          <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy</button>
          <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Voorwaarden</button>
          <span>KVK: 74191187</span>
          <a href="mailto:info@thethryvemethod.com" className="hover:text-white transition-colors">info@thethryvemethod.com</a>
        </div>
      </div>
      
      <div className="text-center text-[10px] text-thryve-cream/30 mt-4">
        &copy; {new Date().getFullYear()} The Thryve Method. All rights reserved.
      </div>
    </footer>
  );
};
