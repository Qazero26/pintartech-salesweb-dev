import React from 'react';
import { Star, Award, Heart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Uzair',
      role: 'Pelajar STAM',
      score: 'Mumtaz',
      quote: 'Sebelum ini saya kerap keliru dengan huraian mufradat dan murad ayat. Sejak guna Tafsir Bot Ustaz Aiman, saya boleh terus tanya kat Telegram bila-bila masa ulangkaji malam! Alhamdulillah jawapan sangat tepat ikut kitab rasmi.',
      stars: 5
    },
    {
      name: 'Faiz Farhan',
      role: 'Calon STAM',
      score: 'Mumtaz Safi',
      quote: 'Ciri paling best ialah mod /duel dengan kawan sekelas dan flashcard mufradat! Bila boring baca buku, kami berentap kuiz terus dalam group Telegram. Mengulang jadi sangat seronok dan tidak mengantuk!',
      stars: 5
    },
    {
      name: 'Ustaz Fakhrullah',
      role: 'Guru Subjek Tafsir STAM',
      score: 'Rekomendasi Guru',
      quote: 'Aplikasi yang sangat canggih dan membantu pelajar. Penggunaan teknologi RAG Gemini memastikan maklumat tafsir terpelihara mengikut silibus terbaharu tanpa risiko AI mereka-reka jawapan palsu. Syabas!',
      stars: 5
    }
  ];

  return (
    <section className="bg-light-pattern" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill badge-amber" style={{ marginBottom: '1rem' }}>
            <Award size={16} />
            <span>Kisah Kejayaan Calon STAM</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--indigo-900)',
            marginBottom: '1rem'
          }}>
            Apa Kata <span className="gradient-text-indigo">Pelajar & Guru STAM?</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Dengarkan maklum balas daripada calon-calon STAM yang telah membuktikan keberkesanan Tafsir Bot.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="clean-card" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              background: 'var(--bg-light)',
              border: '1px solid var(--border-light)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(rev.stars)].map((_, sIdx) => (
                      <Star key={sIdx} size={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="badge-pill" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                    {rev.score}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  "{rev.quote}"
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--indigo-900)' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {rev.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
