import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  FileSpreadsheet, 
  Gamepad2, 
  Bot, 
  CheckCircle2, 
  Zap,
  Layers
} from 'lucide-react';
import AppSheetIcon from './AppSheetIcon';

export default function PintartechHero() {
  return (
    <section id="utama" style={{ paddingTop: '3.5rem', paddingBottom: '4.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '15%',
        width: '500px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(5, 150, 105, 0.08) 50%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        top: '50px',
        right: '10%',
        width: '450px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(244, 63, 94, 0.08) 50%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              backgroundColor: '#f5f3ff',
              border: '1px solid #ddd6fe',
              color: '#7c3aed',
              fontSize: '0.88rem',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={16} style={{ color: '#059669' }} />
              Pusat Teknologi & Pendidikan Digital (PintarTech)
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: '2.75rem',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}>
              Memperkasakan Kemahiran <span style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 40%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Teknologi & Aplikasi</span> Pendidikan
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '2rem',
              maxWidth: '560px'
            }}>
              Satu portal lengkap menyediakan <strong>Kelas Asas Excel</strong>, <strong>Kelas AppSheet (No-Code App)</strong>, <strong>Koleksi Edu Games (Pintar Arabic, Jawi & Matematik Kids)</strong>, serta <strong>TafsirBot STAM</strong>.
            </p>

            {/* Genuine Feature Checkpoints */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem 1.2rem', marginBottom: '2.2rem' }}>
              {[
                'Modul 100% Praktikal & Amali',
                'Pendidikan Interaktif & Inovatif',
                'Sesuai Asas Hingga Lanjutan',
                'Penyelesaian Khas & Terus Boleh Digunakan'
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.95rem', fontWeight: '600', color: '#334155' }}>
                  <CheckCircle2 size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#kursus"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #7c3aed 100%)',
                  padding: '1rem 2.2rem',
                  fontSize: '1.05rem',
                  color: '#ffffff'
                }}
              >
                Terokai Program & Produk
                <ArrowRight size={20} />
              </a>

              <Link
                to="/tafsirbotSTAM"
                className="btn-secondary"
                style={{
                  borderColor: 'rgba(37, 99, 235, 0.35)',
                  color: '#2563eb',
                  padding: '1rem 2rem',
                  fontSize: '1.05rem',
                  backgroundColor: '#ffffff'
                }}
              >
                <Bot size={20} />
                TafsirBot STAM
              </Link>
            </div>

            {/* Value Pillars Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #e2e8f0'
            }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Zap size={18} /> Modul Amali
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '600', marginTop: '0.2rem' }}>Aplikasi Terus Dalam Tugas</div>
              </div>

              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f43f5e', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Gamepad2 size={18} /> Edu Games
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '600', marginTop: '0.2rem' }}>Pintar Kids Games</div>
              </div>

              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0088cc', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bot size={18} /> AI STAM
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '600', marginTop: '0.2rem' }}>Pilihan Calon STAM</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Cards Hub */}
          <div style={{ position: 'relative' }}>
            {/* Background Showcase Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.12)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={22} style={{ color: '#2563eb' }} />
                  Ekosistem PintarTech
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' }}>
                  Terkini 2026
                </span>
              </div>

              {/* 4 Core Offerings Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                
                {/* 1. Excel (Official Excel Green Theme) */}
                <Link to="/kelasexcel" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '18px',
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    transition: 'transform 0.2s ease',
                    height: '100%'
                  }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                      <FileSpreadsheet size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#064e3b', marginBottom: '0.25rem' }}>Kelas Asas Excel</h4>
                    <p style={{ fontSize: '0.8rem', color: '#047857', lineHeight: '1.4' }}>Pengenalan, Formula & Data Asas</p>
                  </div>
                </Link>

                {/* 2. AppSheet (Purple Violet Accent) */}
                <Link to="/kelasappsheet" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '18px',
                    backgroundColor: '#f5f3ff',
                    border: '1px solid #ddd6fe',
                    transition: 'transform 0.2s ease',
                    height: '100%'
                  }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#7c3aed', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                      <AppSheetIcon size={26} />
                    </div>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#5b21b6', marginBottom: '0.25rem' }}>Kelas AppSheet</h4>
                    <p style={{ fontSize: '0.8rem', color: '#6d28d9', lineHeight: '1.4' }}>Bina App Perniagaan No-Code</p>
                  </div>
                </Link>

                {/* 3. Edu Games (Friendly Coral Rose Accent) */}
                <a href="#edugames" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '18px',
                    backgroundColor: '#fff1f2',
                    border: '1px solid #fecdd3',
                    transition: 'transform 0.2s ease',
                    height: '100%'
                  }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#f43f5e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                      <Gamepad2 size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#9f1239', marginBottom: '0.25rem' }}>Edu Games</h4>
                    <p style={{ fontSize: '0.8rem', color: '#e11d48', lineHeight: '1.4' }}>Arabic, Jawi & Matematik Kids</p>
                  </div>
                </a>

                {/* 4. TafsirBot AI (Telegram Blue Accent) */}
                <Link to="/tafsirbotSTAM" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '18px',
                    backgroundColor: '#e8f5fe',
                    border: '1px solid #bbeeef',
                    transition: 'transform 0.2s ease',
                    height: '100%'
                  }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#0088cc', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                      <Bot size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#0088cc', marginBottom: '0.25rem' }}>TafsirBot STAM</h4>
                    <p style={{ fontSize: '0.8rem', color: '#0088cc', lineHeight: '1.4' }}>Sistem AI Pembantu STAM Telegram</p>
                  </div>
                </Link>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
