import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, CheckCircle2, XCircle, Sparkles, Send, Award } from 'lucide-react';

export default function PromotionalCallouts() {
  return (
    <section id="kelebihan" className="bg-light-pattern" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill badge-amber" style={{ marginBottom: '1rem' }}>
            <Award size={16} />
            <span>Transformasi Pembelajaran STAM</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Mengapa Calon STAM Perlukan <span className="gradient-text-telegram">Sistem Tafsir Bot Ini?</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Ubah cara ulangkaji tradisional yang perlahan kepada kaedah digital interaktif yang pantas, tepat, dan menyeronokkan.
          </p>
        </div>

        {/* Comparison Grid: Traditional vs Tafsir Bot */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          marginBottom: '5rem'
        }} className="comparison-grid">
          
          {/* Traditional Way */}
          <div className="clean-card" style={{ padding: '2.5rem', background: '#fef2f2', border: '1px solid #fecaca' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <XCircle size={28} color="#ef4444" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#991b1b' }}>
                Ulangkaji Cara Lama (Sukar & Membosankan)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#7f1d1d' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ color: '#ef4444', fontWeight: 800 }}>•</span>
                <span>Terpaksa selak buku teks tebal beratus muka surat untuk cari 1 maksud mufradat.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ color: '#ef4444', fontWeight: 800 }}>•</span>
                <span>Tiada tutor atau guru untuk bertanya soalan bila mengulang di luar waktu sekolah.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ color: '#ef4444', fontWeight: 800 }}>•</span>
                <span>Bank soalan latihan terhad dan tiada semakan jawapan secara serta-merta.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ color: '#ef4444', fontWeight: 800 }}>•</span>
                <span>Mudah hilang fokus dan mengantuk semasa membaca teks kitab Arab.</span>
              </div>
            </div>
          </div>

          {/* Tafsir Bot Way */}
          <div className="clean-card" style={{ padding: '2.5rem', background: 'var(--telegram-ice)', border: '2px solid var(--telegram-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={28} color="var(--telegram-dark-blue)" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Bersama Tafsir Bot STAM (Pantas & Cemerlang)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--telegram-dark-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Carian maksud mufradat, asbabun nuzul & I'rab sekelip mata dengan pantas.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--telegram-dark-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Lebih 2,500+ bank soalan kuiz bertimer (Mufradat, Tafsir, Bahasa, Pengajaran Ayat & KBAT) serta mod duel live.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--telegram-dark-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Ustaz Aiman Tutor AI bersedia 24 jam sehari menjawab musykil subjek STAM.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--telegram-dark-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Pantau kemajuan ulangkaji dengan Kad Prestasi & Graf Visual /mystats.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Big Promotional Banner */}
        <div className="clean-card" style={{
          padding: '3.5rem 2.5rem',
          background: 'linear-gradient(135deg, #0088cc 0%, #229ED9 100%)',
          color: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(34, 158, 217, 0.35)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }} />

          <span className="badge-pill badge-amber" style={{ marginBottom: '1.25rem' }}>
            🚀 Mula Ulangkaji Hari Ini
          </span>

          <h3 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.2,
            color: '#ffffff'
          }}>
            Sedia Untuk Mencapai Keputusan <span style={{ color: '#fef08a' }}>Mumtaz STAM?</span>
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: '#e0f2fe',
            maxWidth: '650px',
            margin: '0 auto 2.25rem auto',
            lineHeight: 1.6
          }}>
            Dapatkan akses serta-merta ke Telegram Bot Ustaz Aiman. Cuba 2,500+ bank soalan kuiz (KBAT, Mufradat, Tafsir & Bahasa), flashcard, dan soalan AI percuma sekarang!
          </p>

          <a
            href="https://t.me/Ustaimantafsirbot"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              background: '#ffffff',
              color: '#0088cc',
              fontSize: '1.1rem',
              fontWeight: 800,
              padding: '1.1rem 2.5rem',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <Send size={20} color="#0088cc" />
            <span style={{ color: '#0088cc', fontWeight: 800 }}>Mula Percuma di Telegram @Ustaimantafsirbot</span>
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .comparison-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
