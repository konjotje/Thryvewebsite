import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { TESTIMONIALS } from '../../constants/content';

export const Testimonials = () => {
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
    <section id="testimonials" className="py-16 md:py-24 bg-thryve-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0 }}
          className="text-center mb-12"
        >
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Reviews</div>
          <h2 className="mb-10 text-center">WAT KLANTEN ZEGGEN</h2>
        </motion.div>

        <div className="overflow-hidden pb-8 lg:overflow-visible lg:p-4 lg:-m-4" ref={emblaRef}>
          <div className="flex gap-6 items-stretch lg:grid lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_85vw] sm:flex-[0_0_300px] lg:flex-[1_1_100%] min-w-0 h-auto"
              >
                <Card className="flex flex-col relative h-full shadow-none w-full" innerClassName="p-6 h-full flex flex-col">
                  <p className="text-thryve-cream/80 text-sm leading-relaxed mb-8 flex-grow italic">"{t.text}"</p>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-auto">
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-thryve-accent">{t.role}</p>
                    </div>
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover transition-transform duration-500 hover:scale-125" referrerPolicy="no-referrer" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {emblaApi && (
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
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
