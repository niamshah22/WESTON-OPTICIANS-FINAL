import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ShieldCheck, Award, Star, ArrowRight, ChevronRight } from 'lucide-react';
import { cn, Button, SectionTitle } from '../components/ui';

const Hero = () => {
  const images = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg",
    "/images/hero-5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const ImageCarousel = ({ className }: { className?: string }) => (
    <AnimatePresence>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Weston Opticians"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={cn("absolute inset-0 w-full h-full object-cover", className)}
        referrerPolicy="no-referrer"
      />
    </AnimatePresence>
  );

  const ProgressDots = ({ light = false }: { light?: boolean }) => (
    <div className="flex gap-2">
      {images.map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1 transition-all duration-500 rounded-full",
            i === currentIndex
              ? light ? "w-8 bg-brand-purple-light" : "w-8 bg-brand-purple"
              : light ? "w-4 bg-white/30" : "w-4 bg-zinc-300"
          )}
        />
      ))}
    </div>
  );

  return (
    <section>
      {/* Mobile / Tablet */}
      <div className="xl:hidden">
        <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden">
          <ImageCarousel />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <ProgressDots light />
          </div>
        </div>
        <div className="px-6 py-10 bg-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Independent & Local
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold leading-[0.95] mb-6 tracking-tight text-black">
              Eye Care You<br />Can <span className="text-brand-purple italic">Trust</span>.
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed font-medium mb-8">
              Personalised vision care using the latest technology. We take the time to understand your eyes, because your vision is as unique as you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="group">
                  Book Your Eye Test
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/eyewear">
                <Button variant="outline">Explore Collections</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:block relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageCarousel />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        <div className="absolute bottom-16 left-0 right-0 z-10 px-12">
          <div className="max-w-7xl mx-auto flex items-end justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <span className="inline-block px-4 py-1 bg-white/15 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 tracking-wider uppercase border border-white/20">
                Independent & Local
              </span>
              <h1 className="text-8xl font-serif font-bold leading-[0.95] mb-6 tracking-tight text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]">
                Eye Care You<br />Can <span className="text-brand-purple-light italic">Trust</span>.
              </h1>
              <p className="text-lg text-white/80 max-w-lg leading-relaxed font-medium">
                Personalised vision care using the latest technology. We take the time to understand your eyes, because your vision is as unique as you are.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex gap-4 pb-2">
              <Link to="/contact">
                <Button className="group border border-white/20 bg-white text-black hover:bg-white/90">
                  Book Your Eye Test
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/eyewear">
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">Explore Collections</Button>
              </Link>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto mt-8">
            <ProgressDots light />
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <div className="w-1 h-1 bg-brand-purple rounded-full" />
              Designed for Modern Vision
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandLogos = () => {
  const brands = [
    { name: "Ray-Ban", logo: "/images/brands/rayban.png" },
    { name: "Lindberg", logo: "/images/brands/lindberg.png" },
    { name: "Oakley", logo: "/images/brands/oakley.png" },
    { name: "Gucci", logo: "/images/brands/gucci.png" },
    { name: "Prada", logo: "/images/brands/prada.png" },
    { name: "D&G", logo: "/images/brands/dg.png" },
    { name: "Cazal", logo: "/images/brands/cazal.png" },
    { name: "Tiffany", logo: "/images/brands/tiffany.png" },
    { name: "Jimmy Choo", logo: "/images/brands/jimmychoo.png" },
  ];

  return (
    <section className="py-14 bg-zinc-50 border-y border-zinc-100">
      <style>{`
        @keyframes brand-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-10">
        Our Brands
      </p>
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        onMouseEnter={e => { e.currentTarget.querySelector<HTMLDivElement>('.brand-track')!.style.animationPlayState = 'paused'; }}
        onMouseLeave={e => { e.currentTarget.querySelector<HTMLDivElement>('.brand-track')!.style.animationPlayState = 'running'; }}
      >
        <div
          className="brand-track flex items-center gap-16 w-max"
          style={{ animation: 'brand-scroll 30s linear infinite' }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <img
              key={`${brand.name}-${i}`}
              src={brand.logo}
              alt={brand.name}
              className="h-20 w-auto object-contain transition-all duration-300"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const services = [
    { title: "Comprehensive Eye Tests", desc: "Detailed 45-minute consultations using advanced diagnostic tools.", icon: <Eye className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" },
    { title: "OCT Retinal Imaging", desc: "3D hospital-grade scans for early detection of eye conditions.", icon: <ShieldCheck className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
    { title: "Myopia Management", desc: "Specialised treatments to slow short-sightedness in children.", icon: <Award className="w-8 h-8" />, image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle subtitle="We combine clinical excellence with a personal approach to ensure your eyes receive the best possible care.">
          Clinical <span className="text-brand-purple">Excellence.</span>
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-purple shadow-lg">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-purple transition-colors">{service.title}</h3>
              <p className="text-zinc-600 mb-4 leading-relaxed">{service.desc}</p>
              <Link to="/eye-care" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-brand-purple group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah Jenkins", role: "Local Resident", text: "The most thorough eye exam I've ever had. They explained everything so clearly and helped me find frames that actually suit my face shape.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
    { name: "David Thompson", role: "Architect", text: "Incredible selection of designer frames you won't find in the big chains. The personal service is what keeps me coming back year after year.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    { name: "Emma Wilson", role: "Teacher", text: "Brilliant with children. My daughter was nervous about her first test but the team made it such a fun and positive experience.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionTitle subtitle="Don't just take our word for it. Here's what our community has to say.">
            Trusted by the <br /> <span className="text-brand-purple">Community.</span>
          </SectionTitle>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display font-bold">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <div className="h-12 w-px bg-zinc-100" />
            <div>
              <p className="text-sm font-bold">Google Reviews</p>
              <p className="text-xs text-zinc-500">Based on 248 verified reviews</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div key={review.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-zinc-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <ServicesPreview />
      <Testimonials />
    </>
  );
}
