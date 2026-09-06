import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  Gamepad2, 
  Bot, 
  Check, 
  ArrowRight, 
  Clock, 
  Users, 
  Layers
} from 'lucide-react';
import AppSheetIcon from './AppSheetIcon';

export default function PintartechCourses() {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 'excel',
      category: 'excel',
      title: 'Kelas Asas Microsoft Excel',
      badge: 'Kelas Latihan Asas',
      badgeColor: '#059669',
      icon: <FileSpreadsheet size={28} />,
      colorTheme: '#059669',
      bgTheme: '#ecfdf5',
      borderTheme: '#a7f3d0',
      linkTarget: '/kelasexcel',
      btnText: 'Lihat Maklumat Kelas Excel',
      description: 'Bimbingan amali berpandu langkah demi langkah untuk menguasai asas Microsoft Excel, pengurusan lembaran kerja, kemasukan data & formula asas.',
      syllabus: [
        'Pengenalan Antara Muka & Navigation Lembaran Kerja Excel',
        'Pengurusan & Format Sel, Baris serta Lajur secara Kemas',
        'Formulasi Asas Excel (SUM, AVERAGE, COUNT, MAX, MIN)',
        'Penggunaan Fungsi Logik Asas IF & Pengisihan Data (Sort & Filter)',
        'Latihan Amali Asas Berdasarkan Senario Tugas Sebenar'
      ],
      duration: 'Sesi Latihan Asas Interaktif',
      level: 'Khusus untuk Asas / Zero',
    },
    {
      id: 'appsheet',
      category: 'appsheet',
      title: 'Kelas AppSheet (No-Code App Dev)',
      badge: 'Kelas Latihan',
      badgeColor: '#7c3aed',
      icon: <AppSheetIcon size={32} />,
      colorTheme: '#7c3aed',
      bgTheme: '#f5f3ff',
      borderTheme: '#ddd6fe',
      linkTarget: '/kelasappsheet',
      btnText: 'Lihat Maklumat Kelas AppSheet',
      description: 'Bina aplikasi telefon pintar dan sistem pengurusan sendiri tanpa perlu menulis sebarang kod pengaturcaraan menggunakan Google AppSheet.',
      syllabus: [
        'Integrasi Pangkalan Data Google Sheets / Excel',
        'Reka Bentuk UI/UX Aplikasi Telefon & Tablet',
        'Sistem Log In, Kebenaran Akses & Borang Digital',
        'Automasi Emel & Notifikasi Sistem',
        'Projek Praktikal: App Kehadiran / Stok Inventory'
      ],
      duration: 'Bengkel Intensif',
      level: 'Asas (Tanpa Coding)',
    },
    {
      id: 'edugame',
      category: 'edugame',
      title: 'Koleksi Edu Games (Jualan Game)',
      badge: 'Produk Permainan',
      badgeColor: '#f43f5e',
      icon: <Gamepad2 size={28} />,
      colorTheme: '#f43f5e',
      bgTheme: '#fff1f2',
      borderTheme: '#fecdd3',
      isEduGamesAnchor: true,
      btnText: 'Lihat Koleksi Edu Games',
      description: 'Permainan pendidikan digital interaktif sedia ada untuk pembelajaran anak-anak & pelajar sekolah. Membantu pembelajaran yang seronok & berkesan.',
      syllabus: [
        '🎮 Pintar Arabic Kids (Permainan Bahasa Arab Kanak-Kanak)',
        '✏️ Pintar Jawi Kids (Permainan Mengenal & Menyambung Jawi)',
        '🔢 Pintar Math Kids (Permainan Matematik & Logik)',
        '🧠 Kuis Uji Minda & Cabaran Mengira Pantas',
        '📱 Sesuai dimainkan terus di Telefon, Tablet & Web'
      ],
      duration: 'Akses Permainan Sedia Ada',
      level: 'Kanak-Kanak & Pelajar',
    },
    {
      id: 'tafsirbot',
      category: 'ai',
      title: 'TafsirBot STAM (Sistem AI Pendidikan Islam)',
      badge: 'Produk AI',
      badgeColor: '#0088cc',
      icon: <Bot size={28} />,
      colorTheme: '#0088cc',
      bgTheme: '#e8f5fe',
      borderTheme: '#bbeeef',
      linkTarget: '/tafsirbotSTAM',
      btnText: 'Buka Laman TafsirBot STAM',
      description: 'Pembantu pintar berasaskan Telegram khas untuk calon STAM & Pengajian Islam mendalami Tafsir Al-Quran secara bersistematik 24/7.',
      syllabus: [
        'Pencarian Ayat & Tafsir Terjemahan Tepat',
        'Nota Ringkas & Ringkasan Subjek STAM',
        'Bank Soalan & Latihan Topikal Interaktif',
        'Akses Segera Di Telegram Bila-bila Masa',
        'Pakej Lesen Individu & Pakej Pendidik/Sekolah'
      ],
      duration: 'Akses Telegram 24/7',
      level: 'Pelajar & Guru STAM',
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  return (
    <section id="kursus" style={{ padding: '5rem 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            backgroundColor: '#eff6ff',
            color: '#2563eb',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            <Layers size={16} /> Program & Produk Utama
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Penawaran Latihan & Produk Pendidikan PintarTech
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.6' }}>
            Kuasai kemahiran teknologi melalui kelas latihan, atau dapatkan produk pendidikan inovatif kami seperti Edu Games dan TafsirBot STAM.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f1f5f9',
            padding: '0.5rem',
            borderRadius: '20px',
            marginTop: '1.8rem',
            maxWidth: '100%'
          }}>
            {[
              { id: 'all', label: 'Semua Penawaran' },
              { id: 'excel', label: 'Kelas Asas Excel' },
              { id: 'appsheet', label: 'Kelas AppSheet' },
              { id: 'edugame', label: 'Edu Games' },
              { id: 'ai', label: 'TafsirBot AI' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: '14px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  whiteSpace: 'nowrap',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeTab === tab.id ? '#ffffff' : 'transparent',
                  color: activeTab === tab.id ? '#059669' : '#64748b',
                  boxShadow: activeTab === tab.id ? '0 4px 14px rgba(5, 150, 105, 0.15)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: `1.5px solid ${course.borderTheme}`,
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${course.colorTheme}1a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div>
                {/* Header Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: course.bgTheme,
                    color: course.colorTheme,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${course.borderTheme}`
                  }}>
                    {course.icon}
                  </div>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: course.bgTheme,
                    color: course.badgeColor,
                    border: `1px solid ${course.borderTheme}`
                  }}>
                    {course.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.6rem' }}>
                  {course.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {course.description}
                </p>

                {/* Meta details */}
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#64748b', fontWeight: '600', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={15} /> {course.duration}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={15} /> {course.level}</span>
                </div>

                {/* Syllabus Checklist */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
                    Modul / Ciri-Ciri Utama:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {course.syllabus.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#334155' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: course.bgTheme, color: course.colorTheme, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={13} fontWeight="bold" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links */}
              <div>
                {course.isEduGamesAnchor ? (
                  <a
                    href="#edugames"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      width: '100%',
                      backgroundColor: course.colorTheme,
                      color: '#ffffff',
                      padding: '0.9rem',
                      borderRadius: '14px',
                      fontWeight: '700',
                      fontSize: '0.98rem',
                      textDecoration: 'none',
                      boxShadow: `0 8px 20px ${course.colorTheme}28`
                    }}
                  >
                    <Gamepad2 size={18} />
                    {course.btnText}
                  </a>
                ) : (
                  <Link
                    to={course.linkTarget}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      width: '100%',
                      backgroundColor: course.colorTheme,
                      color: '#ffffff',
                      padding: '0.9rem',
                      borderRadius: '14px',
                      fontWeight: '700',
                      fontSize: '0.98rem',
                      textDecoration: 'none',
                      boxShadow: `0 8px 20px ${course.colorTheme}28`
                    }}
                  >
                    {course.btnText}
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
