import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModalProvider } from './components/BookingModal';
import Home from './pages/Home';
import EyeCare from './pages/EyeCare';
import Eyewear from './pages/Eyewear';
import About from './pages/About';
import Blog from './pages/Blog';
import ContactLenses from './pages/ContactLenses';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BookingModalProvider>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eye-care" element={<EyeCare />} />
          <Route path="/eyewear" element={<Eyewear />} />
          <Route path="/contact-lenses" element={<ContactLenses />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

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
    </BookingModalProvider>
  );
}
