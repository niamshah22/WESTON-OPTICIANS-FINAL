import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, CalendarCheck, Send } from 'lucide-react';
import { Button } from './ui';

interface BookingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useBookingModal = () => useContext(BookingModalContext);

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all';

function BookingModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', phone: '', date: '' });
      setSubmitted(false);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-white rounded-3xl p-8 md:p-12 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-zinc-500" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-2">Appointment Requested!</h4>
                <p className="text-zinc-500">
                  Thank you! We'll confirm your appointment within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-purple font-bold text-sm mt-6 underline"
                >
                  Book another appointment
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold mb-2">Book Your Appointment</h3>
                <p className="text-zinc-500 mb-8">
                  Choose your preferred date and we'll confirm within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="01234 567 890"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Preferred Date</label>
                    <input
                      type="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Request Appointment <CalendarCheck className="w-4 h-4" />
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <BookingModal isOpen={isOpen} closeModal={closeModal} />
    </BookingModalContext.Provider>
  );
}
