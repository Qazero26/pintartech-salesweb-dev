import React from 'react';
import { BrainCircuit, CheckCircle2, Swords, BookmarkCheck, BarChart3, Trophy, BellRing, BookMarked, Sparkles } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: <BellRing size={28} color="#d97706" />,
      badge: 'Sistem Automatik 8:00 AM',
      extraBadge: '⭐ Khas Setiap Pagi',
      title: 'Notifikasi & Info Mufradat Harian',
      description: 'Hantaran automatik kosa kata pilihan Al-Quran beserta terjemahan Melayu & huraian ayat setiap pagi jam 8:00 AM secara percuma terus ke Telegram anda! Memudahkan hafalan harian 1 mufradat sehari.',
      highlight: true
    },
    {
      icon: <BrainCircuit size={28} color="#0284c7" />,
      badge: 'RAG Gemini 3.1 AI',
      extraBadge: null,
      title: 'Tutor Digital Ustaz Aiman 24/7',
      description: 'Menjawab apa jua soalan Tafsir, Asbabun Nuzul, I\'rab, dan Pengajaran Ayat berpandukan Kitab Tafsir STAM rasmi tanpa halusinasi.',
      highlight: false
    },
    {
      icon: <CheckCircle2 size={28} color="#0d9488" />,
      badge: '2,500+ Soalan • Latih Tubi /kuiz',
      extraBadge: '⭐ Termasuk KBAT',
      title: '2,500+ Bank Soalan Kuiz & Pemasa',
      description: 'Ada lebih 2,500+ bank soalan kuiz yang bersedia menguji pelajar STAM sama ada aspek Mufradat, Pengajaran Ayat, Tafsir, Bahasa (Nahu & Balagah), serta soalan aras tinggi KBAT. Dijelaskan jawapan betul secara automatik bersama pemasa.',
      highlight: false
    },
    {
      icon: <Swords size={28} color="#0284c7" />,
      badge: 'Mod /duel',
      extraBadge: null,
      title: 'Cabaran Duel Dwi-Hala',
      description: 'Cabar rakan sekelas secara langsung menerusi `/duel @username`. Berentap soalan kuiz secara live untuk meningkatkan kefahaman.',
      highlight: false
    },
    {
      icon: <BookmarkCheck size={28} color="#0d9488" />,
      badge: 'Hafalan /flashcards',
      extraBadge: null,
      title: 'Flashcard Mufradat Arab-Melayu',
      description: 'Kuasai kosa kata Arab-Melayu Al-Quran dengan kad imbasan interaktif. Memudahkan hafalan makna kalimat sukar sebelum peperiksaan.',
      highlight: false
    },
    {
      icon: <BarChart3 size={28} color="#0284c7" />,
      badge: 'Analitis /mystats',
      extraBadge: null,
      title: 'Kad Prestasi & Graf Visual',
      description: 'Pantau siri streak harian, purata masa menjawab, dan janakan Kad Kemajuan Visual bergrafik untuk dinilai guru & ibu bapa.',
      highlight: false
    },
    {
      icon: <Trophy size={28} color="#d97706" />,
      badge: 'Carta Ranking',
      extraBadge: null,
      title: 'Papan Pendahulu (Leaderboard)',
      description: 'Sistem ranking automatik untuk Top Scorer Kuiz, Juara Duel, dan Pelajar Paling Aktif. Membakar semangat mengulang secara konsisten.',
      highlight: false
    },
    {
      icon: <BookMarked size={28} color="#0d9488" />,
      badge: 'Nota /bookmarks',
      extraBadge: null,
      title: 'Simpan Nota Peribadi',
      description: 'Simpan mana-mana jawapan AI penting yang lengkap dengan huraian kitab sebagai simpanan nota peribadi ringkas anda.',
      highlight: false
    }
  ];

  return (
    <section id="modul" className="bg-light-pattern" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} />
            <span>Semua Ciri Dalam 1 Bot Telegram</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Ciri-Ciri Hebat Untuk <span className="gradient-text-telegram">Kecemerlangan STAM Anda</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Dilengkapi lebih <strong>2,500+ bank soalan kuiz</strong> (mufradat, tafsir, bahasa, pengajaran ayat & KBAT), modul <strong>Info Mufradat Harian Automatik</strong>, flashcard hafalan, dan tutor AI 24/7 khas untuk calon STAM.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {featureList.map((item, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                background: item.highlight ? 'linear-gradient(135deg, #fef3c7 0%, #ffffff 100%)' : '#ffffff',
                border: item.highlight ? '2px solid #f59e0b' : '1px solid var(--border-light)',
                boxShadow: item.highlight ? '0 10px 30px rgba(245, 158, 11, 0.2)' : 'var(--shadow-md)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: item.highlight ? 'var(--amber-100)' : 'var(--telegram-ice)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <span className={item.highlight ? 'badge-pill badge-amber' : 'badge-pill'} style={{ fontSize: '0.75rem', padding: '3px 10px' }}>
                    {item.badge}
                  </span>
                  {item.extraBadge && (
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--amber-600)' }}>
                      {item.extraBadge}
                    </span>
                  )}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginTop: '0.25rem'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
