import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn, SectionTitle } from '../components/ui';

const posts = [
  {
    title: "How Digital Screens Affect Your Vision",
    excerpt: "With the average adult spending over 8 hours a day looking at screens, digital eye strain is becoming increasingly common. Here's what you need to know about protecting your eyes.",
    date: "March 2024",
    category: "Eye Health",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    title: "Spring Trends: The Bold Frame Revival",
    excerpt: "This season is all about making a statement. From oversized acetates to colourful translucent frames, discover the eyewear trends defining 2024.",
    date: "February 2024",
    category: "Style",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    title: "Understanding Children's Eye Health",
    excerpt: "One in five children has an undetected vision problem. Learn the signs to watch for and why regular eye tests are essential from an early age.",
    date: "January 2024",
    category: "Clinical",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read",
  },
  {
    title: "The Ultimate Guide to Varifocal Lenses",
    excerpt: "Thinking about varifocals? We break down how they work, what to expect during the adjustment period, and how to choose the right type for your lifestyle.",
    date: "December 2023",
    category: "Eye Health",
    image: "https://images.unsplash.com/photo-1574258495973-f96a2b816b53?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read",
  },
  {
    title: "Why Independent Opticians Are Different",
    excerpt: "In a world of high street chains, independent opticians offer something special. Discover the benefits of choosing an independent practice for your eye care.",
    date: "November 2023",
    category: "Community",
    image: "https://images.unsplash.com/photo-1556740734-7f95891f7f89?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    title: "Protecting Your Eyes in Winter",
    excerpt: "Cold weather, dry air, and low winter sun can all impact your eye comfort. Our expert tips for keeping your eyes healthy through the colder months.",
    date: "October 2023",
    category: "Eye Health",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    readTime: "3 min read",
  },
];

const allCategories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-zinc-100 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Journal</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Expert <span className="text-brand-purple italic">Insights</span><br />& Style Guides.
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              Expert advice, style inspiration, and eye health tips from our clinical team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Posts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-16">
            {allCategories.map(cat => (
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

          {/* Featured Post (first one) */}
          {filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 mb-16 group cursor-pointer"
            >
              <div className="relative h-80 md:h-full overflow-hidden rounded-3xl">
                <img src={filtered[0].image} alt={filtered[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{filtered[0].category}</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">{filtered[0].date} &middot; {filtered[0].readTime}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-brand-purple transition-colors">{filtered[0].title}</h2>
                <p className="text-zinc-600 leading-relaxed mb-6">{filtered[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-brand-purple group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.slice(1).map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{post.category}</div>
                </div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{post.date} &middot; {post.readTime}</p>
                <h3 className="text-xl font-display font-bold group-hover:text-brand-purple transition-colors mb-2">{post.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{post.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
