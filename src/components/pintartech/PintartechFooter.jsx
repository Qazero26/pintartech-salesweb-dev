import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Bot, FileSpreadsheet, Smartphone, Gamepad2, Mail } from 'lucide-react';

export default function PintartechFooter() {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', paddingTop: '3.5rem', paddingBottom: '2.5rem', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid #1e293b'
        }}>
          
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                <img src="/pintartech-logo.svg" alt="PintarTech Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>PintarTech</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              Pusat Inovasi Teknologi & Pendidikan (Tech & Education Hub). Fokus kepada Kelas Excel, AppSheet No-Code, Edu Games, & Pembantu AI TafsirBot STAM.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', fontWeight: '700' }}>
              <div style={{ color: '#60a5fa' }}>pintartech.my</div>
              <a 
                href="mailto:support@pintartech.my" 
                style={{ color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              >
                <Mail size={16} /> support@pintartech.my
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '700', marginBottom: '1.2rem' }}>Program & Kelas</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/kelasexcel" style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><FileSpreadsheet size={15} /> Kelas Microsoft Excel</Link></li>
              <li><Link to="/kelasappsheet" style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Smartphone size={15} /> Kelas AppSheet No-Code</Link></li>
              <li><a href="#edugames" style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Gamepad2 size={15} /> Edu Games & Gamifikasi</a></li>
              <li><Link to="/tafsirbotSTAM" style={{ color: '#0088cc', textDecoration: 'none', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Bot size={15} /> TafsirBot STAM (AI)</Link></li>
            </ul>
          </div>

          {/* Navigasi & Hubungi */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '700', marginBottom: '1.2rem' }}>Pautan & Sokongan</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#utama" style={{ color: '#94a3b8', textDecoration: 'none' }}>Laman Utama</a></li>
              <li><a href="#keunggulan" style={{ color: '#94a3b8', textDecoration: 'none' }}>Fokus Kami</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Soalan Lazim (FAQ)</a></li>
              <li><Link to="/tafsirbotSTAM" style={{ color: '#94a3b8', textDecoration: 'none' }}>Laman Jualan TafsirBot STAM</Link></li>
              <li style={{ marginTop: '0.4rem' }}>
                <a href="mailto:support@pintartech.my" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={15} /> support@pintartech.my
                </a>
              </li>
            </ul>
          </div>

          {/* Edu Games Direct Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '700', marginBottom: '1.2rem' }}>Koleksi Edu Games</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/pintararabickids" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pintar Arabic Kids</Link></li>
              <li><Link to="/pintarjawikids" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pintar Jawi Kids</Link></li>
              <li><Link to="/pintarmathkids" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pintar Math Kids</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '2rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>PintarTech</strong> (pintartech.my). Hak Cipta Terpelihara. Emel: <a href="mailto:support@pintartech.my" style={{ color: '#94a3b8', textDecoration: 'underline' }}>support@pintartech.my</a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            <Link to="/tafsirbotSTAM" style={{ color: '#0088cc', textDecoration: 'none' }}>pintartech.my/tafsirbotSTAM</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
