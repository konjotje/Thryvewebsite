import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { CLIENT_STORIES } from '../../constants/content';

export const ClientStories = () => {
  return (
    <section id="stories" className="py-16 md:py-32 bg-thryve-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0 }}
          className="text-center mb-16"
        >
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Stories</div>
          <h2>RESULTATEN SPREKEN VOOR ZICH</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-x-0 -top-20 h-96 bg-emerald-500/10 blur-3xl rounded-full -z-10"></div>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pt-4 pb-8 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:gap-8 md:pt-0 md:pb-0 hide-scrollbar items-stretch">
            {CLIENT_STORIES.map((story, i) => (
              <Card 
                key={i} 
                className={`min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center transition-all duration-500 flex flex-col h-full ${story.active ? 'opacity-100 scale-100 md:scale-105 z-10 border-thryve-accent/30' : 'opacity-100 md:opacity-50 scale-100 md:scale-95 hover:opacity-100'}`}
                innerClassName="p-6"
              >
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="relative overflow-hidden rounded-xl group/img">
                    <img src={story.before} alt={`Fysieke conditie van ${story.name} voor de samenwerking`} className="object-cover aspect-[3/4] w-full transition-transform duration-700 group-hover/img:scale-110" referrerPolicy="no-referrer" />
                    <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">Voor</span>
                  </div>
                  <div className="relative overflow-hidden rounded-xl group/img">
                    <img src={story.after} alt={`Bereikte resultaten en fysiek van ${story.name} na The Thryve Method`} className="object-cover aspect-[3/4] w-full transition-transform duration-700 group-hover/img:scale-110" referrerPolicy="no-referrer" />
                    <span className="absolute top-2 left-2 bg-thryve-accent text-black text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">Na</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-thryve-accent" />
                  <h3>{story.title}</h3>
                </div>
                <p className="text-thryve-cream/60 text-sm leading-relaxed mb-6 flex-grow">
                  {story.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          <div className="w-2 h-2 rounded-full bg-thryve-accent"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};
