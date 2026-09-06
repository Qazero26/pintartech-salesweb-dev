import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IntroductionSection from '../components/IntroductionSection';
import SyllabusSection from '../components/SyllabusSection';
import Features from '../components/Features';
import MockupsSection from '../components/MockupsSection';
import PromotionalCallouts from '../components/PromotionalCallouts';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function TafsirbotPage() {
  useEffect(() => {
    document.title = "TafsirBot STAM | Pembantu Pintar Tafsir Al-Quran STAM - Pintartech";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-light)' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <IntroductionSection />
        <Features />
        <SyllabusSection />
        <MockupsSection />
        <PromotionalCallouts />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
