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
    <section id="contact" className="pt-16 pb-8 md:pt-24 md:pb-12 relative">
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
            <h2 className="mb-6">KLAAR OM TE<br/>STARTEN?</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-thryve-cream/70 leading-relaxed text-sm md:text-base">
                Plan een gratis en vrijblijvende kennismaking. We bespreken je doelen, brengen je grootste obstakels in kaart en je ontdekt direct hoe The Thryve Method je verder kan helpen.
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
              calLink="thethryvemethod/30min"
              style={{ width: "100%" }}
              config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
