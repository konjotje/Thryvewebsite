import { Calendar, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Features = () => {
  const features = [
    { icon: <Calendar className="w-6 h-6" />, title: "Gepersonaliseerde Planning", desc: "Flexibele schema's die naadloos aansluiten op jouw drukke agenda als ondernemer." },
    { icon: <Users className="w-6 h-6" />, title: "Exclusieve Community", desc: "Sluit je aan bij een netwerk van gelijkgestemde high-performers." },
    { icon: <Zap className="w-6 h-6" />, title: "Maximale Energie", desc: "Wetenschappelijk onderbouwde methoden om jouw dagelijkse output te verhogen." }
  ];

  return (
    <section className="py-12 md:py-24 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: i * 0.15 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-thryve-accent transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-white uppercase">{f.title}</h4>
              </div>
              <p className="text-thryve-cream/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
