import { CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';

export const ClientStories = () => {
  const stories = [
    {
      name: "Philip Thompson",
      title: "PHILIP'S SUCCES",
      desc: "Philip wilde vet verliezen en spiermassa opbouwen. Met vastberadenheid en een solide plan heeft hij opmerkelijke resultaten behaald.",
      before: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop",
      active: false
    },
    {
      name: "Jack Smith",
      title: "JACK'S TRANSFORMATIE",
      desc: "Jack streefde naar een gespierd en strak lichaam. Door toewijding en hard werken heeft hij dit werkelijkheid gemaakt.",
      before: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop",
      active: true
    },
    {
      name: "Anna Taylor",
      title: "ANNA'S DROOMFYSIEK",
      desc: "Een jaar geleden kwam Anna bij mij met het doel om tegelijkertijd vet te verliezen en spiermassa op te bouwen.",
      before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1583465539801-bf10f51931a3?q=80&w=500&auto=format&fit=crop",
      active: false
    }
  ];

  return (
    <section id="stories" className="py-16 md:py-32 bg-thryve-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-thryve-accent text-xs font-bold tracking-widest uppercase mb-4">Klantverhalen</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">RESULTATEN SPREKEN VOOR ZICH</h2>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 -top-20 h-96 bg-emerald-500/10 blur-3xl rounded-full -z-10"></div>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible md:gap-8 md:pb-0 hide-scrollbar items-center">
            {stories.map((story, i) => (
              <Card 
                key={i} 
                className={`p-6 min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center transition-all duration-500 flex flex-col h-full ${story.active ? 'opacity-100 scale-100 md:scale-105 z-10 border-thryve-accent/30' : 'opacity-100 md:opacity-50 scale-100 md:scale-95 hover:opacity-100'}`}
              >
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="relative">
                    <img src={story.before} alt="Voor" className="rounded-xl object-cover aspect-[3/4] w-full" referrerPolicy="no-referrer" />
                    <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">Voor</span>
                  </div>
                  <div className="relative">
                    <img src={story.after} alt="Na" className="rounded-xl object-cover aspect-[3/4] w-full" referrerPolicy="no-referrer" />
                    <span className="absolute top-2 left-2 bg-thryve-accent text-black text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">Na</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-thryve-accent" />
                  <h3 className="text-lg font-bold text-white">{story.title}</h3>
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
