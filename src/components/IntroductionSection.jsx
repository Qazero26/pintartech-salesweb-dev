import React from 'react';
import { Sparkles, ArrowRight, Zap, BookOpen, Smartphone, ShieldCheck, Gamepad2, Layers, CheckCircle2, BrainCircuit, Swords, RotateCw, BarChart3, Users, HelpCircle, CalendarDays } from 'lucide-react';

export default function IntroductionSection() {
  const roles = [
    {
      title: '1. Tutor AI Ustaz Aiman 24/7',
      command: 'Tanya Soalan Kitab',
      desc: 'Sama seperti ada Ustaz peribadi di sebelah anda! Bertanyakan apa sahaja soalan Tafsir, Asbabun Nuzul, I\'rab, dan Pengajaran Ayat. Diberikan jawapan tepat berserta rujukan kitab rasmi STAM.',
      icon: <BrainCircuit size={28} color="#0088cc" />,
      bg: 'var(--telegram-ice)'
    },
    {
      title: '2. Mesin Kuiz Objektif & Timer (2,500+ Bank Soalan)',
      command: '/kuiz',
      desc: 'Ada lebih 2,500+ bank soalan kuiz yang bersedia menguji pelajar STAM sama ada aspek mufradat, pengajaran ayat, tafsir, bahasa, mahupun soalan aras tinggi KBAT. Disertakan pemasa dan semakan jawapan automatik!',
      icon: <CheckCircle2 size={28} color="#0d9488" />,
      bg: '#f0fdf4'
    },
    {
      title: '3. Arena Cabaran Duel Live',
      command: '/duel @username',
      icon: <Swords size={28} color="#0088cc" />,
      desc: 'Bosan mengulang seorang diri? Ajak rakan sekelas bertarung soalan kuiz secara live di Telegram. Mengulang jadi seronok dan tidak mengantuk!',
      bg: 'var(--telegram-ice)'
    },
    {
      title: '4. Kad Imbasan Flashcard Mufradat',
      command: '/flashcards',
      icon: <RotateCw size={28} color="#0d9488" />,
      desc: 'Kuasai kosa kata Arab-Melayu Al-Quran dengan kad imbasan digital. Memudahkan hafalan makna kalimat sukar sebelum peperiksaan.',
      bg: '#f0fdf4'
    },
    {
      title: '5. Analisis Graf & Topik Lemah',
      command: '/mystats & /weakest_topics',
      icon: <BarChart3 size={28} color="#d97706" />,
      desc: 'Bot akan merekod statistik jawapan anda, menilai peratus ketepatan, mengenalpasti surah yang anda lemah, dan menjana Kad Kemajuan Visual.',
      bg: 'var(--amber-100)'
    },
    {
      title: '6. Info & Cabaran Mufradat Harian',
      command: 'Info Harian',
      icon: <CalendarDays size={28} color="#7c3aed" />,
      desc: 'Terima notifikasi mufradat setiap pagi dan jawab satu soalan cabaran setiap malam untuk menguji kefahaman anda.',
      bg: '#f5f3ff'
    }
  ];

  const steps = [
    {
      step: 'Langkah 1',
      title: 'Buka Telegram Anda',
      desc: 'Cari username @Ustaimantafsirbot atau tekan butang "Mula Percuma". Tiada muat turun app baharu!',
      icon: <Smartphone size={26} color="#0088cc" />
    },
    {
      step: 'Langkah 2',
      title: 'Tekan /start & Pilih Modul',
      desc: 'Pilih nak jawab kuiz, hafal flashcard, ajak rakan duel, atau bertanyakan soalan kitab pada AI.',
      icon: <Layers size={26} color="#0d9488" />
    },
    {
      step: 'Langkah 3',
      title: 'Kuasai STAM & Skor Mumtaz',
      desc: 'Kekalkan siri streak harian, baiki topik lemah anda, dan bersedia cemerlang dalam peperiksaan.',
      icon: <Sparkles size={26} color="#d97706" />
    }
  ];

  return (
    <section id="pengenalan" className="bg-light-pattern" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Main Intro Concept Card */}
        <div className="clean-card" style={{
          padding: '3.5rem 2.5rem',
          background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f2fe 100%)',
          border: '2px solid var(--border-telegram)',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <HelpCircle size={16} />
              <span>Pengenalan Ringkas & Mudah</span>
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              lineHeight: 1.25
            }}>
              Apa Sebenarnya <span className="gradient-text-telegram">Tafsir Bot STAM Ini?</span>
            </h2>

            <p style={{
              fontSize: '1.18rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem'
            }}>
              Tafsir Bot STAM ialah <strong>Sistem Pembelajaran & Ulangkaji All-in-One</strong> di Telegram yang menggabungkan <strong>6 Fungsi Utama</strong> untuk membantu calon Sijil Tinggi Agama Malaysia (STAM) menguasai subjek Tafsir wa Ulumuhu tanpa perlu bersusah-payah!
            </p>

            {/* 5 Core Roles Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              textAlign: 'left'
            }}>
              {roles.map((r, rIdx) => (
                <div key={rIdx} style={{
                  padding: '1.35rem',
                  borderRadius: 'var(--radius-md)',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {r.icon}
                    </div>
                    {r.command && <span className="badge-pill" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                      {r.command}
                    </span>}
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Telegram Callout Box */}
            <div style={{
              marginTop: '2.5rem',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              background: '#ffffff',
              border: '2px dashed var(--telegram-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              textAlign: 'center'
            }}>
              <Smartphone size={24} color="#0088cc" />
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                💡 <strong>Mengapa Di Telegram?</strong> Tanpa perlu muat turun aplikasi baharu & tanpa memenuhi memori telefon anda. Buka Telegram <a href="https://t.me/Ustaimantafsirbot" target="_blank" rel="noopener noreferrer" style={{ color: '#0088cc', textDecoration: 'underline' }}>@Ustaimantafsirbot</a> dan terus boleh mengulang kajian!
              </div>
            </div>

          </div>
        </div>

        {/* How It Works 3 Steps */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} />
            <span>3 Langkah Mudah Mula Mengulang</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Bagaimana <span className="gradient-text-telegram">Cara Menggunakannya?</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Proses yang sangat mudah tanpa pendaftaran rumit. Sedia digunakan dalam masa kurang 10 saat!
          </p>
        </div>

        {/* 3 Step Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {steps.map((s, idx) => (
            <div key={idx} className="clean-card" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'var(--telegram-ice)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {s.icon}
                </div>
                <span className="badge-pill badge-amber" style={{ fontSize: '0.8rem', padding: '3px 10px' }}>
                  {s.step}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--text-primary)'
              }}>
                {s.title}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
