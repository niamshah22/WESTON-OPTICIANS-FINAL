import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, Award, Clock } from 'lucide-react';
import { Button, SectionTitle } from '../components/ui';

const team = [
  { name: "Harsha Shah", role: "Director & Optometrist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
  { name: "Piush Shah", role: "Director & Practice Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  { name: "Tom", role: "Dispensing Optician & Technician", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
  { name: "Preeyan", role: "Optometrist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop" },
  { name: "Jamie", role: "Optometrist", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" },
];

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Personal Care", desc: "Every patient is treated as an individual, not a number. We take the time to listen and understand your needs." },
  { icon: <Award className="w-6 h-6" />, title: "Clinical Excellence", desc: "We invest in the latest diagnostic technology and ongoing professional development for our team." },
  { icon: <Users className="w-6 h-6" />, title: "Community First", desc: "As an independent practice, we're deeply rooted in our local community and proud to serve our neighbours." },
  { icon: <Clock className="w-6 h-6" />, title: "No Rushing", desc: "Our appointments are never rushed. We allocate the time needed to provide thorough, comprehensive care." },
];

const timeline = [
  { year: "1982", event: "Weston Opticians founded on the high street, serving the local community from day one." },
  { year: "1995", event: "Expanded into designer frames, becoming the first local practice to stock luxury brands." },
  { year: "2008", event: "Invested in digital retinal imaging technology for enhanced eye health screening." },
  { year: "2016", event: "Introduced OCT scanning — hospital-grade 3D retinal imaging for all patients." },
  { year: "2020", event: "Launched our myopia management programme for children's eye health." },
  { year: "Today", event: "Continuing to combine cutting-edge technology with the personal service we've always been known for." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              A Legacy of<br /><span className="text-brand-purple italic">Local Care.</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              For over 40 years, Weston Opticians has been the trusted name in eye care for our community. Independent, family-run, and always putting patients first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1556740734-7f95891f7f89?q=80&w=1000&auto=format&fit=crop"
                alt="Our Story"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-purple p-8 rounded-3xl hidden md:block">
                <p className="text-4xl font-display font-bold text-white">40+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-white/80">Years of Heritage</p>
              </div>
            </motion.div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">
                Where It All <span className="text-brand-purple">Began.</span>
              </h2>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Founded in 1982, Weston Opticians was built on a simple philosophy: eye care should be personal, thorough, and rooted in the community.
                </p>
                <p>
                  While technology has evolved from simple charts to advanced 3D retinal imaging, our commitment to our patients hasn't wavered. We remain a family-run independent business, free to choose the best frames and lenses for your specific needs.
                </p>
                <p>
                  When you visit Weston Opticians, you're not just a number on a spreadsheet — you're a neighbour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="The people behind your eye care experience.">
            Meet The <span className="text-brand-purple">Team.</span>
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4] lg:aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-display font-bold">{member.name}</h3>
                <p className="text-brand-purple font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="The principles that guide everything we do.">
            Our <span className="text-brand-purple">Values.</span>
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100"
              >
                <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle light subtitle="Key moments in our journey from a small high street practice to a leading independent optician.">
            Our <span className="text-brand-purple-light">Journey.</span>
          </SectionTitle>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:text-${i % 2 === 0 ? 'right' : 'left'}`}
                >
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-3xl font-display font-bold text-brand-purple-light">{item.year}</span>
                    <p className="text-zinc-400 mt-2">{item.event}</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-brand-purple rounded-full border-4 border-black mt-2 shrink-0 ml-6 md:ml-0" />
                  <div className="flex-1 md:hidden">
                    <span className="text-2xl font-display font-bold text-brand-purple-light">{item.year}</span>
                    <p className="text-zinc-400 mt-2">{item.event}</p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Come Say Hello</h2>
            <p className="text-lg text-zinc-600 max-w-xl mx-auto mb-10">
              We'd love to welcome you to our practice. Pop in for a browse or book your appointment today.
            </p>
            <Link to="/contact">
              <Button className="mx-auto">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
