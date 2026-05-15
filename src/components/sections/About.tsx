import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden relative aspect-[4/5]">
              <img 
                src="https://i.imgur.com/vF9Whqb.jpeg" 
                alt="Iven van Stekelenburg" 
                className="w-full h-full object-cover image-fade-abstract"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-thryve-dark via-transparent to-thryve-dark pointer-events-none opacity-80"></div>
            </div>
          </div>
          
          <div>
            <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Over Mij</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white">JOUW PARTNER IN<br/>PEAK PERFORMANCE</h2>
            <p className="text-thryve-cream/70 leading-relaxed mb-10 text-sm">
              Ik ben Iven van Stekelenburg, fysiotherapeut en peak performance coach. Met ruim 8 jaar ervaring in sport en krachttraining help ik ondernemers om hun lichaam en geest te optimaliseren voor duurzame groei. Geen quick fixes, maar systemen die werken onder druk.
            </p>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Klaar voor?
              <div className="w-8 h-8 rounded-full bg-thryve-accent flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
