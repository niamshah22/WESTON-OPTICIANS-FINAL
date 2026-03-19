import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { Button, SectionTitle } from '../components/ui';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Contact <span className="text-brand-purple italic">Us.</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              Whether you'd like to book an appointment, ask a question, or just pop in for a browse — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <div>
              <SectionTitle subtitle="Visit us in the heart of the high street. No appointment needed for frame browsing.">
                Find <span className="text-brand-purple">Us.</span>
              </SectionTitle>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Our Location</p>
                    <p className="text-zinc-600">124 High Street, Weston-super-Mare, BS23 1HP</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Call Us</p>
                    <p className="text-zinc-600">01934 624 882</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Email</p>
                    <p className="text-zinc-600">info@westonopticians.co.uk</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple shrink-0">
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

              {/* Map */}
              <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-xl">
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

            {/* Form Column */}
            <div>
              <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100">
                <h3 className="text-2xl font-display font-bold mb-2">Send Us a Message</h3>
                <p className="text-zinc-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-display font-bold mb-2">Message Sent!</h4>
                    <p className="text-zinc-500">Thank you for getting in touch. We'll respond within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-brand-purple font-bold text-sm mt-6 underline">Send another message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                          placeholder="01234 567 890"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                      >
                        <option>General Enquiry</option>
                        <option>Book an Appointment</option>
                        <option>Frame Enquiry</option>
                        <option>Contact Lens Enquiry</option>
                        <option>Complaint</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message <Send className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
