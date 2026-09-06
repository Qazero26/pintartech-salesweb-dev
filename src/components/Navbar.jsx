import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Send, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          minWidth: 0
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #229ED9 0%, #0088cc 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(34, 158, 217, 0.35)',
            flexShrink: 0
          }}>
            <Bot size={24} color="#ffffff" />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap'
            }}>
              <span>TafsirBot</span>
              <span className="hide-mobile-sm" style={{ fontSize: '0.72rem', padding: '1px 6px', background: 'var(--telegram-ice)', color: 'var(--telegram-dark-blue)', borderRadius: '4px', fontWeight: 800, border: '1px solid rgba(34, 158, 217, 0.3)' }}>STAM LATEST</span>
            </div>
            <div className="hide-mobile-sm" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Oleh PintarTech • pintartech.my
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="desktop-links" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Back to PintarTech Home */}
          <Link
            to="/"
            style={{
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '800',
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#eff6ff',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid #bfdbfe',
              transition: 'all 0.2s ease'
            }}
          >
            <GraduationCap size={16} />
            <span>Utama (PintarTech)</span>
          </Link>

          <a href="#pengenalan" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#229ED9'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Apa Itu Bot?</a>
          <a href="#modul" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#229ED9'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Modul Utama</a>
          <a href="#silibus" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#229ED9'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Silibus STAM</a>
          <a href="#harga" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#229ED9'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Pelan Harga</a>
          <a href="#faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#229ED9'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>FAQ</a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* Desktop CTA Button */}
          <a href="https://t.me/Ustaimantafsirbot" target="_blank" rel="noopener noreferrer" className="btn-primary desktop-cta" style={{ padding: '0.55rem 1.15rem', fontSize: '0.88rem' }}>
            <Send size={15} />
            <span>Mula Percuma</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'var(--telegram-ice)',
              border: '1px solid rgba(34, 158, 217, 0.3)',
              color: 'var(--telegram-dark-blue)',
              cursor: 'pointer',
              padding: '0.45rem',
              borderRadius: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '2px solid var(--border-telegram)',
          padding: '1.25rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
        }}>
          {/* Mobile Back to PintarTech Home Link */}
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            style={{ 
              color: '#2563eb', 
              textDecoration: 'none', 
              fontWeight: 800, 
              fontSize: '1rem', 
              padding: '0.6rem 0.85rem',
              backgroundColor: '#eff6ff',
              borderRadius: '10px',
              border: '1px solid #bfdbfe',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <GraduationCap size={18} />
            <span>Laman Utama PintarTech</span>
          </Link>

          <a href="#pengenalan" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', padding: '0.4rem 0' }}>Apa Itu Bot?</a>
          <a href="#modul" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', padding: '0.4rem 0' }}>Modul Utama</a>
          <a href="#silibus" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', padding: '0.4rem 0' }}>Silibus STAM KBD MATED</a>
          <a href="#mockups" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', padding: '0.4rem 0' }}>Paparan Mockup</a>
          <a href="#harga" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', padding: '0.4rem 0' }}>Pelan Harga Diskaun</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', padding: '0.4rem 0' }}>FAQ</a>
          
          <div style={{ height: '1px', background: 'var(--border-light)', margin: '0.5rem 0' }} />

          <a href="https://t.me/Ustaimantafsirbot" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '0.85rem' }}>
            <Send size={18} />
            <span>Mula Percuma di Telegram @Ustaimantafsirbot</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 480px) {
          .hide-mobile-sm { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
