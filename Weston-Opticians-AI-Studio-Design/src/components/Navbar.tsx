import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn, Button } from './ui';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Eye Care', path: '/eye-care' },
  { name: 'Eyewear', path: '/eyewear' },
  { name: 'Contact Lenses', path: '/contact-lenses' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link
          to="/contact"
          className="block w-full bg-brand-purple text-white text-center text-sm font-medium py-2"
        >
          Book Your Appointment
        </Link>
      </div>

      {/* ===== DESKTOP (xl and above) ===== */}
      <div className="hidden xl:block px-8">
        <div className="flex items-center">
          {/* Left: Nav links */}
          <div className="flex items-center gap-4 flex-1 justify-end whitespace-nowrap">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-brand-purple"
                    : "hover:text-brand-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <Link to="/" className="flex items-center shrink-0 mx-6">
            <img
              src="/images/weston-logo-final.png"
              alt="Weston Opticians"
              className="h-20 w-auto"
            />
          </Link>

          {/* Right: Nav links + CTA */}
          <div className="flex items-center gap-5 flex-1 justify-start whitespace-nowrap">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-brand-purple"
                    : "hover:text-brand-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="px-4 py-2 text-xs">Book Appointment</Button>
            </Link>
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
              <Link to="/contact">
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
