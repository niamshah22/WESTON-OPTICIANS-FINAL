import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn, Button } from './ui';
import { useBookingModal } from './BookingModal';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Eye Care', path: '/eye-care' },
  { name: 'Eyewear', path: '/eyewear' },
  { name: 'Contact Lenses', path: '/contact-lenses' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useBookingModal();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="relative z-50 bg-white border-b border-zinc-100">
      {/* ===== MOBILE / TABLET (below xl) ===== */}
      <div className="xl:hidden">
        <div className="flex items-center justify-between px-5">
          <button
            className="p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link to="/" className="flex-1 flex justify-center">
            <img
              src="/images/weston-logo-final.png"
              alt="Weston Opticians"
              className="h-16 w-auto"
            />
          </Link>
          <a href="tel:01934624882" className="p-2 -mr-2">
            <Phone className="w-5 h-5" />
          </a>
        </div>
        <button
          onClick={openModal}
          className="block w-full bg-brand-purple text-white text-center text-sm font-medium py-2"
        >
          Book Your Appointment
        </button>
      </div>

      {/* ===== DESKTOP (xl and above) ===== */}
      <div className="hidden xl:block">
        {/* Row 1: Info | Logo | CTA */}
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex-1" />
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/weston-logo-final.png"
              alt="Weston Opticians"
              className="h-28 w-auto"
            />
          </Link>
          <div className="flex-1 flex justify-end">
            <Button className="px-10 py-4 text-lg" onClick={openModal}>Book Appointment</Button>
          </div>
        </div>

        {/* Row 2: Nav links centered */}
        <div className="bg-brand-purple px-8">
          <div className="flex items-center justify-center gap-8 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors text-white/80 hover:text-white",
                  location.pathname === link.path && "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path && "text-brand-purple"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); openModal(); }}>Book Appointment</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
