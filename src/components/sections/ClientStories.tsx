import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { CLIENT_STORIES } from '../../constants/content';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const ClientStories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    loop: false, 
    containScroll: 'trimSnaps',
    breakpoints: { '(min-width: 1024px)': { active: false } }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="stories" className="py-16 md:py-24 bg-thryve-dark overflow-hidden">
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
          <div className="absolute inset-x-0 -top-20 h-96 bg-emerald-500/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden p-4 -m-4 pb-12 lg:overflow-visible" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8 items-stretch lg:grid lg:grid-cols-3">
              {CLIENT_STORIES.map((story, i) => (
                <div key={i} className="flex-[0_0_85vw] sm:flex-[0_0_350px] lg:flex-none min-w-0 h-auto">
                  <Card 
                    className={`transition-all duration-500 flex flex-col h-full w-full opacity-100 scale-100 ${story.active ? 'md:scale-105 z-10 border-thryve-accent/30' : 'md:opacity-50 md:scale-95 hover:opacity-100'}`}
                    innerClassName="p-6 h-full flex flex-col"
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
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {emblaApi && (
          <div className="flex justify-center gap-2 mt-4 md:hidden">
             {emblaApi.scrollSnapList().map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-thryve-accent w-6' : 'bg-white/20 hover:bg-white/40'}`}
                onClick={() => emblaApi.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
