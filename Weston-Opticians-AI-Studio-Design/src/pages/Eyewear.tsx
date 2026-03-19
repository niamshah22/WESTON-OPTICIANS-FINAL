import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Filter } from 'lucide-react';
import { cn, Button, SectionTitle } from '../components/ui';

const brands = [
  { name: "Ray-Ban", category: "Iconic", desc: "Timeless designs that defined eyewear culture. From the Aviator to the Wayfarer.", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop" },
  { name: "Oakley", category: "Sport", desc: "Performance-driven eyewear engineered for athletes and active lifestyles.", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop" },
  { name: "Gucci", category: "Luxury", desc: "Italian luxury frames that blend bold fashion with exquisite craftsmanship.", image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=600&auto=format&fit=crop" },
  { name: "Prada", category: "Luxury", desc: "Sophisticated silhouettes and innovative materials from the house of Prada.", image: "https://images.unsplash.com/photo-1574258495973-f96a2b816b53?q=80&w=600&auto=format&fit=crop" },
  { name: "Tom Ford", category: "Luxury", desc: "Statement frames with unmistakable style and premium quality.", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=600&auto=format&fit=crop" },
  { name: "Oliver Peoples", category: "Artisan", desc: "Handcrafted frames with vintage-inspired designs and superior optics.", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=600&auto=format&fit=crop" },
  { name: "Chanel", category: "Luxury", desc: "Elegant and refined frames that embody Parisian chic.", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=600&auto=format&fit=crop" },
  { name: "Persol", category: "Artisan", desc: "Iconic Italian craftsmanship dating back to 1917 with the signature arrow hinge.", image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=600&auto=format&fit=crop" },
];

const categories = ["All", "Luxury", "Sport", "Iconic", "Artisan"];

const lensTypes = [
  { name: "Single Vision", desc: "For distance or reading correction with one focal point." },
  { name: "Varifocal", desc: "Seamless transition between distance, intermediate, and near vision." },
  { name: "Occupational", desc: "Designed for screen work with optimised intermediate and near zones." },
  { name: "Sunglasses", desc: "Prescription and non-prescription with full UV protection." },
];

export default function Eyewear() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? brands : brands.filter(b => b.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-zinc-100 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Collections</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Designer <span className="text-brand-purple italic">Eyewear</span><br />Curated For You.
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              Explore our handpicked collection of premium frames from the world's finest brands. Every pair fitted and adjusted by our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <SectionTitle subtitle="We carefully select brands that combine quality, style, and value.">
              Our <span className="text-brand-purple">Brands.</span>
            </SectionTitle>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-zinc-400" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat
                      ? "bg-brand-purple text-white"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 mb-4 overflow-hidden rounded-2xl bg-zinc-100">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {brand.category}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-brand-purple transition-colors">{brand.name}</h3>
                <p className="text-sm text-zinc-500 mt-1">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lens Types */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle subtitle="We offer a full range of lens options to suit your lifestyle and visual needs.">
            Lens <span className="text-brand-purple">Options.</span>
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {lensTypes.map((lens, i) => (
              <motion.div
                key={lens.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-display font-bold mb-3">{lens.name}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{lens.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Visit Us to Try On</h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10">
              No appointment needed for frame browsing. Pop in and our team will help you find your perfect pair.
            </p>
            <Link to="/contact">
              <Button className="mx-auto">
                Find Our Store <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
