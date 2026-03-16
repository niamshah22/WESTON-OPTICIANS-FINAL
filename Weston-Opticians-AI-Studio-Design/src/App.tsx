import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-purple text-white hover:bg-brand-purple-light',
      secondary: 'bg-black text-white hover:bg-zinc-800',
      outline: 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-4xl md:text-5xl font-display font-bold mb-4", light ? "text-white" : "text-black")}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-lg max-w-2xl", light ? "text-zinc-300" : "text-zinc-600")}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Frames', href: '#frames' },
    { name: 'Our Story', href: '#story' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
            <Eye className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "text-2xl font-display font-bold tracking-tight",
            isScrolled ? "text-black" : "text-white md:text-black" // Adjust based on hero background
          )}>
            WESTON<span className="text-brand-purple">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-brand-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="px-6 py-2 text-sm">Book Appointment</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full">Book Appointment</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509633289647-0261b77ec73c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508243771214-6e95d137426b?q=80&w=2000&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Gallery */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            src={images[currentIndex]} 
            alt="Modern Eyewear" 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent md:from-white/80" />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Independent & Local
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              EYE CARE YOU <br />
              <span className="text-brand-purple italic">CAN TRUST.</span>
            </h1>
            <p className="text-xl text-zinc-800 mb-10 max-w-lg leading-relaxed font-medium">
              Personalised vision care using the latest technology. We take the time to understand your eyes, because your vision is as unique as you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group">
                Book Your Eye Test
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm">Explore Collections</Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "h-1 transition-all duration-500 rounded-full",
              i === currentIndex ? "w-8 bg-brand-purple" : "w-4 bg-zinc-300"
            )} 
          />
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 overflow-hidden whitespace-nowrap">
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
    "RAY-BAN", "OAKLEY", "GUCCI", "PRADA", "TOM FORD", "CHANEL", "OLIVER PEOPLES"
  ];
  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-10">
          Curated Designer Collections
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map(brand => (
            <span key={brand} className="text-2xl font-display font-bold tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Comprehensive Eye Tests",
      desc: "Detailed 45-minute consultations using advanced diagnostic tools to monitor your eye health.",
      icon: <Eye className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "OCT Retinal Imaging",
      desc: "3D hospital-grade scans that allow us to see beneath the surface of your retina for early detection.",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Myopia Management",
      desc: "Specialised treatments to slow down the progression of short-sightedness in children.",
      icon: <Award className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle subtitle="We combine clinical excellence with a personal approach to ensure your eyes receive the best possible care.">
          Clinical <span className="text-brand-purple">Excellence.</span>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-purple shadow-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-brand-purple group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Story = () => (
  <section id="story" className="py-24 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1556740734-7f95891f7f89?q=80&w=1000&auto=format&fit=crop" 
            alt="Founding Story" 
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-brand-purple p-8 rounded-3xl hidden md:block">
            <p className="text-4xl font-display font-bold">30+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Heritage</p>
          </div>
        </motion.div>

        <div>
          <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Heritage</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
            A Legacy of <br />
            <span className="italic">Local Care.</span>
          </h2>
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
            <p>
              Founded in 1994 by Dr. Arthur Weston, our practice was built on a simple philosophy: eye care should be personal, thorough, and rooted in the community.
            </p>
            <p>
              While technology has evolved from simple charts to advanced 3D retinal imaging, our commitment to our patients hasn't wavered. We remain a family-run independent business, free to choose the best frames and lenses for your specific needs.
            </p>
            <p>
              When you visit Weston Opticians, you're not just a number on a spreadsheet—you're a neighbor.
            </p>
          </div>
          <Button variant="outline" className="mt-10 border-white text-white hover:bg-white hover:text-black">
            Meet the Team
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Local Resident",
      text: "The most thorough eye exam I've ever had. They explained everything so clearly and helped me find frames that actually suit my face shape.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Thompson",
      role: "Architect",
      text: "Incredible selection of designer frames you won't find in the big chains. The personal service is what keeps me coming back year after year.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Emma Wilson",
      role: "Teacher",
      text: "Brilliant with children. My daughter was nervous about her first test but the team made it such a fun and positive experience.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionTitle subtitle="Don't just take our word for it. Here's what our community has to say about their experience with us.">
            Trusted by the <br /> <span className="text-brand-purple">Community.</span>
          </SectionTitle>
          
          {/* Simulated Google Reviews Widget */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display font-bold">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <div className="h-12 w-px bg-zinc-100" />
            <div>
              <p className="text-sm font-bold flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="w-12" />
                Reviews
              </p>
              <p className="text-xs text-zinc-500">Based on 248 verified reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
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

const Blog = () => {
  const posts = [
    {
      title: "How Digital Screens Affect Your Vision",
      date: "March 2024",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Spring Trends: The Bold Frame Revival",
      date: "February 2024",
      category: "Style",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Understanding Children's Eye Health",
      date: "January 2024",
      category: "Clinical",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle subtitle="Expert advice and style inspiration from our clinical team.">
            The <span className="text-brand-purple">Journal.</span>
          </SectionTitle>
          <a href="#" className="hidden md:flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-brand-purple transition-colors mb-12">
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{post.date}</p>
              <h3 className="text-xl font-display font-bold group-hover:text-brand-purple transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => (
  <section id="contact" className="py-24 bg-zinc-50">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <SectionTitle subtitle="Visit us in the heart of the high street. No appointment needed for frame browsing.">
            Find <span className="text-brand-purple">Us.</span>
          </SectionTitle>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-purple shadow-sm border border-zinc-100 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Our Location</p>
                <p className="text-zinc-600">124 High Street, Weston-super-Mare, BS23 1HP</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-purple shadow-sm border border-zinc-100 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg mb-1">Call Us</p>
                <p className="text-zinc-600">01934 624 882</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-purple shadow-sm border border-zinc-100 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                <p className="font-bold text-lg col-span-2 mb-1">Opening Hours</p>
                <span className="text-zinc-500 text-sm">Mon - Fri</span>
                <span className="text-zinc-800 text-sm font-medium">9:00 - 17:30</span>
                <span className="text-zinc-500 text-sm">Saturday</span>
                <span className="text-zinc-800 text-sm font-medium">9:00 - 17:00</span>
                <span className="text-zinc-500 text-sm">Sunday</span>
                <span className="text-zinc-800 text-sm font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-auto shadow-xl">
          {/* Simulated Map */}
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
            alt="Map Location" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-purple/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-purple rounded-full animate-ping opacity-20" />
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white shadow-2xl relative z-10">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-12">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <a href="#" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
              <Eye className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">
              WESTON<span className="text-brand-purple">.</span>
            </span>
          </a>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            Independent eye care specialists dedicated to clinical excellence and personal service since 1994.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Eye Examinations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Designer Frames</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Lenses</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Accreditations</h4>
          <div className="flex flex-wrap gap-6 items-center opacity-50 grayscale">
            {/* Simulated Accreditation Logos */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center font-bold text-[10px]">GOC</div>
              <span className="text-[8px] mt-2 font-bold uppercase tracking-tighter">Registered</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center font-bold text-[10px]">ABDO</div>
              <span className="text-[8px] mt-2 font-bold uppercase tracking-tighter">Member</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600 font-medium uppercase tracking-widest">
        <p>© 2024 Weston Opticians. All Rights Reserved.</p>
        <p>Website by Digital Vision</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <BrandLogos />
      <Services />
      <Story />
      <Testimonials />
      <Blog />
      <ContactInfo />
      <Footer />

      {/* Global Styles for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
