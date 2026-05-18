import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
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
import PerformanceAuditPage from './components/performance-audit/PerformanceAuditPage';

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="bg-thryve-dark min-h-screen text-thryve-cream selection:bg-thryve-accent selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>The Thryve Method | Peak Performance Coaching</title>
              <meta name="description" content="Ontdek The Thryve Method: Peak performance coaching, biohacking en fysiologie voor ambitieuze ondernemers. Verhoog direct je energie, productiviteit en focus." />
            </Helmet>
            <Hero />
            <Features />
            <ThryveMethod />
            <ClientStories />
            <About />
            <Testimonials />
            <div className="relative bg-thryve-dark overflow-hidden">
              <div 
                className="absolute inset-0 z-0 opacity-20 image-fade-abstract"
                style={{ 
                  backgroundImage: 'url(/images/services.webp)',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: '50% 25%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-thryve-dark via-transparent to-thryve-dark pointer-events-none z-[1]"></div>
              <div className="relative z-10">
                <Contact />
                <FAQ />
              </div>
            </div>
          </>
        } />
        <Route path="/terms-and-conditions" element={
          <>
            <Helmet>
              <title>Algemene Voorwaarden | The Thryve Method</title>
              <meta name="description" content="Lees onze algemene voorwaarden." />
            </Helmet>
            <TermsAndConditions />
          </>
        } />
        <Route path="/privacy-policy" element={
          <>
            <Helmet>
              <title>Privacybeleid | The Thryve Method</title>
              <meta name="description" content="Lees ons privacybeleid en leer hoe we omgaan met jouw gegevens." />
            </Helmet>
            <PrivacyPolicy />
          </>
        } />
        <Route path="/performance-audit" element={
          <>
            <Helmet>
              <title>Performance Audit | The Thryve Method</title>
              <meta name="description" content="Krijg direct inzicht in wat je energie en focus kost. Start de Performance Audit." />
            </Helmet>
            <PerformanceAuditPage />
          </>
        } />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
