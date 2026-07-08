import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Features } from './components/sections/Features';
import { ClientStories } from './components/sections/ClientStories';
import { Testimonials } from './components/sections/Testimonials';
import { ThryveMethod } from './components/sections/ThryveMethod';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { StructureAndAudit } from './components/sections/StructureAndAudit';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import PerformanceAuditPage from './components/performance-audit/PerformanceAuditPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { pathname, hash } = useLocation();
  const { language } = useLanguage();

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

  const homeTitle = "The Thryve Method | Peak Performance Coaching";
  const homeDesc = language === 'ENG'
    ? "Discover The Thryve Method: Peak performance coaching, biohacking, and physiology for ambitious entrepreneurs. Instantly boost your energy, productivity, and focus."
    : "Ontdek The Thryve Method: Peak performance coaching, biohacking en fysiologie voor ambitieuze ondernemers. Verhoog direct je energie, productiviteit en focus.";

  const privacyTitle = language === 'ENG'
    ? "Privacy Policy | The Thryve Method"
    : "Privacybeleid | The Thryve Method";
  const privacyDesc = language === 'ENG'
    ? "Read our privacy policy and learn how we manage your personal data."
    : "Lees ons privacybeleid en leer hoe we omgaan met jouw gegevens.";

  const auditTitle = language === 'ENG'
    ? "Performance Audit | The Thryve Method"
    : "Performance Audit | The Thryve Method";
  const auditDesc = language === 'ENG'
    ? "Get immediate insight into what is costing you energy and focus. Start the Performance Audit."
    : "Krijg direct inzicht in wat je energie en focus kost. Start de Performance Audit.";

  return (
    <div className="bg-thryve-dark min-h-screen text-thryve-cream selection:bg-thryve-accent selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>{homeTitle}</title>
                <meta name="description" content={homeDesc} />
                <link rel="canonical" href="https://thethryvemethod.com/" />
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "HealthAndBeautyBusiness",
                      "name": "The Thryve Method",
                      "image": "https://thethryvemethod.com/images/thryvemethodsocial.webp",
                      "@id": "",
                      "url": "https://thethryvemethod.com/",
                      "telephone": "",
                      "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "NL"
                      },
                      "founder": {
                        "@type": "Person",
                        "name": "Iven van Stekelenburg",
                        "jobTitle": "Peak Performance Coach & Fysiotherapeut"
                      },
                      "description": "${language === 'ENG' ? 'Peak performance coaching, biohacking, and vitality for ambitious entrepreneurs. Reach an unprecedented level of energy.' : 'Peak performance coaching, biohacking en vitaliteit voor ambitieuze ondernemers. Bereik een ongekend energieniveau.'}"
                    }
                  `}
                </script>
              </Helmet>
              <StructureAndAudit />
              <Features />
              <ClientStories />
              <ThryveMethod />
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
                  <Testimonials />
                  <FAQ />
                </div>
              </div>
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <Helmet>
                <title>{privacyTitle}</title>
                <meta name="description" content={privacyDesc} />
                <link rel="canonical" href="https://thethryvemethod.com/privacy-policy" />
              </Helmet>
              <PrivacyPolicy />
            </>
          } />
          <Route path="/performance-audit" element={
            <>
              <Helmet>
                <title>{auditTitle}</title>
                <meta name="description" content={auditDesc} />
                <link rel="canonical" href="https://thethryvemethod.com/performance-audit" />
              </Helmet>
              <PerformanceAuditPage />
            </>
          } />
        </Routes>
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
