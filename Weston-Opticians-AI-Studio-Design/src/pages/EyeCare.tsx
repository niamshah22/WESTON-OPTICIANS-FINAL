import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, Award, Scan, HeartPulse, Baby, ArrowRight, CheckCircle } from 'lucide-react';
import { Button, SectionTitle } from '../components/ui';

const services = [
  {
    title: "Comprehensive Eye Tests",
    desc: "Our thorough 45-minute eye examinations go far beyond a basic sight test. Using the latest diagnostic equipment, we assess your visual acuity, eye health, and screen for conditions like glaucoma, cataracts, and macular degeneration.",
    icon: <Eye className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    features: ["Full visual acuity assessment", "Intraocular pressure measurement", "Retinal health examination", "Personalised aftercare plan"],
  },
  {
    title: "OCT Retinal Imaging",
    desc: "Our state-of-the-art OCT scanner produces detailed 3D cross-section images of your retina, allowing us to detect conditions up to 5 years earlier than traditional methods. This hospital-grade technology is available to all our patients.",
    icon: <Scan className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    features: ["3D retinal cross-sections", "Early detection of glaucoma", "Macular degeneration screening", "Diabetic retinopathy monitoring"],
  },
  {
    title: "Myopia Management",
    desc: "Childhood myopia is increasing rapidly. Our specialised myopia management programme uses evidence-based treatments including MiSight contact lenses and Miyosmart spectacle lenses to slow down the progression of short-sightedness.",
    icon: <Baby className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
    features: ["MiSight daily contact lenses", "Miyosmart spectacle lenses", "Regular progress monitoring", "Parent education & support"],
  },
  {
    title: "Contact Lens Fitting",
    desc: "Whether you're new to contact lenses or looking for an upgrade, our expert fitting service ensures you get the most comfortable and effective lenses for your lifestyle. We offer daily, monthly, and specialist lenses.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=800&auto=format&fit=crop",
    features: ["Daily & monthly options", "Toric lenses for astigmatism", "Multifocal contact lenses", "Free trial lenses"],
  },
  {
    title: "Dry Eye Clinic",
    desc: "Suffering from dry, gritty, or watery eyes? Our dedicated dry eye clinic uses advanced diagnostics to identify the root cause and create a tailored treatment plan to restore your comfort.",
    icon: <HeartPulse className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    features: ["Tear film analysis", "Meibomian gland assessment", "Bespoke treatment plans", "Ongoing management"],
  },
  {
    title: "Emergency Eye Care",
    desc: "Eye emergencies can happen at any time. We offer same-day appointments for urgent eye conditions including sudden vision changes, eye injuries, flashes, floaters, and red or painful eyes.",
    icon: <Award className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    features: ["Same-day appointments", "Foreign body removal", "Red & painful eye assessment", "Referral to hospital if needed"],
  },
];

export default function EyeCare() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Expert <span className="text-brand-purple italic">Eye Care</span><br />For Every Age.
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              From routine check-ups to advanced diagnostics, we provide comprehensive eye care using the latest technology — all with a personal touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-zinc-700">
                        <CheckCircle className="w-5 h-5 text-brand-purple shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-80 md:h-96 overflow-hidden rounded-3xl ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-purple text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Book Your Eye Test?</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              Your eyes deserve expert care. Book your comprehensive eye examination today.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand-purple hover:bg-zinc-100 mx-auto">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
