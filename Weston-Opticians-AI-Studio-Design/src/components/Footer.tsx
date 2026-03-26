import { Link } from 'react-router-dom';
import { Eye, Instagram, Facebook } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-12">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
              <Eye className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">
              WESTON<span className="text-brand-purple">.</span>
            </span>
          </Link>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            Independent eye care specialists dedicated to clinical excellence and personal service since 1982.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/westonopticians/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/westonopticians" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
            <li><Link to="/eye-care" className="hover:text-white transition-colors">Eye Care</Link></li>
            <li><Link to="/eyewear" className="hover:text-white transition-colors">Eyewear</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Accreditations</h4>
          <div className="flex flex-wrap gap-6 items-center opacity-50 grayscale">
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
        <p>&copy; 2024 Weston Opticians. All Rights Reserved.</p>
        <p>Website by Digital Vision</p>
      </div>
    </div>
  </footer>
);
