import React, { useEffect } from 'react';
import PintartechNavbar from '../components/pintartech/PintartechNavbar';
import PintartechHero from '../components/pintartech/PintartechHero';
import PintartechCourses from '../components/pintartech/PintartechCourses';
import PintartechEduGames from '../components/pintartech/PintartechEduGames';
import PintartechFeatures from '../components/pintartech/PintartechFeatures';
import PintartechTestimonials from '../components/pintartech/PintartechTestimonials';
import PintartechFAQ from '../components/pintartech/PintartechFAQ';
import PintartechFooter from '../components/pintartech/PintartechFooter';

export default function PintartechHome() {
  useEffect(() => {
    document.title = "PintarTech | Tech & Education Hub - Kelas Excel, AppSheet, Edu Games & AI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pintartech-theme" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PintartechNavbar />
      <main style={{ flex: 1 }}>
        <PintartechHero />
        <PintartechCourses />
        <PintartechEduGames />
        <PintartechFeatures />
        <PintartechTestimonials />
        <PintartechFAQ />
      </main>
      <PintartechFooter />
    </div>
  );
}
