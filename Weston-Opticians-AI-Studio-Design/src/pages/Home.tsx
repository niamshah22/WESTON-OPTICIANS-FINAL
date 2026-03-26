import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn, Button, SectionTitle } from '../components/ui';
import { useBookingModal } from '../components/BookingModal';
import GoogleReviews from '../components/GoogleReviews';

const Hero = () => {
  const { openModal } = useBookingModal();
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
              <Button className="group" onClick={openModal}>
                Book Your Eye Test
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/eyewear">
                <Button variant="outline">Explore Collections</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:flex items-center min-h-[600px] overflow-hidden bg-white px-12 py-16 gap-12">
        {/* Left: Text */}
        <div className="w-1/2 flex items-center">
          <div className="max-w-xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
                Independent & Local
              </span>
              <h1 className="text-7xl font-serif font-bold leading-[0.95] mb-6 tracking-tight text-black">
                Eye Care You<br />Can <span className="text-brand-purple italic">Trust</span>.
              </h1>
              <p className="text-lg text-zinc-600 max-w-lg leading-relaxed font-medium mb-10">
                Personalised vision care using the latest technology. We take the time to understand your eyes, because your vision is as unique as you are.
              </p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex gap-4">
                <Button className="group" onClick={openModal}>
                  Book Your Eye Test
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/eyewear">
                  <Button variant="outline">Explore Collections</Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            <ImageCarousel />
          </div>
          <div className="flex justify-center">
            <ProgressDots />
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
              className="h-16 max-w-[160px] w-auto object-contain transition-all duration-300"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section className="grid md:grid-cols-2 min-h-[500px]">
      {/* Left: Text */}
      <div className="bg-white flex items-center px-8 py-16 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight mb-8">
            Your family-run, local opticians since <span className="text-brand-purple">1982</span>
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            We believe in providing you with a good old fashioned customer service: our opticians take their time over every eye examination ensuring that every test is performed to the highest standard. Our friendly staff will help you choose from a wide range of frames, from budget to designer brands, sunglasses or contact lenses and also advise on our extensive range of fantastic lenses.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-8">
            When Weston Opticians was first established, the ethos printed on the back of the till receipts was &ldquo;Friendly, Personal and Professional&rdquo;. We have remained true to this aspiration throughout our existence.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-bold text-brand-purple underline underline-offset-4 hover:text-brand-purple-dark transition-colors"
          >
            Our Story
          </Link>
        </motion.div>
      </div>
      {/* Right: Image */}
      <div className="relative min-h-[400px]">
        <img
          src="/images/about-preview.jpg"
          alt="Optician performing an eye examination"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

const BookAppointment = () => {
  const { openModal } = useBookingModal();
  return (
    <section className="pt-16 pb-8 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
          {/* Left: Image */}
          <div className="relative min-h-[280px]">
            <img
              src="/images/opticians_test.jpg"
              alt="Optician helping customer choose frames"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Right: CTA */}
          <div className="bg-brand-purple/10 flex items-center px-10 py-12 md:px-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-8">
                Book Your Eye Test
              </h2>
              <Button className="group" onClick={openModal}>
                Request an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
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
      <AboutPreview />
      <BookAppointment />
      <GoogleReviews />
    </>
  );
}
