import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Shield, Clock, Sparkles } from 'lucide-react';
import { Button, SectionTitle } from '../components/ui';

const lensTypes = [
  {
    name: "Daily Disposables",
    desc: "Fresh lenses every day — the most hygienic and convenient option. Perfect for active lifestyles and occasional wearers.",
    icon: Sparkles,
  },
  {
    name: "Monthly Lenses",
    desc: "Cost-effective and reliable. Worn daily and cleaned each night, these lenses offer excellent comfort for regular wearers.",
    icon: Clock,
  },
  {
    name: "Toric Lenses",
    desc: "Specially designed to correct astigmatism with stable, clear vision throughout the day.",
    icon: Eye,
  },
  {
    name: "Multifocal Lenses",
    desc: "See clearly at all distances without switching between glasses. Ideal for presbyopia correction.",
    icon: Shield,
  },
];

const brands = [
  "Acuvue", "CooperVision", "Alcon", "Bausch + Lomb", "Menicon", "Hoya"
];

const benefits = [
  { title: "Expert Fitting", desc: "Every contact lens fitting includes a thorough assessment of your eye health, tear film, and corneal shape to find your perfect lens." },
  { title: "Trial Lenses", desc: "We provide trial lenses so you can experience the comfort and vision before committing. No pressure, just clarity." },
  { title: "Ongoing Aftercare", desc: "Regular check-ups ensure your lenses continue to work perfectly and your eyes stay healthy long-term." },
  { title: "Easy Reordering", desc: "Once fitted, reordering your lenses is simple. Call us or pop in and we'll have them ready for you." },
];

export default function ContactLenses() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Contact Lenses</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Freedom to <span className="text-brand-purple italic">See</span><br />Without Frames.
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              From daily disposables to specialist lenses, we fit and supply contact lenses tailored to your eyes, your lifestyle, and your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lens Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="We offer a complete range of contact lenses to suit every need and prescription.">
            Lens <span className="text-brand-purple">Types.</span>
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {lensTypes.map((lens, i) => (
              <motion.div
                key={lens.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6">
                  <lens.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{lens.name}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{lens.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="Our expert team ensures you get the best fit, the best comfort, and the best value.">
            Why Choose <span className="text-brand-purple">Us.</span>
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white shrink-0 mt-1">
                  <span className="text-sm font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="We work with the world's leading contact lens manufacturers.">
            Trusted <span className="text-brand-purple">Brands.</span>
          </SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 rounded-2xl p-6 flex items-center justify-center border border-zinc-100"
              >
                <span className="font-display font-bold text-lg text-zinc-700">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Try Contact Lenses?</h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10">
              Book a contact lens consultation with our expert team. We'll find the perfect lenses for your eyes and lifestyle.
            </p>
            <Link to="/contact">
              <Button className="mx-auto">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
