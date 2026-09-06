import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  X, 
  FileSpreadsheet, 
  Gamepad2, 
  Bot, 
  ArrowUp,
  ChevronRight
} from 'lucide-react';

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 999 }}>
      
      {/* Expanded Quick Menu Popup */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '68px',
          right: 0,
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '1.25rem 1.1rem',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.16)',
          border: '1.5px solid #dbeafe',
          minWidth: '260px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
          animation: 'fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '0.4rem',
            paddingRight: '0.2rem',
            marginBottom: '0.2rem'
          }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '800',
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}>
              Navigasi PintarTech
            </span>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#2563eb'
            }} />
          </div>

          {/* 1. Kelas Excel & AppSheet */}
          <a
            href="#kursus"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 0.95rem',
              borderRadius: '14px',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#1e3a8a',
              fontWeight: '700',
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FileSpreadsheet size={18} style={{ color: '#2563eb' }} />
              Kelas Excel & AppSheet
            </span>
            <ChevronRight size={16} style={{ color: '#2563eb' }} />
          </a>

          {/* 2. Edu Games */}
          <a
            href="#edugames"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 0.95rem',
              borderRadius: '14px',
              backgroundColor: '#fff1f2',
              border: '1px solid #fecdd3',
              color: '#9f1239',
              fontWeight: '700',
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Gamepad2 size={18} style={{ color: '#f43f5e' }} />
              Koleksi Edu Games
            </span>
            <ChevronRight size={16} style={{ color: '#f43f5e' }} />
          </a>

          {/* 3. TafsirBot STAM */}
          <Link
            to="/tafsirbotSTAM"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 0.95rem',
              borderRadius: '14px',
              backgroundColor: '#e8f5fe',
              border: '1px solid #bbeeef',
              color: '#0088cc',
              fontWeight: '700',
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bot size={18} style={{ color: '#0088cc' }} />
              TafsirBot STAM (AI)
            </span>
            <ChevronRight size={16} style={{ color: '#0088cc' }} />
          </Link>

          {/* 4. Scroll To Top */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.65rem',
              borderRadius: '12px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#475569',
              fontWeight: '700',
              fontSize: '0.82rem',
              cursor: 'pointer',
              marginTop: '0.2rem'
            }}
          >
            <ArrowUp size={16} />
            Ke Atas Halaman
          </button>

        </div>
      )}

      {/* Main Floating Trigger Button - Sleek White Glassmorphic Pill with Indigo Glow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.55rem',
          backgroundColor: isOpen ? '#1e293b' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          color: isOpen ? '#ffffff' : '#0f172a',
          padding: '0.7rem 1.25rem',
          borderRadius: '9999px',
          fontWeight: '800',
          fontSize: '0.88rem',
          border: isOpen ? '1.5px solid #334155' : '1.5px solid #2563eb',
          cursor: 'pointer',
          boxShadow: isOpen 
            ? '0 10px 25px rgba(15, 23, 42, 0.25)' 
            : '0 10px 30px rgba(37, 99, 235, 0.18)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        aria-label="Pilihan Menu"
      >
        {isOpen ? (
          <X size={18} style={{ color: '#ffffff' }} />
        ) : (
          <Sparkles size={18} style={{ color: '#2563eb' }} />
        )}
        <span>{isOpen ? 'Tutup Menu' : 'Pilihan Menu'}</span>
      </button>

    </div>
  );
}
