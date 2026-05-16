import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#292929"},"dark":{"cal-brand":"#0f9f6e"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0 }}
            className="text-center"
          >
            <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Contact</div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white mb-6">KLAAR OM JE<br/>POTENTIEEL TE UNLOCKEN?</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-thryve-cream/70 leading-relaxed text-sm md:text-base">
                Elke grote transformatie begint met die ene, cruciale beslissing: in actie komen. Plan vandaag nog je gratis en volledig vrijblijvende kennismakingsgesprek in.
              </p>
              <p className="text-thryve-cream/70 leading-relaxed text-sm md:text-base">
                Tijdens deze strategische sessie duiken we diep in jouw huidige levensstijl, analyseren we je grootste obstakels en definiëren we je ultieme doelen. We creëren een heldere visie voor jouw toekomst en ontdekken samen in detail hoe The Thryve Method jou structureel kan helpen om je fysieke en mentale performance te maximaliseren.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0 }}
            className="w-full xl:max-w-[1060px] mx-auto"
          >
            <Cal 
              namespace="30min"
              calLink="thryvemethod/45min"
              style={{ width: "100%" }}
              config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
