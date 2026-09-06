import React from 'react';
import { Send, Sparkles, BookOpen, CheckCircle2, Star, Swords, BarChart3, RotateCw, BellRing, BrainCircuit, Tablet, HelpCircle } from 'lucide-react';

export default function Hero() {
  const metrics = [
    {
      num: '100%',
      label: 'Silibus KBD MATED',
      sub: 'Sukatan STAM Rasmi',
      icon: <CheckCircle2 size={20} color="#0088cc" />,
      bg: 'var(--telegram-ice)'
    },
    {
      num: '2,500+',
      label: 'Bank Soalan Kuiz',
      sub: 'Mufradat, Tafsir, Bahasa & KBAT',
      icon: <HelpCircle size={20} color="#0d9488" />,
      bg: '#f0fdf4'
    },
    {
      num: '5 Surah',
      label: 'Tafsir Al-Quran',
      sub: 'Mufradat, Bahasa & Pengajaran',
      icon: <BookOpen size={20} color="#0d9488" />,
      bg: '#f0fdf4'
    },
    {
      num: '6 Modul',
      label: 'Latih Tubi & AI',
      sub: 'Kuiz, Duel, Flashcards & /mystats',
      icon: <Swords size={20} color="#0088cc" />,
      bg: 'var(--telegram-ice)'
    },
    {
      num: '8:00 AM',
      label: 'Notifikasi Harian',
      sub: 'Push Info Mufradat Percuma',
      icon: <BellRing size={20} color="#d97706" />,
      bg: 'var(--amber-100)'
    },
    {
      num: 'Pantas',
      label: 'Respon Tutor AI',
      sub: 'Ustaz Aiman Standby 24/7',
      icon: <BrainCircuit size={20} color="#0088cc" />,
      bg: 'var(--telegram-ice)'
    }
  ];

  return (
    <section className="bg-light-pattern" style={{
      position: 'relative',
      padding: '2.25rem 0 3.5rem 0',
      overflow: 'hidden'
    }}>
      {/* Background Glow Blobs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '10%',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(34, 158, 217, 0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '3.5rem'
        }} className="hero-grid">
          
          {/* Left Column */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={16} color="#229ED9" />
              <span>Silibus KBD MATED STAM Latest • 5 Surah Pilihan</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}>
              Kuasai Subjek <span className="gradient-text-telegram">Tafsir wa Ulumuhu STAM</span> Dengan Platform Pembelajaran Serba Lengkap
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              Berpandukan <strong>Kurikulum KBD MATED STAM</strong>. Dilengkapi lebih <strong>2,500+ bank soalan kuiz</strong> untuk menguji pelajar STAM sama ada aspek <strong>Mufradat</strong>, <strong>Pengajaran Ayat</strong>, <strong>Tafsir</strong>, <strong>Bahasa (Nahu & Balagah)</strong>, dan <strong>KBAT</strong> berserta latih tubi bertimer, flashcard, dan mod duel!
            </p>

            {/* Feature Modules Quick Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.25rem' }}>
              <span className="badge-pill" style={{ background: '#ffffff', fontSize: '0.8rem', border: '1px solid #0088cc', color: '#0088cc', fontWeight: 700 }}>
                <CheckCircle2 size={14} color="#0088cc" /> 2,500+ Bank Soalan Kuiz (KBAT)
              </span>
              <span className="badge-pill" style={{ background: '#ffffff', fontSize: '0.8rem' }}>
                <CheckCircle2 size={14} color="#0088cc" /> Kuiz Objektif & Timer
              </span>
              <span className="badge-pill" style={{ background: '#ffffff', fontSize: '0.8rem' }}>
                <Swords size={14} color="#0d9488" /> Mod Cabaran Duel (/duel)
              </span>
              <span className="badge-pill" style={{ background: '#ffffff', fontSize: '0.8rem' }}>
                <RotateCw size={14} color="#0088cc" /> Flashcard Hafalan
              </span>
              <span className="badge-pill badge-amber" style={{ fontSize: '0.8rem' }}>
                <BellRing size={14} color="#d97706" /> Info Mufradat 8 AM
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <a href="https://t.me/Ustaimantafsirbot" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Send size={18} />
                <span>Mula Ulangkaji di Telegram</span>
              </a>
              <a href="#modul" className="btn-secondary">
                <BookOpen size={18} />
                <span>Lihat Semua Modul</span>
              </a>
            </div>
          </div>

          {/* Right Column - Sleek iPad / Tablet Device Frame Container */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            <div className="ipad-device-frame animate-float" style={{
              width: '100%',
              maxWidth: '520px',
              background: '#09090b',
              borderRadius: '24px',
              padding: '8px',
              border: '1.5px solid #27272a',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 35px rgba(34, 158, 217, 0.25)',
              position: 'relative'
            }}>
              
              {/* iPad Top Camera Lens (Landscape) */}
              <div style={{
                position: 'absolute',
                top: '3px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '4px',
                background: '#18181b',
                borderRadius: '50%',
                zIndex: 10
              }} />

              {/* iPad Screen Area Container (Landscape Ratio) */}
              <div style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#0e1621',
                width: '100%',
                aspectRatio: '4 / 3',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src="/ipad_hero.png"
                  alt="Aplikasi Tafsir Bot STAM Di iPad"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Try .jpg if .png is not found
                    if (!e.currentTarget.dataset.triedJpg) {
                      e.currentTarget.dataset.triedJpg = 'true';
                      e.currentTarget.src = '/ipad_hero.jpg';
                    } else {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }
                  }}
                />

                {/* Fallback Placeholder when image is not provided yet */}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #0e1621 0%, #17212b 100%)',
                  color: '#ffffff'
                }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(34, 158, 217, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <Tablet size={28} color="#38bdf8" />
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                    Bingkai iPad Pro Tafsir Bot STAM
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '280px' }}>
                    Simpan gambar screenshot bot di: <br />
                    <code style={{ color: '#38bdf8', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginTop: '4px' }}>
                      public/ipad_hero.png
                    </code> (atau <code>.jpg</code>)
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Full Width Rich Trust Metrics Banner */}
        <div style={{
          padding: '1.75rem 2rem',
          borderRadius: 'var(--radius-xl)',
          background: '#ffffff',
          border: '1.5px solid var(--border-telegram)',
          boxShadow: '0 10px 30px rgba(34, 158, 217, 0.12)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {metrics.map((m, mIdx) => (
            <div key={mIdx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingRight: mIdx < metrics.length - 1 ? '1rem' : '0'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: m.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {m.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {m.num}
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--telegram-dark-blue)', marginTop: '2px' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {m.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
