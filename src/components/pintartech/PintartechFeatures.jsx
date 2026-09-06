import React from 'react';
import { 
  Laptop, 
  Gamepad2, 
  Bot, 
  Zap,
  Sliders
} from 'lucide-react';

export default function PintartechFeatures() {
  const featureList = [
    {
      icon: <Laptop size={28} />,
      title: 'Penerangan Praktikal & Mudah Difahami',
      color: '#2563eb',
      bgColor: '#eff6ff',
      description: 'Latihan direka secara terus amali. Anda diajar langkah demi langkah yang praktikal supaya mudah dipraktikkan secara realistik.'
    },
    {
      icon: <Gamepad2 size={28} />,
      title: 'Produk Pendidikan Interaktif & Seronok',
      color: '#f43f5e',
      bgColor: '#fff1f2',
      description: 'Koleksi Edu Games seperti Pintar Arabic Kids & Pintar Jawi Kids membantu anak-anak belajar agama & bahasa dengan kaedah menyeronokkan.'
    },
    {
      icon: <Bot size={28} />,
      title: 'Sistem AI Khas STAM',
      color: '#0088cc',
      bgColor: '#e8f5fe',
      description: 'Pembangunan TafsirBot STAM memberi ruang kepada calon STAM dan pelajar Pengajian Islam mengakses nota dan jawapan di Telegram.'
    },
    {
      icon: <Sliders size={28} />,
      title: 'Fleksibel & Boleh Disesuaikan',
      color: '#d97706',
      bgColor: '#fffbe3',
      description: 'Sama ada latihan Excel, sistem AppSheet, atau Edu Games, penawaran kami sedia disesuaikan mengikut keutamaan anda.'
    }
  ];

  return (
    <section id="keunggulan" className="bg-tech-pattern" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
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
            <Zap size={16} /> Fokus & Pendekatan PintarTech
          </div>

          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Komitmen Kami Dalam Menawarkan Solusi Teknologi & Pendidikan
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.6' }}>
            PintarTech memfokuskan kepada kualiti modul latihan yang amali serta produk pendidikan digital yang benar-benar memberi manfaat.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {featureList.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.boxShadow = `0 10px 25px ${item.color}15`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.02)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                backgroundColor: item.bgColor,
                color: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.6rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
