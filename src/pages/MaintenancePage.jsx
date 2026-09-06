import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, ArrowLeft, Bot, GraduationCap, Mail } from 'lucide-react';

export default function MaintenancePage({ title = "Halaman", category = "Produk & Kelas" }) {
  return (
    <div className="pintartech-theme" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f8fafc' }}>
      
      {/* Header */}
      <header style={{ padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              border: '1.5px solid #bfdbfe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px'
            }}>
              <img src="/pintartech-logo.svg" alt="PintarTech Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a' }}>PintarTech</span>
          </Link>

          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#2563eb',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '0.92rem'
            }}
          >
            <ArrowLeft size={18} /> Laman Utama
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          padding: '3.5rem 2.5rem',
          maxWidth: '620px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(37, 99, 235, 0.08)',
          border: '1.5px solid #bfdbfe'
        }}>
          
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            backgroundColor: '#eff6ff',
            color: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '1px solid #bfdbfe'
          }}>
            <Construction size={42} />
          </div>

          <span style={{
            fontSize: '0.8rem',
            fontWeight: '800',
            padding: '0.35rem 0.9rem',
            borderRadius: '9999px',
            backgroundColor: '#e0f2fe',
            color: '#0284c7',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            {category} • Penyelenggaraan
          </span>

          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            {title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Halaman ini sedang dalam proses kemaskini & penyelenggaraan akhir. Sila kembali semula tidak lama lagi untuk maklumat lengkap pendaftaran.
          </p>

          {/* Support Email Callout */}
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            padding: '1rem 1.25rem',
            border: '1px solid #e2e8f0',
            fontSize: '0.9rem',
            color: '#334155',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Mail size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
            <span>Ada pertanyaan? Emel kami di <a href="mailto:support@pintartech.my" style={{ color: '#2563eb', fontWeight: '800', textDecoration: 'underline' }}>support@pintartech.my</a></span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #0284c7 100%)',
                color: '#ffffff',
                padding: '0.85rem 1.8rem',
                borderRadius: '12px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)'
              }}
            >
              <ArrowLeft size={18} />
              Kembali ke Laman Utama
            </Link>

            <Link
              to="/tafsirbotSTAM"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#e8f5fe',
                border: '1px solid rgba(34, 158, 217, 0.35)',
                color: '#0088cc',
                padding: '0.85rem 1.8rem',
                borderRadius: '12px',
                fontWeight: '700',
                textDecoration: 'none'
              }}
            >
              <Bot size={18} />
              TafsirBot STAM
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '1.5rem 0', textAlign: 'center', borderTop: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem', backgroundColor: '#ffffff' }}>
        © {new Date().getFullYear()} <strong>PintarTech</strong> (pintartech.my). Emel Sokongan: <a href="mailto:support@pintartech.my" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@pintartech.my</a>
      </footer>

    </div>
  );
}
