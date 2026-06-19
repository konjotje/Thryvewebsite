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
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">RESULTATEN</div>
          <h2 className="text-3xl md:text-5xl mb-6">Meer dan een sterker lichaam</h2>
          <p className="text-thryve-cream/80 text-[14px]">Echte resultaten van klanten die hun lichaam, energie en mindset op orde kregen.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-x-0 -top-20 h-96 bg-emerald-500/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden p-4 -m-4 pb-12 lg:overflow-visible" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8 items-stretch lg:grid lg:grid-cols-3">
              {CLIENT_STORIES.map((story, i) => (
                <div key={i} className="flex-[0_0_85vw] sm:flex-[0_0_350px] lg:flex-none min-w-0 h-auto">
                  <Card 
                    className={`transition-all duration-500 flex flex-col h-full w-full opacity-100 scale-100 ${story.active ? 'md:scale-105 z-10 border-thryve-accent/30' : 'md:scale-95'}`}
                    innerClassName="p-6 h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden rounded-xl group/img mb-6">
                      <img src={story.image} alt={`Resultaat van ${story.name}`} className="object-cover aspect-square w-full" referrerPolicy="no-referrer" />
                      <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-semibold">Before</span>
                      <span className="absolute top-2 right-2 bg-thryve-accent text-black text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">After</span>
                    </div>
                    <div className="mb-3">
                      <h3 className="font-semibold text-lg">{story.title}</h3>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-thryve-accent w-8' : 'bg-white/20 hover:bg-white/40'}`}
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
