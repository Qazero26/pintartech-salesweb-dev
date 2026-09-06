import React, { useState } from 'react';
import { Image, CheckCircle2, Swords, RotateCw, BarChart3, BrainCircuit, Smartphone, BellRing, ArrowRight, Send, Sparkles } from 'lucide-react';

export default function MockupsSection() {
  const [activeId, setActiveId] = useState('kuiz');

  const mockups = [
    {
      id: 'kuiz',
      title: '2,500+ Bank Soalan Kuiz & Timer',
      command: '/kuiz',
      icon: <CheckCircle2 size={22} color="#0284c7" />,
      desc: 'Latih tubi lebih 2,500+ bank soalan kuiz untuk menguji calon STAM sama ada mufradat, pengajaran ayat, tafsir, bahasa, dan KBAT.',
      imageSrc: '/mockups/kuiz.jpg?v=2',
      fileName: 'kuiz.jpg',
      badge: '2,500+ Bank Soalan',
      featurePoints: [
        'Ada lebih 2,500+ bank soalan kuiz (Mufradat, Pengajaran Ayat, Tafsir, Bahasa & KBAT)',
        'Pemasa 30 saat bagi setiap soalan untuk menguji kepantasan & keyakinan',
        'Penjelasan jawapan betul automatik beserta dalil rujukan kitab STAM'
      ]
    },
    {
      id: 'duel',
      title: 'Modul Cabaran Duel Dwi-Hala',
      command: '/duel @username',
      icon: <Swords size={22} color="#0d9488" />,
      desc: 'Sesi pertarungan kuiz secara langsung bersama rakan sekelas untuk menentukan juara markah terbanyak.',
      imageSrc: '/mockups/duel.jpg?v=2',
      fileName: 'duel.jpg',
      badge: 'Cabaran Live',
      featurePoints: [
        'Ajak rakan sekelas bertarung kuiz secara live di Telegram',
        'Soalan disegerakkan serentak untuk kedua-dua pemain',
        'Pengiraan markah dan penentuan juara bertarung secara langsung'
      ]
    },
    {
      id: 'flashcards',
      title: 'Modul Flashcard Mufradat',
      command: '/flashcards',
      icon: <RotateCw size={22} color="#0284c7" />,
      desc: 'Kad imbasan interaktif kosa kata Arab-Melayu untuk memudahkan hafalan maksud perkataan sukar Al-Quran.',
      imageSrc: '/mockups/flashcards.jpg?v=2',
      fileName: 'flashcards.jpg',
      badge: 'Hafalan Pantas',
      featurePoints: [
        'Kad imbasan kosa kata Arab-Melayu digital',
        'Flip kad secara serta-merta untuk semak maksud Melayu',
        'Memudahkan hafalan mufradat sukar sebelum peperiksaan'
      ]
    },
    {
      id: 'mufradat',
      title: 'Notifikasi Mufradat Harian (8:00 AM)',
      command: 'Push Notification Automatik',
      icon: <BellRing size={22} color="#d97706" />,
      desc: 'Hantaran automatik kosa kata pilihan Al-Quran beserta terjemahan & huraian setiap pagi jam 8:00 AM secara percuma.',
      imageSrc: '/mockups/mufradat.jpg?v=2',
      fileName: 'mufradat.jpg',
      badge: 'Setiap Pagi',
      featurePoints: [
        'Hantaran automatik terus ke Telegram jam 8:00 AM setiap pagi',
        'Kosa kata pilihan Al-Quran beserta huraian & terjemahan',
        'Hafal 1 mufradat sehari tanpa perlu buka buku teks'
      ]
    },
    {
      id: 'mystats',
      title: 'Kad Prestasi Bergraf Analytics',
      command: '/mystats',
      icon: <BarChart3 size={22} color="#0284c7" />,
      desc: 'Paparan graf pencapaian visual, siri streak harian, dan analisis purata masa menjawab soalan.',
      imageSrc: '/mockups/mystats.jpg?v=2',
      fileName: 'mystats.jpg',
      badge: 'Analitis',
      featurePoints: [
        'Penjanan Kad Prestasi Visual bergrafik automatik',
        'Kira siri streak harian & peratus ketepatan jawapan',
        'Pengenalpastian surah & topik yang masih lemah'
      ]
    },
    {
      id: 'ai',
      title: 'Tutor AI Ustaz Aiman 24/7',
      command: 'Tanya Soalan Tafsir',
      icon: <BrainCircuit size={22} color="#0d9488" />,
      desc: 'Soalan tafsir, Asbabun Nuzul, dan I\'rab dijawab pantas mengikut Kitab Rujukan Rasmi STAM.',
      imageSrc: '/mockups/ai.jpg?v=2',
      fileName: 'ai.jpg',
      badge: 'Tutor 24/7',
      featurePoints: [
        'Respon AI sangat pantas berasaskan Kitab Rujukan STAM',
        'Jawab musykil Tafsir, I\'rab, Asbabun Nuzul & Balagah',
        'RAG Gemini 3.1 bebas halusinasi dengan rujukan rasmi'
      ]
    }
  ];

  const activeMockup = mockups.find((m) => m.id === activeId) || mockups[0];

  return (
    <section id="mockups" className="bg-light-pattern" style={{ padding: '6.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Smartphone size={16} />
            <span>Demonstrasi Modul Interaktif</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Gambaran Sebenar <span className="gradient-text-telegram">Modul Pembelajaran STAM</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Pilih mana-mana modul di sebelah kiri untuk melihat gambaran sebenar paparan telefon di sebelah kanan.
          </p>
        </div>

        {/* Split Screen Layout (Interactive Menu Left + Phone Frame Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="split-mockup-grid">
          
          {/* Left Column: Interactive Feature Menu Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {mockups.map((m) => {
              const isSelected = m.id === activeId;
              return (
                <div
                  key={m.id}
                  onClick={() => setActiveId(m.id)}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: isSelected ? 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)' : '#ffffff',
                    border: isSelected ? '2px solid var(--telegram-blue)' : '1px solid var(--border-light)',
                    boxShadow: isSelected ? '0 12px 30px rgba(34, 158, 217, 0.2)' : 'var(--shadow-sm)',
                    transform: isSelected ? 'translateX(6px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: isSelected ? 'var(--telegram-blue)' : 'var(--telegram-ice)',
                        color: isSelected ? '#ffffff' : 'var(--telegram-dark-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}>
                        {m.icon}
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {m.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="badge-pill" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                        {m.command}
                      </span>
                      {isSelected && (
                        <ArrowRight size={18} color="var(--telegram-blue)" />
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginLeft: '3.1rem' }}>
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Phone Device Showcase Stage */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'sticky',
            top: '100px'
          }}>
            
            {/* Feature Callout Summary Card Above Phone */}
            <div style={{
              width: '100%',
              maxWidth: '340px',
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              background: '#ffffff',
              border: '1.5px solid var(--border-telegram)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge-pill badge-amber" style={{ fontSize: '0.78rem' }}>
                  ⭐ {activeMockup.badge}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--telegram-dark-blue)' }}>
                  {activeMockup.command}
                </span>
              </div>
              <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {activeMockup.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {activeMockup.featurePoints.map((pt, pIdx) => (
                  <div key={pIdx} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--telegram-blue)', fontWeight: 800 }}>✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exact Custom Device Frame Container (w-[320px] h-[650px]) */}
            <div
              className="phone-device-frame"
              style={{
                position: 'relative',
                width: '320px',
                maxWidth: '100%',
                height: '650px',
                background: '#1e293b',
                borderRadius: '2.5rem',
                padding: '0.375rem',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(34, 158, 217, 0.25)',
                border: '2px solid #475569',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.4s ease'
              }}
            >
              {/* Camera Punch Hole */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  width: '0.75rem',
                  height: '0.75rem',
                  background: '#000000',
                  borderRadius: '9999px',
                  zIndex: 20,
                  boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)'
                }}
              />

              {/* Top Speaker Slit */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  width: '2.5rem',
                  height: '0.25rem',
                  background: '#334155',
                  borderRadius: '9999px',
                  zIndex: 20
                }}
              />

              {/* Screen Content Container */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#0e1621',
                  borderRadius: '2.2rem',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img
                  key={activeMockup.id}
                  src={activeMockup.imageSrc}
                  alt={activeMockup.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    animation: 'fadeIn 0.4s ease-in-out'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Fallback Placeholder */}
                <div
                  className="mockup-placeholder"
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '2rem 1rem',
                    background: '#0e1621',
                    color: '#ffffff'
                  }}
                >
                  <Image size={28} color={activeMockup.accentColor} />
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1', textAlign: 'center' }}>
                    Fail <code style={{ color: '#38bdf8' }}>{activeMockup.fileName}</code>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Telegram Try Button */}
            <a
              href="https://t.me/Ustaimantafsirbot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '1.5rem', width: '100%', maxWidth: '320px', padding: '0.85rem 1.5rem' }}
            >
              <Send size={18} />
              <span>Cuba Modul Ini Di Telegram</span>
            </a>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .split-mockup-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0.5; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
