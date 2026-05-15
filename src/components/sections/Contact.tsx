import { InlineWidget } from 'react-calendly';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0 }}
            className="text-left"
          >
            <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Contact</div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white mb-6">KLAAR OM JE<br/>POTENTIEEL TE UNLOCKEN?</h2>
            <div className="space-y-4">
              <p className="text-thryve-cream/70 leading-relaxed text-base md:text-lg">
                Elke grote transformatie begint met die ene, cruciale beslissing: in actie komen. Plan vandaag nog je gratis en volledig vrijblijvende kennismakingsgesprek in.
              </p>
              <p className="text-thryve-cream/70 leading-relaxed text-base md:text-lg">
                Tijdens deze strategische sessie duiken we diep in jouw huidige levensstijl, analyseren we je grootste obstakels en definiëren we je ultieme doelen. We creëren een heldere visie voor jouw toekomst en ontdekken samen in detail hoe The Thryve Method jou structureel kan helpen om je fysieke en mentale performance te maximaliseren.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0 }}
            className="rounded-3xl overflow-hidden border border-white/10 aspect-square w-full bg-[#0a0a0a]"
          >
            <InlineWidget 
              url="https://calendly.com/thethryvemethod/45min" 
              styles={{ height: '100%', width: '100%' }}
              pageSettings={{
                backgroundColor: '0a0a0a',
                primaryColor: '10b981',
                textColor: 'f5f5f4',
                hideGdprBanner: true,
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
