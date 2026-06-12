import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export const StructureAndAudit: React.FC = () => {
  const navigate = useNavigate();
  const auditSectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-thryve-dark py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-thryve-accent/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-12 md:mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-thryve-accent text-sm font-bold tracking-widest uppercase mb-4 block">
            PEAK PERFORMANCE COACHING
          </span>
          <h2 className="text-base sm:text-3xl md:text-5xl mb-4 md:mb-6 mx-auto max-w-full break-words leading-tight">
            <span className="block">Geen disciplineprobleem.</span>
            <span className="block !text-thryve-accent italic mt-2">Een structuurprobleem.</span>
          </h2>
          <p className="text-thryve-cream/80 max-w-2xl mx-auto text-sm leading-relaxed mb-8 md:mb-12">
            Bekijk hoe ik high performers help om structuur, focus en energie terug te krijgen, zonder dat hun lichaam of werk eronder lijdt.
          </p>

          <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-thryve-accent/10 border border-white/10 bg-thryve-card relative group mb-8 md:mb-12">
             <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/u5QF_G3CVpU?si=Wad_NBRjGOcp_SvS" 
                title="The Thryve Method - VSL" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Performance Audit Section */}
      <div 
        ref={auditSectionRef}
        className="max-w-5xl mx-auto px-6 relative z-10 pt-16 scroll-mt-24"
      >
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-thryve-card border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-thryve-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-2xl mb-12">
            <span className="text-thryve-accent text-sm font-bold tracking-widest uppercase mb-4 block">
              Performance Audit
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              Jouw Performance Audit: Ontvang Direct een PDF Rapport
            </h2>
            <p className="text-thryve-cream/80 text-sm leading-relaxed mb-8">
              Vul onze Performance Audit in (5 min) en ontvang direct een gratis PDF met je resultaten.
            </p>
          </div>

          <div className="flex justify-start relative z-10">
            <Button onClick={() => navigate('/performance-audit')}>
              <FileText size={20} className="mr-2" />
              Start de Audit en Ontvang de PDF
              <ChevronRight size={20} className="text-thryve-title group-hover:translate-x-1 transition-transform inline-block ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
