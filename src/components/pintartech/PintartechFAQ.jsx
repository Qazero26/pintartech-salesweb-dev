import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail } from 'lucide-react';

export default function PintartechFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Adakah kelas PintarTech (Excel / AppSheet) sesuai untuk peserta tanpa asas?',
      a: 'Ya, betul! Semua kelas kami direka dari tahap asas hingga ke peringkat amali. Penerangan diajar secara jelas dengan pendekatan praktikal supaya mudah difahami.'
    },
    {
      q: 'Apakah keperluan untuk mengikuti Kelas AppSheet?',
      a: 'Anda hanya memerlukan komputer/laptop dengan sambungan internet dan akaun Google (Google Sheets). Tiada perisian berbayar berasingan yang wajib dibeli.'
    },
    {
      q: 'Bagaimana cara memainkan Edu Games (Pintar Arabic Kids, Pintar Jawi Kids, dll)?',
      a: 'Edu Games kami dibina dalam bentuk pautan web interaktif yang mesra pelayar web (Web Browser) pada Telefon Smart, Tablet, Komputer atau Laptop.'
    },
    {
      q: 'Apa itu TafsirBot STAM dan bagaimana saya boleh mengaksesnya?',
      a: 'TafsirBot STAM ialah pembantu pintar di Telegram khas untuk calon STAM mendalami Tafsir Al-Quran. Melalui laluan pintartech.my/tafsirbotSTAM, anda boleh melihat maklumat modul dan melanggannya secara terus.'
    }
  ];

  return (
    <section id="faq" style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
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
            <HelpCircle size={16} /> Soalan Lazim (FAQ)
          </div>

          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Ada Soalan? Kami Ada Jawapannya
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.6' }}>
            Berikut adalah jawapan kepada soalan yang biasa ditanya mengenai kelas, produk Edu Games, dan sistem TafsirBot STAM.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: isOpen ? '#eff6ff' : '#f8fafc',
                  borderRadius: '16px',
                  border: isOpen ? '1.5px solid #bfdbfe' : '1px solid #e2e8f0',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: isOpen ? '#1e3a8a' : '#0f172a'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} style={{ color: '#2563eb' }} /> : <ChevronDown size={20} style={{ color: '#64748b' }} />}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    fontSize: '0.98rem',
                    color: '#334155',
                    lineHeight: '1.65',
                    borderTop: '1px solid #dbeafe',
                    paddingTop: '1rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Email Callout Box */}
        <div style={{
          maxWidth: '800px',
          margin: '2.5rem auto 0',
          backgroundColor: '#eff6ff',
          border: '1.5px solid #bfdbfe',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '0.2rem' }}>
              Masih Ada Soalan Lain?
            </div>
            <div style={{ fontSize: '0.92rem', color: '#475569' }}>
              Hubungi pasukan sokongan rasmi kami untuk sebarang bantuan atau pertanyaan lanjut.
            </div>
          </div>

          <a
            href="mailto:support@pintartech.my"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '0.75rem 1.35rem',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.22)',
              transition: 'transform 0.2s ease'
            }}
          >
            <Mail size={18} />
            support@pintartech.my
          </a>
        </div>

      </div>
    </section>
  );
}
