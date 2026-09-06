import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Menu, 
  X, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export default function PintartechNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Utama', href: '#utama' },
    { name: 'Kelas & Program', href: '#kursus' },
    { name: 'Edu Games', href: '#edugames' },
    { name: 'Fokus Kami', href: '#keunggulan' },
    { name: 'Soalan Lazim', href: '#faq' },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(248, 250, 252, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(37, 99, 235, 0.15)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 8px 24px rgba(37, 99, 235, 0.08)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            border: '1.5px solid #bfdbfe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.12)'
          }}>
            <img src="/pintartech-logo.svg" alt="PintarTech Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{
              fontSize: '1.45rem',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              PintarTech
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#2563eb', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Tech & Education Hub
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#334155',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#2563eb'}
              onMouseLeave={(e) => e.target.style.color = '#334155'}
            >
              {link.name}
            </a>
          ))}

          {/* Special Link to TafsirBot STAM */}
          <Link
            to="/tafsirbotSTAM"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1.1rem',
              borderRadius: '9999px',
              backgroundColor: '#e8f5fe',
              border: '1px solid rgba(34, 158, 217, 0.35)',
              color: '#0088cc',
              fontWeight: '700',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0088cc';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e8f5fe';
              e.currentTarget.style.color = '#0088cc';
            }}
          >
            <Bot size={16} />
            TafsirBot STAM
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.5rem 1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/tafsirbotSTAM"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.8rem 1.2rem',
              borderRadius: '12px',
              backgroundColor: '#e8f5fe',
              color: '#0088cc',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bot size={20} /> TafsirBot STAM (Produk AI)
            </span>
            <ChevronRight size={18} />
          </Link>
        </div>
      )}

      {/* CSS Helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
