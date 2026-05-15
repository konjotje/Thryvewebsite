import { Card } from '../ui/Card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Mark de Vries",
      role: "CEO TechStartup",
      text: "Sinds ik met Iven werk, is mijn focus en energielevel enorm gestegen. Ik kan veel meer aan zonder me opgebrand te voelen.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Sarah Jansen",
      role: "Marketing Director",
      text: "De combinatie van training en biohacking heeft mijn slaapkwaliteit en dagelijkse productiviteit drastisch verbeterd.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Thomas Bakker",
      role: "Ondernemer",
      text: "Iven begrijpt precies wat een ondernemer nodig heeft. Geen standaard schema's, maar maatwerk dat echt werkt.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Lisa van Dijk",
      role: "Creative Lead",
      text: "Ik voel me fitter en scherper dan ooit. Het programma is uitdagend maar perfect in te passen in een drukke agenda.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-thryve-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-5xl text-white">WAT KLANTEN ZEGGEN</h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:gap-6 md:pb-0 hide-scrollbar">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6 flex flex-col min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center relative h-full shadow-none">
              <p className="text-thryve-cream/80 text-sm leading-relaxed mb-8 flex-grow italic">"{t.text}"</p>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-auto">
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-thryve-accent">{t.role}</p>
                </div>
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
