import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button, SectionTitle } from '../components/ui';

const team = [
  {
    name: "Harsha Shah",
    role: "Director & Optometrist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "With over 20 years of experience in optometry, Harsha is passionate about providing the highest standard of eye care. She specialises in complex contact lens fittings and children's eye health.",
  },
  {
    name: "Piush Shah",
    role: "Director & Practice Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Piush ensures the smooth running of the practice day to day. With a background in business management, he is dedicated to creating a welcoming experience for every patient who walks through the door.",
  },
  {
    name: "Tom",
    role: "Dispensing Optician & Technician",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Tom brings expert knowledge in frame styling and lens technology. He takes pride in helping patients find the perfect pair of glasses to suit their lifestyle and prescription needs.",
  },
  {
    name: "Preeyan",
    role: "Optometrist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Preeyan is a qualified optometrist with a keen interest in retinal imaging and ocular health screening. He is committed to thorough, unhurried eye examinations for all patients.",
  },
  {
    name: "Jamie",
    role: "Optometrist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Jamie is an experienced optometrist who specialises in myopia management and digital eye strain. He enjoys building long term relationships with patients and their families.",
  },
];

function TeamCard({ member, i }: { member: typeof team[number]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
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
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-brand-purple/70 hover:text-brand-purple mt-2 cursor-pointer transition-colors"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-zinc-500 mt-3 leading-relaxed overflow-hidden"
          >
            {member.bio}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      {/* About Us */}
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-10">
                About <span className="text-brand-purple">Us.</span>
              </h1>
              <div className="space-y-6 text-base md:text-lg text-zinc-600 leading-relaxed">
                <p>
                  Since 1982, Weston Opticians has been serving the local community of Watford and surrounding areas.
                </p>
                <p>
                  We are a family run opticians, with over 35 years in the industry. Our commitment has always been to provide personal, thorough eye care, treating every patient as an individual, not a number.
                </p>
                <p>
                  While technology has evolved from simple charts to advanced 3D retinal imaging, our values haven't changed. We remain an independent practice, free to choose the best frames and lenses for your specific needs, and proud to serve our neighbours.
                </p>
                <p>
                  When you visit Weston Opticians, you're not just a customer, you're part of our community.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src="/images/about_us.png"
                alt="The Weston Opticians team"
                className="w-full h-full object-cover object-center scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="The people behind your eye care experience.">
            Meet The <span className="text-brand-purple">Team.</span>
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} i={i} />
            ))}
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
