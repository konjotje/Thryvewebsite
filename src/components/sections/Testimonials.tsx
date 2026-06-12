import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { TESTIMONIALS } from '../../constants/content';

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    loop: true, 
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
      <div className="max-w-7xl mx-auto px-6 relative">
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

        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch -ml-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_85vw] sm:flex-[0_0_400px] lg:flex-[0_0_calc(33.333%)] min-w-0 h-auto pl-6"
                >
                  <Card className="flex flex-col relative h-full shadow-none w-full" innerClassName="p-6 h-full flex flex-col">
                    <p className="text-thryve-cream/80 text-sm leading-relaxed mb-8 flex-grow italic">"{t.text}"</p>
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-thryve-accent">{t.role}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 bg-thryve-accent rounded-full text-black hover:bg-white transition-colors"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 bg-thryve-accent rounded-full text-black hover:bg-white transition-colors"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {emblaApi && (
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
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
