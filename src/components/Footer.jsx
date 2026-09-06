import React from 'react';
import { Bot, ShieldCheck, Globe, Cpu, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-white)',
      borderTop: '1px solid var(--border-light)',
      padding: '4rem 0 2rem 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Top Company Banner */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '1.75rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--telegram-ice) 0%, #e0f2fe 100%)',
          border: '1px solid var(--border-telegram)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--telegram-dark-blue)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.35rem' }}>
            <Cpu size={22} color="#0088cc" />
            <span>Inovasi Teknologi Pendidikan Oleh PintarTech</span>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Peneraju Solusi Digital STAM Malaysia • Layari laman rasmi kami di <a href="https://pintartech.my" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--telegram-dark-blue)', fontWeight: 800, textDecoration: 'underline' }}>pintartech.my</a> • Emel Sokongan: <a href="mailto:support@pintartech.my" style={{ color: 'var(--telegram-dark-blue)', fontWeight: 800, textDecoration: 'underline' }}>support@pintartech.my</a>
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '3rem',
          marginBottom: '3rem'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #229ED9 0%, #0088cc 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Bot size={24} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                  TafsirBot <span style={{ color: '#0088cc' }}>STAM</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Produk PintarTech (pintartech.my)
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Pembantu AI & Ekosistem Ulangkaji STAM Terlengkap khusus untuk subjek Tafsir wa Ulumuhu Sijil Tinggi Agama Malaysia.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--telegram-dark-blue)', fontSize: '0.85rem', fontWeight: 700 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Globe size={16} />
                <span>Syarikat: PintarTech • pintartech.my</span>
              </div>
              <a href="mailto:support@pintartech.my" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0088cc', textDecoration: 'none' }}>
                <Mail size={16} />
                <span>support@pintartech.my</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>
              Pautan Pantas
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <a href="#pengenalan" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>Apa Itu Bot?</a>
              <a href="#modul" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>Modul Utama</a>
              <a href="#silibus" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>Silibus STAM Latest</a>
              <a href="#mockups" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>Paparan Mockup</a>
              <a href="#harga" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>Pelan Harga</a>
              <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>Soalan Lazim</a>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>
              Modul Pembelajaran
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              <span>• Kuiz Interaktif & Timer</span>
              <span>• Mod Cabaran /duel</span>
              <span>• Flashcards Mufradat</span>
              <span>• Graf Analitis /mystats</span>
              <span>• Leaderboard Top Scorer</span>
              <span>• Tutor AI Ustaz Aiman</span>
            </div>
          </div>

          {/* Dedicated Support Email Column */}
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>
              Hubungi Sokongan Rasmi
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5, fontWeight: 500 }}>
              Untuk sebarang bantuan, pertanyaan, atau urusan berkaitan PintarTech dan TafsirBot STAM, hubungi emel rasmi kami:
            </p>
            <a 
              href="mailto:support@pintartech.my" 
              className="btn-primary" 
              style={{ 
                padding: '0.75rem 1.1rem', 
                fontSize: '0.88rem', 
                width: '100%',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Mail size={18} />
              <span>support@pintartech.my</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          © {new Date().getFullYear()} <a href="https://pintartech.my" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--telegram-dark-blue)', textDecoration: 'underline' }}>PintarTech (pintartech.my)</a>. Emel Sokongan: <a href="mailto:support@pintartech.my" style={{ color: 'var(--telegram-dark-blue)', textDecoration: 'underline' }}>support@pintartech.my</a>. Hak Cipta Terpelihara.
        </div>

      </div>

      <style>{`
        @media (max-width: 868px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
