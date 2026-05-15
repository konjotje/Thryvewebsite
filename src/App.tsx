import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { ClientStories } from './components/sections/ClientStories';
import { Testimonials } from './components/sections/Testimonials';
import { ThryveMethod } from './components/sections/ThryveMethod';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { TermsAndConditions } from './components/pages/TermsAndConditions';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  return (
    <div className="bg-thryve-dark min-h-screen text-thryve-cream selection:bg-thryve-accent selection:text-white">
      <Navbar />
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
          <ThryveMethod />
          <ClientStories />
          <About />
          <Testimonials />
          <div className="relative bg-thryve-dark">
            <div className="absolute inset-0 z-0">
              <img src="https://i.imgur.com/NeXuhLC.jpeg" className="w-full h-full object-cover object-[20%_center] image-fade-abstract" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-thryve-dark/80 pointer-events-none"></div>
            </div>
            <div className="relative z-10">
              <FAQ />
              <Contact />
            </div>
          </div>
        </>
      )}
      {currentPage === 'terms' && <TermsAndConditions />}
      {currentPage === 'privacy' && <PrivacyPolicy />}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
