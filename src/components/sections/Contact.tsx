import { InlineWidget } from 'react-calendly';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Contact</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">KLAAR OM JE<br/>PERFORMANCE TE UNLOCKEN?</h2>
          <p className="text-thryve-cream/70 leading-relaxed mb-10 text-sm">
            Plan nu je gratis, vrijblijvende kennismaking. Laten we samen kijken hoe we jouw potentieel volledig kunnen benutten.
          </p>
        </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 h-[500px]">
            <InlineWidget 
              url="https://calendly.com/thethryvemethod/45min" 
              styles={{ height: '100%', width: '100%', minWidth: '320px' }}
              pageSettings={{
                backgroundColor: '0a0a0a',
                primaryColor: '10b981',
                textColor: 'f5f5f4',
                hideGdprBanner: true,
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
              }}
            />
          </div>
      </div>
    </section>
  );
};
