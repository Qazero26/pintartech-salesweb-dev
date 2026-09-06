import React from 'react';
import { BookOpen, CheckCircle, ScrollText, Layers, ShieldCheck, Sparkles, BookmarkCheck, FileText, Feather, Lightbulb } from 'lucide-react';

export default function SyllabusSection() {
  const surahs = [
    { title: 'Surah Az-Zariyat', arabic: 'سُورَةُ الذَّارِيَاتِ', desc: 'Hari kebangkitan itu benar, Balasan bagi orang-orang bertakwa dan sifat-sifat mereka, Tetamu Nabi Ibrahim, Mengambil pengajaran daripada kehancuran orang-orang musyrik terdahulu,  Ibadah ialah tujuan yang paling utama' },
	{ title: 'Surah An-Najm', arabic: 'سُورَةُ النَّجْمِ', desc: 'Kebenaran wahyu, Berhala tidak memberikan sebarang manfaat, Orang-orang musyrik menamakan para malaikat sebagai anak-anak perempuan Allah, Balasan bagi orang-orang yang melakukan kejahatan dan orang-orang yang berbuat baik, Celaan terhadap sebahagian orang musyrik, Antara manifestasi keadilan Ilahi, Antara tanda-tanda kekuasaan Allah Taala, Mengambil pengajaran daripada al-Quran' },
	{ title: 'Surah Al-Rahman', arabic: 'سُورَةُ الرَّحْمَٰنِ', desc: 'Antara nikmat Allah kepada makhluk-Nya, Antara bukti kekuasaan Allah Taala, Dahsyatnya keadaan pada hari kiamat, Keutamaan orang-orang yang takut kepada Allah dan balasan untuk mereka' },
	{ title: 'Surah Al-Waqi\'ah', arabic: 'سُورَةُ الْوَاقِعَةِ', desc: 'Golongan-golongan manusia pada hari kiamat, Golongan terdahulu: sifat-sifat dan balasan mereka, Golongan kanan dan balasan mereka, Golongan kiri dan balasan mereka, Bukti-bukti tentang hari kebangkitan, Kebenaran al-Quran' },
    { title: 'Surah Al-Hadid', arabic: 'سُورَةُ الْحَدِيدِ', desc: 'Mensucikan dan memuji Allah, Galakan supaya beriman dan membelanjakan harta pada jalan Allah, Keadaan orang-orang munafik pada hari kiamat, Peringatan kepada orang-orang beriman agar tidak lalai terhadap ajaran yang diturunkan dalam al-Quran, Sebahagian gambaran tentang hakikat dunia dan hakikat akhirat, Beriman kepada qada dan qadar, Tujuan para rasul diutuskan' }
  ];

  const corePillars = [
    { name: 'Ma\'ani Kalimat (Mufradat)', icon: '📖', desc: 'Terjemahan kosa kata Arab-Melayu tepat.' },
    { name: 'Tafsir Ayat', icon: '📜', desc: 'Huraian maksud & Asbabun Nuzul.' },
    { name: 'Perbincangan Bahasa', icon: '🖋️', desc: 'Analisis Nahu, Sorf & Sirr Balaghi.' },
    { name: 'Pengajaran Ayat', icon: '💡', desc: 'Iktibar & kaedah Istinbat Hukum.' }
  ];

  const kelebihan = [
    '2,500+ Bank Soalan Kuiz (Mufradat, Pengajaran Ayat, Tafsir, Bahasa & KBAT)',
    'Jawapan AI Tepat Berpandukan Kitab Rasmi STAM',
    'Kuiz Objektif Bertimer Mengikut Surah & Topik',
    'Duel Live Bersama Rakan Sekelas',
    'Kad Imbasan Flashcard Mufradat Arab-Melayu',
    'Analisis Graf Prestasi & Topik Lemah',
    'Notifikasi Mufradat Harian Pagi & Malam',
    'Sokongan 24/7 Tanpa Had Penggunaan',
    'Tiada Muat Turun — Terus Guna Di Telegram'
  ];

  return (
    <section id="silibus" className="bg-light-pattern" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <ScrollText size={16} />
            <span>KBD MATED • Sukatan Rasmi STAM</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Liputan Silibus Rasmi <span className="gradient-text-telegram">Tafsir wa Ulumuhu STAM</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Tafsir Bot direka khusus berpandukan <strong>Kurikulum Bersepadu Dini Menengah Atas dan Tingkatan Enam Dini (KBD MATED)</strong> untuk calon Sijil Tinggi Agama Malaysia.
          </p>
        </div>

        {/* 4 Pillars Highlight Banner */}
        <div style={{
          padding: '1.75rem',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--telegram-ice) 0%, #ffffff 100%)',
          border: '2px solid var(--border-telegram)',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--telegram-dark-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              4 Komponen Utama Dalam Setiap Surah STAM:
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {corePillars.map((p, pIdx) => (
              <div key={pIdx} style={{
                padding: '1rem',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.6rem' }}>{p.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="syllabus-grid">
          
          {/* 5 Surahs List Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--telegram-ice)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={22} color="var(--telegram-dark-blue)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Modul Tafsir Al-Quran (5 Surah Pilihan STAM)
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Terangkum Ma'ani Kalimat, Tafsir, Bahasa (Nahu/Sorf/Balagah) & Pengajaran
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {surahs.map((surah, idx) => (
                <div key={idx} className="clean-card" style={{ padding: '1.25rem', borderLeft: '4px solid var(--telegram-blue)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {surah.title}
                    </span>
                    <span className="font-arabic" style={{ fontSize: '1.2rem', color: 'var(--telegram-dark-blue)', fontWeight: 700 }}>
                      {surah.arabic}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.6rem' }}>
                    {surah.desc}
                  </p>
                  <div style={{ fontSize: '0.75rem', color: 'var(--telegram-dark-blue)', fontWeight: 700, display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span>• Mufradat</span>
                    <span>• Tafsir</span>
                    <span>• Nahu/Sorf/Balagah</span>
                    <span>• Pengajaran</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kelebihan Tafsir Bot Column */}
          <div className="clean-card" style={{ padding: '2rem', background: 'var(--telegram-ice)', border: '1px solid var(--border-telegram)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--telegram-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Kelebihan Tafsir Bot STAM
              </h3>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Kenapa ramai calon STAM memilih Tafsir Bot sebagai teman ulangkaji mereka:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {kelebihan.map((item, tIdx) => (
                <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  <CheckCircle size={18} color="var(--telegram-dark-blue)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: '#ffffff',
              border: '1px solid var(--border-telegram)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <ShieldCheck size={26} color="var(--amber-600)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                <strong>Bebas Halusinasi AI:</strong> Dijana menggunakan RAG Gemini 3.1 dari fail rujukan rasmi kitab STAM KBD MATED.
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .syllabus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
